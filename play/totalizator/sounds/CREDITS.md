# CREDITS — звуки игры

Всё остальное в игре — синтез WebAudio (`src/sound.ts`, `src/sfx.ts`, `src/music.ts`), без файлов: удары, выстрелы,
броня, перезарядка, монеты, гонг, музыка. Здесь — сэмплы того, что синтез делает плохо. Все — **CC0 1.0** (атрибуция не
нужна, авторов указываем из вежливости), превью-файлы Freesound, найденные через Openverse; лицензия сверена на странице
звука. NC, ND, SA и CC BY не брали.

Что сделано с каждым: вырезан кусок (с какой секунды и сколько — в таблице), срез низа (highpass), затухание в конце,
пиковая нормализация до −1 dBFS, моно 44,1 кГц, MP3 80 кбит/с, метаданные убраны. Высоту и громкость игра меняет на лету.

26.10, после того как Артём послушал бой («звуки боя не нравятся, звук гуся нужен»): гогот заменён на настоящих гусей,
добавлены «HOOONK» атаки, предсмертный крик гуся, «уф» падающих и шлепки приземления; реалистичные выстрелы
(`shot1.mp3`, `shot2.mp3`, Brokenphono и mitchelk) убраны — мультяшный «пиу» теперь синтез.

| Файл | Что в игре | Название | Автор | Лицензия | Источник | Изменено |
|---|---|---|---|---|---|---|
| `honk1.mp3`, `honk2.mp3` | гусь гогочет в бою (не чаще раза в 0,4–0,9 с, реже при малой стае) | Goose Shocked 1.aiff | ChunaawChika09 | CC0 1.0 | https://freesound.org/people/ChunaawChika09/sounds/581159 | два гогота: 0,34 с с 0,31 с и 0,56 с с 0,72 с, highpass 220 Гц (скачано 26.10.2026) |
| `honk3.mp3` | гусь гогочет в бою (вариант) | Goose - Horn 1 - 96kHz.wav | JarredGibb | CC0 1.0 | https://freesound.org/people/JarredGibb/sounds/233099 | 0,37 с с 0,63 с, highpass 250 Гц (26.10.2026) |
| `squawk.mp3` | гусь падает: гогот «сдувается» (игра тянет высоту вниз) | Goose - Horn 1 - 96kHz.wav | JarredGibb | CC0 1.0 | https://freesound.org/people/JarredGibb/sounds/233099 | 0,24 с с 0,28 с, highpass 300 Гц (26.10.2026) |
| `honkbig.mp3` | стая идёт в атаку на FIGHT: долгое «HOOONK» | Goose Shocked 2.aiff | ChunaawChika09 | CC0 1.0 | https://freesound.org/people/ChunaawChika09/sounds/581158 | 0,95 с с 0,37 с, highpass 180 Гц, затухание 0,2 с (26.10.2026) |
| `oof1.mp3` | Геннадий или наёмник падает: «уф» | Oof (original) | unfa | CC0 1.0 | https://freesound.org/people/unfa/sounds/719053 | весь, 0,27 с, highpass 120 Гц (26.10.2026) |
| `oof2.mp3` | «уф» (вариант); у гориллы — вдвое ниже | oof.wav | fotoshop | CC0 1.0 | https://freesound.org/people/fotoshop/sounds/47356 | весь, 0,24 с, highpass 120 Гц (26.10.2026) |
| `splat1.mp3` | павший шлёпается на землю | Toon Splat.wav | cribbler | CC0 1.0 | https://freesound.org/people/cribbler/sounds/380390 | 0,3 с с начала, highpass 90 Гц (26.10.2026) |
| `splat2.mp3` | шлепок (вариант) | Wet Splat 1.mp3 | nebulasnails | CC0 1.0 | https://freesound.org/people/nebulasnails/sounds/495118 | 0,33 с с 0,075 с, highpass 90 Гц (26.10.2026) |
| `splat3.mp3` | шлепок (вариант) | Splat/Squish 4 | mrickey13 | CC0 1.0 | https://freesound.org/people/mrickey13/sounds/515621 | 0,24 с с начала, highpass 90 Гц (26.10.2026) |
| `groar1.mp3`, `groar2.mp3`, `groar3.mp3` | рык гориллы: на FIGHT ступени с гориллой, на экране решения раз в 8 с (у пары ниже, у короля ещё ниже) | CaveGorilla.wav | zatar | CC0 1.0 | https://freesound.org/people/zatar/sounds/370369 | три рыка: 1,75 с с 0,82 с, 1,6 с с 4,32 с, 1,65 с с 6,19 с; highpass 70 Гц, затухание 0,4–0,45 с (26.10.2026) |
| `croak1.mp3`, `croak2.mp3` | лягушки квакают в бою (не чаще раза в 0,8–2 с), хором на FIGHT; падая — кваканье «сдувается» | frog_quak.mp3 | katzlbt | CC0 1.0 | https://freesound.org/people/katzlbt/sounds/361117 | два кряка: 0,34 с с 0,04 с и 0,4 с с 0,96 с, highpass 150 Гц (26.10.2026); исходник — Frog.mp3, leitzordner, CC0 1.0, https://freesound.org/people/leitzordner/sounds/275845 |
| `ribbit.mp3` | «ри-бит» (вариант кваканья) | Frog.ogg | egomassive | CC0 1.0 | https://freesound.org/people/egomassive/sounds/536759 | 0,42 с с 0,1 с, highpass 150 Гц (26.10.2026); исходник — «R01-47-Frog Ribbits», Craig Smith, CC0 |
| `grannyhm.mp3` | бабушка ворчит «хм!» в бою (не чаще раза в 4 с) | Old Woman Struggling 1 | LayZerg | CC0 1.0 | https://freesound.org/people/LayZerg/sounds/445688 | 0,45 с с 5,76 с, highpass 120 Гц (26.10.2026) |
| `grannyoh.mp3` | бабушка падает: «о-ох» | Old Woman Struggling 1 | LayZerg | CC0 1.0 | https://freesound.org/people/LayZerg/sounds/445688 | 0,8 с с 0,26 с, highpass 120 Гц, затухание 0,25 с (26.10.2026) |
| `hey.mp3` | мама строго «эй!» в бою (не чаще раза в 4 с; игра чуть ниже) | hey.mp3 | pinko2021 | CC0 1.0 | https://freesound.org/people/pinko2021/sounds/568608 | 0,36 с с 1,05 с, highpass 150 Гц (26.10.2026) |
| `ouch.mp3` | мама падает: «ой!» | ouch.wav | girlhurl | CC0 1.0 | https://freesound.org/people/girlhurl/sounds/339162 | 0,46 с с 1,18 с, highpass 150 Гц (26.10.2026) |
| `ugh.mp3` | хулиган падает: «угх» | ugh (male) | brookmorgan | CC0 1.0 | https://freesound.org/people/brookmorgan/sounds/189565 | 0,4 с с 0,32 с, highpass 120 Гц (26.10.2026) |
| `spit.mp3` | хулиган плюёт «пту» | Spit 3 - The Ridge - Spanker | bananplyte | CC0 1.0 | https://freesound.org/people/bananplyte/sounds/452171 | 0,33 с с 0,1 с, highpass 200 Гц (26.10.2026) |
| `roar.mp3` | рёв ярости (RAGE!), у короля ниже; запасной рык гориллы, пока не загрузились `groar` | Alien Gorilla Roar | Scpsea | CC0 1.0 | https://freesound.org/people/Scpsea/sounds/712766 | 2,6 с с 0,11 с, highpass 60 Гц, затухание 0,8 с (26.10.2026, первый проход) |
| `cheer.mp3` | толпа: FIGHT, победа, финал | BerlinGameScene.com Crowd Cheer 2 | BerlinGameScene | CC0 1.0 | https://freesound.org/people/BerlinGameScene/sounds/267248 | 3,6 с с 0,05 с, highpass 120 Гц, затухание 1,2 с (первый проход) |
| `aww.mp3` | толпа при проигрыше | aww.wav | phmiller42 | CC0 1.0 | https://freesound.org/people/phmiller42/sounds/124996 | 1,9 с с 0,05 с, highpass 120 Гц, затухание 0,6 с (первый проход) |

Текст лицензии CC0 1.0: https://creativecommons.org/publicdomain/zero/1.0/
