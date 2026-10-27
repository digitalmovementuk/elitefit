> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit Bali homepage v2.1: footage sourcing (lane C-src)

Version: v2.1 — 2026-10-01
Changelog: 2026-10-01 created. Inventory of elitefitbali.com (6 pages plus the public media library) and the Instagram route, 3 originals downloaded, contact sheets, scene maps, slot candidates.

Scope: the club's own footage for the decorative slots of change request C. Footage is the club's own, for proposal use only; the club's original files are needed before launch (C6). Nothing was published, no account used, nobody at the club contacted.

## 1. Result in six lines

1. The club's web pages hold no `<video>` tag, no Elementor video widget and no direct video link. The only video on /perform/ and /recharge/ is an Instagram feed plugin (10 reels, Oct to Nov 2024) whose video links are signed Instagram CDN URLs that expired on 2024-11-05.
2. The club's public WordPress media library (REST list, no login) holds exactly **3 videos**. All 3 originals are downloaded: 363.4 MB in total.
3. `Header-Portrait.mov` is the find: **1080x1350 (4:5), 47.75 s, 30 Mbit/s**, the clean native master of the walkthrough footage that the existing 720x1280 hero reel shows. Every slot except the trainers has a clean, people-free shot in it (windows in section 6).
4. Every clean shot is short, 0.6 to 2.1 s. The encoding lane must ping-pong or slow the clip to reach a 3 to 5 s loop.
5. `Header-Video-Landscape.mov` (1920x1080, 20.9 s) shows people in the spa rooms as three vertical 640x1080 panels (jacuzzi room | sauna | steam room), useful only if a slot wants guests in the room.
6. No clip shows or names Ain, Icha, Martijn, Putu or Rey. Instagram cannot be read: Firecrawl refuses the site. INSTAGRAM-REQUESTS.md lists what Raoul can ask the club for.

## 2. Providers and credits

| Step | Route | Credits |
|---|---|---|
| Serper | skipped, out of credits (standing note) | 0 |
| /perform/, home, /recharge/, /trainers/ain/, /schedule/hyrox-conditioning/ | Firecrawl CLI v1.23.3 scrape (rawHtml, links, markdown); each response reports `creditsUsed` 1 | 5 |
| Public media list `/wp-json/wp/v2/media?media_type=video` | Firecrawl CLI scrape of that public JSON URL | 1 |
| instagram.com/elitefitbali/ | Firecrawl CLI scrape, answer: "we do not support this site" | 0 or 1 (not shown) |
| Downloads of the 3 originals | plain `curl` of public uploads URLs, no cookies, no headers | 0 |

Shared balance: 94 before, 85 after (checked with `firecrawl --status`; key never printed). Own count 6 to 7; the 2 to 3 extra credits came from other sessions on the same account. Cap of 10 respected. Browser not used.

## 3. Inventory

### 3.1 Videos found (club media library)

| # | Page / element | URL | Local file (originals/) | Size | Resolution, fps, duration | Date | Shows | Candidate slot | Notes |
|---|---|---|---|---|---|---|---|---|---|
| V1 | Media library, ID 12366 "Header – Portrait" (attachment page /header-portrait/); not placed on any of the 6 scraped pages | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov | `Header-Portrait.mov` | 193,220,266 B (193.2 MB), sha256 4a0817e5… | 1080x1350 (4:5), 24 fps, 47.75 s, H.264 High, 30 Mbit/s, PCM audio | uploaded 2026-09-22 03:21 GMT, cut in DaVinci Resolve 2026-09-21 | Walkthrough: sign, entrance, reception, café, lockers, gym, turf, pool, plunge room, steam, sauna, aerial pool (scene map 4) | all slots except trainers | Best source. Contains promo sign (0 to 1.25 s), menu boards with prices, a few faces |
| V2 | Media library, ID 12415 "Header Video – Landscape" (/header-video-landscape/); not placed on any scraped page | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Video-Landscape.mov | `Header-Video-Landscape.mov` | 136,180,211 B (136.2 MB), sha256 9a366be1… | 1920x1080 (16:9), 24 fps, 20.92 s, H.264 High, 50 Mbit/s, PCM audio | uploaded 2026-09-22 03:50 GMT, cut 2026-09-07 | Same walkthrough in 21 s; many segments are 3 vertical panels (scene map 5) | spa rooms with guests, turf class, aerial pool | Faces visible. Panels are exact thirds: x=0, 640, 1280, each 640x1080 |
| V3 | Media library, ID 11223 "EF Better Together 30mbps" (/promo/ef-better-together-30mbps/); not placed on any scraped page | https://elitefitbali.com/wp-content/uploads/2026/02/EF-Better-Together-30mbps.mp4 | `EF-Better-Together-30mbps.mp4` | 34,032,525 B (34.0 MB), sha256 9a6f9315… | 720x1280 (9:16), 29.97 fps, 52.39 s, H.264 Main, 4.9 Mbit/s, AAC stereo | uploaded 2026-02-02 12:56 GMT | Brand film: gym, café, pool, spa with captions ("Train", "Work", "Eat", "Better Together"), a mock Instagram post at 20 s, close-up faces, end cards | none | Captions on nearly every shot, large faces. Not the walkthrough of the hero reel |

All three: HTTP 200, `accept-ranges: bytes`, public, no login. Contact sheets: `media/sourcing/contact/`.

### 3.2 Videos referenced by the pages but not retrievable (Instagram feed plugin, Smash Balloon)

The same 10 reels sit in the feed block on /perform/ and /recharge/. Self-hosted still: `https://elitefitbali.com/wp-content/uploads/sb-instagram-feed-images/<id>full.jpg` (downloaded, 1.1 MB total, `originals/instagram-feed-thumbs/`). Video: signed `scontent-sin6-3.cdninstagram.com/.../_video_dashinit.mp4` links, `oe=` expiry **2024-11-05** for every one; **not requested** (expired, and the brief allows no Instagram media route beyond the profile scrape).

| # | Reel | Date (2024) | Caption (as published) | Shows (from the still) | Slot |
|---|---|---|---|---|---|
| 1 | https://www.instagram.com/reel/DBgSMkFNwrL/ | Oct 24 | We've figure it out, so you don't have to. Don't know an exercise, just ask one of the team at Elite Fit Bali. | staff member on turf, caption "CRUNCHES" | none (caption text, skit) |
| 2 | https://www.instagram.com/reel/DBaYRjXSYKf/ | Oct 22 | Careful what you say at reception, or we might just join you in the next class! | two staff laughing on rowing machines, weights rack behind | none (skit) |
| 3 | https://www.instagram.com/reel/DBQG3SsSvJy/ | Oct 18 | A little thank you from us. We ❤️ all the kind words from Elite Fit Bali members. | three staff making hearts at the EF wall, a dog, review cards over the picture | none (review overlay) |
| 4 | https://www.instagram.com/reel/DBNgjCRSVr7/ | Oct 17 | We stan an early bird | man on the turf staircase, caption "THE MEMBERS THAT ALWAYS ARRIVES BEFORE THE INSTRUCTOR" | none |
| 5 | https://www.instagram.com/reel/DBIWz60yQrD/ | Oct 15 | Be someone's reason to go to the gym today | stacked bumper plates (green, yellow, blue) | none (plates close-up) |
| 6 | https://www.instagram.com/reel/DB0IitACW0n/ | Nov 1 | Don't skip your cardio, your PT is always watching! | woman on a treadmill, caption overlay | none |
| 7 | https://www.instagram.com/reel/DBxjv6cIJyj/ | Oct 31 | Happy Halloween from everyone (including the ghosts) at Elite Fit Bali | ghost costume with a dog in front of the black EF mark on the concrete wall | none for visit-entrance (costume, dog) |
| 8 | https://www.instagram.com/reel/DBu-ufONCjB/ | Oct 30 | Are you scared of leg day? | man in sunglasses on a leg-extension machine, caption | none |
| 9 | https://www.instagram.com/reel/DBsZiXIShTr/ | Oct 29 | Tag your favourite gym buddy | two women on leg presses, caption | none |
| 10 | https://www.instagram.com/reel/DBiFDelyBMp/ | Oct 25 | Moon's got that Friday feeling | Pomeranian dog in front of the EF mark | none |

The feed shows nothing newer than Nov 1, 2024: the plugin's cache is stale, so the club's current reels are unknown to this lane.

### 3.3 Pages scraped, with no video

| Page | Scrape | Widgets seen | Video result |
|---|---|---|---|
| https://elitefitbali.com/perform/ | 1 credit, modified 2026-09-17 | slides, jet-listing, html, toggle, icon-box … | no `<video>`, no data-settings with a background video (Elementor loads `background-video.min.js`, nothing uses it), no YouTube/Vimeo, only 3 Google Tag Manager iframes; the 10 feed reels above |
| https://elitefitbali.com/recharge/ | 1 credit, modified 2026-09-17 | slides, jet-listing … | same: only the 10 feed reels; photos below |
| https://elitefitbali.com/ | 1 credit | slides, logo | none |
| https://elitefitbali.com/trainers/ain/ | 1 credit | text, image, icon-list | none |
| https://elitefitbali.com/schedule/hyrox-conditioning/ | 1 credit | jet-listing, rating … | none |

### 3.4 Decorative photos noticed (stills; not downloaded, not viewed unless stated)

HEAD data in `raw/page-images-head.json`. Only clip-relevant ones listed.

| Page | File (wp-content/uploads/…) | Size | Date | Possible slot (still) |
|---|---|---|---|---|
| /recharge/ | 2024/09/Recharge-Jacuzzi-scaled.jpg | 314 KB | 2024-09-03 | rec-jacuzzi still; no club clip of that exact room in single-scene form |
| /recharge/ | 2024/09/Recharge-Sauna-scaled.jpg | 1.0 MB | 2024-09-03 | rec-sauna still |
| /recharge/ | 2023/12/DSC01306-scaled.jpg | 445 KB | 2023-12-14 | unknown content |
| /perform/ | 2023/12/DSC00061-scaled.jpg, 2024/02/DSC01775-min-scaled.jpeg, 2023/11/DSC02569-1-1.webp | 503 KB, 940 KB, 273 KB | 2023-12 to 2024-02 | unknown content (likely machines/turf) |
| /perform/ | 2025/02/booty-and-core-scaled.webp, fat-burner-scaled.webp | 746 KB, 499 KB | 2025-03-13 | class cards |
| /perform/, /trainers/ | 2025/02/ICHA-, PUTU-, REY-, TINOS-scaled.webp; 2026/05/ain.jpg-e1779367708306.jpeg | 178 to 262 KB | 2025-04-11, 2026-05-21 | trainer portraits (no clip exists) |

## 4. Scene map: Header-Portrait.mov (4:5, seconds)

Cut times from ffmpeg scene detection (threshold 0.18), content from 1 fps and 0.5 s sheets. Cuts ±0.15 s, dissolves ±0.4 s.

| In | Out | Shows | Flags |
|---|---|---|---|
| 0.00 | 1.25 | roadside sign, EF logo, "LIMITED OFFER BUY 1 DAY PASS GET 2" | PROMO TEXT |
| 1.25 | 2.75 | sunlit concrete wall, black EF mark with ELITE FIT BALI, palm leaves | clean, no people |
| 2.75 | 4.45 | reception wall (cream) with EF mark, timber desk, tablets | tablets |
| 4.45 | 6.25 | timber display with clothing, bottles and socks on LED shelf | merchandise |
| 6.25 | 11.2 | café counter, barista, shelves with plants, coffee machine, entry light | people small, a menu sign at 7 s |
| 11.2 | 17.4 | café lounge, TV (11–12 s), window table, TV menu board "STEAK & EGGS 260 / TIRAMISU SHAKES 95", fridge "GRAB N' GO" | TEXT AND PRICES |
| 17.4 | 19.1 | fern and philodendron by the window | clean |
| 19.1 | 19.96 | timber restroom door with pictogram | pictogram |
| 19.96 | 23.4 | locker room with timber lockers, green bench, basins with LED mirror, shower stall door | clean |
| 23.4 | 26.1 | locker "27" with keypad; rain shower head in green tiles | number |
| 26.1 | 28.0 | building exterior, breeze-block wall, glass front, a guest behind glass | person small |
| 28.0 | 28.9 | black EF mark on grey concrete wall, sled below (tight) | clean |
| 28.9 | 30.6 | smooth move through the machine hall, lat pulldown frame, EF mark far wall | clean, no people |
| 30.6 | 31.65 | cable station: woman, trainer in black tee, glass wall to garden | faces |
| 31.65 | 32.35 | dumbbell racks pan | clean |
| 32.35 | 33.45 | turf class, leg raises on mats, trainer standing, rowing machine | faces |
| 33.45 | 34.25 | red and green hexagon boxes, woman between two hanging bags with the brand name | face |
| 34.25 | 35.95 | courtyard pool, loungers, palms, timber building | two guests, tiny |
| 35.95 | 36.9 | plunge-pool room, sand tiles, two tiled tubs, window strip | clean, no people |
| 36.9 | 38.25 | pool with water spill, loungers, palms, covered edge | clean |
| 38.25 | 39.55 | steam room: arched mosaic niche, LED strip, round stone steam unit | clean, no people |
| 39.55 | 40.95 | timber sauna, LED strips | clean, no people |
| 40.95 | 42.65 | café long table, guests with laptops | faces, small |
| 42.65 | 44.25 | wooden deck with sofas and coffee table, palms | clean |
| 44.25 | 45.5 | high view of loungers along a palm garden, dissolves into the aerial pool | clean |
| 45.5 | 47.75 | aerial straight down on the turquoise pool, woman swimming away from camera | no face |

## 5. Scene map: Header-Video-Landscape.mov (16:9, seconds)

| In | Out | Shows | Flags |
|---|---|---|---|
| 0.00 | 0.79 | wide machine hall, glass wall, people | small |
| 0.79 | 2.54 | triptych (3 panels): gym talk | faces |
| 2.54 | 3.71 | courtyard pool, loungers, palms, two guests | small |
| 3.71 | 4.88 | **spa triptych**: left plunge/jacuzzi room (2 guests), middle sauna (3 people), right steam room (2 women) | faces |
| 4.88 | 5.71 | four people kettlebell deadlifts on turf | faces |
| 5.71 | 6.71 | turf class, abs, trainer in black | faces |
| 6.71 | 8.33 | triptych: pull-ups, rowers, boxing | faces |
| 8.33 | 9.46 | café table wide, group | faces |
| 9.46 | 10.79 | triptych: café, ceremony offering, brunch | faces |
| 10.79 | 11.96 | trainer coaching a barbell squat with green plates, EF wall behind | faces |
| 11.96 | 13.25 | triptych: turf stretching, boxing, mat work | faces |
| 13.25 | 14.33 | café wide | faces, small |
| 14.33 | 14.92 | dish and smoothie close-ups | food |
| 14.92 | 16.83 | café triptych, terrace | faces, small |
| 16.83 | 18.21 | café counter with timber LED front | clean |
| 18.21 | 20.92 | aerial pool, woman swimming | no face |

## 6. Slot candidates

Source of truth in machine form: `media/sourcing/windows.json` (in, out, length, flags, ranked). Lengths are single uncut shots: 3 to 5 s loops need ping-pong or slow motion.

| Slot | Best candidate (rank 1) | Length | Why it fits | Flags | Fallback |
|---|---|---|---|---|---|
| zone-perform | Portrait 29.0 to 30.5 | 1.5 s | gimbal move through the machine hall, centre-left machines | no people | Portrait 31.7 to 32.3 dumbbell racks (0.6 s) |
| zone-recharge | Portrait 34.3 to 35.9 | 1.6 s | pool, loungers, palms, push-in | tiny guests | Portrait 36.9 to 38.2 water spill; Portrait 45.6 to 47.7 aerial swimmer (2.1 s, longest); Landscape 18.25 to 20.85 |
| zone-classes | Portrait 33.5 to 34.2 | 0.7 s | red hexagon boxes on turf | woman's face | Portrait 32.4 to 33.4 abs; Landscape 4.9 to 6.7 (faces) |
| rec-sauna | Portrait 39.6 to 40.9 | 1.3 s | timber sauna with LED strips | none | Landscape middle panel 3.75 to 4.85 (people) |
| rec-ice | Portrait 36.0 to 36.85 | 0.85 s | plunge-pool room in sand tiles, both tubs | none | Landscape left panel 3.75 to 4.85 |
| rec-jacuzzi | Portrait 36.0 to 36.85 (other crop) | 0.85 s | same room; crop the nearer, larger bath | shares the shot with rec-ice | Landscape left panel (right tub bubbling) |
| rec-steam | Portrait 38.35 to 39.5 | 1.15 s | sand mosaic arch, LED, stone steam unit | none | Landscape right panel 3.75 to 4.85 |
| visit-entrance | Portrait 1.3 to 2.7 | 1.4 s | concrete wall, black EF mark, palm | sign ends at 1.25 s | Portrait 2.8 to 4.4 reception wall |
| trainer portraits | none | | no clip shows or names a trainer | | keep stills |
| any other decorative photo | none found | | no other slot on the club's pages matches a clip | | |

Resolution: Portrait is native 1080x1350, so 4:5 cards need no crop and 3:4 cards lose about 5 percent of the width; the 720x1280 screen recording is no longer needed for any slot. Landscape panels are 640x1080 (3:5), fine for 3:4 and 4:5 crops at card size.

## 7. Relation to the existing hero reel

`proposal/site-preview/assets/video/hero-reel-9x16.mp4` (6.7 MB, 720x1280, 52.37 s, 1.0 Mbit/s, no audio) shows the same walkthrough shots in the same order as Header-Portrait.mov (sign, EF wall, merchandise, café, lockers, gym, turf, pool, steam, café, deck, aerial pool) followed by a red "BETTER TOGETHER" card and the silver EF logo. It is a different file from `EF-Better-Together-30mbps.mp4`, which is the captioned brand film (checked on contact sheets: `existing-hero-reel-9x16-2s-step_01.jpg` against the three film sheets). Identity with Header-Portrait.mov was established by eye, not by a pixel match; reel timing is shifted by up to 1.5 s against Portrait, so use Portrait times from this document, not reel times from the change request.

## 8. Flags

- Promo sign with "BUY 1 DAY PASS GET 2" at Portrait 0 to 1.25 s. Avoid.
- Prices and dish names on the TV menu boards (Portrait 14 to 16 s): avoid.
- Faces: guests and staff appear in the cable-station, turf and café shots and in all Landscape spa panels. No clip names a trainer. The club should confirm releases for guests before any launch use.
- Brand text on the EF wall and on the hanging bags is the club's own mark: acceptable.
- Both `.mov` files carry 24-bit PCM audio tracks; slot clips are silent, drop audio at encode.
- The two `.mov` files total 329 MB: seek with `-ss` before `-i`.

## 9. Rejected items and reasons (audit list)

| Item | Reason |
|---|---|
| instagram.com/elitefitbali/ via Firecrawl | "we do not support this site"; no content returned; no workaround attempted |
| 10 Instagram CDN video URLs | signed links expired 2024-11-05; Instagram media; not requested |
| 10 reel stills (downloaded for identification) | captions, skits, dog, faces; none is a clean slot match |
| V3 EF Better Together film as slot source | captions on nearly every shot, mock Instagram post, large faces, end cards |
| Portrait 0 to 1.25 s | promo text |
| Portrait 11.2 to 17.4 s | menu boards with prices, fridge brand text |
| Portrait 19.1 to 19.96 s, 23.4 to 26.1 s | restroom pictogram, locker number: no slot, some text |
| Portrait scenes of merchandise, café, lockers | no slot on the page |
| Landscape triptych segments for gym, turf, café | panels hold faces and cut fast; only needed if a slot wants people |
| /membership/, /class-schedule/, /offers-discounts/, /news/, /join-us-today/, 11 other class pages, 5 other trainer pages, /elite/ | not scraped (credit cap); the media list shows only 3 hosted videos site-wide, embeds on these pages are unchecked |
| Photos in 3.4 | not downloaded; no clip replaces a still where the club shows no clip |

## 10. Unverified

- Where V1 to V3 are used on the live site: not found on the 6 scraped pages; they look staged for new headers (uploaded 2026-09-22).
- Whether guests in the footage have signed releases.
- The club's current Instagram reels (profile unreadable).
- Embedded videos on the 20 unscraped club pages.
- That Header-Portrait.mov is the pixel-identical master of the hero reel (by eye only).

## 11. Files

Folder `homepage-v2.0/_build/v2.1/media/sourcing/`:
`originals/` (3 videos, `instagram-feed-thumbs/` 10 JPGs), `contact/` (sheets: `Header-Portrait_01..03`, `Header-Video-Landscape_01`, `EF-Better-Together-reel_01..03`, `EF-Better-Together-reel-18-35s_01`, `existing-hero-reel-9x16-2s-step_01`, `instagram-feed-thumbs-2024`, zoom sheets `zoom-*`, detail frames `detail-*`), `raw/` (Firecrawl JSON, HTML, links, markdown, REST list, scene-cut lists, scripts), `windows.json`.
