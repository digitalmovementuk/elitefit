> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane L4 report: Recharge sequence and The club zones

Version: v1.0 — 2026-10-01 · lane L4 (Sonnet 5.5 xhigh) · for Michael and the integrator.

## 1. Files written

- `partials/recovery.html` (`#recharge`, `.rec*`, `data-zone="spa"`), `partials/zones.html` (`#club`, `.zones*`)
- `assets/css/recovery.css`, `assets/css/zones.css` (tokens only, no hex, no `transition` / `animation` / `@keyframes`; checked by grep)
- `assets/img/rec-ice|jacuzzi|steam|sauna.webp`, `assets/img/zone-perform|recharge|classes.webp`
- `_build/preview/L4.html` (generated, static; add `?motion=1` to turn on the throwaway motion mimic) and `_build/preview/L4-*.png`
- this report

Copy, ids, classes and hooks follow SECTIONS §5 and §6 word for word. Deviations and choices are in §6.

## 2. Hooks declared (also in the header comment of each partial)

| Hook | Where | Note for the motion lead |
|---|---|---|
| `data-motion="recovery"` | `.rec` | markup ships `data-stage="0"`; motion.js owns it from there |
| `data-motion-layer="image"` | `.rec__img` (figure, also `data-motion="tile"`) | |
| `data-motion-layer="tone"` | `.rec__tone` (empty, `aria-hidden`) | the panel surface; in the static state it paints the same colour as the stage |
| `data-motion-layer="temp"` | `.rec__temp` (`.num.num--xl`, `role="img"`, `aria-label="4 to 6 degrees Celsius"`, `data-value-min/max`) | real text stays in the DOM |
| `data-motion-layer="label"` | `.rec__copy` = wrapper of `.rec__label` (h3) **and** `.rec__line` | the line crossfades with the label |
| `data-stage-active="true"` | `.rec__stage`, set in markup on the first stage | motion.js moves it |
| `tab-indicator` | `.rec__dots`; each `.rec__dot` carries `data-stage-to="0..3"`, `data-selected`, `aria-current="true"` on the active one | motion.js: on click scroll that stage's `.rec__img` into view, then set both attributes. Real `<button>`s, 44×44, labels "Show ice bath, 4 to 6 degrees" … |
| `tile` | `.rec__img`, `.zones__img` (on the figure) | |
| `parallax` + `data-motion-depth="0.04"` | the `<img>` inside each `.zones__img` (not the figure) | clip-path and translate would fight on one element; CSS gives the img 1.25 rem overscan top and bottom at ≥ 1024 with hover |
| `stagger` / `data-motion-item` / `lift` | `.zones__grid`, `.zones__tile` | |
| `reveal-words` (H2s), `reveal` (ledes, `.rec__foot`) | added from the §13 table | |
| `price-morph`, `press` | foot button and its `.num[data-value="300000"]` | |
| `data-open-checkout data-tier="recharge" data-length="day"` | `.rec__cta` | shop.js |

Emitted event: `ef:recovery:stage` is for motion.js to emit (I own no JS file). State attributes I rely on: `.rec[data-stage]`, `.rec__stage[data-stage-active="true"]`.

## 3. How the two states work (one markup)

**Static (default: no JS, reduced motion, data-saver, `html:not(.motion-ok)`).**
- < 760: four full-bleed stage blocks one after another: image 4:5, then number, label, line, centred, each on its own tone (`[data-stage-key]` from tokens.css), line max 30ch. Dots hidden.
- ≥ 760: each stage is a full-bleed tone band, text left, image right (1:1).
- All boxes are reserved with `aspect-ratio`; no pinning.

**Enhanced (`html.motion-ok .rec`, ≥ 1024 only; below 1024 it is identical to static, nothing is pinned on a phone).**
- `.rec__stages` becomes a two-column grid inside the container. `.rec__stage` becomes `display: contents`: its image goes to the right column (rows 1–4, 1:1, `--space-7` gaps), its text panel `.rec__sticky` goes to the left cell.
- The four `.rec__sticky` panels share one cell, are `position: sticky; top: calc(var(--hdr-h) + var(--space-6))`, all the same explicit height `--rec-panel-h = clamp(22rem, 100svh - …, 34rem)`. Inactive panels have `opacity: 0` and `pointer-events: none` (static values, no transition); the motion layer does the crossfade. No pinning beyond the natural height of the four images.
- `.rec__dots` sticks under the panel (natural place under it, so sticky never pushes it onto the panel; the panel keeps a margin-bottom so the pair stays inside the grid area at the end of the range).

**Dependency to note:** in the enhanced state stages 1–3 are hidden by CSS until motion.js switches `data-stage-active`. If `html.motion-ok` is set but motion.js never runs (script error, blocked), desktop visitors see only the ice-bath text. Request to M or the integrator: motion.js removes `motion-ok` from `<html>` if its init throws, or sets a flag that the head script waits for.

**Number sizing.** `.rec__temp { font-size: min(var(--fs-num-xl), 21vw) }`, then `min(var(--fs-num-xl), 21vw, 21cqi)` inside `@supports (width: 1cqi)` with `container-type: inline-size` on `.rec__sticky`. At 390 that is the token floor, 60 px (the spec's formula, not enlarged); at 1440 in the panel it is 86 px.

## 4. Assets and sources

All club photos are the club's own material (elitefitbali.com/wp-content/uploads/), proposal use only, same basis as v1.3 MEDIA-SOURCES.md. Cropped from the full-size originals in `brand/evidence-v1.0/site-images-original/` (6000×4000, better than the 1100 px v1.3 files), 4:5 crop at full height, WebP (Pillow, quality 60–84, method 6).

| File | Source (uploads path) | Crop and focal | Size | Bytes |
|---|---|---|---|---|
| `rec-ice.webp` | `2026/09/11.jpg` | x 24.5–77.8 %, full height; both pools and the plant | 900×1125 | 78 486 |
| `rec-jacuzzi.webp` | `2024/09/Recharge-Jacuzzi.jpg` (3926×5889) | full width, y 7–90 %; tiled edge and water, person at the edge | 900×1125 | 40 784 |
| `rec-steam.webp` | `2026/09/13.jpg` | x 23.3–76.7 %, heater on the centre line | 900×1125 | 81 286 |
| `rec-sauna.webp` | `2026/09/12.jpg` | x 0–53 %, window on the left edge, bench ends and LED glow | 900×1125 | 73 420 |
| `zone-perform.webp` | `2023/12/DSC00061.jpg` (see §6.1) | x 10–63 %, centre-left on the machines | 800×1000 | 79 860 |
| `zone-recharge.webp` | `2026/09/17.jpg` | x 15–68 %; pool, loungers, planter | 800×1000 | 118 596 |
| `zone-classes.webp` | `2025/02/booty-and-core` via v1.3 `class-outdoor.webp` (no original in the evidence folder) | x 8–68 %; the group | 600×750 (native, not upscaled) | 80 972 |

Total 553 404 bytes = 540 KB (limit 700 KB). `zone-recharge` is over the ~80 KB target (116 KB) because the foliage does not compress; q 50 would still be 104 KB, so I kept q 60. Desktop 1:1 is `object-fit: cover` on the 4:5 file (loses 10 % top and bottom), one file per stage, no `<picture>`. `width`/`height` on every img, `loading="lazy"`, `decoding="async"`.

## 5. Verified on the render

Tools: Playwright WebKit iPhone 390×844 and 375×812 (DPR 2, touch), Chromium 1440×900, WebKit desktop for the sticky geometry; served on port 8806. Measured:

- Console: no error or warning, no failed request, in all 6 runs (3 engines/sizes, each static and with the motion mimic).
- Horizontal scroll: `scrollWidth <= innerWidth` at 320, 375, 390, 760, 1023, 1024, 1440, 1920, static and mimic, WebKit and Chromium. No element extends past the viewport.
- CLS over load plus a full slow scroll of the sections: 0.0000 in all 6 runs.
- Number fits its column (measured at 320/360/390/759/760): "80–100°" is 258 of 280 px at 320, 263 of 350 at 390, 272 of 296 at 760; in the 1440 panel 377 of 409 px. At 320 the foot button wraps to two lines (59 px high), on purpose.
- Sticky geometry, WebKit and Chromium, 1024×768, 1280×720, 1440×900, 1920×1080, 21–22 scroll positions each: panel never overlaps the dots, panel and dots fully inside the viewport once stuck (panel bottom 648 at 1440×900, dots 660–704), and the end of the range is clean (dots bottom = bottom of the fourth image). Before the sticky range starts the panel is partly below the fold, which is normal.
- Tap targets measured: dots 44×44, zone links 119/115/118×44 (the whole tile is also a stretched link), CTA ≥ 44 high.
- Contrast, computed from the rendered colours (WCAG 2.x): ice label/line 12.07, number 4.43 (large numeral only, 60–128 px); jacuzzi 4.88 / 4.88; steam 5.35 / 5.35; sauna label/line 13.07, amber number 10.03. Section on sand: eyebrow, lede, note, dots 5.88. Zones tile: label 6.10, name/line/link 15.11; section eyebrow 5.49, h2 13.61. CTA ink on coral 6.52.
- Screenshots in `_build/preview/L4-{390,375,1440}-static-{recharge,club}.png` and `L4-{390,375,1440}-enh-{0..3}.png` (the enh set uses the throwaway script in L4.html). I looked at every state: 390 static stages, 390 and 1440 enhanced stages, 1440 and 820 static bands, zones at 390, 820, 1440.

Judged by eye only: the crops (ice shows both pools partly at 4:5, the left pool is a wedge; the 1:1 desktop crop shows more of it), the panel proportion at 1440 (544 px tall, content centred, quite a lot of tone), and the tile focal points. Not tested: Firefox, a real iPhone, the real motion.js (it did not exist), keyboard use of the dots with the real script.

## 6. Choices where the spec was ambiguous or wrong

1. **`zone-perform` source.** SECTIONS says `perform-gym-floor.webp` (2026/09/6) and describes plate-loaded machines in daylight. I looked at that file: it shows **treadmills and cross-trainers** in front of the glass wall. The alt text and the line ("Plate-loaded floor on Arsenal Strength, Panatta and Prime") would not match it. I used `2023/12/DSC00061.jpg` (leg press and plate-loaded machines in front of a glass wall, daylight; it is on the club's Perform page), which matches the spec's description, alt and line. If Michael wants the v1.3 picture, regenerate `zone-perform.webp` from `2026_09_6.jpg` and change the alt to the treadmills.
2. **Tile labels (`.zones__label`)** are not in the spec. I used phrases from the lede only: `The gym floor` / `Pool deck and four rooms` / `On the Perform side`. Change freely.
3. **Jacuzzi alt** is the spec's `Tiled edge of the warm pool`, but the photo shows a woman resting at the edge. The spec's ART-DIRECTION says "no people in the four stage images", SECTIONS says "person kept at the edge of frame"; SECTIONS is binding, so the person stays. Suggest an alt that names her if Raoul accepts the picture.
4. **`.rec__sticky`** is one panel per stage (four in the DOM), not one element for the whole left column; SECTIONS reads as a single column. This keeps one markup for both states.
5. **Dots** exist for the desktop enhanced state only (hidden < 1024 and whenever `motion-ok` is off), because without the script they would be dead buttons and a phone shows each stage as a full screen anyway.
6. **Number size on mobile** follows the spec's formula and is 60 px at 390. If the signature moment should be bigger on phones, `min(max(var(--fs-num-xl), 18.5vw), 21cqi)` fits (72 px at 390, still 8 % slack at 320 limits).
7. Foot button content is wrapped in one `<span>` so `.btn`'s flex gap does not open the space between "IDR" and the figure.

## 7. Open issues and requests to other lanes

- **Step 1 / Michael, blocking for every lane: `assets/fonts/hanken-grotesk-latin-var.woff2` is the ITALIC file.** fontTools reads italicAngle −8, name "Hanken Grotesk Italic". The whole body text of the page renders slanted (visible in every screenshot of this lane). The Google Fonts CSS call returned the italic face first. Fix: download the roman Hanken Grotesk latin variable file (`wght` 100–900, italicAngle 0), replace the file, correct LICENSES.md. I did not touch it (not my file). Layout widths are almost the same, so my measurements stand.
- **Motion lead (M):** implement the §2 table (dots click, `data-stage` / `data-stage-active` / `aria-current` sync, `ef:recovery:stage` emit, parallax on the inner img, label layer = label plus line). Please also read the dependency note in §3.
- **Integrator:** the partials use paths relative to the page root (`assets/img/...`); the preview uses `<base href="../../">`. Hero and header heights do not matter to my CSS except `--hdr-h` (sticky top).
- Hook: the sticky `top` assumes a sticky header of height `--hdr-h` (56 px, 72 px from 1024). If L1 makes the header non-sticky, the panel sits 72 px lower than needed; harmless.

## Change log

- v1.0 — 2026-10-01 — first version (L4).
