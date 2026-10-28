---
name: High-Impact Industrial Craft
colors:
  surface: '#fbf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f7'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e6'
  on-surface: '#1b1b1e'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#916f6b'
  outline-variant: '#e6bdb8'
  surface-tint: '#c00016'
  primary: '#b10014'
  on-primary: '#ffffff'
  primary-container: '#d91d24'
  on-primary-container: '#ffefed'
  inverse-primary: '#ffb4ac'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#555758'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d6f70'
  on-tertiary-container: '#f3f3f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#93000e'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e3'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e6'
typography:
  headline-xl:
    fontFamily: Barlow Condensed
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: 0.02em
  headline-xl-mobile:
    fontFamily: Barlow Condensed
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.01em
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.02em
  subheading:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  kicker:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.14em
  button-text:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  stat-counter:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system channels an authoritative, high-craft, and dependable contractor aesthetic. It combines robust architectural industrialism with polished modern consumer clarity. The tone communicates resilience, uncompromising structural quality, military-grade precision, and regional dependability.

The visual execution is grounded in high-contrast transitions: stark shifts between pure crisp whites, soft stone grays, and pitch-black nocturnal sections. Bold, condensed uppercase typography anchors the messaging with raw physical presence, while structured crimson accents punctuate key interactions and trust milestones.

Targeted toward residential and commercial clients seeking high-stakes property protection, the interface delivers immense trust, directness, and friction-free inquiry.

## Colors

The palette relies on stark, disciplined contrast and deliberate visual rhythm:

- **Primary (`#D91D24`):** An energetic, vivid crimson red. Reserved for high-value focal points: uppercase category kickers ("WHAT WE DO", "OUR WORK"), key conversion CTAs, numerical badge counters (`01`, `02`, `03`), rating stars, and interactive links.
- **Secondary / Deep Surface (`#0D0D0D`):** A near-pitch carbon black used for dramatic breakout sections, nocturnal content bands, footer matrices, and prominent high-impact button fills.
- **Tertiary / Substrate Neutral (`#F4F4F5`):** A subtle cool concrete wash. Serves as surface backgrounds for service cards, testimonial modules, accordion rows, and trust bars.
- **Neutral Core (`#18181B`):** Deep charcoal body tone delivering optimal text legibility against white and light neutral backgrounds without the harshness of pure black.
- **Surface Pure (`#FFFFFF`):** High-clarity white for primary canvas blocks and crisp form containers floating on dark backgrounds.
- **Border Tone (`#E4E4E7` on light, `#27272A` on dark):** Fine, single-pixel hairline dividers that give structural containment to cards and list items.

## Typography

The typographic strategy balances impact and utility:

- **Display & Headings:** Rendered exclusively in **Barlow Condensed** (or Oswald/Anton), heavy weight (700-800), and uppercase. The condensed geometry mimics architectural framing and construction signage—delivering clear visual authority even at massive scales.
- **Section Kickers:** Rendered in **Inter**, bold, all-caps, with expanded tracking (+0.14em) colored in crimson (`#D91D24`). Positioned centrally or leading above the condensed title.
- **Body & Supporting Copy:** Kept in **Inter** with neutral, measured line heights to ensure long-form readability, especially on darker cards and review modules.
- **Indices & Numbers:** Step lists use oversized tabular numbers in bold crimson to guide sequential reading.

## Layout & Spacing

The layout employs a standard 12-column fluid grid system bounded by a max container width of `1200px` (or `1280px` for media reels):

- **Vertical Cadence:** Distinct full-width thematic bands alternate between pure white (`#FFFFFF`) and rich charcoal/black (`#0D0D0D`). Section padding sits between `4rem` and `6rem` vertically to provide ample breathing room.
- **Card Grids:**
  - Standard service/feature grids: 3-column on desktop (`span 4`), single column on mobile.
  - Testimonial carousel/grid: 3-column layout with horizontal scroll snap on mobile screens.
  - Split media showcase: 2-column equal split (`span 6`) pairing large imagery/video embeds with bold statement typography and action buttons.
- **Component Padding:** Standard cards use `1.5rem` (`24px`) internal padding, while compact cards and list tiles use `1rem` to `1.25rem`.

## Elevation & Depth

This design system avoids heavy skeuomorphic drop shadows in favor of crisp architectural planes and hairline borders:

- **Level 0 (Flat Ground):** Base backgrounds utilize solid fills (`#FFFFFF`, `#F4F4F5`, or `#0D0D0D`).
- **Level 1 (Surface Tiles):** Service cards, review tiles, and list containers use flat backgrounds (`#F4F4F5` or pure white) enclosed by a subtle 1px border (`#E4E4E7`).
- **Level 2 (Dark Inset/Outset Tiles):** Dark-mode feature modules sit on `#141416` with a `#27272A` boundary outline, creating subtle tonal separation without cast shadows.
- **Floating Form Surfaces:** High-intent conversion cards (e.g. quote forms floating over dark sections) use a crisp white background with a very soft ambient diffusion: `0 20px 40px -15px rgba(0, 0, 0, 0.25)`.
- **Badges and Sound Toggles:** Floated on top of media layers with a frosted glass backing (`rgba(0, 0, 0, 0.6)` with `backdrop-blur: 8px`).

## Shapes

The shape system adopts a balanced, refined industrial curvature:

- **Cards & Media Elements:** Rounded corners at `0.75rem` (`12px`) to `1rem` (`16px`) soften heavy photography and strong borders.
- **Form Controls:** Text inputs and selects feature a clean `0.5rem` (`8px`) border radius.
- **Action Buttons:**
  - Primary conversion and trust buttons: Pill radius (`9999px`) or soft pill (`0.5rem` depending on placement) with bold tracking.
  - Video and social trigger pills: Full pill (`9999px`) shapes for comfortable touch targets.

## Components

### Buttons
- **Primary Accent CTA:** Crimson background (`#D91D24`), white text, all-caps, heavy font weight. Interactive hover shifts to deeper red (`#B91C1C`).
- **Secondary Dark CTA:** Solid black background (`#0D0D0D`), white uppercase text. Hover state brightens to dark charcoal (`#27272A`).
- **Outline / Pill Button:** Transparent or light gray base, 1px border (`#E4E4E7`), dark text with left or right directional icons.

### Feature & Service Cards
- Clean light gray container (`#F4F4F5` or `#FFFFFF`) with 1px border.
- Edge-to-edge or margin-aligned rounded image header with a fixed 16:10 aspect ratio.
- Condensed bold headline, descriptive body text, and an inline crimson text link with chevron (`Learn More →`).

### Dark Feature List (Numbered Steps)
- Deep charcoal card container (`#141416`) with hairline border (`#27272A`).
- Large tabular index (`01`, `02`, `03`) in bold crimson (`#D91D24`) positioned to the left.
- Bold uppercase feature title paired with muted silver-gray descriptive body text.

### Trust Bar
- Light gray horizontal band pinned with verified trust markers (e.g., "Free Inspections", "Roofing • Gutters • Siding", BBB badges).
- Small colored pin/house icons and subtle vertical separator bars.

### Testimonial Cards
- Crisp white ground, fine border.
- 5-star rating cluster in crimson or warm amber-red.
- Italic or quoted body copy followed by author name and verified source label (e.g., "Google Review").

### FAQ Accordion
- Clean horizontal rows on subtle warm-neutral surfaces.
- Bold question in dark neutral.
- Monochromatic crimson plus sign (`+`) at the trailing edge that pivots or toggles on expansion.

### Lead Form Card
- Two-column split layout over a midnight black background.
- Left column: Condensed callout header, concise reassurance copy, and prominent phone link.
- Right column: High-contrast white card containing cleanly padded inputs, custom selects, and a full-width dark or red submit button.