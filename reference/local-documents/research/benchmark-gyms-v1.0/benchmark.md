> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Gym and wellness-club homepage benchmark: design first, stack second

Version: v1.0 — 2026-10-01

Client: Elite Fit Bali (gym + recovery club, Pererenan, Canggu). Purpose: evidence for the design-lead step; the current homepage v1.3 was judged "way too generic and template-like". Facts only; where a statement could not be verified the text says "unknown". Prepared by the research extractor (Sonnet 5.5, evidence gathering, no design verdict).

Sample: 29 live sites analysed; 22 desktop screenshots viewed by the agent, 7 not viewable (see "Method and limits"). Credits: before 189, after 95 (account-wide; other agents also use Firecrawl), spent by this task 57 of the 60 allowed (12 search, remainder scrapes).

## 1. Top-10 shortlist: stands out from the mass

Ranking method (transparent, not a taste verdict): four 0-2 scores that add up to 8. R = rarity of the hero archetype in this sample (2 = used by 2 or fewer sites, 1 = 3-5, 0 = 6 or more, bumped for secondary devices), T = type identity (bespoke or specialty display face, or type used as the hero device), C = craft signals provable in HTML (WebGL, Rive, GSAP stack, Lenis plus Framer Motion, per-breakpoint video files), A = ownable art-direction device (a colour block, wordmark treatment, crop or grade that identifies the brand without its logo). Ties: higher C+T first, then viewed screenshot. Sites marked * could not be viewed; their A score rests on measured palette and HTML only.

| # | Site | Score | Archetype | Why it stands out (facts) | Screenshot |
|---|---|---|---|---|---|
| 1 | Gymbox (mega-club / urban chain (10 clubs)) | 7/8 (R1 T2 C2 A2) | D | A single flat yellow and a custom extended typeface carry the brand; a full-width yellow block sits directly under the video hero. | screens/gymbox-desktop.png |
| 2 | Phive Clubs* (mega-club / premium chain) | 7/8 (R2 T2 C2 A1) | E | Gym brand shipping WebGPU/three.js + Rive + Lenis on a Nuxt/Sanity stack with a yellow/black specialty-type system. | screens/phive-desktop.png |
| 3 | Antara Spa & Wellness (recovery / spa) | 7/8 (R2 T2 C1 A2) | D | A wordmark set across the full viewport width in extreme letter-spacing over slow video, with a green arch-shaped section rising into it. | screens/antara-desktop.png |
| 4 | The Performance Lab (performance / sports-science studio) | 7/8 (R2 T2 C1 A2) | D | Headline cropped by the viewport edge over a motion-blurred runner, with monospace UI; the modal/cookie overlays are the visible friction. | screens/perflab-desktop.png |
| 5 | Othership (recovery club (sauna + ice bath)) | 6/8 (R0 T2 C2 A2) | A | Dark red sauna footage under a large condensed serif headline, with Book a Class and Buy a Pass as lime header pills; the only full GSAP scroll stack in the set. | screens/othership-desktop.png |
| 6 | Barry's (boutique chain) | 6/8 (R1 T2 C1 A2) | C | The hero is half headline, half a working "nearest studio" finder with the join action inside it. | screens/barrys-desktop.png |
| 7 | Equinox (mega-club / luxury) | 6/8 (R1 T2 C1 A2) | B | Monochrome black system with a custom typeface; the offer is set as a typographic edit (struck-through SALE) with a live countdown strip. | screens/equinox-desktop.png |
| 8 | The Meritage Resort and Spa (hotel-resort) | 5/8 (R1 T2 C1 A1) | I | Not a gym: a hotel with "Wellness and Fitness" on a deep-green editorial layout with an inset photo - included for the resort-wellness pattern. | screens/meritage-desktop.png |
| 9 | Essor Fitness (coachsportifecublens.com)* (boutique / private studio) | 5/8 (R1 T1 C2 A1) | D | A one-person training studio built in Framer with Lenis and per-letter type, recognised by Awwwards (Honorable Mention). | screens/essor-desktop.png |
| 10 | HYROX (event / brand) | 5/8 (R2 T1 C0 A2) | D | A yellow type block on a black field beside B&W race photography, on a stock WordPress theme (Impreza). | screens/hyrox-desktop.png |

Next ten by score (all 4/8): Nirvana Life (Nirvana Strength), XNRGY Club*, 1Rebel (UK), FINNS Recreation Club, Gymshark, Life Time, Remedy Place, Third Space, Warehouse Gym, AIRE Ancient Baths. Full ranking with components is in stack-signals.csv (columns standout_*) and in the site cards.

## 2. The mass: hero patterns that recur

Archetype counts over 29 sites (22 viewed). Archetypes A and B together cover 14 of 29 sites (48%); among the 22 viewed sites it is 12 (55%). Dark hero frames (mean screenshot luminance below 0.35) appear on 21 of 29 sites.

| Code | Pattern | Sites (n) |
|---|---|---|
| A | Cinematic dark statement: full-bleed dark photo/video, centred or left-aligned statement, zero or one button | 9: Othership, Third Space, Remedy Place, Nirvana Life (Nirvana Strength), Life Time, Rite Bali, Reload Sanctuary*, Warehouse Gym, XNRGY Club* |
| B | Offer-led banner: a discount, trial or price line is the headline | 5: Equinox, 1Rebel (UK), John Reed Fitness, [solidcore], SoulCycle (UK) |
| C | Locator / booking-first: a finder or booking form sits inside the hero | 2: Barry's, AIRE Ancient Baths |
| D | Type or colour block as the hero device: oversize, cropped, letter-spaced or block-set type | 5: Antara Spa & Wellness, Gymbox, The Performance Lab, HYROX, Essor Fitness (coachsportifecublens.com)* |
| E | Immersive: WebGL / 3D / canvas | 1: Phive Clubs* |
| F | Product / e-commerce hero | 1: Gymshark |
| G | Gate / chooser (country or location first) | 1: GymNation |
| H | Pre-launch teaser with renders | 1: FINNS Recreation Club |
| I | Editorial light: framed image on a coloured or light field | 1: The Meritage Resort and Spa |
| U | Unknown (screenshot not viewed, HTML gives no hero layout) | 3: Body Factory Bali*, Loyly Helsinki*, FitnGlam (UAE)* |

What the mass looks like (observed on the viewed sites): a dark photo or video fills the viewport; one short sentence in a light serif or a bold sans sits centred or lower-left; one rectangular button (white, outlined or brand colour); a header with 5-6 text links and a Join/Book box; the next section starts with a centred paragraph or three icon-less benefit rows. Offer-led variants replace the sentence with a percentage-off or "first month" line and add a countdown, ticker or dated strip.

## 3. Cross-site synthesis

- Stack combinations among the top-10 by standout score: Nuxt/Next + headless CMS (Phive: Nuxt + Sanity; Equinox: Next + Contentful), Webflow + GSAP (Othership), WordPress + Elementor or BeTheme + Lenis (Gymbox, Antara), Framer + Lenis + Framer Motion (Essor), Next + Lenis (Performance Lab), plain WordPress (Hyrox).
- Across all 29 sites: Next.js or Nuxt on 13, WordPress on 8, Webflow on 4, Shopify as the store layer on 3 (Gymshark headless, Othership, Rite Bali), Framer on 1; headless CMS: Contentful (Equinox, Gymshark, SoulCycle (UK)), Sanity (Phive Clubs, Remedy Place, 1Rebel (UK)).
- Scroll/motion libraries recurring: Lenis on 6 (Phive Clubs, Antara Spa & Wellness, Gymbox, The Performance Lab, Essor Fitness (coachsportifecublens.com), XNRGY Club); Webflow IX2 on 4; Swiper on 10; marquee/ticker elements on 8. Unique: GSAP stack with ScrollTrigger, SplitText and ScrollSmoother only on Othership (Finns loads GSAP via a plugin); WebGL/three.js (r171 WebGPU) and Rive only on Phive; Locomotive only on Remedy Place; AOS only on Warehouse Gym; Framer Motion only on Essor. Barba, Swup, Theatre.js, Spline, Unicorn Studio: none detected.
- Video: 14 of 29 homepages ship autoplay background video in the HTML; 5 ship a separate portrait file for phones (Barry's, Gymshark, Life Time, John Reed Fitness, Reload Sanctuary); Gymbox streams background video via HLS; 1Rebel sets blob: sources by script. Image formats named in the HTML: AVIF on 2 sites (Othership, Barry's), WebP on 20; most sites reference JPG/PNG only or resolve formats through an image CDN (not visible).
- Booking and commerce layers seen: Mariana Tek (Barry's, Othership), Mindbody (Solidcore), Zenoti (Remedy Place), GymMaster (Reload Sanctuary), Perfect Gym (FitnGlam), Playtomic (XNRGY), Jane App (Performance Lab), Asio (Loyly), Shopify stores (Gymshark, Othership, Rite Bali); several chains run their own join/member subdomains (my., join., app., free-trial.). No homepage loads Stripe.js or a Glofox script.
- Wallet pay: only hints, no proof from static HTML: Gymshark shows an Apple Pay icon plus PayPal/Klarna; Rite Bali's Shopify scripts mention Shop Pay and PayPal. For checkout wallets see the other agents' mobile journeys (research/mobile-journey-a-v1.0/equinox holds a capture named checkout-express-wallets; not examined here).
- Consent tools: Cookiebot on 5, OneTrust on 4, others singly; 15 sites show none in the static HTML.
- Five most distinctive design ideas seen: (1) a wordmark stretched to both viewport edges over slow video with an arch-shaped section rising into it (Antara); (2) a booking bar of centre/people/date selects inside the hero image (AIRE); (3) hero split into headline plus a live nearest-studio card with the join action inside it (Barry's); (4) one flat yellow and a custom extended face, with a yellow block section directly under the video (Gymbox); (5) a gym brand running a WebGPU canvas, Rive and Lenis on a yellow/black specialty-type system (Phive). Runners-up: struck-through SALE plus live countdown (Equinox), headline cropped by the viewport edge (Performance Lab), dated events strip under the hero (1Rebel).
- Recurring across the most impressive sites: restricted palette (black plus one accent), one display face used large, near-empty header, and exactly one primary action; the stack is secondary and ranges from plain WordPress (Hyrox) to WebGPU (Phive).

Reference table (evidence-based, from HTML and the viewed screenshots; no verdict):

| Use as reference for | Sites | Evidence |
|---|---|---|
| (a) hero | Antara, Third Space, Equinox, Gymbox, Phive*, Performance Lab | wordmark-as-hero; serif with italic word; black-void photography plus countdown; yellow extended type plus colour block; WebGPU canvas; cropped giant type |
| (b) scroll storytelling | Othership, Phive*, Essor*, Finns, Remedy Place, Gymbox | GSAP+ScrollTrigger+ScrollSmoother+SplitText; Lenis+three.js+Rive; Lenis+Framer Motion; GSAP+ScrollTrigger (plugin); Locomotive; Lenis+HLS videos |
| (c) recovery / wellness | Remedy Place, Othership, AIRE, Antara, Nirvana Life, Reload Sanctuary* | sauna/ice/treatment menus, calm palettes, serif/italic manifestos, bath-hall photography |
| (d) pass purchase / booking flow | Othership, Reload Sanctuary*, 1Rebel, Rite Bali, Gymnation, AIRE, XNRGY* | Buy a pass + per-class Book + Shopify; Day Pass + app + shop; BUY/BOOK/SHOP header; Shopify membership cards; free day-pass lead form; booking bar in hero; Playtomic court booking |
| (e) mobile | Reload Sanctuary*, Othership, Life Time, Gymshark, XNRGY*, Phive*, Barry's | portrait hero files; mobile-sticky-cta class; 9x16 and 16x9 hero pairs; 9x16 mobile video; sticky-cta class; interactive-widget viewport + burger component; separate mobile video (note: Barry's viewport blocks pinch-zoom) |

(* = screenshot not viewed by the agent.) Mobile claims rest on HTML class names and file names only; mobile behaviour is not observable statically. Other agents hold the real mobile walk-throughs in research/mobile-journey-a-v1.0 and research/mobile-journey-b-v1.0.

## 4. Mobile screenshot coverage

The Firecrawl CLI exposes no mobile viewport or device option (checked with `firecrawl scrape --help`), so this run made no mobile screenshots and spent no credits trying. Mobile screenshots by other agents found in the research folder at build time:

| Site | Mobile screenshots by other agents | Still lacks a mobile screenshot |
|---|---|---|
| Phive Clubs | none yet | YES |
| Antara Spa & Wellness | none yet | YES |
| Gymbox | none yet | YES |
| The Performance Lab | none yet | YES |
| Othership | none yet | YES |
| Equinox | mobile-journey-a-v1.0/equinox (26 png) | no |
| Barry's | mobile-journey-a-v1.0/barrys (51 png) | no |
| HYROX | none yet | YES |
| Third Space | none yet | YES |
| Remedy Place | mobile-journey-b-v1.0/remedy-place (30 png) | no |
| AIRE Ancient Baths | none yet | YES |
| 1Rebel (UK) | none yet | YES |
| Nirvana Life (Nirvana Strength) | none yet | YES |
| The Meritage Resort and Spa | none yet | YES |
| Essor Fitness (coachsportifecublens.com) | none yet | YES |
| FINNS Recreation Club | none yet | YES |
| Gymshark | none yet | YES |
| Life Time | none yet | YES |
| John Reed Fitness | none yet | YES |
| Rite Bali | none yet | YES |
| Reload Sanctuary | none yet | YES |
| Body Factory Bali | none yet | YES |
| [solidcore] | mobile-journey-a-v1.0/solidcore (2 png) | no |
| SoulCycle (UK) | mobile-journey-a-v1.0/soulcycle (22 png) | no |
| Warehouse Gym | none yet | YES |
| XNRGY Club | none yet | YES |
| GymNation | none yet | YES |
| Loyly Helsinki | none yet | YES |
| FitnGlam (UAE) | none yet | YES |

## 5. Site cards (mobile first, desktop second), in rank order

### Gymbox (gymbox)

URL: https://gymbox.com/ (final: https://gymbox.com/, HTTP 200) · London, UK · type: mega-club / urban chain (10 clubs) · provenance: B · rank #1 (7/8) · archetype D: D Type + colour block, offer secondary

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: yellow JOIN NOW in header + hero buttons (Unlock the deal / Free trial); header burger via Elementor.
- Schedule or booking entry on the homepage: "Classes" and "view classes" links; the word "timetable" appears in copy; no schedule widget in the static HTML.
- Booking / commerce vendor evidence: Two funnels on subdomains (join-now., free-trial.); no Stripe/Shopify/Mindbody script on the homepage; no wallet-pay hint; AB Tasty experiments; Cookiebot.
- Mobile navigation evidence: Elementor burger nav (elementor-nav-menu--burger, 8 refs); "bottom-bar" class belongs to a tile grid, not navigation.
- Mobile media: 7 background videos via HLS (adaptive); no portrait-specific file name.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed dark-toned video (people in tie-dye and patterned tops dancing, red light) under a dark overlay. Black header: boxed GYM/BOX logo, wide extended caps nav (GYMS, MEMBERSHIPS, CLASSES, FACILITIES, PERSONAL TRAINING), yellow "JOIN NOW ->" button. Centre: "NOTHIN' LIKE IT" in heavy extended yellow caps, "50% OFF YOUR FIRST SEVEN MONTHS" in white, two buttons (yellow "UNLOCK THE DEAL", white "FREE TRIAL"). Directly under the hero: a full-width flat yellow block with a giant black heading mid-animation ("COMI...").
- Headline and voice: "NOTHIN' LIKE IT" / "50% OFF YOUR FIRST SEVEN MONTHS" · Cheeky, loud, club-night humour; offer stated plainly
- Colour system: Black + one flat yellow #FECC31 (~28% of the frame); white secondary button. Measured palette: #FECC31 28%, #010102 25%, #1E181C 20%, #56473B 13%; mean luminance 0.3.
- Typography: Custom "Gymbox"/"GymBox Std" faces + Montserrat; extended heavy caps for headline and nav.
- Navigation: Desktop top bar (5 items + yellow Join Now). Burger via Elementor nav (elementor-nav-menu--burger).
- First scroll (HTML heading order): H2 "NOTHIN' LIKE IT" -> H1 "Inside London's most creative gym with 10 locations" -> Classes -> Club upgrades & innovations -> SPOTTED IN THE BOX -> Find your gym -> Questions, answered.
- Most distinctive section: The yellow full-width block with oversized animated heading directly beneath the hero.
- Primary action (desktop): Two parallel CTAs: "Unlock the deal" (join) and "Free trial", plus yellow Join Now in the header. Join and trial are separate subdomains (join-now.gymbox.com, free-trial.gymbox.com).
- Media mix / density: Video (6 autoplay muted loop playsinline via HLS) + photography; no illustration. Busy / loud but structured by two colours.
- Generic here: Offer + two buttons over video is the common chain pattern. Distinctive here: One flat brand yellow, custom extended type, humour copy, block-colour sections.

**Motion (what the HTML proves):** Lenis (class on html), 7 HLS (.m3u8) refs for background video, Swiper (94), Slick, Lottie config string (Elementor default, weak), AB Tasty test script. Motion not observable statically.

**Stack (HTML):** WordPress + Elementor; Lenis; HLS video backgrounds; Swiper. Fonts: Gymbox; GymBox Std; Montserrat. Booking: join-now.gymbox.com / free-trial.gymbox.com (vendor not visible). Checkout/store: same subdomains. Other: AB Tasty.

**Distinctive vs a typical gym template:** A single flat yellow and a custom extended typeface carry the brand; a full-width yellow block sits directly under the video hero.

Screenshot: screens/gymbox-desktop.png

### Phive Clubs (phive)

URL: https://phive.pt/en (final: https://phive.pt/en, HTTP 200) · Portugal (Coimbra, Leiria, Lisbon, Porto) · type: mega-club / premium chain · provenance: S: Awwwards Site of the Day page in search results 1 and 4 · rank #2 (7/8) · archetype E: E Immersive (WebGL/3D + type)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: "Join Phive" and "Schedule a visit" CTAs plus app-store link; phone layout not observable.
- Schedule or booking entry on the homepage: No timetable in HTML; "Schedule a visit" (tour booking) and "Classes" link only.
- Booking / commerce vendor evidence: Join funnel on subdomain join.phive.pt (2 links); no Stripe/Shopify/booking-vendor script on the homepage; no wallet-pay hint; TikTok pixel + GTM.
- Mobile navigation evidence: Burger component (data-component="burger", 16 refs). viewport meta adds interactive-widget=resizes-content (keyboard behaviour for forms).
- Mobile media: Videos have playsinline; no portrait-specific file name found; <source media> x10.

**Desktop (1920x1080 viewport screenshot; NOT VIEWED by this agent)**

- Hero: NOT VIEWED. From HTML: video precedes the H1 in the DOM; 6 video tags (2 autoplay, all loop, playsinline) from a Burocratik Spaces bucket (files named todos-dias-web.mp4, Clubs.mp4); 8 canvas elements incl. <canvas data-engine="three.js r171 webgpu">; 7 Rive (.riv) refs; repeated H2 "T r a i n  e v e r y d a y" set letter-by-letter (marquee/ticker text) with H3 "Coimbra, Leiria, Lisbon and Porto". Low-resolution glimpse only (190 px thumbnail inside a QA render of this document, not verified at full size): oversized yellow condensed caps text bands ("...ERY DAY - TRAIN") cropped at the top and bottom edge with a dark photo and a dark circular element between.
- Headline and voice: "Train every day" (letter-spaced marquee) / "It's not just fitness. It's living fully" (title) · Short, imperative, brand-claim ("It's not just fitness. It's living fully")
- Colour system: Measured on the screenshot: flat signal yellow #FFE201 (~19% of pixels, 39% saturated pixels) on near-black #180E05/#050201. Firecrawl branding: primary #FFD904, secondary #161003, 0-1px radius, square flat buttons. Measured palette: #180E05 20%, #050201 19%, #FFE201 19%, #0A0503 16%; mean luminance 0.3.
- Typography: AcidGrotesk (variable, preloaded), PPFormula, PureHeart (display) - three self-hosted licensed/specialty faces; letters split into spans.
- Navigation: Not in static HTML (nav list empty; burger component data-component="burger"). CTAs in HTML: Sign up, Schedule a visit, Join Phive, Classes.
- First scroll (HTML heading order): From H2/H3 order: repeated "Train every day" marquee blocks + "Coimbra, Leiria, Lisbon and Porto"; full order not read.
- Most distinctive section: WebGPU canvas and Rive animation inside a gym brand site (the only WebGL evidence in this set).
- Primary action (desktop): "Join Phive" / "Sign up" (join.phive.pt subdomain); "Schedule a visit".
- Media mix / density: Video + canvas/Rive; no illustration found. Editorial / bold (inferred; not viewed).
- Generic here: Unknown (not viewed). Distinctive here: Yellow-on-black flat system, specialty type trio, WebGPU + Rive, letter-by-letter type.

**Motion (what the HTML proves):** Lenis (class "lenis" on html, 15 refs), three.js r171 WebGPU canvas (data-engine), Rive .riv x7, 8 canvas elements, marquee. Motion not observable statically beyond library presence.

**Stack (HTML):** Nuxt (Vue) + Sanity CMS; WebGPU/three.js canvas + Rive + Lenis. Fonts: AcidGrotesk; PPFormula; PureHeart. Booking: join.phive.pt (vendor not visible). Checkout/store: same subdomain. Other: TikTok Pixel.

**Distinctive vs a typical gym template:** Gym brand shipping WebGPU/three.js + Rive + Lenis on a Nuxt/Sanity stack with a yellow/black specialty-type system.

Screenshot: screens/phive-desktop.png

### Antara Spa & Wellness (antara)

URL: https://antaraspawellness.com/ (final: https://antaraspawellness.com/, HTTP 200) · Kuala Lumpur, Malaysia · type: recovery / spa · provenance: S: Awwwards Honorable Mention 7 Feb 2025, agency bikebear (search 5; URL read from the Awwwards page) · rank #3 (7/8) · archetype D: D Type-as-hero (full-width wordmark)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: BOOK A TREATMENT + WhatsApp CTA (wa.me/60123229366); a persistent floating MENU pill sits on the right edge in the desktop render.
- Schedule or booking entry on the homepage: No schedule or booking widget; booking = WhatsApp message.
- Booking / commerce vendor evidence: WooCommerce present in theme CSS but no cart/pass flow on the homepage; WhatsApp is the commerce layer; no wallet-pay hint.
- Mobile navigation evidence: BeTheme burger sidebar (mfn-header-tmpl-burger-sidebar-opened), sticky-header overlay class.
- Mobile media: Single video, webm only, poster set; no mobile-specific file.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed slow video in muted taupe (a candle flame at lower right, soft foliage shadow). The brand name "AntarA" runs the full viewport width in light high-contrast serif, ~200px, extreme letter-spacing, capital A at both ends. Hairline-ruled top bar: "WELLNESS AND SPA RETREAT" left, hand-drawn monogram centre, "OUR MENU" and "CONTACT US" right. Vertical floating "MENU" pill and round sound-toggle on the right edge. Bottom hairline row: leaf-line ornament, "Unwind, restore, and reconnect", "SCROLL". Next section rises as a deep-green arch/dome from the bottom edge.
- Headline and voice: "AntarA" / "Unwind, restore, and reconnect" · Quiet, sensory, understated; brand name does the talking
- Colour system: Taupe/bone (#5E554A, #41392F) with a forest-green arch (~#41613F); no bright accent. Measured palette: #5E554A 26%, #41392F 22%, #554C41 22%, #473D32 15%; mean luminance 0.31.
- Typography: Fraunces (Google Fonts) light display at huge size with letter-spacing; Manrope body; per-letter spans in H2 intro.
- Navigation: Hairline top bar (desktop: Our Menu, Contact Us) + floating vertical MENU pill; sidebar burger menu; branch links (Tun H S Lee, Chow Kit).
- First scroll (HTML heading order): H1 "Antara Spa & Wellness, your luxury spa and wellness retreat" -> letter-split intro "Imagine a sanctuary where the wisdom of the past blends seamlessly..." -> PAST WISDOM / MODERN EXPERIENCES -> Antara Menu -> "Step into tranquility" / "Exclusive treats".
- Most distinctive section: The full-width wordmark hero and the green arch that rises into the page.
- Primary action (desktop): "BOOK A TREATMENT" and WhatsApp ("We're available everyday!"); not a dominant hero button.
- Media mix / density: Video (webm, autoplay muted loop, poster) + photography; no illustration beyond ornament lines. Minimal.
- Generic here: Spa menu + WhatsApp booking pattern is standard. Distinctive here: Type as the hero, arch shape transition, sound toggle, hairline framing.

**Motion (what the HTML proves):** Lenis (class "lenis lenis-smooth"), Swiper (22) + Slick (13), js-marquee, 1 autoplay muted loop webm. Motion not observable statically (the screenshot shows a frozen frame).

**Stack (HTML):** WordPress + BeTheme + WooCommerce; Lenis; Swiper/Slick; webm hero video. Fonts: Fraunces; Manrope. Booking: WhatsApp. Checkout/store: WooCommerce (styles only). Other: WhatsApp.

**Distinctive vs a typical gym template:** A wordmark set across the full viewport width in extreme letter-spacing over slow video, with a green arch-shaped section rising into it.

Screenshot: screens/antara-desktop.png

### The Performance Lab (perflab)

URL: https://theperformancelab.ca/ (final: https://theperformancelab.ca/, HTTP 200) · Toronto, Canada · type: performance / sports-science studio · provenance: S: Awwwards Honorable Mention (found via Awwwards sports listing, 1 credit; URL read from the Awwwards page) · rank #4 (7/8) · archetype D: D Type-as-hero (giant cropped caps)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: persistent "BOOK A CONSULTATION" header button; layout on phone not observable.
- Schedule or booking entry on the homepage: No timetable; consultation booking via Jane App subdomain (14 links).
- Booking / commerce vendor evidence: Jane App (myperformancelab.janeapp.com x14) for booking; no store; no wallet hint; GA4 only.
- Mobile navigation evidence: aria-label="Open menu" button (1 ref).
- Mobile media: No video tag in HTML; webm refs only.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Dark, heavily blurred motion-streak photo of a runner (orange top) fills the frame. Headline "UNLOCK / NEXT LEVEL / PERFORMANCE" in massive light-grey uppercase neo-grotesk, left-aligned at the bottom and bleeding off the left edge so the first letters are cropped. Header: small dotted-O logo, nav HOME / WHO WE ARE / BLOG / CONTACT / SERVICES in tracked monospace caps (low contrast), pale "BOOK A CONSULTATION" button top right. In the capture a modal ("Corporate Longevity Testing", portrait on red brick, orange "LEARN MORE") and a cookie banner overlay the hero.
- Headline and voice: "UNLOCK NEXT LEVEL PERFORMANCE" · Short, performance-lab confident; claim "#1 Sports science centre in Canada"
- Colour system: Charcoal/black, grey type, orange-red accent (#B64323 measured) used only for CTAs. Measured palette: #161615 21%, #0E0F0E 20%, #452C20 19%, #221713 15%; mean luminance 0.22.
- Typography: Oversized light neo-grotesk caps + monospace for nav/buttons; font files not in static HTML.
- Navigation: Desktop horizontal list in mono caps; aria-label "Open menu" button for mobile.
- First scroll (HTML heading order): H1 -> "Helping you move better, recover smarter, and perform at your best" -> "Reach your goals..." -> "#1 Sports science centre in Canada" -> "How..." (process).
- Most distinctive section: The cropped giant headline; mono UI type; "3D motion-capture testing" positioning.
- Primary action (desktop): "BOOK A CONSULTATION" (Jane App), "START YOUR JOURNEY", "SIGN UP".
- Media mix / density: Photography/video-blur + type; no illustration. Minimal, but three overlays at first paint (cookie bar + modal).
- Generic here: Cookie banner + promotional modal on first load. Distinctive here: Type bleeding off-canvas, mono UI, motion-blur hero.

**Motion (what the HTML proves):** Lenis (class "lenis lenis-stopped" - scrolling locked while the modal is open), 2 .webm refs, no video tag in static HTML. Motion not observable statically.

**Stack (HTML):** Next.js (Tailwind); Lenis; Jane App booking. Fonts: unknown (not in static HTML). Booking: Jane App (myperformancelab.janeapp.com). Checkout/store: none. Other: GA4.

**Distinctive vs a typical gym template:** Headline cropped by the viewport edge over a motion-blurred runner, with monospace UI; the modal/cookie overlays are the visible friction.

Screenshot: screens/perflab-desktop.png

### Othership (othership)

URL: https://www.othership.us/ (final: https://www.othership.us/, HTTP 200) · North America (US site; Canadian app-store link seen) · type: recovery club (sauna + ice bath) · provenance: B · rank #5 (6/8) · archetype A: A Cinematic dark statement (left-aligned large serif, pill header)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: class "mobile-sticky-cta" present (sticky mobile CTA); "Buy a pass" and "Book A Class" CTAs; layout on a phone not observable.
- Schedule or booking entry on the homepage: Class types with direct Book links on the homepage; "schedule" and "book a session" terms present; full timetable lives in Mariana Tek.
- Booking / commerce vendor evidence: Mariana Tek (booking scripts), Shopify storefront (othership-8687.myshopify.com + shop.othership.us x4), Segment analytics.js, Perkville rewards (othertips.perkville.com), app deep link (onelink.me); no wallet-pay hint found.
- Mobile navigation evidence: Webflow burger (navbar_menu-button w-nav-button, 4 refs) + mobile-sticky-cta.
- Mobile media: 5 videos; playsinline on all; no portrait-specific filename found.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed dark red-lit sauna footage: silhouettes of people on benches, the back of a person in the foreground; the frame is almost monochrome burgundy. Large left-aligned two-line headline "Otherworldly sauna and ice bath experiences for human beings to feel good now" in a high-contrast condensed serif, white. Two sage-green rectangular buttons below it ("BOOK A SESSION", "EXPLORE LOCATIONS", terracotta text). Header is a row of rounded pills: ornamental ellipse logo, an orchid "SHOP" pill, pale pills EXPERIENCE v / LOCATIONS v / BREATHWORK APP / CONTACT v, and on the right two lime pills "BOOK A CLASS" and "BUY A PASS" plus an account icon. Bottom-left outlined pill "5 stars - 1000+ FIVE-STAR REVIEWS"; a vertical tab on the right edge reads "GET 22% OFF >".
- Headline and voice: "Otherworldly sauna and ice bath experiences for human beings to feel good now" · Warm, slightly playful, wellness-as-feeling ("feel good now")
- Colour system: Measured: burgundy/red-brown frame (#300D0D, #290B0A, #1E0808). Firecrawl branding tokens: bg #ECE8E3, text #372338 (plum), lime #DBF572, orchid #CB72C4, terracotta #A24E2B; radius 16px (pill shapes in the header). Measured palette: #300D0D 25%, #290B0A 21%, #0F0607 20%, #1E0808 18%; mean luminance 0.11.
- Typography: Large high-contrast condensed serif headline (Lido STF Condensed per HTML) over Founders Grotesk (UI pills, small caps buttons); both self-hosted via Webflow.
- Navigation: Pill-shaped header: Shop, Experience, Locations, Breathwork App, Contact + lime Book a Class / Buy a Pass; HTML also lists First Timers, Memberships, Events, Sauna, Ice Bath, Online Store.
- First scroll (HTML heading order): H1 -> intro H2 -> marquee section -> "Class Types" (free flow, quieter free flow, evening social, guided class: up / down / all around), each with its own "Book ..." link -> "Everything you need to sweat and dr..." (facilities).
- Most distinctive section: "Class Types" list with a Book button per class type; the header that carries both purchase actions as lime pills.
- Primary action (desktop): Two lime header pills ("Book a Class", "Buy a Pass") plus sage hero buttons ("Book a session", "Explore locations"); right-edge offer tab.
- Media mix / density: Video (Vidzflow, 5 tags) + photography. Medium: pill header, review badge and offer tab around a calm hero.
- Generic here: Centred/left statement over dark video follows the mass pattern; review-badge pill and discount tab are common retail devices. Distinctive here: Red-lit sauna footage, condensed serif headline, pill header, pass + class booking in the header and hero.

**Motion (what the HTML proves):** GSAP 3.15.0, ScrollTrigger 3.15.0, SplitText 3.15.0, ScrollSmoother 3.13.0 (script tags), Webflow IX2 (data-w-id), marquee section (84 refs), IntersectionObserver for video readiness. Motion not observable statically.

**Stack (HTML):** Webflow + GSAP 3.15 (ScrollTrigger, SplitText, ScrollSmoother) + Mariana Tek + Shopify store. Fonts: Founders Grotesk; Lido STF Condensed. Booking: Mariana Tek. Checkout/store: Shopify (shop.othership.us). Other: Segment, Hotjar, Perkville rewards.

**Distinctive vs a typical gym template:** Dark red sauna footage under a large condensed serif headline, with Book a Class and Buy a Pass as lime header pills; the only full GSAP scroll stack in the set.

Screenshot: screens/othership-desktop.png

### Barry's (barrys)

URL: https://www.barrys.com/ (final: https://www.barrys.com/, HTTP 200) · US-based, global studios · type: boutique chain · provenance: B · rank #6 (6/8) · archetype C: C Locator-first hero over blurred red video

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: white "Book your first class" pill in header; locator card in hero; viewport meta sets maximum-scale=1 and user-scalable=no (blocks pinch-zoom).
- Schedule or booking entry on the homepage: No timetable on the homepage; booking runs through Mariana Tek iframes (barrysbootcamp.marianaiframes.com) and app.barrys.com.
- Booking / commerce vendor evidence: Mariana Tek, Next.js app subdomain (17 script refs), shop.barrys.com, loyalty.barrys.com, app-store link, Intellimize, Meta Pixel, Cookiebot; no wallet-pay hint after filtering a false positive.
- Mobile navigation evidence: Webflow burger icon (.burger-icon, 7 refs) + [data-sticky-header].
- Mobile media: Separate mobile asset: "Barrys Temporary Brand Video_Mobile(no-audio)" mp4 + webm.
- Mobile screenshots by other agents: research/mobile-journey-a-v1.0/barrys/ (51 png)

**Desktop (1920x1080 viewport screenshot)**

- Hero: Dark red/black blurred motion video fills the hero. Two columns: left headline "TRY THE BEST WORKOUT IN THE WORLD(TM)"; right a "FIND A STUDIO" card (city/zip search, "Use current location", a NEAREST STUDIO card showing Southlake TX "COMING SOON", buttons VIEW OPENING MEMBERSHIPS and RETURNING CLIENT, "View all locations"). Header: logo, LOCATIONS / THE WORKOUT / THE LIFESTYLE / BARRY'S X / SHOP, white pill "BOOK YOUR FIRST CLASS" and outlined "MY ACCOUNT". Below: light grey band with red brush-script "Welcome to Barry's", then a diagonal cut into black "THE RED ROOM - WHAT TO EXPECT IN YOUR FIRST WORKOUT".
- Headline and voice: "TRY THE BEST WORKOUT IN THE WORLD(TM)" · Bold superlative, first-timer focused
- Colour system: Near-black (#160903 ~30%), off-white (#F8F8F8 ~24%), brand red accents; white pills. Measured palette: #160903 30%, #F8F8F8 24%, #020101 20%, #271105 16%; mean luminance 0.31.
- Typography: Antenna Bold (display), Benton Sans Pro, United Sans (self-hosted otf) + Inter; red brush-script for "Welcome to Barry's".
- Navigation: Header with 5 items + two pills; Webflow burger on small screens.
- First scroll (HTML heading order): H1 + locator -> "THE BEST WORKOUT IN THE WORLD / The Red Room" -> "What to expect in your first workout" -> RUN x LIFT (01 Run, 02 Lift) -> "More than just a workout" -> Fuel Bar / Locker Rooms -> The Barry's Shop -> "8+ Million Strong" -> "Join the hustle" (newsletter).
- Most distinctive section: Hero split into headline + live nearest-studio locator; diagonal section cuts.
- Primary action (desktop): White pill "Book your first class" (header) and "View opening memberships" inside the locator card.
- Media mix / density: Video (3 autoplay muted loop mp4+webm pairs) + photography; script lettering. Editorial / medium.
- Generic here: Newsletter close, standard membership blocks. Distinctive here: Location-aware hero card, red brush script, angled dividers, first-workout explainer.

**Motion (what the HTML proves):** Webflow IX2 (data-w-id x9), Swiper 12 (jsDelivr), data-sticky-header script, 3 background videos. Motion not observable statically.

**Stack (HTML):** Webflow (marketing) + Next.js app (app.barrys.com) + Mariana Tek; Intellimize personalization. Fonts: Antenna Bold; Benton Sans Pro; United Sans; Inter. Booking: Mariana Tek iframes + app.barrys.com (Next.js). Checkout/store: shop.barrys.com; loyalty.barrys.com. Other: Intellimize, Meta Pixel.

**Distinctive vs a typical gym template:** The hero is half headline, half a working "nearest studio" finder with the join action inside it.

Screenshot: screens/barrys-desktop.png

### Equinox (equinox)

URL: https://www.equinox.com/ (final: https://www.equinox.com/, HTTP 200) · New York, US (clubs in US, UK, Canada) · type: mega-club / luxury · provenance: B · rank #7 (6/8) · archetype B: B Offer-led banner over black cinematic photography

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: two header CTAs (Visit a Club / Join Today) and hero Join Now; sale strip with countdown; no sticky-CTA class found.
- Schedule or booking entry on the homepage: None on the homepage (Classes link only).
- Booking / commerce vendor evidence: First-party join flow; "The Shop at Equinox" nav link; Salesforce asset (eqx.my.site.com chat), Braze feed container, Optimizely x11, Adobe Launch (adobedtm/omtrdc), OneTrust; no wallet-pay hint.
- Mobile navigation evidence: Hamburger button class "GlobalHeader_show-menu-button" (1 ref).
- Mobile media: <picture> x10, srcset x60; one hero mp4 ("Desktop-optimized_1920w"); portrait-specific file not seen.
- Mobile screenshots by other agents: research/mobile-journey-a-v1.0/equinox/ (26 png)

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed black-studio photograph/video of two athletes (one crouching, one in a lateral lunge) lit against pure black. Above the hero: a white promo strip with a live countdown ("0D 7H 24M 36S") and "Join Now". Lower-left text block: "THE EQUINOX SALE UPGRADED" with the word SALE struck through, "Get your first month on us + $0 initiation. Offer ends 9.30.", white rectangular "Join Now" button. Header: wide-tracked wordmark with a custom O, nav, and two buttons ("Visit a Club" solid white, "Join Today" outlined).
- Headline and voice: "THE EQUINOX SALE UPGRADED" (SALE struck through) · Wry, confident; typographic edit as the joke; offer-first
- Colour system: Pure black (#000000 ~62% of the frame), white text/buttons, muted skin-tone photography; no accent colour; square corners. Measured palette: #000000 62%, #564239 14%, #191312 11%, #010000 6%; mean luminance 0.11.
- Typography: Custom "Equinox Sans" + "Messina Sans Mono" (self-hosted); uppercase medium-weight headline.
- Navigation: Black bar: Clubs, Membership, Classes, Personal Training, Pilates, Spa, More v; right: Visit a Club, Join Today.
- First scroll (HTML heading order): Promo hero -> "Everything Equinox Has to Offer" -> "Where Luxury and Fitness Meet" -> 6 tiles (Signature Classes, Personal Training, Authentic Pilates, The Spa, Exclusive Amenities, Iconic Spaces) -> Equinox+ app -> club-count counter -> "2 steps, and you're in."
- Most distinctive section: Countdown strip + struck-through word; the club-count counter (rendered "0" in static HTML = count-up element).
- Primary action (desktop): White rectangular "Join Now" in the hero, "Join Today" and "Visit a Club" in the header.
- Media mix / density: Photography/video; no illustration. Minimal.
- Generic here: Offer-first hero with countdown is common chain practice. Distinctive here: Absolute-black photography, custom type, square-cornered monochrome UI.

**Motion (what the HTML proves):** 1 autoplay loop playsinline mp4 (Contentful videos), live countdown, count-up counter. No animation library name visible (Next.js bundled chunks) - library unknown. Motion not observable statically.

**Stack (HTML):** Next.js + Contentful; Optimizely; Adobe Launch; OneTrust; Braze. Fonts: Equinox Sans; Messina Sans Mono. Booking: first-party join flow (Next.js). Checkout/store: first-party; "The Shop at Equinox" link. Other: Braze feed, Salesforce chat asset, Optimizely, Adobe Launch.

**Distinctive vs a typical gym template:** Monochrome black system with a custom typeface; the offer is set as a typographic edit (struck-through SALE) with a live countdown strip.

Screenshot: screens/equinox-desktop.png

### The Meritage Resort and Spa (meritage)

URL: https://www.meritageresort.com/ (final: https://www.meritageresort.com/, HTTP 200) · Napa, California, US · type: hotel-resort · provenance: S: Awwwards Honorable Mention 30 Nov 2025 (search 5) · rank #8 (5/8) · archetype I: I Editorial light (framed photo, hotel)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: gold Book button in header; phone icon and "Toll Free" tap-to-call; Book Direct offer banner.
- Schedule or booking entry on the homepage: "Wellness Classes" and "Overview & Schedule" links to a schedule page.
- Booking / commerce vendor evidence: Booking engine on reservations.meritageresort.com; OneTrust; GTM/GA4; no wallet hint.
- Mobile navigation evidence: aria-label "Toggle navigation" button.
- Mobile media: 1 hero video, playsinline.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Thin announcement bar ("Book Your Napa Harvest Escape for up to 20% Off ->"). Deep-green header and hero field: centred serif lockup "THE MERITAGE RESORT AND SPA | 20 YEARS", left nav STAY / EXPERIENCE / WELLNESS / WINE + DINE / GATHER, right icons + REWARDS / OFFERS and a gold "BOOK" button. Centred light serif "Discover An Infinite Escape" with a thin vertical ornament, then a large inset (not full-bleed) photograph of the resort buildings on a vineyard hillside. "Ask Esti Anything" concierge chat pill bottom right.
- Headline and voice: "Discover An Infinite Escape" · Hospitality-poetic
- Colour system: Deep green #1B3D2C (~58%), gold button, sky-blue photo. Measured palette: #1B3D2C 58%, #C0E4F8 23%, #739BB6 11%, #433D2E 5%; mean luminance 0.4.
- Typography: Scotch Display Roman (serif) + AcuminPro/Mulish; Google Fonts Inter/Poppins/Roboto Flex also loaded.
- Navigation: Left nav (5), icon cluster, gold Book.
- First scroll (HTML heading order): H1 -> Accommodations / Property / Prepare to Stay / Loyalty Programs -> At The Resort / Live Music / Seasons -> Spa Terra / Wellness and Fitness -> Dining / Wine Tasting -> Weddings / Meetings.
- Most distinctive section: Inset framed photograph below the type; concierge chat pill.
- Primary action (desktop): Gold "BOOK" in the header, "Book Direct" banner offer.
- Media mix / density: Photography + 1 autoplay hero mp4 (HEVC, Widen DAM). Editorial / medium.
- Generic here: Hotel booking header. Distinctive here: Green field + inset photo composition; resort wellness inside a hotel site.

**Motion (what the HTML proves):** Swiper (2,367 refs), marquee (3), 1 autoplay muted loop HEVC video. Motion not observable statically.

**Stack (HTML):** Nuxt (Vue) + Swiper; Netlify RUM; Widen DAM video; OneTrust. Fonts: Scotch Display Roman; AcuminPro; Mulish; Inter; Poppins; Roboto Flex. Booking: reservations.meritageresort.com. Checkout/store: same. Other: OneTrust.

**Distinctive vs a typical gym template:** Not a gym: a hotel with "Wellness and Fitness" on a deep-green editorial layout with an inset photo - included for the resort-wellness pattern.

Screenshot: screens/meritage-desktop.png

### Essor Fitness (coachsportifecublens.com) (essor)

URL: https://coachsportifecublens.com/ (final: https://coachsportifecublens.com/, HTTP 200) · Ecublens (VD), Switzerland · type: boutique / private studio · provenance: S: Awwwards Honorable Mention page in search 1 (URL read from the Awwwards page) · rank #9 (5/8) · archetype D: D/E Type-led, Framer motion (not viewed)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: pill CTA in header; no sticky class; no booking widget.
- Schedule or booking entry on the homepage: None.
- Booking / commerce vendor evidence: No commerce or booking vendor; contact only; no analytics detected in static HTML.
- Mobile navigation evidence: No burger class found in static HTML (Framer variants render client-side): unknown.
- Mobile media: 2 mp4 via Framer assets; playsinline.

**Desktop (1920x1080 viewport screenshot; NOT VIEWED by this agent)**

- Hero: NOT VIEWED. From HTML: H1 split across three lines "Coaching Sportif / & Nutritionnel / a Ecublens (VD)"; H1 "Studio prive haut de gamme a Ecublens" x3; nav items letter-spaced in markup ("H o m e", "E q u i p e", "S e r v i c e s", "C o n t a c t") and a pill "J e M e L a n c e" (French: "I'm getting started"); 2 autoplay muted loop mp4 on framerusercontent.com; headings "Nos Services" and a big letter-by-letter "Bien-etre.". Screenshot palette: black #000000 ~73% of the frame (dark theme). Low-resolution glimpse only (190 px thumbnail inside a QA render of this document, not verified at full size): a very large white "Essor Fitness(TM)" wordmark on black with a small portrait inset at top right and a short text block.
- Headline and voice: "Coaching Sportif & Nutritionnel a Ecublens (VD)" · Plain-spoken premium-private-studio French
- Colour system: Measured: black ~73%, grey/teal-white text; Firecrawl branding returned only defaults (blue #0000EE = browser link default; unreliable). Measured palette: #000000 73%, #434244 7%, #D1D7D7 6%, #AAA29D 5%; mean luminance 0.15.
- Typography: Inter + Inter Display (self-hosted via Framer, Google Fonts reference); letter-spaced caps.
- Navigation: Letter-spaced desktop nav (Home, Equipe, Services, Contact) + pill CTA.
- First scroll (HTML heading order): H1 -> H2 "Transformez votre sante et vos performances avec un personal trainer prive..." -> "Studio prive haut de gamme" -> Nos Services -> Bien-etre.
- Most distinctive section: Letter-split headings (per-character animation targets).
- Primary action (desktop): "Je me lance" pill (contact).
- Media mix / density: Video (2 autoplay) + photography. Minimal (inferred).
- Generic here: Unknown (not viewed). Distinctive here: Framer build with per-letter type animation on a dark theme.

**Motion (what the HTML proves):** Lenis (class "lenis" on html, 21 refs), Framer Motion appear IDs (data-framer-appear-id x16), 2 autoplay videos, reduced-motion check. Motion not observable statically.

**Stack (HTML):** Framer + Lenis + Framer Motion appear animations. Fonts: Inter; Inter Display. Booking: none. Checkout/store: none. Other: -.

**Distinctive vs a typical gym template:** A one-person training studio built in Framer with Lenis and per-letter type, recognised by Awwwards (Honorable Mention).

Screenshot: screens/essor-desktop.png

### HYROX (hyrox)

URL: https://hyrox.com/ (final: https://hyrox.com/, HTTP 200) · Hamburg, Germany (global events) · type: event / brand · provenance: B · rank #10 (5/8) · archetype D: D Type/colour block over B&W event photography

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: utility buttons (Find my race etc.); hamburger icon class; nothing sticky found.
- Schedule or booking entry on the homepage: Races instead of classes: "Find my race"; no class timetable.
- Booking / commerce vendor evidence: WooCommerce + hyrox-shop.com; regional domains (hyroxuk.com, hyroxsingapore.com, hyroxdach.com...); Usercentrics; no wallet hint.
- Mobile navigation evidence: "nav-icon style_hamburger_1" (3 refs).
- Mobile media: No video; photography only.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Left two-thirds: desaturated black-and-white photo of runners passing under a sponsor-branded inflatable arch in a hall. Right: black field with a signal-yellow rectangle containing "THE WORLD SERIES OF FITNESS RACING" in regular-weight black caps. Top strip: three yellow buttons (HYROX365 AFFILIATION, RESULTS & RANKINGS, FIND MY RACE), then the letter-spaced wordmark "H Y R O X" and nav ABOUT / ATHLETES / TRAIN / EXPERIENCE / COMPETE / ELITES / SHOP / Regions.
- Headline and voice: "THE WORLD SERIES OF FITNESS RACING" · Sport-governing-body declarative
- Colour system: Black/white photography + signal yellow #EBDD00 (4.7% saturated pixels) as the only colour. Measured palette: #000000 40%, #1E1E1D 18%, #484845 18%, #050505 13%; mean luminance 0.14.
- Typography: Brutal Type (Regular, Medium); wide-tracked wordmark; Font Awesome/Material icons.
- Navigation: Wordmark + 7 items + Regions; three-button utility strip above.
- First scroll (HTML heading order): H1 "The World Series of Fitness Racing" -> "This is Hyrox" -> region lists (Europe, Americas, Asia-Pacific, Africa).
- Most distinctive section: Yellow headline block set on a black field next to B&W photography.
- Primary action (desktop): "FIND MY RACE" (yellow solid) leads the utility strip.
- Media mix / density: Photography only (static HTML has no video). Minimal / editorial.
- Generic here: Mega-menu + region list. Distinctive here: Black/white + one yellow; the headline sits in a colour block rather than on the image.

**Motion (what the HTML proves):** No animation library detected. Motion not observable statically.

**Stack (HTML):** WordPress (Impreza theme) + WooCommerce; Usercentrics. Fonts: Brutal Type; Font Awesome 5; Material Icons. Booking: n/a (races: hyroxresults.com, regional sites). Checkout/store: WooCommerce + hyrox-shop.com. Other: -.

**Distinctive vs a typical gym template:** A yellow type block on a black field beside B&W race photography, on a stock WordPress theme (Impreza).

Screenshot: screens/hyrox-desktop.png

### Nirvana Life (Nirvana Strength) (nirvanalife)

URL: https://nirvanalife.com/ (final: https://nirvanalife.com/, HTTP 200) · Bali, Indonesia (WhatsApp +62) · type: premium gym + recovery (local competitor) · provenance: B (Raoul named "Nirvana (Strength)"; domain from the Semrush files) · rank #11 (4/8) · archetype A: A Cinematic dark statement (blurred still)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: outlined "Join Nirvana Life" + CONTACT; WhatsApp deep link (api.whatsapp.com/send, +62); sticky header effects.
- Schedule or booking entry on the homepage: None; no pass, class or schedule entry on the homepage.
- Booking / commerce vendor evidence: No booking vendor, no analytics or consent script found in static HTML; WooCommerce styles only; investment.nirvanalife.com link; no wallet hint.
- Mobile navigation evidence: Elementor burger (elementor-nav-menu--burger) - same "Menu" pattern on desktop.
- Mobile media: No video.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed, heavily blurred, dark-toned photograph of a silhouetted woman in a straw hat sipping an iced drink by a pool, thatched huts as bokeh. Centred serif headline "Built for Discipline. Designed to Inspire. Sustained by Community." with the three nouns in italic, and one outlined white button "Join Nirvana Life". Header: "Menu" burger left, tracked serif "NIRVANA LIFE" centre, "English" language selector and a cream "CONTACT" button right.
- Headline and voice: "Built for Discipline. Designed to Inspire. Sustained by Community." · Hospitality/club manifesto; three-noun rhythm
- Colour system: Dark brown/olive (#20160C, #3A2D1D), cream text, no accent. Measured palette: #20160C 23%, #3A2D1D 21%, #302414 17%, #2A1E10 13%; mean luminance 0.19.
- Typography: Apris (display serif) + Sveriga (sans), both self-hosted; italic emphasis device.
- Navigation: Burger "Menu" on desktop as well; language list EN, FR, ES, IT, DE, Chinese, Japanese, Korean.
- First scroll (HTML heading order): H3 manifesto -> (static HTML holds little else on this page: 179 KB, 1 H3, contact H2).
- Most distinctive section: Resort/hospitality imagery instead of gym imagery; nine languages.
- Primary action (desktop): Outlined "Join Nirvana Life" (leads to contact) + cream "CONTACT".
- Media mix / density: Photography (still); no video in HTML. Minimal.
- Generic here: Centred statement + outlined button on dark blurred photo. Distinctive here: Serif/italic manifesto, hospitality framing, 8-language selector.

**Motion (what the HTML proves):** Lottie config string (Elementor default, weak), Swiper x2, IntersectionObserver, sticky-header-effects plugin. Motion not observable statically.

**Stack (HTML):** WordPress + Elementor + WooCommerce styles; Lottie config; sticky-header-effects plugin. Fonts: Apris; Sveriga. Booking: none. Checkout/store: none (WooCommerce styles only). Other: WhatsApp.

**Distinctive vs a typical gym template:** A gym that shows a resort pool instead of equipment: serif/italic manifesto, no price or pass on the page.

Screenshot: screens/nirvanalife-desktop.png

### XNRGY Club (xnrgy)

URL: https://xnrgyclub.com/ (final: https://xnrgyclub.com/, HTTP 200) · Amsterdam & Almere, Netherlands · type: padel + gym club · provenance: S: Awwwards Honorable Mention (found via the Awwwards sports listing; URL read from the Awwwards page) · rank #12 (4/8) · archetype A: A Cinematic video statement (not viewed)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: "btn btn--orange sticky-cta" (2 refs); Book a court / Book a lesson buttons; WhatsApp nav item.
- Schedule or booking entry on the homepage: Court availability via Playtomic (9 links); no timetable in the homepage HTML.
- Booking / commerce vendor evidence: Playtomic booking, XNRGY Shop link, Google Tag Manager; no wallet hint.
- Mobile navigation evidence: No clear burger class in static HTML (unknown).
- Mobile media: 1 hero mp4 on cdn.every-day.nl.

**Desktop (1920x1080 viewport screenshot; NOT VIEWED by this agent)**

- Hero: NOT VIEWED. From HTML: video before H1; 1 autoplay muted loop mp4 (cdn.every-day.nl); H1 "ON&OFF COURT"; H2 "Two clubs, four ways to move" (Play, Train, Eat, Connect); CTA marquee "c-cta__marquee c-marquee-text". Screenshot is a dark navy frame (#0E141B, #04080A). Firecrawl branding: bg #EBEBEB, text #0F1320, primary blue #192B88, 0px radius.
- Headline and voice: "ON&OFF COURT" · Short, bilingual-club tone
- Colour system: Dark navy hero; light grey UI #EBEBEB; blue #192B88; orange sticky button (btn--orange). Measured palette: #0E141B 25%, #343D3C 19%, #04080A 18%, #172126 16%; mean luminance 0.15.
- Typography: Neue Helvetica Pro 45 Light / 55 Roman + Space Mono (preloaded) + Inter.
- Navigation: Play, Our trainers, Tournaments & activities, KNLTB Competition, WhatsApp, Kids lessons, Club, About us, Gym, NOVO Restaurant, Locations, Events, Business...
- First scroll (HTML heading order): H1 -> "Two clubs, four ways to move" -> KNLTB P500 in Almere -> "What you find at XNRGY" (Book a court, Padel lessons, Corporate events, Tournaments & Events, XNRGY Gym, XNRGY Shop) -> locations -> "Motion is not a moment..."
- Most distinctive section: CTA marquee and a sticky orange CTA button.
- Primary action (desktop): "Book a court", "Book a lesson" (Playtomic).
- Media mix / density: Video + photography. Medium (inferred; not viewed).
- Generic here: Unknown (not viewed). Distinctive here: Court booking via Playtomic with a sticky CTA class; gym + shop + restaurant under one nav.

**Motion (what the HTML proves):** Lenis (class "lenis hydrated"), Swiper (423), CTA marquee, 1 autoplay hero video, reduced-motion CSS. Motion not observable statically.

**Stack (HTML):** Next.js + Lenis + Swiper; Playtomic booking; sticky CTA class. Fonts: Neue Helvetica Pro 45/55; Space Mono; Inter. Booking: Playtomic (court booking). Checkout/store: XNRGY Shop link. Other: -.

**Distinctive vs a typical gym template:** Club site with a sticky orange CTA class and Playtomic court booking behind the primary buttons.

Screenshot: screens/xnrgy-desktop.png

### 1Rebel (UK) (1rebel-uk)

URL: https://www.1rebel.com/en-gb (final: https://www.1rebel.com/en-gb, HTTP 200) · London, UK (13 clubs per meta); UAE site exists · type: mega-club / boutique chain · provenance: B (root 1rebel.com is only a UK/UAE country chooser; UK site scraped as a second call) · rank #13 (4/8) · archetype B: B Offer-led banner + ticker + event strip

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: header BUY / BOOK / SHOP, hero "Get membership", ticker offer; no sticky CTA class; navigation aria-label present.
- Schedule or booking entry on the homepage: "Upcoming events" strip (3 events) on the homepage; class timetable behind BOOK.
- Booking / commerce vendor evidence: shop.1rebel.com, app-store link, StudentBeans, Klaviyo-style manage.kmail-lists.com, rebelradar.1rebel.com, goaffpro affiliate; Cookiebot; no wallet-pay hint.
- Mobile navigation evidence: nav aria-label="navigation ac..." (3 hamburger-string refs).
- Mobile media: Videos use blob: sources (script-set), playsinline + webkit-playsinline.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Lime ticker strip across the top repeating "NEW TO 1REBEL? GET 5 SESSIONS FOR GBP 59". White header: WORKOUTS / CLUBS / TRAINERS / EVENTS, REBEL logo centred, BUY / BOOK / SHOP + account icon. Full-bleed ultraviolet-graded photograph of a Reformer class (arms up on cables). Left text: lime label "ALL-ACCESS SIX MONTH EXCLUSIVE", "GET 50% OFF YOUR FIRST MONTH" in tall condensed white caps, paragraph, white rectangular "GET MEMBERSHIP". Pale-lime "UPCOMING EVENTS" strip below the hero with three dated event cards (date, trainer, club) and a lime "VIEW ALL".
- Headline and voice: "GET 50% OFF YOUR FIRST MONTH" · Direct, offer-and-habit logic ("Members train 4x more often than package holders")
- Colour system: Ultraviolet photo grade (#380D51, #4F1D7B), lime/pale-lime (#F8F9EB band) accent, white. Measured palette: #380D51 28%, #F8F9EB 22%, #0F0723 22%, #4F1D7B 12%; mean luminance 0.36.
- Typography: Tall condensed display caps for headlines + small mono-style tracked caps for labels (from screenshot); self-hosted hashed woff2 (names not in HTML).
- Navigation: White header, centred logo, BUY / BOOK / SHOP trio on the right.
- First scroll (HTML heading order): H1 offer -> BACK TO SCHOOL -> INTRODUCING RADIATE -> 5 SESSIONS FOR GBP 59 -> THE ULTIMATE FITNESS DESTINATION (RADIATE, REFORMER, RESHAPE, RIDE, RUMBLE, RESET) -> TRAIN WITH US -> ULTIMATE EXPERIENCE (DJ playlists, nightclub lights + audio, post-session shakes, luxury skincare + facilities).
- Most distinctive section: Dated "Upcoming events" strip directly under the hero; colour-graded class photography.
- Primary action (desktop): "GET MEMBERSHIP" (white) and the header BUY / BOOK / SHOP trio.
- Media mix / density: Photography + 2 autoplay loop playsinline videos (blob: sources = adaptive streaming set by script). Busy / structured.
- Generic here: Promo ticker + percent-off hero. Distinctive here: Violet colour grade, lime accent, events strip with dates on the homepage.

**Motion (what the HTML proves):** Ticker marquee; 2 video tags with blob: URLs (MSE/adaptive playback). No animation library name visible. Motion not observable statically.

**Stack (HTML):** Next.js + Sanity CMS; Cookiebot; goaffpro affiliate. Fonts: unknown (4 hashed next/font woff2). Booking: not visible (BOOK link). Checkout/store: shop.1rebel.com. Other: kmail-lists (Klaviyo), goaffpro affiliate.

**Distinctive vs a typical gym template:** A violet-graded hero with a lime ticker and a dated event strip - the only chain here that puts upcoming sessions right under the hero.

Screenshot: screens/1rebel-uk-desktop.png

### FINNS Recreation Club (finns)

URL: https://finnsrecclub.com/ (final: https://finnsrecclub.com/, HTTP 200) · Bali, Indonesia (FINNS Bali Resort; opening May 2027) · type: mega-club / lifestyle (pre-opening teaser) · provenance: K: own candidate (Bali competitor context), no award claim · rank #14 (4/8) · archetype H: H Teaser with 3D renders

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: only "Learn more"; no pass/membership sale; viewport-fit=cover.
- Schedule or booking entry on the homepage: None.
- Booking / commerce vendor evidence: No commerce; Ahrefs analytics script; links to finnslifestylevillage.com; no wallet hint.
- Mobile navigation evidence: nav aria-label="Menu" (Elementor).
- Mobile media: No video; images only.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed 3D architectural render of a large open gym hall: teal LED strip lighting along the roof trusses, timber floor, rows of strength machines and a "FINNS FITNESS CENTRE" sign. White semi-opaque top bar with the FINNS Recreation Club logo and a dark "LEARN MORE" button. No headline in the hero. "Keep Scrolling" pill at the bottom.
- Headline and voice: None in hero ("First Look: Stage 1 Opening May 2027" below) · Pre-opening, descriptive
- Colour system: Teal, black, white; render look. Measured palette: #0B0B0B 20%, #5D5E58 18%, #1C1E1B 18%, #2C2A26 16%; mean luminance 0.34.
- Typography: Adobe Fonts kit (name not resolved) + Font Awesome.
- Navigation: Top bar with logo and Learn More only.
- First scroll (HTML heading order): H2 "First Look: Stage 1 Opening May 2027" -> "The Ultimate Open Gym" -> "Performance & Movement Studios" -> "Recovery & Wellness Sanctuary" -> "Championship Golf Simulators" (each tagged "Stage 1").
- Most distinctive section: Staged-opening labels and render-led hero.
- Primary action (desktop): "LEARN MORE" only; no pass or membership sale yet.
- Media mix / density: 3D renders; no video. Minimal.
- Generic here: Render carousel + scroll prompt. Distinctive here: Recovery & Wellness Sanctuary named as a pillar next to gym and golf simulators.

**Motion (what the HTML proves):** GSAP (gsap.min.js) + ThePlus ScrollTrigger script, Lottie config string, Swiper (270 refs), IntersectionObserver. Motion not observable statically.

**Stack (HTML):** WordPress + Elementor + ThePlus addons; GSAP + ScrollTrigger; Lottie; Swiper. Fonts: Adobe Fonts kit (names unresolved); Font Awesome. Booking: none (pre-opening). Checkout/store: none. Other: Ahrefs analytics.

**Distinctive vs a typical gym template:** A pre-opening teaser: render-led hero with a staged roadmap; local scale reference for a Bali club (opens May 2027).

Screenshot: screens/finns-desktop.png

### Gymshark (gymshark)

URL: https://www.gymshark.com/ (final: https://www.gymshark.com/, HTTP 200) · Solihull, UK (HQ); US store served in this capture · type: apparel brand / e-commerce · provenance: B (main store; the "Lifting Club" landing page was not located without a search) · rank #15 (4/8) · archetype F: F Product / e-commerce hero

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: burger button class (burger_burger), bag icon, "Shop" CTAs; separate 9x16 mobile video; viewport allows zoom (maximum-scale=2).
- Schedule or booking entry on the homepage: Not applicable (store).
- Booking / commerce vendor evidence: Shopify (cdn.shopify.com x187) + Contentful (708 refs); PayPal + Klarna in payload; Apple Pay icon (aria-label "Apple Pay") in the payment-icon row (hint, not proof of a wallet button); Braze, Dynamic Yield, Intercom, OneTrust, Meta Pixel.
- Mobile navigation evidence: Burger button (burger_burger), manifest link.
- Mobile media: "SEPT_SEASONAL_WOMENS_9x16_MOBILE.mp4" vs "..._8x3_WEB_BANNER.mp4"; "CC_AW26_MOBILE.mp4".

**Desktop (1920x1080 viewport screenshot)**

- Hero: Promo bar "Free standard shipping on orders over $75" with a pause button. White header: Women / Men / Accessories / Explore left, GYMSHARK wordmark centred, search field + heart + account + bag right. Full-width video/photo of a model holding a dumbbell, cropped tight and softly defocused; bottom-left "NEW IN: GYMSHARK X WHITNEY" in condensed caps, sub copy and two buttons ("Shop Whitney" white, "Shop new in" outlined). Mute and pause controls bottom right. Below: product carousel "GYMSHARK X WHITNEY - View All".
- Headline and voice: "NEW IN: GYMSHARK X WHITNEY" · Creator-collab retail ("every gym girl's favourite")
- Colour system: Neutral white/grey UI, warm skin tones; no brand accent colour in view. Measured palette: #1E1917 25%, #FFFFFF 19%, #7E5342 18%, #F5F5F4 15%; mean luminance 0.52.
- Typography: Condensed bold caps wordmark/headings; font files not in static HTML.
- Navigation: Mega-menu with search; wishlist, account, bag icons.
- First scroll (HTML heading order): Hero -> collection carousels (New In, Everyday Seamless, For the Hybrids, The Bestsellers) -> Gymshark x Whitney grid -> Conditioning Club -> Popular right now.
- Most distinctive section: Hero video with sound/pause controls and per-breakpoint video files.
- Primary action (desktop): "Shop Whitney" / "Shop new in".
- Media mix / density: Video (4 muted loop playsinline with poster) + product photography. Busy (store).
- Generic here: Store grid and carousels. Distinctive here: Art-directed video per breakpoint; creator-led hero.

**Motion (what the HTML proves):** Slick slider (1 ref); 4 muted loop videos with poster. Motion not observable statically.

**Stack (HTML):** Next.js + Shopify (headless) + Contentful; Dynamic Yield; Braze; Intercom. Fonts: unknown (not in static HTML). Booking: n/a (store). Checkout/store: Shopify (headless) + Contentful. Other: Braze, Dynamic Yield, Intercom.

**Distinctive vs a typical gym template:** Retail reference: a different mp4 for phone (9x16) and desktop (8x3 banner) and a Shopify cart wired into a Contentful-driven homepage.

Screenshot: screens/gymshark-desktop.png

### Life Time (lifetime)

URL: https://www.lifetime.life/ (final: https://www.lifetime.life/, HTTP 200) · US (190+ locations, HQ Minnesota - own knowledge) · type: mega-club / luxury · provenance: B · rank #16 (4/8) · archetype A: A Cinematic statement + locator CTA

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: hamburger comment in header; hero action is Find Your Club; separate 9x16 portrait hero video; no sticky class.
- Schedule or booking entry on the homepage: None (club finder only).
- Booking / commerce vendor evidence: my.lifetime.life member site, shop.lifetime.life, Salesforce web-to-lead, Adobe Launch, Hotjar, Datadog RUM, OneTrust; no wallet hint.
- Mobile navigation evidence: Hamburger section comment (1 ref), manifest link.
- Mobile media: "national-homepage-5-20-9x16.mp4" and "..-16x9.mp4" (portrait and landscape cuts).

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed macro video of a woman lying face-down on a treatment bed (teal wall, skin and closed eyes, soft focus). Centred light serif "Make healthy your way of life." and "Join before the fall price adjustments." Near-zero chrome: hairline rule, "FIND A LOCATION" menu icon left, LIFE TIME wordmark centred, pause button top right. A glass-style pill with a club thumbnail "FIND YOUR CLUB ->" at the bottom.
- Headline and voice: "Make healthy your way of life." · Calm brand statement; price nudge as a quiet second line
- Colour system: Warm skin/terracotta (#5A392B, #4E271B) with teal wall; white text. Measured palette: #5A392B 20%, #2C1C18 20%, #807F7B 17%, #4E271B 16%; mean luminance 0.31.
- Typography: Light editorial serif headline + small tracked-caps UI; names not in static HTML.
- Navigation: Burger-style "Find a location" left, wordmark centre; no visible nav list.
- First scroll (HTML heading order): H1 "Going beyond a gym with over 190 Athletic Country Club locations across the nation..." -> "Find your club" (location finder).
- Most distinctive section: Spa-like macro imagery for a mega-club; location pill with thumbnail.
- Primary action (desktop): "FIND YOUR CLUB" (pill).
- Media mix / density: Video (12 tags; 11 muted loop playsinline; 8 poster). Minimal.
- Generic here: Centred serif statement on cinematic video. Distinctive here: Skin/treatment-bed macro image; almost no UI.

**Motion (what the HTML proves):** 12 video tags with 9x16 and 16x9 hero files, marquee (7). No animation library detected. Motion not observable statically.

**Stack (HTML):** Adobe Experience Manager + Salesforce web-to-lead; Adobe Launch; OneTrust. Fonts: unknown (not in static HTML). Booking: my.lifetime.life (custom). Checkout/store: shop.lifetime.life. Other: Salesforce web-to-lead, Adobe Launch, Hotjar.

**Distinctive vs a typical gym template:** A mega-club hero that shows a spa bed, not a gym, with a single location pill as the only call to action.

Screenshot: screens/lifetime-desktop.png

### Remedy Place (remedyplace)

URL: https://www.remedyplace.com/ (final: https://www.remedyplace.com/, HTTP 200) · New York, US (Flatiron, SoHo), West Hollywood, Boston Seaport · type: recovery club · provenance: B · rank #17 (4/8) · archetype A: A Cinematic dark statement (signage as hero)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: centred Reservations + header Book; no sticky-CTA class; no hamburger class found in static HTML (nav pattern on phone unknown).
- Schedule or booking entry on the homepage: No timetable; "Reserve a Remedy" is a homepage section; per-club reserve links.
- Booking / commerce vendor evidence: Zenoti webstore/booking (remedyplace.zenoti.com x12, reserve.remedyplace.com x4), Klaviyo form, app-store links, Termly consent; no wallet hint; Sanity CDN images (407).
- Mobile navigation evidence: Unknown (no burger/menu-button class in static HTML; viewport-fit=cover set).
- Mobile media: 2 videos, playsinline.
- Mobile screenshots by other agents: research/mobile-journey-b-v1.0/remedy-place/ (30 png)

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed image/video of a dark vertical-slat walnut wall carrying 3D metal letters of the brand name set on an angle ("REMEDY PL..." cropped). Centred headline "SELF-CARE MADE SOCIAL" in light high-contrast display caps and a pale rectangular "RESERVATIONS" button. Transparent header: wide-tracked wordmark; LOCATIONS v / OUR OFFERINGS v / MEMBERSHIPS / EVENTS / ABOUT / SHOP v and a white "BOOK" box. Below: dark section with a centred intro paragraph.
- Headline and voice: "SELF-CARE MADE SOCIAL" · Short brand-category claim ("world's first Social Wellness Club")
- Colour system: Warm walnut browns (#49392F, #58483C), near-black #1C1917, bone/cream buttons; Tailwind tokens like bg-earthLight. Measured palette: #49392F 24%, #1C1917 21%, #58483C 19%, #352921 14%; mean luminance 0.21.
- Typography: Light display caps, wide-tracked small-caps nav; exact families not in static HTML.
- Navigation: Transparent top bar: 6 items with drop-downs + "BOOK" box.
- First scroll (HTML heading order): Explore / Reserve a Remedy / Become a Member -> Our Clubs (Seaport, Flatiron, Soho, West Hollywood) -> Remedy Categories (Tech-Remedies, Alternative Medicine, Biometric Testing, Classes) -> Our Remedies (Guided Ice Bath, Sauna Suites, Hyperbaric Chamber, Contrast Suites, Red Light Bed, Lymphatic Compression).
- Most distinctive section: Treatment cards (Splide hover-card carousel) per remedy; the brand sign itself as the hero image.
- Primary action (desktop): "RESERVATIONS" centred in hero and "BOOK" in the header; per-club reserve links in the menu.
- Media mix / density: Photography/video (2 autoplay muted loop mp4 on Sanity). Minimal / luxurious.
- Generic here: Centred statement + single button over dark media. Distinctive here: Material-led image (wood + metal letters), category-defining headline, club-by-club reservations.

**Motion (what the HTML proves):** Locomotive Scroll container (data-scroll-container), Splide carousels (74 refs), 2 autoplay videos. Motion not observable statically.

**Stack (HTML):** Next.js + Sanity CMS; Locomotive Scroll; Splide; Zenoti booking. Fonts: unknown (not in static HTML). Booking: Zenoti (remedyplace.zenoti.com, reserve.remedyplace.com). Checkout/store: Zenoti webstore. Other: Klaviyo.

**Distinctive vs a typical gym template:** The physical sign wall is the hero image; reservations are organised per club and per treatment.

Screenshot: screens/remedyplace-desktop.png

### Third Space (thirdspace)

URL: https://www.thirdspace.london/ (final: https://www.thirdspace.london/, HTTP 200) · London, UK · type: mega-club / luxury · provenance: B · rank #18 (4/8) · archetype A: A Cinematic dark statement (type contrast)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: "Join Us" modal trigger; mobile menu opened by an event handler (@open-mobile-menu.window); no sticky CTA class.
- Schedule or booking entry on the homepage: "Timetable" and "All Classes" in nav; no schedule on the homepage.
- Booking / commerce vendor evidence: HubSpot forms (16 refs), Adyen dns-prefetch (payment), Google Maps API; no Stripe/Shopify; no wallet hint; GA4 + GTM.
- Mobile navigation evidence: Mobile menu event handler (@open-mobile-menu.window), hamburger string x3.
- Mobile media: No video tag; images via WordPress uploads.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed near-black photographic frame: an athlete in a side-plank holding a kettlebell under a ceiling of cross-shaped neon-light fixtures (cold white-blue), rack and bag wall behind. Centred serif headline "Training for life" with an italic "for"; the athlete's raised arm and kettlebell sit in the gap of the headline. Down-chevron at the bottom edge. Transparent header: serif caps wordmark "THIRD SPACE", small tracked-caps nav (CLUBS, MEMBERSHIP, CLASSES +, PERSONAL TRAINING +, WELLNESS +) and a white pill "JOIN US" far right.
- Headline and voice: "Training for life" · Understated, literary London wit (H3: "In our glorious, maddening city, your workout can be the difference between a good day and bad.")
- Colour system: Near-black navy (#06080D/#0D141B), cold neon white-blue, skin tones; one white pill. Measured palette: #06080D 21%, #0D141B 20%, #020305 18%, #212B36 18%; mean luminance 0.1.
- Typography: High-contrast serif display with italic emphasis + small tracked-caps sans nav. Static HTML lists only Roboto and Google Sans Text (UI); the headline face is not in the HTML.
- Navigation: Transparent top bar: 5 items with "+" expanders, white "Join us" pill; full list in markup includes Timetable, On Demand, Performance Lab, Natural Fitness Food, Nutrition, Sports Med, Recovery Spa, Journal.
- First scroll (HTML heading order): H3 statement -> H3 "Third Space are London's luxury health clubs..." -> club cards by location (Islington, Canary Wharf, Wood Wharf, Battersea ...).
- Most distinctive section: The neon-cross ceiling hero and "Recovery Spa" / "Performance Lab" as top-level nav.
- Primary action (desktop): White pill "JOIN US" (header, opens a modal); chevron invites scroll.
- Media mix / density: Photography (stills; video loaded by script - Vimeo player dns-prefetch present, no video tag in static HTML). Minimal.
- Generic here: Dark cinematic hero + centred serif is the premium-club default. Distinctive here: Italic word inside a serif headline, neon-cross light fixtures as the brand picture.

**Motion (what the HTML proves):** Flickity sliders (9 refs); Vimeo player prefetch suggests a script-loaded video. Motion not observable statically.

**Stack (HTML):** WordPress (custom theme) + Alpine-style mobile-menu events; HubSpot forms; Flickity. Fonts: Roboto; Google Sans Text (UI); headline face unknown. Booking: not visible (timetable pages). Checkout/store: Adyen (dns-prefetch). Other: HubSpot forms.

**Distinctive vs a typical gym template:** Serif headline with one italic word over a single art-directed neon-lit gym frame; wellness/recovery are first-level nav items.

Screenshot: screens/thirdspace-desktop.png

### Warehouse Gym (warehousegym)

URL: https://whgym.com/ (final: https://whgym.com/, HTTP 200) · Dubai, UAE · type: mega-club / urban chain · provenance: K: own candidate (Dubai gym brand; search 6 mentioned a Dubai brutalist gym without naming it) · rank #19 (4/8) · archetype A: A Colour-lit club photo with bold headline

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: hamburger container; header Free Trial + Join Now; chatbot widget; app-store link.
- Schedule or booking entry on the homepage: Class categories listed; no timetable widget.
- Booking / commerce vendor evidence: Shop and Buy a Voucher links on the homepage; no vendor script found; no wallet hint; GTM.
- Mobile navigation evidence: hamburger_container (5 refs), manifest link.
- Mobile media: 1 video; poster set.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed wide photograph of an industrial gym lit magenta, violet and green with a graffiti mural. Centred heavy rounded sans headline "One Membership" in white and "Multiple Experiences" in yellow. A black V-shaped (chevron) cut with a yellow edge closes the hero. Black header: yellow shield logo, Membership / Clubs v / Personal Training / Classes v / Shop v / More v, yellow-outlined "Free Trial" and solid yellow "Join Now". Chatbot bubble bottom right.
- Headline and voice: "One Membership Multiple Experiences" · Plain promise
- Colour system: Black + yellow + neon purples (#49254E, #8C588E). Measured palette: #040608 28%, #49254E 18%, #8C588E 16%, #474B68 13%; mean luminance 0.31.
- Typography: Montserrat-style heavy sans (Bebas Neue and Didact Gothic loaded from Google Fonts).
- Navigation: Black bar, 6 items, two buttons; club list (20+ clubs) in the menu.
- First scroll (HTML heading order): H1 -> Warehouse Gym Shop -> WHGym Gift Voucher -> Emirates Towers Now Open -> Personal Training -> Our Classes (Strength, Cardio, Mobility, Kids) -> Our Locations.
- Most distinctive section: Gift voucher and shop blocks on the homepage.
- Primary action (desktop): "Join Now" and "Free Trial" in the header.
- Media mix / density: Video (1 autoplay muted loop mp4/webm with poster) + photography. Busy.
- Generic here: Nightclub-lit gym photo with a headline. Distinctive here: Yellow chevron cut; shop/voucher/trial all in the first screens.

**Motion (what the HTML proves):** AOS (data-aos on body), Swiper (30), Slick; 1 autoplay hero video. Motion not observable statically.

**Stack (HTML):** Custom PHP/jQuery (assets/ paths) + AOS + Swiper + Slick. Fonts: Bebas Neue; Didact Gothic (Google); headline face not verified. Booking: not visible. Checkout/store: shop + voucher pages. Other: -.

**Distinctive vs a typical gym template:** A neon-lit club photo, a yellow chevron cut, and Shop / Voucher / Free Trial blocks all on the homepage.

Screenshot: screens/warehousegym-desktop.png

### AIRE Ancient Baths (aire)

URL: https://beaire.com/en (final: https://beaire.com/en, HTTP 200) · Barcelona, ES (centres in NY, Toronto, Chicago, London, Seville, Almeria, Copenhagen...) · type: recovery / bathhouse · provenance: K: own candidate, no award claim · rank #20 (4/8) · archetype C: C Booking-bar-first hero over cinematic photo

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: form id="booking-quickform" in hero (centre/people/date) + Book; "Gift" button.
- Schedule or booking entry on the homepage: Date picker is the schedule entry; no timetable list.
- Booking / commerce vendor evidence: Booking quick-form leads to a separate flow (vendor not visible in HTML); gift boxes; VWO A/B (vwoCookiebotConsent), Cookiebot, GTM/GA; no wallet-pay hint.
- Mobile navigation evidence: Hamburger class "hamburger" (4 refs) + manifest link.
- Mobile media: No video; Swiper hero images.

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed photograph of a candle-lit brick bath hall with a pale-turquoise pool and a large amphora. Centred light wide-tracked caps "AIRE ANCIENT BATHS". Beneath it a booking bar of segmented selects (CENTER v | PEOPLE v | DATE v) with a gold "BOOK" button, a divider and an outlined "GIFT" button. Dark header: logo left, "CENTERS v", "I HAVE A BOX", bag icon. A yellow tab "Coming soon to AIRE?" sits bottom right.
- Headline and voice: "AIRE ANCIENT BATHS" / H2 "WHERE TIME DOES NOT EXIST" · Calm, atmospheric, time-suspension
- Colour system: Warm near-black (#130D07), turquoise water, muted gold (#B79F5A) button; very low saturation elsewhere. Measured palette: #291D12 20%, #130D07 19%, #211910 18%, #2E2C23 17%; mean luminance 0.18.
- Typography: Thin geometric caps display (wordmark); Lato (Google) for body; display face not in HTML.
- Navigation: Dark header: logo, CENTERS dropdown (12 cities), "I have a box" (gift redemption), bag; 4 languages.
- First scroll (HTML heading order): H1 -> "Where time does not exist" -> The AIRE experience (The baths, Massages and rituals) -> Two formats (Gift box, Digital gift) -> Recommended experience.
- Most distinctive section: The booking bar inside the hero; gift-box redemption in the header.
- Primary action (desktop): Gold "BOOK" button in the quick-form (centre / people / date).
- Media mix / density: Photography (Swiper hero); no video; no illustration. Minimal.
- Generic here: Hero slider (Swiper) and dark header. Distinctive here: Date/people/centre booking inside the image; gift as a first-class action.

**Motion (what the HTML proves):** Swiper hero (home-hero-swiper, 195 refs); no scroll library detected. Motion not observable statically.

**Stack (HTML):** Nuxt (Vue) SSR; Swiper hero; VWO test; Cookiebot. Fonts: Lato (display face unknown). Booking: custom booking quick-form. Checkout/store: gift boxes. Other: VWO.

**Distinctive vs a typical gym template:** The hero image carries a working centre/people/date booking bar plus a gift button - purchase starts above the fold.

Screenshot: screens/aire-desktop.png

### John Reed Fitness (johnreed)

URL: https://johnreed.fitness/en-de (final: https://johnreed.fitness/en-de, HTTP 200) · Germany (RSG Group; en-de path) · type: mega-club / lifestyle chain · provenance: K: own candidate (music/design-led club brand), no award claim · rank #21 (3/8) · archetype B: B Offer-led hero over lifestyle photography

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: magenta Join Now; viewport meta lacks initial-scale (width=device-width only); Branch deep link (johnreed.app.link).
- Schedule or booking entry on the homepage: None on the homepage; club finder.
- Booking / commerce vendor evidence: my.johnreed.fitness member portal, Branch app link, Cookiebot, GTM/GA4; no wallet hint.
- Mobile navigation evidence: No burger class found in static HTML (unknown); manifest link.
- Mobile media: "DE_JR_spring2022_1080x1920_website.mp4" (portrait file).

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed bright studio photograph: two women seated on a wooden floor amid orange and lilac balls, wood-slat mirrored wall behind. Left text: small caps eyebrow "FALL SPECIAL - LIMITED TIME ONLY", "HALF YEAR, HALF PRICE*" in heavy geometric caps, magenta "SAVE NOW". Black header with JR monogram, TRAINING / MUSIC / DESIGN / EVENTS / CLUBFINDER and a magenta "JOIN NOW".
- Headline and voice: "HALF YEAR, HALF PRICE*" · Promo-driven, lifestyle
- Colour system: Black header, magenta CTAs (#BE6247 measured mix with warm wood tones), saturated photography. Measured palette: #53292F 25%, #191518 19%, #434337 16%, #9D6B5E 14%; mean luminance 0.29.
- Typography: Geometric heavy sans (Adobe Fonts kit; names not resolved).
- Navigation: Black bar: TRAINING, MUSIC, DESIGN, EVENTS, CLUBFINDER + Join Now.
- First scroll (HTML heading order): H1 offer -> "Not your average gym" -> FALL SPECIAL -> John Reed Stuttgart -> Our clubs -> Memberships -> "This is John Reed".
- Most distinctive section: MUSIC and DESIGN as top-level navigation (brand pillars).
- Primary action (desktop): Magenta "Save now" and "Join now".
- Media mix / density: Photography (4 mp4 refs incl. a 1080x1920 file; no video tag in static HTML). Medium.
- Generic here: Percent-off hero. Distinctive here: Music/design pillars in nav.

**Motion (what the HTML proves):** Swiper (172 refs); no scroll library. Motion not observable statically.

**Stack (HTML):** Next.js + Cloudinary (res.cloudinary.com/mcfit) + Vercel; Cookiebot; Adobe Fonts. Fonts: Adobe Fonts kit (names unresolved); 7 hashed woff2. Booking: my.johnreed.fitness (custom). Checkout/store: same. Other: Branch deep links.

**Distinctive vs a typical gym template:** A promo hero, with "Music" and "Design" as nav pillars - the club-as-lifestyle idea in the navigation only.

Screenshot: screens/johnreed-desktop.png

### Rite Bali (ritebali)

URL: https://ritebali.com/ (final: https://ritebali.com/, HTTP 200) · Canggu & Pererenan, Bali, Indonesia · type: premium gym club (local competitor) · provenance: B (Raoul named; domain from the Semrush files) · rank #22 (3/8) · archetype A: A Cinematic dark statement (no hero CTA)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: no hero CTA; sticky-header custom element; cart drawer in markup; WhatsApp wa.link.
- Schedule or booking entry on the homepage: "Schedule" in the second nav (separate page).
- Booking / commerce vendor evidence: Shopify (cdn.shopify.com x8, cart drawer text on the homepage), Shop Pay + PayPal strings in Shopify scripts (hint), hCaptcha, GA4; no booking vendor in the homepage HTML.
- Mobile navigation evidence: Theme icon-hamburger + is="sticky-header".
- Mobile media: 5 videos (3 with muted/loop/playsinline + poster).

**Desktop (1920x1080 viewport screenshot)**

- Hero: Dark video of the concrete-and-glass club interior shot from below (stairs, balustrade, plants, neon sign). Centred light serif "A Place to Feel Whole" and nothing else. Solid dark-grey header: RITE serif logo left; Club / Memberships / Classes / Training / Members Benefits / About centred.
- Headline and voice: "A Place to Feel Whole" · Quiet, wellbeing-led
- Colour system: Charcoal/near-black (#2A2928), white; no accent. Measured palette: #2A2928 22%, #040404 21%, #100F0D 17%, #090908 15%; mean luminance 0.11.
- Typography: "Rector TRIAL" (serif; trial-licence string in the font name) + Aeonik; Lato/Montserrat preloads from the theme.
- Navigation: Solid bar; second nav (Memberships, Schedule, Class Descriptions, Personal Training, RITE Coaches, Events, Partners, Contact, FAQ).
- First scroll (HTML heading order): H2 "A Place to Feel Whole" -> Start Your Journey -> membership cards (KITAS & Work Permit Benefits, The Rite Referral, Built in Duos, Return to Routine, Plus One Club) -> Expert-Led Guidance -> Our Partners -> Pererenan -> Be a Part of RITE -> Contact Us.
- Most distinctive section: Membership cards framed as situations (visa/work permit, duo, return to routine).
- Primary action (desktop): None in the hero; "Memberships" in nav.
- Media mix / density: Video (5 tags, Shopify-hosted mp4 720p) + photography. Minimal.
- Generic here: Same dark video + centred serif pattern as Nirvana, Third Space, Life Time. Distinctive here: Membership offers written for expats (KITAS).

**Motion (what the HTML proves):** marquee-element custom element (3), 5 video tags; ScrollSmoother-style data-speed attributes (weak). Motion not observable statically.

**Stack (HTML):** Shopify theme (custom elements) + Shop Pay/PayPal strings; video hero. Fonts: Rector TRIAL; Aeonik; Lato; Montserrat. Booking: not visible. Checkout/store: Shopify (cart drawer in HTML). Other: hCaptcha, WhatsApp.

**Distinctive vs a typical gym template:** A hero with no button at all; the commerce sits in Shopify-powered membership cards below.

Screenshot: screens/ritebali-desktop.png

### Reload Sanctuary (reloadsanctuary)

URL: https://reloadsanctuary.com/ (final: https://reloadsanctuary.com/, HTTP 200) · Canggu, Bali, Indonesia · type: premium gym + recovery (local competitor) · provenance: B (Raoul named; domain from the Semrush files) · rank #23 (3/8) · archetype A: A Cinematic video statement (not viewed)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: "Day Pass" / "Get Day Pass" / "Join Now" / "Book on the App" CTAs, WhatsApp community links (3), separate portrait hero video; site-header__burger class.
- Schedule or booking entry on the homepage: "Upcoming classes" and "Book a class" present; schedule is in the GymMaster app (app.reloadsanctuary.com x18 links).
- Booking / commerce vendor evidence: GymMaster (reloadsanctuary.gymmasteronline.com portal), shop link, WhatsApp, Meta Pixel, GA4; no Stripe/Shopify script found; no wallet-pay hint.
- Mobile navigation evidence: site-header__burger (15 refs).
- Mobile media: "hero-mobile-v2.mp4" + "hero-desktop-v5.mp4".

**Desktop (1920x1080 viewport screenshot; NOT VIEWED by this agent)**

- Hero: NOT VIEWED. From HTML: video before H1; hero-desktop-v5.mp4 and hero-mobile-v2.mp4 (self-hosted, separate cuts); 5 video tags (all loop + playsinline + poster); H1 "Train. Recover. Fuel. Connect."; H2 "One Sanctuary. Everything You Need."; facility H3s (Train & Classes, Recovery, Pool, Co-working (Coming Soon), Restaurant, Shop). Screenshot is very dark (mean luminance 0.08).
- Headline and voice: "Train. Recover. Fuel. Connect." · Four-verb manifesto
- Colour system: Firecrawl branding: dark #050505, gold-beige #D9BD97, deep green #06281A, WhatsApp green accent; radius 10px. Measured palette: #211912 22%, #190F09 21%, #110D0A 18%, #1A130E 17%; mean luminance 0.08.
- Typography: Poppins 400/600/700 (self-hosted woff2).
- Navigation: Membership, The Gym, Events, Classes, Trainers, Recovery & Wellness, Restaurant, About Us, Blog, Sign In.
- First scroll (HTML heading order): Reload Social Vol. 3 (event) -> H1 -> "One Sanctuary. Everything You Need." -> Facilities (Train, Recover, Pool, Co-working, Restaurant, Shop) -> The Sanctuary -> "More Than a Club, a Community" -> event recap.
- Most distinctive section: Day Pass + Book on the App + Visit the Shop together on the homepage.
- Primary action (desktop): "Get Day Pass", "Join Now", "Book on the App", "Book a Class".
- Media mix / density: Video (portrait + landscape cuts) + photography. Medium (inferred; not viewed).
- Generic here: Unknown (not viewed). Distinctive here: Sells day passes, app booking and shop from one homepage; separate mobile hero cut.

**Motion (what the HTML proves):** Marquee (2), 5 loop/playsinline videos; no animation library. Motion not observable statically.

**Stack (HTML):** WordPress + GymMaster portal; separate mobile/desktop hero videos; Poppins. Fonts: Poppins 400/600/700. Booking: GymMaster (gymmasteronline.com portal + app.reloadsanctuary.com). Checkout/store: shop link (platform not visible). Other: Meta Pixel, WhatsApp.

**Distinctive vs a typical gym template:** Closest local analogue of the Elite Fit brief: day pass, class booking in an app, shop and recovery on one WordPress homepage.

Screenshot: screens/reloadsanctuary-desktop.png

### GymNation (gymnation)

URL: https://gymnation.com/ (final: https://gymnation.com/, HTTP 200) · Dubai, UAE (GCC and Asia, 50+ locations) · type: mega-club / budget chain · provenance: K: own candidate (Middle East big-brand gym), no award claim · rank #24 (3/8) · archetype G: G Gate / chooser with free day-pass form

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: form (country, name, email, phone) with a single submit; viewport standard; layout not observable.
- Schedule or booking entry on the homepage: None.
- Booking / commerce vendor evidence: No payment/booking vendor; WhatsApp share link; no wallet hint.
- Mobile navigation evidence: No navigation in HTML.
- Mobile media: No video.

**Desktop (1920x1080 viewport screenshot)**

- Hero: White page. Navy pill-shaped bar (rounded bottom edge, yellow outline) with the yellow G logo. "GYMNATION LOCATIONS - 50+ locations across the GCC and Asia." Left: interactive map with yellow-tinted KSA, BHR, UAE pins, a GCC / ASIA toggle and the hint "Click a country on the map to continue". Right: card "SIGN UP FOR YOUR FREE DAY PASS TODAY!" with country select, first name, email, phone and a yellow SUBMIT.
- Headline and voice: "GYMNATION LOCATIONS" / "SIGN UP FOR YOUR FREE DAY PASS TODAY!" · Utility, direct
- Colour system: Navy + yellow + white. Measured palette: #FFFFFF 59%, #828652 16%, #E1E1DD 15%, #F5F5F5 6%; mean luminance 0.89.
- Typography: Montserrat + Noto Kufi Arabic (RTL support), self-hosted.
- Navigation: None on this gate page.
- First scroll (HTML heading order): Single screen: map + day-pass form (H1 locations, H3s UAE / KSA / BHR / Thailand, H3 free day pass).
- Most distinctive section: A day-pass lead form beside a country map as the whole homepage.
- Primary action (desktop): Yellow "SUBMIT" (free day pass).
- Media mix / density: Map (Mapbox canvas); no photography. Minimal / functional.
- Generic here: Location gate. Distinctive here: Free day pass offered before any brand story.

**Motion (what the HTML proves):** Mapbox GL canvas (interactive map). Motion not observable statically.

**Stack (HTML):** Umbraco CMS; Mapbox GL map; WhatsApp share. Fonts: Montserrat; Noto Kufi Arabic. Booking: lead form only. Checkout/store: none. Other: WhatsApp.

**Distinctive vs a typical gym template:** The root domain is a country gate with a free-day-pass form - a lead-first pattern, not a brand showcase.

Screenshot: screens/gymnation-desktop.png

### Loyly Helsinki (loyly)

URL: https://www.loylyhelsinki.fi/ (final: https://www.loylyhelsinki.fi/, HTTP 200) · Helsinki, Finland · type: sauna / restaurant destination · provenance: K: own candidate (sauna architecture brand), no award claim · rank #25 (2/8) · archetype U: Unknown (not viewed)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: book-a-table links; Webflow nav button.
- Schedule or booking entry on the homepage: Table booking (Asio); no sauna schedule found.
- Booking / commerce vendor evidence: Asio (varaus.asio.fi), gift cards (lahjakortti.ravintola.fi); no wallet hint.
- Mobile navigation evidence: Webflow burger (navbar_menu-button w-nav-button, 6 refs) with Lottie.
- Mobile media: No video.

**Desktop (1920x1080 viewport screenshot; NOT VIEWED by this agent)**

- Hero: NOT VIEWED. From HTML: Webflow site in Finnish; H1 "Loyly helsinki"; H2 "ainutlaatuinen ja elamyksellinen saunaravintola" (unique experiential sauna restaurant); no video tag. Screenshot palette: blue-grey #717574 and dark #141D23 (sea/sky tones).
- Headline and voice: "Loyly helsinki" / "ainutlaatuinen ja elamyksellinen saunaravintola" · Plain Finnish, descriptive
- Colour system: Firecrawl branding: white bg, grey text #7D7D7D, blue #3898EC (Webflow default - low confidence). Measured palette: #717574 22%, #141D23 22%, #313A3E 16%, #534B48 14%; mean luminance 0.41.
- Typography: "Stem" (Firecrawl branding).
- Navigation: Etusivu (home), Varaa poyta (book a table), ALL DAY MENU, AAMIAINEN (breakfast), BRUNSSI, A LA CARTE, KAHVILA.
- First scroll (HTML heading order): H1 -> H2 -> "Ajankohtaista" (news).
- Most distinctive section: Lottie-animated menu button (navbar_menu-button-lottie).
- Primary action (desktop): "Varaa poyta" (book a table) via varaus.asio.fi (6 links); gift cards via lahjakortti.ravintola.fi.
- Media mix / density: Unknown. Unknown.
- Generic here: Unknown (not viewed). Distinctive here: Unknown (not viewed).

**Motion (what the HTML proves):** Lottie menu button (15 refs), Webflow IX2 (data-w-id x10). Motion not observable statically.

**Stack (HTML):** Webflow + Lottie menu button + IX2; Asio booking. Fonts: Stem (Firecrawl branding). Booking: Asio (varaus.asio.fi). Checkout/store: gift cards (lahjakortti.ravintola.fi). Other: -.

**Distinctive vs a typical gym template:** A sauna-restaurant whose homepage sells table bookings and gift cards; sauna booking not visible in this page version.

Screenshot: screens/loyly-desktop.png

### [solidcore] (solidcore)

URL: https://solidcore.co/ (final: https://solidcore.co/, HTTP 200) · US (studios nationwide) · type: boutique chain · provenance: B · rank #26 (2/8) · archetype B: B Offer-led banner

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: blue Buy Now; Intercom launcher; wfh-hamburger class; app-store link; no sticky class.
- Schedule or booking entry on the homepage: "Book a class" / "My classes" links; no schedule widget on the homepage.
- Booking / commerce vendor evidence: Mindbody (purchase paths /mindbody/purchasegiftcard, 2 refs), Klaviyo, offers.solidcore.co, Intercom (49), accessiBe; no wallet hint.
- Mobile navigation evidence: wfh-hamburger (8 refs).
- Mobile media: No video.
- Mobile screenshots by other agents: research/mobile-journey-a-v1.0/solidcore/ (2 png)

**Desktop (1920x1080 viewport screenshot)**

- Hero: Black band with a letterboxed photograph (narrower than the viewport) of a woman in a plank on a Reformer-style machine. Condensed white caps "NEW CLIENT SPECIAL.", sub "Start your journey with 2 weeks of unlimited classes. You'll be stronger for it.", blue "Buy Now" button. Header: bracket wordmark "[solidcore]", New clients / The workout / Membership & Packages / Studios / My classes, outlined "Log In or Sign Up". Next: white section "THE [SOLIDCORE] DIFFERENCE" with three check-mark bullets and a blue-lit machine photo; black "Explore our exercises"; Intercom launcher bottom right.
- Headline and voice: "NEW CLIENT SPECIAL." · Direct offer, results promise ("Immediate results")
- Colour system: Black hero, white content, electric blue (#246CD7) CTA. Measured palette: #FFFFFF 43%, #020202 34%, #16181E 17%, #AEB7C4 5%; mean luminance 0.5.
- Typography: Switzer Variable (self-hosted); condensed caps headline.
- Navigation: Wordmark + 5 items + outlined login.
- First scroll (HTML heading order): H1 -> "The [solidcore] Difference" (3 benefits) -> "Rise to a new challenge." -> Membership perks (exclusive discounts, bring a friend free, early access to schedule) -> monthly muscle focus calendar -> Download the app -> Start your workout today.
- Most distinctive section: Bracket wordmark as brand device.
- Primary action (desktop): Blue "Buy Now" (hero), "Log in or Sign up".
- Media mix / density: Photography only (no video). Medium.
- Generic here: Offer banner + white feature section with check marks: template-like. Distinctive here: Little beyond the bracket logo.

**Motion (what the HTML proves):** Webflow IX2 (1), no scroll library. Motion not observable statically.

**Stack (HTML):** Webflow + jQuery; Mindbody; Klaviyo; Intercom; accessiBe. Fonts: Switzer Variable. Booking: Mindbody (purchase paths). Checkout/store: offers.solidcore.co. Other: Klaviyo, Intercom, accessiBe.

**Distinctive vs a typical gym template:** Offer banner, three check-mark benefit rows and a Buy Now button: the pattern shared by most offer-led chain sites in this set.

Screenshot: screens/solidcore-desktop.png

### SoulCycle (UK) (soulcycle)

URL: https://www.soul-cycle.com/uk/ (final: https://www.soul-cycle.com/uk/, HTTP 200) · New York, US (HQ); UK site served by the scrape region · type: boutique chain · provenance: B (scrape redirected to /uk/) · rank #27 (2/8) · archetype B: B Offer-led carousel

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: styled-components HamburgerWrapper in a MobileHeader; "Book a Bike" button; cookie bar.
- Schedule or booking entry on the homepage: "Book a Bike" opens booking; no schedule on the homepage.
- Booking / commerce vendor evidence: shop.soul-cycle.com, buyatab.com (gift cards), Optimizely, Amplitude, GTM; no wallet hint.
- Mobile navigation evidence: Hamburger wrapper (4 refs), manifest link.
- Mobile media: No video.
- Mobile screenshots by other agents: research/mobile-journey-a-v1.0/soulcycle/ (22 png)

**Desktop (1920x1080 viewport screenshot)**

- Hero: Full-bleed photograph (instructor and rider high-five in a dark studio, wall slogans behind) with prev/next arrows and two dots. Headline "Get a great deal on your first ride." with "Just GBP 15 to get started." and a yellow "Claim Offer". Dark-grey utility bar: "New to Soul?" (yellow), "Book a Bike", location picker (London), bike icon, cart, "Sign in"; nav SoulConnected / Our Studios / Soul Shop. Below: centred "THE SOULCYCLE EXPERIENCE" in heavy Helvetica. Cookie bar fixed at the bottom.
- Headline and voice: "Get a great deal on your first ride." · Friendly, community
- Colour system: Grey/white UI, SoulCycle yellow CTA. Measured palette: #FFFFFF 34%, #091C1F 29%, #545B58 20%, #D1C3B3 14%; mean luminance 0.58.
- Typography: Helvetica Neue LT Std (9 self-hosted cuts: Roman, Lt, Bd, Md, Th, Cn, CnBlk, Hv, BdOu).
- Navigation: Utility bar (book, location, cart, sign in) above a 3-item nav.
- First scroll (HTML heading order): Carousel hero -> "The SoulCycle Experience" -> Student Savings at SOUL -> Ride to the Rhythm (instructor cards with playlist names).
- Most distinctive section: Instructor cards with signature playlist titles.
- Primary action (desktop): Yellow "Claim Offer" and utility-bar "Book a Bike".
- Media mix / density: Photography carousel; no video tag. Medium.
- Generic here: Offer carousel. Distinctive here: Instructor-and-playlist content.

**Motion (what the HTML proves):** Carousel; Marquee container (30 refs); no animation library detected. Motion not observable statically.

**Stack (HTML):** Next.js + Contentful; Optimizely; Amplitude; styled-components. Fonts: Helvetica Neue LT Std (9 cuts). Booking: first-party (vendor not visible). Checkout/store: shop.soul-cycle.com; buyatab.com gift cards. Other: Optimizely, Amplitude.

**Distinctive vs a typical gym template:** Offer carousel with a utility bar that carries booking, location and cart on every page.

Screenshot: screens/soulcycle-desktop.png

### Body Factory Bali (bodyfactorybali)

URL: https://www.bodyfactorybali.com/ (final: https://www.bodyfactorybali.com/, HTTP 200) · Canggu, Bali, Indonesia · type: gym + recovery + stays (local competitor) · provenance: B (Raoul named; domain from the Semrush files) · rank #28 (1/8) · archetype U: Unknown (not viewed)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: "Get started" / "Join Us Today"; WhatsApp deep link (wa.me/62811...); no sticky class; no hamburger class found in static HTML.
- Schedule or booking entry on the homepage: None on the homepage ("Classes" in nav).
- Booking / commerce vendor evidence: No booking vendor, Stripe or Shopify script in static HTML; WhatsApp; Vercel speed insights; GTM/GA4; no wallet hint.
- Mobile navigation evidence: Unknown (manifest link only).
- Mobile media: No video.

**Desktop (1920x1080 viewport screenshot; NOT VIEWED by this agent)**

- Hero: NOT VIEWED. From HTML: no video tag; H1 "WELCOME TO BODY FACTORY BALI"; H2 "INCLUSIVE APPROACH", "WHAT WE DO" (Perform, Property, Meal Plans), "WE ARE HERE". Screenshot palette: dark #161307, sage greens #91A271/#B0CB93, mustard-yellow accents (17.8% saturated pixels).
- Headline and voice: "WELCOME TO BODY FACTORY BALI" · Welcome-style, inclusive
- Colour system: Firecrawl branding: yellow #FAE879 buttons, blue #2563EB secondary, radius 10px (low confidence; font read as Georgia default). Measured palette: #161307 26%, #91A271 22%, #B0CB93 15%, #77603A 13%; mean luminance 0.47.
- Typography: Not in static HTML (ui-sans-serif only).
- Navigation: Home / Classes / Recover / Memberships / Meal Plans / STAYS / Property Investment.
- First scroll (HTML heading order): H1 -> Inclusive approach -> What we do (Perform, Property, Meal Plans) -> We are here.
- Most distinctive section: Gym combined with stays and property investment (bodyfactorystays.com, bodyfactoryproperty.com).
- Primary action (desktop): "Get started", "Join Us Today".
- Media mix / density: Photography (no video). Unknown.
- Generic here: Unknown (not viewed). Distinctive here: Unknown (not viewed).

**Motion (what the HTML proves):** No animation library in HTML; sonner toast CSS. Motion not observable statically.

**Stack (HTML):** Next.js on Vercel (speed insights); WhatsApp; no video. Fonts: unknown (ui-sans-serif fallback only). Booking: not visible. Checkout/store: none seen. Other: WhatsApp.

**Distinctive vs a typical gym template:** Local competitor with a plain Next.js build, WhatsApp as contact, and gym + stays + property in one nav.

Screenshot: screens/bodyfactorybali-desktop.png

### FitnGlam (UAE) (fitnglam-ae)

URL: https://fitnglam.ae/ (final: https://fitnglam.ae/, HTTP 200) · Dubai & Abu Dhabi, UAE · type: women-only club chain · provenance: S: REPs Awards 2025 "Premium Luxury Club" post in search 6 (the .com domain is a HugeDomains for-sale page, so .ae was used) · rank #29 (1/8) · archetype U: Unknown (not viewed)

**Mobile (HTML evidence only; no mobile screenshot from this run)**

- Primary action on a phone: HTML: JOIN NOW / SHOP NOW CTAs; x-toggle-burger; app deep link (onelink.to).
- Schedule or booking entry on the homepage: "Schedule" and "Classes" terms; no widget in HTML.
- Booking / commerce vendor evidence: Perfect Gym client portal (fitnglam.perfectgym.com), shop.fitnglam.ae, WooCommerce styles; no wallet hint.
- Mobile navigation evidence: Theme burger (x-toggle-burger, 7 refs).
- Mobile media: No video.

**Desktop (1920x1080 viewport screenshot; NOT VIEWED by this agent)**

- Hero: NOT VIEWED. From HTML: H1 "The Women's Superclub"; CTAs JOIN US NOW / SHOP NOW / ENQUIRE NOW / JOIN THE SUPERCLUB; six location H3s (Al Quoz, Mirdif, Dubai Hills Mall, Reem Mall, Nad Al Sheba, Yas Mall). No video. Screenshot palette dark brown (#614D41).
- Headline and voice: "The Women's Superclub" · Empowerment
- Colour system: Firecrawl branding: red #FF2A13, gold #E8C662, teal #0992B2, bg #F3F3F3; radius 4px. Measured palette: #040403 23%, #614D41 20%, #4A372D 18%, #14110F 16%; mean luminance 0.19.
- Typography: Raleway (heading), Lato, Didact Gothic (Google Fonts) + FontAwesome Pro.
- Navigation: Membership, CLASSES, EVENTS, FITNGLAM APP, locations, JOIN US NOW, SHOP NOW.
- First scroll (HTML heading order): H1 -> six location cards -> Membership / Boutique classes / Shop tiles.
- Most distinctive section: Boutique classes and shop tiles beside membership.
- Primary action (desktop): "JOIN US NOW" / "SHOP NOW".
- Media mix / density: Photography (no video). Busy (inferred).
- Generic here: Unknown (not viewed). Distinctive here: Unknown (not viewed).

**Motion (what the HTML proves):** No animation library detected. Motion not observable statically.

**Stack (HTML):** WordPress (X/Pro theme) + WooCommerce + Perfect Gym portal. Fonts: Raleway; Lato; Didact Gothic; FontAwesome Pro. Booking: Perfect Gym client portal. Checkout/store: shop.fitnglam.ae (WooCommerce). Other: onelink app link.

**Distinctive vs a typical gym template:** Women-only superclub with membership, boutique classes and a shop tile set on one WordPress homepage; Perfect Gym portal behind Join.

Screenshot: screens/fitnglam-ae-desktop.png

## 6. Dropped or replaced

| Brief / candidate | Result | Reason |
|---|---|---|
| The Well (NYC), thewell.com | rejected | redirects to user.well.com login: The WELL, a 1985 online community, not the NYC wellness club. The correct club URL was not confirmed within the search cap. Screenshot kept as evidence: screens/thewell-desktop.png |
| 1Rebel, 1rebel.com | replaced | root domain is only a UK/UAE country chooser (screens/1rebel-desktop.png); the UK site /en-gb was scraped instead (1 extra credit) |
| Bathhouse, bathhouse.com | rejected | DNS resolution failed |
| Komune Bali, komunebali.com | rejected | DNS resolution failed (guessed domain) |
| FitnGlam, fitnglam.com | replaced | domain is a HugeDomains for-sale page (screens/fitnglam-desktop.png); fitnglam.ae scraped instead |
| Gymshark "Lifting Club" | not located | main store scraped only; no extra search was available |
| Not scraped (no budget or no fit) | listed in candidates.md | Loff Wellness, Kalm Moments, Be Relax Spa, Wellness Journey, Fitonist, Gym Town Fitness HK, Fidelity Fitness Club, local recovery studios with template sites |
| Gymnation root domain | kept, flagged | gymnation.com is a country gate; country sites were not scraped |

## 7. Method and limits

- Provider: Firecrawl CLI only (Serper out of credits, MCP offline). One scrape per site with rawHtml plus screenshot (1 credit each, 1920x1080 viewport, wait 4 s). Discovery: 6 searches (2 credits each), plus Awwwards listing/page lookups (links only) and 8 branding-format scrapes (colours/fonts) for sites whose screenshots could not be opened. Raw HTML was kept outside the deliverable folder. No Chrome Remote, no direct HTTP to the sites, no sign-ups, forms or purchases.
- Screenshots are the first 1080 px only (viewport), so "first scroll" is described from HTML heading order, not from pixels.
- 7 desktop screenshots could not be opened by this agent: the Read tool's context guard reported them as already read in the session although they were not in this agent's context (phive, essor, reloadsanctuary, bodyfactorybali, xnrgy, loyly, fitnglam-ae). For those sites the hero lines come from HTML, measured palette and Firecrawl branding, and the files are in screens/ for the design lead to open. Their A (art-direction) scores are provisional.
- Static-HTML limits: a library not named in the HTML (Next.js bundles) is "not detected", not "absent"; "weak" in the CSV means only a configuration string was found (for example Elementor's default Lottie setting). Counts are string references, not usage proof. Wallet-pay entries are hints. Motion cannot be observed statically; four other agents capture heroes in motion.
- Firecrawl branding values are model-extracted and unreliable when they equal browser defaults (for example #0000EE, Georgia); they are quoted with that caveat. Palette percentages are measured from the screenshot by quantisation, so they describe the single captured frame (a video frame for video heroes).
- Scrape region may shift content (SoulCycle redirected to /uk/; Gymshark served the US store; Equinox sale countdown is time-bound).

## Change log

- v1.0 — 2026-10-01: first version. Added mobile-first card order, commerce/schedule/wallet/nav fields, top-10 shortlist and archetype counts after the 2026-10-01 scope changes; 29 sites analysed.
