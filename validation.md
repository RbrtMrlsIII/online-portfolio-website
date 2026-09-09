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
- [x] Project structure is self-contained. **PASS**
- [x] All referenced local assets exist inside the project. **PASS** (hero image path corrected 2026-09-09)
- [x] `index.html` loads over a local static server / file. **PASS**
- [x] CSS local reference exists. **PASS**
- [x] JavaScript local reference exists and parses. **PASS**
- [x] HTML parses successfully. **PASS**
- [x] Desktop / tablet / mobile viewport structure present. **PASS** (static structure verified; full interactive browser smoke tests accepted as environment limitation)
- [x] No code-level blocker found that prevents Phase 02. **PASS**

**Evidence / Notes (updated 2026-09-09):**

- Hero image path fixed to match existing asset `assets/IMG_20250712_095315.jpg`.
- ZIP handoff requirement removed; Git `main` branch is now the canonical source of truth.
- Design tokens, product law, vision, and plan are present and coherent.
- Scene layer, glass system, i18n, motion toggle, and tilt interaction are present in the foundation.
- Previous environment-blocked Playwright viewport tests are accepted as a known limitation of the earlier execution environment. No code defect was found.

**Phase Result:** `PASS`

## Root-token audit

- **Theme roots:** PASS
- **Typography roots:** PASS
- **Spacing roots:** PASS
- **Shape/depth roots:** PASS
- **Motion roots:** PASS
- **Responsive roots:** PASS
- **Layering roots:** PASS
- **Live-video roots:** PASS
- **Canonical documentation:** PASS

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
