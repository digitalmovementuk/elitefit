> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Report lane S: the real class timetable of Elite Fit Bali (homepage v2.1)

Version: v2.1 — 2026-10-01 · lane S (Sonnet 5.5 xhigh) · HTML twin: `report-S.html`.
Changelog: 2026-10-01 created and finalised (7 pages read, data file written, validation run); no earlier draft. Line numbers below are as read on 2026-10-01; lane E2 is still editing `schedule.js`, `schedule.html` and `schedule.css`, so they can shift.

## Result

- **36 classes in 7 days:** Mon 7, Tue 7, Wed 5, Thu 5, Fri 6, Sat 3, Sun 3. Every weekday has classes, so no empty day and no padding row.
- **Main finding: the old mock already was the real week.** All 36 rows (weekday, start, end, class, coach) are identical to `schedule.mock.json` (the v1.3 capture); the club page was re-read today and nothing moved. What was invented in the mock is only `spotsLeft` and `capacity` (the club publishes neither). `schedule.club.json` keeps the same timetable, sets both to `null`, and adds a source URL per row.
- Written file: `assets/data/schedule.club.json` (11.9 KB, 1.8 KB gzip; the mock is 7.3 KB / 1.2 KB). Same top-level keys and row keys as the mock, plus extra keys that `api.js` ignores (`trainerPublished`, `_source`, `_note`, `sourceUrl`, ...).
- Switch: one string in `assets/js/api.js` line 177 (`data/schedule.mock.json` to `data/schedule.club.json`). Details and the decisions for lane E2 are in `requests/S-to-integrator.md`.
- Time zone kept: `Asia/Makassar` (WITA, UTC+8); the adapter stamps `+08:00` on every class (checked).

## Credits (Firecrawl; Serper skipped as instructed; no browser used)

Announced before the first call: at most 8 credits, about 1 per page. Shared balance (the account is used by other sessions too): **85 before, 78 after = 7 credits, all mine** (7 scrapes x `creditsUsed` 1; no other session spent in between). The cap of 8 held; 1 credit left unused.

| # | Page | Scrape ID | Credits | Why |
|---|---|---|---|---|
| 1 | https://elitefitbali.com/class-schedule/ | `01a0f683-26f8-7719-9dd5-9c6128d81534` | 1 | the timetable (the "Classes" menu target; the lane brief started at /schedule/, which is only the archive of class pages) |
| 2 | https://elitefitbali.com/schedule/ | `01a0f683-2710-722f-9aee-9e5adbc9d504` | 1 | archive of all class pages, page 1 of 2 |
| 3 | https://elitefitbali.com/schedule/page/2/ | `01a0f686-9c5f-718e-99cb-c611403778c3` | 1 | archive page 2: found the class page "HIIT & Mobility" that has no slot |
| 4 | https://elitefitbali.com/schedule/off-court-training/ | `01a0f686-0c02-70ce-a947-08a917d32903` | 1 | full class text (card excerpt was cut) |
| 5 | https://elitefitbali.com/schedule/boxercise-advanced/ | `01a0f686-0bfd-7772-bdaa-7592e77cfd5a` | 1 | full class text and level wording |
| 6 | https://elitefitbali.com/schedule/booty-and-core/ | `01a0f686-2da3-73d5-ad46-1273edd8eb96` | 1 | full class text and level wording |
| 7 | https://elitefitbali.com/schedule/body-sculpt/ | `01a0f686-2dae-73dd-84e4-0352467b652c` | 1 | full class text |
| (0) | /schedule/hyrox-conditioning/ and /trainers/ain/ | reused from lane C-src (`media/sourcing/raw/class-hyrox.md`, `trainer-ain.md`) | 0 | already on disk |

Browser fallback (Playwright through `with-browser-lock.sh`) was **not needed**: Firecrawl returned the whole timetable server-rendered (Elementor/JetEngine listing). There is no GymMaster iframe or script on the page (GymMaster appears only in the sentence quoted below), no timetable image, no PDF. No login, account, booking, form or contact with the club.

## What the club publishes

- Page `https://elitefitbali.com/class-schedule/`, title "Class Schedule: The best Canggu gym classes - Elite Fit Bali", HTTP 200, page modified 2026-05-21T10:00:24+00:00 (the schedule itself is a live listing of the class pages, so it can change without that date moving).
- The page holds the same week three times: (1) a carousel for phones and tablets that starts with Sat and Sun, (2) the desktop grid MON to SUN (used for the data), (3) a second grid MON to SAT that is hidden on every device (`elementor-hidden-desktop/tablet/mobile`, ignored). The carousel and the desktop grid agree on all 36 slots (0 differences, checked by script).
- Verbatim note on the page: "Weekend classes are scheduled on set dates. Please remember to check the website or the GymMaster app for the lastest information." (the typo is the club's).
- Every class page says "1 hour training" (all 12 pages), so `end` = `start` + 60 min for every row.
- Coach names as published: Rey, Icha, AIN, TINOS (the schedule stores the last two in capitals; the club's own class copy writes "Ain" and "Tinos"). The trainer grid lists Martijn Taken, Rey, TINOS, AIN, Putu, Icha. The "Martijn Taken" card uses the photo file `TINOS-scaled.webp` and the Calisthenics page says "Martijn's new Calisthenics class" with the byline WITH TINOS, which supports BRAND-NOTES 7 (Tinos = Martijn Taken). Mapping decision stays with the integrator (see request).

## Per slot: source and proof (36 rows)

Proof column = the scraped text of the desktop grid for that slot, in the order the page prints it (time, class, coach). Source = the class page linked from that slot (it names the coach and says "1 hour training"). Timetable URL for all rows: `https://elitefitbali.com/class-schedule/`.

| ID | Day | Start–end (WITA) | Class | Coach published | Proof snippet (scraped) | Source class page |
|---|---|---|---|---|---|---|
| mon-0800 | Mon | 08:00–09:00 | HYROX Conditioning | Rey | `8:00 am · HYROX Conditioning · with Rey` | /schedule/hyrox-conditioning/ |
| mon-0900 | Mon | 09:00–10:00 | Boxercise Beginner | Rey | `9:00 am · Boxercise Beginner · with Rey` | /schedule/boxercise-beginner/ |
| mon-1000 | Mon | 10:00–11:00 | Stretching | AIN | `10:00 am · Stretching · with AIN` | /schedule/stretching/ |
| mon-1100 | Mon | 11:00–12:00 | Booty and Core | Icha | `11:00 am · Booty and Core · with Icha` | /schedule/booty-and-core/ |
| mon-1300 | Mon | 13:00–14:00 | Mobility | TINOS | `1:00 pm · Mobility · with TINOS` | /schedule/mobility-3/ |
| mon-1700 | Mon | 17:00–18:00 | Booty | AIN | `5:00 pm · Booty · with AIN` | /schedule/booty/ |
| mon-1800 | Mon | 18:00–19:00 | Stretching | AIN | `6:00 pm · Stretching · with AIN` | /schedule/stretching-2/ |
| tue-0700 | Tue | 07:00–08:00 | Mobility | TINOS | `7:00 am · Mobility · with TINOS` | /schedule/mobility-3/ |
| tue-0800 | Tue | 08:00–09:00 | HYROX Conditioning | Rey | `8:00 am · HYROX Conditioning · with Rey` | /schedule/hyrox-conditioning/ |
| tue-1000 | Tue | 10:00–11:00 | Booty | AIN | `10:00 am · Booty · with AIN` | /schedule/booty/ |
| tue-1200 | Tue | 12:00–13:00 | Off-Court Training | Rey | `12:00 pm · Off-Court Training · with Rey` | /schedule/off-court-training/ |
| tue-1500 | Tue | 15:00–16:00 | Stretching | AIN | `3:00 pm · Stretching · with AIN` | /schedule/stretching/ |
| tue-1630 | Tue | 16:30–17:30 | Boxercise Advanced | Rey | `4:30 pm · Boxercise Advanced · with Rey` | /schedule/boxercise-advanced/ |
| tue-1800 | Tue | 18:00–19:00 | Stretching | AIN | `6:00 pm · Stretching · with AIN` | /schedule/stretching-2/ |
| wed-0800 | Wed | 08:00–09:00 | Boxercise Beginner | Rey | `8:00 am · Boxercise Beginner · with Rey` | /schedule/boxercise-beginner/ |
| wed-0900 | Wed | 09:00–10:00 | Booty and Core | Icha | `9:00 am · Booty and Core · with Icha` | /schedule/booty-and-core/ |
| wed-1000 | Wed | 10:00–11:00 | Calisthenics | TINOS | `10:00 am · Calisthenics · with TINOS` | /schedule/calisthenics-2/ |
| wed-1630 | Wed | 16:30–17:30 | Boxercise Advanced | Rey | `4:30 pm · Boxercise Advanced · with Rey` | /schedule/boxercise-advanced/ |
| wed-1800 | Wed | 18:00–19:00 | Mobility | TINOS | `6:00 pm · Mobility · with TINOS` | /schedule/mobility-3/ |
| thu-0700 | Thu | 07:00–08:00 | Body Sculpt | Icha | `7:00 am · Body Sculpt · with Icha` | /schedule/body-sculpt/ |
| thu-0830 | Thu | 08:30–09:30 | HYROX Conditioning | Rey | `8:30 am · HYROX Conditioning · with Rey (a hidden field on the same item says 8:00 am)` | /schedule/hyrox-conditioning/ |
| thu-1000 | Thu | 10:00–11:00 | Mobility | TINOS | `10:00 am · Mobility · with TINOS (a hidden field on the same item says 7:00 am)` | /schedule/mobility-3/ |
| thu-1200 | Thu | 12:00–13:00 | Off-Court Training | Rey | `12:00 pm · Off-Court Training · with Rey` | /schedule/off-court-training/ |
| thu-1630 | Thu | 16:30–17:30 | Boxercise Advanced | Rey | `4:30 pm · Boxercise Advanced · with Rey` | /schedule/boxercise-advanced/ |
| fri-0800 | Fri | 08:00–09:00 | Boxercise Beginner | Rey | `8:00 am · Boxercise Beginner · with Rey` | /schedule/boxercise-beginner/ |
| fri-0900 | Fri | 09:00–10:00 | Booty | AIN | `9:00 am · Booty · with AIN` | /schedule/booty/ |
| fri-1030 | Fri | 10:30–11:30 | Mobility | AIN | `10:30 am · Mobility · with AIN` | /schedule/mobility-2/ |
| fri-1400 | Fri | 14:00–15:00 | Body Sculpt | Icha | `2:00 pm · Body Sculpt · with Icha` | /schedule/body-sculpt/ |
| fri-1500 | Fri | 15:00–16:00 | Booty and Core | Icha | `3:00 pm · Booty and Core · with Icha` | /schedule/booty-and-core/ |
| fri-1700 | Fri | 17:00–18:00 | Stretching | AIN | `5:00 pm · Stretching · with AIN` | /schedule/stretching/ |
| sat-0800 | Sat | 08:00–09:00 | Stretching | AIN | `8:00 am · Stretching · with AIN` | /schedule/stretching/ |
| sat-0900 | Sat | 09:00–10:00 | Booty | AIN | `9:00 am · Booty · with AIN` | /schedule/booty/ |
| sat-1100 | Sat | 11:00–12:00 | Mobility | AIN | `11:00 am · Mobility · with AIN` | /schedule/mobility-2/ |
| sun-1400 | Sun | 14:00–15:00 | Booty | AIN | `2:00 pm · Booty · with AIN` | /schedule/booty/ |
| sun-1600 | Sun | 16:00–17:00 | Mobility | AIN | `4:00 pm · Mobility · with AIN` | /schedule/mobility-2/ |
| sun-1800 | Sun | 18:00–19:00 | Stretching | AIN | `6:00 pm · Stretching · with AIN` | /schedule/stretching/ |

## Per class page (12 pages behind the 36 slots)

Descriptions are verbatim club text; the full versions with sources are in `media/sourcing/raw-schedule/class-catalogue.json` (not shipped in the page data: the page does not show descriptions and the file stays small).

| Class page | Slots per week | Coach | Duration proof | Description or finding |
|---|---|---|---|---|
| /schedule/hyrox-conditioning/ | 3 | Rey | "1 hour training" | "Join Rey’s new class for an exhilarating Hyrox conditioning experience, incorporating dynamic HIIT exercises, functional movements, and endurance challenges, inspired by the Hyrox competi..." |
| /schedule/off-court-training/ | 2 | Rey | "1 hour training" | "Join our new class designed by Rey Aditya to enhance overall performance, prevent injuries, and promote long-term athletic development. Our off-court training encompasses various componen..." |
| /schedule/boxercise-advanced/ | 3 | Rey | "1 hour training" | "join our one and only BOXERCISE class by Rey that incorporates elements of strength, speed, agility, and endurance. It is a very fun class that involves boxing training without involving ..." |
| /schedule/boxercise-beginner/ | 3 | Rey | "1 hour training" | "join our one and only BOXERCISE class by Rey that incorporates elements of strength, speed, agility, and endurance. It is a very fun class that involves boxing training without involving ..." (card excerpt, cut by the club's own "[…]") |
| /schedule/calisthenics-2/ | 1 | TINOS | "1 hour training" | "Calisthenics – Discover the power of bodyweight training with Martijn’s new Calisthenics class. Whether you’re a beginner or advanced, our classes cater to every level, focusing on streng..." |
| /schedule/body-sculpt/ | 2 | Icha | "1 hour training" | "The perfect full body workout to elevate your heart rate, burn calories, and build lean muscle. It’s time to power-up in Pererenan with Icha. A dynamic 60-minute gym class that combines f..." |
| /schedule/booty-and-core/ | 3 | Icha | "1 hour training" | "Booty and Core is crafted to maximise strength, flexibility, and endurance, making it perfect for both beginners and seasoned gym-goers. Transform your fitness levels with Icha’s class, d..." |
| /schedule/stretching/ | 5 | AIN | "1 hour training" | **no own description.** The club's Stretching page reuses the Body Sculpt text (it even says ABOUT Body Sculpt). It is not a description of Stretching, so description stays null: do not publish it as one. |
| /schedule/stretching-2/ | 2 | AIN | "1 hour training" | **no own description.** Second Stretching page (the timetable links stretching/ for some slots and stretching-2/ for others). Same placeholder text. |
| /schedule/mobility-2/ | 3 | AIN | "1 hour training" | **no own description.** Mobility with Ain. Placeholder text, no own description. |
| /schedule/mobility-3/ | 4 | TINOS | "1 hour training" | **no own description.** Mobility with Tinos. Placeholder text, no own description. |
| /schedule/booty/ | 5 | AIN | "1 hour training" | **no own description.** Placeholder text, no own description. |

Not on the timetable: `/schedule/hiit-mobility/` ("HIIT & Mobility", with Rey). It exists as a class page but no slot is published, so it is **not** in the weekly data.

## Today's-weekday view: what the Today strip lists when that weekday is "today"

As rendered by `schedule.js` from `schedule.club.json` (coach after the page's Tinos to Martijn alias). "Full day (N classes)" is the label of the toggle button. Seats are invented by the adapter and left out here.

| Weekday | Classes | Full-day label | List (start–end · class · coach) |
|---|---|---|---|
| Monday | 7 | Full day (7 classes) | 08:00–09:00 · HYROX Conditioning · Rey <br> 09:00–10:00 · Boxercise Beginner · Rey <br> 10:00–11:00 · Stretching · Ain <br> 11:00–12:00 · Booty and Core · Icha <br> 13:00–14:00 · Mobility · Martijn <br> 17:00–18:00 · Booty · Ain <br> 18:00–19:00 · Stretching · Ain |
| Tuesday | 7 | Full day (7 classes) | 07:00–08:00 · Mobility · Martijn <br> 08:00–09:00 · HYROX Conditioning · Rey <br> 10:00–11:00 · Booty · Ain <br> 12:00–13:00 · Off-Court Training · Rey <br> 15:00–16:00 · Stretching · Ain <br> 16:30–17:30 · Boxercise Advanced · Rey <br> 18:00–19:00 · Stretching · Ain |
| Wednesday | 5 | Full day (5 classes) | 08:00–09:00 · Boxercise Beginner · Rey <br> 09:00–10:00 · Booty and Core · Icha <br> 10:00–11:00 · Calisthenics · Martijn <br> 16:30–17:30 · Boxercise Advanced · Rey <br> 18:00–19:00 · Mobility · Martijn |
| Thursday | 5 | Full day (5 classes) | 07:00–08:00 · Body Sculpt · Icha <br> 08:30–09:30 · HYROX Conditioning · Rey <br> 10:00–11:00 · Mobility · Martijn <br> 12:00–13:00 · Off-Court Training · Rey <br> 16:30–17:30 · Boxercise Advanced · Rey |
| Friday | 6 | Full day (6 classes) | 08:00–09:00 · Boxercise Beginner · Rey <br> 09:00–10:00 · Booty · Ain <br> 10:30–11:30 · Mobility · Ain <br> 14:00–15:00 · Body Sculpt · Icha <br> 15:00–16:00 · Booty and Core · Icha <br> 17:00–18:00 · Stretching · Ain |
| Saturday | 3 | Full day (3 classes) | 08:00–09:00 · Stretching · Ain <br> 09:00–10:00 · Booty · Ain <br> 11:00–12:00 · Mobility · Ain |
| Sunday | 3 | Full day (3 classes) | 14:00–15:00 · Booty · Ain <br> 16:00–17:00 · Mobility · Ain <br> 18:00–19:00 · Stretching · Ain |

First and last class of each day: Mon 08:00 to 18:00; Tue 07:00 to 18:00; Wed 08:00 to 18:00; Thu 07:00 to 16:30; Fri 08:00 to 17:00; Sat 08:00 to 11:00; Sun 14:00 to 18:00 (start times).

## Gaps and observations

1. **No seats published.** `capacity` and `spotsLeft` are `null`: seats exist only in the GymMaster app behind a member login (also the contract's own finding). The mock adapter in `api.js` still invents both (hash of class id and date, capacity 12) and flags them in `mockFields`; `SHOW_SPOTS = false` in `schedule.js` hides them.
2. **No structured level field.** Level appears only in class names (Boxercise Beginner / Advanced) and in some copy ("caters to every level" for Calisthenics and Booty and Core; Boxercise "suitable for people of various fitness levels ... recommended for age 14 and above"). The schema has no level field, so none was added to the rows; the wording is in the catalogue file.
3. **No room or zone** on the club pages. `zone: "workout"` is inherited from the mock (BRAND-NOTES 6: classes run on the Perform side).
4. **Weekend classes run on set dates** (the club says so). The Sat and Sun rows are the standing pattern, not a guarantee for every weekend; the page copy already says so (`schedule.html` weekend note).
5. **The GymMaster app is the real source of truth**; the web page can lag. Not reachable from this lane (login).
6. **Hidden second time field on four Thursday items** (HYROX 8:00 vs visible 8:30, Mobility 7:00 vs visible 10:00; Off-Court and Boxercise Advanced agree). It is hidden on every device, so the visible time was used; it equals the v1.3 capture. Worth one question to the club if the page goes live with this data.
7. **Stretching, Mobility and Booty class pages have no description of their own**: they carry the Body Sculpt text ("ABOUT Body Sculpt", "power-up in Pererenan with Ain"). Left `null` in the catalogue; do not publish that text as a description of those classes.
8. **Two pages each for Stretching (`stretching/`, `stretching-2/`) and Mobility (`mobility-2/` with Ain, `mobility-3/` with Tinos)**; the timetable links one or the other. Same class name on the page, so the data merges them under one title.
9. **Club copy errors** (kept verbatim in the catalogue, fix before reuse): "backgrdounds" (Off-Court), "beginnersand" (Booty and Core card), "lastest" (timetable note).
10. **Excerpt-only evidence** (not read in full, to stay within the credit cap): Boxercise Beginner, Calisthenics, Stretching x2, Mobility x2, Booty class pages (card excerpts from the timetable page were used; the first paragraph of Calisthenics is complete); all trainer profile pages (trainer identity evidence came from the trainer cards on the timetable page). Putu is on the trainer grid but teaches no published class.
11. TINOS trainer card shows Rey's photo file (`REY-scaled.webp`) while the Martijn Taken card shows `TINOS-scaled.webp`: a club CMS slip, not used for anything here.

## Mismatches between the current page copy and the real timetable

Checked every class-number or timetable claim in `partials/`, `assets/js/schedule.js` and the docs. **No claim on the page contradicts the real timetable.** Items that agree, and the items that name the mock and need a wording update after the switch:

| File:line | Text | Real timetable | Verdict |
|---|---|---|---|
| `partials/zones.html:44` | "One hour, up to seven a day, booked in the GymMaster app." | maximum is 7 (Mon and Tue); Wed 5, Thu 5, Fri 6, Sat 3, Sun 3; every class 1 hour | agrees ("up to"); weekend is 3 |
| `partials/schedule.html:63` | "Full day (5 classes)" (static Thursday fallback) | Thursday has 5 | agrees; the five fallback rows (07:00 Body Sculpt Icha, 08:30 HYROX Rey, 10:00 Mobility Martijn, 12:00 Off-Court Rey, 16:30 Boxercise Advanced Rey) and their `data-id`s equal the club data |
| `partials/schedule.html:60` (weekend note) and `:68` (terms line) | "Weekend classes run on set dates." / "Classes are one hour, booked in advance in the GymMaster app" | same wording on the club page | agrees. The prices and "free with Perform and Elite" in the same line were not checked by this lane |
| `partials/schedule.html` and `assets/js/schedule.js:36` | Full timetable link `https://elitefitbali.com/class-schedule/` | that is the real timetable URL | agrees |
| `assets/js/schedule.js:358` | "The gym floor is open 6:00–22:00." (empty-day message) | club footer: Perform 6:00AM–10:00PM, 7 days | agrees; the message never shows because no day is empty |
| `assets/js/schedule.js:32` | `TRAINER_ALIAS = { Tinos: 'Martijn' }` | the club file now carries `trainer: "Tinos"` | alias becomes live (the mock stored "Martijn", so it was dead code) |
| `assets/js/schedule.js:33`, `:212`; `assets/css/schedule.css:129`; `partials/schedule.html:1-2` | comments naming `schedule.mock.json`, "invented" spots | spots stay invented unless hidden | comment text only |
| `assets/js/api.js:11`, `:168`, `:177` | file name `schedule.mock.json` | | line 177 is the switch; 11 and 168 are comments |
| `README.md:48,63`; `WP-MAPPING.md:60`; `API-CONTRACT.md:163,183,184,468` | name the mock file and `mock-of-gymmaster` as `source` | the club file reports `source: "club-website-timetable"` | doc wording to update by the integrator |

## Validation (proof)

Command: `node media/sourcing/raw-schedule/validate-club.mjs` (from `_build/v2.1/`), **exit 0**. It loads both JSON files, compares keys and types, checks 36 rows / 60-minute length / sorted / unique ids / a club class-page URL in every `_source`, compares the content with the mock, and runs the **real `api.js` mock adapter** in a node vm against the club file (an in-memory copy with the file name swapped; `api.js` on disk is untouched). Output (`validate-club.out.txt`):

```
PASS top-level "_comment" present, type string
PASS top-level "_mock_fields" present, type array
PASS top-level "version" present, type string
PASS top-level "updated" present, type string
PASS top-level "source" present, type string
PASS top-level "tz" present, type string
PASS top-level "template" present, type array
INFO extra top-level keys (ignored by api.js): _real_fields, _not_published_by_club, sourceUrl, sourcePageModified, capturedAt
PASS tz is Asia/Makassar (WITA, UTC+8) in both
PASS template has 7 days, dow 1..7 in order
PASS dow 1: 7 classes
PASS dow 2: 7 classes
PASS dow 3: 5 classes
PASS dow 4: 5 classes
PASS dow 5: 6 classes
PASS dow 6: 3 classes
PASS dow 7: 3 classes
PASS 36 class rows in total (got 36)
INFO extra row keys (ignored by api.js): trainerPublished, _source, _note
INFO rows only in mock: [] | rows only in club: []
PASS club timetable equals the mock timetable (Tinos shown as Martijn)
PASS api.js loads its schedule from a single constant string (data/schedule.mock.json)
PASS adapter answers mock:true, degraded:false (club file was found and parsed)
PASS response source = club-website-timetable
PASS mockFields still flags spotsLeft and capacity as invented
PASS getSchedule(7 days from Thu 2026-10-01): 2026-10-01(dow4)=5 2026-10-02(dow5)=6 2026-10-03(dow6)=3 2026-10-04(dow7)=3 2026-10-05(dow1)=7 2026-10-06(dow2)=7 2026-10-07(dow3)=5
INFO today (Thu 2026-10-01, Bali): 07:00-08:00 Body Sculpt (Icha) | 08:30-09:30 HYROX Conditioning (Rey) | 10:00-11:00 Mobility (Tinos) | 12:00-13:00 Off-Court Training (Rey) | 16:30-17:30 Boxercise Advanced (Rey)
PASS startsAt carries +08:00 (WITA)
PASS adapter fills spotsLeft/capacity itself (hash, capacity 12) because the club file has null: INVENTED, flagged
PASS output is deterministic across loads
PASS control: the same harness on the mock file also gives 36 classes

ALL CHECKS PASS
```

## Files (all inside the lane's ownership)

- `assets/data/schedule.club.json` (the data); `_build/v2.1/requests/S-to-integrator.md` (switch and decisions); this report and its `.html` twin.
- `_build/v2.1/media/sourcing/raw-schedule/`: the saved scrapes (`class-schedule.json/.md/.raw.html/.links.json`, `schedule-index*.{json,md}`, `class-*.{json,md}`), `class-catalogue.json` (descriptions), `slots-proof.json`, scripts `build-club-json.py`, `validate-club.mjs`, `make-report.py`, and `validate-club.out.txt`.
- Nothing else was touched. Not published, not committed, no secret printed.
