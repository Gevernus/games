// The games of the challenge, one entry per game, in release order. Read by index.html and play.html.
// slug: the game's folder under play/; status: live | review | soon | dev | jam (soon: waiting to be submitted); cover: a 16:9 WebP in covers/;
// play: where the game's static build is served (play/<slug>/), publish.mjs copies the build there;
// links: secondary links shown small under the Play button. A game without play is listed but not playable yet.
window.GAMES = [
  {
    "slug": "stardust",
    "title": "Cosmic Roguelike",
    "pitch": "A space roguelike: every life is a star's life, from a speck of dust to its collapse. Upgrade between lives and grow far enough to become a black hole.",
    "author": "Artem",
    "status": "soon",
    "statusText": "Coming to CrazyGames",
    "date": "2026-10-28",
    "cover": "covers/stardust.webp",
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
    "status": "review",
    "statusText": "In review on CrazyGames",
    "date": "2026-10-26",
    "cover": "covers/monkey-clicker.webp",
    "play": "play/monkey-clicker/",
    "links": []
  },
  {
    "slug": "totalizator",
    "title": "Totalizator",
    "pitch": "How many accountants does it take to beat a gorilla? The bettors only see the numbers, so fight when they bet against you and win big.",
    "author": "Artem with Igor",
    "status": "soon",
    "statusText": "Coming to CrazyGames",
    "date": "2026-10-27",
    "cover": "covers/totalizator.webp",
    "play": "play/totalizator/",
    "links": []
  }
];
