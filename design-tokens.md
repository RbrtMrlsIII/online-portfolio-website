# Design Tokens / Roots

## Purpose

This file is the canonical map for the portfolio's visual roots. CSS custom properties in `styles.css` are the implementation source; this document explains what each family controls.

**Important:** The current roots are temporary defaults. They are not permanent. We can change the color system, glass treatment, and overall direction freely.

## Current direction

**Glassmorphism** is the primary visual approach:
- Translucent surfaces
- Backdrop blur
- Soft light borders
- Layered depth
- Clean, modern glass panels

The previous warm “Ember Glass” palette is no longer locked in.

## Root families

- **Theme:** background, glass surfaces, text, lines, accent, status colors.
- **Typography:** display/body/mono stacks, scale, leading, tracking, hero and section ranges.
- **Spacing:** base rhythm from 4px upward plus responsive section spacing.
- **Shape & depth:** radii, glass blur/saturation, shadows, borders.
- **Motion:** easing, durations, stagger, lift, morph scale and blur.
- **Responsive:** content width, gutters, tablet/phone thresholds, touch target sizes.
- **Layering:** canonical z-index levels for scene, content, and navigation.

## Canonical rule

Components should consume tokens. New hard-coded values are allowed during exploration, but reusable values should be promoted to `:root` once they stabilize.

## Live-video roots

Video belongs to the scene layer and must remain visually subordinate to content. Current video asset:

- `assets/mixkit-beautiful-coral-reef-with-exotic-reef-fish-44868-hd-ready.mp4`
- Accepted for non-commercial use
- Credit will be given to Mixkit

## Status

All tokens remain temporary until Phase 02 and Phase 03 decisions are locked.
