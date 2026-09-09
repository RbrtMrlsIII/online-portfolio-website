# Phase Skill Contract

This file defines the ad-hoc execution contract used in chat to preserve continuity between phases.

## Before every phase

Declare:

1. Objective
2. Expected output
3. Skills/capabilities required
4. Canonical files/sources to preserve
5. Validation evidence required
6. Endorsement condition for continuation

## Continuity skills

- **Project continuity:** always start from the latest committed state on `main` and preserve prior decisions.
- **Canonical discipline:** `product-law.md` governs principles; `product-vision.md` governs product direction; `plan.md` governs sequence; `design-tokens.md` and CSS `:root` govern reusable visual values; `validation.md` records evidence; `endorsement.md` governs continuation.
- **Code structure:** maintain clear separation of semantic DOM, visual scene, data/content, and progressive enhancement layers.
- **Frontend ProMax:** responsive composition, interaction quality, motion choreography, component consistency, typography hierarchy, visual hierarchy, and resilient browser behavior.
- **Visual systems:** Glassmorphism material, depth, controlled blur, soft borders, and numeric roots.
- **Motion:** canonical easing/duration hierarchy, morph transitions, stagger, ambient movement, and reduced-motion compliance.
- **WebGL:** meshes, shaders, particles, and GPU effects are enhancements, never prerequisites for essential content or interaction.
- **Media:** live video must be optimized, muted/autoplay-safe, layered behind content, and provided with a graceful fallback. Current Mixkit video is accepted for non-commercial use with credit.
- **i18n:** translations are structured data with stable keys; language switching should preserve layout quality and animate responsibly.
- **Validation:** use reproducible tests and record real evidence. Never convert an environmental failure into a product PASS.
- **Document continuity:** whenever the user introduces a new product idea, record it in Product Law (or the appropriate governance file) and implement it consistently.

## Root & Token Usage Rules

1. Always prefer tokens over hard-coded values.
2. Use semantic shortcuts (`--ink`, `--glass`, `--accent`, `--ui-scale`, etc.).
3. Glass panels must use the `.glass-panel` family.
4. When changing roots, update both `styles.css` and `design-tokens.md`.
5. Video treatment uses `--video-*` tokens.
6. Overall scale is controlled by `--ui-scale` (0.5–1.0) from Settings.

## Settings system (required)

Settings live in a dedicated panel opened from the header and must include:

- **Interface scale** (50%–100%) via continuous slider / drag
- **Language** (EN / FIL)
- **Theme** (Dark · Glassmorphism current / Light · Skeuomorphism soon)
- **Motion** toggle

## Structural Component Rules

- Buttons: `.button`, `.button--primary`, `.button--ghost`, `.button--large`, `.button--icon`, `.button--compact`
- Panels / Cards: `.glass-panel`, `.glass-panel--strong`, `.glass-panel--soft`
- Sections: `.section` + `.section__heading` + `.section__label`
- Chips: `.chip` / `.chip--floating`
- Navigation: `.nav__link` with hover / focus / active states
- Keep components token-driven.

## Phase handoff

The Git repository (`main`) is the canonical handoff. Commit the complete phase result and update `validation.md` + `endorsement.md`.

## Definition of continuity

A new execution may change implementation details, but it must preserve Product Law, Product Vision, canonical roots, validated behavior, and endorsed decisions unless the user explicitly changes the product direction.
