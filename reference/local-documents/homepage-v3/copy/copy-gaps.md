> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Copy gaps and note conflicts: Elite Fit Bali homepage v3

Version: v3.0 — 2026-10-02 · lane: copy (Fable 5.1) · one line per key, with what was done.

- `nutrition.bowl.title`: the note says "Raoul's wording, use as given", but no bowl wording is in the voice guide or FACTS. Used the phrase FACTS itself uses for the feature (F-MNU-22, "create your own bowl"). Swap in Raoul's exact words if they differ.
- `nutrition.bowl.card.body`: FACTS F-MNU-22 says no create-your-own bowl is published anywhere; "built at the cafe" is not a club statement. Wrote a neutral "ask the team at the cafe counter" line, no claim that a bowl exists or is built there.
- `nutrition.fact.specials.note`: no confirmed price or unit (F-MNU-15). Wrote "Prices at the counter" (the board and standee carry figures, F-MNU-13) and nothing about the amount.
- `nutrition.fact.drinks.v`: the coolers come from a 2024 post, availability unconfirmed (F-MNU-10). Hedged with "when the cafe has them".
- `nutrition.wa.*`, `pricing.wa_*`, `menu.wa_text`: the club's own pre-filled texts open with "Hello Elite Fit Bali!" (F-ADR-14); the voice guide bans exclamation marks. Opened with "Hello Elite Fit Bali," instead. Deliberate deviation from the club's punctuation, not its words.
- `pricing.duo_hint`: the note asks to name where Duo prices exist (Elite day pass, 4 weeks, 52 weeks) and to stay true to passes.json; FACTS D-03/D-04 record that passes.json and the club disagree (day pass on all tiers vs Elite only; no yearly Duo in the file). Did not list the lengths; wrote a line that stays true either way, and left the per-pass truth to `pricing.duo_na`.
- `training.fact.classes.v`: whether a day pass includes classes is an open gap (FACTS 17). Wrote "included with a membership", which is what F-CLS-28/29 carry.
- `rest.readout.sr` / `rest.readout.srOne`: the club prints no temperature unit (F-TMP-05); the visual readout shows °C per the slot note, so the screen-reader text says "degrees Celsius" to match it. `srOne` assumes the single value arrives as {a} (the note names no placeholder).
- `hero.ro_closes`: the note names no placeholder; wrote "Until {t}" to match its sibling `hero.ro_open_v`. If the code appends the time itself, drop "{t}".
- `training.hours.open` / `training.hours.closed`: the note names no placeholder; since `training.hours.closed.plain` exists for "no opening time known", the full versions carry {close} and {open} in the section's own convention. Check against the JS.
- `checkout.duo_each` (replaces `checkout.duo_calc`, retired by the checkout lane): written "{each} each, for two", the same tail as `pricing.duo_each`, so the per-person price stays in the text next to the total for two (F-PRC-05); no percentage (F-PRC-16).
- `nutrition.bowl.hint.optional`: written as "(optional)" so it reads correctly when appended to a hint with or without a space.
- `classes.live-then` / `classes.when-day`: {day} arrives capitalised ("Tomorrow", a weekday), so the rendered line reads "Then Stretching with Ain, Tomorrow at 08:00" with a capital mid-sentence. Accepted; the alternative was a lowercase sentence start.
- `menu.link_pricing`: the note says "section name as given (anchor #pricing)"; wrote "Passes", the desk word and the section eyebrow, rather than "Pricing". Change if the section name must match the anchor.
- `hero.rev_count`: the count 488 is from the data file and was not re-verified today (F-REV-02); the string itself is only the word "reviews".
- `checkout.concept_tag`: the slot asks for a tag naming a concept; "Concept" is the plainest word that is not on the internal-words list.
- Voice-guide "family": the club's Duo wording is "friend, partner, or family member" (F-PRC-07); the guide bans "family" as a belonging word. Wrote "whoever you bring" / "the person coming with you" instead of the club's list.

## Delta pass — 2026-10-02 13:00

Re-diff of copy/slots/*.json against copy.json and copy/writer-input/ (role, max, note; provisional strings not read).

- New: `checkout.duo_each` (see above). Retired: `checkout.duo_calc`, removed from copy.json and copy-facts.json. 310 keys remain.
- `menu.social_instagram`, `menu.social_facebook`, `menu.social_tiktok`: max 60 → 40 and now visible-to-screen-reader text followed by `menu.new_tab`. Existing names (24–27 characters, name only) still fit and carry no "new tab" words; unchanged.
- `checkout.pay_aria`, `checkout.announce_total`: {total} now arrives with its currency; the strings already leave the amount to the data, unchanged.
- `classes.weekend-note`: the note only gained a description of its provisional text; the written string still meets F-CLS-03, unchanged.
- `hero.display_1` note now names "Better Together" as the provisional; the headline keys were set by the coordinator and were not touched (the writer original is in copy/copy.writer-original.json).
- No other key changed, none without copy, none extra.
## Delta pass 2 — 2026-10-02 14:18

Phase 2 sections (coaches, reviews, visit, footer) and three menu links: 80 keys added, nothing existing changed. Re-diff of every copy/slots/*.json against copy.json and copy/writer-input/ (role, max, note; provisional strings not read).

- `visit.wa_text`: the note asks for the club's tour text verbatim (F-ADR-14, "Hello Elite Fit Bali! I'd like to book a tour"); written with a comma instead of the exclamation mark, as every other WhatsApp opener on the page (the pricing lane has since adopted the comma). Plain apostrophe kept for the URL.
- `visit.lead` and `visit.f_first_v` both rest on F-ADR-15 / F-OFR-03 by their notes; worded differently (the lead invites, the row says how to get the tour) so nothing is said twice.
- `visit.clip_cap`: caption form "title · fact" from the voice guide; the fact is the street (F-ADR-01). The front wall and EF mark are not in FACTS, so the caption names the door, not the mark.
- `footer.name`: the note reads as "club name before the year", so the string is the name only and the year is expected from the page. If the year is not rendered by code, append it to this string.
- `coaches.go-sr`: written with a leading comma (", opens {day} in the timetable") in the same convention as the other appended screen-reader strings; the note did not say.
- `footer.terms` / `checkout.r_terms`: both read "The club’s terms", the name of the club's own page; no legal wording on the page.
- `reviews.count_k` / `reviews.src_google`: the count 488 is from the data file and was not re-read on Google today (F-REV-02); the labels say only "Reviews" and "Google review", no "verified".
- `menu.link_pricing` was kept as "Passes"; the footer repeats it (footer.link_pricing), as its note asks.
- Changed slot notes since the writer inputs, all satisfied by the existing strings, unchanged: `pricing.bundle`, `pricing.wa_pass`, `pricing.wa_pass_duo`, `pricing.classes_only` ({sum}/{price}/{single}/{ten} now arrive with their currency; the strings never add one), plus the six recorded in the first delta.
- `copy/slots/orchestrator.json` holds two keys of its own, `pillars.title` and `pillars.lead` (the intro above the three pillars). Their strings were already in copy.json before this pass, written by another lane; not touched here, listed in COPY-v3.0.md under "Three pillars (intro)" and re-checked against their max.
## Change log
- v3.0 delta 2 — 2026-10-02 14:18: coaches (7), reviews (11), visit (27), footer (32) and menu.link_coaches/reviews/visit added; 392 keys in all.
- v3.0 delta — 2026-10-02 13:00: checkout.duo_each added, checkout.duo_calc removed, re-diff recorded above.
- v3.0 — 2026-10-02: created with copy.json (310 strings).
