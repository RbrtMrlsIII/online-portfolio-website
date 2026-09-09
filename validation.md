# Validation Protocol

**Project:** Roberto Cabalse Morales III (Roberto)
**Purpose:** Verify each phase before continuation to the next phase.

## Rule
A phase is not considered complete because the code was written. It is complete only when its acceptance checks pass and the result is recorded here.

## Validation Status
Use one of these statuses for every check:

- `PASS` = verified and working as intended
- `PARTIAL` = works with a known limitation that is explicitly recorded
- `FAIL` = does not meet the acceptance requirement
- `N/A` = not applicable, with a reason

## Phase Gate Checklist

### Phase 01 — Foundation & Project Rules
- [x] ZIP/project structure is self-contained. **PASS**
- [x] All referenced local assets exist inside the project. **PASS**
- [x] `index.html` loads over a local static server. **PASS** (`HTTP 200`)
- [x] CSS local reference exists. **PASS**
- [x] JavaScript local reference exists and parses. **PASS** (`node --check script.js`)
- [x] HTML parses successfully. **PASS**
- [ ] Desktop viewport runtime smoke test. **PARTIAL**: attempted with the installed Playwright package and system Chromium; the execution environment blocked browser navigation before rendering.
- [ ] Tablet viewport runtime smoke test. **PARTIAL**: same environment limitation.
- [ ] Mobile viewport runtime smoke test. **PARTIAL**: same environment limitation.
- [x] No code-level blocker found that prevents Phase 02. **PASS**

**Evidence / Notes:**

- Removed external Google Font runtime dependencies from the foundation so the ZIP remains self-contained.
- Verified referenced files: `styles.css`, `script.js`, and `assets/roberto-hero.jpg`.
- Local static server returned `HTTP 200` for `index.html`.
- `script.js` passed Node syntax validation.
- HTML parser completed without errors.
- Full browser viewport smoke tests were attempted through Playwright against the system Chromium binary. The container blocked/terminated browser transport before a page could render, so real viewport evidence could not be produced there. A reproducible `tests/phase-01-runtime-smoke.mjs` harness is included for the next browser-capable environment.

**Phase Result:** `PARTIAL`

## Root-token audit

- **Theme roots:** PASS. Ember Glass palette, surfaces, borders, status colors, and video treatment are centralized.
- **Typography roots:** PASS. Type scale, weights, leading, and tracking are centralized with fluid hero ranges.
- **Spacing roots:** PASS. 4px base rhythm and responsive section spacing are defined.
- **Shape/depth roots:** PASS. Radii, blur, saturation, borders, highlights, and shadows are numeric tokens.
- **Motion roots:** PASS. UI, morph, entrance, ambient timing, easing, stagger, lift, and morph scale are defined.
- **Responsive roots:** PASS. Content max, fluid gutters, breakpoints, touch target, and card minimum are defined.
- **Layering roots:** PASS. Scene, overlay, content, floating, navigation, and modal z-index levels are defined.
- **Live-video roots:** PASS. Video opacity, saturation, contrast, brightness, and scene-layer implementation hooks are defined without requiring a video asset yet.
- **Canonical documentation:** PASS. `design-tokens.md` documents the numeric contract and live-video roots.

## Canonical browser-runtime gate

**Date:** 2026-09-09
**Harness:** `tests/phase-01-runtime-smoke.mjs`

- Playwright package was made available from the installed runtime bundle.
- Chromium launched, but navigation to the local test URL was blocked by the execution environment before page rendering.
- Alternate local host binding and direct `file://` attempts were also blocked.
- Result: **PARTIAL / environment-blocked**, not a code failure.
- No viewport screenshot evidence was generated because the browser could not navigate to the artifact.

**Continuation decision:** Phase 01 remains on HOLD. Do not infer viewport PASS from static checks.

## Continuation Rule

The next phase may begin only when:

1. Required checks are `PASS`, or any `PARTIAL` result has an explicit accepted limitation.
2. There are no unresolved blockers that invalidate the next phase.
3. The corresponding `endorsement.md` gate is completed.

## Validation Record Template

### Phase __ — ____________________
**Date:** YYYY-MM-DD
**Validator:** ____________________

| Check | Status | Evidence / Notes |
|---|---|---|
| Acceptance criterion 1 | `PENDING` | |
| Acceptance criterion 2 | `PENDING` | |
| Acceptance criterion 3 | `PENDING` | |
| Acceptance criterion 4 | `PENDING` | |

**Known Issues:**

- None / describe issue

**Blockers:**

- None / describe blocker

**Phase Result:** `PENDING`
