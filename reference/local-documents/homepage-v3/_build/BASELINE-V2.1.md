> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Baseline: Direction A (v2.1) measured for the v3 comparison

Version: v3.0 — 2026-10-02 · owner: baseline lane · data: `_build/baseline-v2.1.json` · tool: `_tools/measure.mjs` (manual: `_tools/MEASURE.md`) · page measured: `http://127.0.0.1:8200/` (homepage-v2.0, read-only)

Change log at the bottom. Run the same jobs against `http://127.0.0.1:8201/` and call `node _tools/measure.mjs --compare _build/baseline-v2.1.json <v3 file>` for the pass/fail lines.

## 1. Numbers v3 must meet or beat

Frame and response numbers are medians of 3 runs (3 repetitions for interactions) with [min-max], at 4x CPU slow-down, Chromium 153 (Playwright), headless. Transfer is cold, up to the load event + 3 s, clips left out, text counted at its gzip size (the dev server sends it plain; as-sent in brackets).

| Metric | Phone 390 (Chromium) | Phone 390 (WebKit) | Desktop 1440 | v3 rule |
|---|---|---|---|---|
| First view transfer | 419.3 KB (661.6 as sent) | 417.8 KB (660.1) | 420.7 KB (663) | 900 KB or less |
| Requests in the first view (clips out) | 35 | 34 | 36 | n/a |
| First view by type (KB) | html 17.5, css 32.3, js 46.8, font 69.6, img 253.1 | same | same | n/a |
| JS gzip, whole page (all 8 files load deferred in the first view) | 46.8 KB | 46.8 KB | 46.8 KB | 60 KB whole Phase 1 page; first view (main + hero + timetable) 14 KB |
| CSS gzip (12 files) | 32.3 KB | 32.3 KB | 32.3 KB | 40 KB |
| Fonts first view (2 variable woff2) | 69.6 KB | 69.6 KB | 69.6 KB | 120 KB |
| Clip started in the window (listed, not counted) | hero-reel-9x16.mp4 1305.6 KB | hero-reel-9x16.mp4 1305.9 KB | hero-reel-9x16.mp4 1305.6 KB | 450 KB per clip |
| CLS, load + 3-screen scroll | 0 | proxy: 0 first-view elements moved | 0 | 0 |
| LCP (lab, local server, 1x CPU) | 40 ms, img.hero__poster (55 KB, preloaded) | 72 ms | 44 ms | poster, preloaded, 220 KB or less |
| Load at 4x: LCP, TBT proxy, long tasks | 200 ms, 0 ms, 0 | n/a | 152 ms, 0 ms, 0 | n/a |
| fps while scrolling, whole run | 59.5 [59.4-59.8] | n/a | 59.6 [58.2-59.8] | never below these |
| fps, Phase 1 groups pooled | 59.5 [59.4-59.8] | n/a | 59.6 [57.7-59.9] | never below these |
| fps, hero | 60 [59.3-60] | n/a | 60 [60-60] | never below |
| fps, classes (v2.1 #today) | 58.9 [58.9-60] | n/a | 60 [60-60] | never below |
| fps, pillars analogue (v2.1 #club + #recharge) | 59.8 [59.7-59.8] | n/a | 59.8 [57.1-60] | never below |
| fps, pricing (v2.1 #passes) | 58.6 [57.9-60] | n/a | 58.3 [56.6-59.2] | never below |
| p95 frame time, Phase 1 pooled | 16.8 [16.7-16.8] ms | n/a | 16.7 [16.7-16.8] ms | not worse |
| Frames over 33 ms, Phase 1 pooled | 0 [0-0.1] % | n/a | 0 [0-0.6] % | not worse |
| Main thread per frame while scrolling | 2.31 ms (script 0.12, style 0.74, layout 0.04) over 1125 frames | n/a | 3.37 ms (script 0.18, style 1.01, layout 0.07) over 710 frames | within 25 % + 0.3 ms |
| Clips playing at once during the scroll | 2/2/2 | n/a | 3/3/3 | 2 or fewer on a phone |
| Horizontal overflow 320/360/375/390/414 | none | none | none (1440) | none |
| Console errors, page errors, failed requests | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 0 |

## 2. Interaction response at 4x CPU

Response = from the input (finger lift or click) to the first paint of the new state; settle = until the last finite animation inside the scope has ended; worst frame = longest frame in the 700 ms after the input. Median [min-max] of 3 repetitions. The first repetition on a fresh page is the coldest, which is where the high end of a range comes from.

| Behaviour (step name) | Phone response ms | Phone settle ms | Desktop response ms | Desktop settle ms | Worst frame ms (phone / desktop) |
|---|---|---|---|---|---|
| `class-day-switch` | 33.3 [30.4-64.8] | 273.6 [272.4-300] | 17.5 [14.7-65.3] | 274.2 [272.7-317.6] | 16.8 / 16.8 |
| `class-day-switch-back` | 25.2 [24-27.1] | 285 [270.2-285.8] | 23.3 [19.9-26.3] | 420.9 [388.5-421.2] | 16.8 / 16.8 |
| `pass-length-4wk` | 34.1 [28.1-37] | 506.6 [504.3-506.6] | 61.8 [34.5-70.6] | 534.9 [512-553.4] | 16.8 / 16.8 |
| `pass-length-52wk` | 26.4 [25.7-36.3] | 506 [504.4-511.6] | 19.8 [19.6-30.7] | 501.2 [487.1-503.5] | 16.8 / 16.8 |
| `pass-length-day` | 25.5 [23.8-27.6] | 471.2 [470-471.6] | 24 [14.9-41.4] | 470.3 [455.4-502.2] | 16.8 / 16.8 |
| `buybar-open` | 50.2 [46.3-56.1] | 310 [304.7-313.9] | n/a | n/a | 16.7 / n/a |
| `buybar-close` | 45.8 [43.1-50.3] | 227.7 [225.4-240.8] | n/a | n/a | 16.8 / n/a |
| `header-condense` | 32.3 [25.7-36.4] | 277.1 [269.9-279.8] | 32.8 [32.5-34.8] | 279.2 [279-280.3] | 16.8 / 16.8 |
| `header-uncondense` | 29.8 [25.9-30.3] | 276 [270.9-278.4] | 32.3 [31.8-32.8] | 279.1 [279-279.3] | 16.8 / 16.8 |
| `anchor-jump-today` | 27.8 [22.3-41.1] | 273.8 [268.8-285.2] | 11.4 [9.5-48.1] | 290.3 [288.9-321.3] | 16.8 / 16.8 |
| `menu-sheet-open` | 28.9 [25.8-29] | 619.9 [606.9-624] | n/a | n/a | 16.8 / n/a |
| `menu-sheet-close` | 28.4 [27.5-38.5] | 238.7 [238.5-255.9] | n/a | n/a | 16.8 / n/a |
| `menu-anchor-jump-far` | 28.9 [26.9-31.7] | 254.7 [254.6-256.8] | n/a | n/a | 16.8 / n/a |
| `sticky-selector-stick` | 32.9 [27.6-34.8] | 228.9 [206.5-444] | n/a | n/a | 16.8 / n/a |
| `anchor-jump-far` | n/a | n/a | 16.4 [15.7-55.4] | 275.3 [274-306.4] | n/a / 16.8 |
| `review-rotation-auto` (no input, rotates by itself about every 5 s) | n/a | n/a | n/a | n/a | 16.8 / 16.8 |
| `whatsapp-pulse` idle fps, pulse running vs paused | 60 vs 60 (p95 16.7 vs 16.7 ms) | animates opacity, visibility, translate, scale, transform; two rings + heartbeat, 3.6 s loop | 60 vs 60 | same CSS | n/a |

Phone-only steps (no desktop number): `buybar-open`, `buybar-close`, `sticky-selector-stick`, `menu-sheet-open`, `menu-sheet-close`, `menu-anchor-jump-far`. Desktop-only: `anchor-jump-far`. The menu sheet is Phase 2 in v3 and is kept as the sheet reference.

## 3. Frame rate per region (4x CPU)

Each frame belongs to the region under the viewport centre. Median fps [min-max] over 3 runs, p95 frame time, share of frames over 20 ms and over 33 ms, median frames sampled.

**Phone 390 (page 13,728 px high, 9 regions)**

| Region | Group | fps | p95 ms | > 20 ms | > 33 ms | frames |
|---|---|---|---|---|---|---|
| `hero` | hero | 60 [59.3-60] | 16.7 [16.7-16.8] | 0 % | 0 % | 81 |
| `today` | classes | 58.9 [58.9-60] | 16.8 [16.7-16.8] | 1.9 % | 0 % | 54 |
| `passes` | pricing | 58.6 [57.9-60] | 16.8 [16.7-16.8] | 2.3 % | 0 % | 86 |
| `club` | pillars | 59.5 [59.5-60] | 16.8 [16.7-16.8] | 0.8 % | 0 % | 254 |
| `recharge` | pillars | 59.8 [59.6-60] | 16.8 [16.7-16.8] | 0.4 % | 0 % | 261 |
| `coaches` | beyond-phase1 | 60 [60-60] | 16.8 [16.7-16.8] | 0 % | 0 % | 113 |
| `reviews` | beyond-phase1 | 60 [59.3-60] | 16.8 [16.7-16.8] | 0 % | 0 % | 90 |
| `visit` | beyond-phase1 | 58 [57.4-58.7] | 16.8 [16.7-16.8] | 3.4 % | 0 % | 87 |
| `site-footer` | beyond-phase1 | 60 [60-60] | 16.7 [16.7-16.8] | 0 % | 0 % | 101 |
| **group hero** | | 60 [59.3-60] | 16.7 [16.7-16.8] | 0 % | 0 % | 81 |
| **group classes** | | 58.9 [58.9-60] | 16.8 [16.7-16.8] | 1.9 % | 0 % | 54 |
| **group pillars** | | 59.8 [59.7-59.8] | 16.8 [16.7-16.8] | 0.4 % | 0 % | 511 |
| **group pricing** | | 58.6 [57.9-60] | 16.8 [16.7-16.8] | 2.3 % | 0 % | 86 |
| **group phase1** | | 59.5 [59.4-59.8] | 16.8 [16.7-16.8] | 0.8 % | 0 % | 738 |
| **whole run** | | 59.5 [59.4-59.8] | 16.8 [16.7-16.8] | 0.8 % | 0 % | 1125 |

**Desktop 1440 (page about 10,120 px high)**

| Region | Group | fps | p95 ms | > 20 ms | > 33 ms | frames |
|---|---|---|---|---|---|---|
| `hero` | hero | 60 [60-60] | 16.8 [16.7-16.8] | 0 % | 0 % | 84 |
| `today` | classes | 60 [60-60] | 16.7 [16.7-16.8] | 0 % | 0 % | 26 |
| `passes` | pricing | 58.3 [56.6-59.2] | 16.8 [16.7-33.3] | 3 % | 0 % | 67 |
| `club` | pillars | 60 [59.2-60] | 16.7 [16.7-16.8] | 0 % | 0 % | 73 |
| `recharge` | pillars | 60 [56.3-60] | 16.7 [16.7-16.8] | 0 % | 0 % | 252 |
| `coaches` | beyond-phase1 | 60 [60-60] | 16.7 [16.7-16.8] | 0 % | 0 % | 52 |
| `reviews` | beyond-phase1 | 58.8 [58.7-58.8] | 16.8 [16.8-16.8] | 2.1 % | 0 % | 48 |
| `visit` | beyond-phase1 | 58.9 [58.9-58.9] | 16.7 [16.7-16.8] | 1.9 % | 0 % | 53 |
| `site-footer` | beyond-phase1 | 60 [60-60] | 16.8 [16.7-16.8] | 0 % | 0 % | 55 |
| **group hero** | | 60 [60-60] | 16.8 [16.7-16.8] | 0 % | 0 % | 84 |
| **group classes** | | 60 [60-60] | 16.7 [16.7-16.8] | 0 % | 0 % | 26 |
| **group pillars** | | 59.8 [57.1-60] | 16.7 [16.7-16.7] | 0.3 % | 0 % | 325 |
| **group pricing** | | 58.3 [56.6-59.2] | 16.8 [16.7-33.3] | 3 % | 0 % | 67 |
| **group phase1** | | 59.6 [57.7-59.9] | 16.7 [16.7-16.8] | 0.6 % | 0 % | 502 |
| **whole run** | | 59.6 [58.2-59.8] | 16.7 [16.7-16.8] | 0.7 % | 0 % | 710 |

Step phase only (400 px swipes): phone 59.7 [59.6-59.8] fps, desktop 59.6 [59.2-59.8] fps. Fling back up: phone 59.2 [58.3-59.7], desktop 59.6 [54.6-59.6] fps (few frames, wider spread).

## 4. First view in detail (phone)

Largest first-view files (KB, text at gzip): hero-poster-9x16.webp 55, zone-recharge-poster.webp 41.7, hanken-grotesk-latin-var.woff2 34.9, syne-latin-var.woff2 34.8, visit-entrance-poster.webp 30.6, rec-sauna-poster.webp 27.8, rec-ice-poster.webp 26.8, rec-steam-poster.webp 24.6, zone-perform-poster.webp 21, zone-classes-poster.webp 17.8, index html 17.5, motion.js 11.6. The HTML is 17.5 KB gzip (79.3 KB plain) and includes the dev server's live-reload snippet (under 1 KB).

The lazy posters of the club tiles and the Recharge rooms (zone-*, rec-*, visit-entrance, about 26 to 42 KB each) are already requested inside the 3-second window; 12 images in all, 253.1 KB. After a 3-screen scroll the page has also started hero-reel-9x16.mp4 1305.6 KB, zone-perform.mp4 506 KB (clips, not counted).

## 5. How it was measured

* Browsers: Chromium 153.0.8010.12 and WebKit 26.6 (Playwright 1.63.0, bundled), headless; both play H.264 and VP9. Phone: 390 x 844, device scale 2, touch, mobile. Desktop: 1440 x 900, mouse.
* Date 2026-10-02, machine time 10:58 to about 11:45. The machine was shared with the other lanes: 1-minute load average 4.75 to 14.01 (phone jobs) and 4.75 to 6.82 (desktop jobs), 10 cpu, darwin 24.6.0. Run-to-run spread of the whole-run fps: 0.4 fps on the phone, 1.6 fps on desktop (per region up to about 2 fps). The load average is stored per job in the JSON (`meta.jobs`).
* CPU slow-down: `Emulation.setCPUThrottlingRate = 4` from before navigation. Phone scroll: CDP touch swipes of 400 px at 2000 px/s, one about every 300 ms (about 19 s down), then fast flings (12000 px/s) back up; desktop: mouse-wheel gestures of the same size (about 12 s down). `requestAnimationFrame` deltas sampled the whole time (about 1,100 frames on the phone, 700 on desktop per run).
* Each interaction: fresh page at 4x, 3 repetitions, real touch tap or mouse click at the element centre. Programmatic scroll for the scroll-triggered behaviours (buy bar, header, sticky selector). The live-reload channel of the dev servers is blocked in every run, so a saved file never reloads a page under measurement.
* Every job went through `_tools/with-browser-lock.sh`; each job stayed under 3 minutes of run time (the longest was 102 s). Command lines: see `_tools/MEASURE.md`.

## 6. Selectors used for the v2.1 behaviours

| Behaviour | Selector and state read |
|---|---|
| Class-day switch | tap `.sched__days button[role="tab"]:nth-of-type(3)`, then `:nth-of-type(1)`; state `aria-selected="true"` on the tapped tab; scope `#today` (rows re-render with stagger) |
| Pass length and price odometer | tap `.shop__lengths .chip[data-length="w4" / "w52" / "day"]`; state: `data-value` of `.shop__tier[data-tier="perform"] .shop__price .num` changes (odometer roll); scope `#passes`; page first scrolled so the chips sit 180 px below the top |
| Buy bar | scroll 0 -> 650 px and back; state `#buybar[data-state="open"]` / `"closed"` (opens once `#hero-cta` has left the screen and `.shop__grid` is not yet in view; at 900 px the grid is on screen and the bar stays closed) |
| Header condensing | scroll 0 -> 140 px and back; state `#site-header[data-scrolled="true"]` / `"false"` |
| Anchor jump | tap `#hero .hero__today` (href `#today`); state `location.hash === "#today"`; settle = scroll at rest (capped glide of 240 ms on phones). Desktop far jump: tap `#site-header .hdr__link[href="#visit"]`. Phone far jump: open the menu, tap `#hdr-menu .hdr__menu-link[href="#visit"]` |
| Menu sheet | tap `.hdr__toggle`; state `#hdr-menu[data-state="open"]` / `"closed"` |
| Sticky selector | `.shop__lengths` starts 180 px below the top, page scrolls 240 px on; state `.shop__lengths[data-e3-stuck]` present. (v2.1 sets the flag only when the selector is scrolled into the stuck position, not after a direct jump from far away.) |
| Review rotation | no input; watch `#revline .revline__slide.is-active .revline__text` change (about every 5 s); the "Next review" button is hidden while motion is on, so there is no tap to measure |
| WhatsApp pulse | `.wa-fab`; its animations read from `document.getAnimations()` (`wa-in` fade-in once, `wa-beat` heartbeat, `wa-ring` on `::before` and `::after`, all 3.6 s loops); idle fps with them running against the same page with them paused |

## 7. Read before comparing

* v2.1 sits at the 60 fps ceiling under 4x on this machine (59.5 overall). The comparison therefore reads differences in the floor, the p95 frame, the share of slow frames and the main-thread cost per frame (2.31 ms phone, 3.37 ms desktop); fps alone can only show a drop, not headroom.
* The v3 regions are lined up with v2.1 through `GROUPS` in `measure.mjs` (hero, classes, pillars, pricing). A v3 section id that is not in that table is pooled as `beyond-phase1`; the summary prints the region-to-group map, check it once v3 has all its anchors.
* The LCP and FCP numbers come from a local server and are only comparable between the two pages. The hero reel of v2.1 (1.3 MB) starts inside the 3-second window, which is why the clip line shows a WARN against the 450 KB clip budget for the baseline; v3 must stay under it.
* Not measured because they do not exist in Phase 1 of v3 or cannot be repeated: the checkout sheet (v2.1), the Recharge sticky sequence, counters, the hero clip fade (covered by the fps run only). The WebKit profile has no CPU throttle, layout-shift or long-task entries: it contributes transfer, LCP, the position proxy and overflow.
* Open: the v3 interaction list (`--actions`) has to be written when the v3 selectors are final; names must match section 2 (see `_tools/MEASURE.md`).

## Change log

* v3.0 — 2026-10-02: created from the first full run of the harness against v2.1 (lane baseline).
