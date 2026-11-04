// The games of the challenge, one entry per game, in release order. Read by index.html and play.html.
// slug: the game's folder under play/; status: live | review | soon | dev | jam (soon: waiting to be submitted); cover: a 16:9 WebP in covers/;
// play: where the game's static build is served (play/<slug>/), publish.mjs copies the build there;
// links: secondary links shown small under the Play button. A game without play is listed but not playable yet.
// trailer: { src, sound } (sound: the file has an audio track); shots: screenshots, each with a <name>-thumb.webp beside it.
// Both come from tools/site-media.sh; a game without them shows its cover.
window.GAMES = [
  {
    "slug": "stardust",
    "title": "Cosmic Roguelike",
    "pitch": "A space roguelike: every life is a star's life, from a speck of dust to its collapse. Upgrade between lives and grow far enough to become a black hole.",
    "author": "Artem",
    "status": "live",
    "statusText": "Play free",
    "date": "2026-10-28",
    "cover": "covers/stardust.webp",
    "trailer": { "src": "media/stardust/trailer.mp4", "sound": true },
    "shots": ["media/stardust/1.webp", "media/stardust/2.webp", "media/stardust/3.webp", "media/stardust/4.webp", "media/stardust/5.webp", "media/stardust/6.webp"],
    "play": "play/stardust/",
    "links": [
      { "label": "Ludum Dare 60 jam version", "url": "https://ldjam.com/events/ludum-dare/60/stardust" }
    ]
  },
  {
    "slug": "monkey-clicker",
    "title": "Monkey Clicker",
    "pitch": "Can a monkey write Hamlet? Type Shakespeare, hire monkeys to type for you and grow to a whole Monkey City.",
    "author": "Artem",
    "status": "live",
    "statusText": "Play free",
    "date": "2026-10-26",
    "cover": "covers/monkey-clicker.webp",
    "trailer": { "src": "media/monkey-clicker/trailer.mp4", "sound": false },
    "shots": ["media/monkey-clicker/1.webp", "media/monkey-clicker/2.webp", "media/monkey-clicker/3.webp", "media/monkey-clicker/4.webp"],
    "play": "play/monkey-clicker/",
    "links": []
  },
  {
    "slug": "totalizator",
    "title": "Totalizator",
    "pitch": "How many accountants does it take to beat a gorilla? The bettors only see the numbers, so fight when they bet against you and win big.",
    "author": "Artem with Igor",
    "status": "live",
    "statusText": "Play free",
    "date": "2026-10-27",
    "cover": "covers/totalizator.webp",
    "trailer": { "src": "media/totalizator/trailer.mp4", "sound": false },
    "shots": ["media/totalizator/1.webp", "media/totalizator/2.webp", "media/totalizator/3.webp", "media/totalizator/4.webp", "media/totalizator/5.webp"],
    "play": "play/totalizator/",
    "links": []
  },
  { "slug": "ogonek", "title": "Ogonek", "pitch": "A burner festival on a Bali mountain, and you have a flamethrower. Burning dancers spread the fire: burn every camp down, beat the DJ, then leave no trace.", "author": "Artem", "status": "dev", "statusText": "Fresh build", "date": "2026-11-02", "cover": "covers/ogonek.webp", "trailer": { "src": "media/ogonek/trailer.mp4", "sound": false }, "shots": ["media/ogonek/1.webp", "media/ogonek/2.webp", "media/ogonek/3.webp", "media/ogonek/4.webp", "media/ogonek/5.webp"], "play": "play/ogonek/", "links": [] }
];
