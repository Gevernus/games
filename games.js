// The games of the challenge, one entry per game, in release order. Read by index.html and play.html.
// slug: the game's folder under play/; status: live | review | soon | dev | jam (soon: waiting to be submitted); cover: a 16:9 WebP in covers/;
// play: where the game's static build is served (play/<slug>/), publish.mjs copies the build there;
// links: secondary links shown small under the Play button. A game without play is listed but not playable yet.
// trailer: { src, poster, loops, sound } (poster: a frame of the trailer; loops: the second of the trailer each silent clip
// media/<slug>/loop-<n>.mp4 starts at, for the wall on the landing; sound: the file has an audio track);
// shots: screenshots, each with a <name>-thumb.webp beside it.
// Both come from tools/site-media.sh; a game without them shows its cover.
// page: the game's own page, <page>.html, made by publish.mjs (plain HTML that search engines and AI crawlers can read without
// running JavaScript); about: paragraphs for that page, controls: lines for it. Only true things, as in the game's store texts.
window.GAMES = [
  {
    "slug": "stardust",
    "title": "Cosmic Roguelike",
    "page": "cosmic-roguelike",
    "pitch": "A space roguelike: every life is a star's life, from a speck of dust to its collapse. Upgrade between lives and grow far enough to become a black hole.",
    "tags": [
      "Roguelike",
      "Space",
      "Upgrades",
      "Arcade",
      "Singleplayer",
      "Atmospheric"
    ],
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
      "poster": "media/stardust/poster.webp",
      "loops": [0.2, 4.2, 7.7, 11.7, 15.2, 19.7, 24.7],
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
    "tags": [
      "Clicker",
      "Idle",
      "Incremental",
      "Funny",
      "Shakespeare",
      "Singleplayer"
    ],
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
      "poster": "media/monkey-clicker/poster.webp",
      "loops": [0.2, 4.7, 7.7, 11.7, 15.7, 18.7, 22.7],
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
    "tags": [
      "Betting",
      "Simulation",
      "Strategy",
      "Funny",
      "Singleplayer"
    ],
    "author": "Artem with Igor",
    "status": "live",
    "statusText": "Play free",
    "date": "2026-10-27",
    "cover": "covers/totalizator.webp",
    "trailer": {
      "src": "media/totalizator/trailer.mp4",
      "poster": "media/totalizator/poster.webp",
      "loops": [0.2, 6.2, 10.7, 13.7, 16.7, 21.7],
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
    "tags": [
      "Action",
      "Shooter",
      "Retro",
      "Pixel Graphics",
      "Neon",
      "Singleplayer"
    ],
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
      "poster": "media/ogonek/poster.webp",
      "loops": [0.2, 3.2, 10.2, 12.7, 17.2, 19.7],
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
  },
  {
    "slug": "kites",
    "title": "Kites",
    "page": "kites",
    "pitch": "Fly your kite over a Balinese village and cut the strings of the kites weaker than you. Dodge the stronger ones, climb past the clouds to the stars, and catch all fifteen kites.",
    "tags": [
      "Casual",
      "Arcade",
      "Upgrades",
      "Collection",
      "Singleplayer",
      "Relaxing"
    ],
    "about": [
      "A kite fight over a Balinese village. Your kite climbs by itself; you steer it. The number on every kite is its strength: fly into a green one, weaker than you, and you cut its string and take it. A red one is stronger: touch it and your own string snaps.",
      "Every kite you cut gives experience; a level up makes your kite stronger and bigger. Catch an updraft for a boost and overtake the kites around you.",
      "Climb above the antennas, the birds, the clouds, the rain and the volcano, into the thin air and up among the stars. The higher you fly, the more kites there are, and up there some of the stronger ones hunt you.",
      "Between flights, spend your coins in the workshop: Strength, Climb, Manoeuvre and a Second chance. The album collects all fifteen kites, from paper diamonds to the Golden Naga and the giant Banjar kite; the rarest you caught flies for you, and a full set of a rarity pays a reward."
    ],
    "controls": [
      "Click the sky to fly.",
      "Move the mouse: your kite follows it.",
      "Between flights: click the workshop to upgrade, the album to see your collection.",
      "On a phone: your kite follows your finger; tap the sky to fly."
    ],
    "author": "Artem",
    "status": "live",
    "statusText": "Play free",
    "date": "2026-11-05",
    "cover": "covers/kites.webp",
    "trailer": {
      "src": "media/kites/trailer.mp4",
      "poster": "media/kites/poster.webp",
      "loops": [0.2, 3.12, 6.04, 8.96, 11.88, 14.8],
      "sound": true
    },
    "shots": [
      "media/kites/1.webp",
      "media/kites/2.webp",
      "media/kites/3.webp",
      "media/kites/4.webp",
      "media/kites/5.webp",
      "media/kites/6.webp",
      "media/kites/7.webp"
    ],
    "play": "play/kites/",
    "links": []
  }
];
