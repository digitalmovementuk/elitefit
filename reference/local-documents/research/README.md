> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit Bali - fresh search research, 2026-09-30 (interim, still being completed)

Files: `semrush-data.json` (schema as briefed), `shots/` (Semrush trend charts, All-time, ID), `raw/` (text dumps of every Semrush page read, for audit).

## Method
- Semrush only through the logged-in Chrome Remote Agent browser: 0 API units. Nothing bought, no trial, Upgrade/Guru/Pricing never clicked.
- Google facts only through the `serp` command of the same browser (Google, hl=en, top-10 page). Serper was out of credits and not used. Firecrawl: 7 credits (site checks and confirming what Rite is), cap was 10.
- Small helper scripts (same browser, same port 9222, in the session scratchpad) were used because the CLI `text` command reads the page after 1.2 s, before Semrush charts and tables hydrate. They only load pages, wait, read text, hover a chart and click the range toggles (1Y / 2Y / All time), the Bulk Analysis box and its Analyze button. No other clicks.
- Base = May 2026 local files in `../legacy-outreach/2026-05/` (`elitefitbali-walk-in-deck.md`, `elitefitbali-proposal.html`). Carried-over numbers are marked `may-2026-local`. `bali-walk-in-leads.md` and the scorecard hold nothing on Elite Fit.

## Paid prompts met (none accepted)
- Semrush overlay "Get more with Guru plan - Reports per day are limited ... Upgrade to Guru" over blurred placeholder tables ("some ebay keyword ..."). It appeared intermittently on Organic Overview / Positions / Top Pages when a page was loaded again shortly after another load; a second load 1-2 minutes later returned real data. Never clicked. Domain Overview (`/analytics/overview/`) showed only skeleton boxes and the same Guru banner; not used.
- Semrush "You have too many active sessions - Multi-login activity may result in a temporary account block - Continue" page (`/multilogin/`) once redirected a report. NOT clicked (it would end other sessions of the account). The report loaded normally on the next attempt.
- History toggles: 1Y, 2Y and All time all work on the Top Pages "Organic Traffic" chart with no upsell (All time = Jan 2017 to Sep 2026). The Organic Overview chart is the keywords trend, so the Top Pages chart was used for traffic.

## Environment note
Chrome Remote Agent stopped on its own twice during the run (connection refused). Restarted with the tool's own `start` command (same profile, Semrush login persisted). Nothing else was changed.
