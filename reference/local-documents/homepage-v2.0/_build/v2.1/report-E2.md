> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane E2 report: class schedule motion (Today strip)

Version: v2.1 — 2026-10-01 · lane E2 (Opus 5.5 max) · HTML twin `report-E2.html`.
Changelog: skeleton 14:50; 19:40 final runs r15–r17 added; build and requests 15:40; real-data switch 16:25 (ready marker `ready/E2-schedule.txt`); 19:10 measured results written after two API stalls (runs r01–r15 in `_qa/v2.1/E2/`).

## Status
- [x] Moments built: schedule.css §8 (tokens `--e2-*`), schedule.js (swap, FLIP, countdown, progress, close anchoring, rail-in-view, empty-day swap); partial: header and MOCK comment only, markup unchanged.
- [x] Real club timetable (`schedule.club.json`, api.js switch by the integrator) verified on the render: 7 days 5, 6, 3, 3, 7, 7, 5 classes, every row equals the club file (time, class, coach), no seat numbers, no empty text, weekend note on Sat and Sun, routed empty day shows the message in the reserved box (`r10-realdata`).
- [x] Frame time 4x CPU phone (Chromium 390) and desktop (1440); WebKit 390 and 375 and Chromium 1440 recordings + 250 ms and 40 ms filmstrips; reduced motion; overflow 320/360; press states; stopwatch vs v2.0.
- [x] Final re-runs: phone frame time on the final build (r15), 390 recordings on the real data (r17; r11 was killed by the stall), rail-in-view at 1024–1280 (r16).
- [x] Audit `audit-E2.md` (15 kept, 5 cut) + html twin.

## Files touched
- `assets/js/schedule.js`, `assets/css/schedule.css`, `partials/schedule.html` (comments only).
- New: `_build/v2.1/audit-E2.md` (+ .html), this report (+ .html), `_build/v2.1/requests/E2-to-E4.md`, `_build/v2.1/ready/E2-schedule.txt`, `_qa/v2.1/E2/r01…r15`.

## Measurements (on the render)
- Budget: schedule.js +985 B gzip -9 vs `_versions/v2.0/assets/js-dist` (limit 1,600 B); schedule.css about +0.5 KB gzip.
- Frame time, 4x CPU, median of 3 by p95 (phone = final build r15): phone swap p50/p95 16.7/16.8 ms 60 fps, rapid taps 16.7/16.8 60 fps, full day open+close 16.7/16.8 60 fps, class end tick 16.7/16.8 60 fps, idle with live dot 60 fps, 0 long tasks; desktop swap 16.7/16.8 ms 59.2 fps (one 66.7 ms frame in one run of three), rapid 59.4, tick 60, idle 60. Nothing under 55 fps.
- CLS (Chromium, no-input): 0 in every frame-time scenario, phone and desktop.
- Swap: lowest visible card opacity 0.35 (never an empty frame), 12 px travel, settled 200–230 ms after the tap.
- Close full day: toggle stays at 368 px (motion) / 367 px (reduced) in WebKit 390; v2.0 threw it off-screen (−44 px).
- Press: day chip 0.94, "Buy a pass" and "Full timetable" 0.97 while pressed (WebKit 390, Chromium 1440).
- Reduced motion: 0 card animations, identical card tops and heights, same information.
- Overflow: `#today` never wider than the viewport at 320 and 360 (load, Monday with 7 classes, full day open): 0 elements out. The page itself is 324 px wide at 320 and 392 at 390 because of elements outside the strip (`.rec__bar-mark`, `.m-odo`, `video.clip`; reported to the integrator).
- Countdown fits one line at every width 320–1920.
- Today's classes (stopwatch, same script for both): 0 taps shows the next class with "Next · in 30 min" and its time in the 390 first viewport (v2.0: "Next" and time); 1 tap ("Today's classes") settles two full cards in 323 ms at 390 and 328 ms at 375 (v2.0: 279 / 280 ms), desktop header "Today" 489 ms (v2.0: 80 ms). The difference is the anchor scroll (lane E1's smooth jump); the strip itself is final at first paint (data ready 127–151 ms, no load motion). Console errors 0.

## Requests to other lanes
- E2 → E4 (`requests/E2-to-E4.md`): drop motion.js's generic schedule entrance (E2's swap cancels it); keep the clock roll, breathing dot, flashNow, revealInside; optional: tab pill starts from where it is.

## Findings outside E2 (for the integrator)
- WebKit 390: something above `#today` grows 8 px within about 3 s of load (strip moves 205 → 213 px while scrolled to it; no scroll anchoring in WebKit). Not from the strip, whose heights are reserved.
- Page overflow at 320 and 390 from outside the strip (see above).
- The WhatsApp button (lane A) sits over the right edge of the first schedule card's status line in the 390 first viewport.

## Unverified
- WebKit frame timing (cannot be throttled; judged on recordings).
