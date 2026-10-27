> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Handoff for Codex: Elite Fit Bali homepage v2.1

Version: v1.0 — 2026-10-02 · written by the Claude session "EF v2" (Michael) at Raoul's request · audience: Codex, continuing this work.

## 1. Goal in one paragraph

Raoul (Digital Movement) is building a state-of-the-art, premium, motion-rich, mobile-first homepage for **Elite Fit Bali (EF)**, a gym and recovery club in Pererenan, Bali (raw concrete, oak and teak with amber light, sand-toned spa, black steel, tropical green, teal pool). The page sells day passes and memberships through a connected shop, shows today's classes fast, and must stand out from the "mass" of dark full-bleed video gym heroes. It is a sales prospect: the page is shown back to the club inside a proposal. Homepage only. Mobile first. The club's voice (Raoul is a member): personal, a place to be yourself, a home for expats in Bali, not performance theatre.

## 2. State today (2026-10-02)

- **v2.1 is built and QA'd.** Source: `homepage-v2.0/` (the folder name stays; v2.0 is archived untouched in `homepage-v2.0/_versions/v2.0/`). The built page is `homepage-v2.0/index.html` (v2.1).
- Latest review snapshot: `homepage-v2.0/_preview/v2.1-rc2/index.html` (open as a file in Chrome). Earlier snapshots `v2.1-wip-1` to `wip-8`, `rc1` are kept, never overwrite.
- Final QA: `_qa/v2.1/final/QA-REPORT.md` (+ html): 56 checks, 42 PASS, 10 FAIL, 4 UNVERIFIED (before the three fixes below). Visual verdict (Fable 5.1): `_qa/v2.1/final-verdict/VERDICT.md`: "yes, with fixes".
- Fixes applied after QA: WhatsApp button fully hidden while the phone menu is open; header fully opaque; anchor glide capped at 160 ms phone / 200 ms desktop; review quote has `xs/short/medium` verbatim openings (no mid-word cut); sticky buy bar tucks away while any in-page Buy button is on screen.
- **Nothing is published.** The public preview repo `digitalmovementuk/offer-bb0e777b` (GitHub Pages) still holds the OLD v2.0 snapshot. Updating it needs Raoul's explicit "Go".
- A separate Claude session "EF v3" builds **Direction B (v3)** in `homepage-v3/` (own project, look and feel of theperformancelab.ca, EF facts and voice). Do not touch `homepage-v3/`. v2.1 is "Direction A" for a side-by-side client presentation.

## 3. What v2.1 contains

A floating WhatsApp button (always visible bottom-right on phones, lifts above the buy bar, two-ring pulse). Google review line under the hero buttons (rating 4.7, **488 reviews**: the old "84" was the club's Trustindex import; five 5-star quotes, `assets/data/reviews.json`). Real club footage: seven silent looping clips (3.4 MB) cut from the club's own public master files; the jacuzzi room and trainer portraits stay stills. Phone menu sheet with EF-style social icons (Instagram, Facebook, Google Maps: only platforms the club itself links). Packages: all three tiers in one phone viewport, length selector pinned while the section is on screen. Recharge: pinned temperature readout while scrolling ice bath 4-6, jacuzzi 38-40, steam 38-40, sauna 80-100. Real class timetable (36 classes a week from the club's /class-schedule/ page, no invented seat counts), round coach avatars, a next-class card with countdown fully inside the first phone view, per-class countdowns. A large motion layer: 65 moments kept, 24 cut, each with a UX job (`MOTION-UX-AUDIT.md`).

## 4. How to run and build

- Stack: plain HTML partials + CSS + JS, no framework. `node build.mjs` (Node 18+, no dependencies) stitches `index.template.html` + `partials/*.html` into `index.html` and copies `assets/css` and `assets/js` to `assets/css-dist` and `assets/js-dist`. Never edit `index.html` or the `*-dist` folders by hand.
- `node build.mjs --out <dir>` builds a private copy (symlinks img, fonts, video, data); `--wp` writes WordPress template parts (see `WP-MAPPING.md`).
- The build **inlines** `assets/data/passes.json` and `schedule.club.json` into the page (`#ef-inline-data`), because Chrome blocks `fetch` from `file://`. `reviews.json` is inlined in `partials/reviewline.html` and must stay byte-identical to the file.
- Live dev server (rebuilds on every save, swaps CSS in place, toast with changed files): `node homepage-v2.0/_build/v2.1/dev-live.mjs --root <path to homepage-v2.0> --port 8200 --open`. It was started in the Claude session and may have stopped: restart it.
- Browser tests: Playwright (WebKit iPhone 390x844 and 375x812, Chromium 1440x900, CPU throttle 4x via CDP). The Claude session used a scratchpad install (`journey-c/node_modules/playwright`) that may no longer exist: run `npm i playwright` in a scratch folder. Browsers are in `~/Library/Caches/ms-playwright`.
- Browser lock: `_build/v2.1/with-browser-lock.sh <command>` allows two browsers machine-wide; its lock path is hard-coded to the old session scratchpad: change `B=` at the top if that folder is gone. Run browser jobs one at a time; the machine has 16 GB and gets overloaded by parallel browsers.
- Key docs in `homepage-v2.0/`: `MOTION-UX-AUDIT.md`, `MOTION-AND-DESIGN.md`, `API-CONTRACT.md`, `WP-MAPPING.md`, `CHANGELOG.md`, `MEDIA-SOURCES.md`, `INSTAGRAM-REQUESTS.md`, `DEVIATIONS.md`, and `_build/v2.1/` (`CHANGE-REQUEST-v2.1.md` is Raoul's brief verbatim; `LANES.md`; lane reports and audits; `media/` with SOURCING, ENCODING, manifest.json and the downloaded originals, 363 MB, never ship them).

## 5. Rules you must keep (from Raoul and AGENTS.md)

- Never book or pay without Raoul's explicit approval. Never publish, push, send or launch without his explicit "Go". Never submit a sitemap anywhere. GitHub, never Vercel. "Push live" means the real production host, not just a repo push.
- No contact with the club or the owner; no Instagram login or account use; nothing sent in Raoul's name. No secrets in chat or files.
- Crawling provider order: Serper (out of credits since 17.09) then Firecrawl CLI (key is configured, never print it; shared balance about 78 credits; announce expected credits before use).
- Every document: version stamp and changelog; deliverable documents as `.md` plus a self-contained `.html` twin. Mockups and renders go in new versioned folders and are never overwritten.
- Copy for the visitor in plain English; no internal wording on the page. Hero about two thirds of the first viewport; phone hero text centred. Measure on the render, never claim.
- The WhatsApp numbers on the page are the CLUB's, not Raoul's.

## 6. Open decisions for Raoul (ask him, do not guess)

1. **WhatsApp number**: the page uses +62 851 9552 0220; the club's live pages link +62 857 2022 1101. Which one is current?
2. **Reviews**: Marianne's and Tom J.'s quotes are not re-verified against Google (three are verified verbatim in the club's live widget: Åsmund Tveitevoll, asyraf140796, C K). Keep or drop?
3. **Public preview repo**: update `digitalmovementuk/offer-bb0e777b` with v2.1, or take it down (`gh repo delete digitalmovementuk/offer-bb0e777b`)? The older public repo `offer-b2f071f2` (proposal v1.1 and v1.3 preview) is untouched and still public.
4. Which "The Well" he meant earlier (unresolved research note, low priority).

## 7. Known open items (not blocking the preview)

From the QA report and the visual verdict, not yet changed:
- Reduced motion makes the hero 36 px taller (the "Next review" control needs its own row) and the Recharge sticky layout stacks at 1440 px: recorded as deliberate; revisit if Raoul wants strict parity.
- Hero is 73.4% of the viewport at 760x900 (limit 70%): trim in `assets/css/hero.css` at `min-width: 760px`.
- The always-visible WhatsApp button covers content briefly (for example part of "Choose Recharge" on the pricing anchor): consider fading it while the pass tiers are on screen (`bb.shopIn` signal in `shop.js`).
- First view makes 36-38 requests (v2.0: 26); optional: set clip posters only when near view (saves about 190 KB).
- `file://` logs 4 font-preload errors (Chrome); WebKit from file:// misses the brand fonts. Live hosting is unaffected. The host must serve gzip or brotli (otherwise LCP about 220 ms worse than v2.0).
- Polish from the verdict: checkout concept "CONCEPT CONTROLS" box and the empty Done screen, a 1,700 px footer column, the Instagram icon reads as an octagon.
- Not verifiable here: real iPhone frame times and Low Power Mode autoplay; guest releases for the people visible in the classes and recharge clips (needed before launch together with the club's original files); the 488 count against live Google (lane evidence: Google panel 2026-09-30, live Maps page, embed data).
- Brand handbook (visual and brand identity: fonts, measured HEX per zone) is NOT written yet. Evidence is ready in `../brand/evidence-v1.0/` (colour per zone, typography, images). Measured palette (deep / base / mid / light / accent / text): workout #060708 #1D2123 #413C3E #81796C #B3483B #EEEEEC; cafe #423C38 #804A1C #BB7A46 #C5C0B2 #9FB84D; spa #643C1C #C6B89E #A38559 #D6CAB4 #FECA69; logo taupe #A48F82; green #22380E #496A40 #708A4E #C9E18A; pool #3F6068 #609994 #528D84 #2F848F. Fonts: Syne (headings, open) confirmed; the club's other fonts are demo/unlicensed; the page uses Syne and Hanken Grotesk, self-hosted.

## 8. Research and recommendations already done (read before redoing anything)

`../research/` holds: a 29-site gym benchmark, 59 hero captures, mobile journeys (finding: competitors force an account before payment; guest checkout is the advantage), and `stack-shop-v1.0` (recommended stack: GymMaster as system of record, Xendit hosted checkout for Indonesia, a thin Cloudflare Workers edge layer, WordPress with a lean hand-built theme, GoHighLevel as CRM mirror; GymMaster not yet confirmed as live at the club; the payment account must be in the club's name). The new proposal is written by another session in `../proposal-v2/` (do not write there); the old `../proposal/` is untouched.

## 9. Suggested first steps for Codex

1. Read `_build/v2.1/CHANGE-REQUEST-v2.1.md`, `CHANGELOG.md` (v2.1 section) and `_qa/v2.1/final/QA-REPORT.md`.
2. Open `_preview/v2.1-rc2/index.html` in Chrome at phone width (390 px) and check it yourself.
3. Ask Raoul the three decisions in section 6 in one message.
4. Apply the open items he picks (section 7), one change at a time through the sources and `node build.mjs`, with a new snapshot folder per round.
5. Do not start `homepage-v3/` or touch the public repos without his go.

## Change log

- v1.0 — 2026-10-02 — first version.
