> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Integration report (Step 3, integrator)

Version: v2.0 — 2026-10-01 · owner: integrator (Opus 5.5) · status file, kept current during the run. Change log at the bottom.

## 1. Status

| Item | State |
| --- | --- |
| `index.template.html`, `build.mjs`, `index.html`, `index.dev.html` | done; in the v2.0 snapshot |
| `assets/js/main.js` (checkout gate, menu, "Show all five", motion failsafe, skip link) | done, 18 of 18 behaviour checks pass; in the snapshot |
| (a) hero words in spans | done; in the snapshot |
| (b) font-swap CLS | done: 0 at the P1 width 390 and at 320–740 (≤ 0.00001), desktop residue 0.00003–0.0001; one regression from edit 5 at exactly 759 px (0.012 on a forced late swap), fix listed in §7 item 1; in the snapshot |
| (c) checkout shifts | done (fixed sheet height, stable tier rows); in the snapshot |
| (d) LCP named on the poster `<img>` | done (poster attribute dropped, fallback kept); in the snapshot |
| (e) comment stripping | done in `build.mjs` (`assets/css-dist/`, `assets/js-dist/`); in the snapshot |
| (f) mock checkout gate + visible label | done in `main.js` (runtime) and `build.mjs --wp` (PHP gate); in the snapshot |
| (g) open lane items | see §5 |
| Budget pass | r1 on OUT before the freeze (byte-identical to the snapshot, checked), r2 on a scratch copy of the snapshot |
| Documents | CHANGELOG, DEVIATIONS, MEDIA-SOURCES, TRACEABILITY, README (+ html twins), this report |

## 2. The v2.0 snapshot (`_versions/v2.0/`, taken 14:40, read-only)

Coordination rule of 14:4x: another session (v2.1 change request) now edits the sources in OUT; v2.0 is frozen in `_versions/v2.0/` and the integrator makes no further source edits.

**In the snapshot** (checked file by file with grep and cmp): `index.html` and `index.dev.html` as built at 14:39:12 (all integration edits included); `index.template.html`; `build.mjs` (stripping, `--wp` with the checkout gate); `assets/js/main.js` and `assets/js-dist/main.js`; `assets/css-dist/` and `assets/js-dist/` (9 + 6 files); hero spans and poster removal in `partials/hero.html`; the four weight faces in `tokens.css`; the three `hero.css` fixes; the `shop.css` integrator block incl. the 22 px tier price (edit 9, 14:39); the `motion.css` paused-poster rule; head tags (charset, `viewport-fit=cover`, title, description, `noindex, nofollow`, theme-color, the motion one-liner, image and two font preloads, CSS in contract order, six `defer` scripts in contract order). The served files of OUT at 14:45 were byte-identical to the snapshot (cmp over `index.html`, `index.dev.html` and every file under `assets/`), so the r1 "after" runs measured the snapshot's content.

**Not in the snapshot**: the documents written after 14:40 (`CHANGELOG.md`, `DEVIATIONS.md`, `TRACEABILITY.md`, `README.md`, the html twins and this report; the snapshot holds an earlier `MEDIA-SOURCES.md` copy without twin); `_build/build-sizes.json`; the `wp/` output of `node build.mjs --wp` (never generated in OUT, so it does not overwrite anything; tested in a scratch copy, §4); the budget evidence (`_qa/v2.0/perf/integrator-r*`). Since the freeze the v2.1 session has changed `partials/hero.html`, `build.mjs` and `index.template.html` in OUT; those changes are not v2.0.

## 3. Edits to lane files (file, reason, before → after)

1. `partials/hero.html` (L1) — conflict (a), lane M item 7 / MOTION-AND-DESIGN §10.2: the two-beat headline needs one element per word. Before: `<h1 … data-motion-layer="wordmark">Perform.<br>Recharge.</h1>`. After: `<h1 … data-motion-layer="wordmark"><span>Perform.</span><br><span>Recharge.</span></h1>`.
2. `assets/css/tokens.css` (Fable lead) — conflict (b). Before: `"Syne Fallback"` = local Arial, size-adjust 102.8 %; `"Hanken Fallback"` = local Arial, 103.8 % (one face per family, tuned on average lowercase at weight 400, so the weight-700 headings fell back to Arial Regular 21 % too narrow). After: `"Syne Fallback"` 100–649 = Arial Bold ×1.053, 650–900 = Arial Bold ×1.17; `"Hanken Fallback"` 100–549 = Arial ×0.998, 550–900 = Arial ×0.93; ascent/descent overrides = web-font metric / size-adjust. Tuned on the page's own strings (`_qa/v2.0/perf/integrator-r1/fonttune-390.json`, `fonttune-1440.json`). No colour value touched; tokens.css stays the single place for colours.
3. `assets/css/hero.css` (L1) — conflict (b): `.hero__sub` max-width 21rem → 20.5rem. At 21rem (336 px) the first line plus "4°" was 337 px in Hanken but 335.9 px in the fallback, so the swap rewrapped the lede at 390 (the P1 profile). Web-font lines unchanged (first line 315 px).
4. `assets/css/hero.css` (L1) — conflict (b): new `.hero__price { white-space: nowrap; font-size: min(var(--fs-num-m), 1.625rem); }` in the ≥ 1024 block and `.hero__price { font-size: var(--fs-num-m); }` from 1280. In the 13.5rem card "IDR 350.000" (180 px) wrapped to "IDR" / "350.000" in Syne but not in the fallback, so the swap grew the card by 27 px (CLS 0.0037 at 1024) and the wrap itself was a visible defect.
5. `assets/css/hero.css` (L1) — conflict (b): `"EF Hero Body Fallback"` size-adjust 99.8 % → 99 % (ascent 100.2 → 101.01 %, descent 30.4 → 30.61 %): the centred desktop nav measures 98.5 % and moved 3–4 px on the swap.
6. `assets/css/shop.css` (L2) — conflict (c): new block "4. Integrator" at the end: `.co__sheet { height: calc(100svh - 24px) }` below 760 and `height: min(90vh, 50rem)` from 760; `.co__body { display: flex; flex-direction: column }`; `.co__panel[data-active="true"] { flex: 1 0 auto }`; `.co__form { flex: 1 0 auto }`. Before: content height per step (390: 820 → 596 → 677 → 785 → 420 px; 1440: 810 → 597 → 751 → 402 px, the dialog re-centring each time). After: one height for every step; the action row sits at the bottom of short steps.
7. `partials/hero.html` (L1) — conflict (d): `poster="assets/img/hero-poster-9x16.webp"` removed from `<video class="hero__video">` (and the header comment's sentence about it updated), so Chromium names the preloaded poster `<img>` as the LCP element.
8. `assets/css/motion.css` (M) — conflict (d), keeps the fallback whole: `#hero[data-video="paused"] .hero__poster { opacity: 0 }` became its own rule `html.motion-ok #hero[data-video="paused"]:has(.hero__video[data-started="true"]) .hero__poster { opacity: 0; }`. Otherwise a stored pause or a refused autoplay (iOS Low Power Mode) would fade the `<img>` over an empty `<video>`.
9. `assets/css/shop.css` (L2) — conflict (c), same block, ≥ 760: `.co__tier-price .num { font-size: 1.375rem; }` (was `--fs-num-m`, 28 px from 1024): the price pushed "Gym floor and classes" onto two lines for every length but Day, so rows grew 62 → 82 px on a tap. After: 62 px at every length at 760, 820, 1024, 1440, 1920 (63 px with Duo on).

## 4. Integrator files

- `index.template.html` → `node build.mjs` → `index.html` (links `assets/css-dist/`, `assets/js-dist/`; partial header comments and all other comments stripped except `MOCK:` ones; indentation removed) and `index.dev.html` (lane sources). Stripping verified: JS token streams identical to the sources (acorn tokenizer, all six files); CSS identical apart from comments and whitespace.
- `node build.mjs --wp` writes `wp/template-parts/<partial>.php` per WP-MAPPING §3 (PHP guard; `src|href|poster|srcset` URLs starting `assets/` through `EF_HOME_URL`; `href="/"` through `home_url()`; all comments stripped; `assets/` copied) and gates `checkout.php` behind `EF_HOME_CHECKOUT === 'concept'`. Not run in OUT (it would add a 3.4 MB `wp/` copy and the sources are no longer mine); run on a scratch copy (§6).
- `assets/js/main.js` — see README; checks in `_qa/v2.0/perf/integrator-r1/i-mainjs/mainjs.json`.

## 5. Lane "for the integrator" items

| Lane item | Closed by |
| --- | --- |
| M: head one-liner; failsafe after ~3 s; wrap hero words; LCP naming; checkout shifts | head one-liner; `main.js` §4; edit 1; edits 7–8; edits 6, 9 |
| L1: poster preload; `html.js`; menu behaviour; MEDIA-SOURCES lines; caps-tuned fallbacks for centred headings | head; `main.js` §2; MEDIA-SOURCES.md; edits 2–5 |
| L2: `api.js` before `shop.js`; `#checkout`, `#buybar` direct children of body; `#site-footer` exists | template order and skeleton (smoke: body children skip-link, header, main, footer, buybar, checkout) |
| L3: `html.js` required; Hanken italic file | head; font replaced by Michael before integration (fontTools: italicAngle 0) |
| L4: failsafe if motion.js never runs; `assets/…` paths from the page root | `main.js` §4 (tested: motion.js blocked, and motion.js present but never live); page at OUT root |
| L5: "Show all five" in main.js; MEDIA-SOURCES table; JSON-LD | `main.js` §3; MEDIA-SOURCES.md; no JSON-LD by decision (README, DEVIATIONS C17) |
| L6: `--wp` mode; `EF_CONFIG` before `api.js` (WordPress); production flag for the mock checkout; comment stripping | `build.mjs --wp`; WordPress injects `EF_CONFIG` (WP-MAPPING §7; the preview has no inline config, the only inline script is the head one-liner); `main.js` §1 + PHP gate; `build.mjs` |
| Open, not code: Duo day price per tier; coach portrait consent; live seat counts; original reel file | DEVIATIONS (open point for Raoul, B5, B9) |

## 6. Measurements

Run r1 (OUT before the freeze; content byte-identical to the snapshot for the "after" rows) in `_qa/v2.0/perf/integrator-r1/`; run r2 (scratch copy of `_versions/v2.0/`, through the machine-wide browser lock) in `_qa/v2.0/perf/integrator-r2/`. Profiles per CONTRACT §8. Measured unless marked "judged".

| Metric | Before (r1) | After (r1) | Snapshot (r2) |
| --- | --- | --- | --- |
| LCP, P1 390, median of 5 | 1,928 ms (dev sources) / 1,532 ms (stripped); element `<video>` | 1,540 ms; element `img.hero__poster` in 5 of 5 | see §6.1 |
| CLS load, P1 390 (no-input / all) | median 0, max 0.00074 per run (font swap) | 0 / 0 in 5 of 5 | see §6.1 |
| First view, P1 (nav → load + 2 s) | 450.9 KB (dev) / 371.7 KB (stripped) | 372.7 KB | see §6.1 |
| Clip on its own line / total | 1,274.9 / 1,725.8 KB (dev) | 1,274.9 / 1,647.7 KB; clip request 20–35 ms after `load` | see §6.1 |
| Render-blocking scripts | 0 (9 stylesheets) | 0 (9 stylesheets) | see §6.1 |
| Console errors, failed requests (P1) | 0, 0 | 0, 0 | see §6.1 |
| Forced font swap (fonts held 1.5 s), Chromium, 13 widths | 0.00012–0.00435 at every width | 0 at 320–390; 0.00001 at 414–820; 0.00004–0.0001 at 1024–1920 | — |
| Session CLS 390 (load, scroll to end, every section, menu, day switch, full day, shop lengths, Duo, coaches, every checkout step, buy bar) no-input / all incl. input | 0.0274 / 3.364 | 0 / 1.867 (rest = accordion opens and price text changes, all after a tap) | see §6.1 |
| Session CLS 1440 | 0.0078 / 0.202 | 0 / 0.015 | see §6.1 |
| Checkout sheet height per step 390 / 1440 | 820, 596, 677, 785, 420 / 810, 597, 751, 402 | 820 every step / 800 every step | — |
| No horizontal scroll, 14 widths × WebKit + Chromium × load, scrolled to end, menu open (< 1024), checkout choose and pay on Elite 52 weeks, done | — | 0 failures in 160 checks | 0 failures in 160 checks |
| Journeys 390 WebKit / 1440 Chromium | — | J1 pass / pass; J2 2 taps 0.39 s / 1 tap 0.10 s; J3 2 taps 0.71 s (1 to choose) / 2 taps 0.64 s; J4 3 taps 0.91 s / 0.84 s; J4b from the shop 3 taps + 1 scroll | — |
| main.js behaviour | — | 18 of 18 | — |
| Shipped weight (gzip, for reference; the local server sends uncompressed) | JS 45.6 KB, CSS 36.9 KB, HTML — | JS 37.1 KB (lane JS 34.1 KB), CSS 19.8 KB, HTML 10.2 KB | same files |

### 6.1 r2 on the snapshot copy (`_qa/v2.0/perf/integrator-r2/`, scratch copy of `_versions/v2.0/` served on 8809, every browser run through `_build/v2.1/with-browser-lock.sh`)

| Check | Result (measured) |
| --- | --- |
| P1 390×844, 5 cold runs (`a-p1-390/`) | LCP median **1,552 ms** (runs 1,540–1,764), element `img.hero__poster` in 5 of 5; FCP median 1,480 ms; `load` median 2,083 ms; CLS **0** no-input and **0** including input in 5 of 5; first view **372.7 KB**; clip **1,274.9 KB** on its own line (request 20–50 ms after `load`); total **1,647.7 KB**; render-blocking: 9 stylesheets, **0 scripts**; console errors and warnings **0**; failed requests **0** |
| Session CLS 390 (`b-session-390/`) | no-input **0**; all shifts incl. input 1.867 (the "Full day" and "Show all five" accordions push content after a tap, the eyebrow date and checkout price texts change width after a tap, Duo adds a line under each tier price); checkout sheet 820 px at every step; console 0 |
| Session CLS 1440 (`c-session-1440/`) | no-input **0**; all incl. input 0.0099; dialog 800 px at every step; console 0 |
| Forced font swap, 14 widths (`d-fontswap-*`) | 0 at 320, 360, 375, 390, 600; 0.00001 at 414, 760, 768, 820 (one 3 px move of `.sched__spots` or the last day chip); 0.00003–0.0001 at 1024–1920 (day-chip row 3 px, hero facts 5 px); **0.0121 at 759** (the hero board grows by 26 px: the lede rewraps, see §7 item 1) |
| Journeys (`e-journeys/`) | all pass: WebKit 390 J1 first screen (logo, "Buy a pass" bottom 545, Today title bottom 688, first card top 758 of 844), J2 2 taps 0.41 s, J3 2 taps 0.72 s (1 tap to choose), J4 3 taps 0.89 s, J4b from the shop 3 taps + 1 scroll; Chromium 1440 J1 pass, J2 1 tap 0.09 s, J3 2 taps 0.66 s, J4 3 taps 0.84 s; console 0 |
| main.js behaviour (`f-mainjs/`) | 18 of 18 pass (menu open/close/link/Escape/outside/≥ 1024/focus return, coaches toggle, skip link, failsafe with motion.js missing and with motion.js never live, concept checkout with visible label on localhost, WhatsApp fallback with `EF_CONFIG.checkout = "whatsapp"` and on a public host name) |
| No horizontal scroll (`g-overflow/`) | 0 failures in 160 checks: 14 widths × WebKit and Chromium × load, scrolled to the end, menu open (< 1024), checkout choose and pay on Elite 52 weeks, done. (The 14 Chromium "errors" rows are the test's own aborted video request, not page errors.) |

| Font swap at in-between widths 450–740 (`j-fontswap-midwidths/`) | 0 or 0.00001 at every width (only the 3 px `.sched__spots` move); 759 stays the one regression |

Not run on the snapshot: the HTML-twin render check and the proposal test for §7 item 1. Both were batched into one locked run (`scripts/batch-r2b.sh`, which also logs `uptime` and the other running browser jobs into `env-*.json`), waited 36 minutes behind about 50 jobs of the v2.1 session in the shared browser queue and were withdrawn before hand-back, so no browser job of this step is left queued. The twins are built with every table inside its own `overflow-x: auto` wrapper and `overflow-wrap: anywhere` on text (judged, not measured). Runs a–g above started without a load wait at the lock (1-minute load below 6); the rule to log `uptime` into each run arrived after them.

## 7. Source fixes not applied (for the v2.1 session; Michael hands them over)

Item 1 is a regression of the integration step and should go into v2.1; the others are optional refinements. None has been applied in OUT.

1. **Revert integration edit 5** (`assets/css/hero.css`, `@font-face "EF Hero Body Fallback"`): `size-adjust: 99%; ascent-override: 101.01%; descent-override: 30.61%;` → back to L1's `size-adjust: 99.8%; ascent-override: 100.2%; descent-override: 30.4%;`. Reason: at 759 px the lede is 17.8 px and its first line sits within about 2 px of the 20.5rem (328 px) box, so Syne needs one line more than the 99 % fallback and the swap grows the hero board by 26 px (forced-swap CLS 0.0121 at 759 on the snapshot, `integrator-r2/d-fontswap-phones`). With 99.8 % the same width measured 0 (`integrator-r1`, run after edits 3–4 and before edit 5). The price of the revert is the 3–4 px nav move at ≥ 1024 (≤ 0.0001). A proposal test with the reverted face injected over the snapshot is scripted (`integrator-r2/scripts/batch-r2b.sh`, `proposal-hero-revert5.css`) but was not run (queue, §6.1); the evidence for the revert is the r1 measurement at 759 with 99.8 %. A sturdier alternative, not measured: size the lede box in em (`max-width: 19.2em`), so the break points no longer depend on the viewport.
2. Font swap, desktop residue 0.00004–0.0001 (three 3–5 px moves, all under 0.005):
   - `assets/css/hero.css`, rule `.hero__facts .label { … font-family: "Hanken Grotesk", "EF Hero Caps Fallback", Arial, sans-serif; }` (≥ 1024 block): the facts are Hanken 500 caps and measure 92.5–94.6 % against Arial, the shared caps face is 91.3 % (tuned for the 600 eyebrow), so the second and third fact move 5 px. Change: give the facts their own face, e.g. a new `@font-face "EF Hero Facts Fallback"` = local Arial, size-adjust 93.5 %, ascent 106.95 %, descent 32.41 %, and use it in that rule. Re-measure with the forced swap at 1280–1920.
   - `.sched__days` (L3) from 1024: the seven chips measure 98.2 % on average, the Hanken 100–549 face is 99.8 %, so the right-aligned row moves 3 px. Change only after measuring: tokens.css Hanken 100–549 size-adjust 99.8 % → 99.2 % (ascent 100.81 %, descent 30.54 %) and re-run the forced swap at all 13 widths (body text paragraphs could rewrap).
3. Checkout, input-driven shifts that remain (do not count in CLS): turning Duo on shows the "each / for two" line under each tier price on phones (+21 px per row); the centred summary text moves when the price widens. Change if a strict "no shift at all" reading is wanted: `assets/css/shop.css`, reserve the `.co__per` line on phones (`.co__tier-price .co__per { min-height: calc(var(--fs-micro) * 1.45); }` plus `.co__tier-price .co__per[hidden] { display: block !important; visibility: hidden; }`), at the cost of 63 px more choose-step height at 390; and left-align `.co__summary` on phones.
4. `partials/hero.html` header comment: still lists `assets/img/hero-poster-9x16-lqip.webp` "(inlined in hero.css)" correctly; nothing to change. (Listed so the v2.1 session knows the poster attribute was removed on purpose: keep it removed, or restore it together with the old `motion.css` rule.)

## 8. Open

- WebKit frame timing and real iPhone checks: not measured here (tooling); QA step.
- INP: not measured here.

## Change log

- v2.0 — 2026-10-01 — status file opened during the run, then completed after the v2.0 freeze: snapshot inventory, r2 runs on the snapshot copy, the 759 px regression and its fix listed for v2.1 (integrator).
