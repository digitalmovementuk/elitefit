> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Inputs: Elite Fit Bali homepage v3

Version: v3.0 — 2026-10-02 · every raw input, its origin, and who may use it. All are the club's own (public pages, media library, timetable, prices, rating and reviews). Cloned with `cp -c` (APFS clone) on 2026-10-02 10:11; originals untouched.

| File in v3 | Origin (read-only) | What it is | Status |
|---|---|---|---|
| `_inputs/data/schedule.club.json` and `assets/data/schedule.club.json` | `homepage-v2.0/assets/data/schedule.club.json` | Real timetable captured 2026-10-01 from https://elitefitbali.com/class-schedule/ (36 classes a week) | to be re-checked by the facts lane against the live page |
| `_inputs/data/passes.json` and `assets/data/passes.json` | `homepage-v2.0/assets/data/passes.json` | Pass prices by tier and length (IDR), club membership page of 2026-09-17 | to be re-checked by the facts lane |
| `_inputs/data/reviews.json` and `assets/data/reviews.json` | `homepage-v2.0/assets/data/reviews.json` | Google rating 4.7, 488 reviews and the verified review quotes | only quotes flagged verified may show |
| `_inputs/footage/Header-Portrait.mov` | `homepage-v2.0/_build/v2.1/media/sourcing/originals/` (club media library ID 12366, https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov) | 1080x1350 master walkthrough, 47.75 s | master footage |
| `_inputs/footage/Header-Video-Landscape.mov` | same folder (ID 12415, .../2026/09/Header-Video-Landscape.mov) | 1920x1080, 20.92 s, partly triptych panels | master footage |
| `_inputs/footage/EF-Better-Together-30mbps.mp4` | same folder (ID 11223, .../2026/02/EF-Better-Together-30mbps.mp4) | 720x1280 brand film with captions | the reel; cafe scene around 42 s |
| `_inputs/footage/v2.1-windows-reference.json` | `homepage-v2.0/_build/v2.1/media/sourcing/windows.json` | Reference list of clean shot windows found by the v2.1 sourcing lane (timestamps only) | read as a map; v3 lanes confirm by eye |
| `_inputs/photos/instagram-feed-thumbs/` | same folder (club-hosted stills of its Instagram feed plugin) | 10 feed thumbnails, Oct to Nov 2024 | stills only |

Lanes add their own downloads (club photos, logo, menu pages) below, one row each, with URL, date, size.

## Added by lanes
| `_build/facts/` (raw captures) | elitefitbali.com public pages read 2026-10-02 via the public WordPress REST API (curl) and 6 Firecrawl scrapes: page list, /trainers/tinos/, /trainers/martijn-taken/, Google Maps place page (rating), /membership/ with price popups | text and JSON captures of the club's pages (no media); partner-discounts.json, reviews-verification.json derived | facts lane, 2026-10-02; FACTS.md is built from them |
| `_inputs/photos/cafe/Cafe-1.webp` | https://elitefitbali.com/wp-content/uploads/2026/09/Cafe-1.webp (public media file, downloaded 2026-10-02, 58 KB) | Indoor cafe: counter, barista, a guest at a laptop (1000x666, media ID 11957, 2026-09-14) | menu lane; stills for the nutrition block |
| `_inputs/photos/cafe/Cafe-2.webp` | https://elitefitbali.com/wp-content/uploads/2026/09/Cafe-2.webp (public media file, downloaded 2026-10-02, 64 KB) | Indoor cafe seen from the counter; a menu card stands in the foreground, check before use (1000x666, ID 11956) | menu lane; stills for the nutrition block |
| `_inputs/photos/cafe/Cafe-3.webp` | https://elitefitbali.com/wp-content/uploads/2026/09/Cafe-3.webp (public media file, downloaded 2026-10-02, 49 KB) | TV wall with the trainer card 'MEET OUR TRAINER TINOS': text in shot, not for the cafe block (1000x666, ID 11955) | menu lane; stills for the nutrition block |
| `_inputs/photos/cafe/RESTAURANT-1.webp` | https://elitefitbali.com/wp-content/uploads/2026/09/RESTAURANT-1.webp (public media file, downloaded 2026-10-02, 134 KB) | Outdoor restaurant terrace, guests at laptops (1000x562, ID 11945) | menu lane; stills for the nutrition block |
| `_inputs/photos/cafe/RESTAURANT-2.webp` | https://elitefitbali.com/wp-content/uploads/2026/09/RESTAURANT-2.webp (public media file, downloaded 2026-10-02, 89 KB) | Outdoor restaurant, tables and plants (1000x562, ID 11944) | menu lane; stills for the nutrition block |
| `_inputs/photos/cafe/Indoor-cafe-outdoor-restaurant.webp` | https://elitefitbali.com/wp-content/uploads/2026/08/Indoor-cafe-outdoor-restaurant%E2%80%8B.webp (public media file, downloaded 2026-10-02, 81 KB) | Friends at a table with food and drinks (1080x1080, ID 11559, 2026-08-07) | menu lane; stills for the nutrition block |
| `_inputs/photos/cafe/smoothie-bowl-1-min-scaled.webp` | https://elitefitbali.com/wp-content/uploads/2024/01/smoothie-bowl-1-min-scaled.webp (public media file, downloaded 2026-10-02, 257 KB) | Smoothie bowl photo, 2024-01-03 (1707x2560, ID 8582); the only bowl evidence | menu lane; stills for the nutrition block |
| `_inputs/photos/cafe/smoothie-bowl2-min-scaled.jpg` | https://elitefitbali.com/wp-content/uploads/2024/01/smoothie-bowl2-min-scaled.jpg (public media file, downloaded 2026-10-02, 287 KB) | Smoothie bowl photo, 2024-01-03 (1707x2560, ID 8583) | menu lane; stills for the nutrition block |
| `_inputs/photos/cafe/COOLERS-nl.png` | https://elitefitbali.com/wp-content/uploads/2024/07/COOLERS-nl.png (public media file, downloaded 2026-10-02, 241 KB) | Four fizzy coolers photo, 2024-07-28 (354x354, ID 9418); club alt text on file | menu lane; stills for the nutrition block |
| `_inputs/menu-online/coolers-post.rest.json` | https://elitefitbali.com/wp-json/wp/v2/posts (the coolers post, read 2026-10-02) | News post of 2024-08-01 naming four coolers (5 KB) | menu lane; evidence only |
| `_inputs/menu-online/gofood-link.firecrawl.json` | https://gofood.link/a/GVkQK5Y (Firecrawl, 1 credit, 2026-10-02) | GoFood listing 'Elite Fit Bali Restaurant & Bar, Mengwi'; menu is in the Gojek app only (3 KB) | menu lane; evidence only |
| `_inputs/menu-online/gofood-web-403.firecrawl.json` | https://gofood.co.id/bali/restaurant/... (Firecrawl, 1 credit, 2026-10-02) | Block page (403); no workaround tried (2 KB) | menu lane; evidence only |
| `_inputs/menu-online/promo-duo.firecrawl.json` | https://elitefitbali.com/promo-duo/ (Firecrawl, 1 credit, 2026-10-02) | Cafe and restaurant inclusion, F&B tax note, member quotes about the food (16 KB) | menu lane; evidence only |
| `_inputs/menu-online/search-instagram-snippets.firecrawl.json` | Firecrawl web search, 5 results (2 credits, 2026-10-02) | Search snippets only; no Instagram page opened (2 KB) | menu lane; evidence only |
| `_inputs/menu-online/sitemap-index.xml` | https://elitefitbali.com/sitemap.xml (curl, after two Firecrawl failures) | Sitemap index; no menu or cafe page (2 KB) | menu lane; evidence only |
| `_inputs/menu-online/sitemap-page.xml` | https://elitefitbali.com/page-sitemap.xml (curl) | Page sitemap (22 KB) | menu lane; evidence only |
| `_inputs/menu-online/sitemap-post.xml` | https://elitefitbali.com/post-sitemap.xml (curl) | Post sitemap (4 KB) | menu lane; evidence only |
| `_inputs/menu-online/media-library-list.tsv` | https://elitefitbali.com/wp-json/wp/v2/media (all 556 items, 2026-10-02) | id, date, type, slug, URL, alt text; no menu image or PDF (63 KB) | menu lane; evidence only |
| `_build/menu-frames/landscape_t14.30_dishes-unlabelled.png` | `_inputs/footage/Header-Video-Landscape.mov`, still extracted with ffmpeg 2026-10-02 (3238 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/landscape_t14.80_dishes-unlabelled.png` | `_inputs/footage/Header-Video-Landscape.mov`, still extracted with ffmpeg 2026-10-02 (2677 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/portrait_t07.25_counter-standee-steak-eggs-250.png` | `_inputs/footage/Header-Portrait.mov`, still extracted with ffmpeg 2026-10-02 (1768 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/portrait_t14.75_tv-board-steak-eggs-250-tiramisu-shakes-95.png` | `_inputs/footage/Header-Portrait.mov`, still extracted with ffmpeg 2026-10-02 (1688 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/portrait_t15.00_tv-board-steak-eggs-250-tiramisu-shakes-95.png` | `_inputs/footage/Header-Portrait.mov`, still extracted with ffmpeg 2026-10-02 (1638 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/portrait_t15.25_tv-board-crop-3x.png` | `_inputs/footage/Header-Portrait.mov`, still extracted with ffmpeg 2026-10-02 (4041 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/portrait_t15.75_grab-n-go-fridge.png` | `_inputs/footage/Header-Portrait.mov`, still extracted with ffmpeg 2026-10-02 (1881 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/portrait_t16.00_fridge-mid-shelf-labels-crop-3x.png` | `_inputs/footage/Header-Portrait.mov`, still extracted with ffmpeg 2026-10-02 (1524 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/portrait_t16.00_fridge-top-shelf-labels-crop-4x.png` | `_inputs/footage/Header-Portrait.mov`, still extracted with ffmpeg 2026-10-02 (1708 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `_build/menu-frames/portrait_t16.00_grab-n-go-fridge-shelves-crop-2x.png` | `_inputs/footage/Header-Portrait.mov`, still extracted with ffmpeg 2026-10-02 (2918 KB) | evidence frame or enlarged crop for the menu transcription | menu lane; internal evidence, not for the page |
| `assets/img/logo-ef.svg` (+ `logo-ef-mono.svg`) | https://elitefitbali.com/wp-content/uploads/2023/11/Elite_fit_master-1-2.png (the club's organisation logo in its site schema; URL found in `homepage-v2.0/_build/v2.1/media/sourcing/raw/home.raw.html`), curl 2026-10-02 10:20, 301x249 PNG, 3.6 KB, taupe #a48f82 | EF mark + ELITE FIT wordmark, traced to SVG by the hero lane (polygon trace of the alpha, 1.8 KB); the mono file is the same paths in white | hero lane; mark used as the club uses it |
| `assets/img/logo-ef.png` | same URL as above | the downloaded original, kept as the reference for the trace | hero lane |
| `assets/img/logo-ef-mono-white.png` | https://elitefitbali.com/wp-content/uploads/2023/11/Elite_fit_master-1-3.png, curl 2026-10-02 10:20, 208x173 PNG, 1.1 KB | the club's own white variant (reference only) | hero lane |
| `assets/img/hero-poster-m.webp`, `hero-poster-d.webp`, `assets/video/hero-loop-m.mp4`, `hero-loop-d.mp4` | `_inputs/footage/Header-Video-Landscape.mov` 0.00 to 0.79 s (the club's wide hall shot, members training) | motion-blur treatment by the hero lane (numpy/OpenCV pan blur, warm grade; loop 4 s, poster = loop frame 0); scripts in the hero lane's scratch folder | hero lane; club footage only |
| `assets/img/social-instagram.svg`, `social-facebook.svg`, `social-tiktok.svg` (also inlined as `<symbol>` in `partials/01-menu.html`) | https://cdn.jsdelivr.net/npm/simple-icons@16.33.0/icons/{instagram,facebook,tiktok}.svg (curl 2026-10-02, 2.1 KB / 0.5 KB / 0.7 KB); Simple Icons, licence **CC0-1.0** (package.json of simple-icons 16.33.0); the WhatsApp glyph in the sheet is the same Simple Icons path the pricing lane already uses | single-colour brand glyphs for the three profile links of the club (URLs from FACTS F-ADR-16); drawn in `currentColor`; brand marks stay the property of their owners and are used only to link the club's own profiles | menu sheet lane |

## Added by the classes lane (2026-10-02, instructor portraits)
Downloaded with curl from the club's own media library on 2026-10-02 (public files, allowed by the brief); cropped square around the face with Pillow, 128x128 px, webp. Originals kept only in the lane's scratch folder, not in the project.

| File in v3 | Origin (read-only) | What it is | Size now |
|---|---|---|---|
| `assets/img/coach-rey.webp` | https://elitefitbali.com/wp-content/uploads/2025/02/REY-683x1024.webp | Rey's portrait from the club's trainer grid (/perform/, entry 'Rey'); 683x1024 download, 35910 bytes | 3176 bytes |
| `assets/img/coach-icha.webp` | https://elitefitbali.com/wp-content/uploads/2025/02/ICHA-683x1024.webp | Icha's portrait from the trainer grid (entry 'Icha'); 683x1024, 35404 bytes | 3418 bytes |
| `assets/img/coach-ain.webp` | https://elitefitbali.com/wp-content/uploads/2026/05/ain.jpg-e1779367708306-722x1024.jpeg | AIN's portrait from the trainer grid (entry 'AIN'); 722x1024, 79713 bytes | 4130 bytes |
| `assets/img/coach-tinos.webp` | https://elitefitbali.com/wp-content/uploads/2025/02/TINOS-683x1024.webp | portrait file TINOS-scaled.webp, which the club's grid shows under the entry 'Martijn Taken' (FACTS F-COA-06; the grid entry named 'TINOS' shows REY-scaled.webp as a placeholder); used for Tinos, pairing of portrait and name to be confirmed by the club; 683x1024, 36370 bytes | 3226 bytes |

## Added by the visit lane (2026-10-02, entrance loop)
Cut with ffmpeg (x264, local build tool only) from the club's own master footage, through `_tools/with-browser-lock.sh`. Frames checked by eye on a contact sheet: 0 to 1.1 s is the roadside sign with the promo text (not used), 1.2 to 2.7 s the front wall with the EF mark, palm leaves and the glass door, no people and no text but the club's own mark (used), 2.8 s on the reception wall (not used: tablet screens).

| File in v3 | Origin (read-only) | What it is | Size |
|---|---|---|---|
| `assets/video/visit-entrance.mp4` | `_inputs/footage/Header-Portrait.mov` 1.30 to 2.70 s (32 frames at 24 fps), cropped 1004x1255 from the top-left offset 38/0 (drops the scooter at the bottom edge), scaled to 720x900, played forward then backward (62 frames, 2.58 s, no audio), loop starts at the frame of 2.1 s so the poster equals frame 0 | silent ambient loop of the club's front wall, x264 high, crf 28 | 326978 bytes |
| `assets/img/visit-entrance-poster.webp` | frame 0 of the loop above (= source frame at 2.1 s), webp quality 72 | poster, set by `visit.js` only when the block is about to come into view | 36006 bytes |

## Re-cut by the classes lane (2026-10-02, sharper instructor portraits)
Same four people and the same square face crop as above, re-cut at 192x192 px (webp, quality 90) from the largest public originals of the club's media library, downloaded with curl on 2026-10-02; files keep their names (`coach-<id>.webp`), so layouts and the Coaches section are unaffected.

| File in v3 | Origin (read-only) | Download size | Size now |
|---|---|---|---|
| `assets/img/coach-rey.webp` | https://elitefitbali.com/wp-content/uploads/2025/02/REY-scaled.webp (1707x2560) | 178046 bytes | 5008 bytes |
| `assets/img/coach-icha.webp` | https://elitefitbali.com/wp-content/uploads/2025/02/ICHA-scaled.webp (1707x2560) | 190174 bytes | 5414 bytes |
| `assets/img/coach-ain.webp` | https://elitefitbali.com/wp-content/uploads/2026/05/ain.jpg-e1779367708306.jpeg (1279x1815) | 261536 bytes | 6494 bytes |
| `assets/img/coach-tinos.webp` | https://elitefitbali.com/wp-content/uploads/2025/02/TINOS-scaled.webp (1707x2560; the file the club's grid shows under 'Martijn Taken', pairing with the name Tinos to be confirmed by the club) | 200110 bytes | 5008 bytes |

## Change log
- v3.0 — 2026-10-02: created with the clones above.
- 2026-10-02 · menu sheet lane: row added for the three social glyphs (Simple Icons 16.33.0, CC0-1.0).
- 2026-10-02 · visit lane: rows added for the entrance loop and its poster.
