> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Hero benchmark H4: award scouts, hero report

Version: v1.0 — 2026-10-01

Batch: 16 award-level homepages (Awwwards 2025-26, FWA of the Day 2026). Captured on mobile first (WebKit, iPhone 14 class, 390x844, DPR 2), then desktop (Chromium 1440x900). Everything below is observed in the render; "unknown" where not verified. The 1-5 score is a provisional screen only; the design lead judges the filmstrips.

Frame labels in filmstrips are seconds from the start of navigation; LOAD marks the load event; the recording continues 8 s after it. Where a cookie banner or promo modal covered the hero, a second "clean" filmstrip was recorded after dismissal (least-tracking option), and both are kept. Limits: mobile scroll states are scripted (mobile WebKit has no wheel or swipe API): window.scrollTo in 30 steps, then synthetic wheel events where the page hijacks scrolling; desktop uses real wheel events. Desktop runs use Chromium with GPU rendering (ANGLE Metal). Banners that offered no reject option were left in place (Performance Lab, Son Daven, Radian, Sobha); Sobha mobile screenshots timed out, so its scroll states are frame grabs from a recording at 1x. Hero media weight is best effort (resource timing reports 0 for many cross-origin files).

## Summary table

| # | Site | Group | Archetype | Score | Memorable thing |
|---|---|---|---|---|---|
| 1 | [Phive Clubs](https://phive.pt/en) | fitness | C | 4 | A giant yellow type band cutting across fast member footage (pool, spin, boxing), plus a pill navigation docked where the thumb rests. |
| 2 | [Lando Norris](https://landonorris.com/) | sport | G | 5 | A lime-green preloader that resolves into a full-height portrait with a 3D object on the face and a tap-to-lock interaction. |
| 3 | [The Performance Lab](https://theperformancelab.ca/) | sport / recovery | A | 3 | Motion-blur sprint footage under a headline set at poster scale. |
| 4 | [White Desert](https://white-desert.com/) | hospitality | A | 4 | The word ANTARCTICA at a size that fills the bottom of the screen over cutting film, which then blurs into white cloud on scroll. |
| 5 | [Son Daven](https://sondaven.com/en) | hospitality | E | 4 | A woodcut treatment: the hotel photo and the Carpathian landscape dissolve into vertical-line artwork, introduced by a barcode-style sheep drawing in the preloader. |
| 6 | [Essor Fitness](https://coachsportifecublens.com/) | fitness | C | 2 | The wordmark itself, sliding up and enlarging from a black screen. |
| 7 | [Faith Ibiza](https://faithibiza.com/) | hospitality / lifestyle | E | 4 | The arch window that grows into a full-bleed film as you scroll. |
| 8 | [Radian](https://www.rideradian.com/) | sport (outdoor product) | E | 4 | The headlight turning on in a black screen and flooding to white before the bike appears. |
| 9 | [The Pop-Up Hotel](https://thepopuphotel.com/) | hospitality | A | 2 | Nothing beyond the quick event cuts; template video hero. |
| 10 | [Seasats](https://www.seasats.com/) | other (water) | E | 4 | Misty flat water with a slow scroll-scrubbed approach along the boat. |
| 11 | [ERA Residence](https://www.era-residence.com/) | other (architecture, material) | B | 4 | An arch opens in a dark aubergine loader and grows into the full-bleed pool photograph. |
| 12 | [Floema](https://floema.com/en) | other (material, craft) | I | 3 | A cloud of drifting product thumbnails around a single sentence. |
| 13 | [Sobha Privy Collection](https://sobha-privy-collection.com/) | other (type-led luxury) | A | 3 | Black glossy ribbons moving behind a restrained italic headline. |
| 14 | [Boc.Studio](https://boc.studio/) | other (type-led) | C | 4 | The orange band as a fixed ribbon over a different client film at every step. |
| 15 | [Agrumea Farm](https://www.agrumeafarm.it/en) | other (craft, food) | F | 4 | Jars that swing in as a 3D carousel while the circular text rotates on the dome. |
| 16 | [La Revoltosa](https://larevoltosa.es/) | other (water, fizz, drink) | C | 2 | Brand identity: one vermilion and one cream, a bold line illustration of a bather on a snake float. |

## Closing synthesis

- Mix of the 16 (hero archetype): A 4, B 1, C 4, E 4, F 1, G 1, I 1; D and H none. The mass (A, a video with a headline) is 4 of 16, 5 with B. The award heroes lean on one device (type band, mask, light, interaction) instead of a looping video. The most template-like are the Honorable-Mention sites: Pop-Up Hotel, Performance Lab, Essor Fitness.
- Five most distinctive:
  1. Lando Norris (G, 5): lime preloader, then a full-height portrait with a 3D object over the face and a TAP TO LOCK hint; one person, one colour, one interaction.
  2. Phive Clubs (C, 4): yellow condensed marquee band over cutting member footage (pool, spin, boxing), plus a yellow pill nav docked in the thumb zone; then sticker headline and tilted-photo collage.
  3. ERA Residence (B, 4; same device on Faith Ibiza): an arch opens in a dark loader and grows into the full-bleed pool photo; serif type and an arch-shaped section carry the luxury.
  4. Radian (E, 4): black screen, the headlight ignites and floods to white, the yellow bike appears; scroll then rotates a pinned 3D bike.
  5. Son Daven (E, 4): timber-and-glass hotel at golden hour; photo and landscape dissolve into vertical-line woodcut art, started by a barcode sheep in the loader.
- Steal for a Bali gym with pool, sauna, café, concrete and timber:
  - Arch or doorway-shaped window onto pool footage that opens to full bleed on the first scroll (ERA, Faith): the shape comes from the building, no stock-video look.
  - One oversize word or band in the thumb zone (Phive, Boc.Studio, White Desert's ANTARCTICA): a place or time word (SUNRISE 06:00) set in a heavy face.
  - Docked pill nav at the bottom with a permanent Day pass button (Phive); phone visitors reach it without stretching.
  - Light as the reveal (Radian): a dark first frame where a sauna glow or dawn light turns on, 2 s at most, instead of a spinner.
  - Water that scrolls (Seasats, Faith): slow pool footage scrubbed by the thumb, with a poster for fallback; timber grain as a treatment (Son Daven's line-art).
- Avoid:
  - Loaders over 3 s: Son Daven 13 s and ERA 13 s on mobile, Seasats 29.6 s load event on desktop, La Revoltosa up to 47 s with an empty red screen, Sobha 47 s with about 59 MB of video (12 videos).
  - Promo modal plus cookie bar over the hero, and a clipped headline at 390 px (Performance Lab); centred logo over a reel (Pop-Up Hotel).
  - No hero in the 16 shows a price, a pass or today's schedule (Phive shows opening hours only; Radian a configurator): the day-pass and timetable job is not solved by these award sites, so it must be designed on top of the device.

## 1. Phive Clubs

- URL: https://phive.pt/en
- Source: Awwwards Site of the Day, 2025-08-05, award page https://www.awwwards.com/sites/phive-clubs
- Group: fitness
- Archetype: C type-led. Oversized condensed yellow marquee band across a full-bleed lifting video; the hero is a video (A) but the type band and a thumb-zone pill nav carry the identity. Below the hero it runs as a pinned sticker and collage sequence.
- Headline: TRAIN EVERY DAY (sub-line: On your Phive Club; FROM 06:30AM TO 10PM)
- Primary CTA: SIGN UP (outlined pill)
- Hero shows price / pass / schedule: No price, pass or schedule. Only opening hours (FROM 06:30AM TO 10PM) and the four cities. Timetable and Classes sit in the menu.
- Mobile header: No top bar. A yellow pill nav is docked at the bottom, in the thumb zone: hamburger, PHIVE wordmark, sound toggle. It stays fixed through all four scroll states.
- Loader or intro: Full-screen yellow loader: about 2 s on mobile (1 to 3 s), about 4.5 s on desktop (1.5 to 6 s), then the video and marquee.
- First 844 px on a phone, top to bottom: yellow marquee band TRAIN EVERY DAY across the top, city names (Coimbra, Leiria, Lisbon and Porto) set in the band; full-bleed member footage that cuts every 1 to 2 s (gym floor, boxing, aqua class in a pool, spinning, elliptical, a child); small line FROM 06:30AM TO 10PM; TRAIN EVERY DAY / On your Phive Club; outlined pill SIGN UP; second marquee band at the foot with LISBON AND PORTO; docked yellow pill nav (menu, PHIVE, sound)
- Memorable: A giant yellow type band cutting across fast member footage (pool, spin, boxing), plus a pill navigation docked where the thumb rests.
- Stands out from the mass: 4/5, Hard yellow and black system and oversized type feel like a brand, not a template; the hero itself is still a video with a CTA, so not a 5.
- Scroll, mobile: Lenis smooth scroll (html.lenis, Nuxt). Screen 2: black pinned section with a yellow rounded-sticker headline ACTIVATE YOUR SENSES and a handwritten script overlay. Screen 3: tilted club photos scattered around a giant PHIVE wordmark with VIEW ALL CLUBS and SCHEDULE A VISIT pills. Screen 4: giant stretched FITNESS type. The bottom nav stays.
- Scroll, desktop: Same sequence: marquee over a pinned video, ACTIVATE SENSES sticker headline, then scattered club photos around the PHIVE wordmark; floating pill nav at the bottom.

**Mobile (primary)**

[mobile filmstrip](phive-clubs/mobile-filmstrip.jpg)
[mobile filmstrip, banner dismissed](phive-clubs/mobile-filmstrip-clean.jpg)
[mobile scroll 0](phive-clubs/mobile-scroll-0.png) [mobile scroll 1](phive-clubs/mobile-scroll-1.png) [mobile scroll 2](phive-clubs/mobile-scroll-2.png) [mobile scroll 3](phive-clubs/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](phive-clubs/desktop-filmstrip.jpg)
[desktop filmstrip, banner dismissed](phive-clubs/desktop-filmstrip-clean.jpg)
[desktop scroll 0](phive-clubs/desktop-scroll-0.png) [desktop scroll 1](phive-clubs/desktop-scroll-1.png) [desktop scroll 2](phive-clubs/desktop-scroll-2.png) [desktop scroll 3](phive-clubs/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: __NUXT__; DOM: html.lenis, #__nuxt; scripts: www.googletagmanager.comgtag/js, phive.pt_nuxt/BoiLVscQ.js, www.googletagmanager.com/gtm.js / globals: __NUXT__; DOM: html.lenis, #__nuxt; scripts: www.googletagmanager.comgtag/js, phive.pt_nuxt/BoiLVscQ.js, www.googletagmanager.com/gtm.js
- Video: 6 video element(s); first: …aloceanspaces.com/phive/2025-03-13T15-32-55.342Z-todos-dias-mobile.mp4 dur 10.5s muted=True autoplay=True loop=True playsinline=True poster=no / 6 video element(s); first: …aloceanspaces.com/phive/2025-03-13T15-32-55.342Z-todos-dias-mobile.mp4 dur 10.5s muted=True autoplay=True loop=True playsinline=True poster=no
- Canvas: 7 canvas; contexts requested: webgl, 2d; WebGL: yes / 8 canvas; contexts requested: webgpu, webgl2, 2d; WebGL: yes
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 6 (stylesheets 75, unreadable 0) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 6 (stylesheets 76, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 1.2 MB transfer (59 entries, 9 reported 0); response headers 27.1 MB (60 video/image responses) / resource timing 2.7 MB transfer (59 entries, 6 reported 0); response headers 32.1 MB (62 video/image responses)
- LCP: 2964 ms (IMG) / 720 ms (SPAN)
- Load event: 1.42 s / 2.01 s; cookie banner: {"banner": true, "clicked": "Deny"} / {"banner": true, "clicked": "Deny"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): none detected / none detected / none detected / none detected
- Capture notes: Cookiebot banner covered the hero from 3.5 s; Deny was clicked and the hero was re-recorded clean.

## 2. Lando Norris

- URL: https://landonorris.com/
- Source: Awwwards Site of the Day, 2025-11-17, award page https://www.awwwards.com/sites/lando-norris
- Group: sport
- Archetype: G cursor- or gyro-reactive. Portrait-led hero with a 3D object laid over the face and an on-screen TAP TO LOCK hint on mobile, so the hero is built around touch or pointer interaction. Reactivity was not tested with pointer movement; it is inferred from the hint, the WebGL/gesture tags on the award page and the overlay.
- Headline: LANDO NORRIS wordmark (MCLAREN F1 SINCE 2019)
- Primary CTA: STORE (lime pill, top left)
- Hero shows price / pass / schedule: No price, pass or schedule. A shop pill (STORE) only.
- Mobile header: Lime STORE pill left and a square menu button right, both fixed and recolouring with each chapter; wordmark centred below.
- Loader or intro: Lime full-screen preloader with an animated logo glyph. On desktop the portrait appears at about 8.5 s; on mobile the preloader was still showing at the end of the 8 s recording window (10 s after navigation) and the portrait was only visible in the later scroll-0 capture.
- First 844 px on a phone, top to bottom: STORE pill and menu square; LANDO NORRIS wordmark and logo glyph; MCLAREN F1 SINCE 2019; full-height portrait of the driver on white with a pattern jacket; TAP TO LOCK hint with a hand icon bottom right
- Memorable: A lime-green preloader that resolves into a full-height portrait with a 3D object on the face and a tap-to-lock interaction.
- Stands out from the mass: 5/5, The only hero in the batch that is a single person, a single colour and a single interaction; nothing about it is a template.
- Scroll, mobile: Lenis present. The background colour changes per chapter: dark olive MESSAGE FROM LANDO with a drawn lime signature over a greyscale portrait and marquee text; a large mixed serif and sans statement with lime keywords; staggered photo collage on grey-green. STORE and menu stay and invert colour.
- Scroll, desktop: Same chapters at wider scale: signature over portrait, statement type (REDEFINING LIMITS, FIGHTING FOR WINS) with lime blocks, photo collage.

**Mobile (primary)**

[mobile filmstrip](lando-norris/mobile-filmstrip.jpg)
[mobile scroll 0](lando-norris/mobile-scroll-0.png) [mobile scroll 1](lando-norris/mobile-scroll-1.png) [mobile scroll 2](lando-norris/mobile-scroll-2.png) [mobile scroll 3](lando-norris/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](lando-norris/desktop-filmstrip.jpg)
[desktop scroll 0](lando-norris/desktop-scroll-0.png) [desktop scroll 1](lando-norris/desktop-scroll-1.png) [desktop scroll 2](lando-norris/desktop-scroll-2.png) [desktop scroll 3](lando-norris/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: Lenis, Webflow; DOM: html.lenis, webflow-dom; scripts: www.googletagmanager.comgtag/js / globals: Lenis, Webflow; DOM: html.lenis, webflow-dom; scripts: www.googletagmanager.comgtag/js
- Video: 0 video elements / 0 video elements
- Canvas: 21 canvas; contexts requested: webgl2, webgl, 2d; WebGL: yes / 21 canvas; contexts requested: webgl2, 2d; WebGL: yes
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 4 (stylesheets 18, unreadable 0) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 4 (stylesheets 18, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 0.0 MB transfer (43 entries, 43 reported 0); response headers 4.6 MB (41 video/image responses) / resource timing 0.0 MB transfer (45 entries, 45 reported 0); response headers 3.6 MB (43 video/image responses)
- LCP: 534 ms (H2) / 552 ms (DIV)
- Load event: 2.12 s / 1.09 s; cookie banner: {"banner": false, "clicked": null} / {"banner": false, "clicked": null}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): relative top 0 / relative top 0 / relative top 0 / relative top 0
- Capture notes: No cookie banner appeared. Desktop screenshot of scroll 0 timed out once under SwiftShader in the first run and was recaptured with the GPU-backed browser.

## 3. The Performance Lab

- URL: https://theperformancelab.ca/
- Source: Awwwards Honorable Mention, 2026-08-01, award page https://www.awwwards.com/sites/the-performance-lab
- Group: sport / recovery
- Archetype: A full-bleed looping video, centred headline, 2 buttons (the mass). Full-bleed motion-blurred runner video with a very large left-aligned headline; a promo modal and a cookie bar then cover it.
- Headline: UNLOCK NEXT LEVEL PERFORMANCE
- Primary CTA: UNLOCK YOUR POTENTIAL (red button on mobile); BOOK A CONSULTATION in the header
- Hero shows price / pass / schedule: No price, pass or schedule. Consultation booking only.
- Mobile header: Thin top bar: logo mark left, SERVICES + and MENU right.
- Loader or intro: Hero text and video are visible at about 1.5 s; the promo modal arrives at about 3 s.
- First 844 px on a phone, top to bottom: top bar (logo mark, SERVICES +, MENU); full-bleed blurred running video; headline UNLOCK NEXT LEVEL PERFORMANCE, cropped at the left edge so the first letters are cut; short intro paragraph; red button UNLOCK YOUR POTENTIAL; promo modal Corporate Longevity Testing and cookie bar appear on top
- Memorable: Motion-blur sprint footage under a headline set at poster scale.
- Stands out from the mass: 3/5, Strong footage and scale, but a promo modal and a cookie bar cover the hero, the mobile headline is clipped, and the structure is the usual video plus headline.
- Scroll, mobile: After the promo modal is closed the hero scrolls away into white sections: Helping you move better, recover smarter, and perform at your best; a large grey THE SMART WAY TO YOUR GOALS; two photos; a Testing service card. Header stays (logo, SERVICES +, MENU) and turns dark on white.
- Scroll, desktop: Hero scrolls into a white section with partner logos (LA Galaxy and others), then a large grey outlined headline THE SMART WAY TO YOUR GOALS and service cards.

**Mobile (primary)**

[mobile filmstrip](the-performance-lab/mobile-filmstrip.jpg)
[mobile filmstrip, banner dismissed](the-performance-lab/mobile-filmstrip-clean.jpg)
[mobile scroll 0](the-performance-lab/mobile-scroll-0.png) [mobile scroll 1](the-performance-lab/mobile-scroll-1.png) [mobile scroll 2](the-performance-lab/mobile-scroll-2.png) [mobile scroll 3](the-performance-lab/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](the-performance-lab/desktop-filmstrip.jpg)
[desktop filmstrip, banner dismissed](the-performance-lab/desktop-filmstrip-clean.jpg)
[desktop scroll 0](the-performance-lab/desktop-scroll-0.png) [desktop scroll 1](the-performance-lab/desktop-scroll-1.png) [desktop scroll 2](the-performance-lab/desktop-scroll-2.png) [desktop scroll 3](the-performance-lab/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: Lenis; DOM: html.lenis / globals: Lenis; DOM: html.lenis
- Video: 0 video elements / 0 video elements
- Canvas: 0 canvas; contexts requested: none; WebGL: no / 0 canvas; contexts requested: none; WebGL: no
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 2 (stylesheets 1, unreadable 0) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 2 (stylesheets 1, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 1.2 MB transfer (32 entries, 18 reported 0); response headers 2.1 MB (32 video/image responses) / resource timing 1.3 MB transfer (30 entries, 1 reported 0); response headers 1.3 MB (30 video/image responses)
- LCP: 1776 ms (IMG) / 1628 ms (DIV)
- Load event: 2.32 s / 1.09 s; cookie banner: {"banner": true, "clicked": null, "note": "banner present; only accept/preferences available, not clicked"} / {"banner": true, "clicked": null, "note": "banner present; only accept/preferences available, not clicked"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): fixed top 0 / fixed top 0 / fixed top 0 / fixed top 0
- Capture notes: The cookie bar offers only LEARN MORE and ACCEPT, so it was not dismissed. The promo modal was closed with its close button.

## 4. White Desert

- URL: https://white-desert.com/
- Source: Awwwards Site of the Day, 2026-09-11, award page https://www.awwwards.com/sites/white-desert
- Group: hospitality
- Archetype: A full-bleed looping video, centred headline, 2 buttons (the mass). Full-bleed film (not a single loop): short vertical clips cut every few seconds, plus an oversize ANTARCTICA word that sits in the thumb zone. Not the mass: the cutting, the italic serif tagline and the dissolve to white lift it.
- Headline: ANTARCTICA (tagline: Luxury and adventure in the most remote place on Earth)
- Primary CTA: Enquire (orange pill, header); Watch Film (text link)
- Hero shows price / pass / schedule: No price, pass or schedule. Enquiry only.
- Mobile header: Floating rounded bar: Menu left, WHITE DESERT logo centre, orange Enquire button right. Stays fixed.
- Loader or intro: Grey skeleton with the word ANTARCTICA fading up at about 1.5 to 2 s, film from about 4 s.
- First 844 px on a phone, top to bottom: floating header bar (Menu, logo, Enquire); full-bleed film clip (ice cave and climbers, penguin, rock spire in rotation); italic serif tagline Luxury and adventure in the most remote place on Earth; Watch Film with a play arrow; giant condensed ANTARCTICA across the foot of the screen
- Memorable: The word ANTARCTICA at a size that fills the bottom of the screen over cutting film, which then blurs into white cloud on scroll.
- Stands out from the mass: 4/5, Film, type and a white-out transition make a clear mood (light and space); only the hero structure resembles a standard video hero.
- Scroll, mobile: Hero film clip changes with scroll; then the hero blurs into a white-blue cloud gradient where the word dissolves; then a white editorial section with large serif capitals and a season note; then a full-bleed mountain image.
- Scroll, desktop: ANTARCTICA blurs and dissolves into white cloud on the second step; third step white editorial text; fourth full-bleed peak photo with a docked orange Enquire tab.

**Mobile (primary)**

[mobile filmstrip](white-desert/mobile-filmstrip.jpg)
[mobile filmstrip, banner dismissed](white-desert/mobile-filmstrip-clean.jpg)
[mobile scroll 0](white-desert/mobile-scroll-0.png) [mobile scroll 1](white-desert/mobile-scroll-1.png) [mobile scroll 2](white-desert/mobile-scroll-2.png) [mobile scroll 3](white-desert/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](white-desert/desktop-filmstrip.jpg)
[desktop filmstrip, banner dismissed](white-desert/desktop-filmstrip-clean.jpg)
[desktop scroll 0](white-desert/desktop-scroll-0.png) [desktop scroll 1](white-desert/desktop-scroll-1.png) [desktop scroll 2](white-desert/desktop-scroll-2.png) [desktop scroll 3](white-desert/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: no library globals found; DOM: html.lenis; scripts: www.googletagmanager.comgtag/js, www.googletagmanager.com/gtm.js / no library globals found; DOM: html.lenis; scripts: www.googletagmanager.comgtag/js, www.googletagmanager.com/gtm.js
- Video: 1 video element(s); first: …flarestream.com/6cbe45de8a02fd4b5b862fdec4a2b1ad/downloads/default.mp4 dur 17.5s muted=True autoplay=True loop=True playsinline=True poster=no / 1 video element(s); first: …flarestream.com/6cbe45de8a02fd4b5b862fdec4a2b1ad/downloads/default.mp4 dur 17.5s muted=True autoplay=True loop=True playsinline=True poster=no
- Canvas: 0 canvas; contexts requested: 2d, webgl; WebGL: yes / 0 canvas; contexts requested: 2d, webgl; WebGL: yes
- CSS scroll features: animation-timeline 1, scroll-timeline 0, view-timeline 0, view-transition 2, sticky rules 6 (stylesheets 15, unreadable 0) / animation-timeline 1, scroll-timeline 0, view-timeline 0, view-transition 2, sticky rules 6 (stylesheets 15, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 0.0 MB transfer (10 entries, 10 reported 0); response headers 4.6 MB (15 video/image responses) / resource timing 0.1 MB transfer (8 entries, 7 reported 0); response headers 5.3 MB (14 video/image responses)
- LCP: 1187 ms (P) / 3664 ms (H1)
- Load event: 4.03 s / 5.67 s; cookie banner: {"banner": true, "clicked": "Reject"} / {"banner": true, "clicked": "Reject"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): fixed top 0 / fixed top -80 / fixed top -80 / fixed top -80
- Capture notes: Cookie banner (Accept or Reject) at the foot covered the word ANTARCTICA; Reject was clicked and the hero re-recorded clean.

## 5. Son Daven

- URL: https://sondaven.com/en
- Source: Awwwards Site of the Day, 2026-06-05, award page https://www.awwwards.com/sites/son-daven
- Group: hospitality
- Archetype: E scroll-story or pinned sequence. Long preloader, then a full-bleed render with the headline and return figures, then a scroll story that turns the photo into vertical-line woodcut art. Hero itself is B.
- Headline: SON DAVEN (INVESTMENT PROJECT; UP TO 10% expected annual return, UP TO 30% capitalisation potential; RESORT DESIGN HOTEL IN YAREMCHE)
- Primary CTA: INVEST IN SON DAVEN (circle button); CONSULTATION (desktop header pill)
- Hero shows price / pass / schedule: Shows investment return figures (up to 10% and 30%), not a price, pass or schedule.
- Mobile header: Top bar: hamburger left, SON DAVEN wordmark centre, UA language right; stays through the scroll states.
- Loader or intro: About 13 s of preloader on mobile (sheep drawing, percentage counter, SON DAVEN wordmark) before the image reveal; 7 s on desktop.
- First 844 px on a phone, top to bottom: hamburger, SON DAVEN wordmark, UA; INVESTMENT PROJECT label; SON DAVEN in a wide stencil face; two return figures side by side (UP TO 10%, UP TO 30%); golden-hour render of a timber and glass hotel on a slope; RESORT DESIGN HOTEL IN YAREMCHE; INVEST IN SON DAVEN circle button; cookie strip with OK and X at the foot
- Memorable: A woodcut treatment: the hotel photo and the Carpathian landscape dissolve into vertical-line artwork, introduced by a barcode-style sheep drawing in the preloader.
- Stands out from the mass: 4/5, A single craft idea carried through loader and scroll; timber architecture is on-brief. Costs a 13 s loader on mobile.
- Scroll, mobile: Hero holds, then a dark PROLOGUE section with a halftone-line sheep landscape and a quote whose lines reveal; then a tan section with SON DAVEN BY BLAGO and a concept text with a framed video.
- Scroll, desktop: The photo breaks into stepped vertical-line pixels on a tan field, then a line-art mountain landscape with sheep.

**Mobile (primary)**

[mobile filmstrip](son-daven/mobile-filmstrip.jpg)
[mobile scroll 0](son-daven/mobile-scroll-0.png) [mobile scroll 1](son-daven/mobile-scroll-1.png) [mobile scroll 2](son-daven/mobile-scroll-2.png) [mobile scroll 3](son-daven/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](son-daven/desktop-filmstrip.jpg)
[desktop scroll 0](son-daven/desktop-scroll-0.png) [desktop scroll 1](son-daven/desktop-scroll-1.png) [desktop scroll 2](son-daven/desktop-scroll-2.png) [desktop scroll 3](son-daven/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: gsap, ScrollTrigger, Lenis, Webflow, Swiper (gsap 3.13.0); DOM: html.lenis, webflow-dom; scripts: www.googletagmanager.comgtag/js, www.googletagmanager.com/gtm.js, googleads.g.doubleclick.net17483087890/, cdn.prod.website-files.comjs/webflow.a0aa6ca1.a7538fccd85e13c7.js, unpkg.com@barba/core / globals: gsap, ScrollTrigger, Lenis, Webflow, Swiper (gsap 3.13.0); DOM: html.lenis, webflow-dom; scripts: www.googletagmanager.comgtag/js, www.googletagmanager.com/gtm.js, googleads.g.doubleclick.net17483087890/, cdn.prod.website-files.comjs/webflow.a0aa6ca1.a7538fccd85e13c7.js, unpkg.com@barba/core
- Video: 3 video element(s); first: …https://assets.sondaven.com/preloader_sheep.mp4 dur 2.1s muted=True autoplay=True loop=True playsinline=True poster=yes / 3 video element(s); first: …https://assets.sondaven.com/preloader_sheep.mp4 dur 2.1s muted=True autoplay=True loop=True playsinline=True poster=yes
- Canvas: 16 canvas; contexts requested: webgl; WebGL: yes / 16 canvas; contexts requested: webgl, 2d; WebGL: yes
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 15 (stylesheets 13, unreadable 1) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 15 (stylesheets 13, unreadable 1)
- Hero media weight, first 8 s after load (best effort): resource timing 0.0 MB transfer (64 entries, 64 reported 0); response headers 5.0 MB (64 video/image responses) / resource timing 0.0 MB transfer (189 entries, 186 reported 0); response headers 30.2 MB (189 video/image responses)
- LCP: 728 ms (VIDEO) / 392 ms (VIDEO)
- Load event: 2.82 s / 2.03 s; cookie banner: {"banner": true, "clicked": null, "note": "site-specific dismiss failed"} / {"banner": true, "clicked": null, "note": "site-specific dismiss failed"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): fixed top 0 / fixed top 0 / fixed top -61 / fixed top -61
- Capture notes: A cookie strip with OK and a [X] stayed on screen; the X could not be targeted, so the strip was not dismissed in either profile. Awwwards date 2026-06-05.

## 6. Essor Fitness

- URL: https://coachsportifecublens.com/
- Source: Awwwards Honorable Mention, 2026-01-03, award page https://www.awwwards.com/sites/essor-fitness
- Group: fitness
- Archetype: C type-led. Giant white wordmark on black, small trainer video tile; boutique fitness.
- Headline: Essor Fitness™ (sub-line: Coaching Sportif & Nutritionnel à Ecublens (VD))
- Primary CTA: JE ME LANCE (outlined pill in the header)
- Hero shows price / pass / schedule: No price, pass or schedule. Phone and email in the header; a 4.85/5 rating line (60+ reviews).
- Mobile header: Static block at the top with name, phone, email and a text nav (Home, Equipe, Services, Contact) plus the JE ME LANCE pill; this strip sticks to the top on scroll.
- Loader or intro: Black screen with a dim wordmark for about 3 s, then the wordmark slides up to full width.
- First 844 px on a phone, top to bottom: Essor Fitness name, phone and email; text nav Home, Equipe, Services, Contact; JE ME LANCE pill; Coaching Sportif & Nutritionnel à Ecublens (VD); trainer video tile with a Honors ribbon tab on the left; wordmark Essor Fitness™ at display size; rating line 4.85/5 60+ reviews; light card edge entering from the bottom
- Memorable: The wordmark itself, sliding up and enlarging from a black screen.
- Stands out from the mass: 2/5, Competent boutique-gym site with one big-type move, but copy and layout are generic and the hero shows no offer or schedule.
- Scroll, mobile: Trainer portrait and intro text; a display heading Studio privé haut de gamme sliding sideways and cropped; stacked studio photos with white banding.
- Scroll, desktop: Wordmark at the foot of the screen; scroll shows a trainer portrait with a short promise, a logo grid, then the oversized heading and studio photos.

**Mobile (primary)**

[mobile filmstrip](essor-fitness/mobile-filmstrip.jpg)
[mobile scroll 0](essor-fitness/mobile-scroll-0.png) [mobile scroll 1](essor-fitness/mobile-scroll-1.png) [mobile scroll 2](essor-fitness/mobile-scroll-2.png) [mobile scroll 3](essor-fitness/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](essor-fitness/desktop-filmstrip.jpg)
[desktop scroll 0](essor-fitness/desktop-scroll-0.png) [desktop scroll 1](essor-fitness/desktop-scroll-1.png) [desktop scroll 2](essor-fitness/desktop-scroll-2.png) [desktop scroll 3](essor-fitness/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: no library globals found; DOM: html.lenis, framer; scripts: events.framer.com/script, framerusercontent.com4q9MFjAXVqQdFV2rAop3NB/script_main.BEmw1TsC.mjs / no library globals found; DOM: html.lenis, framer; scripts: events.framer.com/script, framerusercontent.com4q9MFjAXVqQdFV2rAop3NB/script_main.BEmw1TsC.mjs
- Video: 2 video element(s); first: …https://framerusercontent.com/assets/MhJj00BslG6TPcvnyXxLbsnFOM.mp4 dur 14.2s muted=True autoplay=True loop=True playsinline=True poster=no / 2 video element(s); first: …https://framerusercontent.com/assets/MhJj00BslG6TPcvnyXxLbsnFOM.mp4 dur 14.2s muted=True autoplay=True loop=True playsinline=True poster=no
- Canvas: 0 canvas; contexts requested: none; WebGL: no / 0 canvas; contexts requested: none; WebGL: no
- CSS scroll features: animation-timeline 0, scroll-timeline 1, view-timeline 1, view-transition 1, sticky rules 4 (stylesheets 26, unreadable 0) / animation-timeline 0, scroll-timeline 1, view-timeline 1, view-transition 1, sticky rules 4 (stylesheets 26, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 0.0 MB transfer (45 entries, 45 reported 0); response headers 14.3 MB (45 video/image responses) / resource timing 18.8 MB transfer (48 entries, 0 reported 0); response headers 14.3 MB (48 video/image responses)
- LCP: 1196 ms (IMG) / 560 ms (H1)
- Load event: 3 s / 1.39 s; cookie banner: {"banner": false, "clicked": null} / {"banner": false, "clicked": null}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): none detected / none detected / none detected / none detected
- Capture notes: No cookie banner. Awwwards tier is Honorable Mention.

## 7. Faith Ibiza

- URL: https://faithibiza.com/
- Source: Awwwards Honorable Mention, 2026-09-01, award page https://www.awwwards.com/sites/faith-ibiza
- Group: hospitality / lifestyle
- Archetype: E scroll-story or pinned sequence. An arch-shaped window of looping footage inside a cream page that expands to full bleed on scroll; the hero stays a framed image until the first touch.
- Headline: FOR THE BEST IBIZA EXPERIENCE... (script overlay: Book with Faith)
- Primary CTA: BOOK (pill, header)
- Hero shows price / pass / schedule: No price, pass or schedule. Booking pill only.
- Mobile header: Fixed: MENU pill left, Faith Ibiza logo centre, BOOK pill right; tones change with the section.
- Loader or intro: Skeleton and logo about 3 s, arch with first clip from 3.5 s; clips change every few seconds.
- First 844 px on a phone, top to bottom: MENU pill, Faith logo, BOOK pill; empty cream space; arch-topped window of looping sea and shoreline footage; serif headline FOR THE BEST IBIZA EXPERIENCE... inside the arch; SCROLL TO DISCOVER rotating ring; round WhatsApp button bottom right
- Memorable: The arch window that grows into a full-bleed film as you scroll.
- Stands out from the mass: 4/5, A calm, specific shape language (arch, script and serif) rather than a full-bleed video; the footage sells water and light.
- Scroll, mobile: The arch widens to full screen footage (boats, a swimmer in a pool) with the script line Book with Faith overlapping the headline; then a cream section COME FOR THE BEACHES, Stay for the feeling, with an As seen on BBC line.
- Scroll, desktop: Same expansion at wider scale.

**Mobile (primary)**

[mobile filmstrip](faith-ibiza/mobile-filmstrip.jpg)
[mobile filmstrip, banner dismissed](faith-ibiza/mobile-filmstrip-clean.jpg)
[mobile scroll 0](faith-ibiza/mobile-scroll-0.png) [mobile scroll 1](faith-ibiza/mobile-scroll-1.png) [mobile scroll 2](faith-ibiza/mobile-scroll-2.png) [mobile scroll 3](faith-ibiza/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](faith-ibiza/desktop-filmstrip.jpg)
[desktop filmstrip, banner dismissed](faith-ibiza/desktop-filmstrip-clean.jpg)
[desktop scroll 0](faith-ibiza/desktop-scroll-0.png) [desktop scroll 1](faith-ibiza/desktop-scroll-1.png) [desktop scroll 2](faith-ibiza/desktop-scroll-2.png) [desktop scroll 3](faith-ibiza/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: gsap, ScrollTrigger, Lenis, Swiper, Splide (gsap 3.13.0); DOM: html.lenis, wordpress; scripts: www.googletagmanager.comgtag/js, googleads.g.doubleclick.net11465153838/, www.google.comrecaptcha/api.js / globals: gsap, ScrollTrigger, Lenis, Swiper, Splide (gsap 3.13.0); DOM: html.lenis, wordpress; scripts: www.googletagmanager.comgtag/js, googleads.g.doubleclick.net11465153838/, www.google.comrecaptcha/api.js
- Video: 12 video element(s); first: …ithmedia.lon1.cdn.digitaloceanspaces.com/faith-ibiza/homepage-hero.mp4 dur 33.9s muted=True autoplay=True loop=True playsinline=True poster=yes / 12 video element(s); first: …ithmedia.lon1.cdn.digitaloceanspaces.com/faith-ibiza/homepage-hero.mp4 dur 33.9s muted=True autoplay=True loop=True playsinline=True poster=yes
- Canvas: 0 canvas; contexts requested: none; WebGL: no / 0 canvas; contexts requested: none; WebGL: no
- CSS scroll features: animation-timeline 0, scroll-timeline 1, view-timeline 1, view-transition 1, sticky rules 4 (stylesheets 1, unreadable 0) / animation-timeline 0, scroll-timeline 1, view-timeline 1, view-transition 1, sticky rules 4 (stylesheets 1, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 0.1 MB transfer (19 entries, 5 reported 0); response headers 34.8 MB (34 video/image responses) / resource timing 0.1 MB transfer (19 entries, 2 reported 0); response headers 35.4 MB (21 video/image responses)
- LCP: 4479 ms (H1) / 4012 ms (H1)
- Load event: 8.02 s / 8.2 s; cookie banner: {"banner": true, "clicked": "Reject All"} / {"banner": true, "clicked": "Reject All"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): none detected / none detected / none detected / none detected
- Capture notes: Cookie dialog had Customize, Reject All and Accept All; Reject All was clicked and the hero re-recorded clean.

## 8. Radian

- URL: https://www.rideradian.com/
- Source: Awwwards Site of the Day, 2026-07-04, award page https://www.awwwards.com/sites/radian
- Group: sport (outdoor product)
- Archetype: E scroll-story or pinned sequence. Dark opening where a headlight ignites and floods the screen, then a pinned 3D bike sequence that changes with scroll; product-led (H) with a configurator.
- Headline: A new era of enduro starts here. (Made for those driven to explore beyond limits.)
- Primary CTA: Explore the bike and Configure now (two pills); Play release video
- Hero shows price / pass / schedule: Pre-order and a configurator are in the page; no price in the hero. The 00:00 / timer in the auto scan belongs to the release-video tile, not a schedule.
- Mobile header: Centred RADIAN logo with a hamburger on the right; transparent over the hero.
- Loader or intro: White flash, black bike silhouette, headlight lights up between 2 and 4.5 s, bike revealed at about 5 s.
- First 844 px on a phone, top to bottom: RADIAN logo and hamburger; small Play release video tile; front view of a yellow electric bike with a glowing headlight; THE RADIAN EXR label; headline A new era of enduro starts here.; Made for those driven to explore beyond limits.; pills Explore the bike and Configure now; privacy dialog with Deny and Accept All covering the lower fifth
- Memorable: The headlight turning on in a black screen and flooding to white before the bike appears.
- Stands out from the mass: 4/5, A light-as-reveal gesture plus a real 3D product sequence; a standard product page after the first screen.
- Scroll, mobile: Light-grey features section with a stacked list (Swap in 30 seconds, Power instantly, Smart storage) beside photos; Confident by design with an Explore the EXR button; then a full-bleed riding video.
- Scroll, desktop: Scroll rotates the pinned bike from front view to a side-on studio view; then a light section with photos and a feature list.

**Mobile (primary)**

[mobile filmstrip](radian/mobile-filmstrip.jpg)
[mobile scroll 0](radian/mobile-scroll-0.png) [mobile scroll 1](radian/mobile-scroll-1.png) [mobile scroll 2](radian/mobile-scroll-2.png) [mobile scroll 3](radian/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](radian/desktop-filmstrip.jpg)
[desktop scroll 0](radian/desktop-scroll-0.png) [desktop scroll 1](radian/desktop-scroll-1.png) [desktop scroll 2](radian/desktop-scroll-2.png) [desktop scroll 3](radian/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: gsap, ScrollTrigger, Lenis, Webflow, Swiper (gsap 3.15.0); DOM: html.lenis, webflow-dom; scripts: www.googletagmanager.com/gtm.js, cdn.prod.website-files.com3.15.0/gsap.min.js, cdn.prod.website-files.com3.15.0/ScrollTrigger.min.js, cdn.prod.website-files.com3.15.0/CustomEase.min.js, cdn.prod.website-files.com3.15.0/Flip.min.js / globals: gsap, ScrollTrigger, Lenis, Webflow, Swiper (gsap 3.15.0); DOM: html.lenis, webflow-dom; scripts: www.googletagmanager.com/gtm.js, cdn.prod.website-files.com3.15.0/gsap.min.js, cdn.prod.website-files.com3.15.0/ScrollTrigger.min.js, cdn.prod.website-files.com3.15.0/CustomEase.min.js, cdn.prod.website-files.com3.15.0/Flip.min.js
- Video: 8 video element(s); first: …https://uncommon.b-cdn.net/Radian%20-%20hero%20cinematisch.mp4 dur 8.1s muted=True autoplay=True loop=True playsinline=True poster=no / 8 video element(s); first: …https://uncommon.b-cdn.net/Radian%20-%20hero%20cinematisch.mp4 dur 8.1s muted=True autoplay=True loop=True playsinline=True poster=no
- Canvas: 1 canvas; contexts requested: 2d; WebGL: no / 1 canvas; contexts requested: 2d; WebGL: no
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 14 (stylesheets 8, unreadable 2) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 14 (stylesheets 6, unreadable 2)
- Hero media weight, first 8 s after load (best effort): resource timing 0.0 MB transfer (22 entries, 22 reported 0); response headers 16.7 MB (21 video/image responses) / resource timing 0.0 MB transfer (94 entries, 94 reported 0); response headers 17.6 MB (92 video/image responses)
- LCP: 2134 ms (H1) / 5364 ms (H1)
- Load event: 5.24 s / 3.55 s; cookie banner: {"banner": true, "clicked": null, "note": "site-specific dismiss failed"} / {"banner": true, "clicked": null, "note": "site-specific dismiss failed"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): none detected / none detected / none detected / none detected
- Capture notes: The privacy dialog (Deny, Accept All) stayed on screen: Deny could not be reached by script in two attempts (getByText and the generic scan), so it was not dismissed and no clean re-recording exists. The hero is visible above the dialog.

## 9. The Pop-Up Hotel

- URL: https://thepopuphotel.com/
- Source: Awwwards Honorable Mention, 2026-07-14, award page https://www.awwwards.com/sites/the-pop-up-hotel
- Group: hospitality
- Archetype: A full-bleed looping video, centred headline, 2 buttons (the mass). Fast-cut event footage under a centred logo and two italic value-prop lines; the mass pattern for hospitality.
- Headline: STAY AT THE WORLD'S GREATEST EVENTS (logo THE POP-UP HOTEL; Where Unforgettable Moments / Meet Unparalleled Comfort)
- Primary CTA: BOOK NOW (text link in the desktop header); a newsletter modal with SUBSCRIBE opens on mobile
- Hero shows price / pass / schedule: No price, pass or schedule in the hero; events are listed as tiles below.
- Mobile header: Dark header with hamburger, heart, ticker text, search and bag; becomes a white bar with the logo after scroll.
- Loader or intro: Dark skeleton with logo about 2.5 to 7 s on desktop; the reel starts at the load event.
- First 844 px on a phone, top to bottom: hamburger, wishlist heart, ticker STAY AT THE WORLD'S GREATEST EVENTS, search, bag; full-bleed dark video of event moments (helicopter arrival, crowd, guitarist); THE POP-UP HOTEL logo centred; two italic lines at the bottom corners; a newsletter modal (Join Our Community, SUBSCRIBE) and a cookie dialog appear over it
- Memorable: Nothing beyond the quick event cuts; template video hero.
- Stands out from the mass: 2/5, Centred logo over a looping reel, with modals on top: the mass.
- Scroll, mobile: Event tiles with handwritten script titles (Monaco Grand Prix, British Grand Prix, The Ryder Cup, Monza) on full-bleed photos; a collaborators band.
- Scroll, desktop: Two-up event tiles with script titles over photos.

**Mobile (primary)**

[mobile filmstrip](the-pop-up-hotel/mobile-filmstrip.jpg)
[mobile filmstrip, banner dismissed](the-pop-up-hotel/mobile-filmstrip-clean.jpg)
[mobile scroll 0](the-pop-up-hotel/mobile-scroll-0.png) [mobile scroll 1](the-pop-up-hotel/mobile-scroll-1.png) [mobile scroll 2](the-pop-up-hotel/mobile-scroll-2.png) [mobile scroll 3](the-pop-up-hotel/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](the-pop-up-hotel/desktop-filmstrip.jpg)
[desktop filmstrip, banner dismissed](the-pop-up-hotel/desktop-filmstrip-clean.jpg)
[desktop scroll 0](the-pop-up-hotel/desktop-scroll-0.png) [desktop scroll 1](the-pop-up-hotel/desktop-scroll-1.png) [desktop scroll 2](the-pop-up-hotel/desktop-scroll-2.png) [desktop scroll 3](the-pop-up-hotel/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: no library globals found; DOM: html.lenis, wordpress; scripts: www.googletagmanager.comgtag/js, thepopuphotel.combuild/gtm4wp-ecommerce-generic.js, thepopuphotel.combuild/gtm4wp-woocommerce.js / no library globals found; DOM: html.lenis, wordpress; scripts: www.googletagmanager.com/gtm.js, www.googletagmanager.comgtag/js, thepopuphotel.combuild/gtm4wp-ecommerce-generic.js, thepopuphotel.combuild/gtm4wp-woocommerce.js
- Video: 1 video element(s); first: …https://thepopuphotel.com/wp-content/uploads/2026/07/HERO-8.mp4 dur 57.3s muted=True autoplay=True loop=True playsinline=True poster=no / 1 video element(s); first: …https://thepopuphotel.com/wp-content/uploads/2026/07/HERO-8.mp4 dur 57.3s muted=True autoplay=True loop=True playsinline=True poster=no
- Canvas: 0 canvas; contexts requested: none; WebGL: no / 0 canvas; contexts requested: none; WebGL: no
- CSS scroll features: animation-timeline 12, scroll-timeline 0, view-timeline 0, view-transition 4, sticky rules 6 (stylesheets 6, unreadable 0) / animation-timeline 12, scroll-timeline 0, view-timeline 0, view-transition 4, sticky rules 6 (stylesheets 6, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 7.1 MB transfer (45 entries, 21 reported 0); response headers 14.2 MB (46 video/image responses) / resource timing 1.7 MB transfer (46 entries, 0 reported 0); response headers 14.7 MB (47 video/image responses)
- LCP: 3496 ms (IMG) / 1888 ms (P)
- Load event: 4.51 s / 7.51 s; cookie banner: {"banner": true, "clicked": "Deny"} / {"banner": true, "clicked": "Deny"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): sticky top 0 / sticky top 0 / sticky top 0 / sticky top 0
- Capture notes: Cookiebot Deny was clicked and the hero re-recorded clean.

## 10. Seasats

- URL: https://www.seasats.com/
- Source: Awwwards Site of the Day, 2026-09-08, award page https://www.awwwards.com/sites/seasats
- Group: other (water)
- Archetype: E scroll-story or pinned sequence. Pinned, scroll-scrubbed film: the camera glides along the boat deck as the page scrolls, with a text list that highlights line by line.
- Headline: Ocean Autonomy That Works
- Primary CTA: EXPLORE PRODUCTS (white pill with arrow)
- Hero shows price / pass / schedule: No price, pass or schedule.
- Mobile header: SEASATS wordmark left and a white MENU pill right, fixed. On desktop the menu is an open, colour-blocked list on the right side of the hero.
- Loader or intro: Pale gradient with the SEASATS wordmark for about 3 s on mobile, 7 s on desktop (30 s load event on desktop).
- First 844 px on a phone, top to bottom: SEASATS wordmark and MENU pill; headline Ocean Autonomy That Works in light serif; misty sea and an unmanned boat with reflection; EXPLORE PRODUCTS pill at the foot
- Memorable: Misty flat water with a slow scroll-scrubbed approach along the boat.
- Stands out from the mass: 4/5, Calm water mood and scroll-scrubbed film are on-brief for a pool; hero structure is simple.
- Scroll, mobile: Step 1: camera over the boat deck; steps 2 and 3: statement lines (path of hurricanes, location of smuggling, spread of toxic algal blooms) highlight in turn with small tagged images (ghost fleet, hurricanes, submarine, algal bloom).
- Scroll, desktop: Same sequence at wider scale.

**Mobile (primary)**

[mobile filmstrip](seasats/mobile-filmstrip.jpg)
[mobile scroll 0](seasats/mobile-scroll-0.png) [mobile scroll 1](seasats/mobile-scroll-1.png) [mobile scroll 2](seasats/mobile-scroll-2.png) [mobile scroll 3](seasats/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](seasats/desktop-filmstrip.jpg)
[desktop scroll 0](seasats/desktop-scroll-0.png) [desktop scroll 1](seasats/desktop-scroll-1.png) [desktop scroll 2](seasats/desktop-scroll-2.png) [desktop scroll 3](seasats/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: no library globals found; DOM: html.lenis; scripts: www.googletagmanager.comgtag/js / no library globals found; DOM: html.lenis; scripts: www.googletagmanager.comgtag/js
- Video: 26 video element(s); first: …3.cdn.digitaloceanspaces.com/seasats_styleframe_Header_IDLE_v001-1.mp4 dur 3s muted=True autoplay=True loop=True playsinline=True poster=no / 26 video element(s); first: …3.cdn.digitaloceanspaces.com/seasats_styleframe_Header_IDLE_v001-1.mp4 dur 3s muted=True autoplay=True loop=True playsinline=True poster=no
- Canvas: 5 canvas; contexts requested: 2d, webgl2; WebGL: yes / 5 canvas; contexts requested: 2d, webgl2; WebGL: yes
- CSS scroll features: animation-timeline 4, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 28 (stylesheets 5, unreadable 0) / animation-timeline 4, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 28 (stylesheets 5, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 1.7 MB transfer (61 entries, 13 reported 0); response headers 3.8 MB (61 video/image responses) / resource timing 1.9 MB transfer (215 entries, 195 reported 0); response headers 9.4 MB (540 video/image responses)
- LCP: 3133 ms (SPAN) / 3268 ms (SPAN)
- Load event: 3.67 s / 29.61 s; cookie banner: {"banner": false, "clicked": null} / {"banner": false, "clicked": null}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): fixed top 0 / fixed top 0 / fixed top 0 / fixed top 0
- Capture notes: No cookie banner. Desktop load event came after 29.6 s.

## 11. ERA Residence

- URL: https://www.era-residence.com/
- Source: Awwwards Site of the Day, 2026-08-31, award page https://www.awwwards.com/sites/era-residence
- Group: other (architecture, material)
- Archetype: B full-bleed photo with headline. Full-bleed pool photograph with large serif type; the arch-shaped window that opens from a dark loader is the memorable move.
- Headline: ERA RESIDENCE Estepona (A PLACE TO RETURN TO)
- Primary CTA: VIEW AVAILABLE APARTMENTS (circular tag over the pool photo); MENU; SELECT AN APARTMENT in the desktop header
- Hero shows price / pass / schedule: No price, pass or schedule.
- Mobile header: Circular logo seal with rotating text top left, MENU with a dot menu right; stays fixed.
- Loader or intro: Aubergine loader with the logo: on mobile the arch opens at about 10 s and the full photograph shows at about 13 s; on desktop the arch opens at about 9.5 s and fills the screen at about 11 s.
- First 844 px on a phone, top to bottom: circular ERA seal with rotating text, MENU with a dots icon; ERA RESIDENCE in a tall condensed serif, Estepona in script; A PLACE and TO RETURN TO pushed to both edges; full-bleed photograph of white terraces and a long pool; circular tag VIEW AVAILABLE APARTMENTS on the pool; cookie bar ACCEPT / DECLINE (first run, before dismissal)
- Memorable: An arch opens in a dark aubergine loader and grows into the full-bleed pool photograph.
- Stands out from the mass: 4/5, Specific and calm; arch and serif type carry luxury without a video. Long loader on mobile.
- Scroll, mobile: Hero holds for about three scroll steps; then an arch-shaped light-blue section THREE REASONS TO CHOOSE ERA with type set on the arch; then an image slider.
- Scroll, desktop: Type slides apart and the pool photograph fills the screen; docked bottom text SIDE BY SIDE APARTMENT.

**Mobile (primary)**

[mobile filmstrip](era-residence/mobile-filmstrip.jpg)
[mobile filmstrip, banner dismissed](era-residence/mobile-filmstrip-clean.jpg)
[mobile scroll 0](era-residence/mobile-scroll-0.png) [mobile scroll 1](era-residence/mobile-scroll-1.png) [mobile scroll 2](era-residence/mobile-scroll-2.png) [mobile scroll 3](era-residence/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](era-residence/desktop-filmstrip.jpg)
[desktop filmstrip, banner dismissed](era-residence/desktop-filmstrip-clean.jpg)
[desktop scroll 0](era-residence/desktop-scroll-0.png) [desktop scroll 1](era-residence/desktop-scroll-1.png) [desktop scroll 2](era-residence/desktop-scroll-2.png) [desktop scroll 3](era-residence/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: gsap, ScrollTrigger, Lenis, lottie, Webflow (gsap 3.15.0); DOM: html.lenis, webflow-dom; scripts: www.googletagmanager.comgtag/js, www.googletagmanager.com/gtm.js, cdn.prod.website-files.comjs/webflow.a0aa6ca1.b7683852b8a60d8e.js, unpkg.com@barba/core, cdn.jsdelivr.netdist/gsap.min.js / globals: gsap, ScrollTrigger, Lenis, lottie, Webflow (gsap 3.15.0); DOM: html.lenis, webflow-dom; scripts: www.googletagmanager.comgtag/js, www.googletagmanager.com/gtm.js, cdn.prod.website-files.comjs/webflow.a0aa6ca1.b7683852b8a60d8e.js, unpkg.com@barba/core, cdn.jsdelivr.netdist/gsap.min.js
- Video: 8 video element(s); first: …https://assets.era-residence.com/flowers/bougainvillea-flowers_01.mov dur 10s muted=True autoplay=False loop=True playsinline=True poster=yes / 8 video element(s); first: …https://assets.era-residence.com/flowers/bougainvillea-flowers_01.webm dur 10s muted=True autoplay=False loop=True playsinline=True poster=yes
- Canvas: 0 canvas; contexts requested: 2d; WebGL: no / 0 canvas; contexts requested: 2d; WebGL: no
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 7 (stylesheets 16, unreadable 1) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 7 (stylesheets 16, unreadable 1)
- Hero media weight, first 8 s after load (best effort): resource timing 0.0 MB transfer (58 entries, 58 reported 0); response headers 111.7 MB (66 video/image responses) / resource timing 0.0 MB transfer (51 entries, 50 reported 0); response headers 40.0 MB (51 video/image responses)
- LCP: 1056 ms (IMG) / 496 ms (IMG)
- Load event: 8.6 s / 3.74 s; cookie banner: {"banner": true, "clicked": "site-specific: ^decline$"} / {"banner": true, "clicked": "DECLINE"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): none detected / none detected / none detected / none detected
- Capture notes: Cookie bar with ACCEPT / DECLINE; DECLINE was clicked and the hero re-recorded clean.

## 12. Floema

- URL: https://floema.com/en
- Source: Awwwards Site of the Day, 2026-05-13, award page https://www.awwwards.com/sites/floema
- Group: other (material, craft)
- Archetype: I editorial collage or grid. Off-white field with product thumbnails (benches, bins, signs) drifting around one centred line, then full-bleed photo chapters.
- Headline: Spaces for people, made for life.
- Primary CTA: SEE URBAN PRODUCTS and SEE NATURE PRODUCTS (appear in the first scroll)
- Hero shows price / pass / schedule: No price, pass or schedule.
- Mobile header: Floema wordmark left, language switch and a white menu pill right; fixed; a small round chat button bottom left.
- Loader or intro: Blank off-white about 2.5 s, then text; thumbnails fade in from 3.5 s.
- First 844 px on a phone, top to bottom: Floema wordmark, EN, menu pill; drifting cut-out product thumbnails on an off-white ground; centred line Spaces for people, made for life.; round chat button
- Memorable: A cloud of drifting product thumbnails around a single sentence.
- Stands out from the mass: 3/5, Quiet and tidy with one gentle motion idea; copy-light but not striking.
- Scroll, mobile: Full-bleed photo chapters: 01 Urban with a catalogue download card, 02 Nature with category chips and pill CTAs.
- Scroll, desktop: Same chapters with a header menu.

**Mobile (primary)**

[mobile filmstrip](floema/mobile-filmstrip.jpg)
[mobile filmstrip, banner dismissed](floema/mobile-filmstrip-clean.jpg)
[mobile scroll 0](floema/mobile-scroll-0.png) [mobile scroll 1](floema/mobile-scroll-1.png) [mobile scroll 2](floema/mobile-scroll-2.png) [mobile scroll 3](floema/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](floema/desktop-filmstrip.jpg)
[desktop filmstrip, banner dismissed](floema/desktop-filmstrip-clean.jpg)
[desktop scroll 0](floema/desktop-scroll-0.png) [desktop scroll 1](floema/desktop-scroll-1.png) [desktop scroll 2](floema/desktop-scroll-2.png) [desktop scroll 3](floema/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: no library globals found; DOM: html.lenis, #__nuxt; scripts: www.googletagmanager.comgtag/js, floema.com_nuxt/DOn5zXw2.js, www.googletagmanager.com/gtm.js / no library globals found; DOM: html.lenis, #__nuxt; scripts: www.googletagmanager.comgtag/js, floema.com_nuxt/DOn5zXw2.js, www.googletagmanager.com/gtm.js
- Video: 0 video elements / 0 video elements
- Canvas: 3 canvas; contexts requested: none; WebGL: no / 3 canvas; contexts requested: none; WebGL: no
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 6 (stylesheets 54, unreadable 0) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 6 (stylesheets 54, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 4.0 MB transfer (58 entries, 0 reported 0); response headers 8.7 MB (84 video/image responses) / resource timing 1.5 MB transfer (58 entries, 0 reported 0); response headers 3.8 MB (70 video/image responses)
- LCP: 4032 ms (SPAN) / 1612 ms (SPAN)
- Load event: 2.29 s / 2.51 s; cookie banner: {"banner": true, "clicked": "Deny"} / {"banner": true, "clicked": "Deny"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): fixed top 0 / fixed top 0 / fixed top 0 / fixed top 0
- Capture notes: Cookiebot Deny was clicked and the hero re-recorded clean.

## 13. Sobha Privy Collection

- URL: https://sobha-privy-collection.com/
- Source: Awwwards Site of the Day, 2026-09-23, award page https://www.awwwards.com/sites/sobha-privy-collection
- Group: other (type-led luxury)
- Archetype: A full-bleed looping video, centred headline, 2 buttons (the mass). Looping black silk-ribbon video behind a centred italic serif headline; premium mood, same structure as the mass.
- Headline: The art OF THE SUBLIME
- Primary CTA: OPEN THE MAP (3D map tile)
- Hero shows price / pass / schedule: No price, pass or schedule.
- Mobile header: Small menu glyph left, THE PRIVY mark centre, 3D Map link right.
- Loader or intro: Percentage preloader for about 5 s, then the ribbon video; the load event only fires after about 47 s on mobile.
- First 844 px on a phone, top to bottom: menu glyph, THE PRIVY COLLECTION mark, 3D Map link; black glossy ribbon video; headline The art OF THE SUBLIME, italic line over small caps, centred; tile with a 3D map of the Palm Jumeirah (3D, OPEN THE MAP) bottom right; down-arrow button bottom left; cookie bar with a single Accept
- Memorable: Black glossy ribbons moving behind a restrained italic headline.
- Stands out from the mass: 3/5, Elegant but conventional structure; the cost is severe (12 videos, about 59 MB in the first seconds, load event after 47 s on mobile).
- Scroll, mobile: Scrolling with window.scrollTo and with synthetic wheel events moved nothing (document height 844 px), so the four scroll states are frame grabs of the same hero at four moments (1x, from the recording). How the page responds to a real swipe on a phone is unknown.
- Scroll, desktop: Hero stays pinned; a white band for the next section enters from the bottom.

**Mobile (primary)**

[mobile filmstrip](sobha-privy-collection/mobile-filmstrip.jpg)
[mobile scroll 0](sobha-privy-collection/mobile-scroll-0.png) [mobile scroll 1](sobha-privy-collection/mobile-scroll-1.png) [mobile scroll 2](sobha-privy-collection/mobile-scroll-2.png) [mobile scroll 3](sobha-privy-collection/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](sobha-privy-collection/desktop-filmstrip.jpg)
[desktop scroll 0](sobha-privy-collection/desktop-scroll-0.png) [desktop scroll 1](sobha-privy-collection/desktop-scroll-1.png) [desktop scroll 2](sobha-privy-collection/desktop-scroll-2.png) [desktop scroll 3](sobha-privy-collection/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: no library globals found / no library globals found; DOM: locomotive-dom
- Video: 12 video element(s); first: …https://sobha-privy-collection.com/uploads/rubbons-xs.mp4 dur 12s muted=True autoplay=True loop=True playsinline=True poster=no / 12 video element(s); first: …https://sobha-privy-collection.com/uploads/ribbons.mp4 dur 12s muted=True autoplay=True loop=True playsinline=True poster=no
- Canvas: 0 canvas; contexts requested: none; WebGL: no / 0 canvas; contexts requested: none; WebGL: no
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 5 (stylesheets 4, unreadable 1) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 5 (stylesheets 4, unreadable 1)
- Hero media weight, first 8 s after load (best effort): resource timing 29.2 MB transfer (82 entries, 0 reported 0); response headers 56.6 MB (92 video/image responses) / resource timing 12.5 MB transfer (78 entries, 7 reported 0); response headers 48.3 MB (77 video/image responses)
- LCP: 1730 ms (P) / 2668 ms (P)
- Load event: 50.05 s / 20.21 s; cookie banner: {"banner": true, "clicked": null, "note": "banner present; only accept/preferences available, not clicked"} / {"banner": true, "clicked": null, "note": "banner present; only accept/preferences available, not clicked"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo+syntheticWheel moved 0 px; step 2: wheel-failed+scrollTo+syntheticWheel moved 0 px; step 3: wheel-failed+scrollTo+syntheticWheel moved 0 px
- Header position per scroll step (mobile): fixed top 0 / fixed top 0 / fixed top 0 / fixed top 0
- Capture notes: Mobile screenshots time out (page too heavy for the WebKit run); scroll states for mobile were taken from a screen recording at 1x. The cookie bar offers only Accept.

## 14. Boc.Studio

- URL: https://boc.studio/
- Source: Awwwards Site of the Day, 2026-09-19, award page https://www.awwwards.com/sites/boc-studio
- Group: other (type-led)
- Archetype: C type-led. A fixed vermilion band with the studio name and coordinates runs across a fast-cut reel of client work.
- Headline: Boc.Studio® (Creative brand studio; Create, refresh and boost; 41.4120° N, 2.1580° E, Barcelona)
- Primary CTA: None visible in the first screen; the work index follows on scroll
- Hero shows price / pass / schedule: No price, pass or schedule (a studio site).
- Mobile header: No conventional header; the orange band doubles as the identity bar.
- Loader or intro: Orange full-screen with the wordmark for about 3 s on desktop and 5 s on mobile.
- First 844 px on a phone, top to bottom: full-bleed client reel (patterns, football crest, dark orb, pink sphere); orange band with Boc.Studio®, tagline and coordinates across the middle; black pill at the foot with a privacy line and two small buttons
- Memorable: The orange band as a fixed ribbon over a different client film at every step.
- Stands out from the mass: 4/5, A single graphic device on a reel that proves the work; the cookie notice is turned into brand voice.
- Scroll, mobile: Each scroll step swaps the film behind the band (blue pattern, crest, orb, sphere); the pill shows a no-tracking message.
- Scroll, desktop: The reel hands over to a dark work index with thumbnails and a filter.

**Mobile (primary)**

[mobile filmstrip](boc-studio/mobile-filmstrip.jpg)
[mobile scroll 0](boc-studio/mobile-scroll-0.png) [mobile scroll 1](boc-studio/mobile-scroll-1.png) [mobile scroll 2](boc-studio/mobile-scroll-2.png) [mobile scroll 3](boc-studio/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](boc-studio/desktop-filmstrip.jpg)
[desktop scroll 0](boc-studio/desktop-scroll-0.png) [desktop scroll 1](boc-studio/desktop-scroll-1.png) [desktop scroll 2](boc-studio/desktop-scroll-2.png) [desktop scroll 3](boc-studio/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: Lenis; DOM: html.lenis / globals: Lenis; DOM: html.lenis
- Video: 1 video element(s); first: …https://boc.studio/showreel/boc-showreel.webm dur 18.1s muted=True autoplay=False loop=True playsinline=True poster=yes / 1 video element(s); first: …https://boc.studio/showreel/boc-showreel.webm dur 18.1s muted=True autoplay=False loop=True playsinline=True poster=yes
- Canvas: 0 canvas; contexts requested: 2d; WebGL: no / 1 canvas; contexts requested: 2d, webgl; WebGL: yes
- CSS scroll features: animation-timeline 1, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 4 (stylesheets 1, unreadable 0) / animation-timeline 1, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 4 (stylesheets 1, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 2.3 MB transfer (40 entries, 38 reported 0); response headers 5.4 MB (40 video/image responses) / resource timing 0.1 MB transfer (117 entries, 73 reported 0); response headers 5.5 MB (117 video/image responses)
- LCP: 2544 ms (IMG) / 1884 ms (IMG)
- Load event: 5.63 s / 3.16 s; cookie banner: {"banner": true, "clicked": null, "note": "banner present; only accept/preferences available, not clicked"} / {"banner": true, "clicked": null, "note": "banner present; only accept/preferences available, not clicked"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 748 px; step 3: wheel-failed+scrollTo moved 0 px
- Header position per scroll step (mobile): none detected / none detected / none detected / none detected
- Capture notes: The bottom pill is a privacy statement (no cookie banner), so nothing was dismissed.

## 15. Agrumea Farm

- URL: https://www.agrumeafarm.it/en
- Source: FWA of the Day, 2026-09-27, award page https://thefwa.com/cases/agrumea-farm
- Group: other (craft, food)
- Archetype: F WebGL, 3D, shader, generative. A WebGL jar carousel (2D and WebGL2 contexts in use) driven by scroll, with type set in a circle on a maroon dome.
- Headline: Agrumea Farm (logo); rotating ring text WE GROW, WE PRESERVE
- Primary CTA: SCROLL TO DISCOVER; DISCOVER THE PRODUCT chips on desktop
- Hero shows price / pass / schedule: No price, pass or schedule.
- Mobile header: IT and EN round toggles left, farm logo centre, outlined MENU pill right; fixed.
- Loader or intro: Cream screen with a percentage counter and a fruit-shape collage for about 4 s, then an orange wipe, then the dome and jars.
- First 844 px on a phone, top to bottom: IT and EN toggles, logo, MENU pill; tilted 3D jar of orange marmalade with neighbouring jars at the edges; maroon dome with circular text WE GROW, WE PRESERVE; SCROLL TO DISCOVER
- Memorable: Jars that swing in as a 3D carousel while the circular text rotates on the dome.
- Stands out from the mass: 4/5, Product as hero with a distinct illustration loader (fruit shapes) and rotating type; a craft idea a café could borrow.
- Scroll, mobile: The page is one screen tall (scrolling is virtual). A synthetic wheel advanced the carousel: orange marmalade, onion, almond cream, strawberry, pistachio jar in turn.
- Scroll, desktop: Wheel steps rotate through jars (Sinfonia Barocca, Fragole, Smeraldo, Mennulata) with DISCOVER THE PRODUCT chips.

**Mobile (primary)**

[mobile filmstrip](agrumea-farm/mobile-filmstrip.jpg)
[mobile scroll 0](agrumea-farm/mobile-scroll-0.png) [mobile scroll 1](agrumea-farm/mobile-scroll-1.png) [mobile scroll 2](agrumea-farm/mobile-scroll-2.png) [mobile scroll 3](agrumea-farm/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](agrumea-farm/desktop-filmstrip.jpg)
[desktop scroll 0](agrumea-farm/desktop-scroll-0.png) [desktop scroll 1](agrumea-farm/desktop-scroll-1.png) [desktop scroll 2](agrumea-farm/desktop-scroll-2.png) [desktop scroll 3](agrumea-farm/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: globals: Lenis, __NUXT__; DOM: html.lenis, #__nuxt; scripts: www.agrumeafarm.it_nuxt/5uUeoJaR.js, www.googletagmanager.comgtag/js / globals: Lenis, __NUXT__; DOM: html.lenis, #__nuxt; scripts: www.agrumeafarm.it_nuxt/5uUeoJaR.js, www.googletagmanager.comgtag/js
- Video: 0 video elements / 0 video elements
- Canvas: 10 canvas; contexts requested: 2d, webgl2; WebGL: yes / 10 canvas; contexts requested: 2d, webgl2; WebGL: yes
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 0 (stylesheets 17, unreadable 1) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 0 (stylesheets 18, unreadable 1)
- Hero media weight, first 8 s after load (best effort): resource timing 0.0 MB transfer (32 entries, 30 reported 0); response headers 1.1 MB (32 video/image responses) / resource timing 0.7 MB transfer (33 entries, 10 reported 0); response headers 1.1 MB (33 video/image responses)
- LCP: 4856 ms (IMG) / 3712 ms (IMG)
- Load event: 1.2 s / 2.47 s; cookie banner: {"banner": false, "clicked": null} / {"banner": false, "clicked": null}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo+syntheticWheel moved 0 px; step 2: wheel-failed+scrollTo+syntheticWheel moved 0 px; step 3: wheel-failed+scrollTo+syntheticWheel moved 0 px
- Header position per scroll step (mobile): fixed top 0 / fixed top 0 / fixed top 0 / fixed top 0
- Capture notes: Mobile scroll uses synthetic wheel events because the site hijacks scrolling and mobile WebKit has no wheel or swipe API.

## 16. La Revoltosa

- URL: https://larevoltosa.es/
- Source: FWA of the Day, 2026-09-18, award page https://thefwa.com/cases/la-revoltosa-p2
- Group: other (water, fizz, drink)
- Archetype: C type-led. Kinetic type on a flat vermilion field: a bubble drifts and the letters of LA BURBUJA IBÉRICA assemble; line illustrations follow on scroll. The hero is empty for the first 10 s.
- Headline: LA BURBUJA IBÉRICA (later on scroll: MODA PORQUE NUNCA FUERA DE MODA)
- Primary CTA: DESCUBRE MIS BEBIDAS (appears after scrolling)
- Hero shows price / pass / schedule: No price, pass or schedule.
- Mobile header: Round menu button bottom centre once content shows; no top header.
- Loader or intro: Desktop: white for about 1 s, flat vermilion for about 9 s (load event at 5 s in the clean run, 47 s in the first run), then a bubble drifts and the letters of LA BURBUJA IBÉRICA assemble at about 12 s. Mobile: flat red from about 3.5 s in the first run (load event 10 s); white for the full 47 s in the clean run.
- First 844 px on a phone, top to bottom: flat vermilion screen; cookie dialog with Aceptar, Rechazar, Personalizar and Close at the foot (first run); in the clean run the screen stayed white until the 47 s load event
- Memorable: Brand identity: one vermilion and one cream, a bold line illustration of a bather on a snake float.
- Stands out from the mass: 2/5, Strong colour and illustration identity, but the first screen is empty for 10 s on desktop and for the whole recording on mobile in both runs; load behaviour was unstable between runs.
- Scroll, mobile: Scroll steps 1 and 2 stay red; step 3 shows an illustration of a woman in sunglasses on a snake float with a clear bottle and a CTA; step 4 a large close-up illustration.
- Scroll, desktop: Steps 1 and 2 stay red; step 3 shows the illustration of a bather in sunglasses on a snake float; step 4 a cream section with a wavy edge.

**Mobile (primary)**

[mobile filmstrip](la-revoltosa/mobile-filmstrip.jpg)
[mobile filmstrip, banner dismissed](la-revoltosa/mobile-filmstrip-clean.jpg)
[mobile scroll 0](la-revoltosa/mobile-scroll-0.png) [mobile scroll 1](la-revoltosa/mobile-scroll-1.png) [mobile scroll 2](la-revoltosa/mobile-scroll-2.png) [mobile scroll 3](la-revoltosa/mobile-scroll-3.png)

**Desktop**

[desktop filmstrip](la-revoltosa/desktop-filmstrip.jpg)
[desktop filmstrip, banner dismissed](la-revoltosa/desktop-filmstrip-clean.jpg)
[desktop scroll 0](la-revoltosa/desktop-scroll-0.png) [desktop scroll 1](la-revoltosa/desktop-scroll-1.png) [desktop scroll 2](la-revoltosa/desktop-scroll-2.png) [desktop scroll 3](la-revoltosa/desktop-scroll-3.png)

Tech evidence (mobile / desktop)

- Libraries: no library globals found; DOM: html.lenis, wordpress; scripts: www.googletagmanager.comgtag/js, www.googletagmanager.com/gtm.js, larevoltosa.esjs/gtm4wp-contact-form-7-tracker.js, www.google.comrecaptcha/api.js / no library globals found; DOM: wordpress; scripts: www.googletagmanager.comgtag/js, www.googletagmanager.com/gtm.js, larevoltosa.esjs/gtm4wp-contact-form-7-tracker.js
- Video: 0 video elements / 0 video elements
- Canvas: 1 canvas; contexts requested: webgl2, webgl; WebGL: yes / 1 canvas; contexts requested: none; WebGL: no
- CSS scroll features: animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 8 (stylesheets 22, unreadable 0) / animation-timeline 0, scroll-timeline 0, view-timeline 0, view-transition 0, sticky rules 8 (stylesheets 22, unreadable 0)
- Hero media weight, first 8 s after load (best effort): resource timing 0.8 MB transfer (9 entries, 1 reported 0); response headers 0.8 MB (10 video/image responses) / resource timing 0.0 MB transfer (3 entries, 0 reported 0); response headers 0.0 MB (4 video/image responses)
- LCP: 2692 ms (SPAN) / 12948 ms (SPAN)
- Load event: 9.94 s / 58.1 s; cookie banner: {"banner": true, "clicked": "Rechazar"} / {"banner": true, "clicked": "Rechazar"}
- Scroll method and travel (mobile): step 1: wheel-failed+scrollTo moved 844 px; step 2: wheel-failed+scrollTo moved 844 px; step 3: wheel-failed+scrollTo moved 844 px
- Header position per scroll step (mobile): fixed top 0 / fixed top 0 / fixed top 0 / fixed top 0
- Capture notes: Observed on WebKit and Chromium, two runs each. The load event timing varied from 5 s to 50 s between runs; the cause was not verified (preloader that does not finish, or slow assets). Treated as unreliable rather than blocked: filmstrips and scroll states exist for both profiles.

## Change log

- v1.0 — 2026-10-01: first release. 16 sites captured; filmstrips, scroll states and tech evidence per spec v1.0.
