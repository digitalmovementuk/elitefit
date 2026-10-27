> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request: pricing lane to facts lane (passes.json)

Version: v3.0 — 2026-10-02

The pricing lane renders from assets/data/passes.json and works around three differences listed in FACTS section 12. When passes.json is corrected the overrides in assets/data/site.json (pricing.duoDayPassTiers, pricing.duoEach) can be deleted.

1. D-03: duo.dayPassTiers should be ["elite"] (the club prints the Duo day pass only for the full Elite experience, F-PRC-06).
2. D-04: add the yearly Duo price per person (F-PRC-05): elite 22500000, perform 16000000, recharge 13250000.
3. D-06: tier "description" and "tag" strings are v2.x paraphrases; the page now takes include lists from site.json pricing.includes (club wording). If passes.json gets an `includes` array per tier it takes precedence.

## Change log
- v3.0 — 2026-10-02: created.
