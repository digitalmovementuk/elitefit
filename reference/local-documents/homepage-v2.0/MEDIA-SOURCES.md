> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Media sources: Elite Fit Bali homepage v2.0

Version: v2.0 — 2026-10-01 · owner: integrator (Step 3) · compiled from the lane reports (L1, L4, L5, L2), `assets/fonts/LICENSES.md` and the v1.3 `proposal/site-preview/MEDIA-SOURCES.md`. Change log at the bottom.

Every photo, the reel and both logos are the club's own material (elitefitbali.com and the club's Instagram), shown back to the club inside a sales proposal: **client's own copyright, proposal use only**, as in v1.3. No stock footage and no stock photo is used. No library is shipped (`assets/vendor/` does not exist). **Nothing external loads at runtime**: every file below is served from the page's own folder; measured on the assembled page, zero requests to any other origin (`_qa/v2.0/perf/integrator-r1/`).

## Video

| File | Specs | Source | Owner, licence |
|---|---|---|---|
| `assets/video/hero-reel-9x16.mp4` | 540×960, 30 fps, 13.67 s, no audio, H.264 High@3.1, faststart, 1,305,357 B | The club's own Instagram reel (@elitefitbali, caption "Every great community deserves a place to call home …"), screen-recorded on iPhone by Raoul on 30.09.2026 (v1.3 MEDIA-SOURCES). Lane L1 cut source frames 913–1322 (30.43–44.10 s) and rotated the loop to start at frame 1041 (pool deck). Re-encoded with the x264 encoder inside the `imageio-ffmpeg` Python package (ffmpeg 7.1) already on the build machine: crf 27, preset veryslow, yuv420p, BT.709. That encoder is a local build tool only; it is not shipped and nothing calls it at runtime. Rerun: `python3 _build/preview/L1-encode-media.py 27`. | Elite Fit Bali. Client's own copyright, proposal use only |

Before any live use, ask the club for the original reel file: this copy comes from a screen recording of Instagram's compressed version.

## Images

| File | Size, bytes | Source (club uploads path under `elitefitbali.com/wp-content/uploads/` unless noted) | Made by | Owner, licence |
|---|---|---|---|---|
| `assets/img/hero-poster-9x16.webp` | 720×1280, 54,812 | Frame 1041 (34.70 s, pool-deck courtyard) of the reel above = frame 0 of the web cut; WebP q80 | L1 | club, proposal use only |
| `assets/img/hero-poster-9x16-lqip.webp` | 72×128, 1,148 (inlined in `hero.css` as a data URI, no request) | same frame | L1 | same |
| `assets/img/hero-logo-mark.png` | 299×177, 2,575 | The club's EF mark, v1.3 `logo-mark-taupe.png`, copied unchanged (club's own PNG) | L1 | same |
| `assets/img/zone-perform.webp` | 800×1000, 79,860 | `2023/12/DSC00061.jpg` (original in `brand/evidence-v1.0/site-images-original/`), crop x 10–63 %; chosen instead of the spec's `2026/09/6` because that photo shows treadmills, not the plate-loaded floor the copy names | L4 | same |
| `assets/img/zone-recharge.webp` | 800×1000, 118,596 | `2026/09/17.jpg`, crop x 15–68 % | L4 | same |
| `assets/img/zone-classes.webp` | 600×750, 80,972 | `2025/02/booty-and-core` via v1.3 `class-outdoor.webp` (no original in the evidence folder), crop x 8–68 % | L4 | same |
| `assets/img/rec-ice.webp` | 900×1125, 78,486 | `2026/09/11.jpg`, crop x 24.5–77.8 % | L4 | same |
| `assets/img/rec-jacuzzi.webp` | 900×1125, 40,784 | `2024/09/Recharge-Jacuzzi.jpg` (3926×5889), crop y 7–90 % | L4 | same |
| `assets/img/rec-steam.webp` | 900×1125, 81,286 | `2026/09/13.jpg`, crop x 23.3–76.7 % | L4 | same |
| `assets/img/rec-sauna.webp` | 900×1125, 73,420 | `2026/09/12.jpg`, crop x 0–53 % | L4 | same |
| `assets/img/team-rey.webp` | 600×750, 17,278 | v1.3 `trainer-rey.webp` ← `2025/02/REY-scaled.webp` | L5 | same; portrait consent not recorded (see DEVIATIONS) |
| `assets/img/team-ain.webp` | 600×750, 20,112 | v1.3 `trainer-ain.webp` ← `2026/05/ain.jpg-e1779367708306.jpeg` | L5 | same |
| `assets/img/team-icha.webp` | 600×750, 18,378 | v1.3 `trainer-icha.webp` ← `2025/02/ICHA-scaled.webp` | L5 | same |
| `assets/img/team-martijn.webp` | 600×750, 15,618 | v1.3 `trainer-martijn.webp` ← `2025/02/TINOS-scaled.webp` (the live site shows it under "Martijn Taken") | L5 | same |
| `assets/img/team-putu.webp` | 600×750, 17,922 | v1.3 `trainer-putu.webp` ← `2025/02/PUTU-scaled.webp` | L5 | same |
| `assets/img/visit-entrance.webp` | 1200×800, 102,828 | `2026/09/1.jpg` (original 6000×4000 in the evidence folder), crop 5460×3640 from the top left | L5 | same |
| `assets/img/visit-entrance-800.webp` | 800×533, 58,722 | same, for `srcset` | L5 | same |
| `assets/img/visit-logo-white.png` | 208×173, 1,861 | v1.3 `logo-white.png` ← `2023/11/Elite_fit_master-1-3.png`, copied unchanged | L5 | same |

All photos: cropped and re-encoded to WebP with Pillow or OpenCV on the build machine; `width`/`height` in the markup; everything below the first screen is `loading="lazy"`.

## Fonts

| File | Family | Licence | Source |
|---|---|---|---|
| `assets/fonts/syne-latin-var.woff2` (34,560 B) | Syne 2.200, variable 400–800, latin | SIL Open Font License 1.1, © 2019 The Syne Project Authors | fonts.gstatic.com via the Google Fonts CSS API, downloaded 01.10.2026, self-hosted |
| `assets/fonts/hanken-grotesk-latin-var.woff2` (34,664 B) | Hanken Grotesk 3.013, variable 100–900, latin, upright (italicAngle 0, checked with fontTools) | SIL Open Font License 1.1, © 2021 The Hanken Grotesk Project Authors | same |

Details and the OFL notes: `assets/fonts/LICENSES.md` (ship it with the fonts). The first Hanken download was the italic cut; it was replaced on 01.10.2026 and kept only as `_build/_wrong-download-hanken-grotesk-ITALIC-latin-var.woff2` (not referenced, not shipped). The size-adjusted fallbacks use the visitor's local Arial / Arial Bold; no font file is added for them.

## Inline graphics (in the markup, no file)

| Where | What | Source |
|---|---|---|
| `partials/header.html` | WhatsApp glyph | Simple Icons path, CC0 (L1) |
| `partials/buybar.html` | WhatsApp glyph | copied from the v1.3 `index.html` (L2); v1.3 did not record its origin |
| `partials/header.html`, `partials/hero.html`, `partials/checkout.html` | menu, close, pause and play icons | simple strokes drawn by the lanes |

## Not used in v2.0

- v1.3's Pexels clip `hero-pool-ripples.mp4` (Pexels License): not copied, not referenced.
- Google Fonts at runtime (v1.3 loaded Syne and Manrope from fonts.googleapis.com): replaced by the two self-hosted files.
- No map tile, no iframe, no embed, no analytics, no third-party script.

## Change log

- v2.0 — 2026-10-01 — first version for the v2.0 homepage (integrator), from the lane reports and the v1.3 record.


---

Version: v2.1 — 2026-10-02 · owner: integrator · the v2.1 section of this file, compiled from [SOURCING.md](_build/v2.1/media/SOURCING.md), [ENCODING.md](_build/v2.1/media/ENCODING.md) and [manifest.json](_build/v2.1/media/manifest.json).

## v2.1 additions (2026-10-02)

The v2.0 statements in this file still hold. Everything below is the club's own footage, shown back to the club inside a sales proposal: **client's own copyright, proposal use only**. No stock footage, no stock photo. The clips and posters are self-hosted in `assets/video/` and `assets/img/`. The hero reel is unchanged (see the v2.0 entry).

### 1. Clips: slot, source, window, file

Seven clips. All come from the club's own public media library on elitefitbali.com (manifest `source: page`), not from the 720x1280 screen-recorded reel. Windows are in seconds of the source file named in front of them: Portrait is `Header-Portrait.mov` (1080x1350, 24 fps), Landscape is `Header-Video-Landscape.mov` (1920x1080, 24 fps).

| Slot | Source | Origin URL | Window (s) | File | Bytes | Loop type | Crop (source px x,y,w,h; objectPosition) |
|---|---|---|---|---|---|---|---|
| `zone-perform` | page (media library, Portrait) | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov | Portrait 29.50–30.58 | `assets/video/zone-perform.mp4` | 505,728 | breathe: the camera move plays forward and back on a cosine ease, optical-flow in-betweens, seamless | 34,0,1012,1350; 50% 50% |
| `zone-recharge` | page (media library, Portrait) | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov | Portrait 44.29–47.71 | `assets/video/zone-recharge.mp4` | 668,208 | crossfade: the last 8 frames dissolve into the first 8, file rotated to start on the pool, seam inside continuous footage | 34,0,1012,1350; 50% 50% |
| `zone-classes` | page (media library, Landscape and Portrait) | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Video-Landscape.mov and https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov | Landscape 5.75–6.67 + Portrait 32.38–33.42 + Portrait 33.50–34.21 | `assets/video/zone-classes.mp4` | 466,259 | cuts: three shots joined by straight cuts, the loop point is a cut between two shots | Landscape 380,0,810,1080; Portrait 0,260,700,933; Portrait 300,630,540,720; 50% 50% |
| `rec-sauna` | page (media library, Portrait) | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov | Portrait 39.58–40.92 | `assets/video/rec-sauna.mp4` | 482,012 | breathe, seamless | 0,0,1080,1350; 50% 50% |
| `visit-entrance` | page (media library, Portrait) | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov | Portrait 1.50–2.62 | `assets/video/visit-entrance.mp4` | 484,639 | breathe, seamless | 0,330,1080,920; 50% 60% |
| `rec-ice` | page (media library, Portrait) | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov | Portrait 35.96–36.83 | `assets/video/rec-ice.mp4` | 472,734 | breathe, seamless | 0,0,1080,1350; 50% 70% |
| `rec-steam` | page (media library, Portrait) | https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov | Portrait 38.29–39.50 | `assets/video/rec-steam.mp4` | 477,019 | breathe, starts on the wide view, seamless | 0,0,1080,1350; 50% 50% |

Media library entries (public WordPress REST list, no login): ID 12366 "Header – Portrait" (attachment page `/header-portrait/`) and ID 12415 "Header Video – Landscape" (`/header-video-landscape/`). Both were uploaded on 2026-09-22; they are not placed on any of the club pages that were read.

Total of the seven clips: **3,556,599 B (3.39 MiB)** against a budget of 6 MB.

| Slot | Poster | Poster bytes | Clip size, fps, length | Shows | People |
|---|---|---|---|---|---|
| `zone-perform` | `assets/img/zone-perform-poster.webp` | 20,846 | 720x960, 30 fps, 3.40 s | glide through the machine hall: plate-loaded machines, lat pulldown frame, EF mark on the rear wall | none |
| `zone-recharge` | `assets/img/zone-recharge-poster.webp` | 41,496 | 720x960, 20 fps, 3.10 s | loungers and palms from above, the club's own dissolve into the aerial pool | a swimmer seen from behind, no face |
| `zone-classes` | `assets/img/zone-classes-poster.webp` | 17,636 | 540x720, 20 fps, 3.20 s | floor class with leg raises and kettlebells, V-ups with a coach standing by, hex-ring agility drill | bodies, faces cropped out |
| `rec-sauna` | `assets/img/rec-sauna-poster.webp` | 27,574 | 720x900, 30 fps, 4.50 s | timber benches on two tiers, LED strips | none |
| `visit-entrance` | `assets/img/visit-entrance-poster.webp` | 30,448 | 720x614, 30 fps, 4.50 s | sunlit concrete front wall, black EF mark, ELITE FIT lettering, palm leaves | none |
| `rec-ice` | `assets/img/rec-ice-poster.webp` | 26,560 | 720x900, 30 fps, 4.00 s | the sand-tiled plunge room, both tubs, window strip | none |
| `rec-steam` | `assets/img/rec-steam-poster.webp` | 24,440 | 720x900, 30 fps, 4.50 s | mosaic arch, LED strip, round stone steam unit | none |

Posters: WebP q78, the exact first frame of each clip, 189,000 B together. Encoding: H.264 High, yuv420p, BT.709 matrix, no audio, `faststart`, one keyframe per loop, made with the x264 encoder inside the `imageio-ffmpeg` Python package (ffmpeg 7.1), a local build tool that is not shipped. Loop seams measured on the shipped files (`_qa/v2.1/C-enc/loopcheck-r1.json`): seamless on the six breathe and crossfade clips, a cut between shots by design on `zone-classes`.

### 2. Slots that stay stills

| Slot | Why |
|---|---|
| `rec-jacuzzi` | The only footage of that room is the same 0.85 s shot as `rec-ice`, with the jets off. A second crop would show the same room twice in a sequence of four different rooms, and calm water reads as cold. The still shows the bubbling jacuzzi. |
| trainer portraits (Rey, Ain, Icha, Martijn, Putu) | No clip shows or names a trainer; both masters and the brand film were checked. |

### 3. Where the footage comes from

- The club's pages hold no `<video>` tag, no Elementor video widget, no direct video link and no embed (the five pages read were `/`, `/perform/`, `/recharge/`, `/trainers/ain/` and `/schedule/hyrox-conditioning/`). The only video on `/perform/` and `/recharge/` is an Instagram feed plugin with 10 reels from October and November 2024.
- The club's public media library holds exactly three videos, all downloaded with plain `curl` (HTTP 200, no login, no cookies): `Header-Portrait.mov` (193.2 MB), `Header-Video-Landscape.mov` (136.2 MB) and `EF-Better-Together-30mbps.mp4` (34.0 MB), 363.4 MB in total. The originals are kept in `_build/v2.1/media/sourcing/originals/` and are not shipped. The brand film is not used (captions on nearly every shot, a mock Instagram post, large faces, end cards).
- `Header-Portrait.mov` is the clean 4:5 master of the walkthrough that the hero reel shows at 720x1280. That identity was established by eye on contact sheets, not by a pixel match. It replaces the reel as the source for every slot, so no slot depends on the screen recording any more; reel times in the change request are shifted by up to 1.5 s against Portrait.

### 4. Honest limits

- **People are visible in two clips.** `zone-classes` shows bodies with the faces cropped out, `zone-recharge` shows a swimmer from behind. Guest releases are unknown for both. The other five clips show no people.
- **Some clips also appear in the hero loop.** The hero plays reel 30.43–44.10 s, about Portrait 30.6–44.25 s, so `rec-ice`, `rec-steam`, `rec-sauna` and two of the three `zone-classes` shots repeat footage the visitor has already seen. `zone-perform`, `zone-recharge` and `visit-entrance` are new footage.
- **The visit clip is the EF wall close-up.** It no longer shows the street, the parking or the door that the still shows, so it helps recognition, not wayfinding.
- **The masters are the club's own public files, for proposal use only.** The club's original files and a short written OK are needed before launch. Where the club uses these three files on its live site is unverified; they look staged for new headers (uploaded 2026-09-22).
- **Synthesised frames.** The breathe clips contain optical-flow in-betweens; no warping was visible on the loop sheets, but fine texture (mosaic tiles, timber grain) is where it would show first.
- **Sharpness on desktop.** Recovery images are 663 CSS px wide on desktop, so a 720 px clip is upscaled about 1.8x on a 2x screen. `zone-perform` is dark because the machine hall is lit low in the club's footage.
- **Colour tags.** BT.709 matrix and TV range are tagged, primaries and transfer left unspecified. The WebKit and Chromium comparison of poster against clip frame was not run; it is ready (`_build/v2.1/media/ENCODING.md` §5).

### 5. Instagram

Not retrievable through the allowed route. The Firecrawl scrape of `https://www.instagram.com/elitefitbali/` returned "we do not support this site" and no content; no login, no account, no session and no downloader were used, and no workaround was tried. What the club's own site shows is a stale plugin feed of 10 reels (15 October to 1 November 2024) whose signed video links expired on 2024-11-05. None of the 10 is usable for a slot (skits with captions, a dog, a ghost costume, review overlays), none names a trainer, and the club's current reels are not visible. The 10 feed stills were downloaded only to identify the reels (1.1 MB, kept in `_build/v2.1/media/sourcing/originals/instagram-feed-thumbs/`, not shipped). What to ask the club for, slot by slot, and the unsent draft message are in [INSTAGRAM-REQUESTS.md](INSTAGRAM-REQUESTS.md).

### 6. Firecrawl credits

Serper was skipped (out of credits). The key was never printed.

| Lane | Used | Cap | What |
|---|---|---|---|
| C-sourcing | 7 | 10 | 6 scrapes of 1 credit each (five club pages and the public media-list URL) plus the refused Instagram call, billing not shown, counted as 1 |
| B (review line) | 3 | 3 | club homepage, Google Maps place page, `/recharge/` |
| S (timetable) | 7 | 8 | the timetable page, the class archive (2 pages) and four class pages |
| Total | 17 | | |

Shared balance: 94 before the lanes started, about 78 after (lane C-sourcing's check read 85 after its calls; lane S read 85 before and 78 after its seven). The account is shared with other sessions, so the figure is "about".

### 7. Other new files and where they come from

| File | What | Origin |
|---|---|---|
| `assets/img/avatar-ain.webp`, `avatar-icha.webp`, `avatar-martijn.webp`, `avatar-rey.webp` | round coach faces for the class cards, 96 px source, 1,198 to 1,604 B each | not written down in the lane files read; presumably crops of the v2.0 coach portraits (`team-ain`, `team-icha`, `team-martijn`, `team-rey`, listed above): **unverified**, to be confirmed |
| `assets/data/reviews.json` | the figures 4.7 and 488 and five reviews | Google knowledge panel (2026-09-30), the club's Trustindex widget (three quotes), the club's testimonial slider (Marianne), the v2.0 page (Tom J.); two quotes unverified |
| `assets/data/schedule.club.json` | 36 classes, no seat numbers | `https://elitefitbali.com/class-schedule/` read 2026-10-01, one class-page URL per row |
| WhatsApp glyph in `partials/whatsapp.html` | inline SVG | Simple Icons, CC0, same path as the header |
| Google "G" in `partials/reviewline.html` | inline SVG, original four colours | the official mark; the source of the path data is not recorded in the lane files read |
| four social symbols in `partials/header.html` | Instagram, Facebook, WhatsApp, Google Maps, drawn on a 24 px grid with the EF mark's slant | drawn by lane E1, no third-party artwork |

### 8. Before any live use

- Ask the club for the original files (the request list is in [INSTAGRAM-REQUESTS.md](INSTAGRAM-REQUESTS.md)) and for a written OK to show the clips; ask for releases for the people in `zone-classes` and `zone-recharge`.
- Confirm where the club uses `Header-Portrait.mov` and `Header-Video-Landscape.mov` on its own site.
- Confirm the Marianne and Tom J. quotes and refresh the review count.
- Confirm the origin of the four avatar files.

### Change log of this section

- v2.1 — 2026-10-02 — first version (document lane): per-slot table from ENCODING.md and manifest.json, the Instagram finding, the Firecrawl credits and the limits, from `_build/v2.1/media/` and the lane reports.


- v2.1 — 2026-10-02 — v2.1 section appended by the integrator (clips, honest limits, Instagram finding).
