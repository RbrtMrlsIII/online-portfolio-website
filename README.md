# Roberto Cabalse Morales III · Portfolio

Blank-canvas starter for Roberto's responsive portfolio.

## Included
- Single-page responsive portfolio
- Glass-skeuomorphic UI
- Warm cinematic ambient background built without external image assets
- Supplied portrait as the hero asset
- EN / FIL language switcher
- Motion toggle and reduced-motion support
- Cursor-responsive 3D card tilt
- Responsive project, about, lab, and contact sections
- Video-ready background architecture

## Run locally
Open `index.html` directly in a modern browser, or serve the folder with any static web server.

## Next visual asset
The current project uses the supplied portrait only. A future video texture can be added as `assets/background.mp4` and wired into the existing scene layer without changing the content structure.

## Asset policy
This starter intentionally contains no stock imagery, icon packs, downloaded templates, or generated third-party assets.

## Project governance

Read `product-law.md`, `product-vision.md`, `plan.md`, `validation.md`, `endorsement.md`, and `skill.md` before changing the product. Each phase has an explicit output contract, validation evidence, and continuation gate.

## Handover rule

Every execution returns the complete updated portfolio ZIP. The ZIP is the canonical handoff snapshot for the next execution.

## Design system roots

The canonical visual system is **Ember Glass**, with numeric roots for theme, typography, spacing, glass depth, motion, responsive composition, layering, and future live-video treatment.

`styles.css` contains the canonical `:root` tokens for theme, typography, spacing, shape/depth, motion, responsive layout, and layering. See `design-tokens.md` for the human-readable contract.

## Runtime validation

Phase 01 includes a reproducible browser smoke-test harness at `tests/phase-01-runtime-smoke.mjs`. The current handoff records browser execution honestly as `PARTIAL` when the execution environment prevents Chromium from rendering.
