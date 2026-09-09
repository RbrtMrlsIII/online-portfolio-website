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

## Root & Token Usage Rules (Important)

The current design tokens are **temporary defaults** under the Glassmorphism direction. Follow these rules when working with roots:

1. **Always prefer tokens** over hard-coded values for colors, spacing, radii, blur, shadows, and motion.
2. Use the semantic shortcuts when available:
   - `--ink`, `--muted`, `--dim`
   - `--line`, `--glass`, `--glass-strong`
   - `--accent`, `--accent-2`
   - `--shadow`, `--radius`
3. Glass panels must use the `.glass-panel` family (`--strong` / `--soft` variants) instead of inventing new glass styles.
4. Do not introduce new color values unless exploring. If a new value proves useful, promote it to `:root` and document it in `design-tokens.md`.
5. Blur, saturation, and border values should come from the glass tokens (`--glass-blur`, `--glass-saturate`, etc.).
6. Video treatment must stay subordinate to the UI (use the existing `--video-*` tokens).
7. When changing roots, update both `styles.css` and `design-tokens.md` together.
8. Nothing is locked yet — roots can still evolve, but changes must remain coherent with the Glassmorphism direction.

## Structural Component Rules (Phase 02+)

When building UI, prefer these reusable patterns:

- **Buttons:** `.button`, `.button--primary`, `.button--ghost`, `.button--large`, `.button--icon`
- **Panels / Cards:** `.glass-panel`, `.glass-panel--strong`, `.glass-panel--soft`
- **Sections:** consistent `.section` + `.section__heading` structure
- **Chips / Badges:** `.chip` / floating chip pattern
- **Navigation items:** clean text links with hover/focus states
- Keep components token-driven and avoid one-off styles.

## Phase handoff

The Git repository (`main`) is the canonical handoff. Commit the complete phase result and update `validation.md` + `endorsement.md`.

## Definition of continuity

A new execution may change implementation details, but it must preserve Product Law, Product Vision, canonical roots, validated behavior, and endorsed decisions unless the user explicitly changes the product direction.
