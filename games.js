// The games of the challenge, one entry per game, in release order. Read by index.html and play.html.
// slug: the game's folder under play/; status: live | review | soon | dev | jam (soon: waiting to be submitted); cover: a 16:9 WebP in covers/;
// play: where the game's static build is served (play/<slug>/), publish.mjs copies the build there;
// links: secondary links shown small under the Play button. A game without play is listed but not playable yet.
// trailer: { src, sound } (sound: the file has an audio track); shots: screenshots, each with a <name>-thumb.webp beside it.
// Both come from tools/site-media.sh; a game without them shows its cover.
// page: the game's own page, <page>.html, made by publish.mjs (plain HTML that search engines and AI crawlers can read without
// running JavaScript); about: paragraphs for that page, controls: lines for it. Only true things, as in the game's store texts.
window.GAMES = [
  {
    "slug": "stardust",
    "title": "Cosmic Roguelike",
    "page": "cosmic-roguelike",
    "pitch": "A space roguelike: every life is a star's life, from a speck of dust to its collapse. Upgrade between lives and grow far enough to become a black hole.",
    "about": [
      "A roguelike about the life of a star. Each life starts as a speck of dust right after the Big Bang and ends when your hydrogen runs out; between lives you spend the stardust you earned on upgrades that last. Move, and everything smaller than you falls in.",
      "Grow into a nebula, a protostar, a star, a blue giant and a hypergiant. Your hydrogen burns from the first second. When it runs out you collapse, and your mass and form decide what you leave: a cold cloud, a white dwarf, a pulsar, a magnetar or a black hole.",
      "Stars much bigger than you pull you in and tear matter off you. Touch one and the life is over. A star a little bigger than you is prey: drink from it, but keep off the red line round it. Two stars of a size merge.",
      "Become a black hole: everything around you is swallowed, a moment of silence, then the stars fall into you on the beat of the music."
    ],
    "controls": [
      "Click or press any key to set off the Big Bang.",
      "Move the mouse: your star follows the cursor. WASD or the arrow keys also steer.",
      "When you transform, click a form or press 1, 2 or 3.",
      "Esc or P: pause.",
      "On a phone: touch and hold where you want to go, tap a form when you transform."
    ],
    "author": "Artem",
    "status": "live",
    "statusText": "Play free",
    "date": "2026-10-28",
    "cover": "covers/stardust.webp",
    "trailer": {
      "src": "media/stardust/trailer.mp4",
      "sound": true
    },
    "shots": [
      "media/stardust/1.webp",
      "media/stardust/2.webp",
      "media/stardust/3.webp",
      "media/stardust/4.webp",
      "media/stardust/5.webp",
      "media/stardust/6.webp"
    ],
    "play": "play/stardust/",
    "links": [
      {
        "label": "Ludum Dare 60 jam version",
        "url": "https://ldjam.com/events/ludum-dare/60/stardust"
      }
    ]
  },
  {
    "slug": "monkey-clicker",
    "title": "Monkey Clicker",
    "page": "monkey-clicker",
    "pitch": "Can a monkey write Hamlet? Type Shakespeare, hire monkeys to type for you and grow to a whole Monkey City.",
    "about": [
      "Can a monkey write Hamlet? Hire enough of them and find out. Click to type Shakespeare's epitaph, sell the page and hire your first monkey. It types for you. Every word you type earns money.",
      "Then add desks, overseers, office floors, towers and a whole Monkey City. Every page is real Shakespeare: the Sonnets, Hamlet, Macbeth and every other play.",
      "Catch the golden banana, open parcels from the publisher, and keep earning while you're away. Publish all of Shakespeare, found a new publishing house and reach for the stars."
    ],
    "controls": [
      "Click TYPE or press any key to type.",
      "Click BUY to hire. Hold it to hire many.",
      "Click the golden banana and parcels when they appear."
    ],
    "author": "Artem",
    "status": "live",
    "statusText": "Play free",
    "date": "2026-10-26",
    "cover": "covers/monkey-clicker.webp",
    "trailer": {
      "src": "media/monkey-clicker/trailer.mp4",
      "sound": true
    },
    "shots": [
      "media/monkey-clicker/1.webp",
      "media/monkey-clicker/2.webp",
      "media/monkey-clicker/3.webp",
      "media/monkey-clicker/4.webp"
    ],
    "play": "play/monkey-clicker/",
    "links": []
  },
  {
    "slug": "totalizator",
    "title": "Totalizator",
    "page": "totalizator",
    "pitch": "How many accountants does it take to beat a gorilla? The bettors only see the numbers, so fight when they bet against you and win big.",
    "author": "Artem with Igor",
    "status": "live",
    "statusText": "Play free",
    "date": "2026-10-27",
    "cover": "covers/totalizator.webp",
    "trailer": {
      "src": "media/totalizator/trailer.mp4",
      "sound": true
    },
    "shots": [
      "media/totalizator/1.webp",
      "media/totalizator/2.webp",
      "media/totalizator/3.webp",
      "media/totalizator/4.webp",
      "media/totalizator/5.webp"
    ],
    "play": "play/totalizator/",
    "links": []
  },
  {
    "slug": "ogonek",
    "title": "Ogonek",
    "page": "ogonek",
    "pitch": "A burner festival on a Bali mountain, and you have a flamethrower. Burning dancers spread the fire: burn every camp down, beat the DJ, then leave no trace.",
    "controls": [
      "WASD to move, aim with the mouse, hold the mouse button to fire.",
      "Hold E at the generator to refuel. R restarts, Esc goes back to the site.",
      "On a phone: stick on the left, fire on the right (it aims for you), hold the button at the generator to refuel."
    ],
    "author": "Artem",
    "status": "dev",
    "statusText": "Fresh build",
    "date": "2026-11-02",
    "cover": "covers/ogonek.webp",
    "trailer": {
      "src": "media/ogonek/trailer.mp4",
      "sound": true
    },
    "shots": [
      "media/ogonek/1.webp",
      "media/ogonek/2.webp",
      "media/ogonek/3.webp",
      "media/ogonek/4.webp",
      "media/ogonek/5.webp"
    ],
    "play": "play/ogonek/",
    "links": []
  }
];
