> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request E2 → E4 (motion.js)

Version: v2.1 — 2026-10-01 · from lane E2 (schedule) to lane E4 (global motion). Changelog: created.

None of these is needed for correctness: the v2.1 schedule works and measures clean with motion.js as it is. They remove redundant work and keep the contract readable.

## 1. Day-switch entrance: E2 now owns it (recommended)
- File: `assets/js/motion.js`, `onSchedRender` (section 7, "schedule day-switch entrance"), which calls `entrance(items, list)` after a chip tap.
- v2.1 `schedule.js` runs the day switch itself (`swap()`): the new day's cards slide in from the side of the chosen day (12 px, 200 ms crisp, 40 ms apart, from 35 % opacity so no frame is ever empty), and it cancels the entrance animations motion.js has just started on the same new cards (`li.getAnimations().forEach(cancel)`), because motion.js's entrance starts every card at opacity 0, which is the one-frame empty flash the brief asks to remove.
- Change: in `onSchedRender`, return early (or delete the function and its listener). Effect: 2–7 fewer WAAPI objects per tap, nothing visible changes. Keep `ef:schedule:render` itself; other listeners may use it.

## 2. Keep these hooks as they are (E2 relies on them)
- `[data-motion~="clock"]` digit roll (`morphClock`): schedule.js puts it on the countdown number of the "Next" card (`.sched__in > span`, created at run time) and rewrites only that span's text once a minute, so the roll runs in place. Please keep: roll only when visible, overlay zero-width, real text kept.
- `motion.css` §7 breathing dot on `[data-now="true"] .sched__dot` and its off-screen / hidden-tab pause. schedule.js v2.1 no longer rebuilds the status line every minute (only when its kind changes), so the dot now keeps its node and phase; `phaseDot` still runs on new dots.
- `flashNow` on a `data-now` flip, the tab pill (`--m-z-ind` 200 ms crisp on `.sched__days`), `revealInside` for the full-day toggle: kept, measured in `_qa/v2.1/E2/`.

## 3. Optional: tab pill from where it is (interruptibility)
- `placeInd(c, true)` starts the clip from `st.box` (the last target). If a second chip is tapped during the 200 ms slide, the pill first jumps to the previous target. Option: when an animation is still running on `st.el`, start from its current clip (`getComputedStyle(st.el).clipPath`) and cancel the old one. Low priority: at 200 ms the jump is one or two frames (see `_qa/v2.1/E2/` filmstrip of the rapid-tap run).
