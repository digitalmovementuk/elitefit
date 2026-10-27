> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Hero benchmark: capture spec

Version: v1.0 — 2026-10-01 · shared by the four hero agents (H1 clubs, H2 recovery and brands, H3 hospitality, H4 award scouts)

## Why
Raoul (2026-10-01): research must prioritise design and wow-like, premium hero sections that stand out from the mass. The current Elite Fit homepage (v1.3) is "way too generic and template-like". Mobile visitors matter most; the homepage must also sell day passes and memberships and show the class schedule fast. We are collecting evidence of what the best heroes do, in motion, and what everyone does (the mass we must avoid).

## What a hero is
Everything from the top of the page to the moment the next section begins, including the header. Capture it as a visitor sees it: first paint, the loading sequence, what moves, and what the first three screens of scrolling do.

## Capture method (Playwright, no Firecrawl)
Playwright 1.63 is installed; browsers are in ~/Library/Caches/ms-playwright (webkit-2365/2359, chromium-1246/1243; a bundled ffmpeg sits in ffmpeg-1011). Work in your own scratchpad folder under /private/tmp/claude-501/-Users-raoulito-digital-movement-uk/f9b71070-871e-49ce-8384-d25bbab5ed51/scratchpad/ .

Two profiles per site:
- MOBILE (primary): WebKit, iPhone 14-class (390x844, deviceScaleFactor 2, isMobile, hasTouch), locale en-US.
- DESKTOP: Chromium 1440x900, deviceScaleFactor 1.

For each profile:
1. Fresh context, no cookies. Navigate, wait for `load`, then record for 8 seconds without interaction. Use `recordVideo` (size = viewport) and extract a frame every 0.5 s with the bundled ffmpeg (or OpenCV from the venv python at scratchpad/venv/bin/python) into one filmstrip JPG. If video recording fails in a browser, use a burst of page.screenshot() calls every ~500 ms instead and say so.
2. Dismiss a cookie banner with the least-tracking option, then re-capture the clean hero if the banner covered it (keep both).
3. Scroll gently (mouse wheel or touch scroll in 3 steps of one viewport height, pausing 1.2 s each) and screenshot each state: scroll-0, scroll-1, scroll-2, scroll-3. Note what changes on scroll (pinned sections, parallax, video scrubbing, type transforms, header change) in plain words.
4. Tech evidence via page.evaluate, no guesses: presence of window.gsap / ScrollTrigger / Lenis / LocomotiveScroll / THREE / PIXI / lottie / Webflow / __NEXT_DATA__ / __NUXT__ / Shopify / Swiper / Splide; count of <video> elements and their currentSrc, duration, muted/autoplay/loop/playsinline, poster; count of <canvas> and whether a WebGL context exists; `scroll-timeline`/`animation-timeline` usage in stylesheets; CSS `position: sticky` heroes; `view-transition` usage. Record hero media weight (sum of transferSize for media in the first 8 s, best effort), and LCP from PerformanceObserver.
5. Everything reported as observed; "unknown" where not verified.

## Classify the hero (one archetype per site, plus free text)
Archetypes: A full-bleed looping video with centred headline + 2 buttons (the mass); B full-bleed photo with headline; C type-led (giant typography, little imagery); D split screen (copy / media); E scroll-story or pinned sequence; F WebGL / 3D / shader / generative; G cursor- or gyro-reactive; H product / UI led (schedule or pass inside the hero); I editorial collage / grid; J other (describe).
For each site also record: the headline and the exact primary CTA text; whether the hero shows price, a pass, or today's schedule; how the header behaves on mobile; what a phone visitor sees in the first 844 px (list elements top to bottom); the ONE thing that makes it memorable, or "nothing, template".
Also record a score 1 to 5 for "stands out from the mass" with a one-line reason. It is a provisional screen only; the design lead judges the filmstrips afterwards.

## Hard rules
Never create an account, enter personal data, submit a form, accept a newsletter, or buy anything. No Firecrawl in this job. Do not publish, commit, push or send anything. Never overwrite existing files; if your folder exists use v1.1.

## Output per agent
Folder: /Users/raoulito/digital-movement-uk/Sales/Prospects/Elite Fit Bali 26-09-30/research/hero-benchmark-<agent>-v1.0/
- <slug>/mobile-filmstrip.jpg, <slug>/desktop-filmstrip.jpg, <slug>/mobile-scroll-0..3.png, <slug>/desktop-scroll-0..3.png, optional <slug>/hero-mobile.webm (keep only if under 6 MB), <slug>/hero.json (all facts above).
- hero-report.md and hero-report.html (self-contained twin, light theme; mobile filmstrip FIRST in each card, desktop second; relative image paths); both stamped "Version: v1.0 — 2026-10-01" with a change log at the bottom.
- Closing synthesis (max 20 lines): archetype counts for your batch (how much of it is "the mass"), the 5 most distinctive heroes with why (specific, visual, mechanical), and techniques worth stealing for a Bali gym with a pool, sauna, café and concrete-and-timber interior, plus what to avoid.
- Final message to the parent: max 15 lines: sites captured, sites blocked and why, top 5 heroes, folder path.
