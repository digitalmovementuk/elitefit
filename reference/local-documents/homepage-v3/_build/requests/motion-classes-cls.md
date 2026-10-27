> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Request from the motion lane to the classes lane: first-render layout shift (CLS budget 0)

Version: v3.0 — 2026-10-02 12:45 · from: motion lane · to: classes lane (or orchestrator)

Measured (Chromium 153, 4x CPU, cold load + full scroll, `layout-shift` entries without recent input), identical with motion.js switched off, so it is not the motion layer:

- Phone 390x844: CLS 0.00303 at about 0.9-1.3 s, one entry. Sources: `div.cls__live-main` height 4 -> 50 px (y 677 -> 657), `p.cls__lead` y 735 -> 743, `div.cls__tabs` y 830 -> 838, `span.cls__av--card` y 622 -> 625, `span.cls__dot` y 587 -> 591. The live card skeleton is 8 px shorter than the rendered card (min-height 144 px, rendered about 152 px), so everything below it moves when classes.js fills it.
- Desktop 1440x900: CLS 0.00003. Sources: every `span.cls__tab-d` moves up 12 px (y 743 -> 731) when the empty `.cls__tab-n` counts are filled.

Suggested smallest fixes (classes.css only; the final layout stays as it is): give the phone skeleton the rendered height (`.cls__live` min-height 152 px, or a `min-height` on `.cls__live-main` equal to one name line plus the meta line), and keep a line box in the empty count (`.cls__tab-n:empty::before { content: "\00a0"; }`). Re-check the first-viewport rule (390x844, 375x667, 360x740) afterwards.

The motion lane did not edit classes.css (the lane edited it at 12:16; no overlapping edits).

## Change log
- v3.0 — 2026-10-02: created.
