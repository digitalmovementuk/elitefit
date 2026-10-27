> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Measurement harness (`_tools/measure.mjs`)

Version: v3.0 — 2026-10-02 · owner: baseline lane · tool: `_tools/measure.mjs` · baseline data: `_build/baseline-v2.1.json`, report `_build/BASELINE-V2.1.md`

One script measures a page the same way every time, so Direction B (v3, `http://127.0.0.1:8201/`) can be compared with Direction A (v2.1, `http://127.0.0.1:8200/`) at the same throttle. It only loads the page in a browser; it writes nothing into the page's folder.

## Run it

```
cd "/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30/homepage-v3"

# one job = one profile + a few sections (each job stays under 3 minutes)
node _tools/measure.mjs --url http://127.0.0.1:8201/ --label v3 --out _build/measure-v3.json --profile webkit390    --only load,overflow
node _tools/measure.mjs --url http://127.0.0.1:8201/ --label v3 --out _build/measure-v3.json --profile chromium390  --only load,overflow
node _tools/measure.mjs --url http://127.0.0.1:8201/ --label v3 --out _build/measure-v3.json --profile chromium390  --only fps
node _tools/measure.mjs --url http://127.0.0.1:8201/ --label v3 --out _build/measure-v3.json --profile chromium390  --only interact --actions _build/actions-v3.json
node _tools/measure.mjs --url http://127.0.0.1:8201/ --label v3 --out _build/measure-v3.json --profile chromium1440 --only load,overflow
node _tools/measure.mjs --url http://127.0.0.1:8201/ --label v3 --out _build/measure-v3.json --profile chromium1440 --only fps
node _tools/measure.mjs --url http://127.0.0.1:8201/ --label v3 --out _build/measure-v3.json --profile chromium1440 --only interact --actions _build/actions-v3.json

# compare (exit code 1 when any line is FAIL)
node _tools/measure.mjs --compare _build/baseline-v2.1.json _build/measure-v3.json
node _tools/measure.mjs --summary _build/measure-v3.json        # short human summary of a result file
node _tools/measure.mjs --print-actions v21                     # the v2.1 interaction list as JSON, the template for v3
```

Every run re-executes itself through `_tools/with-browser-lock.sh` (two browser slots machine-wide, waits for load below 6), so a job can wait in the queue first; the job itself has a hard stop at 178 s (`--hard`). Results of several jobs merge into the same `--out` file, one block per profile and section; running a section again replaces that block (an `--ids` rerun of `interact` replaces only those actions).

Options: `--runs 3` (load and fps repetitions) · `--reps 3` (interaction repetitions) · `--throttle 4` (CPU slow-down, Chromium only) · `--ids a,b` (only these interaction groups) · `--widths 320,360` · `--channel chrome` (installed Google Chrome instead of Playwright's Chromium) · `--budget 170` (seconds; later runs are skipped, never cut mid-run) · `--verbose` (timing log) · `--strict` (compare with zero noise band).

## Profiles and sections

| Profile | Browser | Viewport | Sections |
|---|---|---|---|
| `webkit390` | WebKit (Playwright 1.63, Safari 26.6 engine) | 390 x 844, dsf 2, touch, mobile | `load` (transfer, LCP, stability proxy, console), `overflow` |
| `chromium390` | Chromium 153 (Playwright) | 390 x 844, dsf 2, touch, mobile | `load` (second opinion on transfer, plus CLS, long tasks), `overflow`, `fps`, `interact` |
| `chromium1440` | Chromium 153 | 1440 x 900, dsf 1, mouse | `load`, `overflow` (1440 only), `fps`, `interact` |

WebKit has no CPU-throttle protocol and no layout-shift or long-task entries, so frame timing, interaction timing and the CLS number come from Chromium; WebKit reports a position proxy for layout stability (first-view elements whose layout position changed after load, transforms ignored).

## What each section measures

**load** — cold context (no cache, service workers blocked), `load` event, then 3 s. Counted: everything finished by load + 3 s, by type (html, css, js, font, img, data, other). Clips (`media`) are listed and left out of the total because they start after load. Text assets are counted at their gzip size because the dev server sends them uncompressed (gzip level 9 computed locally from the same bytes; brotli is listed too). Headline = `transfer.totalKB` (production-like). The as-sent number is `rawTotalKB`. 1 KB = 1000 bytes. Then three screens of scrolling; CLS is the sum of all layout shifts without recent input over load + that scroll (Chromium). Also: LCP (time, element, file, preloaded, weight), FCP, long tasks, a TBT proxy (sum of long task minus 50 ms from FCP to load + 3 s, at 1x CPU), whole-page JS/CSS gzip after the scroll, console errors and warnings, failed requests, HTTP status 400 or more. Repeated `--runs` times; CLS is the worst run, LCP and TBT medians.

**overflow** — at widths 320, 360, 375, 390 and 414 (1440 on desktop): `document.scrollWidth > innerWidth` after load and after scrolling the whole page. Offenders are elements whose right edge sticks out of the viewport and that no scrolling container clips (fixed layers are ignored, they cannot widen the page). `hiddenOverflowRisk` means offenders exist but `overflow-x` on html or body hides them (iOS Safari can still pan).

**fps** — Chromium with `Emulation.setCPUThrottlingRate = 4` from before navigation. After load and a quiet period the page is scrolled top to bottom with real input (phone: CDP touch swipes of 400 px at 2000 px/s, one every ~300 ms; desktop: mouse wheel gestures of the same size), then flung back to the top with fast flicks (12000 px/s, momentum on). `requestAnimationFrame` deltas are sampled the whole time. Every frame belongs to the region under the viewport centre. Reported per region and per group, for the whole run (`all`), the step phase (`down`) and the fling (`fling`): fps (1000 / mean frame time), p50, p95, max, frames over 20 ms and over 33 ms (count and percent). Median, min, max and spread across `--runs` (default 3). Also the page's own load at 4x (LCP, FCP, TBT proxy, long tasks, CLS), main-thread totals for the scroll (task, script, layout, style time and counts, from `Performance.getMetrics`), long animation frames, and how many clips were playing during the scroll.

**interact** — Chromium at 4x. One fresh page per interaction group, `--reps` repetitions of each step. For a tap: real touch tap (phone) or mouse click (desktop) at the centre of the element. Input time = `pointerup` timeStamp. Measured: `inputDelayMs` (input to handler), `tapToPaintMs` (to the first paint after the click: rAF plus message), `responseMs` (to the first paint after the expected state change, falling back to `tapToPaintMs`), `settleMs` (last finite animation inside the scope), `scrollSettleMs` (scroll at rest, for anchor jumps), the Event Timing duration (only reported by the browser from 16 ms up), and the frames in the 700 ms after the input (worst frame, count over 20 and 33 ms). `kind: "scroll"` steps start from a programmatic `scrollTo` (no input latency, used for scroll-triggered behaviours); `kind: "observe"` steps wait for a self-running behaviour (review rotation) and measure the frames around it; `kind: "pulse"` measures idle fps with the WhatsApp pulse running against paused, and lists which properties it animates.

The dev servers reload a page whenever a lane saves a file. The harness replaces `EventSource` in every page it opens, so a measurement is never reloaded; nothing else in the page is touched.

Note: the in-page recorder runs one extra `requestAnimationFrame` loop and reads `document.getAnimations()` per frame. It does the same on both pages, so the comparison is fair, but absolute worst-frame numbers include that small overhead.

## Regions and groups (how v3 lines up with v2.1)

A region is a direct child of `main` (or a footer) with an `id` or `data-sec`; the name is `data-sec` or the id. v3's CONTRACT §4 anchors give this automatically. For the comparison the regions are pooled into groups:

| Group | v2.1 regions | v3 regions |
|---|---|---|
| `hero` | `hero` | `hero` |
| `classes` | `today` | `classes` |
| `pillars` | `club`, `recharge` | `pillars`, `elite-nutrition`, `elite-training`, `elite-rest` |
| `pricing` | `passes` | `pricing` |
| `beyond-phase1` | coaches, reviews, visit, footer | anything else |
| `phase1` | pooled frames of the four groups above | same |

The pillars group is an analogue: v2.1's club tiles and the Recharge rooms against v3's three pillar blocks. A region id that is not in this table goes to `beyond-phase1`; add it to `GROUPS` in `measure.mjs` if a v3 lane picks a different anchor. The summary and `fps.regionMap` in the JSON print the region-to-group map of the run, so a mismatch is visible.

## Interaction names (the contract between baseline and v3)

`--compare` matches interactions by step name. The v3 action file (`--actions file.json`, same format as `--print-actions v21`) must use these names for the behaviours that exist in Phase 1:

| Name | Behaviour | v2.1 trigger |
|---|---|---|
| `class-day-switch`, `class-day-switch-back` | tap a day tab, rows re-render, indicator slides | day tab 3, then tab 1, in `#today` |
| `pass-length-4wk`, `pass-length-52wk`, `pass-length-day` | length change, selected-card travel, price odometer | length chips in `#passes`; state = Perform price `data-value` changes |
| `buybar-open`, `buybar-close` | sticky buy bar slides in/out (phone) | scroll to 650 px / back to 0 |
| `header-condense`, `header-uncondense` | header condenses on scroll | scroll to 140 px / back |
| `anchor-jump-today` | anchor jump with destination highlight | hero "Today's classes" link; response = first paint, settle = scroll at rest |
| `anchor-jump-far` (desktop), `menu-anchor-jump-far` (phone) | long jump | nav link to `#visit` (the v3 equivalent: a far Phase 1 section) |
| `menu-sheet-open`, `menu-sheet-close` | sheet (v3: Phase 2, optional) | header menu button |
| `sticky-selector-stick` | pass-length selector pins under the header | scroll into `#passes` |
| `review-rotation-auto` | review line rotates by itself | no input; frames while it crossfades |
| `whatsapp-pulse` | pulse of the floating button | `.wa-fab`, idle fps running vs paused |

A step is `{ name, tap | kind:"scroll" | kind:"observe", expect, scope, settle, measure }`; `expect` is one of `{ selector, attr, value }`, `{ selector, attr, changed:true }`, `{ selector, textChanged:true }`, `{ selector, exists:true|false }`, `{ hash:"#x" }`. A group is `{ id, profiles?, prep:{scrollTo: selector|px, offset}, reset?, steps:[...] }` or `{ id, kind:"pulse", selector }`. Steps whose selector is missing are listed as skipped, never guessed.

## Compare rules

`--compare baseline.json candidate.json` prints one line per metric and exits 1 on any FAIL.

| Metric | Rule |
|---|---|
| First view transfer (production-like, clips out) | PASS at 900 KB or less (`--budget-kb`) |
| CLS (Chromium, load + 3 screens) | PASS at 0 (up to 0.0005 rounding) |
| fps per group (hero, classes, pillars, pricing, phase1) at 4x | candidate median must not be below the baseline median; a drop inside the band `max(1.5 fps, half the baseline spread)` prints `PASS~` (noise, rerun to confirm); beyond the band FAIL |
| Interaction response per step at 4x | candidate median must not exceed baseline median by more than `max(8 ms, half the baseline spread)` |
| p95 frame time, share of frames over 33 ms, settle time | WARN lines (secondary): bands 2 ms, 1 point, 40 ms |
| JS gzip, CSS gzip, fonts, LCP file weight, clips | PASS or FAIL against the CONTRACT §7 budgets (JS 60 KB whole page, CSS 40 KB, fonts 120 KB, LCP poster 220 KB, clip 450 KB) |
| Overflow, console errors, failed requests | FAIL on any horizontal overflow from 320 px, any console error or HTTP 400 or more |

`--strict` uses a zero band. The first-view JS budget (14 KB gzip for main, hero and timetable) needs the file list in `load.transfer.files`; the compare prints the whole first-view JS and names the budget.

## Reading the numbers fairly

* Frame numbers depend on machine load. Each job records the 1-minute load average at start and end (`meta.loadavgStart/End`); compare runs taken at similar load, and treat a result inside the baseline's spread as equal.
* Headless Chromium plays H.264 and VP9 here (`canPlayType` probably), so a clip format choice does not decide a comparison; the number of clips playing during the scroll is recorded.
* The dev servers send `cache-control: no-store` and no compression; that is why text is counted at its gzip size.
* The Chromium load numbers are lab values on a local server: LCP and FCP are far below real-network values and are only useful for comparing the two pages.

## Change log

* v3.0 — 2026-10-02: created with the v2.1 baseline run (lane baseline).
