> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Report lane C-sourcing (Elite Fit Bali homepage v2.1)

Version: v2.1 — 2026-10-01 · lane C-src (Sonnet 5.5 xhigh).
Changelog: 14:46 skeleton; 14:51 early note (originals downloaded); 15:3x final: inventory, contact sheets, scene maps, windows.json, SOURCING and INSTAGRAM-REQUESTS (md + html).

## Forward to the encoding lane (C-enc) and C-int
- NEW SOURCE, better than the reel: `media/sourcing/originals/Header-Portrait.mov` is 1080x1350 (4:5 native), 47.75 s, 24 fps, 30 Mbit/s, 193 MB, the clean master of the walkthrough footage that `hero-reel-9x16.mp4` shows at 720x1280. Cut every slot from it, not from the reel.
- Ranked in/out windows per slot, in seconds of Portrait (and Landscape fallbacks): `media/sourcing/windows.json`; human version SOURCING.md section 6. Reel times in the change request are shifted by up to 1.5 s against Portrait: use Portrait times.
- Every clean shot is a single uncut take of 0.6 to 2.1 s (rec-ice/jacuzzi 0.85, steam 1.15, sauna 1.3, entrance 1.4, perform 1.5, recharge 1.6 to 2.1, classes 0.7): the loop needs ping-pong or slow motion. Landscape file (1920x1080, 20.9 s) has the spa rooms with guests as three vertical 640x1080 panels (x=0 jacuzzi room, 640 sauna, 1280 steam), 1.17 s at 3.71 to 4.88 s.
- Avoid in Portrait: 0 to 1.25 s (promo sign), 11.2 to 17.4 s (menu boards with prices), 19.1 to 19.96 s, 24.4 to 24.9 s.
- `EF-Better-Together-30mbps.mp4` (34 MB, 720x1280, 52.4 s) is a captioned brand film, NOT the reel: no slot use.
- Large .mov files: seek with `-ss` before `-i`, one pass, silent output (both carry PCM audio), run via with-browser-lock.sh.

## Result (measured)
- Credits: Firecrawl shared balance 94 before, 85 after (cap 10 respected); own scrapes 6 (5 pages + 1 public media-list URL, each `creditsUsed` 1) plus 1 refused Instagram call (billing not shown); the rest came from other sessions. Serper skipped. Key never printed. No browser.
- Videos on club pages: 0. Club media library (public WP REST list): 3 videos, 3 downloaded, 363,433,002 B = 363.4 MB (Portrait 193.2, Landscape 136.2, Better Together 34.0). Plus 10 feed stills (1.1 MB).
- Slots coverable from Portrait: zone-perform, zone-recharge, zone-classes, rec-sauna, rec-ice, rec-jacuzzi, rec-steam, visit-entrance (all with a people-free or near people-free shot). Not coverable: trainer portraits, any other decorative photo.
- Instagram: nothing through the allowed route (Firecrawl: "we do not support this site"); club feed shows 10 reels from Oct to Nov 2024 with expired video links (not requested). INSTAGRAM-REQUESTS.md written.
- Contact sheets: `media/sourcing/contact/` (1 fps for all 3 videos, 0.5 s zooms, existing reel comparison).

## Unverified
- Portrait is the pixel-identical master of the hero reel (by eye on sheets only); where the 3 videos are used live (not on any of 6 scraped pages); guest releases; the club's current Instagram; embeds on the 20 unscraped club pages.

## Blockers / requests
- None blocking. Lock queue was deep (about 50 waiters, random acquisition), so scene detection and sheets ran niced single-threaded outside the lock (decode of 1080p, 3 to 13 s each); noted for the integrator. No request files to other lanes.

## Files I created (all under homepage-v2.0/_build/v2.1/)
- media/SOURCING.md, media/SOURCING.html, media/INSTAGRAM-REQUESTS.md, media/INSTAGRAM-REQUESTS.html, report-C-src.md
- media/sourcing/windows.json, media/sourcing/originals/ (3 videos + instagram-feed-thumbs/), media/sourcing/contact/, media/sourcing/raw/ (Firecrawl outputs, scripts download.sh, contact.py, scenes.sh, md2html.py, scene lists)
