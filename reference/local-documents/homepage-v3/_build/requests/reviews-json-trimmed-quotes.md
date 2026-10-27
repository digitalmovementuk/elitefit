> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request from the reviews lane: trimmed quotes in reviews.json and in the hero

Version: v3.0 — 2026-10-02 · from: reviews lane · to: orchestrator / hero lane / facts lane · priority: low (nothing breaks)

Change log: v3.0 created.

1. `assets/data/reviews.json` holds two quotes cut with an ellipsis: C K ("... solid machines…", full text has a second sentence, FACTS F-REV-08) and Marianne (F-REV-05, not eligible). The hero rotates C K with the cut text, because `hero.js` compares the partial's text to reviews.json. FACTS says to use the full text for C K. Suggestion: the hero lane either shows the full text (needs a data source that carries it: the reviews lane's `assets/data/reviews.verified.json` does not list C K, it is held in reserve; the full text is in `_build/facts/reviews-verification.json` and FACTS F-REV-08) or drops C K from the rotation.
2. The Reviews section does not touch `reviews.json`. It reads rating, count and the Google link from it and takes its quotes from the new `assets/data/reviews.verified.json` (five FACTS-eligible quotes, full verbatim text). A quote shows only if the same author in `reviews.json`, where present, is the start of the text there (trailing ellipsis ignored).
3. The count 488 (F-REV-02) is still not re-read on Google (limited Maps view on 2026-10-02). The Reviews section and the pricing trust stack both show it from `reviews.json`; re-check once before launch.
