> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit Bali: from partials to one WordPress template

Version: v1.0 — 2026-10-01 · owner: lane L6 (data and API) · for the integrator (Step 3) and whoever deploys. Nothing here has been installed, committed or published. The PHP snippets are untested: there is no PHP or WordPress on the build machine, so they were written against the documented WordPress APIs and must be linted and run on staging first. Change log at the bottom.

Sources: `_build/CONTRACT.md` [CT], `_build/SECTIONS.md` [SEC], `proposal/site-preview/BRAND-NOTES.md` [BN], `research/stack-shop-v1.0/stack-and-shop-recommendation.md` [R§n]. Labels as in `API-CONTRACT.md`: VERIFIED, INFERRED, UNKNOWN, PROPOSAL (our choice, not researched), TBC (confirm on staging or with the club).

## 1. Recommendation

| Decision | Choice | Why |
|---|---|---|
| Where the code lives | A small plugin, `ef-homepage`, that registers one page template and ships the partials as `template-parts/*.php`, the CSS, the JS and the data files. | The club's site is WordPress with Elementor 4.3.2 (Pro Elements), Crocoblock JetEngine and JetPopup, AIOSEO, Trustindex, Smash Balloon, Click to Chat, GTM and Meta Pixel [BN 11, VERIFIED]. The research wants the new homepage "as its own template inside the existing site" and later pages moved over one template at a time [R§1 point 4]. A plugin survives a theme change, lives in GitHub, and is switched off in one click. |
| How it coexists with Elementor | The template is standalone: it prints its own `<head>`, calls `wp_head()`, `wp_body_open()` and `wp_footer()`, and uses no Elementor widget, no Theme Builder header or footer. On that one URL every other asset is dequeued (section 6). | Elementor and JetEngine assets are listed as "not worth shipping" on the new templates [R§8]. The design has its own header and footer partials [SEC §0]. `wp_head()` and `wp_footer()` keep AIOSEO, GTM, the Meta Pixel and any consent tool working. |
| Which page | The existing home page post, with the template switched to "Elite Fit Homepage v2.0" in Page Attributes. Its Elementor content stays untouched in the database. | Rollback is one dropdown (section 12). If the plugin is deactivated WordPress falls back to the default template and the old Elementor home page renders again. |
| Fallback 1 | Child theme: `page-ef-homepage.php` plus a `template-parts/ef/` folder and the same `assets/` tree. Same code, different folder. | If the host or the club does not allow custom plugins. |
| Fallback 2 (not recommended) | One Elementor page in "Canvas" mode with an HTML widget. | Elementor would load its own CSS and JS on the page and break the budgets [R§8, CT §8]; the HTML widget mangles `<script>` and some markup. Last resort only. |

Hard gate: **the public site must not get the mock checkout.** v2.0 ships `mode: 'mock'`: a labelled concept that charges nothing and stores nothing [CT §1]. Phase 1 of the research is the homepage with a live schedule and a "Buy a pass" link to GymMaster's own sign-up or a pre-filled WhatsApp message, not our checkout [R§1 phase table]. Before anything goes to the public domain the openers (`data-open-checkout`) must be repointed, or the checkout hidden, by a flag the integrator and L2 add. The mock is for the staging site and the proposal only.

## 2. Plugin layout

```
ef-homepage/
  ef-homepage.php              plugin header, constants, hooks (section 5, 6, 7)
  templates/ef-homepage.php    the standalone page template (section 4)
  template-parts/              header.php hero.php schedule.php passes.php zones.php recovery.php
                               trainers.php reviews.php visit.php footer.php buybar.php checkout.php
  assets/                      css/ js/ fonts/ img/ video/ data/   copied from homepage-v2.0/assets unchanged
```

`assets/` keeps its folder names so every `url(../img/…)` inside the CSS keeps working. Only the partials' own `assets/…` references need a prefix (section 3).

## 3. Partials to template-parts, and what `build.mjs` must output

Partials are plain HTML fragments without `<html>`, `<head>`, `<body>`, `<script>` or inline `<style>` [CT §3]. `build.mjs` (integrator) already replaces `<!-- @include partials/x.html -->` to make `index.html`. For WordPress it needs a second mode, `node build.mjs --wp`, that writes one PHP file per partial.

| Partial | `template-parts/` file | Section id [SEC §0] | PHP needed inside | Notes |
|---|---|---|---|---|
| `header.html` | `header.php` | `#site-header` | logo link `href="/"` → `home_url( '/' )`; asset prefix | Nav links point at existing club pages. List them on staging and check each returns 200. |
| `hero.html` | `hero.php` | `#hero` | asset prefix | Poster, logo mark and the reel (`assets/video/hero-reel-9x16.mp4`) via the prefix. |
| `schedule.html` | `schedule.php` | `#today` | none | JS renders the list from `EFApi.getSchedule`. Optional later: the edge injects today's classes as HTML (`HTMLRewriter`) so the first screen needs no JS [R§7]. |
| `passes.html` | `passes.php` | `#passes` | prices read from `assets/data/passes.json` | The server-rendered default prices must equal the JSON [SEC §4]. In PHP, print them from the file so there is one source: `json_decode( file_get_contents( EF_HOME_DIR . 'assets/data/passes.json' ), true )`. A script gate compares the rendered HTML with the JSON (section 11). |
| `zones.html` | `zones.php` | `#club` | asset prefix | |
| `recovery.html` | `recovery.php` | `#recharge` | asset prefix | Four stage images. |
| `trainers.html` | `trainers.php` | `#coaches` | asset prefix | |
| `reviews.html` | `reviews.php` | `#reviews` | none | Static HTML, replacing the Trustindex and Smash Balloon widgets [R§8]. The quotes and the "84 reviews on Google" count are a snapshot [BN 8]: a person updates them by hand. |
| `visit.html` | `visit.php` | `#visit` | asset prefix | Maps is a link, not an iframe: nothing third-party loads. |
| `footer.html` | `footer.php` | `#site-footer` | none | The privacy and terms links point at the club's existing pages [SEC §10]. |
| `buybar.html` | `buybar.php` | `#buybar` | none | Fixed bar below 760 px. |
| `checkout.html` | `checkout.php` | `#checkout` | none | Dialog. The "Concept preview" label stays while `mode` is `mock`. |

What `--wp` does to each partial (the rules, nothing else):

| Step | Rule |
|---|---|
| 1 | Write `wp/template-parts/<name>.php`. |
| 2 | First line: `<?php defined( 'ABSPATH' ) or exit; ?>`. |
| 3 | Replace every `assets/` that begins an attribute URL (`src`, `href`, `poster`, and each URL inside `srcset`) with `<?php echo esc_url( EF_HOME_URL ); ?>assets/`. The current partials use `src="assets/img/…"`, `poster="assets/img/…"`, `src="assets/video/…"` and one `srcset="assets/img/visit-entrance-800.webp 800w, assets/img/visit-entrance.webp 1200w"`. |
| 4 | Replace `href="/"` with `href="<?php echo esc_url( home_url( '/' ) ); ?>"`. |
| 5 | Strip HTML comments in the production build. Today the first-line comments of the 12 partials total about 8 KB raw (about 3 KB gzip) out of 58.7 KB raw / 13.0 KB gzip (measured 2026-10-01). Keep them in the preview build. |
| 6 | Copy `assets/` as is, including `assets/data/passes.json`. Do not ship `schedule.mock.json` to a public site that runs in live mode. |

The template (`templates/ef-homepage.php`) includes the parts in the order of [SEC §0] with `load_template( EF_HOME_DIR . 'template-parts/<name>.php', false )`. (`get_template_part()` only searches the theme folders, so a plugin uses `load_template()`.)

## 4. The page template

```php
<?php // templates/ef-homepage.php
defined( 'ABSPATH' ) || exit;
function ef_part( $name ) { load_template( EF_HOME_DIR . "template-parts/$name.php", false ); }
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<?php if ( ! current_theme_supports( 'title-tag' ) ) : ?><title><?php echo esc_html( wp_get_document_title() ); ?></title><?php endif; ?>
<?php wp_head(); ?>
</head>
<body <?php body_class( 'page' ); ?> data-zone="neutral">
<?php wp_body_open(); ?>
<a class="skip-link" href="#today">Skip to today's classes</a>
<?php ef_part( 'header' ); ?>
<main id="main">
<?php foreach ( array( 'hero', 'schedule', 'passes', 'zones', 'recovery', 'trainers', 'reviews', 'visit' ) as $p ) { ef_part( $p ); } ?>
</main>
<?php ef_part( 'footer' ); ef_part( 'buybar' ); ef_part( 'checkout' ); ?>
<?php wp_footer(); ?>
</body>
</html>
```

Why each line matters: `wp_head()` and `wp_footer()` are where AIOSEO, GTM and the Meta Pixel print; `wp_body_open()` is where a GTM `<noscript>` snippet goes; the `<title>` line covers a theme without `title-tag` support (otherwise AIOSEO's title would never print). `body_class( 'page' )` keeps the `.page` class [SEC §0] and adds WordPress's own classes.

## 5. Registering the template (plugin main file)

```php
<?php // ef-homepage.php
/** Plugin Name: Elite Fit Homepage v2.0   Version: 2.0.0 */
defined( 'ABSPATH' ) || exit;
define( 'EF_HOME_VER', '2.0.0' );
define( 'EF_HOME_DIR', plugin_dir_path( __FILE__ ) );
define( 'EF_HOME_URL', plugin_dir_url( __FILE__ ) );

function ef_home_active() { return is_page() && 'ef-homepage' === get_page_template_slug(); }

add_filter( 'theme_page_templates', function ( $t ) { $t['ef-homepage'] = 'Elite Fit Homepage v2.0'; return $t; } );
add_filter( 'template_include', function ( $tpl ) {
	return ef_home_active() ? EF_HOME_DIR . 'templates/ef-homepage.php' : $tpl;
}, 99 ); // after Elementor's own template_include
```

Template selection, Elementor interplay and the page-template cache behave this way on current WordPress (the `theme_page_templates` filter feeds both the dropdown and the save check). The WordPress version on the club's host is UNKNOWN: confirm it is 6.3 or newer (section 6 needs it), else use the `script_loader_tag` fallback shown there.

## 6. Enqueue order, `defer`, and removing everything else

Load order is fixed by [CT §6]: `api.js`, `shop.js`, `schedule.js`, `hero.js`, `motion.js`, `main.js`. Every script is `defer`; the only inline script is the `<head>` one-liner (section 8) plus the config line below.

```php
add_action( 'wp_enqueue_scripts', function () {
	if ( ! ef_home_active() ) { return; }

	// CSS in the order of CT §2: tokens, base, motion, hero, schedule, shop, recovery, zones, community
	$prev = array();
	foreach ( array( 'tokens', 'base', 'motion', 'hero', 'schedule', 'shop', 'recovery', 'zones', 'community' ) as $n ) {
		wp_enqueue_style( "ef-$n", EF_HOME_URL . "assets/css/$n.css", $prev, EF_HOME_VER );
		$prev = array( "ef-$n" );
	}

	// JS: a dependency chain keeps the order, 'defer' keeps it non-blocking (WordPress 6.3+)
	$args = array( 'strategy' => 'defer', 'in_footer' => true );
	$prev = array();
	foreach ( array( 'api', 'shop', 'schedule', 'hero', 'motion', 'main' ) as $n ) {
		wp_enqueue_script( "ef-$n", EF_HOME_URL . "assets/js/$n.js", $prev, EF_HOME_VER, $args );
		$prev = array( "ef-$n" );
	}

	// EF_CONFIG for api.js (section 7). wp_json_encode keeps numbers as numbers.
	wp_add_inline_script( 'ef-api', 'window.EF_CONFIG=' . wp_json_encode( array(
		'mode'         => 'mock',                         // 'live' only at phase 2
		'apiBase'      => '',                             // phase 2: the site origin; /api/* is routed to the edge layer
		'assetBase'    => EF_HOME_URL . 'assets/',
		'assetVersion' => EF_HOME_VER,
	) ) . ';', 'before' );
}, 20 );

// Everything else off on this template. Allow-list instead of guessing handles.
add_action( 'wp_enqueue_scripts', function () {
	if ( ! ef_home_active() ) { return; }
	$keep = apply_filters( 'ef_home_keep_handles', array( 'admin-bar', 'dashicons' ) ); // add the consent tool's handles after checking staging
	foreach ( array( wp_styles(), wp_scripts() ) as $deps ) {
		foreach ( (array) $deps->queue as $h ) {
			if ( 0 === strpos( $h, 'ef-' ) || in_array( $h, $keep, true ) ) { continue; }
			( $deps instanceof WP_Styles ) ? wp_dequeue_style( $h ) : wp_dequeue_script( $h );
		}
	}
}, 9999 );
```

| Point | Detail |
|---|---|
| Why `wp_add_inline_script`, not `wp_localize_script` | `wp_localize_script` turns numbers and booleans into strings; the inline JSON keeps `timeoutMs` a number. The inline `before` script prints ahead of the deferred `api.js`, so `window.EF_CONFIG` exists when it runs. |
| `defer` and dependencies | With `strategy => 'defer'` WordPress prints `defer` and keeps dependency order. If any dependency is not deferrable it falls back to blocking, which is why every handle uses the same `$args`. |
| WordPress older than 6.3 | Drop `strategy`, keep `in_footer`, and add `defer` with `add_filter( 'script_loader_tag', fn( $tag, $h ) => 0 === strpos( $h, 'ef-' ) ? str_replace( ' src=', ' defer src=', $tag ) : $tag, 10, 2 )`. |
| CSS delivery | [R§8] budgets: critical CSS at most 14 KB inline, the rest in one file at most 30 KB gzip. `build.mjs --wp` may concatenate and minify the nine files into `ef-home.min.css` and inline the first-screen part. Until then the nine `<link>` tags are acceptable for staging. Measured by the budget run, not guessed. |
| What gets dequeued | Elementor frontend, Elementor icons, Swiper, JetEngine and JetPopup, Smash Balloon, Trustindex, Click to Chat, block-library styles, emoji. The allow-list loop needs no handle names. Dump `wp_styles()->queue` and `wp_scripts()->queue` at priority 9999 on staging to see what the club's plugins actually enqueue (TBC), and to find the consent tool's handle. |
| What stays | Anything printed through `wp_head` hooks rather than the queue: AIOSEO output, GTM, Meta Pixel (section 10). |
| Click to Chat | Removed on this template. Its floating button would sit on top of the buy bar, and the template has its own `wa.me` links [R§8]. Which of the club's two WhatsApp numbers is official is still an open question [BN 4, R§10 q6]; v2.0 uses +62 851-9552-0220. |

## 7. `EF_CONFIG`

```js
window.EF_CONFIG = { mode: 'mock', apiBase: '', assetBase: 'https://…/wp-content/plugins/ef-homepage/assets/', assetVersion: '2.0.0' };
```

| Key | v2.0 | Phase 2 |
|---|---|---|
| `mode` | `'mock'` (staging and proposal only) | `'live'` |
| `apiBase` | empty | the site origin; a Cloudflare Worker route sends `/api/*` to the edge layer [R§1] (needs DNS on Cloudflare: TBC) |
| `assetBase` | plugin URL + `assets/` (needed because the script URL, `…/ef-homepage/assets/js/api.js?ver=…`, is not under a path `api.js` can guess if a CDN rewrites it; `api.js` otherwise derives it from its own URL) | same |
| `assetVersion` | `EF_HOME_VER` | same; busts the two JSON files |
| `timeoutMs` | not set (12 s) | optional |

`?now=` is honoured only in mock mode, so a live page never lets a URL move the clock.

## 8. Head items the integrator owns

All printed by the plugin on this template only, through `wp_head` at priority 1, so they come before the enqueued styles.

```php
add_action( 'wp_head', function () {
	if ( ! ef_home_active() ) { return; }
	// 1. html.js / html.motion-ok (CT §6). Must run before first paint; keep it inline and exempt from optimisers.
	echo '<script data-no-optimize="1" data-cfasync="false">(function(d){var c=d.documentElement;c.classList.add("js");var r=matchMedia("(prefers-reduced-motion: no-preference)").matches,s=navigator.connection&&navigator.connection.saveData;if(r&&!s)c.classList.add("motion-ok")}(document))</script>' . "\n";
	// 2. theme colour: the page-light concrete slab (--c-concrete-l88 in tokens.css)
	echo '<meta name="theme-color" content="#DFDDD0">' . "\n";
	// 3. font preloads: Syne (display) and Hanken Grotesk (body); crossorigin is required even on the same origin
	foreach ( array( 'syne-latin-var', 'hanken-grotesk-latin-var' ) as $f ) {
		printf( '<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n", esc_url( EF_HOME_URL . "assets/fonts/$f.woff2" ) );
	}
	// 4. LCP image: only if the poster is the LCP element (CT §12.5)
	printf( '<link rel="preload" href="%s" as="image" type="image/webp" fetchpriority="high">' . "\n", esc_url( EF_HOME_URL . 'assets/img/hero-poster-9x16.webp' ) );
}, 1 );
```

| Item | Rule |
|---|---|
| `<meta charset>`, viewport | In the template: `width=device-width, initial-scale=1, viewport-fit=cover`. |
| `<title>`, description, canonical, robots, Open Graph, Twitter, sitemap, schema | **AIOSEO owns all of them** (section 9). The template prints none. |
| Favicon | `wp_head` prints the Site Icon; keep it. |
| Google Fonts | None. The v1.3 preview loaded Manrope and Syne from Google; v2.0 loads nothing from `fonts.googleapis.com` [`assets/fonts/LICENSES.md`]. |
| `html.js` snippet | The `data-no-optimize` and `data-cfasync` attributes stop caching plugins and Cloudflare Rocket Loader from delaying it. |
| LCP preload | If the integrator measures the headline as the LCP element instead, drop item 4. The element must never start at `opacity: 0` [CT §12.5]. |

## 9. Fonts and images

Fonts (from `assets/fonts/LICENSES.md`, v1.0):

| File | Family | Size | Licence |
|---|---|---|---|
| `syne-latin-var.woff2` | Syne 2.200, variable 400 to 800, latin | 33.8 KB | SIL OFL 1.1, Copyright 2019 The Syne Project Authors |
| `hanken-grotesk-latin-var.woff2` | Hanken Grotesk 3.013, variable 100 to 900, latin | 34.8 KB | SIL OFL 1.1, Copyright 2021 The Hanken Grotesk Project Authors |

Both are self-hosted, `font-display: swap`, with size-adjusted local fallbacks defined in `tokens.css`, and preloaded (section 8). OFL allows bundling and redistribution with the licence notice kept: ship `LICENSES.md` with the plugin. The host's MIME map must serve `.woff2` as `font/woff2` (TBC on the host).

Images:

| Question | Recommendation |
|---|---|
| Media Library or plugin folder? | Plugin folder for v2.0. The images are design-fixed, `width` and `height` are written into the markup, and the build controls the file names. The Media Library would add generated sizes and `srcset` the markup does not expect. Move trainer, zone and recovery photos into the Media Library only when the club wants to change them from the admin (a phase 3 content model, for example JetEngine fields). |
| `srcset`, WebP | The partials carry their own `srcset` (one today: the visit entrance image at 800 and 1200 px). WordPress's automatic `srcset` and `loading` filters run on `the_content` only, so they do not touch template markup. Images are WebP [CT §3]. An AVIF source for the hero poster is optional later [R§8]. |
| Lazy loading | Already in the markup (`loading="lazy"` below the first screen); the hero poster is not lazy. |
| Video | The hero reel `assets/video/hero-reel-9x16.mp4`, `preload="none"` or `metadata`, with a real poster, started after load and never under data-saver [CT §8, R§8]. The host or Cloudflare must support byte-range requests (TBC) and serve `video/mp4`. |
| Licence record | Every file's source is recorded in `MEDIA-SOURCES.md` (integrator). Temporary stock footage is disclosed before publication [AGENTS rule]. |

## 10. SEO plugin, structured data, consent

SEO (AIOSEO 5.0.2 [BN 11, VERIFIED]):

| Topic | Rule |
|---|---|
| Ownership | AIOSEO sets the title, description, canonical, robots, Open Graph, Twitter cards and the sitemap. The plugin and the template add none of them, so nothing appears twice. |
| JSON-LD source | The v1.3 preview's `HealthClub` block (a schema.org LocalBusiness subtype) in `proposal/site-preview/index.html`: name, url, image, telephone `+62-857-2022-1101`, email, address Jalan Sempol No. 26, Pererenan, Bali, ID, geo −8.6389587 / 115.1378823, one opening-hours spec 06:00–22:00 on all seven days, `sameAs` Instagram and Facebook. No `aggregateRating` [BN 8, BN 13]. Keep it that way. |
| How it gets on the page | Check what the club's AIOSEO licence supports (a local business schema, or a custom schema field on a page): TBC on staging. Put the block there. If AIOSEO cannot, print it through `wp_head` only when the page source shows no `LocalBusiness` or `HealthClub` node from AIOSEO. Never both. |
| Open data issues in that block | One opening-hours entry says 06:00–22:00 while Recharge opens 06:30 [BN 4]. The address conflict (Jalan Sempol No. 26 against Jalan Munduk Tengah No. 3) and the two phone and WhatsApp numbers are unresolved [BN 9, R§10 q6, q7]. Resolve with the owner before the block goes live. |
| Not carried over | The v1.3 preview's `<meta name="robots" content="noindex">`. The production page must be indexable; AIOSEO decides. The staging copy must stay noindexed. |
| Title and description | v1.3 used: "Elite Fit Bali — Gym & Recovery Club in Pererenan, Canggu" and "…Day passes from IDR 300K — book on WhatsApp." Starting values only; "book on WhatsApp" becomes stale if online purchase goes live. The copy owner decides. |
| Product or Offer schema | None in v2.0. Prices are visible text and must stay equal to GymMaster before anyone marks them up. |
| Headings | One `<h1>` (hero), then section `<h2>`s as in [SEC]. |
| Sitemap | AIOSEO's sitemap is unchanged. Nothing in this work submits or pings any search engine (standing rule: no sitemap submission without Raoul's approval). |

Consent (GTM + gtag and Meta Pixel are on the live site; no consent tool is listed among the plugins [BN 11]; how the tags are loaded is UNKNOWN):

| Rule | Detail |
|---|---|
| Our code adds nothing third-party | No Google Fonts, no iframes (Maps is a link), no social embeds, no analytics calls. `api.js` fetches two same-origin JSON files in the mock and nothing else; v2.0 JS does not push to `dataLayer`. So nothing new loads before consent. |
| Existing tags | GTM and the Pixel keep working only because the template calls `wp_head()`, `wp_body_open()` and `wp_footer()`. If they currently fire without consent, that is existing behaviour; fix it with a consent tool before launching any checkout, because consent state must travel with the order [R§9, INFERRED]. |
| Consent Mode default | The consent tool (or a snippet at `wp_head` priority 1, before GTM) sets analytics and ad storage to denied by default. Choice of tool: DM decides [R§10]. |
| Cookies | `api.js` sets none. Live mode sends `credentials: 'omit'`. |
| Banner and the buy bar | A cookie banner and the fixed buy bar compete for the bottom of a phone screen. Test both on 375 and 390 px and give the banner a defined offset. |

## 11. Caching and CDN

The current host, caching plugin and whether Cloudflare already fronts the site are UNKNOWN [R§1, R§10 q5]. The research design is Cloudflare in front with full-page cache for the WordPress HTML [R§1].

| Layer | Rule (PROPOSAL unless marked) |
|---|---|
| HTML | Edge cache the home page. Bypass on `wordpress_logged_in_*` cookies, `/wp-admin`, `/wp-json`, `/api/*`, `/webhooks/*`. Purge the URL on every deploy and content change. |
| Static files under `assets/` | `Cache-Control: public, max-age=31536000, immutable`. WordPress adds `?ver=`; bump `EF_HOME_VER` on each release. Fonts have unversioned names: rename the file when a font changes. |
| `assets/data/*.json` | Short cache (5 minutes) so a price edit shows soon. `passes.json` is also the price source for the PHP defaults. |
| `/api/*` | Not cached at the CDN except `GET /api/schedule` (5 minutes) and `GET /api/passes` (see `API-CONTRACT.md` 4.1, 4.2). |
| Caching or optimisation plugins | Exclude `ef-*` scripts and styles from minify, combine and delay-JS. Exclude the inline snippets marked `data-no-optimize`. TBC which plugin runs. |
| Compression | Brotli or gzip at the host or Cloudflare. |
| Admin bar | A logged-in admin sees the 32 px bar (46 px at 782 px and below) over the fixed header. A small WP-only rule, `body.admin-bar .hdr { top: 32px }` with the mobile value, belongs in a plugin stylesheet loaded only when `is_admin_bar_showing()`. Visitors never see it. |

## 12. Accessibility

| Check | Detail |
|---|---|
| Skip link | `#today`, first focusable element [SEC §0]. The theme's own skip link is not printed (standalone template), so there is only one. |
| Landmarks | `header`, `main#main`, `footer`; the checkout is a `role="dialog"` with focus trap and Esc [SEC §12]. |
| `lang` | From WordPress (`language_attributes()`); confirm it reads `en`. |
| Motion | `html.motion-ok` only for `no-preference` and not data-saver (section 8); no-JS, reduced motion and data-saver show the full layout. |
| Plugins that add floating UI | Click to Chat is dequeued. Check that a consent banner does not trap focus behind the checkout. |
| Gate | The a11y run (axe-style checks, keyboard path, 44 px targets, contrast) is done by the QA steps against the staging URL, not by this lane. |

## 13. QA gates before release

Run on staging, against the real host and a cache-bypassed request. Budgets are the numbers of [CT §8, §9].

| # | Gate | Pass |
|---|---|---|
| 1 | Mock checkout not on the public domain | The staging page may run the mock. The production page does not, or the checkout is hidden or repointed (section 1). |
| 2 | Lab speed, profile P1 (390x844, CPU 4x, 1.6 Mbit/s, 150 ms RTT), median of 5 cold runs | LCP at most 2.5 s; CLS 0.00 over load, scroll, every checkout step and the font swap |
| 3 | First-view transfer | At most 900 KB on the wire (definition in [CT §8]) |
| 4 | Render-blocking scripts | None. The only inline script is the `<head>` one-liner plus the `EF_CONFIG` line. |
| 5 | Third-party requests on first load | None from our code (view the network log) |
| 6 | Other plugins' assets | None of Elementor, JetEngine, Smash Balloon, Trustindex or Click to Chat requested on the template |
| 7 | AIOSEO output | Title, description, canonical present exactly once; no `noindex` on production; one local-business node, not two |
| 8 | Consent | In a fresh profile, no GTM, GA or Meta request before consent (once a consent tool exists) |
| 9 | Prices | Rendered HTML equals `assets/data/passes.json`, and `passes.json` equals the club's current price list (the owner confirms the date). Script gate. |
| 10 | Overflow | `scrollWidth <= innerWidth` at 320, 360, 375, 390, 414, 600, 759, 760, 768, 820, 1024, 1280, 1440, 1920, also with the checkout open |
| 11 | Journeys | Taps within the limits of [CT §9], at 390 and 1440 |
| 12 | Console and network | No console error and no failed request on load or through any journey |
| 13 | Logged-in and logged-out render | Same markup apart from the admin bar |
| 14 | Cached and uncached render | Same markup |
| 15 | Browsers | WebKit iPhone 375x812 and 390x844, Chromium 1440x900, one tablet width (820x1180) |
| 16 | Rollback drill | Performed once on staging (section 14) |
| 17 | Links | Every nav, footer and WhatsApp link returns 200 or opens WhatsApp; the header's club-page links exist on the real site |

`API-CONTRACT.md` section 10 and `_build/preview/L6-test.js` cover the data layer.

## 14. Rollout and rollback

| Step | Action | Needs |
|---|---|---|
| 0 | Find the production host and its release path. "Live" means the real host serving the public domain, verified with a cache-bypassed request; a GitHub push alone is not live. | Hosting access (UNKNOWN, [R§10 q5]) |
| 1 | Make a staging copy of the site, password-protected and noindexed. | Host or a staging plugin |
| 2 | Install the plugin on staging, create or choose the page, set the template, preview. | |
| 3 | Run the gates of section 13. | |
| 4 | Show staging to Raoul. Nothing goes to the public domain without his explicit Go. | Go |
| 5 | Production: full backup (database and files); install the plugin inactive; activate; open the home page's Page Attributes and set the template; purge the CDN; check with a cache-bypassed request. | Backup, Go |
| 6 | Watch for 48 hours: re-run gates 2, 5, 7, 12; check Search Console for coverage errors. Do not submit a sitemap. | |

Rollback, target under five minutes, rehearsed on staging:

1. Set the page's template back to "Default template" (or, if the front page setting was changed, restore the previous page). The Elementor content of the old home page was never touched.
2. Purge the CDN for `/`.
3. If needed, deactivate the plugin. With the plugin off WordPress falls back to the default template, so the Elementor page renders again.
4. Confirm with a cache-bypassed request.

Never delete the old home page content until the new page has run for an agreed period.

## 15. Risks

| Risk | Effect | Mitigation |
|---|---|---|
| Header and footer differ from the other pages | The home page looks like a different site until other pages move over [R§1 point 4] | List the club pages the header links to; plan page-by-page migration; the owner accepts the interim look |
| Mock checkout reaches the public domain | Visitors "buy" and nothing happens | Gate 1; a flag the integrator adds; the label "Concept preview, nothing is charged" stays while `mode` is `mock` |
| AIOSEO and our JSON-LD both print a local business | Duplicate or conflicting structured data | Section 10: one source only, checked in the page source |
| No consent tool | Tracking before consent; consent cannot travel with the order | Add a consent tool before phase 2 [R§9] |
| WordPress older than 6.3 | `strategy` is ignored | `script_loader_tag` fallback (section 6) |
| Caching plugin reorders or delays scripts | `EFApi` missing when `shop.js` runs | Exclude `ef-*` and the inline snippets; gate 12 catches it |
| Elementor page layout setting | The home page may have an Elementor "Canvas" or "Header Footer" layout saved in its meta | Switching the template replaces it; rollback restores the old value, so write it down before the switch |
| Static reviews go out of date | The "84 reviews" count and quotes age | A named person updates them; or a later widget with consent |
| Removing Click to Chat | Changes which WhatsApp number visitors see | Settle the official number first [R§10 q6] |
| Unknown host | Release path, backup, MIME types, byte-range for video unknown | Step 0; ask the owner (question 5) |
| Fixed header against the admin bar | Logged-in editors see a clipped header | Admin-bar rule (section 11) |
| Schema data wrong (hours, address, phone) | Wrong data in Google | Resolve the open points before the block ships [BN 9] |

## Change log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-10-01 | First version: plugin-and-template recommendation, partial-to-PHP table, `build.mjs --wp` rules, enqueue and defer code, `EF_CONFIG`, head items, fonts and images, AIOSEO and consent coexistence, caching, accessibility, QA gates, rollout and rollback, risks (lane L6). |
