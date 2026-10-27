> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Hero benchmark H1: clubs and studios

Version: v1.0 — 2026-10-01

Scope: premium gyms, clubs and boutique studios (agent h1). Captured 2026-10-01 with Playwright (mobile WebKit 390x844 first, desktop Chromium 1440x900 second). Everything is as observed; "unknown" where not verified. The 1 to 5 score is a provisional screen only; the design lead judges the filmstrips.

## Overview

| Site | Status | Archetype | Score | One memorable thing |
|---|---|---|---|---|
| [Equinox](#equinox) | captured | B full-bleed photo with headline (sale takeover); sticky frame and bottom CTA bar on mobile | 3 | Line-by-line headline reveal on pure black plus a mobile bottom CTA bar ("Visit a club") that replaces the header once you scroll; restraint (black, white, light grotesk) does the luxury work. |
| [Barry's](#barrys) | captured | A full-bleed looping video with finder-first hero (studio search instead of two buttons) | 3 | The hero action is finding a studio, not a slogan: dark red-room video with a location search; on desktop the hero stops at two thirds of the screen so the next section already shows. |
| [Solidcore](#solidcore) | blocked | - not assessable (403) | - | - |
| [SoulCycle (soul-cycle.com)](#soulcycle) | captured | B photo slide with headline (4-slide promo carousel, short hero) | 2 | nothing, template |
| [Third Space](#thirdspace) | captured | B full-bleed photo with editorial serif headline split around a cut-out athlete (art-directed per breakpoint) | 4 | Luxury-magazine serif headline wrapped around a cut-out athlete, with different art direction for phone and desktop; no hero button, the image does the selling. |
| [1Rebel (UK site)](#1rebel) | captured | B photo slide with headline (3-slide auto-rotating promo carousel under a scrolling ticker) | 3 | Condensed display type on neon-graded studio photography, and an events strip under the hero that brings live events into the first screen. |
| [Gymbox](#gymbox) | captured | C type-led: huge extended display type in acid yellow, with a typewriter line band | 4 | Brand voice as the hero: a typewriter band of cheeky one-liners (including "Got that Bali glow. Didn't leave London.") in acid yellow on black, with the offer and two buttons in the first 600 px. |
| [Life Time](#lifetime) | captured | A full-bleed looping video montage, centred serif tagline, one glass-pill button | 3 | Hushed serif tagline over a resort-style montage (pool, spa, weight room) with one glass pill; separate vertical (9:16) and horizontal (16:9) video files, a cream loader that fades into the film, and a visible pause control. |
| [The Dogpound (extra)](#dogpound) | captured | A fixed full-screen video layer (not rendered in capture); below it giant outlined type over black-and-white photography (type-led, C) | 4 | Giant outlined (stroke-only) condensed type over grainy black-and-white fight-gym photography, stacked as full-screen layers over a fixed hero. |
| [Tone House (extra)](#tonehouse) | captured | B full-bleed photo with headline and one lime button (static) | 3 | Lime button on a red-lit athlete photo and a "Welcome to the House." voice; the whole homepage is one hero plus four category tiles. |

## Not usable or dead domains (observed)

| Domain | Observed |
|---|---|
| solidcore.co | HTTP 403 "Request blocked" from the CDN for curl and both Playwright profiles; blocked for this network. |
| soulcycle.com | Unrelated BMX and skate shop. The cycling brand is soul-cycle.com (captured). |
| 1rebel.com (root) | Country chooser (United Kingdom / United Arab Emirates), no hero. UK site /en-gb captured. |
| psycle.co.uk | Redirects to psycle.com, which is a technology agency ("Creative technologists trusted since 1997"); the cycling studio is not at this domain. |
| blokldn.com, blokldn.co.uk | Parked pages from 123 Reg ("is parked free"); BLOK London not reachable at these domains. |
| framefitness.co.uk | Parked page from 123 Reg; not the Frame studio. |
| rumbleboxing.com | Resolved to a Canadian franchise site on Squarespace (Calgary, Vancouver, Toronto) rather than the premium Rumble brand; captured in the working folder but left out of the report as off-brief. |

## Cards

### Equinox <a id="equinox"></a>

URL: https://www.equinox.com/ (final: https://www.equinox.com/) | Status: **captured** | Archetype: **B full-bleed photo with headline (sale takeover); sticky frame and bottom CTA bar on mobile** | Stand-out score: **3/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[Equinox mobile filmstrip](equinox/mobile-filmstrip.jpg)

Mobile filmstrip after the cookie banner was dismissed:

[Equinox mobile clean](equinox/mobile-filmstrip-clean.jpg)

Desktop filmstrip, first load:

[Equinox desktop filmstrip](equinox/desktop-filmstrip.jpg)

Desktop filmstrip after the cookie banner was dismissed:

[Equinox desktop clean](equinox/desktop-filmstrip-clean.jpg)

Scroll states: mobile `equinox/mobile-scroll-0.png`, `equinox/mobile-scroll-1.png`, `equinox/mobile-scroll-2.png`, `equinox/mobile-scroll-3.png`; desktop `equinox/desktop-scroll-0.png`, `equinox/desktop-scroll-1.png`, `equinox/desktop-scroll-2.png`, `equinox/desktop-scroll-3.png`. Raw facts: `equinox/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: THE EQUINOX SALE UPGRADED (SALE struck through) / desktop: THE EQUINOX SALE UPGRADED (SALE struck through) |
| Primary CTA (exact) | mobile: Join Now (hero); VISIT A CLUB (header and fixed bottom bar after scroll) / desktop: Join Now (hero); Visit a Club and Join Today (header) |
| Price / pass / schedule in hero | Offer only: "Get your first month on us + $0 initiation. Offer ends 9.30." plus a live countdown (0D 6H 39M ...) in the promo strip. No day pass, no price list, no schedule. |
| Hero height | mobile: hero block 1,483 px with a 742 px sticky frame (88% of 844 px), starting below a 64 px header and a 55 px promo strip / desktop: 909 px block starting at y 115 (below the 80 px header and 35 px promo strip): fills the whole first screen, next panel starts at y 1,024 |
| Mobile header | Sticky black bar, 64 px: spaced wordmark left, white VISIT A CLUB button, two-line hamburger; white promo strip with countdown directly below. On scroll down the bar slides up out of view (translateY -64 px) and a fixed bottom bar, black with a full-width white VISIT A CLUB button (89 px), takes over. |
| Loading sequence | Clean reload: black frame with the cut-out athletes visible at t-1.0 s; the headline words slide in line by line between t-0.5 s and t+0.0 s (split-word elements, class "word"); then nothing moves except the countdown seconds. |
| Memorable | Line-by-line headline reveal on pure black plus a mobile bottom CTA bar ("Visit a club") that replaces the header once you scroll; restraint (black, white, light grotesk) does the luxury work. |
| Score | 3/5: Disciplined black and white luxury look and a useful sticky mobile CTA, but the hero is a sale banner on a standard photo layout. |

Phone, first 844 px, top to bottom:

- Black header bar (wordmark, white "VISIT A CLUB" button, hamburger)
- White promo strip: offer text, "Join Now" link, live countdown
- Headline "THE EQUINOX SALE UPGRADED" in light-weight caps, SALE struck through
- Sub-line "Get your first month on us + $0 initiation. Offer ends 9.30."
- White "JOIN NOW" button
- Cut-out photo of two athletes kneeling on a grey gradient plinth, on pure black
- Small "TERMS & CONDITIONS" link at the bottom edge

Mobile scroll (3 steps of one viewport):

- Step 1 (y 844): header slides away, fixed bottom "VISIT A CLUB" bar appears; black statement section "IT'S NOT FITNESS. IT'S LIFE." over an arched-doorway photo. The 742 px hero frame is position: sticky inside the 1,483 px hero block (measured).
- Step 2: "115+ CLUBS WORLDWIDE" text on black with a "FIND YOUR CLUB" ghost button and small photo collage.
- Step 3: "UNLIMITED SIGNATURE CLASSES" in very large light caps.
- Lenis smooth-scroll marker present on the page; no pinned video scrub or parallax seen in the stills.

Desktop scroll:

- Header stays sticky (80 px black bar, Visit a Club and Join Today); the white promo strip scrolls away with the hero. No pin and no parallax measured.
- Hero is a 909 px block (image 3167 x 2000 WebP, LCP 1,640 ms); after it come full-viewport 900 px panels, each a photo or video with a white card holding a headline and a text link: "Everything Equinox Has to Offer" (rooftop pool at sunset), "Where Luxury and Fitness Meet" (a muted looping video with a sound toggle that starts only when scrolled into view: currentTime 1.26 s at step 2, paused at steps 0 and 1), "Signature Classes / Personal Training / Authentic Pilates" (three columns).
- At step 1 a grey band overlaps the top of the next panel (panel transition); tech shows 8 position: sticky rules and 4 scroll-snap rules in the CSS.

Tech evidence:

- Mobile (WebKit): globals present: Lenis, __NEXT_DATA__; video elements: 1 (the-equinox.mp4 (10.01s, muted True, loop True, playsinline True, poster no, in first viewport False)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 8 (16 CSS sources scanned); media first 8 s: 343 KB (best effort); LCP: 2828 ms, IMG
- Desktop (Chromium): globals present: __NEXT_DATA__; video elements: 1 (src not loaded (currentSrc empty) (unknown s, muted True, loop True, playsinline True, poster no, in first viewport False)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 8 (22 CSS sources scanned); media first 8 s: 1087 KB (best effort); LCP: 1640 ms, IMG

Cookie banner: OneTrust floating card with "Accept All" and "Cookie Settings" only. Dismissed with the close (X) icon, no consent given. On mobile the card covers the lower half of the hero on first load.

Limits and notes:

- Desktop capture was repeated after a network outage (blank frames discarded); the desktop clean filmstrip is from an earlier valid run, the first-load filmstrip and scroll stills from the repeat.
- Hero on both profiles is a WebP cut-out image (separate mobile and desktop files); a 10 s looping MP4 (the-equinox.mp4) exists in the DOM but is rendered at 0x0 on mobile, and the video on desktop sits in a panel below the hero.
- Promo state: the sale hero is dated (offer ends 9.30); the hero changes by season.

---

### Barry's <a id="barrys"></a>

URL: https://www.barrys.com/ (final: https://www.barrys.com/) | Status: **captured** | Archetype: **A full-bleed looping video with finder-first hero (studio search instead of two buttons)** | Stand-out score: **3/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[Barry's mobile filmstrip](barrys/mobile-filmstrip.jpg)

Mobile filmstrip after the cookie banner was dismissed:

[Barry's mobile clean](barrys/mobile-filmstrip-clean.jpg)

Desktop filmstrip, first load:

[Barry's desktop filmstrip](barrys/desktop-filmstrip.jpg)

Desktop filmstrip after the cookie banner was dismissed:

[Barry's desktop clean](barrys/desktop-filmstrip-clean.jpg)

Scroll states: mobile `barrys/mobile-scroll-0.png`, `barrys/mobile-scroll-1.png`, `barrys/mobile-scroll-2.png`, `barrys/mobile-scroll-3.png`; desktop `barrys/desktop-scroll-0.png`, `barrys/desktop-scroll-1.png`, `barrys/desktop-scroll-2.png`, `barrys/desktop-scroll-3.png`. Raw facts: `barrys/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: none visible: the H1 "Try the best workout in the world™" is in the DOM but not shown in the first 844 px / desktop: TRY THE BEST WORKOUT IN THE WORLD™ |
| Primary CTA (exact) | mobile: SEARCH (studio finder); BOOK YOUR FIRST CLASS (header pill) / desktop: SEARCH (studio finder); BOOK YOUR FIRST CLASS (header pill); MY ACCOUNT |
| Price / pass / schedule in hero | No price, no pass, no schedule. The hero action is a studio finder: "FIND A STUDIO", city or zip field, SEARCH, "Use Current Location", "View All Locations". |
| Hero height | mobile: 700 px block (83% of 844 px); the next section peeks in at the bottom / desktop: 602 px (67% of 900 px); next section ("Welcome to Barry's" red script on a black wedge) visible below |
| Mobile header | Fixed 72 px header, transparent over the video: wordmark left, black-outlined "BOOK YOUR FIRST CLASS" pill, hamburger. After the first scroll step the bar turns solid white with a black pill. |
| Loading sequence | Clean reload: black frame with the header at t-1.0 s, video running by t-0.5 s, the finder box appears as a grey skeleton at t+0.0 s and is filled by t+0.5 s; headline fades in on desktop at the same moment. 19.5 s loop of fast workout cuts in a dark red room. |
| Memorable | The hero action is finding a studio, not a slogan: dark red-room video with a location search; on desktop the hero stops at two thirds of the screen so the next section already shows. |
| Score | 3/5: Atmospheric dark video and a task-first finder are strong, but it is the classic full-bleed video hero; mobile shows no headline at all. |

Phone, first 844 px, top to bottom:

- Full-bleed video of workout cuts in a dark red room
- Transparent header: wordmark, "BOOK YOUR FIRST CLASS" pill, hamburger
- "FIND A STUDIO" label with "Use Current Location"
- Search field "Enter your city name or zip ..." with SEARCH button
- "View All Locations" link
- Lower 140 px: light grey next section with a grey emblem
- Round chat widget button bottom left

Mobile scroll (3 steps of one viewport):

- Step 1: header turns solid white; the hero scrolls away normally (no pin); heading "THE BEST WORKOUT IN THE WORLD" and a black "THE RED ROOM" section with an inset video.
- Step 2: RUN and LIFT cards with photos and red tags.
- Step 3: vertical timeline "HIGH ENERGY, INCLUSIVE COMMUNITY".

Desktop scroll:

- Header turns solid white after the first step; hero video pauses once out of view (currentTime frozen at 9.26 s, paused = true); the inset "what to expect" video starts playing when it enters view.
- Sections: black "WHAT TO EXPECT" block, RUN x LIFT cards, timeline, dark photo card. No pinning or parallax seen. Webflow interaction class (w-mod-ix) on the html element.

Tech evidence:

- Mobile (WebKit): globals present: Webflow, Swiper, jQuery; video elements: 3 (6949433bade2d703c90660e8%2F6949869f7cfb2af5e1ddca5 (19.53s, muted True, loop True, playsinline True, poster no, in first viewport True); 6949433bade2d703c90660e8%2F6949869f7cfb2af5e1ddca5 (19.53s, muted True, loop True, playsinline True, poster no, in first viewport False); 6949433bade2d703c90660e8%2F6949869f7cfb2af5e1ddca5 (19.53s, muted True, loop True, playsinline True, poster no, in first viewport False)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 10 (24 CSS sources scanned); media first 8 s: 23490 KB (best effort); LCP: 1277 ms, DIV
- Desktop (Chromium): globals present: Webflow, Swiper, jQuery; video elements: 3 (6949433bade2d703c90660e8%2F6949869f7cfb2af5e1ddca5 (19.53s, muted True, loop True, playsinline True, poster no, in first viewport True); 6949433bade2d703c90660e8%2F6949869f7cfb2af5e1ddca5 (19.53s, muted True, loop True, playsinline True, poster no, in first viewport False); 6949433bade2d703c90660e8%2F6949869f7cfb2af5e1ddca5 (19.53s, muted True, loop True, playsinline True, poster no, in first viewport False)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 10 (22 CSS sources scanned); media first 8 s: 11139 KB (best effort); LCP: 1612 ms, VIDEO

Cookie banner: Cookiebot (Allow all / Allow selection / Deny). "Deny" clicked. On first load the dialog covers the lower half of the mobile hero.

Limits and notes:

- The raw hint "pixi" is a tracking pixel URL (arttrk.com/pixel), not PIXI.js; window.PIXI is absent.
- The same "Mobile" MP4 is used on desktop (1280 x 2276 file in a 1440 x 602 box), observed in the video element.

---

### Solidcore <a id="solidcore"></a>

URL: https://www.solidcore.co/ (final: https://www.solidcore.co/) | Status: **blocked** | Archetype: **- not assessable (403)** | Stand-out score: **-/5**

**Blocked: HTTP 403 "ERROR: The request could not be satisfied. Request blocked." from the CDN edge, for curl, Playwright WebKit mobile and Chromium desktop (two attempts each profile). Probably a geo or WAF block for this network. No bypass attempted; no hero visible. Stills show the 403 page.**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[Solidcore mobile filmstrip](solidcore/mobile-filmstrip.jpg)

Desktop filmstrip, first load:

[Solidcore desktop filmstrip](solidcore/desktop-filmstrip.jpg)

Scroll states: mobile `solidcore/mobile-scroll-0.png`, `solidcore/mobile-scroll-1.png`, `solidcore/mobile-scroll-2.png`, `solidcore/mobile-scroll-3.png`; desktop `solidcore/desktop-scroll-0.png`, `solidcore/desktop-scroll-1.png`, `solidcore/desktop-scroll-2.png`, `solidcore/desktop-scroll-3.png`. Raw facts: `solidcore/hero.json`.

---

### SoulCycle (soul-cycle.com) <a id="soulcycle"></a>

URL: https://www.soul-cycle.com/ (final: https://www.soul-cycle.com/) | Status: **captured** | Archetype: **B photo slide with headline (4-slide promo carousel, short hero)** | Stand-out score: **2/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[SoulCycle (soul-cycle.com) mobile filmstrip](soulcycle/mobile-filmstrip.jpg)

Desktop filmstrip, first load:

[SoulCycle (soul-cycle.com) desktop filmstrip](soulcycle/desktop-filmstrip.jpg)

Extra evidence: [wrong-domain-soulcycle-com-mobile-filmstrip.jpg](soulcycle/wrong-domain-soulcycle-com-mobile-filmstrip.jpg)

Scroll states: mobile `soulcycle/mobile-scroll-0.png`, `soulcycle/mobile-scroll-1.png`, `soulcycle/mobile-scroll-2.png`, `soulcycle/mobile-scroll-3.png`; desktop `soulcycle/desktop-scroll-0.png`, `soulcycle/desktop-scroll-1.png`, `soulcycle/desktop-scroll-2.png`, `soulcycle/desktop-scroll-3.png`. Raw facts: `soulcycle/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: Welcome to SOUL / desktop: Welcome to SOUL |
| Primary CTA (exact) | mobile: Get Started (slide); Book a Bike (header) / desktop: Get Started (slide); Book a Bike (header) |
| Price / pass / schedule in hero | Price: "For a limited time, enjoy two weeks of unlimited rides for $50." No pass picker, no schedule in the hero (upcoming rides appear about two screens down). |
| Hero height | mobile: about 300 px slide plus dots (36% of 844 px); the white "THE SOULCYCLE EXPERIENCE" section starts above the fold / desktop: 292 px slide below a 100 px header (32% of 900 px) |
| Mobile header | Fixed 56 px bar: hamburger, SOULCYCLE wordmark, outlined "Book a Bike" button. After scroll the bar is white with a solid yellow "Book a Bike" button. |
| Loading sequence | No entrance animation; the slide is painted at t-1.0 s and did not advance during the 8 s window (arrows and four dots visible). |
| Memorable | nothing, template |
| Score | 2/5: Standard promo carousel in a short banner; the yellow and black brand colours carry the look. |

Phone, first 844 px, top to bottom:

- Header bar: hamburger, wordmark, "Book a Bike"
- Black slide with photo on the right: "Welcome to SOUL" (SOUL in yellow), offer line, yellow "Get Started" button, left and right arrows
- Four carousel dots
- White section: "THE SOULCYCLE EXPERIENCE", one-line description
- Three-column tag row: CARDIO + STRENGTH, MUSIC DRIVEN, CANDLELIT STUDIO

Mobile scroll (3 steps of one viewport):

- Step 1: header turns white with a yellow "Book a Bike"; numbered tiles "Ride to the beat" ...; black "NEW TO SOULCYCLE?" carousel.
- Step 2: "Upcoming Theme Rides" cards with instructor photo, time, studio and a "Reserve" button, i.e. a real schedule about 1.7 screens down.
- Step 3: "Clip into the best ride of your life" with photo. No pin, parallax or video.

Desktop scroll:

- Header turns white with a yellow "Book a Bike"; tiles, black "NEW TO SOULCYCLE?" carousel, then "Upcoming Theme Rides" cards (Today 8:00 PM, 19th Street ... Reserve) at step 2. No pin or parallax.

Tech evidence:

- Mobile (WebKit): globals present: __NEXT_DATA__; video elements: 0 (none); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 0 (2 CSS sources scanned); media first 8 s: 6558 KB (best effort); LCP: 2820 ms, IMG
- Desktop (Chromium): globals present: __NEXT_DATA__; video elements: 0 (none); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 0 (2 CSS sources scanned); media first 8 s: 6885 KB (best effort); LCP: 2392 ms, IMG

Cookie banner: No cookie banner shown in either profile (observed from a German IP).

Limits and notes:

- Wrong-domain evidence (soulcycle.com BMX shop) is kept as a filmstrip in this card.

---

### Third Space <a id="thirdspace"></a>

URL: https://www.thirdspace.london/ (final: https://www.thirdspace.london/) | Status: **captured** | Archetype: **B full-bleed photo with editorial serif headline split around a cut-out athlete (art-directed per breakpoint)** | Stand-out score: **4/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[Third Space mobile filmstrip](thirdspace/mobile-filmstrip.jpg)

Mobile filmstrip after the cookie banner was dismissed:

[Third Space mobile clean](thirdspace/mobile-filmstrip-clean.jpg)

Desktop filmstrip, first load:

[Third Space desktop filmstrip](thirdspace/desktop-filmstrip.jpg)

Desktop filmstrip after the cookie banner was dismissed:

[Third Space desktop clean](thirdspace/desktop-filmstrip-clean.jpg)

Scroll states: mobile `thirdspace/mobile-scroll-0.png`, `thirdspace/mobile-scroll-1.png`, `thirdspace/mobile-scroll-2.png`, `thirdspace/mobile-scroll-3.png`; desktop `thirdspace/desktop-scroll-0.png`, `thirdspace/desktop-scroll-1.png`, `thirdspace/desktop-scroll-2.png`, `thirdspace/desktop-scroll-3.png`. Raw facts: `thirdspace/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: Training for life / desktop: Training for life |
| Primary CTA (exact) | mobile: JOIN US (header pill); no button in the hero / desktop: JOIN US (header pill); no button in the hero |
| Price / pass / schedule in hero | No price, no pass, no schedule. Scroll chevron only. A timed "Enquire today" form panel slides up about 6 s after load. |
| Hero height | mobile: 100% of the screen (844 px); next section starts at the first scroll step / desktop: 100% of the screen (900 px) |
| Mobile header | Fixed 83 px black bar: "MENU" label left, "III" monogram centre, white "JOIN US" pill right; stays fixed through all scroll states. |
| Loading sequence | The photo and the serif headline are already painted at t-1.0 s (before the consent dialog); no entrance animation. At about 5.5 to 6 s an "Enquire today" form panel (TimedPopup) slides up and covers about 60% of the phone screen. |
| Memorable | Luxury-magazine serif headline wrapped around a cut-out athlete, with different art direction for phone and desktop; no hero button, the image does the selling. |
| Score | 4/5: The serif editorial voice and one confident image feel premium and unlike gym templates; the timed form popup and missing price or pass in the hero cost it. |

Phone, first 844 px, top to bottom:

- Fixed black bar: MENU, III monogram, white JOIN US pill
- Full-bleed dark photo of a sprinting athlete (mobile); a different image on desktop (kettlebell athlete under neon crosses)
- Serif headline "Training  for life" ("for life" in italic) set either side of the athlete
- Scroll chevron at the bottom
- Round cookie-settings icon bottom left

Mobile scroll (3 steps of one viewport):

- Header stays fixed; no pin or parallax seen. Step 1: black serif statement "Third Space are London's luxury health clubs..." with FIND YOUR CLUB and BECOME A MEMBER pills, then class photo cards.
- Step 2: location search "Enter postcode or location", map with club pins (a WebGL context was created, probably the Google map; unverified), Wimbledon club card with pool image.
- Step 3: "INSPIRING CLASSES" large serif headline with VIEW ALL CLASSES and VIEW THE TIMETABLE buttons. Stills were taken with the timed popup closed.

Desktop scroll:

- Header stays fixed. Stills show the "Enquire today" panel across all states (the close control found on mobile does not exist on desktop, so it was left open). Sections: serif statement, wellness tiles ("World-class facilities", "Elite personal training", "Expert nutrition"), postcode search with club map, Wimbledon card.

Tech evidence:

- Mobile (WebKit): globals present: none of the checked; video elements: 0 (none); canvas: 0, WebGL contexts created: 1; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 3 (23 CSS sources scanned); media first 8 s: 941 KB (best effort); LCP: 3341 ms, P
- Desktop (Chromium): globals present: none of the checked; video elements: 0 (none); canvas: 0, WebGL contexts created: 1; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 3 (23 CSS sources scanned); media first 8 s: 1179 KB (best effort); LCP: 2468 ms, P

Cookie banner: CookieYes: "Customise" opened, then "Save My Preferences" with optional categories left off (least tracking). On first load the dialog covers the lower half of the mobile hero.

Limits and notes:

- Timed popup closed on mobile via its close button for the scroll stills; on desktop it stayed open (visible in the stills).
- Hero image could not be classed as video or image from the DOM: zero <video> elements, so it is an image or CSS background.

---

### 1Rebel (UK site) <a id="1rebel"></a>

URL: https://www.1rebel.com/en-gb (final: https://www.1rebel.com/en-gb) | Status: **captured** | Archetype: **B photo slide with headline (3-slide auto-rotating promo carousel under a scrolling ticker)** | Stand-out score: **3/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[1Rebel (UK site) mobile filmstrip](1rebel/mobile-filmstrip.jpg)

Mobile filmstrip after the cookie banner was dismissed:

[1Rebel (UK site) mobile clean](1rebel/mobile-filmstrip-clean.jpg)

Desktop filmstrip, first load:

[1Rebel (UK site) desktop filmstrip](1rebel/desktop-filmstrip.jpg)

Desktop filmstrip after the cookie banner was dismissed:

[1Rebel (UK site) desktop clean](1rebel/desktop-filmstrip-clean.jpg)

Extra evidence: [global-chooser-mobile-filmstrip.jpg](1rebel/global-chooser-mobile-filmstrip.jpg)

Scroll states: mobile `1rebel/mobile-scroll-0.png`, `1rebel/mobile-scroll-1.png`, `1rebel/mobile-scroll-2.png`, `1rebel/mobile-scroll-3.png`; desktop `1rebel/desktop-scroll-0.png`, `1rebel/desktop-scroll-1.png`, `1rebel/desktop-scroll-2.png`, `1rebel/desktop-scroll-3.png`. Raw facts: `1rebel/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: GET 50% OFF YOUR FIRST MONTH (slide 2; slide 1 is INTRODUCING RADIATE, slide 3 BACK TO SCHOOL) / desktop: GET 50% OFF YOUR FIRST MONTH (slide 2; others as on mobile) |
| Primary CTA (exact) | mobile: BOOK NOW (slide 1), GET MEMBERSHIP (slide 2), ENROL NOW (slide 3) / desktop: BOOK NOW (slide 1), GET MEMBERSHIP (slide 2), ENROL NOW (slide 3) |
| Price / pass / schedule in hero | Price and offer: scrolling ticker "NEW TO 1REBEL? GET 5 SESSIONS FOR £59", "GET 50% OFF YOUR FIRST MONTH". A lime "UPCOMING EVENTS" strip with event names, dates and venues sits directly under the slides (fully visible on desktop, peeking at the bottom on mobile); events, not a class timetable. |
| Hero height | mobile: slide block 696 px (82% of 844 px) below a 32 px ticker and 66 px header; events strip peeks in / desktop: slide block 617 px (69% of 900 px) plus the lime events strip inside the first screen |
| Mobile header | Lime scrolling ticker (32 px) above a sticky white 66 px bar: hamburger left, REBEL wordmark centre, account icon right. The bar stays on scroll, the ticker scrolls away. |
| Loading sequence | Slide 1 (red, Radiate) is showing at t-1.0 s; slide 2 (purple, 50% off) cross-fades in at about t+0.5 s; slide 3 (Back to School) at about t+5.5 s, so each slide dwells about 5 s; progress bars sit at the bottom of the slide; the ticker scrolls continuously. |
| Memorable | Condensed display type on neon-graded studio photography, and an events strip under the hero that brings live events into the first screen. |
| Score | 3/5: Distinct brand type and colour, but a rotating discount carousel is the mass pattern. |

Phone, first 844 px, top to bottom:

- Lime ticker "NEW TO 1REBEL? GET 5 SESSIONS FOR £59"
- White bar: hamburger, REBEL wordmark, account icon
- Lime tag chip (e.g. "ALL-ACCESS SIX MONTH EXCLUSIVE")
- Condensed caps headline over neon-graded studio photo
- Two to four lines of body copy, white button (GET MEMBERSHIP)
- Carousel progress bars
- Bottom edge: lime "UPCOMING EVENTS | VIEW ALL" strip

Mobile scroll (3 steps of one viewport):

- Sticky white header stays; ticker scrolls away. Step 1: "THE ULTIMATE FITNESS DESTINATION" (EST. 2015) and event rows; step 2: class tiles RADIATE, REFORMER, RESHAPE, RIDE; step 3: RESET "Recovery elevated" tile and newsletter form. No pin or parallax.
- Two <video> elements (Cloudflare Stream) sit far below the hero (y 5250 px on mobile).

Desktop scroll:

- Sticky header stays at top 0; events strip scrolls away with the slides; no pin or parallax seen in the stills.

Tech evidence:

- Mobile (WebKit): globals present: none of the checked; video elements: 2 (5b791442-fd4c-4a8b-9df7-0dde5a6ce1c5 (22.2s, muted True, loop True, playsinline True, poster no, in first viewport False); e7704998-ddb3-41dc-9697-4945882dffa3 (22.2s, muted True, loop True, playsinline True, poster no, in first viewport False)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 1 (4 CSS sources scanned); media first 8 s: 6517 KB (best effort); LCP: 2268 ms, IMG
- Desktop (Chromium): globals present: none of the checked; video elements: 2 (6452c21e-b854-4093-8632-351e3f3ef9ff (22.2s, muted True, loop True, playsinline True, poster no, in first viewport False); d5f05e04-c7db-4b98-b563-88131afce620 (22.2s, muted True, loop True, playsinline True, poster no, in first viewport False)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 1 (4 CSS sources scanned); media first 8 s: 13666 KB (best effort); LCP: 1700 ms, IMG

Cookie banner: Cookiebot (Allow all / Deny). "Deny" clicked.

Limits and notes:

- Slide order and dwell time observed in one 8 s window plus the reload window; the carousel may have more slides.

---

### Gymbox <a id="gymbox"></a>

URL: https://www.gymbox.com/ (final: https://gymbox.com/) | Status: **captured** | Archetype: **C type-led: huge extended display type in acid yellow, with a typewriter line band** | Stand-out score: **4/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[Gymbox mobile filmstrip](gymbox/mobile-filmstrip.jpg)

Mobile filmstrip after the cookie banner was dismissed:

[Gymbox mobile clean](gymbox/mobile-filmstrip-clean.jpg)

Desktop filmstrip, first load:

[Gymbox desktop filmstrip](gymbox/desktop-filmstrip.jpg)

Desktop filmstrip after the cookie banner was dismissed:

[Gymbox desktop clean](gymbox/desktop-filmstrip-clean.jpg)

Scroll states: mobile `gymbox/mobile-scroll-0.png`, `gymbox/mobile-scroll-1.png`, `gymbox/mobile-scroll-2.png`, `gymbox/mobile-scroll-3.png`; desktop `gymbox/desktop-scroll-0.png`, `gymbox/desktop-scroll-1.png`, `gymbox/desktop-scroll-2.png`, `gymbox/desktop-scroll-3.png`. Raw facts: `gymbox/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: NOTHIN' LIKE IT (the page H1 in the DOM is "Inside London's Most Creative Gym With 10 Locations") / desktop: NOTHIN' LIKE IT |
| Primary CTA (exact) | mobile: UNLOCK THE DEAL → (yellow) and FREE TRIAL → (white); JOIN NOW → (header) / desktop: UNLOCK THE DEAL → and FREE TRIAL →; JOIN NOW → (header) |
| Price / pass / schedule in hero | Offer: "50% OFF YOUR FIRST SEVEN MONTHS". No pass picker, no schedule in the hero (a "FULL TIMETABLE" button appears about 1.7 screens down). A typewriter band types and deletes one-liners, e.g. "GOT THAT BALI GLOW. DIDN'T LEAVE LONDON." |
| Hero height | mobile: about 600 px of content (72% of 844 px) including the typed band; next section heading and the first photo card follow / desktop: full first screen (900 px fixed layer); the yellow typed band sits at the bottom edge of the screen |
| Mobile header | Fixed 65 px header: boxed GYM BOX logo left, yellow "JOIN NOW →" pill, hamburger; stays fixed through all scroll states. |
| Loading sequence | First load: black frame with arrow-only buttons at t-1.0 s (labels not yet rendered), headline, offer and both buttons by t-0.5 s over a yellow-lit corridor image. The yellow band types letter by letter ("C", "COMING BAC", "COMING BACK FROM LUNCH LIKE YOU'VE BEEN T...") then deletes and types the next line about every 4 s ("BOOK CLASSES FOR EACH ONE OF YOUR 65 PERSONALITIES", "RESCHEDULING A DATE FOR DEADLIFT..."). |
| Memorable | Brand voice as the hero: a typewriter band of cheeky one-liners (including "Got that Bali glow. Didn't leave London.") in acid yellow on black, with the offer and two buttons in the first 600 px. |
| Score | 4/5: Loud, ownable type and a copy device nobody else in this batch has; the offer is on screen at once. Banner covers it on first load. |

Phone, first 844 px, top to bottom:

- Fixed header: GYM BOX logo, yellow JOIN NOW pill, hamburger
- Yellow-lit dark corridor image behind
- Headline "NOTHIN' LIKE IT" in extended yellow caps
- "50% OFF YOUR FIRST SEVEN MONTHS"
- Yellow "UNLOCK THE DEAL →" button
- White "FREE TRIAL →" button
- Typewriter text line on a yellow highlight bar
- Small yellow heading "Inside London's Most Creative Gym With 10 Locations"
- Top of a photo card "BEST EQUIPMENT"

Mobile scroll (3 steps of one viewport):

- Header stays fixed. Step 1: photo cards BEST EQUIPMENT, 70+ CLASSES, RECOVERY ZONES, PERSONAL TRAINING and a yellow "GYMBOX LOCATIONS" button.
- Step 2: "CLASSES" with a card carousel (image placeholders, lazy images not yet loaded after 1.2 s), yellow "FULL TIMETABLE →" button.
- Step 3: "CLUB UPGRADES & INNOVATIONS" (red light therapy, hyperbaric oxygen), round yellow "Now at Gymbox Ealing" badge. A fixed full-screen layer (position: fixed, 844 px) sits behind the sections. Lenis smooth-scroll script present.

Desktop scroll:

- Fixed nav (GYMS, MEMBERSHIPS, CLASSES, FACILITIES, PERSONAL TRAINING, yellow JOIN NOW) stays at the top. Step 1: four tall photo cards; step 2: "CLASSES" with broken-image alt text where lazy images had not loaded; step 3: marquee strip text, mostly empty black at 1.2 s.

Tech evidence:

- Mobile (WebKit): globals present: Lenis, Swiper, jQuery; video elements: 0 (none); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 0 (78 CSS sources scanned); media first 8 s: 1502 KB (best effort); LCP: 5468 ms, DIV
- Desktop (Chromium): globals present: Lenis, Swiper, jQuery; video elements: 0 (none); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 0 (82 CSS sources scanned); media first 8 s: 1498 KB (best effort); LCP: 2812 ms, DIV

Cookie banner: Cookiebot (Allow all / Customize / Deny). "Deny" clicked. The dialog covers most of the hero on first load. A page reload after consent triggered a Cloudflare "Performing security verification" human check on the first attempt; not solved or bypassed. The clean strip is therefore 8 s after dismissal without a reload.

Limits and notes:

- Hero background is an image (no <video>); a Vimeo player script is loaded for later sections.
- Real H1 is not the hero headline.

---

### Life Time <a id="lifetime"></a>

URL: https://www.lifetime.life/ (final: https://www.lifetime.life/) | Status: **captured** | Archetype: **A full-bleed looping video montage, centred serif tagline, one glass-pill button** | Stand-out score: **3/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[Life Time mobile filmstrip](lifetime/mobile-filmstrip.jpg)

Mobile filmstrip after the cookie banner was dismissed:

[Life Time mobile clean](lifetime/mobile-filmstrip-clean.jpg)

Desktop filmstrip, first load:

[Life Time desktop filmstrip](lifetime/desktop-filmstrip.jpg)

Desktop filmstrip after the cookie banner was dismissed:

[Life Time desktop clean](lifetime/desktop-filmstrip-clean.jpg)

Scroll states: mobile `lifetime/mobile-scroll-0.png`, `lifetime/mobile-scroll-1.png`, `lifetime/mobile-scroll-2.png`, `lifetime/mobile-scroll-3.png`; desktop `lifetime/desktop-scroll-0.png`, `lifetime/desktop-scroll-1.png`, `lifetime/desktop-scroll-2.png`, `lifetime/desktop-scroll-3.png`. Raw facts: `lifetime/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: Make healthy your way of life. / desktop: Make healthy your way of life. |
| Primary CTA (exact) | mobile: FIND YOUR CLUB → / desktop: FIND YOUR CLUB → |
| Price / pass / schedule in hero | No price figure and no pass or schedule. The sub-line "Join before the fall price adjustments." is a price-urgency message only. |
| Hero height | mobile: 844 px = 100% of the screen / desktop: 900 px = 100% of the screen |
| Mobile header | Absolute (not sticky) 72 px header over the video: hamburger with "FIND A LOCATION" left, LIFE TIME wordmark right; it scrolls away with the hero. A pause button sits top right of the video. |
| Loading sequence | Mobile first load: dark grey frame with tagline and pill painted at t-1.0 s, the video fades in at about t+0.5 s. Desktop reload: cream page for about 2.5 s, then the film. The montage cuts every 2.5 to 3 s (pool, spa massage, weight room) and loops after 17.8 s. |
| Memorable | Hushed serif tagline over a resort-style montage (pool, spa, weight room) with one glass pill; separate vertical (9:16) and horizontal (16:9) video files, a cream loader that fades into the film, and a visible pause control. |
| Score | 3/5: Calm, resort-feeling execution, but structurally it is the standard full-bleed video hero. |

Phone, first 844 px, top to bottom:

- Transparent header: hamburger + FIND A LOCATION, LIFE TIME wordmark
- Pause button top right
- Full-bleed video montage (pool, massage, gym)
- Centred light serif "Make healthy your way of life."
- "Join before the fall price adjustments."
- Frosted glass pill "FIND YOUR CLUB →" near the bottom
- Round chat button bottom left

Mobile scroll (3 steps of one viewport):

- Header scrolls away; the hero video pauses when it leaves the screen (paused = true at step 1). Step 1: beige intro text "Going beyond a gym with over 190 Athletic Country Club locations" and a horizontal scroller of location cards (New York, 15 clubs ...).
- Step 2: full-screen "Work" panel with its own 9:16 video ("15 integrated healthy co-working locations").
- Step 3: dark/beige text block "We're committed to help improve the way people live, work, play..." No scroll-driven scrubbing measured; sticky "curtain" sections exist much further down (y 10,700 px).

Desktop scroll:

- Header scrolls away; a small frosted floating nav pill ("FIND A LOCATION", logo, tabs) appears after the first step. Hero video pauses off-screen (t 8.97 s, paused). Step 1: location cards with lazy images still showing alt text; step 2: full-viewport "Work" video panel; step 3: tabbed "CO-WORKING / RESIDENCES" pill over a photo.

Tech evidence:

- Mobile (WebKit): globals present: jQuery, Vue; video elements: 11 (national-homepage-5-20-9x16.mp4 (17.81s, muted True, loop True, playsinline True, poster yes, in first viewport True); national-homepage-5-20-16x9.mp4 (17.81s, muted True, loop True, playsinline True, poster yes, in first viewport False); new-york-national.mp4 (11.68s, muted True, loop True, playsinline True, poster no, in first viewport False)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 17 (20 CSS sources scanned); media first 8 s: 96568 KB (best effort); LCP: 3672 ms, DIV
- Desktop (Chromium): globals present: jQuery, Vue; video elements: 11 (national-homepage-5-20-9x16.mp4 (17.81s, muted True, loop True, playsinline True, poster yes, in first viewport False); national-homepage-5-20-16x9.mp4 (17.81s, muted True, loop True, playsinline True, poster yes, in first viewport True); new-york-national.mp4 (11.68s, muted True, loop True, playsinline True, poster no, in first viewport False)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 17 (20 CSS sources scanned); media first 8 s: 54073 KB (best effort); LCP: 3428 ms, DIV

Cookie banner: OneTrust (Accept All / Reject All / Customize) as a floating card at bottom right. "Reject All" clicked. On mobile the card covers the lower hero.

Limits and notes:

- Later-section videos have autoplay = false in markup and are started by script when visible (11 <video> elements on the page).

---

### The Dogpound (extra) <a id="dogpound"></a>

URL: https://www.thedogpound.com/ (final: https://www.thedogpound.com/) | Status: **captured** | Archetype: **A fixed full-screen video layer (not rendered in capture); below it giant outlined type over black-and-white photography (type-led, C)** | Stand-out score: **4/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[The Dogpound (extra) mobile filmstrip](dogpound/mobile-filmstrip.jpg)

Mobile filmstrip after the cookie banner was dismissed:

[The Dogpound (extra) mobile clean](dogpound/mobile-filmstrip-clean.jpg)

Desktop filmstrip, first load:

[The Dogpound (extra) desktop filmstrip](dogpound/desktop-filmstrip.jpg)

Desktop filmstrip after the cookie banner was dismissed:

[The Dogpound (extra) desktop clean](dogpound/desktop-filmstrip-clean.jpg)

Scroll states: mobile `dogpound/mobile-scroll-0.png`, `dogpound/mobile-scroll-1.png`, `dogpound/mobile-scroll-2.png`, `dogpound/mobile-scroll-3.png`; desktop `dogpound/desktop-scroll-0.png`, `dogpound/desktop-scroll-1.png`, `dogpound/desktop-scroll-2.png`, `dogpound/desktop-scroll-3.png`. Raw facts: `dogpound/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: none visible in the hero frame (black); first headline after one scroll step: MEMBERSHIP / desktop: none visible in the hero frame (black); first headline after one scroll step: MEMBERSHIP |
| Primary CTA (exact) | mobile: none in the hero frame; next section: TRAIN WITH US IN NY / TRAIN WITH US IN LA / TRAIN WITH US WORLDWIDE / desktop: none in the hero frame; next section: TRAIN WITH US IN NY / IN LA / WORLDWIDE |
| Price / pass / schedule in hero | No price, no pass, no schedule in the hero frame. Membership copy ("personal training sessions, early access to classes and new merch drops, VIP perks") appears one scroll step later. |
| Hero height | mobile: 844 px = 100% (position: fixed layer, class "hero-section is-fixed") / desktop: 900 px = 100% (fixed layer) |
| Mobile header | Fixed transparent bar: hamburger left, DOGPOUND wordmark centre, CART right; gets class "is-scrolled" after the first scroll step and stays in view. |
| Loading sequence | Black frame with wordmark, CART and a scroll chevron from t-1.0 s to t+8.0 s on both profiles; nothing animates in the window (the film did not start). |
| Memorable | Giant outlined (stroke-only) condensed type over grainy black-and-white fight-gym photography, stacked as full-screen layers over a fixed hero. |
| Score | 4/5: Unmistakable monochrome, outline-type language (judged from the sections below the hero; the hero film itself was not seen). |

Phone, first 844 px, top to bottom:

- Fixed transparent bar: hamburger, DOGPOUND wordmark, CART
- Black full-screen layer (hero video did not render in this capture)
- Scroll chevron at the bottom edge
- Consent card (first load only) with "Reject optional / Manage choices / Accept all"

Mobile scroll (3 steps of one viewport):

- Step 1: full-screen "MEMBERSHIP" in outline type over a B/W portrait, copy, three buttons (white TRAIN WITH US IN NY, white IN LA, outlined WORLDWIDE).
- Step 2: "TRAINING / Offering in-person and virtual sessions" over a kettlebell athlete.
- Step 3: "PARTNER WITH US" outline type over a boxing-ring photo with a white GET IN TOUCH button. Sections slide over the fixed hero layer; the whole homepage is about 3,600 px tall.

Desktop scroll:

- Same four layers: black hero, MEMBERSHIP (outline type about 440 px wide per word), TRAINING, PARTNER WITH US; header (hamburger, wordmark, CART) stays fixed.

Tech evidence:

- Mobile (WebKit): globals present: none of the checked; video elements: 1 (file.mp4%20%281080p%29.mp4?loc=external&log_user=0 (unknown s, muted True, loop True, playsinline True, poster no, in first viewport True)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 0 (1 CSS sources scanned); media first 8 s: 402 KB (best effort); LCP: 624 ms, P
- Desktop (Chromium): globals present: none of the checked; video elements: 1 (file.mp4%20%281080p%29.mp4?loc=external&log_user=0 (unknown s, muted True, loop True, playsinline True, poster no, in first viewport True)); canvas: 0, WebGL contexts created: 0; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 0 (1 CSS sources scanned); media first 8 s: 378 KB (best effort); LCP: 1040 ms, P

Cookie banner: Custom consent card with "Reject optional", "Manage choices", "Accept all". "Reject optional" clicked.

Limits and notes:

- Hero video not played in WebKit (paused at 0:00) nor in Chromium (the Playwright Chromium build lacks H.264); hero look therefore unknown.
- Site is a Gatsby 3.11.1 build (generator meta) with Shopify-hosted assets.

---

### Tone House (extra) <a id="tonehouse"></a>

URL: https://tonehouse.com/ (final: https://tonehouse.com/) | Status: **captured** | Archetype: **B full-bleed photo with headline and one lime button (static)** | Stand-out score: **3/5**

Mobile filmstrip, first load (0.5 s steps, t0 = page load event):

[Tone House (extra) mobile filmstrip](tonehouse/mobile-filmstrip.jpg)

Desktop filmstrip, first load:

[Tone House (extra) desktop filmstrip](tonehouse/desktop-filmstrip.jpg)

Scroll states: mobile `tonehouse/mobile-scroll-0.png`, `tonehouse/mobile-scroll-1.png`, `tonehouse/mobile-scroll-2.png`, `tonehouse/mobile-scroll-3.png`; desktop `tonehouse/desktop-scroll-0.png`, `tonehouse/desktop-scroll-1.png`, `tonehouse/desktop-scroll-2.png`, `tonehouse/desktop-scroll-3.png`. Raw facts: `tonehouse/hero.json`.

| Fact | Observed |
|---|---|
| Headline | mobile: UNLEASH YOUR INNER ATHLETE / Welcome to the House. / desktop: UNLEASH YOUR INNER ATHLETE / Welcome to the House. |
| Primary CTA (exact) | mobile: GET STARTED / desktop: GET STARTED (header: SIGN UP, SCHEDULE, BUY SERVICES) |
| Price / pass / schedule in hero | No price or pass in the hero. On desktop the header carries "SCHEDULE", "BUY SERVICES" and a lime "SIGN UP"; on mobile they sit behind the hamburger. |
| Hero height | mobile: about 700 px (83% of 844 px); the first category tile peeks in at the bottom / desktop: about 526 px (58% of 900 px) below a 124 px header stack; the four category tiles are inside the first screen |
| Mobile header | White 78 px bar: adidas mark and Tone House emblem left, hamburger right; becomes position: fixed (white) once you scroll. |
| Loading sequence | Photo and headline are painted at t-1.0 s; the lime button is an empty bar at t-1.0 s and gets its label at t-0.5 s; then static. A small round chat bubble appears bottom right at about t+3.5 s. |
| Memorable | Lime button on a red-lit athlete photo and a "Welcome to the House." voice; the whole homepage is one hero plus four category tiles. |
| Score | 3/5: Confident colour and voice, but a plain full-bleed photo with centred headline and one button. |

Phone, first 844 px, top to bottom:

- White bar: adidas mark, Tone House emblem, hamburger
- Full-bleed red-lit photo of an athlete in coral leggings
- Headline "UNLEASH YOUR INNER ATHLETE" in heavy white caps
- "Welcome to the House."
- Lime "GET STARTED" button
- Bottom 60 px: top of the first photo tile
- Round chat bubble bottom right (after about 3.5 s)

Mobile scroll (3 steps of one viewport):

- Header becomes fixed (white). Step 1: photo tiles STRENGTH TRAINING and ATHLETIC CONDITIONING with centred white caps; step 2: COMMUNITY and COMPETITIONS tiles, black bar "IN THE HEART OF NYC SINCE 2014 | FIRST TIMERS WELCOME. START HERE >"; step 3: footer. Page height about 2,400 px, so the fourth scroll lands near the end.

Desktop scroll:

- Two-row header (utility links CAREERS, CORPORATE WELLNESS, REWARDS, THE PLAYBOOK, ATHLETE PERKS, lime SIGN UP; main nav THE WORKOUT, BUY SERVICES, RECOVERY, NEW ATHLETE, EVENTS, CHALLENGES, SCHEDULE) stays fixed; a chat card "Welcome to Tone House Nomad" pops up bottom right. Four category tiles, black strip, footer. No pin or parallax.

Tech evidence:

- Mobile (WebKit): globals present: Swiper, Splide, jQuery; video elements: 0 (none); canvas: 0, WebGL contexts created: 1; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 14 (37 CSS sources scanned); media first 8 s: 499 KB (best effort); LCP: 940 ms, DIV
- Desktop (Chromium): globals present: Swiper, Splide, jQuery; video elements: 0 (none); canvas: 0, WebGL contexts created: 1; CSS scroll/view-timeline: 0, view-transition: 0, sticky rules: 14 (42 CSS sources scanned); media first 8 s: 504 KB (best effort); LCP: 612 ms, DIV

Cookie banner: No cookie banner shown (observed from a German IP).

Limits and notes:

- A WebGL context was created on the page (source unknown; no canvas element found).
- Libraries present: Swiper, Splide, jQuery (WordPress build).

---

## Closing synthesis

- Batch result: 8 assigned sites; 7 captured, 1 blocked (Solidcore, 403). Domain traps: soulcycle.com is a BMX shop (soul-cycle.com captured), 1rebel.com root is a country chooser (/en-gb captured), Gymbox raised a bot challenge on reload.
- Archetypes of the 7 captured: A looping video 2 (Barry's, Life Time); B photo with headline 4 (Equinox, Third Space, SoulCycle, 1Rebel); C type-led 1 (Gymbox). D to G none, H partial at best. About 6 of 7 are "the mass" in structure (A and B); only Gymbox breaks the pattern.
- No site in this batch puts a day pass, a price grid or today's class list inside the hero. Closest: 1Rebel events strip under the hero, Barry's studio finder, SoulCycle schedule cards 1.7 screens down. This is the open slot for Elite Fit.
- Tech: no WebGL hero, no scroll-timeline CSS, no GSAP or ScrollTrigger anywhere; Lenis only on Equinox and Gymbox. Premium look here is typography, art direction and copy, not engineering.
- Banner problem: six of seven show a consent card that covers the lower half of the hero on first paint (OneTrust, Cookiebot, CookieYes).
- Extras: The Dogpound (outline type over B/W photography; hero film did not render) and Tone House (plain photo hero with a lime button, template-like). Psycle, BLOK, Frame and Rumble were unusable (redirect or parked domains, see list).
- Five most distinctive (provisional): 1 Gymbox (typewriter band of one-liners, acid yellow on black, offer in 600 px). 2 Third Space (serif "Training for life" around a cut-out athlete, art-directed per breakpoint). 3 Life Time (9:16 and 16:9 spa and gym montage, serif tagline, glass pill, pause control). 4 Equinox (line-by-line headline, header replaced by a bottom "Visit a club" bar on scroll). 5 Barry's (finder-first hero, desktop hero stops at 67% so the next section shows).
- Steal for a Bali gym with pool, sauna, café, concrete and timber: (a) separate vertical phone film of pool, sauna steam and café pour with a poster and a pause button (Life Time); (b) a typed line band in the owner's voice (Gymbox); (c) a fixed bottom "Day pass" bar on phones that replaces the header on scroll (Equinox); (d) a light serif against raw concrete and timber photography (Third Space); (e) hero at about two thirds on desktop so the class strip peeks in (Barry's, 1Rebel); (f) a slim "today" row of classes under the hero (1Rebel events strip idea).
- Avoid: rotating discount carousels (1Rebel, SoulCycle), a hero headline hidden on phones (Barry's), timed form popups covering 60% of the screen (Third Space), countdown timers (Equinox), consent cards over the hero, and a bot challenge after consent (Gymbox reload).

## Change log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-10-01 | First capture of 8 assigned sites plus extras (agent h1). |

Version: v1.0 — 2026-10-01
