> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane report: Elite Training (pillar block)

Version: v3.0 — 2026-10-02 · lane: training (Sonnet 5.5, xhigh) · status: Phase 1 done, facts filled.

## What is built
- `partials/31-training.html` (anchor `elite-training`), `assets/css/training.css`, `assets/js/training.js`, `copy/slots/training.json` (19 slots). Anatomy and the shared `.pil-*` CSS and `pil-clip` JS blocks are verbatim from `_build/pillar-anatomy.md` (checked by script).
- Clip: `assets/video/training-clip.webm` (355 KB, vp9) + `training-clip.mp4` (275 KB, h264), 576x720 (4:5), silent, 3.34 s seamless loop, poster `assets/img/training-clip-poster.webp` (42 KB, first frame). Four shots from `Header-Portrait.mov` (cable station with a member and a coach, dumbbell racks, turf class, machine hall), 0.7x, 0.2 s dissolves, windows chosen by eye from extracted frames.
- Facts (every row has `data-fact`): floor F-EQP-01/03, F-FAC-09; brands Arsenal Strength, Panatta, Prime F-EQP-01; classes F-CLS-01/28/29 (the 36 comes from the timetable file); coaches Rey, Ain, Icha, Tinos F-COA-01 (from `coaches.json`, only those on the timetable); hours F-HRS-01/08 (from `hours.json`, plus live open/closed readout, WITA).
- Behaviour: poster first, `preload=none`, plays only near the viewport, shared `EF.clips` counter (max 2 on a phone), paused for reduced motion and data-saver (poster stays).

## Checked (Playwright, via the lock)
- WebKit 390x844, 320x640 and Chromium 1440x900: no horizontal overflow, buttons 48 px high, one column on the phone, two columns from 900 px. Screenshots looked at.
- Clip plays when the section is in view and pauses when scrolled away; with reduced motion it stays paused on the poster. No console errors from this lane (the only 404 seen came from the hero lane's `hero-loop-*.mp4`, not yet delivered).

## Open / for others
- Equipment brands: the club publishes three (F-EQP-01), so they are shown; no machine list or counts exist (F-EQP-08).
- The class shot shows a shirtless member mid-exercise next to a standing coach: raise with the creative lead if it reads as physique posing; the alternative class windows are in the landscape master (crop to 4:5 loses people).
- The poster (42 KB) is fetched by the browser at load even though the section is below the fold; three pillars add about 120 KB to the first-view transfer. Lazy poster via JS is possible if the budget needs it.
- Copy writer: slots in `copy/slots/training.json`; the number 36 and the hours are data, not copy.
- No `training-*` token was added; all values are `var(--…)` (component sizes 8/32/48 px are fixed dimensions).

## Change log
- v3.0 — 2026-10-02: created.
