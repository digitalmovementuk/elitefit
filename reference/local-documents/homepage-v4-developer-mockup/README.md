> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit — developer mockup prototype

Version 1.0 · 20 October 2026 · local review and development handoff.

[Open local prototype](http://127.0.0.1:8204/homepage-v4-developer-mockup/) · [Open portable HTML](Elite-Fit-Homepage-Prototype-v1.0.html) · [Source PDF](EF_Homepage_Desktop%20(1).pdf) · [Project index](../README.html)

## Task plan — completed

1. Gather Elite Fit artefacts into the prospect folder and save the supplied PDF.
2. Inspect the two existing prototypes and the developer’s layout.
3. Build a separate homepage using the supplied layout, assets and current price information.
4. Add motion and complete the key visitor journeys.
5. Review desktop/mobile screenshots, fix layout issues, and package the source and portable export.

## Design decisions

The developer PDF remains the main visual and content reference. Its dark palette, coral accent, rounded photography, bold headings and section order are preserved: hero, club, coaches, membership, offers, food, community, reviews and visit details.

Direction A contributes practical pass selection, class discovery and recovery exploration. Direction B contributes the club film, expressive type, transitions and stronger visual immersion. Their source files remain intact.

The page uses the actual Elite Fit logo and existing club photographs and footage. The full club montage has separate landscape and portrait encodes, a poster and a pause control. No stock or AI imagery was added.

| Foundation | Implementation |
| --- | --- |
| Colours | Background #0D0E0D; panels #141514; text #F3F1E9; coral #FF765E |
| Type | Local Hanken Grotesk and Fragment Mono from the existing prototype; licence records retained |
| Hero | 66svh below the header; headline, proof and actions visible on the reviewed screens |
| Mobile | Centred hero and section labels; stacked content; controls sized for touch |
| Actions | Coral primary buttons; rounded floating pass panel with viewport margins |
| Motion | Native scrolling, staggered reveals, subtle parallax, image hovers and price transitions |
| Accessibility | Semantic landmarks, visible focus, labelled fields, keyboard dialogs/tabs/gallery, reduced motion support |

The source PDF embeds Gilroy but does not supply licensed webfont files. The implementation uses the existing project’s local font assets.

## Working interactions

- Navigation menu, keyboard dismissal and focus return.
- Weekly class timetable with day tabs, keyboard day switching and class details.
- Bali clock and current/next class strip using the saved weekly timetable.
- Gym, café and co-working details; four recovery room tabs.
- All five coach profiles and a personal training enquiry preview.
- Solo/Duo membership prices across day, month and year; complete comparison table and accurate two-person totals.
- Three-step pass checkout with field validation, editable details and a review screen.
- Tour, table and contact enquiry previews with a review and completion state.
- Community photo gallery with keyboard navigation; food specials and five sourced reviews.

Checkout takes no payment and issues no pass. Enquiry forms send nothing and make no booking. Details remain in the current browser tab and are cleared when the preview finishes. There is no form backend, payment provider, browser storage or live availability feed.

## Content and source decisions

| Source | Use and limits |
| --- | --- |
| Supplied developer PDF | Section structure, club photos, coaches, Solo/Duo prices, offers, October food specials and contact information |
| [Direction A](../homepage-v2.0/index.html) / [Direction B](../homepage-v3/index.html) | Interaction and motion references; existing logo, recovery images, fonts and footage |
| [Saved club timetable](../homepage-v3/assets/data/schedule.club.json) | Captured 1 October 2026; weekly pattern only. Weekend dates and current bookings need GymMaster. No invented capacity or available seats |
| [Saved review record](../homepage-v3/assets/data/reviews.verified.json) | Five quotations previously matched to Google-labelled reviews on the club’s own pages on 2 October; no fresh Google verification claimed |
| [Asset manifest](_work/asset-manifest.json) | Local source mapping, PDF image references and footage conversion details |

The source banner promoted a 3 October event, which had passed by the build date. It was replaced with the supplied Duo offer. Placeholder review text was replaced with the existing sourced quotations. Time-sensitive prices, offers and October specials reflect the supplied mockup and have not been rechecked live.

The original PDF was copied from Downloads without alteration. SHA-256: `96bcce6ec3a4f772e94a5f92cd6f44c4c75769b0c9b1b25fd23813152b6c4629`.

## Files and local use

| File/folder | Purpose |
| --- | --- |
| index.html | Semantic page and dialog containers |
| styles.css | Responsive visual system and motion |
| app.js | Interactions and preview forms |
| data.js | Saved timetable and review data |
| assets | Local photographs, video, logo, favicon and fonts |
| Elite-Fit-Homepage-Prototype-v1.0.html | Standalone export with embedded assets; opens directly and works offline |
| _work/build-portable.py | Rebuild the standalone export after source changes |
| _qa | Screenshots and recorded browser checks |

The local server is bound to 127.0.0.1:8204 and serves the Elite Fit prospect folder. Its dedicated launcher, `_work/preview-server.py`, shuts itself down after 12 hours. Restart that launcher from this folder if needed. No build step or package installation is needed to run the homepage.

Favicon and Open Graph/Twitter image metadata are included. The page carries noindex metadata. A public release would require current operational information, real booking/payment integrations and the club’s actual legal/privacy details.

## Recorded review

| Check | Evidence |
| --- | --- |
| Six screen sizes | 1728×1117, 1440×900, 1366×768, 768×1024, 390×844 and 360×740 |
| Layout | No horizontal overflow or broken images in the six captured sizes |
| Visitor journeys | Ten journeys checked on desktop and ten on mobile; all passed |
| Automated accessibility | Zero Axe violations across page, timetable and checkout states at desktop/mobile sizes |
| Browser behaviour | No recorded console errors, external runtime requests or form submissions |
| Portable export | Opened offline at 1440px and 390px; images, embedded video and core dialogs worked without dependencies |
| Visual review | Hero, club, coaches, membership, food, community, visit, recovery and checkout screenshots reviewed; map image sizing corrected |

Reports: [layout](_qa/layout-report.json), [interactions](_qa/interaction-report.json), [portable export](_qa/portable-report.json). The checks used Chrome with emulated screen sizes; they do not establish real-device, production hosting or payment-provider behaviour. The final map change only corrects image sizing; the export was rebuilt afterwards.
