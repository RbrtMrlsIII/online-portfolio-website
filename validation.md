# Validation Protocol

**Discipline:** ORUCAVEAM  
**Branch policy:** Option B — test first, then main

## Slice: scale + hero social SVG + header scroll + merge
**Date:** 2026-09-09  
**Test branch:** `test/scale-video-verify`  
**PR:** https://github.com/RbrtMrlsIII/online-portfolio-website/pull/1

### Static verification (automated on branch tip)

| Check | Result |
|-------|--------|
| No PLACEHOLDER in index.html | **PASS** |
| `data-social` icons present (9) | **PASS** |
| typedRole / settings / scaleRange | **PASS** |
| GitHub + mailto verified URLs | **PASS** |
| `__PORTFOLIO_VERIFY__` + log helpers | **PASS** |
| CSS scrolled header / social | **PASS** |

### Runtime log rule
If `window.__PORTFOLIO_VERIFY__.logLength()` does not increase after ⚙ open or scale drag → **FAIL**.

### Social URL status
| Network | URL |
|---------|-----|
| GitHub | https://github.com/RbrtMrlsIII (**verified**) |
| Email | mailto:hello@robertomorales.dev (**verified**) |
| Gmail | compose to hello@robertomorales.dev (**verified**) |
| Outlook | compose to hello@robertomorales.dev (**verified**) |
| Discord / Facebook / LinkedIn / YouTube / Viber | SVG ready; fill handles in `social-links.json` |

### Merge
| Action | Status |
|--------|--------|
| PR #1 merge to main | **DONE** |
| Browser visual confirmation | PENDING user hard-refresh on main |

**Slice result:** PARTIAL → static + merge PASS; browser confirmation still recommended.
