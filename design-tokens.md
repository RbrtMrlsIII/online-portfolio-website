# Design Tokens / Roots

## Purpose

This file is the canonical map for the portfolio's visual roots. CSS custom properties in `styles.css` are the implementation source; this document explains what each family controls.

## Root families

- **Theme:** background, glass surfaces, text, lines, accent, success state.
- **Typography:** display/body/mono stacks, scale, leading, tracking, hero and section ranges.
- **Spacing:** base rhythm from 4px upward plus responsive section spacing.
- **Shape & depth:** radii, glass blur/saturation, shadows.
- **Motion:** easing, durations, stagger, lift, morph scale and blur.
- **Responsive:** content width, gutters, tablet/phone thresholds, touch target sizes.
- **Layering:** canonical z-index levels for scene, content, and navigation.

## Canonical rule

Components consume tokens. New hard-coded values are allowed for art-direction detail only when they are not part of a reusable system rule. Reusable values must be promoted to `:root`.

## Theme

The initial canonical theme is **Ember Glass**: warm ember/burnished-gold accents over a dark brown-black base. Future themes should override the same token names rather than introduce parallel component rules.

## Motion

Motion has three broad layers:

1. **UI:** short feedback transitions.
2. **Morph:** medium-duration shape/depth changes.
3. **Ambient:** long-running background movement.

`prefers-reduced-motion` and the site's Motion toggle remain authoritative and must disable non-essential motion.

## Responsive philosophy

Use fluid values first (`clamp`, percentages, flexible grids), then breakpoint overrides only where the information architecture genuinely changes. Mobile is a first-class composition, not a scaled desktop.

## Numeric contract

The token system is intentionally numeric and measurable. Reusable visual decisions should reference these roots instead of scattering arbitrary values through components.

- **Theme:** Ember Glass uses `#100b08` / `#1a100b` foundations, warm gold accents, translucent surfaces, and controlled video opacity/saturation.
- **Typography:** a fluid scale runs from `9px` micro labels through `104px` hero type, with explicit weights, leading, and tracking roots.
- **Spacing:** `4px` is the base unit; larger values form a 4px-derived rhythm, with `clamp()` used for major responsive spacing.
- **Glass:** borders are `1px`, blur is `22px` standard / `34px` heavy, saturation is `130%`, and depth is defined by reusable shadows plus inset highlights.
- **Motion:** `100ms` instant, `180ms` fast, `240ms` UI, `520ms` morph, `720ms` entrance, and `8000ms` ambient motion.
- **Responsive:** `1440px` content max, fluid `18px–44px` gutters, `980px` tablet and `640px` phone composition thresholds, `44px` minimum touch target.
- **Layering:** scene `0`, scene overlay `1`, content `10`, floating elements `15`, navigation `20`, modal `100`.

## Live-video roots

When `assets/background.mp4` is introduced, the video belongs to the scene layer and must remain visually subordinate to content. The canonical roots are `--video-opacity`, `--video-saturation`, `--video-contrast`, and `--video-brightness`. Video must never become the only source of readable content or interaction feedback.
