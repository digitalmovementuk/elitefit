> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane M report: motion lead

Version: v1.0 — 2026-10-01 · owner: lane M (motion lead, Opus 5.5) · change log at the bottom.

## 1. What I built

| File | What |
|---|---|
| `assets/css/motion.css` | the only transitions, animations and keyframes of the page: tokens (durations, easings, distances, stagger) and zone personalities as custom properties; every SECTIONS §13 hook; the timing of the lanes' own end states (shop.css sheet, buy bar, Duo knob; hero.css menu; recovery.css panels); odometer and tab-indicator internals; reduced-motion and print safety nets |
| `assets/js/motion.js` | EFMotion 2.0.0, one IIFE, no library: header state, reveals (layout-free priming), stagger, headline words, picture uncover, odometer (prices, clock, counter, Recharge numbers, checkout reference), tab indicator, Recharge stage machine + `ef:recovery:stage`, desktop parallax from one rAF loop, checkout step direction, schedule entrance, toggles, `html.motion-live` |
| `MOTION-AND-DESIGN.md` + `.html` | tokens with reasons, storyboards for every section and micro-interaction, hook map, written attributes, API, fallbacks, measured performance, integrator notes |
| `_build/motion-states.json` | 55 states, 84 platform runs: Playwright recipes (setup, trigger, settle and record times, expected change, asserts, platform) |
| `_build/preview/M*` | scratch: `M.html` (all real partials), `M-build.py`, `M-stub-main.js` (menu + coach toggles, stands in for main.js), `M-states.mjs` (runs the JSON), `M-strip.py`, `M-odo.mjs` + `M-crop.py` (number close-ups), `M-perf.mjs` + `M-perf2.mjs` (frame timing), `M-twin.py` (HTML twins), filmstrips `M-state-<id>-<profile>-r3.png` (final run; the two earlier runs were recorded before the fixes in §3 and deleted), close-ups `M-odo-*-r2.png`, results `M-states-result-r3.json`, `M-perf-result.json`, overflow check `M-overflow.mjs` |

No media assets used or created. Nothing outside OUT was written except one stray folder created by a path-encoding slip in my first smoke script (`…/Prospects/Elite%20Fit%20Bali%2026-09-30/`, my own screenshots only); I moved the files into `_build/preview/` and removed that folder within the same minute.

## 2. Hooks

Implemented: every value in SECTIONS §13 — `reveal`, `reveal-words`, `stagger` (+ `data-motion-item`), `parallax`, `hero` (layers `media`, `board`, `wordmark`, `copy`, `card`, `cue`), `header`, `clock`, `price-morph`, `sheet`, `step`, `buybar`, `now-next`, `tab-indicator`, `recovery` (layers `image`, `tone`, `temp`, `label`), `tile`, `lift`, `press`, `counter`; plus `data-motion-delay` and `data-motion-from` (supported, unused by the lanes).

Custom `x-<lane>-*` hooks in the partials' header comments: none declared. Unmapped: none.

Lane state attributes used: `#hero[data-video]` (L1), `.co__tier[data-selected]`, `.shop__duo[aria-checked]`, `#checkout[data-state][data-checkout-step]`, `.co__panel[data-active]`, `#buybar[data-state]` (L2), `#sched-list[data-state]`, `.sched__item[data-now]`, `.sched__dot` (L3), `.rec[data-stage]`, `.rec__stage[data-stage-active]`, `.rec__dot[data-stage-to]` (L4), `.team__more[data-state][aria-expanded]` (L5).

Events: listens to `ef:checkout:step`, `ef:schedule:render`; emits `ef:recovery:stage {index, key}` (L4 owns no JS). `ef:passselect` and `ef:schedule:nownext` need nothing extra: the attributes carry them.

Requests answered from the coordinator's notes: L3 — the day-switch render re-runs the stagger (only after a tap on a day chip; the hydration render over the identical fallback stays still on purpose), and the "Full day" cards appear at once without waiting for an observer. L4 — `ef:recovery:stage` emitted, dots wired (buttons, keyboard-native), `html.motion-live` set at start-up and documented (doc §6, §7); if the stage machine cannot start, motion.js itself removes `motion-ok` (static layout). L3 font note — the odometer inherits `tabular-nums` from `.num`.

## 3. What I verified, and how

Server: `python3 -m http.server 8802 --directory OUT`. Preview: `_build/preview/M.html` (all 12 real partials, no stubs needed, all lane CSS, api/shop/schedule/hero/motion JS, M-stub-main.js).

Measured:
- **Every state in `motion-states.json`** (84 runs: WebKit 390×844 touch DPR 2, Chromium 1440×900) executed by `M-states.mjs`: all asserts pass, console clean in every run (only the mock adapter's info line), layout shift without recent input 0.0000 in every run. Filmstrips cut from the context videos: `M-state-<id>-<profile>-r3.png`.
- **Frame time** (Chromium, CDP CPU 4x, real scroll gestures, 3 runs each; table in MOTION-AND-DESIGN §9): p95 16.7–16.8 ms in every scenario (hero, Recharge, long scroll, price morph, lift, checkout; phone and desktop). Dropped frames (> 20 ms): 0 % in the Recharge and long-scroll runs on both profiles; ≤ 0.5 % (one frame) in price morph, lift and checkout desktop; one of three phone hero-load runs had an extra 78 ms load-time long task.
- **No horizontal scroll**: `scrollWidth <= innerWidth` at all 14 CONTRACT §8 widths (320 → 1920) in WebKit and Chromium, after a full scroll (all reveals done) and again with the checkout open on the widest price (52 weeks, Elite).
- **CLS**: 0.00 (no-input) everywhere. Input-driven shifts exist only in the checkout (sheet height between steps, summary price width): identical with motion off, so they belong to L2's layout (see §5).
- **LCP**: one entry at first paint (phone 120–172 ms, desktop 124–136 ms at CPU 4x, no network throttle); headline at opacity 1 on the first probed frame.
- **Start-up**: motion.js adds no long task on the phone profile and none beyond the 54 ms baseline on desktop (measured with motion.js blocked as control).
- **Weight**: motion.js 14.0 KB gzip as authored (10.6 KB without comments), motion.css 8.0 KB gzip (3.2 KB without comments). Together with the other lanes' JS (api 8.5, shop 11.7, schedule 5.6, hero 3.6 KB gzip) the page ships about 43 KB gzip of JS as authored, above stack-shop §8's 30 KB guidance (not a CONTRACT §8 budget); stripping comments in build.mjs is the cheap fix.
- **Reduced motion, data-saver, no JS**: states `fallback-*` pass (no `motion-ok`, `motion-live` present, reel off, layout complete).

Fixed because the measurement or the close-ups showed it (first build → now):
1. Odometer cells collapsed where a host sets `line-height: 0` (hero.css on the clock): the overlay now has its own line metrics and a zero-height margin box.
2. Tab pill jumped instead of sliding (double placement), and a delayed colour flip left labels invisible on long moves: rebuilt as a clip window over light label copies (no text is ever ink on ink).
3. Picture reveal snapped (`clip-path: none` does not interpolate) — then replaced entirely: the clip-path reveal dropped 3–4 % of desktop frames, so it is now a transform-only cover.
4. Recharge dot indicator (clip layer inside a sticky row) repainted on every scroll frame: now a transform-only dot. Recharge desktop dropped frames 7.3 % → 0 %.
5. Recharge desktop dissolve superimposed the two rooms' words: outgoing words and number leave first (360 ms), new number from 280 ms, new words from 480 ms.
6. Hiding the `<video>` until it played produced a late second LCP entry: now the poster `<img>` on top fades out instead.
7. Priming read layout at start-up (+22–55 ms long task at 4x): now an observer classifies, work runs in idle chunks.
8. The hydration render of the schedule animated in the first screen: entrance now only after a tap on a day chip.

Judged by eye only: the look of every state in WebKit and Chromium from the filmstrips (Playwright cannot throttle WebKit's CPU, so WebKit frame timing is not measured); the odometer, clock, counter, Recharge rolls and pill close-ups (`M-odo-*-r2.png`); the emotional read of the zones' pacing.

## 4. Open issues

1. Two hero beats need markup: `#hero-title` should wrap its words, `<span>Perform.</span><br><span>Recharge.</span>`; motion.css already staggers them 140 ms. Today the headline rises as one block (works, one beat).
2. Odometer when the digit count grows on a left-aligned price (350.000 → 1.100.000): digits are mapped right-aligned like a real odometer, so in the first frame the old number appears shifted right by the new leading digits, which then rise in. Visible for one frame; judged acceptable by eye, noted for the QA verdict.
3. The checkout sheet's height snaps between steps (layout owned by L2; animating height is not allowed); the panel slide carries the change.
4. WebKit frame timing unmeasured (tooling limit).

## 5. Requests to other lanes

- **Integrator:** head one-liner sets `html.js`, then `html.motion-ok` only with `prefers-reduced-motion: no-preference` and no `navigator.connection.saveData`; failsafe: remove `motion-ok` if `html.motion-live` has not appeared about 3 s after `load`. Load order per CONTRACT §6. Wrap the hero words (issue 1) if L1 does not.
- **L1:** optional — Chromium names the `<video>` as the LCP element because it carries the same `poster` file as the `<img>`; dropping the `poster` attribute would make the `<img>` the named element (same time either way).
- **L2:** checkout layout shifts after taps (`.co__sheet` height per step; desktop dialog re-centres; summary price widens). CLS is 0.00 because they follow input; a fixed sheet height or a top-anchored desktop dialog would remove them entirely if the QA counts all shifts.
- **QA (Step 4):** record from `_build/motion-states.json`; for full-page static screenshots emulate reduced motion or scroll through first (conventions in the file).

## Change log

- v1.0 — 2026-10-01 — first version (lane M).
