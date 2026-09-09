# Roberto Portfolio Chronological Plan

## Product direction

Build a cinematic online portfolio for Roberto Cabalse Morales III using a live-video-ready scene, **Glassmorphism UI**, responsive viewport strategy, DOM/WebGL separation, progressive WebGL enhancement, animated translation, tactile depth interactions, and strong performance/accessibility constraints.

Current color roots are temporary defaults and can still change.

## Delivery law

Work one phase at a time. The Git repository (main branch) is the canonical source of truth and handoff. A phase is not complete until validation is recorded and the corresponding endorsement authorizes continuation.

## Phase 01 — Foundation & Project Rules

Establish the self-contained project structure, asset policy, identity, local serving baseline, governance documents, validation harness, and numeric root/token system.

Output: stable blank-canvas project with canonical documentation and a measurable `:root` design system.

Gate: validation PASS + endorsement APPROVED.  
**Status: COMPLETE (2026-09-09)**

## Phase 02 — Art Direction & Design System

Turn the (temporary) numeric roots into a clean **Glassmorphism** visual system **and establish the reusable structural component foundation**.

### Structural goals (must be done in this phase)

Create clean, reusable structural patterns before heavy visual polish:

- Button system (primary, ghost, large, icon)
- Section pattern (consistent heading + content structure)
- Card / Panel system (glass variants)
- Navigation items
- Chips / floating labels / badges
- Basic form controls (for future use)
- Optional: simple tabs or segment control (useful for Work / Lab later)

### Visual goals

- Pure Glassmorphism material (translucent surfaces, blur, soft borders, depth)
- Flexible color system (current roots are defaults only)
- Typography hierarchy
- Hover / press / focus-visible / active states for all interactive elements
- Morph / depth transitions using existing motion tokens
- Mobile adaptations of the component system

### Output

- Reusable structural + visual primitives
- Updated `index.html` that uses the new component classes consistently
- Coherent art-directed static experience across desktop and mobile
- Token system remains flexible (nothing locked yet)

Gate: validation PASS + endorsement APPROVED.

## Phase 03 — Cinematic Scene & Live Video Architecture

Implement the scene pipeline for a live video background with fallback behavior, masking/shading, video performance controls, and clear separation from DOM UI.

**Current video asset:**
`assets/mixkit-beautiful-coral-reef-with-exotic-reef-fish-44868-hd-ready.mp4`

- Accepted for non-commercial use
- Credit will be given to Mixkit

Output: production-ready scene layer with local video-ready hooks and resilient fallback.

## Phase 04 — Motion & Transition System

Build canonical entrance, hover, press, page/section transitions, morphing, stagger, and reduced-motion behavior using the root motion system.

Output: unified motion language.

## Phase 05 — Roberto Visual Anchor

Refine Roberto's supplied portrait treatment, framing, responsive placement, depth, lighting integration, and interaction behavior.

Output: Roberto becomes the persistent visual anchor without obstructing content.

## Phase 06 — WebGL Progressive Enhancement

Introduce WebGL, meshes, shaders, particles, depth effects, and GPU-aware fallbacks while preserving the DOM experience.

Output: WebGL-enhanced cinematic layer with no accessibility dependency.

## Phase 07 — Content Architecture & Translation

Formalize content data, EN/FIL translation, animated language switching, metadata, and extensible locale structure.

Output: canonical content/translation architecture.

## Phase 08 — Portfolio Content Experience

Build work/project presentation, about, lab, experience, and contact flows using the approved visual system.

Output: complete information architecture and content experience.

## Phase 09 — Tactile Interaction

Add physical-feeling controls, depth response, pointer/touch interactions, focus/pressed states, and calibrated motion.

Output: tactile interaction layer.

## Phase 10 — Responsive Viewport Strategy

Deep-test desktop, tablet, mobile, orientation changes, safe areas, dynamic viewport units, and touch behavior.

Output: viewport-specific compositions and stable responsive behavior.

## Phase 11 — Performance & Accessibility

Optimize video, rendering, asset loading, motion, semantic structure, keyboard navigation, contrast, reduced motion, and degraded environments.

Output: measured performance/accessibility baseline.

## Phase 12 — Browser & Device Validation

Run canonical browser smoke tests and real-device validation across supported surfaces.

Output: evidence-backed release candidate.

## Phase 13 — Final Product QA

Review the whole experience against Product Law, Product Vision, canonical roots, content, responsive behavior, and regression risk.

Output: release-ready product snapshot.

## Phase 14 — Release & Handover

Prepare final documentation, deployment packaging, and final endorsement.

Output: production-ready Roberto portfolio.
