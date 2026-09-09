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

- **Project continuity:** always start from the latest complete ZIP and preserve prior decisions.
- **Canonical discipline:** `product-law.md` governs principles; `product-vision.md` governs product direction; `plan.md` governs sequence; `design-tokens.md` and CSS `:root` govern reusable visual values; `validation.md` records evidence; `endorsement.md` governs continuation.
- **Code structure:** maintain clear separation of semantic DOM, visual scene, data/content, and progressive enhancement layers.
- **Frontend ProMax:** responsive composition, interaction quality, motion choreography, component consistency, typography hierarchy, visual hierarchy, and resilient browser behavior.
- **Visual systems:** glass-skeuomorphic material, depth, lighting, shadows, controlled blur, tactile controls, and numeric roots.
- **Motion:** canonical easing/duration hierarchy, morph transitions, stagger, ambient movement, and reduced-motion compliance.
- **WebGL:** meshes, shaders, particles, and GPU effects are enhancements, never prerequisites for essential content or interaction.
- **Media:** live video must be optimized, muted/autoplay-safe, layered behind content, and provided with a graceful fallback.
- **i18n:** translations are structured data with stable keys; language switching should preserve layout quality and animate responsibly.
- **Validation:** use reproducible tests and record real evidence. Never convert an environmental failure into a product PASS.

## Phase handoff

Every execution returns the **complete updated portfolio ZIP**. Partial patches are not the canonical handoff.

## Definition of continuity

A new execution may change implementation details, but it must preserve Product Law, Product Vision, canonical roots, validated behavior, and endorsed decisions unless the user explicitly changes the product direction.
