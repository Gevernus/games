// Anonymous visit stats for the challenge site, sent to the challenge's PostHog project (the same one as the games;
// every event carries game: 'site'). No cookies, nothing stored on the device: a new random id each page load, the IP is
// dropped by the project's «Discard client IP data» (GeoIP runs before it, so the country stays). Sends only from the
// published host, and not when the browser asks Do Not Track. Never breaks the page: every failure is silent.
(() => {
  const KEY = 'phc_uH9aTG4iG4wTSKu53jZUUaaC79m429voYY4zzWCWZq6y'; // public write-only project key, as in the games' .env.production
  const HOST = 'https://us.i.posthog.com';
  const on = location.hostname === 'gevernus.github.io' && navigator.doNotTrack !== '1';
  const rid = () => Array.from({ length: 16 }, () => Math.floor(Math.random() * 36).toString(36)).join('');
  const id = rid();
  const session = rid();
  const q = new URLSearchParams(location.search);
  let ref = '';
  try { ref = document.referrer ? new URL(document.referrer).hostname : ''; } catch {}
  const every = {
    game: 'site',
    page: location.pathname.endsWith('play.html') ? 'play' : 'landing',
    referrer_host: ref === location.hostname ? 'self' : ref || 'direct',
    utm_source: q.get('utm_source') || undefined,
    utm_campaign: q.get('utm_campaign') || undefined,
    mobile: matchMedia('(pointer: coarse)').matches,
    width: innerWidth,
  };
  const queue = [];
  const body = () => JSON.stringify({ api_key: KEY, batch: queue.splice(0) });
  const flush = (beacon) => {
    if (!on || !queue.length) return;
    try {
      const url = `${HOST}/batch/`;
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
  window.siteStats = { track, onLeave: (f) => leave.push(f) };
})();
