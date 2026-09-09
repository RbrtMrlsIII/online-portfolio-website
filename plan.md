# Roberto Portfolio Chronological Plan

## Product direction

Build a cinematic online portfolio for Roberto Cabalse Morales III using a live-video-ready scene, **Glassmorphism UI**, responsive viewport strategy, DOM/WebGL separation, progressive WebGL enhancement, animated translation, tactile depth interactions, and strong performance/accessibility constraints.

Current color roots are temporary defaults and can still change.

## Delivery law

Work one phase at a time. **Option B branch policy:** UI/behavior work lands on `test/*` first; `main` receives only verified merges. A phase is not complete until validation is recorded (with logs where required) and endorsement authorizes continuation.

---

## Hero page specification (canonical — 2026-09-09)

The **Hero** is the primary landing surface and must contain:

### Identity
- Portrait image (current asset: `assets/IMG_20250712_095315.jpg`)
- Full name: **Roberto Cabalse Morales III**
- Short description / lede

### Typing text (rotating roles)
Animated typewriter / cycle through:

1. Frontend Developer  
2. Backend Developer  
3. UI/UX Developer  
4. Full Stack Developer  
5. AI Team Developer  
6. AI-Augmented  
7. AI-Powered Software  
8. AI-Assisted Creator  
9. AI Trainer  
10. Guitarist  

### Social icons (magnificent, first-class)
Must include clear, polished icons + accessible labels/links for:

- Discord  
- Facebook  
- LinkedIn  
- YouTube  
- Viber  
- Email (generic mailto)  
- Gmail  
- Outlook  
- GitHub  

### Supporting messages
Short secondary lines that reinforce availability, focus, or invitation (eyebrow / meta / support copy).

---

## Header behavior specification (canonical — 2026-09-09)

### At top of page (not scrolled)
- Full header navigation visible (About, Services, Projects, Education, Contact)
- Brand mark + full logo treatment as designed for top state

### When scrolled
1. **Navigation collapses** into a **dropdown menu** (compact control)
2. **Portrait image migrates into the header** and **replaces the “R” mark** (image becomes the logo)
3. **Name in header becomes “Roberto”** (short form)
4. Settings control remains available
5. Sticky header remains usable on mobile and desktop

### Interaction notes
- Scroll threshold should be intentional (not flicker)
- Reduced-motion users still get the compact header without aggressive animation
- Dropdown must be keyboard accessible and touch-friendly

---

## Phase 01 — Foundation & Project Rules

**Status: COMPLETE (2026-09-09)**

## Phase 02 — Art Direction & Design System

Structural + Glassmorphism component foundation.

**In progress** on `test/*` branches (Option B).

Must align with Hero + Header specifications above.

### Structural goals
- Button system, sections, cards/panels, chips
- Navigation (full + scrolled dropdown)
- Sticky compact header with image→logo + name→Roberto
- Social icon set (hero)
- Typing text component

### Output
Reusable primitives + hero/header behavior matching the specifications.

Gate: validation PASS (logs where required) + endorsement APPROVED.

## Phase 03 — Cinematic Scene & Live Video Architecture

Live video background, parallax, mobile framing, Mixkit credit.

## Phase 04 — Motion & Transition System

Entrance, typewriter, header morph, reduced-motion.

## Phase 05 — Roberto Visual Anchor

Portrait treatment; scrolled header uses the same image as logo.

## Phase 06 — WebGL Progressive Enhancement

Optional GPU layer; never blocks DOM.

## Phase 07 — Content Architecture & Translation

EN/FIL + structured content for roles, socials, messages.

## Phase 08 — Portfolio Content Experience

About, Services, Projects, Education, Contact, Credits.

## Phase 09 — Tactile Interaction

Depth, press, focus, pointer/touch.

## Phase 10 — Responsive Viewport Strategy

Desktop / tablet / mobile compositions for hero + sticky header.

## Phase 11 — Performance & Accessibility

Video, contrast, keyboard, reduced motion.

## Phase 12 — Browser & Device Validation

Evidence-backed checks; log-growth rule for interactive controls.

## Phase 13 — Final Product QA

## Phase 14 — Release & Handover
