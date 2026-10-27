> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request: lane S to the integrator (cc lane E2): switch the Today strip to the real timetable

Version: v2.1 — 2026-10-01 · from lane S (Sonnet 5.5 xhigh) · to Michael (integrator); cc lane E2 (owner of `schedule.js`, `schedule.html`, `schedule.css`).
Changelog: 2026-10-01 created. Line numbers are as read on 2026-10-01; E2 is still editing, so match on the quoted text, not the number.

Data file ready and validated: `assets/data/schedule.club.json` (36 real classes, Mon 7, Tue 7, Wed 5, Thu 5, Fri 6, Sat 3, Sun 3). Report with sources and proof: `_build/v2.1/report-S.md` (`.html`).

## What you need to know first
The old `schedule.mock.json` already held the real week (the v1.3 capture): all 36 rows are identical to the club's page as read today. So the switch changes **no class, time or coach**. It changes: (1) provenance (a club class-page URL per row, honest `source`), (2) `spotsLeft` and `capacity` become `null` instead of curated invented numbers, (3) coach spelling in the file (see 3 below). Do not expect the Today strip to look different except for the seat numbers.

## 1. The one-line switch (integrator, `assets/js/api.js`)
Line 177, inside `mockLoadTemplate()`. The file name is a single string constant; nothing else loads the schedule file.

```diff
-      mockCache.template = fetchJson(ASSET_BASE + 'data/schedule.mock.json' + VER).then(function (j) {
+      mockCache.template = fetchJson(ASSET_BASE + 'data/schedule.club.json' + VER).then(function (j) {
```

Same-origin GET, same single request as before (11.9 KB, 1.8 KB gzip, +0.6 KB gzip against the mock). `build.mjs` already symlinks `assets/data` into scratch builds, so the new file shows without a build change. Optional, comments only: api.js line 11 and line 168 name `schedule.mock.json`.

Proof it works: `node _build/v2.1/media/sourcing/raw-schedule/validate-club.mjs` runs the real `api.js` adapter on the club file (in-memory copy with that one string swapped) and passes: 7 days from Thu 2026-10-01 give 5, 6, 3, 3, 7, 7, 5 classes, `mock:true`, `degraded:false`, `+08:00` on every class, deterministic output.

## 2. Decision for E2: the invented seat numbers (`schedule.js`)
The club publishes no capacity and no spots (seats live in the GymMaster app behind a member login). With `null` in the file, `api.js` still invents both (hash of class id and date, capacity 12) and keeps them flagged in `mockFields`. Two ways, your call (Raoul asked for "a better real-scenario preview", which favours A):

- **A. Real data only.** `assets/js/schedule.js` line 35: `var SHOW_SPOTS = true;` to `var SHOW_SPOTS = false;`. The single existing switch hides "N spots left" and "Full" on every card; nothing else changes. No `api.js` change.
- **B. Keep the demo seats.** No change: the Today strip keeps showing "N spots left", now from the hash (stable per class and date), not from curated numbers (the old file had e.g. Thu 16:30 Boxercise Advanced "Full"; the hash gives other values). The numbers stay invented, as the page's concept note already says.

## 3. Coach names (decision for you, no code needed for the default)
The club's timetable prints the coaches as `Rey`, `Icha`, `AIN`, `TINOS`; its own class copy writes "Ain" and "Tinos". The file carries both: `trainer` ("Ain", "Tinos") and `trainerPublished` ("AIN", "TINOS"). With the default the Today strip reads "with Ain" and, through `TRAINER_ALIAS = { Tinos: 'Martijn' }` (`schedule.js` line 32, key is case-sensitive and matches), "with Martijn", consistent with the coaches section (`partials/trainers.html`: Martijn Taken). The old mock stored "Martijn" directly, so that alias was dead code; it is now live. Evidence for Tinos = Martijn Taken is in the report (trainer card photo file, "Martijn's new Calisthenics class").
If Raoul wants the letters exactly as the club prints them, change the two strings in the file (`"trainer": "Ain"` to `"AIN"`, `"Tinos"` to `"TINOS"`) and drop the alias; the page would then say "with TINOS" next to a coaches section that says Martijn Taken.

## 4. What in `schedule.js` / `schedule.html` assumes mock content (nothing breaks; list for E2)
| Where | Assumption | With the real data |
|---|---|---|
| `schedule.js` line 32 | alias `Tinos` to `Martijn` | now used (see 3) |
| `schedule.js` lines 33-35 | comment "spots invented in schedule.mock.json"; `SHOW_SPOTS` | see 2; the comment can name `schedule.club.json` |
| `schedule.js` line 212 (comment) | same | comment only |
| `schedule.js` lines 350-358 | empty-day message "No classes today. The gym floor is open 6:00–22:00." | never shows: no weekday is empty (minimum 3 on Sat and Sun). Text agrees with the club hours |
| `schedule.js` line 300 | "Full day (N classes)" | computed per day: 7, 7, 5, 5, 6, 3, 3. Weekend days have 3 classes, so the closed-state peek (first two) is nearly the whole day |
| `schedule.js` `classify()` | now/next/peek logic | no dependence on counts or names; handles the real day lengths (earliest start 07:00 Tue and Thu, latest start 18:00) |
| `schedule.html` lines 1-2 | comments name `schedule.mock.json`; static Thursday fallback "taken from the weekly template that schedule.mock.json holds" | the static Thursday rows (07:00 Body Sculpt Icha, 08:30 HYROX Rey, 10:00 Mobility Martijn, 12:00 Off-Court Rey, 16:30 Boxercise Advanced Rey, ids `thu-0700` ... `thu-1630`) already equal the real Thursday and the ids are unchanged: no markup change |
| `schedule.html` line 63 | "Full day (5 classes)" fallback | correct for Thursday; JS recomputes on other days |
| `schedule.html` lines 60, 68 | weekend note and terms line | same wording as the club's own page; prices and "free with Perform and Elite" not checked by this lane |
| `schedule.css` line 129 | comment on MOCK spots | comment only |
| Day order | tabs run seven days from today (`dow` 1..7 mapped to dates by `api.js`) | the club page lists Sat and Sun first on phones; irrelevant to the data |

## 5. Page copy that cites class numbers, and whether the real week agrees
No contradiction found. Full table in the report. Short form:
- `partials/zones.html` line 44: "One hour, up to seven a day, booked in the GymMaster app. Free with Perform and Elite." Real: maximum 7 (Mon, Tue), every class one hour: **agrees** (as "up to"). Weekends have 3.
- `partials/schedule.html` line 63 "Full day (5 classes)": Thursday has 5: **agrees**.
- Hours: `hero.html` line 8 "open every day 6:00–22:00", `recovery.html` line 9 "6:30–22:00, seven days", `visit.html` line 18: club footer says Perform 6:00AM–10:00PM and Recharge 6:30AM–10:00PM, 7 days a week: **agrees**.
- "7 classes" as a fixed number appears nowhere.

## 6. Docs that name the mock file (integrator, wording only, after the switch)
`README.md` lines 48 and 63; `WP-MAPPING.md` line 60 ("Do not ship `schedule.mock.json` to a public site that runs in live mode": the club file is also mock-adapter data, same advice); `API-CONTRACT.md` line 163 (`source`: the club file reports `club-website-timetable` with `mock: true`), lines 183-184 and 468 (spots and capacity are `null` in the file and invented by the adapter). `CHANGELOG.md` could carry one line: "v2.1: Today strip reads `schedule.club.json` (real timetable captured from the club site 2026-10-01); seat numbers stay invented and flagged."

## 7. Before this goes in front of anyone
- The timetable is the club's published web page as of 2026-10-01; the GymMaster app is the real source of truth and weekend classes run on set dates (the club says so). Four Thursday items carry a second, hidden time field on the club page (HYROX 8:00, Mobility 7:00); the visible times were used.
- Booking stays a concept: `bookable: true` only means "bookable in the GymMaster app"; the page never books.
- Class descriptions (not shown on the page, no schema field) are in `_build/v2.1/media/sourcing/raw-schedule/class-catalogue.json`; three class pages (Stretching, Mobility, Booty) carry the Body Sculpt text instead of their own, so they have none.
