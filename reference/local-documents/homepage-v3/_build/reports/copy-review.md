> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Copy review: Elite Fit Bali homepage v3 (Phase 1)

Version: v3.0 — 2026-10-02 · lane: copy review (Fable 5.1) · a separate pass after the writer, with every house check. Owns `COPY-LEDGER.md` (+ html), `_tools/check-copy.mjs`, `_tools/check-numbers.mjs`, `_tools/build-copy-ledger.mjs`, the edits to `copy/copy.json` and `copy/copy-facts.json`, and `_build/requests/copy-review-1.md`.

Inputs read: LANE-BRIEF-COMMON, CONTRACT §5–§6, BRIEF-RAOUL (Copy process, Who it is for), VOICE-GUIDE-ELITEFIT v3.0, FACTS v3.0 (all 18 sections), copy.json after the writer's 13:00 delta (310 keys, `checkout.duo_each` in), copy-facts.json, copy-gaps.md, DECISIONS tail, every slot file, every data file, the built page and all JS modules. The writer's original is untouched in `copy/copy.writer-original.json`; my pre-edit state is `copy/copy.before-review.json`.

## 1. What was checked, and the result

| # | Check | How | Result |
|---|---|---|---|
| 1a | Coverage: every `data-copy` / `data-copy-attr` key in the built page and every key a JS module asks for (`ctx.t`, `T`, `tt`, `tr`, `S`, `L`, `lex` wrappers, ternary call sites, the dynamic prefixes `classes.day-long-N` and `checkout.next_N`) has copy; every copy key is used; every `{placeholder}` is passed by the JS and nothing the JS passes is dropped; lexicon wiring (`[data-lex]` + `data-copy`) for pricing | `_tools/check-copy.mjs` | **PASS** after edits. Before: 2 keys used with no copy (`pillars.title`, `pillars.lead`, orchestrator's intro), 6 strings dropped a placeholder the JS passes, 1 string carried a placeholder the JS never fills. Unused keys: 0 of 312. 156 JS call sites parsed. |
| 1b | Length: every string within its slot max | same script | **PASS**: 0 of 312 over; 2 keys without a slot (the pillars intro, slot file requested) |
| 1c | Voice guard and internal wording: Raoul's list, hype/status, grind, outcome and clinical claims, urgency, spa clichés, slogan belonging, punctuation (no `!`, no caps for emphasis, no ellipsis, no emoji), internal terms (prototype, SEO, keyword, landing page, direction, v3, placeholder, demo, concept outside the checkout notice), "Elite" only inside Elite Fit / Nutrition / Training / Rest | same script, FAIL on copy.json, WARN on data strings and static markup | **PASS** on copy.json (0 hits in 312 strings). 20 WARN on data and markup, all explained in §3: member quotes verbatim (`!`, `…`), the club's own WhatsApp greetings (`!`), "Elite" in the tier name and in one offers sentence, the page `<title>`/meta (internal words). |
| 1d | Numbers: visible text of the page in WebKit 390×844 and Chromium 1440×900 (`?nolive`), default state + opened menu sheet + all seven class days + twelve pricing states (six lengths, single and Duo) + five checkout journeys through steps 1–5 incl. the WhatsApp message text; bowl demo not opened; every number, price, time, temperature, count, percentage and date checked against passes.json, site.json, hours.json, rest.json, schedule.club.json, coaches.json, menu.json, offers.json, reviews.json, checkout.json and FACTS | `_tools/check-numbers.mjs --extract` (under the browser lock, each run under 3 min) then `--check` | **PASS** on the final dumps (after all edits): 1 641 numeric tokens, 528 distinct in context, 520 backed by a data value or FACTS row, 8 clock-derived (live clock, countdowns), 0 unbacked. Zero console or page errors in either browser. |
| 2 | Ledger: every visible string → key or data source → fact ids → status; reconciliation of every captured visible line against the ledger | `_tools/build-copy-ledger.mjs` → `COPY-LEDGER.md` | 312 copy rows (197 sourced, 95 interface words, 14 page behaviour, 6 names, 0 gaps) + 203 data rows (2 flagged GAP, both requested) · 424 distinct visible lines captured on the final dumps, 424 matched, 0 left over (ledger section C) |
| 3 | Voice judge: every string read in page order against the guide (one voice, plain, warm, specific, rhythm, no slogan, labels and buttons in the form rules, hero and pillar names exact) | by hand, this report §2 | 10 edits, 2 keys added; the settled questions are in §3 |

## 2. Edits to copy.json (key · before → after · why)

1. `classes.weekend-note` · "…The current weekend is on the club website and in the GymMaster app." → "…The current weekend is in the GymMaster app." · this page is the club website; the sentence pointed at itself (F-CLS-03 names the app).
2. `nutrition.bowl.sum.partial` · "Still a pick or two to go" → "{items}. Now pick your {step}" · the JS passes the chosen items and the open step; the summary lost both.
3. `nutrition.bowl.sum.done` · "Your bowl is ready to send" → "{items}. Your bowl is ready to send" · same: the chosen bowl was not listed.
4. `nutrition.bowl.added` · "Added to your bowl" → "{name} added to your bowl" · screen-reader announcement without the item's name.
5. `nutrition.bowl.removed` · "Taken out of your bowl" → "{name} taken out of your bowl" · same.
6. `nutrition.bowl.full` · "That’s the limit for this step" → "Up to {n} for this step" · the limit was passed and dropped.
7. `training.hours.until.short` · "{days} until {close}" → "until {close}" · the JS appends the days itself; the raw `{days}` would have printed.
8. `pricing.cta_aria` · "Buy a {tier} pass, {length}" → "Buy the {tier} pass, {length}" · "Buy a Elite pass" in the spoken label.
9. `checkout.unit_day` · "1 day" → "Day pass" · the card says DAY PASS and the chip Day; "1 day" was a third form for the same thing (club wording: Day pass, F-PRC-04).
10. `checkout.wa_send` · "Open in WhatsApp" → "Send it on WhatsApp" · see §3 (iii).
11. **added** `pillars.title` · "Nutrition, training and rest, under one roof" (the orchestrator's provisional text, now a key; F-MNU-07, F-FAC-12).
12. **added** `pillars.lead` · provisional "Three parts of the club, one membership." → "Eat, train and rest, in whichever order suits your day." · "one membership" read as if one membership covered all three parts, which only Elite does (F-FAC-08); the new line asserts nothing beyond F-MNU-07.

copy-facts.json: the two new keys point to F-MNU-07 and F-FAC-12; no other fact set changed. copy-gaps.md and COPY-v3.0.md are the writer's files and were not edited; COPY-v3.0.md therefore lags copy.json by these 12 lines.

## 3. Settled questions and deviations

- (i) **"Passes" vs "Pricing"**: kept "Passes" (nav link and eyebrow). The visitor buys a pass and every button says "Buy a pass"; the anchor stays `#pricing`. Deviation from the brief's section name, by design.
- (ii) **Hero "Better / Together"**: left exactly as the orchestrator set it (club campaign name, F-OFR-02); h1 unchanged.
- (iii) **Checkout button**: "Send it on WhatsApp". The lead above it already says "Your order is ready. Send it on WhatsApp and a person answers", so the button repeats the verb the visitor is about to perform; "Open in WhatsApp" named the mechanism and left open whether anything had gone; the brief's "Send your details on WhatsApp" is longer and makes it about details when the message carries the order. Honest either way: the page sends nothing, the visitor taps send (`checkout.wa_note` says so).
- (iv) **Unverified facts**: the bowl card asserts nothing (title is Raoul's wording; body and button ask the team). The specials row says only that they change monthly (board: "Special of the month", F-MNU-16) and shows no price (unit unconfirmed, F-MNU-15). The coolers are hedged ("when the cafe has them", F-MNU-10). Classes on a day pass: copy says "included with a membership" (F-CLS-28/29) and the checkout skips the line for a Perform day pass. **Found and requested**: the Perform pricing CARD lists "Unlimited group classes" at every length including the day pass (site.json, pricing lane) → request item 3.
- (v) **"family"**: copy.json never uses it. offers.json (pricing lane) says "friend, partner or family member" on the Duo membership card: the club's eligibility wording (F-PRC-07), not the belonging slogan the guide bans. Kept, listed as info.
- **Internal wording that remains, outside my files**: the page `<title>` and meta description ("homepage prototype, Direction B (v3.0)", "Prototype only") → request item 1 to the orchestrator.
- **Data strings with guard hits, kept on purpose**: member quotes verbatim with their `!` and `…` (brief: verbatim); the club's own WhatsApp greetings "Hello Elite Fit Bali!" in offers.json and checkout.json while every copy.json greeting uses a comma (the writer's deliberate choice) → request item 5, low priority; "for the full Elite experience" in the Duo day pass offer text → request item 4.
- **Kept against a check that could only pass by weakening the page**: none needed. All 1c hits on copy.json were zero before any edit; the writer's voice is clean.
- **Not verified by me**: the review count 488 (F-REV-02, data file only), the WhatsApp number (F-ADR-12, TO CONFIRM), Tinos = Martijn (F-COA-06). All three are carried as sourced-with-status in the ledger, none is my call.
- **Render check**: the edited strings were looked at in WebKit 390×844 screenshots (pillars intro, classes block, checkout step 5: all read correctly); Chromium 1440×900 is verified by its text dump only (its screenshots were taken but not viewed). The built page after the last rebuild has 0 missing keys (check-copy coverage) and 275 copy replacements.

## 4. The five things Raoul should look at first

1. **Perform day pass and classes** (request 3): the pricing card promises "Unlimited group classes" on a Perform day pass; the club only states classes from the weekly membership. One data rule fixes it, or the club confirms.
2. **The tab title** (request 1): "homepage prototype, Direction B (v3.0)" is what the client sees in the browser tab and in any shared link preview.
3. **The checkout's last button** now reads "Send it on WhatsApp" (was "Open in WhatsApp"); the WhatsApp number it opens is still TO CONFIRM (F-ADR-12).
4. **The pillars intro line** is new copy from this pass ("Eat, train and rest, in whichever order suits your day."); the previous line implied one membership covers all three parts.
5. **"Create your own bowl"** rests on Raoul's brief alone (F-MNU-22: no club source); the card asks rather than claims, but the heading still names a feature the club does not publish. A photo of the printed cafe menu closes it (menu.json bowlReport).

## 5. Review pass 2 (Phase 2 sections, 2026-10-02 14:20 to 14:35 WITA)

Scope: the writer's delta 2 (80 keys: coaches 7, reviews 11, visit 27, footer 32, menu links 3; copy.json now 392 keys) and the sections behind them: #coaches with every row opened, #reviews, #visit, the footer, the pinned Rest strip, the menu sheet with eight links, and the hero's review line, which now reads reviews.verified.json. Pre-edit state: `copy/copy.before-review-2.json`; the pass-1 backups are untouched. Both browsers were re-extracted after the one edit (WebKit 14:26, Chromium 14:31 WITA), both with 59 text blocks and zero page errors.

| # | Check | Result |
|---|---|---|
| 1a | Coverage on 392 keys (new wrappers `R` and single-argument `lex`, the `classes.day-` prefix coaches.js reads, the reviews lexicon, keys chosen by nested ternaries) | **PASS**: 0 missing, 0 unused, every placeholder matched, 195 call sites parsed. Correction to pass 1: my parser then listed `training.hours.daily`, `rest.hours.daily` and `rest.hours.range` as unreferenced and the report said "0 unused"; they are reached through ternaries inside `tr()`/`tt()`. Parser fixed; 392 of 392 are referenced. |
| 1b | Length | **PASS**: 0 of 392 over the slot max; every key has a slot (the orchestrator's `orchestrator.json` now carries the pillars keys) |
| 1c | Voice guard and internal wording on the 80 new strings | **PASS**: 0 hits; no outcome word in the coaches copy; "Elite" only inside names; "family" nowhere in copy |
| 1d | Numbers, both browsers, every Phase 1 state plus coaches rows opened, reviews, visit, footer, pinned strip, eight-link menu | **PASS**: 2 102 numeric tokens, 662 distinct in context, 652 backed, 10 clock-derived, 0 unbacked (new allowances: Plus code 946Q+89 = F-ADR-03, per-coach weekly counts from the timetable, menu indices up to the number of links) |
| 1e | Verbatim quotes: every quote #reviews renders equals its reviews.verified.json text character for character, author line included; nothing else is rendered; every hero rotation quote is one of those texts | **PASS**: 20 of 20 (5 section quotes + 5 hero quotes, in each browser) |
| 2 | Ledger (`COPY-LEDGER.md` + html) | 392 copy rows (255 sourced, 110 interface words, 14 page behaviour, 13 names, 0 gaps) + 261 data rows (coaches names, counts and day rows; the five quotes with their F-REV ids; address, Plus code, Maps, WhatsApp, hours; footer links, terms, year; the pinned strip) · 487 distinct visible lines captured, 487 matched, 0 left over |

The specific points asked for:
- **footer.name / year**: `footer.name` = "Elite Fit Bali"; footer.js renders the year in club time; the page shows "Elite Fit Bali 2026". No copyright symbol, no legal wording. Correct as built.
- **visit.clip_cap**: was "Front door · Jalan Sempol No. 26". The poster frame (checked by eye) shows the entrance wall with the club's mark and only a sliver of door at the frame edge, so "Front door" over-describes the shot. **Edited** to "The entrance · Jalan Sempol No. 26" (the slot's own noun phrase plus the street, F-ADR-01); the EF mark is not claimed in words.
- **Visit tour**: "Book a free tour" is the club's own button (F-OFR-03); `visit.lead`, `visit.f_first_v` and `visit.wa_text` rest on F-ADR-14/15 and F-OFR-03; the WhatsApp text opens with a comma like every other opener on the page (the pricing lane's data now does the same). Kept.
- **Reviews title and lead**: "What people say about the club" (people, not members: two of the five are by visitors) and "A selection from the club’s Google review page, each one as written." The "as written" claim is now the scripted gate 1e. Kept.
- **Nav label**: "Passes" in the menu sheet, the footer and the pricing eyebrow; menu-nav.json's informational `label: "Pricing"` is never rendered. Consistent.
- **Rey's role line**: `coaches-section.json roleLines` is empty; Rey's opened row shows the name, "11 classes a week" and his day rows only; "Weight loss" appears nowhere in either dump.
- **Coaches copy**: "Every class has a coach, and this is who leads what" (11 words, no end punctuation, no outcome word) and "Tap a coach to see their classes, day by day, with the times." Kept.

Edits in pass 2 (key · before → after · why): 1. `visit.clip_cap` · "Front door · Jalan Sempol No. 26" → "The entrance · Jalan Sempol No. 26" · the shot shows the wall with the mark, not a door. The other 79 strings stand as written.

Requests: no new code request. Of `copy-review-1.md`, items 3 to 6 were taken up by the pricing lane (includesSkip, offers wording, comma greetings, apostrophes); item 1 (page `<title>` and meta description still read "homepage prototype, Direction B (v3.0)") is open with the orchestrator; item 2 is closed (orchestrator.json exists).

Still not verified by me: the review count 488 (F-REV-02), the WhatsApp number (F-ADR-12), Tinos = Martijn (F-COA-06); the quotes are verified against the club's own pages per FACTS, not re-read on Google. Renders looked at: WebKit 390×844 shots of coaches, reviews, visit and footer (one contact sheet) read correctly; Chromium 1440×900 verified by its text dump.

## 6. Reproduce

```
node build.mjs
node _tools/check-copy.mjs
_tools/with-browser-lock.sh node _tools/check-numbers.mjs --extract --browser webkit
_tools/with-browser-lock.sh node _tools/check-numbers.mjs --extract --browser chromium
node _tools/check-numbers.mjs --check
node _tools/build-copy-ledger.mjs && node _tools/md2html.mjs COPY-LEDGER.md
```
Outputs: `_build/reports/copy-review-text-{webkit,chromium}.json` (visible-text dumps), `_build/reports/copy-review-numbers.json` (every token with its verdict and source), `COPY-LEDGER.md/.html`.

## Change log
- v3.0 — 2026-10-02: created after the review pass (scripts green, 12 copy changes, 8 requests).
- v3.0 pass 2 — 2026-10-02 14:35: Phase 2 sections reviewed (80 new keys, 1 edit), scripts extended (coaches, reviews, visit, footer, pinned strip, eight-link menu, verbatim-quote gate), ledger at 392 + 261 rows and 487/487 lines, pass-1 "0 unused" corrected.
