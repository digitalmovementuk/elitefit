> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Handoff for Codex: Elite Fit Bali homepage v3 (Direction B)

Version: v3.0 — 2026-10-02 · written by Claude (Michael, orchestrator) for Codex · nothing here is published, pushed or sent.
Change log: v3.0 created at the end of the first full build session (Phase 1 and Phase 2 built, copy reviewed twice, QA freeze not yet run).

Project root: `/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30/homepage-v3/` (call it P). Parent R = `.../Elite Fit Bali 26-09-30/`. Direction A = the untouched v2.1 in `R/homepage-v2.0/`. Follow the repo `AGENTS.md` (booking and payment approval, no sitemap submission, md + html pairs, version stamp and change log on every document, English page copy rules, model preference for design and copy).

## 1. What this is
A sales prototype of the Elite Fit Bali homepage in the visual language of theperformancelab.ca (measured, not affiliated) with the club's own facts, voice, logo, photos and footage; optimised to sell day passes and memberships. Shown to the client next to v2.1 as two design directions. Mobile first. Raoul Müller reviews in a live local tab; his words gate the next steps ("go" = Phase 2, already given and built; "freeze" = full QA, comparison doc, final report, not given yet).

Built (all in the live page): hero + minimal header (Lab-style cropped headline "Better / Together" over blur-treated club footage, live WITA readouts, review line), Classes (day tabs, live now/next with countdown, round instructor portraits, weekend note), the three pillars Elite Nutrition / Elite Training / Elite Rest (each with a real club clip; Rest has the four-room temperature readout and a pinned phone strip), Coaches, Pricing (Perform / Elite / Recharge by length, Duo, offers, trust stack, odometer, pinned selector), Reviews, Visit, footer, sticky buy bar (phones), WhatsApp button, polished menu sheet (eight links, social icons), five-step checkout journey (payment is a concept), motion layer (own engine, native scroll).

## 2. Run it
- Live dev server (already running on 127.0.0.1:8201, plain Node, no dependencies): `cd P && node _tools/dev-live.mjs --root "$PWD" --port 8201 --open`. It runs `node build.mjs` on every save of `partials/`, `assets/`, `copy/`, swaps CSS in place, shows a red banner on build errors. Direction A (v2.1) runs on :8200. Use `?nolive` in the URL for measurements (the live-reload client disturbs them) and `?nomotion` to see the page without the motion layer.
- Build: `node build.mjs` writes the generated `index.html` from `index.template.html` + `partials/*.html` (never edit `index.html`). Partial name = placement: `h-*` head, `00-09` header region, `10-49` main, `50-99` after main. Copy is injected by key: any element with `data-copy="key"` takes `copy/copy.json[key]` (text only); `data-copy-attr="aria-label:key"`; JS uses `ctx.t('key', {n})`.
- No framework, no bundler. ES modules loaded by `assets/js/main.js` (hero first, everything else after `load` in idle time).

## 3. Map of the project
- Contract and brief: `_build/BRIEF-RAOUL.md` (Raoul's brief verbatim + his three amendments), `_build/CONTRACT.md` (structure, ownership, tokens, events `ef:menu` / `ef:checkout`, copy system, budgets), `_build/PHASE2-BRIEF.md`, `_build/LANE-BRIEF-COMMON.md`, `_build/ORCHESTRATOR-HANDOFF.md` (the detailed running log of the session), `_build/LANES-STATE.md`, `_build/LIVE-LOG.md` (one line per change), `DECISIONS.md` (every decision, one line), `INPUTS.md` (every raw input with origin).
- Sources of truth for content: `FACTS.md` (168 sourced fact rows, the only content the copy may use), `VOICE-GUIDE-ELITEFIT.md`, `copy/copy.json` + `copy/copy-facts.json` (392 strings and the fact IDs behind them), `COPY-LEDGER.md` (every visible string and data line reconciled), data in `assets/data/` (`schedule.club.json`, `passes.json`, `site.json`, `hours.json`, `coaches.json`, `coaches-section.json`, `rest.json`, `menu.json`, `menu.demo.json`, `offers.json`, `reviews.json`, `reviews.verified.json`, `checkout.json`, `menu-nav.json`).
- Design: `DESIGN-SYSTEM-PERFLAB.md` (+ `component-sheet.html` served at /component-sheet.html), tokens in `assets/css/tokens.css` (names are the contract), fonts `assets/fonts/` (Hanken Grotesk + Fragment Mono, SIL OFL, `LICENSES.md`), motion `MOTION-V3.md` + `_build/motion-parity.md`.
- Research (internal evidence, never part of the site): `research/lab/` (the Lab measured: hero in motion, tokens, layout, copy form; `HERO-STUDY.md`), `research/hero-comparison/` (Elite Fit vs Lab hero filmstrips for the design verdict), `research/motion/` (filmstrips and clips).
- Raw inputs: `_inputs/` (APFS clones of the club's own masters and data; 349 MB, gitignore-worthy), originals untouched.
- Tools: `_tools/measure.mjs` (+ `MEASURE.md`: first-view transfer, CLS, LCP, fps at 4x CPU, interaction response, overflow; `--compare _build/baseline-v2.1.json _build/measure-v3.json`), `check-copy.mjs`, `check-numbers.mjs`, `check-pricing-reserve.mjs`, `build-copy-ledger.mjs`, `md2html.mjs` (md to self-contained html twin), `log.sh`, `with-browser-lock.sh` (two browser slots machine-wide; run every browser or ffmpeg-heavy job through it; it waits for load < 6).
- Machine paths: Playwright 1.63 package at `/private/tmp/claude-501/-Users-raoulito-digital-movement-uk/f9b71070-871e-49ce-8384-d25bbab5ed51/scratchpad/journey-a/node_modules/playwright` (browsers in `~/Library/Caches/ms-playwright`); ffmpeg (x264) at `/Users/raoulito/Library/Python/3.9/lib/python/site-packages/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1`. These scratchpad paths may disappear: reinstall Playwright locally if so.

## 4. Verified state (2026-10-02, measured by the lanes, not re-run by Codex yet)
- First phone viewport (WebKit): hero 60 svh; the complete live now/next class card incl. its round instructor portrait sits fully above the fold at 390x844 (122 px spare), 390x664 (50), 375x667 (53), 360x740 (84), 360x640 (44); not at 320x568. The WhatsApp button hides at scroll top on the short phones so it never covers the card.
- Copy gates: `check-copy` PASS 392/392; `check-numbers` PASS (2,102 tokens, 652 backed by data/FACTS, 10 clock-derived, 0 unbacked; 20/20 quotes character-for-character); ledger 487/487 visible lines reconciled. Page title/description carry no "prototype" wording (robots noindex stays).
- Performance (Chromium 4x CPU, v3 vs v2.1 medians): fps 59.2-59.8 vs 59.5-59.6, main-thread per frame 1.8 vs 2.31 ms phone, interactions equal or faster, CLS 0, first view 410-451 KB (limit 900), page JS 74.8 KB gz (Phase 2 limit 80), anchor jump 26.7 vs 27.8 ms, menu open ~30 vs 28.9 ms.
- Overflow: page width equals the screen from 320 to 1440 px in WebKit and Chromium, with and without `?nomotion`.

## 5. Known issues and open work (do these in order; none needs a new decision from Raoul)
1. fps parity: pillars on phone (58.8 vs 59.8) and Classes on desktop (58.9 vs 60) are below v2.1 in every run; both hit 60 without the motion layer (`?nomotion`). The motion lane was asked to fix it (stagger moment starts, release `will-change`, avoid recalc spikes); check `MOTION-V3.md` for a refresh, re-measure with `_tools/measure.mjs` at load < 6, three runs.
2. CSS budget: page CSS is 60.1 KB gzip as sent (about 39.6 KB without comments). Add a dist step at freeze (`_tools/dist.mjs`: copy the served tree without `_inputs`, `_build`, `research`, `_qa`; strip CSS comments, collapse whitespace; no new dependency) and measure budgets on dist. JS is 74.8 of 80 KB gzip.
3. Classes day switch settles in about 4 s in the harness (also with `?nomotion`): inspect `assets/js/classes.js` / `classes.css` for a long transition or a stuck animation.
4. `reviews.json` still carries quotes cut with "…" (C K, Marianne); the hero and Reviews read `reviews.verified.json` instead. Leave `reviews.json` for rating, count and link.
5. `check-pricing-reserve.mjs` must be re-run after any copy or data change (the reserved heights belong to the current copy).
6. Never tested: a real iPhone (scroll lock, safe-area insets, keyboard), WebKit frame timing (Playwright cannot throttle it), VoiceOver.

## 6. Freeze checklist (only when Raoul says "freeze")
Full QA: WebKit 375 and 390, Chromium 1440, CLS 0, overflow from 320, AA contrast, 55+ fps at 4x throttle, journey taps against v2.1, provenance check (nothing of The Performance Lab: name, logo, photos, video, icons, code, font files, sentences; grep the built page and assets), number check against the data files (`check-numbers.mjs`), `check-copy.mjs`. Then the design verdict on `research/hero-comparison/` stills and `research/motion/` recordings, then `DESIGN-DIRECTIONS.md` + `.html` (client-facing English, no internal notes, Direction A v2.1 and Direction B v3 side by side on the same phone and desktop screens: palette, type, buttons, imagery, voice and motion character, the sales story (classes, pillars, pricing); includes "B is modelled on the visual language of theperformancelab.ca, not affiliated"), then a final report of 25 lines or fewer with one line on what is real (menu, prices, offers, reviews, footage) versus unverified.

## 7. What is real and what is not
- Real: timetable (36 classes a week), prices and tiers (Elite day-pass Duo 225.000 each is published for the Elite day pass only; passes.json differs from the club in places: see FACTS), verified hours (Perform 06:00-22:00, Recharge from 06:30, daily), address (Jalan Sempol No. 26, Pererenan; ignore the stale /memberships/ address), coaches Rey, Ain, Icha, Tinos (Putu teaches no class and is not shown), offers (Better Together buy-1-get-1 day pass and the partner-discount directory), five verified Google quotes, rating 4.7, club photos and footage (masters cut into short silent loops).
- Not real or unverified: no published cafe menu and no "create your own bowl" steps anywhere (the flow is built and shows only with `?demo=bowl`, placeholder data, never default); the cafe specials' prices (board reads 250 and 95 NET, currency unknown, no price shown); the 488 review count was not re-read on Google on 2026-10-02; the checkout payment step is a drawn concept (no inputs, no network, nothing stored, nothing sent: the confirmation holds a wa.me link the visitor taps); temperature unit not printed by the club (page shows °C, switch in `rest.json`); "a place to call home" was not found in any club source and is not used.

## 8. Questions only Raoul can answer (ask once, plainly)
1. WhatsApp number: the page uses +62 851 9552 0220 (sales pages, as v2.1); the main site, floating button and Google use +62 857 2022 1101; stale +62 877 7671 7889 on /memberships/. `site.json` status "TO CONFIRM".
2. A photo of the printed cafe menu at the counter, and what "250 NET" on the TV board means (currency).
3. Fonts: keep the open lookalikes, or approve buying the Lab's (KH Teka roughly EUR 304-1,896 web licence by headcount band; Aeonik Mono from about GBP 50). Nothing bought; buying needs his explicit approval.
4. Hero headline: "Better / Together" (club's own campaign name, current) or the writer's "Train / Together".
5. Tinos: the club's grid files the portrait TINOS-scaled.webp under "Martijn Taken"; the page keeps the name "Tinos" with that portrait: confirm with the club.
6. Footer: the club's own footers link a privacy page, but FACTS lists no URL; only the terms page is linked. Legal wording is Raoul's call.
7. Checkout: no "I agree" box and no end date for passes (the club's T&C day counts contradict its labels); the club's real payment set-up is unknown.

## 9. Rules that bind Codex here (from AGENTS.md and the session)
- Never book, pay, subscribe or buy; never publish, push, send mail or messages; never submit a sitemap; no contact with the club or with theperformancelab.ca; "push live" means the real production host, not a repository push (there is no production for this prototype).
- Nothing of The Performance Lab enters the site; nothing from `homepage-v2.0/` is copied into v3 (v2.x docs are a behaviour spec only); `homepage-v2.0/` stays untouched.
- No invented facts, prices, names, numbers, quotes or seat counts; gaps are listed, not filled. Voice: welcoming, personal, calm; no hype, status or competition words; "Elite" only inside the names Elite Nutrition / Elite Training / Elite Rest and the Elite tier.
- Design and copy work: AGENTS.md prefers GPT-6 Astra with Ultra reasoning for all design and copy tasks, including reviews. Page copy is English; the German copy rules do not apply here. The house copy process: a writer sees only the voice guide, FACTS and the slot list; all checks run afterwards as a separate pass.
- Firecrawl: only 6 credits were left on the shared balance at 2026-10-02 (it was 78 in the morning; other sessions spent the rest). Do not spend any without Raoul's go. Serper is empty. The club's WordPress REST JSON is public and free with curl once a URL is known.
- Document rule: every new document gets `Version: v3.0 — <date>`, a change log, and an html twin (`node _tools/md2html.mjs file.md`). One line per change in `_build/LIVE-LOG.md` (`_tools/log.sh <lane> <file> "<what>"`), one line per decision in `DECISIONS.md`. Raoul's own edits are locked: never overwrite what he changed.
- The Claude lane/agent system (Agent and SendMessage tools, ready markers in `_build/ready/`) was specific to the Claude session; Codex works directly in the files. The ready markers and `_build/reports/*.md` are the record of what each lane delivered and measured; read the lane report before changing a lane's files (ownership table in `CONTRACT.md` §2 shows which files belong together).

## 10. First hour for Codex
1. Open http://127.0.0.1:8201/ at phone size and desktop; read `_build/ORCHESTRATOR-HANDOFF.md` (tail) and `DECISIONS.md` (tail).
2. Run the gates: `node build.mjs && node _tools/check-copy.mjs`, `node _tools/check-numbers.mjs` (needs the server), `node _tools/check-pricing-reserve.mjs`.
3. Work through section 5 (fps parity, dist step, Classes settle), re-measuring with `_tools/measure.mjs`; log each change.
4. Show Raoul the live tab and ask the section 8 questions in one message; wait for "freeze" before section 6.

## Change log
- v3.0 — 2026-10-02: created.
