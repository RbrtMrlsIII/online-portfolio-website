# Validation Protocol

**Discipline:** ORUCAVEAM  
**Branch policy:** Option B — test branch first, merge to main after verification

## Rule
Implementation on `test/*` is not complete until verification logs prove behavior.  
**If the verification log does not change when change is expected → FAIL.**

---

## Slice: scale authority + mobile video parallax
**Branch:** `test/scale-video-verify`  
**Date:** 2026-09-09

### Objectives
1. Single scale authority (no overall vs mobile competition)
2. Mobile video less zoomed + smooth scroll parallax on background
3. Verification logging contract

### Expected log events (must appear)
| Action | Expected log event |
|--------|--------------------|
| Page load | `boot` |
| Open settings | `settings` / `open` |
| Move scale slider | `scale` with `touched: true` |
| Resize without user scale | `resize` with `appliedDefault` OR ignored if touched |
| Open mobile nav | `nav` / `open` |

### How to verify in browser
1. Open DevTools Console
2. Hard-refresh the **test branch** preview or local file
3. Note `window.__PORTFOLIO_VERIFY__.logLength()`
4. Click ⚙ → length must increase (`settings`)
5. Drag scale → length must increase (`scale`, `touched: true`)
6. If length is unchanged after steps 4–5 → **FAIL**

### Status
| Check | Status |
|-------|--------|
| Code on `test/scale-video-verify` | PENDING user browser |
| Log grows on settings open | PENDING |
| Log grows on scale drag | PENDING |
| Mobile initial scale 55% | PENDING |
| Video parallax on scroll | PENDING |
| Merged to main | BLOCKED until PASS |

**Slice result:** PENDING (test branch only)
