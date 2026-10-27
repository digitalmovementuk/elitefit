> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane E1 report: hero arrival, header and navigation, anchor jumps, cursor response, section D

Version: v2.1 — 2026-10-01 · lane E1 (Opus 5.5 max). Changelog: 14:53 skeleton · 19:10 interim (state after two API stalls; menu polish in progress).

## Status (19:10)
- [x] D: cause found and fixed in the sources (below); WebKit proof of the fix pending re-run.
- [x] Moments 1 arrival, 2 header/nav, 3 anchor jumps, 14 cursor: in the sources, measured once (WebKit 375, Chromium CPU 4x).
- [x] Integrator fix: "EF Hero Body Fallback" back to 99.8 % (ascent 100.2 %, descent 30.4 %); centred desktop nav gets its own face "EF Hero Nav Fallback" 98.5 %; facts row its own face (integration report §7.1). Forced-swap CLS at 759/760 not yet measured (job lost in the stall).
- [ ] Raoul's request: phone menu polish + EF-style social icons (in progress, priority 1).
- [ ] Final measurement batch (one lock job).

## Files touched
`partials/header.html`, `partials/hero.html`, `assets/css/hero.css` (§5 new, fallback faces), `assets/js/hero.js` (§4), `assets/js/main.js` (§6), `_build/v2.1/requests/E1-to-E4.md`, `_build/v2.1/audit-E1.md`, this report.

## Section D (cause and fix)
- Reproduced in WebKit 390 (`_qa/v2.1/E1/r1-d-before/`): a plain tap leaves no focus and no ring; the ring appears when focus is moved by script (Escape; and WebKit also matches `:focus-visible` for script focus after a tap: measured on the heading after an anchor jump, `r2-phone375-stopwatch/cur-375-e-jump-today.png`). iOS grey tap flash (`-webkit-tap-highlight-color` default rgba(0,0,0,.4)) was on.
- Fix: tap flash off on header controls; main.js marks focus arriving while the last input was not a key with `[data-e1-quiet]` (hero.css hides the ring; text fields untouched); round header buttons draw an animated keyboard ring (scale 1.2 → 1 + fade, 240 ms); forced colours keep a real outline.

## Measured so far
- JS added (gzip -9 dist vs `_versions/v2.0`): hero.js +99 B, main.js +1,407 B = 1,506 B (budget 2,048 B).
- Frame time, Chromium CPU 4x (2 runs, load avg 3–8): phone 390 arrival p50 16.7 / p95 16.8 ms (59.8 fps), scroll 59.8, jump 60, menu 60 fps; desktop 1440 arrival p95 16.8 (58.3 fps; 3 of 348 frames > 33 ms at start-up), scroll 59.9, jump 59.3 fps.
- LCP P1 390 (3 cold runs): v2.0 1,552 ms, integrated build 1,592 ms; LCP = first paint in every run, element `img.hero__poster`. First view 422.7 KB (v2.0 372.7; +50 KB are other lanes' files). Isolated A/B pending.
- CLS 0 (WebKit 375 session; P1 load runs 0/0).
- Stopwatch "Today's classes", tap at first paint, 1 tap both: v2.0 instant (lands 12 px low, focus on body); v2.1 glide WebKit 0.21 s, Chromium 0.44 s, lands flush under the header, focus on the heading. Taps equal; seconds worse by the glide the change request asks for.
- Overflow 320 (WebKit): 4 px in the integrated build, not E1's (culprits `.rec__bar-mark`, `.m-odo__c`, `.clip`; v2.0 0) — `r3-quick/quick.json`.
- Reduced motion (WebKit 375): no running animation, review line visible, menu instant with the v2.0 icon swap, jump instant and flush.

## Requests
`requests/E1-to-E4.md` (motion.css §5 phone board settle and §6 menu superseded by hero.css; token names; footer icon sprite to follow).

## Unverified
WebKit frame timing (no CPU throttle in WebKit); real-device iOS behaviour.
