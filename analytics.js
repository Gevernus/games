// Anonymous visit stats for the challenge site, sent to the challenge's PostHog project (the same one as the games;
// every event carries game: 'site'). No cookies, nothing stored on the device: a new random id for each visit, handed from
// the landing to a game page in the link and taken off the address bar on arrival (so a shared link doesn't merge people).
// Labels and the outside referrer travel the same way, siteStats.carry() adds them to a link. The IP is
// dropped by the project's «Discard client IP data» (GeoIP runs before it, so the country stays). Sends only from the
// published host, and not when the browser asks Do Not Track. Never breaks the page: every failure is silent.
(() => {
  const KEY = 'phc_uH9aTG4iG4wTSKu53jZUUaaC79m429voYY4zzWCWZq6y'; // public write-only project key, as in the games' .env.production
  // our pass-through to PostHog (tools/ph-proxy): ad blockers list i.posthog.com, not this address
  const URL_E = 'https://72-56-88-42.sslip.io/e/';
  const on = location.hostname === 'gevernus.github.io' && navigator.doNotTrack !== '1';
  const rid = () => Array.from({ length: 16 }, () => Math.floor(Math.random() * 36).toString(36)).join('');
  const q = new URLSearchParams(location.search);
  const handed = q.get('v');
  const id = /^[a-z0-9]{16}$/.test(handed || '') ? handed : rid();
  const session = id;
  const LABELS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  let ref = '';
  try { ref = document.referrer ? new URL(document.referrer).hostname : ''; } catch {}
  if (ref === location.hostname) ref = 'self';
  const handedRef = q.get('r');
  if (/^[a-z0-9.-]{1,80}$/i.test(handedRef || '') && (!ref || ref === 'self')) ref = handedRef;
  try {
    if (q.has('v') || q.has('r')) {
      const clean = new URLSearchParams(q);
      clean.delete('v');
      clean.delete('r');
      const rest = clean.toString();
      history.replaceState(null, '', location.pathname + (rest ? `?${rest}` : '') + location.hash);
    }
  } catch {}
  // a link inside the site, with this visit's id, labels and outside referrer
  const carry = (url) => {
    const [path, hash] = url.split('#');
    const [base, query] = path.split('?');
    const out = new URLSearchParams(query || '');
    LABELS.forEach((k) => { if (q.get(k)) out.set(k, q.get(k)); });
    out.set('v', id);
    if (ref && ref !== 'self') out.set('r', ref);
    return `${base}?${out}${hash ? `#${hash}` : ''}`;
  };
  const every = {
    game: 'site',
    page: document.documentElement.dataset.page || (location.pathname.endsWith('play.html') ? 'play' : 'landing'), // a game's own page says data-page="game"
    referrer_host: ref || 'direct',
    utm_source: q.get('utm_source') || undefined,
    utm_medium: q.get('utm_medium') || undefined,
    utm_campaign: q.get('utm_campaign') || undefined,
    utm_content: q.get('utm_content') || undefined,
    mobile: matchMedia('(pointer: coarse)').matches,
    width: innerWidth,
  };
  const queue = [];
  const body = () => JSON.stringify({ api_key: KEY, batch: queue.splice(0) });
  const flush = (beacon) => {
    if (!on || !queue.length) return;
    try {
      const url = URL_E;
      const b = body();
      if (beacon && navigator.sendBeacon && navigator.sendBeacon(url, new Blob([b], { type: 'text/plain' }))) return;
      fetch(url, { method: 'POST', body: b, keepalive: true, headers: { 'Content-Type': 'text/plain' } }).catch(() => {});
    } catch {}
  };
  const track = (event, props = {}) => {
    if (!on) return;
    try {
      queue.push({ event, properties: { ...every, ...props, distinct_id: id, $session_id: session, $lib: 'site' }, timestamp: new Date().toISOString() });
      clearTimeout(track.t);
      track.t = setTimeout(() => flush(false), 2000);
    } catch {}
  };
  const leave = [];
  const bye = () => { leave.forEach((f) => { try { f(); } catch {} }); leave.length = 0; flush(true); };
  addEventListener('pagehide', bye);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') bye(); });
  window.siteStats = { track, carry, onLeave: (f) => leave.push(f) };
})();
