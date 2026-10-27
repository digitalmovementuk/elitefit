> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Clip encoding — Elite Fit Bali homepage v2.1

Version: v2.1 — 2026-10-01 · lane C-enc (Opus 5.5 max)
Changelog: v2.1 — 2026-10-01 created: seven slot clips cut from the club's own media-library masters, rec-jacuzzi and the trainer portraits stay stills.

Machine form: `media/manifest.json` (written by `media/tools/manifest.py`, every number read from the files in `assets/`). Evidence: `_qa/v2.1/C-enc/`.

## 1. Slots

All seven clips come from the club's own public media library on elitefitbali.com (`source: page`), not from the 720x1280 screen-recorded reel. Windows are in the seconds of the source file named in front of them (P = `Header-Portrait.mov`, 1080x1350, 24 fps; L = `Header-Video-Landscape.mov`, 1920x1080, 24 fps).

| Slot | Source → window | File | Bytes | Size, fps, length | Crop in source px (x,y,w,h) | objectPosition | Loop | Shows |
|---|---|---|---|---|---|---|---|---|
| zone-perform | P 29.50–30.58 | assets/video/zone-perform.mp4 | 505,728 | 720x960, 30 fps, 3.40 s | 34,0,1012,1350 | 50% 50% | breathe | glide through the machine hall: plate-loaded machines, lat pulldown frame, EF mark on the rear wall; no people |
| zone-recharge | P 44.29–47.71 | assets/video/zone-recharge.mp4 | 668,208 | 720x960, 20 fps, 3.10 s | 34,0,1012,1350 | 50% 50% | crossfade seam, starts on the pool | loungers and palms from above, the club's own dissolve into the aerial pool, a swimmer seen from behind |
| zone-classes | L 5.75–6.67 + P 32.38–33.42 + P 33.50–34.21 | assets/video/zone-classes.mp4 | 466,259 | 540x720, 20 fps, 3.20 s | L 380,0,810,1080 · P 0,260,700,933 · P 300,630,540,720 | 50% 50% | cuts (the seam is a cut between two shots) | floor class with leg raises and kettlebells, V-ups with a coach standing by, hex-ring agility drill; all faces cropped out |
| rec-sauna | P 39.58–40.92 | assets/video/rec-sauna.mp4 | 482,012 | 720x900, 30 fps, 4.50 s | 0,0,1080,1350 | 50% 50% | breathe | timber benches on two tiers, LED strips; no people |
| visit-entrance | P 1.50–2.62 | assets/video/visit-entrance.mp4 | 484,639 | 720x614, 30 fps, 4.50 s | 0,330,1080,920 | 50% 60% | breathe | sunlit concrete front wall, black EF mark, ELITE FIT lettering, palm leaves; no sign, no people |
| rec-ice | P 35.96–36.83 | assets/video/rec-ice.mp4 | 472,734 | 720x900, 30 fps, 4.00 s | 0,0,1080,1350 | 50% 70% | breathe | the sand-tiled plunge room, both tubs, window strip; no people |
| rec-steam | P 38.29–39.50 | assets/video/rec-steam.mp4 | 477,019 | 720x900, 30 fps, 4.50 s | 0,0,1080,1350 | 50% 50% | breathe, starts on the wide view | mosaic arch, LED strip, round stone steam unit; no people |

Total clips: **3,556,599 B (3.39 MiB) for seven clips**, budget 6 MB. Posters (WebP q78, clip frame 0, same size as the clip): 189,000 B together, 17.6–41.5 KB each, at `assets/img/<slot>-poster.webp`.

Origins: P = https://elitefitbali.com/wp-content/uploads/2026/09/Header-Portrait.mov · L = https://elitefitbali.com/wp-content/uploads/2026/09/Header-Video-Landscape.mov (downloaded by lane C-src, inventory in `media/SOURCING.md`).

### Kept as stills (not in the manifest)

| Slot | Why |
|---|---|
| rec-jacuzzi | The only footage of that room is the same 0.85 s shot as rec-ice (P 35.96–36.83), with the jets off. A second crop would show the same room twice in a sequence whose job is to show four different rooms, and calm water reads as cold. The still shows the bubbling jacuzzi. The Landscape spa triptych (L 3.71–4.88) shows the jets on, but with guests' faces in a 640 px panel. |
| trainer portraits (5) | No clip shows or names a trainer (C-src checked both masters and the film). |

## 2. Box ratios and sizes

Desktop measured in Chromium at 1440: zone tiles 382x509 (3:4), recovery images 663x663 (1:1), visit 687x585 (1.174:1), coach cards 219x273. Phone ratios from the CSS (`aspect-ratio`): zone tiles 4:5, recovery 4:5 full bleed, visit 3:2.

Rule used: encode at the tallest ratio a slot takes at any width, so `object-fit: cover` only ever crops top and bottom and every pixel of width is kept. Zones 3:4 (phone 4:5 loses 6 % of the height), recovery 4:5 (desktop 1:1 loses 20 %), visit 1.174:1 (phone 3:2 loses 22 %, 1024–1279 px 16:9 loses 34 %). `objectPosition` per clip sets which part of the height survives.

Width: about 2x the phone box (zone tiles about 350 CSS px, recovery 390 CSS px), so 720 px, from a source crop at least 1,012 px wide: every clip is a downscale, never an upscale. zone-classes is 540 px wide because its face-free crops are only 540–700 px wide in the source.

## 3. How each clip is made (`media/tools/clip.py`, plans in `media/tools/plans.py`)

1. **Decode** the window frame-exact through ffmpeg with an explicit BT.709 matrix (OpenCV would decode with BT.601 and shift colours). Frame-exact selection verified against a sequential decode on all three sources.
2. **Drop duplicate frames.** Parts of the masters are slowed by repeated frames (every 5th or 6th frame repeats in the steam and aerial-pool shots); these are dropped so motion is even.
3. **Loop.** Every clean shot is a single take of 0.7–1.7 s, so:
   - *breathe* (perform, sauna, steam, ice, visit): the camera move is played forward and back on a cosine ease, so the speed falls to zero at each turn, like a slow dolly in and out. Camera position comes from the measured optical flow, so speed ramps in the edit are evened out. In-between frames are drawn by bidirectional optical flow (OpenCV DIS); held-out real frames were rebuilt at about 40 dB on the sauna test, by eye identical, where a plain blend gave 30–33 dB with visible double edges. Only used on rooms and machines with no people and no visible water flow. Peak speed 0.65–0.96x the original, mean 0.42–0.61x. Seamless by construction.
   - *crossfade* (recharge): the shot runs once, the last 8 frames dissolve into the first 8 (cosine), and the file is rotated to start on a clean frame of the pool, so the seam sits inside continuous footage.
   - *cuts* (classes): three shots joined by straight cuts, as in the club's edit; the loop point is a cut between two different shots, so nothing jumps inside a shot. No ping-pong on people.
4. **Crop and scale** at source resolution, then downscale with area filtering. The scaler refuses to upscale.
5. **Encode:** H.264 High@3.1, yuv420p, BT.709 matrix, TV range, no audio, `-movflags +faststart`, one keyframe per loop, preset veryslow. The crf is searched per clip for its byte target (classes 19, ice 19.5, steam 22, visit 22, sauna 23.5, perform 23.5, recharge 27.5). 24 fps footage stays on its own frames (cuts and crossfade clips play at 20 fps, 0.83x, for an even cadence and a calmer pace); breathe clips are drawn at 30 fps.
6. **Poster** = the exact RGB frame 0 that went into the encoder, WebP q78. Measured mean difference poster vs decoded frame 0: 1.6–2.6 of 255 (no visible jump).

## 4. Measured on the shipped files (`_qa/v2.1/C-enc/loopcheck-r1.json`)

| Slot | Frames | Seam step (0–255) | Median step inside | Seamless | Poster vs frame 0 |
|---|---|---|---|---|---|
| zone-perform | 102 | 1.84 | 5.71 | yes | 1.57 |
| zone-recharge | 62 | 7.51 | 7.74 | yes | 2.62 |
| zone-classes | 64 | 53.4 | 5.98 | cut between shots by design | 1.88 |
| rec-sauna | 135 | 2.11 | 3.44 | yes | 1.91 |
| visit-entrance | 135 | 2.57 | 5.82 | yes | 2.29 |
| rec-ice | 120 | 1.63 | 1.58 | yes | 1.99 |
| rec-steam | 135 | 1.74 | 3.22 | yes | 1.77 |

All files: H.264 High, yuv420p, BT.709 matrix, no audio stream, `moov` before `mdat` (fast start), checked by `manifest.py`.

## 5. Honest limits

- **Footage rights.** The masters are the club's own public files from its media library; use is for the proposal only. Before launch the club should confirm use, and releases for the people in zone-classes (bodies only, faces cropped out) and zone-recharge (a swimmer seen from above, no face). The other five clips show no people.
- **Repeats with the hero.** The hero loop plays reel 30.43–44.10 s, which is about P 30.6–44.25. rec-ice, rec-steam, rec-sauna and two of the three zone-classes shots therefore also appear in the hero loop. zone-perform (just before it), zone-recharge (after it) and visit-entrance are new footage.
- **visit-entrance** is the EF mark on the front wall, close up. It no longer shows the street, the parking or the door that the still shows, so it helps recognition, not wayfinding.
- **Synthesised frames.** The breathe clips contain optical-flow in-betweens. No warping was visible on the loop sheets, but very fine texture (mosaic tiles, timber grain) is where it would show first.
- **Sharpness on desktop.** Recovery images are 663 CSS px on desktop, so a 720 px clip is upscaled about 1.8x on a 2x screen; zone tiles (382 CSS px) are close to 1:1. The 720x1280 reel would have been softer still: a 720→540→720 round trip on it lost almost nothing (PSNR 38–53 dB), meaning it holds only about 540 px of real detail.
- **zone-perform is dark** (the machine hall is lit low in the club's footage). Its first frame is the lat pulldown frame with the hall behind it.
- **Colour tags** match the hero clip: BT.709 matrix and TV range are tagged; primaries and transfer are left unspecified, which browsers treat as BT.709. Not verified in a browser: the WebKit/Chromium check of poster against clip frame (page with three tag variants: matrix only, full 1-1-1, sRGB transfer) waited behind 50+ jobs in the shared browser lock and was withdrawn. It is ready to run: `node SP/cenc/ctest/t.cjs` through `with-browser-lock.sh`. If WebKit shows a step, retag without re-encoding: `ffmpeg -i in.mp4 -c copy -bsf:v h264_metadata=colour_primaries=1:transfer_characteristics=1:matrix_coefficients=1 -movflags +faststart out.mp4`.

## 6. Reproduce

```
SP/venv/bin/python media/tools/clip.py <slot> --out-root <dir> --qa <dir>      # one slot, plan in plans.py
SP/venv/bin/python media/tools/manifest.py final <slots…> --undecided slot=reason
SP/venv/bin/python media/tools/loopcheck.py <out.json> <slots…>
SP/venv/bin/python media/tools/rejects.py <out.jpg>                              # rejected windows sheet
```
Helper tools: `sheet.py` (frame-exact contact sheet), `shots.py` (cut detection), `cropview.py` (crop boxes on source frames), `rgbio.py` (BT.709 frame I/O). Encoder: x264 inside `imageio-ffmpeg` (ffmpeg 7.1), local build tool only.
