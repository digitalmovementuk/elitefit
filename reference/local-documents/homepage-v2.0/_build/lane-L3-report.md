> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Lane L3 report: Today strip (schedule)

Version: v1.0 — 2026-10-01 · lane L3 (Sonnet 5.5, xhigh) · spec: SECTIONS §3, CONTRACT §4, §6, §7, §9, §12, §13.

## 1. Files written (only these)

| File | Size (gzip) | Note |
|---|---|---|
| `partials/schedule.html` | 6.7 KB | section root `#today`, header comment with hooks, static fallback = Thursday 1 Oct snapshot |
| `assets/css/schedule.css` | 9.4 KB (3.1 KB) | tokens only, no hex, no motion properties (grep clean), scroll-snap only |
| `assets/js/schedule.js` | 17.6 KB (5.6 KB) | IIFE, `window.EFSchedule`, no libraries |
| `assets/data/schedule.mock.json` | 7.3 KB | weekly template, 36 classes, checked against v1.3 by script (see §5) |
| `_build/preview/L3.html`, `L3-nojs.html`, `L3-build.py`, `L3-api-stub.js`, `L3-*.png` | scratch | preview stitched from the partial by `L3-build.py`; uses the real `api.js` unless `?stub=1` |

Assets (images, fonts): none used, nothing to add to MEDIA-SOURCES.md.

## 2. What it does

- **Markup** follows SECTIONS §3 word for word: eyebrow `.sched__date` ("Today · Thursday 1 Oct", other day "Friday 2 Oct"), H2 `#today-title` "Today at Elite Fit", day tabs `.chip-row.chip-row--scroll.sched__days` (`role=tablist`, aria-label "Pick a day"), items `.sched__item` (status, time, `h3` name, coach), toggle `.sched__more`, foot `.sched__foot` with the spec sentence and the two buttons, weekend note, empty and error copy.
- **Tabs**: seven days from today (today first, because `getSchedule({date: today, days: 7})` is today-first), 44 px targets, roving tabindex, Arrow/Home/End keys, `data-selected="true"` + `aria-selected`, panel `aria-labelledby` follows the tab.
- **Now / next**: from `EFApi.now()` in Bali time (honours `?now=`). Class ended: `data-past`; running: `data-now` (+ `aria-current="time"`); first one after: `data-next`. `data-peek` marks the cards the closed state shows (now + next; no "now" → next two; all done → last two + one quiet line). Refresh every full minute and on `visibilitychange`; only attributes and the status text change, no card is rebuilt. New Bali day re-fetches the week.
- **Events**: `ef:schedule:render {date}` on first render and every day switch; `ef:schedule:nownext {nowId, nextId}` on every render and when the pair changes on a tick (null when none).
- **Full day in 1 tap on mobile**: `Full day (N classes)` toggles `.sched__list[data-state]`. 760–1023: two-column grid with the same toggle. 1024+: the whole day is one rail of cards, 0 taps, toggle hidden.
- **Book / reserve**: per the spec there is no per-card booking button. The foot says classes are booked in the GymMaster app; `Buy a pass` carries `data-open-checkout data-tier="perform" data-length="day"` (shop.js opens the checkout, nothing real); `Full timetable` is the spec's link to https://elitefitbali.com/class-schedule/ (new tab, `rel=noopener`). Nothing is sent anywhere. Prices are plain spec text in the foot and are never touched by JS (they equal `passes.json` `classPasses` today: 300.000 and 2.000.000).
- **Zero CLS design**: the static fallback in the partial is today's markup on the build day and has the same structure; every card has a reserved height (`--sched-card-h` 8.5rem, measured content 134 px), the status line is always there (empty for "later"), the closed list reserves two cards, the empty/error box fills that reserve.
- **No JS** (needs the integrator's `html.js` one-liner): without `html.js` the tabs and toggle are hidden and all five Thursday cards show.

### Hooks declared (for the motion lead)
`reveal-words` (H2) · `tab-indicator` (`.sched__days`) · `stagger` (on `.sched__rail`; items carry `data-motion-item`) · `now-next` (`.sched__list`) · `lift` (`.sched__item`) · `press` (3 buttons). No invented `x-*` values.
State attributes set: `data-selected`/`aria-selected` (tabs), `data-now`/`data-next`/`data-past`/`data-peek` (items), `data-state` (list), `data-ready="true|error"` (`#today`). The live dot is a real element `.sched__dot` inside `.sched__status--live` inside `.sched__item[data-now]`, so the motion lane can breathe it.

## 3. Choices where the spec was ambiguous (all small, flag if you disagree)

1. **Mobile cards are one vertical column**, not a horizontal strip (SECTIONS §3 layout, CONTRACT one-column rule, memory rule "nothing side by side"). The horizontal scroll-snap lives where it fits: the day tabs (only below ~340 px, see §5) and the card rail at 1024 to ~1279 when a day has 7 classes.
2. **Status label and time are stacked**, not on one row (no "label left / number right" on mobile). The status band is reserved even when empty, which makes "later" cards look slightly top-heavy (judged by eye, acceptable).
3. **Status label left-aligned inside the card** (card bodies stay left-aligned, base.css rule 7). Eyebrow, H2, tabs, toggle, foot text and weekend note are centred on mobile.
4. **Spots (`N spots left`, `Full`) are shown** because the lane brief asks for them; SECTIONS §3 does not list them. They are MOCK (invented), hidden for done and running classes, and switchable in one place: `SHOW_SPOTS` in `schedule.js`. Live club numbers are only in the GymMaster app, so this needs Michael's decision before anything is published.
5. **Copy I had to add** (the spec has no text for these states): `That was the last class today.` (all classes done), `No classes this day.` for an empty non-today day (spec: `No classes today.` is used for today), toggle label `First two only` when a non-today day is open (spec: `Now and next only` stays for today). The H2 stays "Today at Elite Fit" on every day (spec), which reads oddly when Monday is selected; the design lead may want "Monday at Elite Fit".
6. **`stagger` sits on `.sched__rail`**, `now-next` on `.sched__list`, because `data-motion` holds one value per element and both are required.
7. The day tab `aria-label` is the long form ("Thursday 1 Oct, today") around the visible "Thu".
8. 360 px phones: seven 44 px targets need 332 px, the row has 320 with the page gutter, so below 375 px the tab row borrows 8 px of the gutter on each side (still 44 px wide, no scroll at 360).

## 4. Interfaces used

`EFApi.getSchedule({date, days:7})`, `EFApi.now()`, `EFApi.baliParts()` (all present in L6's `api.js`; a Bali UTC+8 fallback exists if `baliParts` is missing). Class `id` is used as an opaque string (L6 returns `id@YYYY-MM-DD`). `spotsLeft` comes from api.js (it derives its own value by hash and ignores the `spotsLeft` in my template; capacity comes from my template). The spec's "Tinos → Martijn" mapping is stored in the template (`trainer: "Martijn"`) and again as `TRAINER_ALIAS` in `schedule.js` in case live mode returns "Tinos".

## 5. What I verified, and how

Measured on the render (Playwright 1.63, WebKit iPhone and Chromium, preview `_build/preview/L3.html`, real `api.js`, `?now=2026-10-01T09:30` unless noted):

- **Data**: `schedule.mock.json` parsed against v1.3 `index.html` `#classes` by script: all 36 classes, times (am/pm to 24 h), titles and trainers match, "Tinos" to "Martijn", every class 60 min. Counts per day 7/7/5/5/6/3/3.
- **First-screen peek** (stub header 56 px + stub hero 66svh): 
  - 390x844: hero 557 px, strip top 613, eyebrow at +24, tabs at +83, **first card top at +145 px** (spec ≤ 150), card 136 px tall, **86 px of it visible** in the viewport: status, time and the top of the class name.
  - 375x812: hero 536 px, strip top 592, first card +145, **75 px visible**: status and time; the class name is cut by the fold (judged by eye in the screenshot). Same numbers at 09:30 and 10:15.
  - 1440x900: strip top 666, date, H2 and tabs visible, cards start 129 px into the strip.
- **Taps to the full day**: 390 touch: **1 tap** (2 cards to 5 cards); second tap collapses. Desktop 1440: 0 taps (all cards visible).
- **States**, 390 WebKit, screenshots read: 06:10 (next = first class, none now), 09:30 (no class running because the 08:30 one ends at 09:30; next = 10:00), 10:15 (now + next, green border and dot), 12:30, 16:45 (now, no next, one card), 21:30 and 23:30 (all done: last two cards greyed, note shown), Saturday (weekend note), empty and error (stub `?stub=1&empty=1` / `&err=1`), no-JS twin. A forced clock change (`EFApi.now` override + `EFSchedule.refresh()`) moved the marker from next to now and emitted `ef:schedule:nownext` once.
- **Horizontal scroll**: `scrollWidth <= innerWidth` at 320, 360, 375, 390, 414, 600, 759, 760, 768, 820, 1024, 1280, 1440 in WebKit and Chromium, for all 7 days, closed and open: no failure, no element outside the viewport outside its own scroll container. The day tabs scroll inside their row only at <= 340 px (7 tabs, last tab ends 12 px inside the screen at 320 after scrolling to the end). The card rail scrolls inside its own container only at 1024 with 7 classes (not at 1280 or 1440).
- **Console**: only the L6 `[EF mock adapter]` info line. No error or warning at any width. (The error state logs one `console.warn`.)
- **CLS** (Chromium 390, `layout-shift` observer, schedule JSON delayed 800 ms to expose the static-to-hydrated step): **0.0000** at 09:30, 12:30, Saturday 10:00 and 23:30. Section height static to hydrated: 749.5 to 749.5 px on the build day; a Saturday load grows by 50 px below the fold (weekend note and note line), which is outside the viewport and reported no shift. Not measurable in WebKit (no layout-shift API).
- **Targets**: every button, tab and link in the strip is >= 44x44 at 360, 375, 390 (tabs 44.6, 44.4, 46.6 px wide) and 1440. Computed `transition-duration` and `animation-name` on every node in the section: none.
- **Contrast** (WCAG 2.x, from rendered colours, black steel `#1D2123` / card `#262B2D`): eyebrow 7.13, H2 and tabs 13.97, now card text 12.33, coach/next/spots 6.30, terms 7.13, ghost button 13.97, primary button (ink on coral) 6.52; **done cards at 55 % opacity 4.95** (that needs the primary ink for the small lines; secondary ink at 55 % would be 2.95, so the CSS switches those lines to the primary ink). Now border and dot `#9FB84D` on the card: well above 3:1 for a non-text marker.
- **Keyboard** (Chromium): Arrow keys move and select, Home/End, wrap-around; Tab goes tab, panel (focusable, it can scroll), Full timetable; the toggle is skipped on desktop where it is hidden.

Judged by eye only: spacing and rhythm of the cards, how the empty status band reads on "later" cards, the clipped sixth card at 1024, dark-on-light transition from the stub hero to the strip (the real hero is L1's), and the look of the live dot (no motion exists in my CSS). Not tested: VoiceOver/NVDA, a real phone, any live (non-mock) API.

## 6. Open issues for the integrator and the design lead

1. **BLOCKER-LEVEL, not mine: `assets/fonts/hanken-grotesk-latin-var.woff2` is the italic cut** (fontTools: name "Hanken Grotesk Italic", `italicAngle -8.0`, italic bit set). With `@font-face { font-style: normal }` pointing at it, all Hanken body text on the page renders slanted (visible in every one of my screenshots: eyebrow, coach lines, foot text, buttons use Syne and are fine). `LICENSES.md` says "no italic file is shipped". The upright file has to be re-downloaded (the upright `latin` subset URL in the Google Fonts CSS for `Hanken+Grotesk:wght@100..900`). Owner: Step 1 / integrator. Widths barely differ, so my layout numbers should hold.
2. `html.js` one-liner in `<head>` is required (my CSS hides tabs and toggle under `html:not(.js)`).
3. The static fallback is a snapshot of Thursday 1 Oct 2026; in WordPress the template part must render the real current day server-side (comment in the partial).
4. `spotsLeft`: see §3.4. The template's values are ignored by the current `api.js` (hash-derived), so "Full" in the template only shows with my preview stub.
5. Section order and ids unchanged: `#today`, `aria-labelledby="today-title"`, `data-zone="workout"`.

## 7. Requests to other lanes

- **Motion (M)**: (a) `stagger` on `.sched__rail`: re-run it on `ef:schedule:render`, because day switches rebuild the cards; (b) cards hidden by the closed state (`display: none`) appear when `.sched__list[data-state]` becomes `open`, so they must not wait for an IntersectionObserver that already fired; (c) the breathing dot is `.sched__item[data-now] .sched__dot`; (d) `reveal-words` is on `#today-title` because §13 says section H2s; it never changes the text after JS runs; (e) the tab indicator keys off `.sched__days [data-selected="true"]`.
- **L1 (hero)**: nothing needed; the strip assumes the hero ends at `--hero-h` below the header and starts with `padding-top: var(--space-5)` for the peek numbers in §5.
- **L2 (shop)**: `Buy a pass` in the foot uses the standard opener attributes only; nothing else is shared.
- **L6**: `getSchedule` may throw synchronously on a bad date (handled, shows the error state); nothing to change.

## Change log

- v1.0 — 2026-10-01 — first version (L3).
