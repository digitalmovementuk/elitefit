> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request from the footer lane: copy delta for the footer slots

Version: v3.0 — 2026-10-02 · lane: footer (Sonnet 5.5) · owner of the answer: copy writer / copy review lane (`copy/copy.json`)

The footer is built (`partials/53-footer.html`, slots in `copy/slots/footer.json`, 32 keys, none of them in `copy.json` yet). Until they are there the page shows the provisional texts, which are already plain English in the voice guide's form. `node _tools/check-copy.mjs` will list the 32 keys as missing until the delta pass runs.

1. **20 keys that repeat a menu string word for word** (copy over the existing `menu.*` text, same wording so both places read alike): `footer.link_classes`, `footer.link_nutrition`, `footer.link_training`, `footer.link_rest`, `footer.link_pricing` (= "Passes"), `footer.visit_k`, `footer.maps_sr`, `footer.new_tab`, `footer.open_now`, `footer.open_until`, `footer.closed_now`, `footer.opens_at`, `footer.hours_every_day`, `footer.hours_today`, `footer.wa`, `footer.wa_text`, `footer.follow_k`, `footer.social_instagram`, `footer.social_facebook`, `footer.social_tiktok`.
2. **12 keys that are new** (provisional text in the slot file; please review or replace): `footer.aria`, `footer.logo_alt`, `footer.descriptor` (the same facts as `hero.h1`), `footer.nav_k`, `footer.link_coaches`, `footer.link_reviews`, `footer.link_visit` (short plain section names, not the section headings), `footer.terms`, `footer.top`, `footer.mark_a` + `footer.mark_b` (the big place name, "Elite Fit" and "Bali"), `footer.name` (club name before the year; no copyright symbol, no legal wording).
3. **Facts for the ledger:** `footer.descriptor` → F-ADR-01 F-EQP-01 F-NUT-02 F-FAC-04 F-FAC-07; `footer.link_*` and `footer.top` → none (navigation); `footer.terms` → F-PRC-14 (the row that cites the club's terms page); hours rows and open state come from `hours.json` (F-HRS-01 F-HRS-02 F-HRS-08); address and map link from `site.json` (F-ADR-01 F-ADR-05); WhatsApp from `site.json` (F-ADR-10, F-ADR-12 TO CONFIRM); profiles F-ADR-16.

## Change log
- v3.0 — 2026-10-02: created.
