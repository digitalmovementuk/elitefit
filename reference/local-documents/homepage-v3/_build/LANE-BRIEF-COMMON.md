> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Common brief for every lane

Version: v3.0 — 2026-10-02 · owner: orchestrator
Changelog: 2026-10-02 created.

Read first, in this order: `_build/BRIEF-RAOUL.md` (Raoul's full brief, source of truth), `_build/CONTRACT.md` (structure, ownership, tokens, copy system, budgets, logging, hard rules). Your lane prompt names which parts apply. Where the prompt and the brief differ, the prompt is the newer decision.

P = `/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30/homepage-v3` · parent dir = `/Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30` (call it R). Always use absolute paths; the shell's working directory is not stable.

## Tools on this machine
- Live page: http://127.0.0.1:8201/ (v3, auto-reload). Direction A (v2.1): http://127.0.0.1:8200/. Both already running; do not start or stop servers.
- Playwright 1.63 (node): `S=/private/tmp/claude-501/-Users-raoulito-digital-movement-uk/f9b71070-871e-49ce-8384-d25bbab5ed51/scratchpad`; package at `$S/journey-a/node_modules/playwright` (also `playwright-core`). In a script: `createRequire` / `require('$S/journey-a/node_modules/playwright')`. Browsers are in `~/Library/Caches/ms-playwright` (webkit, chromium). Work files go into your own folder under `/private/tmp/claude-501/-Users-raoulito-digital-movement-uk/fb14a269-b301-42cd-85f5-cd06e691d78d/scratchpad/<lane>/` (your scratch), deliverables into P.
- ffmpeg (x264, local build tool only): `/Users/raoulito/Library/Python/3.9/lib/python/site-packages/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1` (no ffprobe: use `ffmpeg -i`). Playwright's own ffmpeg (`~/Library/Caches/ms-playwright/ffmpeg-1011/ffmpeg-mac`) is VP8 only. Python 3.9 + numpy, OpenCV may exist in `$S/venv`. No ImageMagick.
- Browser lock: EVERY browser run, recording or ffmpeg-heavy job goes through `P/_tools/with-browser-lock.sh <command...>` (two slots machine-wide, waits for load < 6). Keep one locked job to 3 minutes or less, at most one queued job per lane, never hold a slot while idle. Bash calls time out at 10 minutes; use run_in_background for longer work.
- Firecrawl CLI (`firecrawl`, v1.23.3; MCP also configured): shared balance is small (78 credits of the cycle at 2026-10-02 10:10). Spend only what your lane prompt allows, check `firecrawl --status` before and after, never print or store the key, at most 2 parallel Firecrawl jobs machine-wide (leave the second slot to the other Firecrawl lane), no Instagram login or workaround. Serper is out of credits (do not use). Plain `curl` is fine for downloading the club's own public media files and WordPress REST JSON once Firecrawl has identified the URL.
- Doc twin: `node P/_tools/md2html.mjs <file.md>`. Log: `P/_tools/log.sh <lane> <file> "<what>"`.

## Rules in one breath
Nothing is published, pushed, sent, bought or booked. No accounts, no forms, no contact. Edit only your own files (CONTRACT §2). `homepage-v2.0/` is read-only; nothing from it is copied or imported into the site (v2.x docs MOTION-AND-DESIGN.md and the `_build/v2.1` reports are a behaviour spec you may read). Nothing of The Performance Lab enters the site. No invented fact, price, number, name or quote. English, plain, warm copy for the visitor. Secrets stay out of files and chat. Raoul's name in documents is "Raoul Müller".

## Done means
Your deliverable is visible and working in the live tab at 390 px first and at 1440 px, no console errors, no horizontal overflow, nothing hard-coded that should be a token, `_tools/log.sh` lines written, ready marker written, lane report written, final message <= 10 lines. Check your work with a Playwright screenshot (WebKit 390x844 first, then Chromium 1440x900) and LOOK at it (open the PNG with the Read tool) before you say done. Where something is unverified, say so in your report in one line.
