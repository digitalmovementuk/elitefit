> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

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
