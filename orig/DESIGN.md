---
name: Pediatric Brightness
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#3d4a3c'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#6d7b6b'
  outline-variant: '#bccbb8'
  surface-tint: '#006e27'
  primary: '#006e27'
  on-primary: '#ffffff'
  primary-container: '#12b347'
  on-primary-container: '#003c12'
  inverse-primary: '#54e16e'
  secondary: '#7f5600'
  on-secondary: '#ffffff'
  secondary-container: '#feb31b'
  on-secondary-container: '#6b4800'
  tertiary: '#005db6'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e9cfa'
  on-tertiary-container: '#003268'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#72fe87'
  primary-fixed-dim: '#54e16e'
  on-primary-fixed: '#002107'
  on-primary-fixed-variant: '#00531b'
  secondary-fixed: '#ffdeae'
  secondary-fixed-dim: '#ffba3f'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#a9c7ff'
  on-tertiary-fixed: '#001b3d'
  on-tertiary-fixed-variant: '#00468c'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system establishes a high-trust, playful environment tailored for pediatric dentistry. The brand personality is empathetic, joyful, and professional, designed to alleviate the anxiety of dental visits for children while reassuring parents of clinical excellence. 

The aesthetic style is **Corporate / Modern with Playful Accents**. It utilizes a clean, "clinical white" foundation to signify hygiene and safety, layered with soft, organic shapes and a vibrant multi-colored palette derived from the logo. The user experience is tactile and friendly, using rounded geometry and approachable typography to create a sense of warmth and accessibility.

## Colors

The palette is a spectrum of joy against a professional backdrop. 
- **Foundation**: A primary background of White and Soft Gray (`#F8FAFC`) maintains a clean, medical-grade professional feel.
- **Brand Spectrum**:
  - **Green (Primary)**: Symbolizing growth and health, used for main CTAs.
  - **Yellow/Orange (Secondary)**: Evoking sunshine and optimism, used for highlights and alerts.
  - **Blue (Tertiary)**: Communicating trust and clinical calm.
  - **Pink & Purple (Accents)**: Adding energy and variety to child-facing elements.
- **Neutral**: A soft charcoal is used for text to ensure high legibility without the harshness of pure black.

## Typography

The typography strategy balances friendly curves with professional structure. 
- **Headings**: `Plus Jakarta Sans` provides a modern, rounded geometric feel that echoes the friendliness of the logo. Use high font weights (Bold/ExtraBold) for headings to create a cheerful, confident presence.
- **Body & Interface**: `Work Sans` offers exceptional legibility for clinical information and parental guidance. Its neutral but approachable character ensures that even complex treatment descriptions are easy to digest.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous white space to prevent visual clutter, which can increase parental stress.
- **Grid**: A 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm**: An 8px linear scale drives all spacing decisions. Large vertical gaps (`lg` and `xl`) are encouraged between sections to maintain a breezy, unhurried pace.
- **Adaptation**: On mobile, padding is reduced slightly, but touch targets remain large (minimum 48px) to accommodate parents navigating the site while on the go or with children.

## Elevation & Depth

Depth is used sparingly to maintain a clean aesthetic, relying on **Ambient Shadows** and **Tonal Layers**.
- **Shadows**: Use very soft, highly diffused shadows with a slight blue-tinted neutral color (e.g., `rgba(0, 94, 184, 0.08)`) to make elements like cards and buttons feel "lifted" and touchable.
- **Layers**: Light gray background sections are used to differentiate content blocks from the main white surface, creating a subtle sense of hierarchy without the need for heavy borders.

## Shapes

The shape language is defined by **Softened Geometry**. 
- **Corners**: A standard `0.5rem` (8px) radius is applied to cards and input fields, while buttons use a more pronounced `1rem` or fully rounded pill-shape to feel more inviting.
- **Illustrative Elements**: Decorative background Blobs and "Bubbles" should use organic, non-perfect circles to mirror the playful nature of the dentistry's mascot.

## Components

- **Buttons**: Use the Primary Green for main actions (e.g., "Schedule Appointment"). They should have a subtle 2px bottom "press" shadow to appear tactile and squishy.
- **Cards**: Feature large `rounded-lg` corners. Cards for "Services" should each utilize a different accent color from the brand spectrum for their top border or icon background.
- **Input Fields**: Soft gray backgrounds with a 1px border that turns Primary Green on focus. Labels should be clear and utilize `label-md`.
- **Chips/Badges**: Small, pill-shaped tags used to denote age groups (e.g., "0-3 years") or treatment types, utilizing the Secondary and Tertiary colors.
- **Illustrations & Photography**: High-quality photography of smiling children should be integrated with hand-drawn dental doodles (toothbrushes, stars, bubbles) to bridge the gap between clinical professionalism and childhood wonder.