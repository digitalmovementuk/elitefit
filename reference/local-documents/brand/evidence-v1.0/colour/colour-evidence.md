> Historical reference. Earlier facts, instructions and timelines may be superseded. The [current project plan](../../../../../project-management/internal-plan/index.html) takes precedence. Some large source media remains in the local archive.

# Elite Fit Bali: measured colour evidence by zone and material

**Version: v1.0 — 2026-10-01**  
Status: internal evidence for the visual and brand identity handbook and the website colour system. Nothing published or sent.

## 1. Headline palettes (measured anchors, role by role)

| Zone | Deep | Base | Mid | Light | Accent | Text |
|---|---|---|---|---|---|---|
| Zone 1 - Workout area: charcoal, metal, black | `#060708` | `#1D2123` | `#413C3E` | `#81796C` | `#B3483B` | `#EEEEEC` |
| Zone 2 - Interior wooden cafe | `#423C38` | `#804A1C` | `#BB7A46` | `#C5C0B2` | `#9FB84D` | `#EEEEEC` |
| Zone 3 - Beige and cream spa | `#643C1C` | `#C6B89E` | `#A38559` | `#D6CAB4` | `#FECA69` | `#643C1C` |
| Raw concrete, black EF logo, taupe logo | `#121317` | `#8E8C80` | `#5F615C` | `#AA9F87` | `#A48F82` | `#121317` |
| Tropical green | `#22380E` | `#496A40` | `#708A4E` | `#C9E18A` | `#9FB84D` | `#EEEEEC` |
| Teal pool | `#3F6068` | `#609994` | `#528D84` | `#CCD2CC` | `#2F848F` | `#121317` |
| Brand red | `#6C2921` | `#B3483B` | `#AF5E61` | `#F06953` | `#000000` | `#FFFFFF` |

Red zone: the sixth column shows the black ground of the closing frame instead of an accent. Every HEX above is a measured value; none was adjusted (see section 6 for the accent-as-text variants that were).

## 2. Method note

1. Reel frames were re-decoded from the MP4 with the correct BT.709 matrix (the first extraction used BT.601 and ran about 2.7 levels off); stills were measured on the full-size originals from elitefitbali.com where found (10 of the proposal stills, plus 3 extra original photographs), else on the web copy.
2. For every material, 1 to 5 crop boxes were drawn on different frames or photos, checked on overlay images, and redrawn until each covered only that material (no people, windows or highlights).
3. Each crop gives the median R, G, B (clipped and masked pixels dropped), the L*a*b* of that median (D65), and the 10th and 90th percentile of L*.
4. Per material: representative HEX = median of the crop medians; spread = largest CIEDE2000 between any two crops. HEX values are printed exactly as measured.
5. Stills outrank the reel as the anchor (the reel is about 14 L* darker, warm-graded and compressed); both readings and their shift are always shown.
6. DERIVED daylight-neutral values sit in their own column with the method named (S, C, D); they never replace a measured value.
7. Palettes use measured values as anchors; only text and accent contrast adjustments change a value, by L* alone, shown next to the measured value with the ratio.
8. Every HEX can be re-run from the boxes in materials.json; the role names (deep, base, mid, light, accent) are a judgement, the values are not.

## 3. Measured materials by zone

Columns: **Anchor** = recommended measured HEX (stills preferred); **L\* p10-p90** = lightness band inside the crops; **Spread** = max CIEDE2000 between crops (anchor group / all crops); **Crops/photos** = crops in the anchor group over independent photographs; **DERIVED** = daylight-neutral estimate, method letter in brackets (S still-as-measured, C reel hue transfer, D cross-photo), never a replacement for the measured value.

### Zone 1 - Workout area: charcoal, metal, black

| Material | Anchor HEX | Source | L* p10-p90 | Spread dE (group / all) | Crops/photos | Lighting | DERIVED |
|---|---|---|---|---|---|---|---|
| Black steel (rack uprights) | `#1D2123` | stills | 6-20 | 8.8 / 8.8 | 3/3 | daylight | `#1D2123` (S0, low-medium) |
| Dark machine grey (cardio and strength frames) | `#413C3E` | stills | 18-38 | 1 crop / 5.8 | 1/2 | gym ambient, mixed | `#413C3E` (S0, low-medium) |
| Black iron weights (medicine balls, kettlebells) | `#141817` | stills | 1-22 | 5.0 / 8.1 | 2/3 | daylight, gym ambient | `#141817` (S0, low-medium) |
| Gym rubber floor | `#52525D` | stills | 29-43 | 17.4 / 28.6 | 2/3 | daylight, gym ambient, mixed | `#52525D` (S0, low-medium) |
| Gym ceiling (dark) | `#312B23` | stills | 12-25 | 1 crop / 5.7 | 1/2 | gym ambient, mixed | `#312B23` (S0, low-medium) |
| Charcoal breeze-block screen wall (garden-side) | `#444A4A` | stills | 14-38 | 4.8 / 4.8 | 2/2 | daylight | `#444A4A` (S0, low-medium) |

### Zone 2 - Interior wooden cafe

| Material | Anchor HEX | Source | L* p10-p90 | Spread dE (group / all) | Crops/photos | Lighting | DERIVED |
|---|---|---|---|---|---|---|---|
| Oak wall panelling and shelving | `#643E25` | reel | 26-34 | 11.9 / 11.9 | 3/3 | LED+daylight | `#673D1C` (C, low) |
| Oak veneer soffit (counter area) | `#542B17` | reel | 21-24 | 14.9 / 14.9 | 3/3 | LED+daylight | `#562A11` (C, low) |
| Woven cane ceiling (café) | `#804A1C` | stills | 29-48 | 1 crop / 18.2 | 1/3 | daylight | `#804A1C` (S0, low-medium) |
| Teak tables | `#BB7A46` | stills | 45-70 | 1 crop / 35.1 | 1/3 | LED+daylight, daylight | `#BB7A46` (S0, low-medium) |
| Dark weathered timber deck (café terrace) | `#423C38` | stills | 18-39 | 1 crop / 12.9 | 1/2 | daylight | `#423C38` (S0, low-medium) |
| Tan polished floor (café interior) | `#896A46` | reel | 38-53 | 16.9 / 16.9 | 2/2 | LED+daylight | `#8D6938` (C, low) |
| Cream upholstered benches and sofas (cafe) | `#C5C0B2` | stills | 68-88 | 1 crop / 7.3 | 1/2 | daylight | `#C5C0B2` (S0, low-medium) |
| Cream plaster wall (cafe) | `#9F8F66` | stills | 54-67 | 1 crop / 24.9 | 1/2 | daylight | `#9F8F66` (S0, low-medium) |
| Limestone feature wall (café) | `#66583B` | stills | 32-43 | 1 crop / 10.0 | 1/2 | daylight | `#66583B` (S0, low-medium) |
| Charred / black-stained timber (columns, cladding) | `#403B3F` | stills | 19-35 | 4.5 / 4.5 | 3/3 | daylight | `#403B3F` (S0, low-medium) |
| Oak lockers and vanity cabinet | `#4A230E` | reel | 11-23 | 3.1 / 3.1 | 2/2 | warm LED | `#4B2209` (C, low) |

### Zone 3 - Beige and cream spa

| Material | Anchor HEX | Source | L* p10-p90 | Spread dE (group / all) | Crops/photos | Lighting | DERIVED |
|---|---|---|---|---|---|---|---|
| Sand-ochre plaster wall (recovery rooms) | `#A38559` | stills | 48-62 | 4.6 / 14.8 | 2/4 | LED+daylight, daylight | `#A38559` (S0, low-medium) |
| Sand mosaic tile (plunge pools) | `#C6B89E` | stills | 63-82 | 17.1 / 41.0 | 2/3 | daylight | `#C6B89E` (S0, low-medium) |
| Polished sand floor (plunge room) | `#967856` | stills | 44-59 | 1 crop / 1 crop | 1/1 | daylight | `#967856` (S0, low-medium) |
| Cream plaster ceiling (cafe, changing rooms) | `#8C6438` | reel | 45-48 | 13.8 / 13.8 | 4/4 | LED+daylight, warm LED | `#90632C` (C, low) |
| Travertine vanity top (lit) | `#A47843` | reel | 32-68 | 1 crop / 1 crop | 1/1 | warm LED | `#A97635` (C, low) |
| Travertine vanity front (shade) | `#643C1C` | reel | 18-32 | 1 crop / 1 crop | 1/1 | warm LED | `#673B15` (C, low) |
| Cream linen cushions (pool deck, sofas) | `#CEC5BA` | stills | 56-88 | 4.4 / 4.4 | 2/2 | daylight | `#CEC5BA` (S0, low-medium) |
| Pool-deck stone paving | `#C2BCB6` | stills | 62-83 | 1 crop / 18.0 | 1/2 | daylight | `#C2BCB6` (S0, low-medium) |
| Sauna wall boards | `#411B03` | stills | 8-30 | 1 crop / 8.0 | 1/2 | warm LED | `#A06300` (D, low) |
| Sauna timber in daylight (same room before the LED strips, 2024 photo) | `#A06300` | stills | 40-57 | 16.1 / 16.1 | 2/1 | daylight | `#A06300` (S0, low-medium) |
| Sauna bench top | `#FECA69` | stills | 75-88 | 1 crop / 27.2 | 1/2 | warm LED | none |

### Raw concrete, black EF logo, taupe logo

| Material | Anchor HEX | Source | L* p10-p90 | Spread dE (group / all) | Crops/photos | Lighting | DERIVED |
|---|---|---|---|---|---|---|---|
| Poured concrete wall, exterior daylight | `#8E8C80` | stills | 40-68 | 24.2 / 24.2 | 3/3 | daylight | `#8E8C80` (S0, low-medium) |
| Poured concrete wall, interior | `#81796C` | stills | 29-61 | 29.3 / 36.9 | 4/5 | daylight, gym ambient, mixed | `#81796C` (S0, low-medium) |
| Black EF logo (wall-mounted) | `#121317` | stills | 3-7 | 1 crop / 8.1 | 1/4 | LED+daylight, daylight, gym ambient | `#121317` (S0, low-medium) |
| Roadside sign: charcoal panel | `#22232B` | reel | 13-15 | 1 crop / 1 crop | 1/1 | daylight | none |
| Roadside sign: light-grey logo | `#6B6E7A` | reel | 45-48 | 1 crop / 1 crop | 1/1 | daylight | none |

### Tropical green

| Material | Anchor HEX | Source | L* p10-p90 | Spread dE (group / all) | Crops/photos | Lighting | DERIVED |
|---|---|---|---|---|---|---|---|
| Tropical foliage in shade (palms, ferns) | `#22380E` | stills | 8-34 | 10.4 / 14.6 | 2/3 | daylight | `#22380E` (S0, low-medium) |
| Tropical foliage in light (monstera, sunlit palm) | `#9FB84D` | stills | 48-86 | 34.1 / 34.1 | 3/3 | daylight | `#9FB84D` (S0, low-medium) |
| Outdoor turf | `#496A40` | stills | 35-55 | 21.0 / 21.0 | 4/4 | daylight | `#496A40` (S0, low-medium) |

### Teal pool

| Material | Anchor HEX | Source | L* p10-p90 | Spread dE (group / all) | Crops/photos | Lighting | DERIVED |
|---|---|---|---|---|---|---|---|
| Pool water (teal) | `#609994` | stills | 54-65 | 6.5 / 25.1 | 2/4 | daylight | `#609994` (S0, low-medium) |
| Pool sun shelf (shallow water, pale aqua) | `#CCD2CC` | stills | 80-86 | 4.1 / 19.1 | 2/3 | daylight | `#CCD2CC` (S0, low-medium) |
| Teal glazed tile feature wall | `#4A9197` | stills | 52-62 | 1 crop / 1 crop | 1/1 | daylight | `#4A9197` (S0, low-medium) |

### Brand red

| Material | Anchor HEX | Source | L* p10-p90 | Spread dE (group / all) | Crops/photos | Lighting | DERIVED |
|---|---|---|---|---|---|---|---|
| Brand red: BETTER TOGETHER closing frame | `#B3483B` | reel | 27-61 | 1 crop / 1 crop | 1/1 | digital card | none |
| Red hexagon agility boxes | `#AF5E61` | reel | 43-54 | 1 crop / 1 crop | 1/1 | daylight | none |

## 4. Reel against still, same material

Positive dL means the reel is lighter. `C` = the reel reading after the hue transfer (lightness of the reel kept). The still is the more trustworthy source: it is a photograph with balanced exposure; the reel adds a warm grade, LED tint, under-exposure and video compression.

| Material | Still HEX | Reel HEX | dE00 | dL* | da* | db* | Hue-only dE | Reel after C |
|---|---|---|---|---|---|---|---|---|
| Dark machine grey (cardio and strength frames) | `#413C3E` | `#2E2B2F` | 5.79 | -7.9 | -0.3 | -1.6 | 1.57 | `#302B25` |
| Black iron weights (medicine balls, kettlebells) | `#141817` | `#201818` | 7.92 | +1.5 | +5.5 | +1.7 | 7.86 | `#221812` |
| Gym rubber floor | `#52525D` | `#181213` | 21.26 | -29.3 | +0.9 | +6.6 | 5.98 | `#19120E` |
| Gym ceiling (dark) | `#312B23` | `#251D1A` | 5.73 | -6.3 | +2.1 | -2.7 | 3.95 | `#271D13` |
| Woven cane ceiling (café) | `#804A1C` | `#4D301B` | 13.66 | -14.3 | -8.0 | -17.3 | 8.03 | `#4F2F14` |
| Teak tables | `#BB7A46` | `#60483E` | 26.84 | -24.1 | -11.3 | -28.7 | 14.17 | `#634731` |
| Dark weathered timber deck (café terrace) | `#423C38` | `#6A5D5D` | 12.88 | +14.9 | +3.5 | -1.5 | 4.66 | `#6F5D4C` |
| Cream upholstered benches and sofas (cafe) | `#C5C0B2` | `#B2AAA4` | 7.31 | -7.6 | +2.5 | -3.6 | 4.64 | `#B9AA87` |
| Cream plaster wall (cafe) | `#9F8F66` | `#58533B` | 24.89 | -24.7 | -1.9 | -9.2 | 5.52 | `#5B532F` |
| Limestone feature wall (café) | `#66583B` | `#453F2C` | 10.04 | -11.3 | -2.0 | -6.3 | 4.43 | `#483F22` |
| Sand-ochre plaster wall (recovery rooms) | `#A38559` | `#88633E` | 13.08 | -12.4 | +4.9 | -1.2 | 4.33 | `#8C6231` |
| Sand mosaic tile (plunge pools) | `#C6B89E` | `#685540` | 35.33 | -37.9 | +3.5 | +0.4 | 4.25 | `#6C5433` |
| Pool-deck stone paving | `#C2BCB6` | `#82909D` | 17.98 | -17.5 | -3.2 | -12.3 | 11.43 | `#889182` |
| Sauna wall boards | `#411B03` | `#5F331C` | 7.97 | +11.4 | +0.9 | +1.6 | 0.83 | `#613215` |
| Sauna bench top | `#FECA69` | `#A16F2B` | 27.22 | -33.3 | +5.5 | -10.4 | 5.96 | `#A56D21` |
| Poured concrete wall, exterior daylight | `#8E8C80` | `#AA9F87` | 8.6 | +7.7 | +1.5 | +7.3 | 5.5 | `#B19F6F` |
| Poured concrete wall, interior | `#81796C` | `#342D28` | 26.77 | -32.1 | +1.5 | -4.1 | 4.09 | `#362D1F` |
| Black EF logo (wall-mounted) | `#121317` | `#1D110F` | 7.95 | +0.4 | +4.8 | +5.8 | 7.95 | `#1E110A` |
| Tropical foliage in shade (palms, ferns) | `#22380E` | `#353E32` | 11.88 | +4.1 | +11.3 | -17.0 | 11.52 | `#383E28` |
| Pool water (teal) | `#609994` | `#37727C` | 15.93 | -14.7 | +3.6 | -7.8 | 6.52 | `#3B7467` |
| Pool sun shelf (shallow water, pale aqua) | `#CCD2CC` | `#8A949D` | 18.99 | -22.8 | +1.4 | -8.5 | 8.03 | `#919582` |

**Calibration of method C.** Per-channel gain in linear sRGB [1.052, 0.961, 0.631] (geometric mean over 7 paired materials). Leave-one-out test: mean hue-only error 5.94 dE before, 5.1 after. Median lightness shift of the reel against stills: -14.3 L*. Weak: the correction cuts the mean hue error from 5.9 to 5.1 delta-E2000 only, and gains scatter by material. The reel is not a uniform warm cast; it is darker (median -14 L*) and differently graded per room. Treat every reel-only DERIVED value as +/- 6 delta-E.

**Sauna, the clearest case.** LED-lit still wall `#411B03`, reel wall `#5F331C`, and a 2024 photo of the same room in window daylight without strip lighting `#A06300` (method D, phone photo with strong processing, treat as indicative). The amber of the sauna and the steam room is light, not timber colour.

**Web copy against original.** 37 crops measured on both: mean dE00 0.83, max 8.53 (sunlit palm, a masked crop). The proposal-site WebP files are colour-faithful.

## 5. Reference whites used for the DERIVED column

| Frame | Reference | Measured HEX | Linear gain R/G/B |
|---|---|---|---|
| bloodwork-cafe.webp | white chair-seat cushion | `#EEEEEC` | [0.999, 0.999, 1.018] |
| recovery-sauna.webp | white towels on heater | `#918E8E` | [0.965, 1.01, 1.01] |
| r06 | white sock on hook | `#AE9082` | [0.722, 1.096, 1.369] |
| r14 | white chair cushion | `#A28562` | [0.701, 1.08, 2.075] |
| r42 | white chair cushion | `#625654` | [0.803, 1.067, 1.107] |

Only the café still gives a true neutral (gain about 1.00). The reel references read warm (R gain 0.70-0.80, B gain 1.1-2.1), which is why the reel cannot be corrected per frame.

## 6. Proposed palettes with contrast

WCAG 2.x contrast ratio. AA needs 4.5:1 for normal text, 3:1 for large text and interface parts. Adjustments change CIELAB L* only (a*, b* kept) by the smallest step that reaches 4.5:1.

### Zone 1 - Workout area: charcoal, metal, black

Lighting: mixed: warm track spots plus daylight through the glass wall (stills); under-exposed warm-graded reel. Source photograph on the board: `perform-gym-floor.webp`. Text polarity: light text on dark base.

| Role | Final HEX | Measured HEX | L* | Material, statistic | Basis |
|---|---|---|---|---|---|
| deep | `#060708` | `#060708` | 1.9 | weights_iron, p10 | darkest decile of black iron weights and medicine balls | p10 lightness tone of the still crops |
| base | `#1D2123` | `#1D2123` | 12.4 | black_steel, rep | rack uprights and frames | recommended anchor (stills) |
| mid | `#413C3E` | `#413C3E` | 25.9 | machine_grey, rep | treadmill decks and machine paint | recommended anchor (stills) |
| light | `#81796C` | `#81796C` | 51.2 | concrete_interior, rep | poured concrete wall inside the gym (warm-lit) | recommended anchor (stills) |
| accent | `#B3483B` | `#B3483B` | 45.0 | red_text, rep | brand red of the closing frame | recommended anchor (reel) |
| text | `#EEEEEC` | `#EEEEEC` | 94.0 | ref_white_cafe, white reference | white chair cushion in bloodwork-cafe.webp, a neutral reference (gain 0.999/0.999/1.018) |

| Surface | Text on it | Ratio | AA | Alt text | Ratio | AA |
|---|---|---|---|---|---|---|
| deep `#060708` | `#EEEEEC` | 17.35 | pass | `#060708` | 1.0 | fail |
| base `#1D2123` | `#EEEEEC` | 13.97 | pass | `#060708` | 1.24 | fail |
| mid `#413C3E` | `#EEEEEC` | 9.31 | pass | `#060708` | 1.86 | fail |
| light `#81796C` | `#EEEEEC` | 3.7 | fail | `#060708` | 4.69 | pass |
| accent `#B3483B` | `#EEEEEC` | 4.63 | pass | `#060708` | 3.75 | fail |

Accent as text on the base: measured `#B3483B` gives 3.02:1; adjusted `#D66656` gives 4.55:1 (CIELAB L* moved by 11.6, a* and b* kept). The measured accent stays for fills and large shapes.

Other measured materials of this zone, available as substitutes: Black steel (rack uprights) `#1D2123` (stills); Gym rubber floor `#52525D` (stills); Dark machine grey (cardio and strength frames) `#413C3E` (stills); Black iron weights (medicine balls, kettlebells) `#141817` (stills); Gym ceiling (dark) `#312B23` (stills); Charcoal breeze-block screen wall (garden-side) `#444A4A` (stills).

### Zone 2 - Interior wooden cafe

Lighting: open-air covered cafe in diffuse daylight (still); warm LED strips plus daylight with warm grade (reel). Source photograph on the board: `bloodwork-cafe.webp`. Text polarity: light text on dark base.

| Role | Final HEX | Measured HEX | L* | Material, statistic | Basis |
|---|---|---|---|---|---|
| deep | `#423C38` | `#423C38` | 25.8 | floor_dark_timber, rep | weathered dark timber deck and columns | recommended anchor (stills) |
| base | `#804A1C` | `#804A1C` | 37.1 | ceiling_woven, rep | woven cane ceiling | recommended anchor (stills) |
| mid | `#BB7A46` | `#BB7A46` | 57.0 | table_teak, rep | teak tables in daylight | recommended anchor (stills) |
| light | `#C5C0B2` | `#C5C0B2` | 77.7 | bench_cream, rep | cream upholstered benches | recommended anchor (stills) |
| accent | `#9FB84D` | `#9FB84D` | 71.0 | foliage_lit, rep | monstera and sunlit palms | recommended anchor (stills) |
| text | `#EEEEEC` | `#EEEEEC` | 94.0 | ref_white_cafe, white reference | white chair cushion in bloodwork-cafe.webp |

| Surface | Text on it | Ratio | AA | Alt text | Ratio | AA |
|---|---|---|---|---|---|---|
| deep `#423C38` | `#EEEEEC` | 9.34 | pass | `#423C38` | 1.0 | fail |
| base `#804A1C` | `#EEEEEC` | 6.2 | pass | `#423C38` | 1.51 | fail |
| mid `#BB7A46` | `#EEEEEC` | 3.02 | fail | `#423C38` | 3.09 | fail |
| light `#C5C0B2` | `#EEEEEC` | 1.56 | fail | `#423C38` | 5.97 | pass |
| accent `#9FB84D` | `#EEEEEC` | 1.92 | fail | `#423C38` | 4.88 | pass |

Accent as text on the base: measured `#9FB84D` gives 3.24:1; adjusted `#BFD76A` gives 4.51:1 (CIELAB L* moved by 11.2, a* and b* kept). The measured accent stays for fills and large shapes.

Other measured materials of this zone, available as substitutes: Oak wall panelling and shelving `#643E25` (reel); Oak lockers and vanity cabinet `#4A230E` (reel); Woven cane ceiling (café) `#804A1C` (stills); Oak veneer soffit (counter area) `#542B17` (reel); Dark weathered timber deck (café terrace) `#423C38` (stills); Tan polished floor (café interior) `#896A46` (reel); Teak tables `#BB7A46` (stills); Cream upholstered benches and sofas (cafe) `#C5C0B2` (stills); Cream plaster wall (cafe) `#9F8F66` (stills); Limestone feature wall (café) `#66583B` (stills); Charred / black-stained timber (columns, cladding) `#403B3F` (stills).

### Zone 3 - Beige and cream spa

Lighting: daylight from a window plus soft ambient (stills); daylight from a clerestory (reel). Source photograph on the board: `recovery-ice-bath.webp`. Text polarity: dark text on light base.

| Role | Final HEX | Measured HEX | L* | Material, statistic | Basis |
|---|---|---|---|---|---|
| deep | `#643C1C` | `#643C1C` | 29.5 | travertine_front, rep | travertine vanity front in shade (reel only) | recommended anchor (reel) |
| base | `#C6B89E` | `#C6B89E` | 75.3 | tile_sand, rep | sand mosaic tiles | recommended anchor (stills) |
| mid | `#A38559` | `#A38559` | 57.4 | plaster_sand, rep | sand-ochre plaster walls | recommended anchor (stills) |
| light | `#D6CAB4` | `#D6CAB4` | 81.7 | tile_sand, p90 | lit sand mosaic tile | p90 lightness tone of the still crops |
| accent | `#FECA69` | `#FECA69` | 84.1 | sauna_bench, rep | amber LED glow on timber (LED-lit, flagged) | recommended anchor (stills) |
| text | `#643C1C` | `#643C1C` | 29.5 | travertine_front, rep | the deep swatch used as text |

| Surface | Text on it | Ratio | AA | Alt text | Ratio | AA |
|---|---|---|---|---|---|---|
| base `#C6B89E` | `#643C1C` | 4.88 | pass | `#EEEEEC` | 1.68 | fail |
| mid `#A38559` | `#643C1C` | 2.75 | fail | `#EEEEEC` | 2.98 | fail |
| light `#D6CAB4` | `#643C1C` | 5.88 | pass | `#EEEEEC` | 1.39 | fail |
| accent `#FECA69` | `#643C1C` | 6.29 | pass | `#EEEEEC` | 1.3 | fail |

Accent on the base: measured `#FECA69` gives 1.29:1. Not usable as text on this base: reaching 4.5:1 would need a lightness move above 20 L*, which is a different colour. Use the text swatch for type; accent only for fills and large shapes.

Other measured materials of this zone, available as substitutes: Cream plaster ceiling (cafe, changing rooms) `#8C6438` (reel); Sand-ochre plaster wall (recovery rooms) `#A38559` (stills); Sand mosaic tile (plunge pools) `#C6B89E` (stills); Polished sand floor (plunge room) `#967856` (stills); Travertine vanity top (lit) `#A47843` (reel); Travertine vanity front (shade) `#643C1C` (reel); Cream linen cushions (pool deck, sofas) `#CEC5BA` (stills); Pool-deck stone paving `#C2BCB6` (stills); Sauna wall boards `#411B03` (stills); Sauna timber in daylight (same room before the LED strips, 2024 photo) `#A06300` (stills); Sauna bench top `#FECA69` (stills).

### Raw concrete, black EF logo, taupe logo

Lighting: direct daylight, sun and shade (exterior); gym spot lighting (interior reel). Source photograph on the board: `location-entrance.webp`. Text polarity: dark text on light base.

| Role | Final HEX | Measured HEX | L* | Material, statistic | Basis |
|---|---|---|---|---|---|
| deep | `#121317` | `#121317` | 5.9 | logo_black, rep | black wall-mounted logo | recommended anchor (stills) |
| base | `#8E8C80` | `#8E8C80` | 58.1 | concrete_exterior, rep | poured concrete, exterior daylight | recommended anchor (stills) |
| mid | `#5F615C` | `#5F615C` | 40.8 | concrete_exterior, p10 | shaded concrete | p10 lightness tone of the still crops |
| light | `#AA9F87` | `#AA9F87` | 65.8 | concrete_exterior, crop:r02 | sun-lit concrete beside the logo (reel) | single crop r02 |
| accent | `#A48F82` | `#A48F82` | 60.9 | logo-taupe.png, exact asset colour | flat colour of the supplied taupe logo file, not a photograph |
| text | `#121317` | `#121317` | 5.9 | logo_black, rep | the deep swatch used as text |

| Surface | Text on it | Ratio | AA | Alt text | Ratio | AA |
|---|---|---|---|---|---|---|
| base `#8E8C80` | `#121317` | 5.49 | pass | `#EEEEEC` | 2.91 | fail |
| mid `#5F615C` | `#121317` | 2.96 | fail | `#EEEEEC` | 5.39 | pass |
| light `#AA9F87` | `#121317` | 7.09 | pass | `#EEEEEC` | 2.25 | fail |
| accent `#A48F82` | `#121317` | 6.04 | pass | `#EEEEEC` | 2.65 | fail |

Accent on the base: measured `#A48F82` gives 1.1:1. Not usable as text on this base: reaching 4.5:1 would need a lightness move above 20 L*, which is a different colour. Use the text swatch for type; accent only for fills and large shapes.

Other measured materials of this zone, available as substitutes: Poured concrete wall, exterior daylight `#8E8C80` (stills); Poured concrete wall, interior `#81796C` (stills); Black EF logo (wall-mounted) `#121317` (stills); Roadside sign: charcoal panel `#22232B` (reel); Roadside sign: light-grey logo `#6B6E7A` (reel).

### Tropical green

Lighting: daylight, sun and shade (outdoor). Source photograph on the board: `class-kettlebell.webp`. Text polarity: light text on dark base.

| Role | Final HEX | Measured HEX | L* | Material, statistic | Basis |
|---|---|---|---|---|---|
| deep | `#22380E` | `#22380E` | 20.8 | foliage_shade, rep | palms and ferns in shade | recommended anchor (stills) |
| base | `#496A40` | `#496A40` | 41.4 | turf, rep | outdoor turf | recommended anchor (stills) |
| mid | `#708A4E` | `#708A4E` | 54.2 | turf, p90 | sunlit turf | p90 lightness tone of the still crops |
| light | `#C9E18A` | `#C9E18A` | 86.1 | foliage_lit, p90 | sunlit leaf highlights | p90 lightness tone of the still crops |
| accent | `#9FB84D` | `#9FB84D` | 71.0 | foliage_lit, rep | monstera and sunlit palms | recommended anchor (stills) |
| text | `#EEEEEC` | `#EEEEEC` | 94.0 | ref_white_cafe, white reference | white chair cushion in bloodwork-cafe.webp |

| Surface | Text on it | Ratio | AA | Alt text | Ratio | AA |
|---|---|---|---|---|---|---|
| deep `#22380E` | `#EEEEEC` | 11.02 | pass | `#22380E` | 1.0 | fail |
| base `#496A40` | `#EEEEEC` | 5.29 | pass | `#22380E` | 2.08 | fail |
| mid `#708A4E` | `#EEEEEC` | 3.33 | fail | `#22380E` | 3.31 | fail |
| light `#C9E18A` | `#EEEEEC` | 1.24 | fail | `#22380E` | 8.91 | pass |
| accent `#9FB84D` | `#EEEEEC` | 1.92 | fail | `#22380E` | 5.75 | pass |

Accent as text on the base: measured `#9FB84D` gives 2.76:1; adjusted `#D0E87A` gives 4.54:1 (CIELAB L* moved by 17.2, a* and b* kept). The measured accent stays for fills and large shapes.

Other measured materials of this zone, available as substitutes: Tropical foliage in shade (palms, ferns) `#22380E` (stills); Tropical foliage in light (monstera, sunlit palm) `#9FB84D` (stills); Outdoor turf `#496A40` (stills).

### Teal pool

Lighting: overcast daylight (stills); direct aerial daylight (r46). Source photograph on the board: `hero-pool-deck.webp`. Text polarity: dark text on light base.

| Role | Final HEX | Measured HEX | L* | Material, statistic | Basis |
|---|---|---|---|---|---|
| deep | `#3F6068` | `#3F6068` | 38.6 | pool, crop:r35 | pool seen at deck level in video (cool grade) | single crop r35 |
| base | `#609994` | `#609994` | 59.3 | pool, rep_still | pool water in photographs | rep_still |
| mid | `#528D84` | `#528D84` | 54.6 | pool, p10 | deeper tone of the photographed water | p10 lightness tone of the still crops |
| light | `#CCD2CC` | `#CCD2CC` | 83.6 | pool_shallow, rep_still | pale sun shelf (sky-reflective) | rep_still |
| accent | `#2F848F` | `#2F848F` | 50.8 | pool, crop:r46 | aerial reading, least sky reflection | single crop r46 |
| text | `#121317` | `#121317` | 5.9 | logo_black, rep | black logo as text colour |

| Surface | Text on it | Ratio | AA | Alt text | Ratio | AA |
|---|---|---|---|---|---|---|
| deep `#3F6068` | `#121317` | 2.73 | fail | `#EEEEEC` | 5.86 | pass |
| base `#609994` | `#121317` | 5.73 | pass | `#EEEEEC` | 2.79 | fail |
| mid `#528D84` | `#121317` | 4.86 | pass | `#EEEEEC` | 3.29 | fail |
| light `#CCD2CC` | `#121317` | 12.07 | pass | `#EEEEEC` | 1.32 | fail |
| accent `#2F848F` | `#121317` | 4.26 | fail | `#EEEEEC` | 3.75 | fail |

Accent on the base: measured `#2F848F` gives 1.35:1. Not usable as text on this base: reaching 4.5:1 would need a lightness move above 20 L*, which is a different colour. Use the text swatch for type; accent only for fills and large shapes.

Other measured materials of this zone, available as substitutes: Pool water (teal) `#609994` (stills); Pool sun shelf (shallow water, pale aqua) `#CCD2CC` (stills); Teal glazed tile feature wall `#4A9197` (stills).

### Brand red

Lighting: digital title card on black; daylight outdoors for the hexagon boxes (blur-mixed). Source photograph on the board: `e49.2`. Text polarity: light text on dark base.

| Role | Final HEX | Measured HEX | L* | Material, statistic | Basis |
|---|---|---|---|---|---|
| deep | `#6C2921` | `#6C2921` | 26.4 | red_text, p10 | darkest letter shading | p10 lightness tone of the reel crops |
| base | `#B3483B` | `#B3483B` | 45.0 | red_text, rep | BETTER TOGETHER, median of the letter pixels | recommended anchor (reel) |
| mid | `#AF5E61` | `#AF5E61` | 49.5 | red_hex, rep | red hexagon boxes (motion-blurred, mixed with turf) | recommended anchor (reel) |
| light | `#F06953` | `#F06953` | 61.0 | red_text, p90 | highlight on letter faces | p90 lightness tone of the reel crops |
| ground | `#000000` | `#000000` | 0.0 | end_card, measured | closing frame background, median RGB 0,0,0 |
| text | `#FFFFFF` | `#FFFFFF` | 100.0 | logo-white.png, exact asset colour | flat white of the supplied logo file |

| Surface | Text on it | Ratio | AA | Alt text | Ratio | AA |
|---|---|---|---|---|---|---|
| deep `#6C2921` | `#FFFFFF` | 10.62 | pass | `#6C2921` | 1.0 | fail |
| base `#B3483B` | `#FFFFFF` | 5.38 | pass | `#6C2921` | 1.98 | fail |
| mid `#AF5E61` | `#FFFFFF` | 4.57 | pass | `#6C2921` | 2.33 | fail |
| light `#F06953` | `#FFFFFF` | 3.07 | fail | `#6C2921` | 3.47 | fail |
| ground `#000000` | `#FFFFFF` | 21.0 | pass | `#6C2921` | 1.98 | fail |

Other measured materials of this zone, available as substitutes: Brand red: BETTER TOGETHER closing frame `#B3483B` (reel); Red hexagon agility boxes `#AF5E61` (reel).

## 7. Biggest uncertainties

- **Oak wall, oak lockers, soffit, travertine and the café tan floor exist only in the reel.** Where reel and stills show the same material the reel is a median 14 L* darker (up to 38) and its hue error is about 6 dE even after correction, so these browns are lower bounds on lightness.
- **LED-lit rooms (sauna, steam room, changing rooms, café counter).** Hue and chroma are set by the amber strips. Daylight estimates exist for the sauna only, from a 2024 phone photo.
- **Brand red.** Only the closing title card carries it, a glossy animated gradient on black (letters run from `#6C2921` to `#F06953`; median `#B3483B`). No photographed red surface; the hexagon boxes (`#AF5E61`) are motion-blurred and mixed with turf. The brand file value may differ.
- **Black EF logo.** Near-black, L* 4 to 9 across four crops; the 2026 entrance still gives `#121317`. No flat design file was available for it; the taupe logo `#A48F82` and the white logo are exact file colours.
- **Photographs are processed marketing images.** sRGB assumed (profiles say sRGB where present), no calibration chart in any frame; absolute accuracy is a few dE, relative differences between zones are more reliable than single values.
- **Thin evidence.** One photograph or frame only for: sand floor, travertine top and front, sign panel and logo, both reds, teal tile, daylight sauna. A spread of "1 crop" means it could not be computed, not that it is zero.
- **2023 daylight gym photo** reads cool (blue-grey floor `#59647A`) against warm 2026 gym spots (`#49403F`); the representative `#52525D` is a mean of two lightings.

## 8. Rejected and excluded items

| Item | Reason | Measured |
|---|---|---|
| class-skipping.webp (rubber_floor) | Club-site image of a gym room with a blue-grey rubber floor (#516977) and yellow hazard stripe that has no counterpart in the 2026 photographs or in the reel: an earlier or different room, cool grade. Not used for the current fit-out; shown for information. | `#516977` |
| r38 (ceiling_woven) | Soffit over the pool deck in deep shade, L* 12; not the café ceiling and not evenly lit. | `#271D1A` |
| hero-poster.jpg (charred_timber) | Pillar face crushed to #030305 (L* 0.8): below the measurable range of the JPEG, not a material colour. | `#030305` |
| recovery-steam.webp (tile_sand) | Steam room mosaic reads #B66D0E: amber LED strip dominates the colour, tile hue not recoverable. Shown separately as LED reading. | `#B66D0E` |
| recovery-pool-deck.webp (cushion_cream) | Same photograph as hero-pool-deck (4:3 crop); not an independent source. | `#CCC4BC` |
| hero-poster.jpg (cushion_cream) | Same photograph as hero-pool-deck (correlation 0.9996); not independent. |  |
| hero-pool-ripples.mp4 (pool) | The pool in this clip is royal-blue tile, not the club's turquoise water seen in every club photograph. The clip is a placeholder of unverified origin. Frame-median RGB over 6 frames: #0346A7. | `#0346A7` |
| r38 (pool) | Reflects sky and roof shade, #4D717E; kept as a reading but not evenly lit. | `#4D717E` |
| 2023_11_Frame-968.png (original library) | Three-dimensional render of the pool deck, not a photograph. |  |
| 2023_11_Frame-969-1.png (facade with logo) | Retouched marketing frame of the facade with a different grade: the logo bar reads dark teal #17282E (L* 14.8), not the near-black of the 2026 entrance photograph, and the concrete reads neutral grey #9F9D9B. Measured for audit only. | logo_bar `#17282E`, concrete `#9F9D9B` |
| 2023_11_Group-456-4.png (gym, EF mark) | Darkened, low-key hero graphic (home slide 1) with a graded look; logo bar #0E1111, concrete #64686C. Measured for audit only. | logo_bar `#0E1111`, concrete `#64686C` |
| 2023_11_Frame-952-5.png, 2023_11_Frame-970-1.png, 2024_06_Frame-972-1 (people portraits) | People dominate the frame and the images are graded marketing stills; no clean material area. |  |
| 2025_09_Form.jpeg | Low-key image, mostly black; no usable material areas. |  |
| Reel frames frames/f_00.png ... f_50.png (earlier extraction) | Decoded with the BT.601 matrix; the stream is flagged BT.709. Re-decoded, see meta. Mean 2.7 levels per channel off on a test frame. |  |
| zone-clusters.json (k-means v1) | Cluster centres of whole frames, amber-tinted by LED light and the reel grade, no crop control. Superseded; not used. |  |
| trainer-*.webp, class-*.webp people areas | People portraits; class-*.webp used only for turf, breeze block and rack areas away from people. |  |
| proposal/assets/elitefit-site-today.png | Screenshot of the current website interface, not the interior. |  |
| hero-reel-poster.jpg | A frame of the reel (same colour grade); no new information. |  |

Box review log (boxes redrawn after the overlay check):

- Draft boxes were redrawn after the overlay review where they touched another material: oak_wall r08 moved off the hanging plant; oak vanity cabinet r22 moved below the travertine edge; rubber floor r28 moved off the machine base; café timber deck bloodwork-cafe moved off chair legs and shadows; tile and plaster boxes moved off the window and jacuzzi spray; woven ceiling r38 dropped (deep shade); white references picked on cushions and socks, away from specular spots.
- The tin-grey pool tone in r38 and r35 is sky and roof reflection; kept only as the deep pool reading, labelled.
- Foliage was split into shade and lit, because one number for leaves in sun and in shade has no meaning.
- Sauna split into LED-lit (2026 still, reel) and daylight (2024 photo of the same room) so the two lighting conditions are never averaged.

## 9. Appendix: every crop

| Material | Source | Box (x0,y0,x1,y1) | HEX | L* med | L* p10 | L* p90 | Lab | Lighting |
|---|---|---|---|---|---|---|---|---|
| black_steel | perform-outdoor-rig.webp -> original 2026_09_8.jpg | (1358, 2347, 1443, 2987) (web box (192, 440, 208, 560)) | `#111615` | 7.0 | 2.6 | 14.4 | 7/-2/-0 | daylight |
| black_steel | class-kettlebell.webp | (138, 330, 156, 480) | `#232323` | 13.7 | 5.7 | 24.0 | 14/-0/0 | daylight |
| black_steel | o:2023_12_DSC00061.jpg | (580, 1700, 625, 2050) | `#1D212C` | 12.9 | 6.9 | 19.6 | 13/1/-8 | daylight |
| machine_grey | perform-gym-floor.webp -> original 2026_09_6.jpg | (1134, 2880, 1667, 3200) (web box (150, 540, 250, 600)) | `#413C3E` | 25.9 | 18.3 | 37.6 | 26/3/-0 | mixed |
| machine_grey | r30 | (225, 900, 265, 1050) | `#2E2B2F` | 18.1 | 6.9 | 32.8 | 18/2/-2 | gym ambient |
| weights_iron | perform-outdoor-rig.webp -> original 2026_09_8.jpg | (1774, 1397, 1961, 1573) (web box (270, 262, 305, 295)) | `#0B0F0F` | 4.0 | 1.1 | 17.3 | 4/-1/-0 | daylight |
| weights_iron | class-kettlebell.webp | (30, 262, 80, 292) | `#1E201F` | 12.0 | 1.9 | 27.6 | 12/-1/0 | daylight |
| weights_iron | r32 | (360, 1120, 690, 1270) | `#201818` | 9.2 | 5.4 | 33.9 | 9/4/2 | gym ambient |
| rubber_floor | perform-gym-floor.webp -> original 2026_09_6.jpg | (1934, 3200, 4067, 3947) (web box (300, 600, 700, 740)) | `#4A4140` | 28.6 | 19.9 | 41.7 | 28/4/2 | mixed |
| rubber_floor | r28 | (420, 1060, 630, 1230) | `#181213` | 6.2 | 5.2 | 6.9 | 6/3/0 | gym ambient |
| rubber_floor | o:2023_12_DSC00061.jpg | (1050, 3300, 1550, 3520) | `#59647A` | 42.2 | 38.9 | 44.8 | 42/1/-14 | daylight |
| gym_ceiling | perform-gym-floor.webp -> original 2026_09_6.jpg | (1667, 53, 3801, 293) (web box (250, 10, 650, 55)) | `#312B23` | 17.7 | 11.8 | 25.3 | 18/1/6 | mixed |
| gym_ceiling | r28 | (10, 20, 700, 120) | `#251D1A` | 11.6 | 11.1 | 12.6 | 12/3/4 | gym ambient |
| breeze_block | class-rowing.webp | (240, 290, 520, 480) mask neutral_dark | `#3D4648` | 29.2 | 20.1 | 36.3 | 29/-3/-2 | daylight |
| breeze_block | class-outdoor.webp | (0, 250, 200, 340) mask neutral_dark | `#4B4D4B` | 32.5 | 8.5 | 39.4 | 33/-1/1 | daylight |
| oak_wall | r06 | (170, 760, 470, 1080) | `#643D22` | 29.8 | 26.5 | 34.0 | 30/14/24 | LED+daylight |
| oak_wall | r08 | (130, 690, 265, 770) | `#8C572B` | 42.1 | 39.6 | 44.7 | 42/18/34 | LED+daylight |
| oak_wall | r12 | (172, 830, 238, 980) | `#603E25` | 29.6 | 24.4 | 33.5 | 30/12/21 | LED+daylight |
| ceiling_oak | r08 | (250, 20, 680, 170) | `#7C4E2D` | 37.6 | 34.1 | 43.1 | 38/16/27 | LED+daylight |
| ceiling_oak | r10 | (300, 220, 700, 440) | `#4A2617` | 19.5 | 16.9 | 23.7 | 20/15/17 | LED+daylight |
| ceiling_oak | r04 | (200, 10, 700, 110) | `#542B13` | 22.2 | 20.9 | 23.4 | 23/17/23 | LED+daylight |
| ceiling_woven | bloodwork-cafe.webp -> original 2026_09_14.jpg | (1134, 53, 4334, 747) (web box (150, 10, 750, 140)) | `#804A1C` | 37.0 | 28.9 | 47.6 | 37/19/36 | daylight |
| ceiling_woven | r42 | (390, 10, 710, 200) | `#5E3B21` | 28.3 | 21.6 | 35.2 | 28/12/22 | daylight |
| ceiling_woven | r36 | (20, 10, 700, 330) | `#3C2415` | 16.8 | 12.1 | 21.6 | 17/10/15 | daylight |
| table_teak | bloodwork-cafe.webp -> original 2026_09_14.jpg | (1401, 2667, 1934, 2763) (web box (200, 500, 300, 518)) | `#BB7A46` | 57.4 | 45.1 | 70.3 | 57/20/38 | daylight |
| table_teak | r14 | (5, 1045, 115, 1075) | `#816860` | 46.0 | 37.3 | 68.8 | 46/9/8 | LED+daylight |
| table_teak | r42 | (430, 956, 560, 980) | `#40281D` | 18.5 | 16.7 | 22.4 | 19/10/12 | daylight |
| floor_dark_timber | bloodwork-cafe.webp -> original 2026_09_14.jpg | (1934, 3067, 2441, 3413) (web box (300, 575, 395, 640)) | `#423C38` | 25.9 | 18.2 | 38.9 | 26/2/3 | daylight |
| floor_dark_timber | r44 | (130, 1130, 190, 1260) | `#6A5D5D` | 40.6 | 36.5 | 49.0 | 41/5/2 | daylight |
| floor_tan | r10 | (30, 1060, 230, 1240) | `#9C8059` | 55.4 | 45.8 | 63.0 | 55/5/25 | LED+daylight |
| floor_tan | r14 | (600, 1205, 715, 1275) | `#765434` | 38.9 | 30.7 | 43.2 | 39/10/24 | LED+daylight |
| bench_cream | bloodwork-cafe.webp -> original 2026_09_14.jpg | (5107, 2560, 5534, 2907) (web box (895, 480, 975, 545)) | `#C5C0B2` | 77.8 | 68.4 | 87.6 | 78/-1/8 | daylight |
| bench_cream | r44 | (0, 985, 100, 1060) | `#B2AAA4` | 70.1 | 67.1 | 71.0 | 70/2/4 | daylight |
| wall_cream | bloodwork-cafe.webp -> original 2026_09_14.jpg | (4494, 1227, 5347, 1760) (web box (780, 230, 940, 330)) | `#9F8F66` | 59.9 | 53.6 | 66.6 | 60/-0/24 | daylight |
| wall_cream | r42 | (520, 400, 700, 490) | `#58533B` | 35.2 | 31.8 | 37.9 | 35/-2/15 | daylight |
| limestone_feature | bloodwork-cafe.webp -> original 2026_09_14.jpg | (2841, 1760, 3641, 2027) (web box (470, 330, 620, 380)) | `#66583B` | 38.0 | 32.0 | 42.6 | 38/1/19 | daylight |
| limestone_feature | r42 | (30, 500, 230, 700) | `#453F2C` | 26.6 | 23.7 | 29.9 | 27/-1/13 | daylight |
| charred_timber | bloodwork-cafe.webp -> original 2026_09_14.jpg | (441, 907, 734, 2773) (web box (20, 170, 75, 520)) | `#403836` | 24.4 | 20.4 | 28.9 | 24/3/3 | daylight |
| charred_timber | hero-pool-deck.webp -> original 2026_09_10.jpg | (4312, 1032, 5250, 1407) (web box (1380, 240, 1680, 360)) | `#494445` | 29.3 | 19.0 | 40.0 | 29/2/0 | daylight |
| charred_timber | o:2023_12_DSC01306.jpg | (3030, 2120, 3740, 3030) | `#3F3B3F` | 25.4 | 5.0 | 34.6 | 25/3/-2 | daylight |
| oak_lockers | r20 | (130, 640, 400, 930) | `#4F240E` | 19.9 | 13.8 | 25.1 | 20/18/23 | warm LED |
| oak_lockers | r22 | (90, 1090, 650, 1190) | `#44220E` | 17.5 | 7.9 | 20.0 | 17/14/20 | warm LED |
| plaster_sand | recovery-ice-bath.webp -> original 2026_09_11.jpg | (916, 582, 2661, 1600) (web box (120, 120, 480, 330)) | `#A88551` | 57.9 | 49.1 | 63.4 | 58/7/33 | daylight |
| plaster_sand | recovery-jacuzzi.webp -> original 2024_09_Recharge-Jacuzzi.jpg | (98, 1523, 1472, 2652) (web box (20, 250, 300, 480)) | `#9E8561` | 57.2 | 47.5 | 60.3 | 57/4/23 | daylight |
| plaster_sand | r36 | (360, 600, 500, 760) | `#7D664D` | 44.8 | 42.3 | 48.0 | 45/5/18 | daylight |
| plaster_sand | r04 | (20, 450, 190, 850) | `#93602F` | 45.5 | 42.7 | 47.7 | 45/16/36 | LED+daylight |
| tile_sand | recovery-ice-bath.webp -> original 2026_09_11.jpg | (1401, 3394, 3243, 3782) (web box (220, 700, 600, 780)) | `#BBA177` | 67.6 | 52.1 | 75.4 | 68/3/25 | daylight |
| tile_sand | recovery-jacuzzi.webp -> original 2024_09_Recharge-Jacuzzi.jpg | (294, 4860, 2454, 5449) (web box (60, 930, 500, 1050)) | `#D2CFC6` | 83.2 | 73.7 | 89.3 | 83/-1/5 | daylight |
| tile_sand | r36 | (60, 1120, 260, 1190) | `#685540` | 37.4 | 30.1 | 41.9 | 38/5/15 | daylight |
| floor_spa | recovery-ice-bath.webp -> original 2026_09_11.jpg | (3728, 3345, 5425, 3830) (web box (700, 690, 1050, 790)) | `#967856` | 52.5 | 44.4 | 59.2 | 52/7/23 | daylight |
| ceiling_cream | r12 | (130, 70, 690, 330) | `#81715C` | 48.7 | 46.6 | 50.0 | 49/3/14 | LED+daylight |
| ceiling_cream | r14 | (200, 40, 700, 380) | `#7F6547` | 44.4 | 41.9 | 47.0 | 45/6/21 | LED+daylight |
| ceiling_cream | r20 | (60, 100, 240, 250) | `#976029` | 45.9 | 45.0 | 48.2 | 46/17/39 | warm LED |
| ceiling_cream | r22 | (560, 100, 700, 220) | `#976326` | 46.5 | 44.2 | 47.9 | 46/15/42 | warm LED |
| travertine_top | r22 | (60, 935, 240, 955) | `#A47843` | 53.8 | 32.0 | 67.8 | 54/11/35 | warm LED |
| travertine_front | r22 | (100, 960, 600, 1010) | `#643C1C` | 29.5 | 18.3 | 32.0 | 29/14/27 | warm LED |
| cushion_cream | hero-pool-deck.webp -> original 2026_09_10.jpg | (2188, 3407, 2969, 3563) (web box (700, 1000, 950, 1050)) | `#CEC9C2` | 81.0 | 74.0 | 83.0 | 81/0/4 | daylight |
| cushion_cream | recharge-pool.webp -> original 2026_09_17.jpg | (1241, 987, 2467, 1093) (web box (170, 185, 400, 205)) | `#CDC1B2` | 78.5 | 37.3 | 92.2 | 79/2/9 | daylight |
| stone_paving | hero-pool-deck.webp -> original 2026_09_10.jpg | (5312, 2970, 5875, 3282) (web box (1700, 860, 1880, 960)) | `#C2BCB6` | 76.7 | 62.4 | 83.1 | 77/1/4 | daylight |
| stone_paving | r35 | (420, 860, 700, 1000) | `#82909D` | 59.1 | 40.1 | 61.3 | 59/-2/-9 | daylight |
| sauna_wall | recovery-sauna.webp -> original 2026_09_12.jpg | (1401, 727, 2273, 1939) (web box (220, 150, 400, 400)) | `#411B03` | 15.1 | 7.9 | 29.6 | 15/17/21 | warm LED |
| sauna_wall | r40 | (55, 430, 115, 600) | `#5F331C` | 26.4 | 22.9 | 30.6 | 26/18/23 | warm LED |
| sauna_timber_daylight | o:2024_09_Recharge-Sauna.jpg | (1150, 1450, 1500, 1850) | `#825400` | 39.6 | 32.9 | 51.2 | 40/13/48 | daylight |
| sauna_timber_daylight | o:2024_09_Recharge-Sauna.jpg | (900, 200, 1500, 900) | `#BE7200` | 55.1 | 46.4 | 62.5 | 55/23/62 | daylight |
| sauna_bench | recovery-sauna.webp -> original 2026_09_12.jpg | (1982, 3394, 2467, 3685) (web box (340, 700, 440, 760)) | `#FECA69` | 84.2 | 74.6 | 87.9 | 84/8/55 | warm LED |
| sauna_bench | r40 | (250, 880, 450, 930) | `#A16F2B` | 50.8 | 40.8 | 55.7 | 51/13/44 | warm LED |
| concrete_exterior | r02 | (20, 880, 150, 1080) | `#AA9F87` | 65.8 | 63.2 | 68.0 | 66/-0/14 | daylight |
| concrete_exterior | location-entrance.webp -> original 2026_09_1.jpg | (3100, 1975, 3360, 2500) (web box (620, 395, 672, 500)) | `#656762` | 43.3 | 40.1 | 47.7 | 43/-2/3 | daylight |
| concrete_exterior | location-entrance.webp -> original 2026_09_1.jpg | (2400, 900, 3200, 1250) (web box (480, 180, 640, 250)) | `#8E8C80` | 58.3 | 34.2 | 67.9 | 58/-1/7 | daylight |
| concrete_exterior | class-rowing.webp | (130, 50, 195, 280) | `#9AAAA8` | 68.2 | 65.8 | 72.4 | 68/-6/-1 | daylight |
| concrete_interior | perform-gym-floor.webp -> original 2026_09_6.jpg | (4441, 1163, 5294, 1333) (web box (770, 218, 930, 250)) | `#8C7460` | 50.6 | 33.4 | 66.1 | 51/6/15 | mixed |
| concrete_interior | perform-outdoor-rig.webp -> original 2026_09_8.jpg | (1561, 1109, 2387, 1301) (web box (230, 208, 385, 244)) | `#767E77` | 52.0 | 19.5 | 56.8 | 52/-4/3 | daylight |
| concrete_interior | class-kettlebell.webp | (170, 210, 240, 245) | `#90938D` | 60.6 | 51.4 | 64.9 | 61/-2/3 | daylight |
| concrete_interior | r28 | (130, 190, 520, 260) | `#342D28` | 19.3 | 17.0 | 20.2 | 19/2/4 | gym ambient |
| concrete_interior | o:2023_12_DSC00061.jpg | (4150, 100, 4400, 800) | `#48473C` | 30.0 | 24.7 | 34.5 | 30/-2/7 | daylight |
| logo_black | r02 | (265, 838, 410, 880) | `#201716` | 8.8 | 8.5 | 9.3 | 9/4/2 | daylight |
| logo_black | r04 | (280, 398, 480, 424) | `#1D110E` | 6.3 | 5.6 | 6.6 | 6/5/4 | LED+daylight |
| logo_black | r28 | (190, 282, 480, 318) | `#120E0F` | 4.4 | 4.0 | 4.6 | 4/2/0 | gym ambient |
| logo_black | location-entrance.webp -> original 2026_09_1.jpg | (3450, 1910, 3750, 1960) (web box (690, 382, 750, 392)) | `#121317` | 6.0 | 3.1 | 6.9 | 6/1/-3 | daylight |
| sign_panel | r00 | (110, 215, 235, 330) | `#22232B` | 13.8 | 12.5 | 14.8 | 14/2/-5 | daylight |
| sign_logo | r00 | (300, 245, 470, 272) | `#6B6E7A` | 46.6 | 45.3 | 48.0 | 47/1/-7 | daylight |
| foliage_shade | hero-pool-deck.webp -> original 2026_09_10.jpg | (125, 2626, 1031, 3407) (web box (40, 750, 330, 1000)) mask green | `#254001` | 23.9 | 10.0 | 35.2 | 24/-21/32 | daylight |
| foliage_shade | recharge-pool.webp -> original 2026_09_17.jpg | (4387, 2293, 5134, 3307) (web box (760, 430, 900, 620)) mask green | `#1E311A` | 18.2 | 5.1 | 32.0 | 18/-13/12 | daylight |
| foliage_shade | r44 | (490, 640, 660, 820) mask green | `#353E32` | 25.2 | 16.2 | 38.5 | 25/-6/6 | daylight |
| foliage_lit | bloodwork-cafe.webp -> original 2026_09_14.jpg | (3107, 3360, 4174, 3733) (web box (520, 630, 720, 700)) mask green | `#9FBD4D` | 72.7 | 50.2 | 86.1 | 72/-27/52 | daylight |
| foliage_lit | location-entrance.webp -> original 2026_09_1.jpg | (1225, 300, 2350, 875) (web box (245, 60, 470, 175)) mask green | `#4F5E27` | 37.7 | 20.7 | 68.9 | 38/-15/29 | daylight |
| foliage_lit | class-rowing.webp | (0, 20, 120, 200) mask green | `#A2B85A` | 71.5 | 48.3 | 91.3 | 71/-22/45 | daylight |
| turf | class-kettlebell.webp | (20, 640, 140, 740) | `#647F46` | 49.8 | 44.4 | 59.1 | 50/-20/28 | daylight |
| turf | class-outdoor.webp | (30, 525, 95, 570) | `#5A7547` | 46.3 | 42.3 | 50.6 | 46/-19/22 | daylight |
| turf | class-rowing.webp | (130, 670, 330, 740) | `#38603A` | 36.8 | 27.4 | 95.0 | 37/-23/17 | daylight |
| turf | perform-outdoor-rig.webp -> original 2026_09_8.jpg | (387, 3467, 867, 3947) (web box (10, 650, 100, 740)) | `#304426` | 26.5 | 16.3 | 34.5 | 26/-15/16 | daylight |
| pool | hero-pool-deck.webp -> original 2026_09_10.jpg | (2656, 2751, 3594, 3032) (web box (850, 790, 1150, 880)) | `#5EA1A0` | 62.0 | 55.5 | 66.9 | 62/-22/-6 | daylight |
| pool | recharge-pool.webp -> original 2026_09_17.jpg | (2094, 3200, 2841, 3733) (web box (330, 600, 470, 700)) | `#629188` | 56.7 | 53.0 | 62.5 | 57/-18/-0 | daylight |
| pool | r46 | (20, 50, 420, 650) | `#2F848F` | 50.9 | 44.0 | 54.9 | 51/-21/-13 | daylight |
| pool | r35 | (300, 790, 560, 840) | `#3F6068` | 38.7 | 35.4 | 44.9 | 39/-10/-8 | daylight |
| pool_shallow | hero-pool-deck.webp -> original 2026_09_10.jpg | (3438, 3329, 4688, 3501) (web box (1100, 975, 1500, 1030)) | `#CED6D3` | 84.9 | 81.1 | 87.7 | 85/-3/1 | daylight |
| pool_shallow | recharge-pool.webp -> original 2026_09_17.jpg | (2841, 2240, 3427, 2453) (web box (470, 420, 580, 460)) | `#CBCEC4` | 82.2 | 79.2 | 84.6 | 82/-3/5 | daylight |
| pool_shallow | r38 | (100, 945, 500, 1030) | `#8A949D` | 60.8 | 51.5 | 66.5 | 61/-2/-6 | daylight |
| teal_tile | o:2023_12_DSC01306.jpg | (1150, 2000, 1450, 3000) | `#4A9197` | 56.0 | 52.4 | 62.4 | 56/-21/-10 | daylight |
| red_text | e49.2 | (0, 560, 720, 860) mask red | `#B3483B` | 47.3 | 26.6 | 61.1 | 45/43/30 | digital card |
| red_hex | r34 | (0, 980, 720, 1280) mask hexred | `#AF5E61` | 49.5 | 42.6 | 54.4 | 49/33/13 | daylight |

## 10. Files

- `materials.json`: every material, crops, boxes, sources, HEX, L*a*b*, spread, lighting, derived estimate, reel-against-still, calibration, rejected items.
- `palettes.json`: the seven zone palettes with roles, measured and adjusted values, contrast tables.
- `boards/`: `crop-boxes-<zone>-NN.png` (overlays used for the box review, dashed = excluded crop) and `palette-board-<zone>.png` (photograph left, swatches right).
- `colour-evidence.html`: self-contained twin of this file.

## Change log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-10-01 | First release. 41 materials, 101 crops, 7 zone palettes, 18 rejected items listed. Replaces the k-means first pass (zone-clusters.json), which was amber-tinted and is not used. |

Version: v1.0 — 2026-10-01