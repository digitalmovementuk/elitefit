> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Handoff to Codex: Elite Fit Bali SEO keyword matrix (v0.2 final built, v0.3 in progress)

**Version 1.0 · 02.10.2026, 16:20 (machine local time) · from Claude Code (Sonnet 5.5) to Codex**

Read this file first, then `AGENTS.md` at the repo root (house rules apply to you too). Everything below was verified on 02.10.2026 unless marked "unverified".

## 1. The job

Raoul Müller (Digital Movement) is preparing a pitch for **Richard, owner of Elite Fit Bali** (gym, recovery area and café in Canggu, Bali). The deliverable is a self-contained HTML table (plus an md twin and an evidence CSV):

- Rows: 50 keywords. Columns: Searches/month (Semrush, Bali = database ID), May 2026 value (kept in its own column), KD, and one column per competitor plus Elite Fit (EF).
- Competitors: **Reload Sanctuary (R), Nirvana Life (N), Omni (O), Body Factory (BF), Obsidian (OB)**. EF is ticked on every row.
- A **tick** = the site has a dedicated, indexable SEO page with the keyword in its H1 (matcher v2 below). Thin pages (< 250 words) get a lighter tick. Every tick links to its page.
- Every cell also shows the **real Google position** (organic rank) of that site for that keyword. Raoul has asked for this four times; the last ask (verbatim in meaning): "all cells filled, all keywords for all competitors, especially EF".
- Competitor SEO ranking boxes, EF-vs-leader bars, sortable Searches / May / KD columns with a Reset button, sticky header row, and a closing section **"Top 10 quick wins"** (summary table + 10 cards, every number computed from the table).
- "n.a." is written for missing data, never 0. Semrush is the only source for volume and KD.

## 2. Where everything is

Folder: `/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30/seo-matrix-v0.2/` (the v0.1 mockup in `../seo-matrix-mockup/` must stay untouched).

| What | File |
|---|---|
| Last final build (pages 1-3 read for all 50 terms) | `EF-SEO-Keyword-Matrix-v0.2.html` / `.md` / `-evidence.csv` |
| Latest build (deep reads to page 6 for 37 terms) | `EF-SEO-Keyword-Matrix-v0.3-draft2.html` / `.md` / `-evidence.csv` |
| Main generator | `_scripts/build_v02.py` (Python, f-string HTML template with doubled braces) |
| Curated quick wins | `_scripts/quickwins.json` (10 wins; prose is hand-written, numbers are computed) |
| Merge Google reads into the batch files the build reads | `_scripts/assemble_serp.py` -> `raw/serp-final-batch-1..5.json`, `raw/serp-sources.json` |
| Google reader, pages 1-3 | `_scripts/serp_serial.mjs` -> `raw/serp-serial/state.json` (all 50 terms done) |
| Google reader, deep pages 4-10 | `_scripts/serp_deep.mjs <maxStart>` -> `raw/serp-serial/deep.json`, log `raw/serp-serial/deep.log` |
| Supervisors (restart Chrome and the reader after crashes) | `_scripts/serp_supervisor.sh`, `_scripts/serp_supervisor_deep.sh <maxStart>` |
| Live re-check of every tick | `_scripts/verify_ticks.py` -> `raw/verify-report.json` (26/26 confirmed, 54 near-misses) |
| Crawls, Semrush reads | `raw/crawl-{R,N,O,BF,OB,EF}.json`, `raw/terms-50.json`, `raw/semrush-*` |
| Older drafts | `-draft1..5` files for v0.2, `-draft1..2` for v0.3. Never overwrite a version. |

Project memory written by Claude (read it, do not edit blindly): `/Users/raoulito/.claude/projects/-Users-raoulito-digital-movement-uk/memory/project_elitefit_seo_keyword_matrix.md` and `feedback_serp_reads_serial_one_ip.md`.

## 3. Current state (02.10.2026 16:20)

- v0.2 final is built and delivered to Raoul (Google pages 1-3 for all 50 terms: 115 exact positions, 185 cells `>30`).
- v0.3 adds **deep Google reads (pages 4-10, i.e. results 31-100)** so that cells that read `>30` get a real position or a true `>N`. Draft2 has 133 exact positions of 300 cells. EF has an exact position for 22 of 50 terms; three of them are beyond page 3 ("premium gym bali" #31, "gym day pass canggu" #34, "personal trainer bali" #41).
- Pass 1 (pages 4-6) is done for terms 1-37 (stored in `raw/serp-serial/deep.json`). **Terms 38-50 (the café and healthy-food terms: coffee shop canggu ... cafe pererenan) are still at page 3.** Pass 2 (pages 7-10) has not started for any term.
- **Google blocked this machine's IP at 16:04** (HTTP 403 "client does not have permission" on `/search`) and was still blocking at 16:19. Claude **stopped the deep reader and its supervisor at 16:20** so that nothing probes Google while the block is active; **nothing is running now** (verify with `pgrep -fl "serp_supervisor|serp_deep|serp_serial"`). The previous block lasted about 50 minutes. Never run a second reader in parallel.
- Because the reader was stopped, the chained pass 2 will **not** start by itself: run the commands in section 4 yourself once the block has lifted.
- **Open decision for Raoul (asked once, unanswered):** switch the Mac to a phone hotspot to get past the block (about 1.5 hours to finish everything), or wait for the block to lift. Do not ask him again; if no answer is in the chat, just retry later with the commands below.
- Firecrawl: Serper.dev is empty (`-5` since 17.09.). Firecrawl credits are low (about 22 left, cycle ends 24.10; the account reported "low on credits" at 15:25). Do not spend them unless needed; they were only useful as a page-1 fallback (see lessons).

## 4. How to resume (exact commands)

```bash
cd "/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30/seo-matrix-v0.2/_scripts"
# 0) make sure nothing is running, then test the block with ONE probe (node probe_google.mjs: prints the page title and result count; a 403 page means still blocked, wait or switch network)
pgrep -fl "serp_supervisor|serp_deep|serp_serial"
# 1) Chrome Remote on 9222 must be running (supervisor restarts it; or:)
node "/Users/raoulito/digital-movement-uk/Tools/Chrome Remote Agent/bin/chrome-remote-agent.mjs" status   # or: chrome-remote status
# 2) finish pass 1 (pages 4-6), then pass 2 (pages 4-10), detached, resumable
nohup zsh -c './serp_supervisor_deep.sh 50; if grep -q "DONE-ALL" <(tail -n 4 ../raw/serp-serial/deep.log); then ./serp_supervisor_deep.sh 90; fi' >/dev/null 2>&1 &
# 3) after any progress: merge and rebuild (draft banner while data is incomplete)
cd .. && python3 _scripts/assemble_serp.py && python3 _scripts/build_v02.py v0.3-draft3 "$(date '+%Y-%m-%d %H:%M')"
# 4) when complete (all terms read to the end or all six sites found): build a version WITHOUT "draft"
python3 _scripts/build_v02.py v0.3 "$(date '+%Y-%m-%d %H:%M')"
```

The deep reader skips terms where all six sites are already found, skips pages already stored, and writes `deep.json` atomically after every page. Expected duration: pass 1 about 20 more minutes, pass 2 about 1.5 hours (about 1.4 minutes per term).

Version rule: a version without "draft" gets the final banner ("DATA VERIFIED", Google read to its limit). A draft gets the interim banner with counts. Use a new version number for every build; the build writes `.html`, `.md` and `-evidence.csv`, and the change log inside the page lists the versions.

## 5. How the data model works

**Tick (matcher v2, in `build_v02.py`):** the term's words stand together (any order, stopwords ignored) in the first H1 of an indexable inner page (status 200, no noindex, self-canonical). A location in the term must also be in the H1, title or URL. One-word terms need an H1 that is essentially that word. Archives, blog index pages, home, legal, contact, cart, profile and event pages never count; blog guides do count. Under 250 words = lighter tick. If a page has more than two H1s only the first is used.

**Position display (`posbadge`, `posv`):**
- bold `#n` = organic Google rank, counted over organic results only (ads, maps, AI boxes not counted), from `ranks` in the batch files;
- `>N` = not among the first N results read (N = pages read x 10, or the number of results Google actually returned when it ran out; 100 is the cap); a grey `sNN` beside it is Semrush's own position (Indonesia database) where it has one;
- Semrush-only `sN` or `–` only appears if a term has no Google read (none now).
- Source priority in `assemble_serp.py`: Chrome live reads (state.json + deep.json) first, then Firecrawl Bali-pinned page-1 files, then the earlier `glive-id.json`.
- Google settings for every read: `google.com`, `hl=en`, `gl=id`, `num=10`, `start=0,10,20,...`, desktop, real Chrome on a Bali IP. Only Google may be used for SERP data (house rule).

**Quick wins:** `quickwins.json` holds the order, titles, levers, effort and prose. Every number on a card (volume, KD range, terms with a competitor page, EF today, best term) is computed from the table at build time. Hand-written prose that states a ranking fact must be re-checked against the data after each new read (see section 7).

## 6. Hard rules (from AGENTS.md and Raoul's standing instructions)

- **Google reads are serial, one tab, one IP, paced (12-45 s).** Five parallel agents got this network flagged on 02.10.2026 (403, `/sorry/`, 429, even in a fresh Playwright profile). Never fan out Google reads. Fan-out is fine for crawling, Semrush and analysis, not for Google.
- Stop at the first block. Do not probe repeatedly while blocked (one single probe per ~50 minutes is the most that was ever needed).
- Never pay, book or subscribe; never submit a sitemap; never publish an artifact link on claude.ai.
- Provider order: Serper first (empty), Firecrawl second. State credits before any paid call. Never print secrets.
- "n.a." for missing Semrush data, never 0. Keep the May 2026 column.
- Version + change log on every document; md + html twin; never overwrite a mockup or an earlier version.
- Concise chat output, plain language. The audience of the page is Richard.
- Do not use the Semrush API (0 units used so far): Semrush is read in the logged-in Chrome (profile `/Users/raoulito/.codex/chrome-remote-agent/profile`).

## 7. Things to check after the deep reads finish

1. Re-read the hand-written lines in `quickwins.json` against the new positions. Corrected on 02.10.: wins 1, 4, 6, 7, 8, 9, 10. Still to confirm: win 2 ("Body Factory leads Google for the day-pass searches": true at page 3: BF is #1 on all 8 day-pass searches of the day-pass cluster), win 3 (sauna: EF not in the top 30), win 5 (no competitor has an ice-bath page of its own; those that rank use general recovery pages), win 10 (EF #2 for "gym bali", only page 3 for "best gyms in bali" #25 and "best gyms in canggu" #26).
2. **Known contradictions (do not hide them):** "gym bali": EF #2 live vs not in Semrush's top 100. Google results move with the searcher's location and the day; the page says so.
3. `build_v02.py` prints warnings (`check_zero_comp`, `check_no_comp_page`): read them.
4. Verify the render, not only the source: 50 matrix rows, 10 cards, 10 summary rows, 300 position badges (`class="pos g"` or `class="pos none"`), no stale phrases ("blocked this network", "still being read"). Open the HTML in a browser and look at the quick-wins section and the first screen. Playwright blocks `file:` URLs; use puppeteer over CDP on 9222 (`_scripts/shot_qw.mjs`, `shot_sel.mjs`).
5. Update the memory file and the change log, then tell Raoul in plain language what changed (written for Richard, who sees it first).

## 8. Lessons (so you do not repeat them)

- Chrome Remote dies roughly every 15 minutes during long runs (cause not confirmed; the Claude Code session has a `chrome-reaper` hook that kills automation Chrome at session start, which may not exist in Codex). The supervisors restart Chrome and the reader; `serp_serial.mjs` and `serp_deep.mjs` retry page errors ("Attempted to use detached Frame", "Connection closed") with a new tab.
- A Google 403 page is not "0 results". Block detection looks for 403 / `/sorry/` / "unusual traffic". An empty result page without those marks is treated as the end of the results (after one retry).
- Firecrawl SERP fallback (used only during the first block): `firecrawl scrape "<google url>&uule=w+CAIQICIOQmFsaSxJbmRvbmVzaWE" -f rawHtml --country ID --max-age 0`: about 10-15 % success, failures free, only 5-8 organic rows per page, results differ by location without the `uule` pin. Not needed now that Chrome reads work.
- Local-pack names are not captured (only a yes/no flag), so the table cannot say whether EF is in the map box. The GBP quick win says so.
- 13 terms have no Semrush volume ("n.a."). Do not estimate them.

## 9. What "done" looks like

All 50 terms read until all six sites appeared, Google ran out of results, or 100 results were read; every cell shows `#n` or `>N` (with the Semrush rank in grey where it exists); quick-win prose matches the data; final `v0.3` built without "draft"; checks in section 7 passed; Raoul told in 5 lines what EF's positions are and what stays `>100`.

## Change log

| Version | Date | What changed | Why |
|---|---|---|---|
| 1.0 | 02.10.2026 | First handoff | Raoul asked for a handoff for Codex while the Google IP block was active |
