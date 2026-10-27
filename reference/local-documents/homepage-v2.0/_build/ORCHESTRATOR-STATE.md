> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Orchestrator state, Elite Fit homepage v2.0 (checkpoint 2026-10-01 19:35)

Version: v1.0 — 2026-10-01 · owner: Michael (session 44e720). Carry this over if the session is compacted or restarted.

ROOT = `/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30` · OUT = `ROOT/homepage-v2.0`

## Done
- Step 1 Fable lead (concept "Day Board" hero D, SECTIONS.md, ART-DIRECTION.md, tokens/base css, fonts). Step 2 lanes M, L1–L6 (reports `_build/lane-*-report.md`). Step 3 integrator (`_build/integration-report.md`, root docs CHANGELOG/DEVIATIONS/MEDIA-SOURCES/TRACEABILITY/README + .html twins).
- Hanken Grotesk file was the italic cut: replaced by upright (logged in assets/fonts/LICENSES.md).
- v2.0 frozen by the v2.1 session at `_versions/v2.0/` (14:40). QA target = byte-identical read-only copy `_qa/v2.0/_target/` (checksums `_qa/v2.0/_target.sha256`). Never serve or measure OUT/index.html (v2.1 changes it).
- Step 4 finished: a11y `_qa/v2.0/a11y/r1/` (30 PASS · 9 FAIL · 5 NOT MEASURED), render `_qa/v2.0/stills/r1/` (29 PASS · 1 FAIL · 2 NOT MEASURED; 12 contact sheets), journeys `_qa/v2.0/journeys/r1/` (28 PASS, 0 FAIL).
- Integrator first budget pass (frozen copy, P1 median of 5): LCP 1,552 ms (img.hero__poster), CLS 0, first view 372.7 KB uncompressed (+ clip 1,274.9 KB separate), 0 render-blocking scripts, console 0, overflow 0/160, taps 390/1440: schedule 2/1, day pass→details 2/2, 4-week→details 3/3; JS 37.1 KB gzip (>30 guidance), CSS 19.8 KB gzip. Defect: 759 px hero +26 px late font swap (CLS 0.012), fix = revert hero.css edit 5 (size-adjust 99%→99.8%); already sent to the v2.1 session.

## Running / pending (agent ids for SendMessage)
- Motion proof QA `a209666622f59ef82` → `_qa/v2.0/motion/r1/` (index.md/html, filmstrips, fallbacks). Running.
- Perf QA `afb87ed112cf5bc2b` → `_qa/v2.0/perf/r1/` (resumed 19:27 in a quiet window; load was 5.6). Running. Perf must be measured quiet; the v2.1 session promised not to launch heavy jobs until I message "perf done" (SendMessage to "Elite Fit Design").
- NEXT: when motion + perf report: (1) Fable verdict agent (model fable, general-purpose) on stills (`stills/r1/contact-*.jpg`, first-screens sheet), motion filmstrips (`motion/r1/*`), benchmark top-10 screens (`research/benchmark-gyms-v1.0/screens/*-desktop.png`), criteria R/T/C/A from benchmark.md §1; output `_qa/v2.0/verdict/r1/verdict.md/.html`; view few large images once each (a context-hygiene hook blocked image rereads earlier). (2) Compile one v2.0 QA fix list from a11y, render, journeys, perf, motion and integration-report §7 into `_build/v2.0-qa-fixes.md` (file, selector, before → after, reason) and message it to "Elite Fit Design" (I do NOT edit sources). (3) Append a "v2.0 QA" section at the END of CHANGELOG.md (below any v2.1 section; refresh CHANGELOG.html); add QA-found deviations to DEVIATIONS.md; tell the peer when done. (4) Final report to Raoul, ≤ 20 lines: mock vs real, which numbers were measured (and under what load), deviations, open points.

## Agreements with the v2.1 session ("Elite Fit Design", a2207c, interactive)
No source edits by me in OUT; no `node build.mjs` without `--out`; browser jobs only via `OUT/_build/v2.1/with-browser-lock.sh` (two slots); it appends v2.1 sections to CHANGELOG.md and MEDIA-SOURCES.md itself; its root docs: MOTION-UX-AUDIT, INSTAGRAM-REQUESTS; v2.1 evidence in `_qa/v2.1/`.

## Operating lessons
- Subagents die after 600 s without tool output: waits must be short bounded polls (`timeout 80 bash -c 'until [ -f MARKER ]; do sleep 5; done'`), locked jobs run with run_in_background.
- Do not resume perf while load > 6.

## Open points for Raoul (state once, one clear ask)
- Does the Duo day price IDR 225.000 apply to all three passes (Perform, Elite, Recharge)? Promo-page figure, unconfirmed per tier.
- Coach portraits: v1.3 recorded no consent; needed before live use.
- Mock checkout must not reach the public domain (phase 1 is the live schedule + GymMaster/WhatsApp link); live seat counts probably unavailable.

## Change log
- v1.0 — 2026-10-01 — checkpoint (Michael).
