# Formal Execution Plan — Current Slice

**Date:** 2026-09-09  
**Discipline:** ORUCAVEAM  
**Repo:** `RbrtMrlsIII/online-portfolio-website`

---

## O — Objective

Make the following product changes real and verifiable:

1. Background video significantly brighter (near-normal quality)
2. Header mobile-friendly (working collapse menu on small viewports)
3. Settings panel with:
   - Scale control 50%–100% (drag/slider)
   - Language EN/FIL
   - Theme Dark (Glass) / Light (Skeuo soon)
   - Motion toggle
4. ORUCAVEAM adopted as formal execution discipline
5. Product Law / docs updated for every new user idea

## R — Restrictions

- Non-commercial use only (Mixkit credit required)
- No second design system parallel to Glassmorphism tokens
- Light theme is planned, not required in this slice
- Do not claim browser visual PASS without real viewport evidence
- Keep changes minimal and token-driven

## U — User Authority

User explicitly requested:
- Brighter video
- Mobile-friendly header
- Settings (scale, language, theme)
- Formal execution plan
- Apply ORUCAVEAM from TeamAi
- Always update Product Law when new ideas are introduced

## C — Canonical Authority

- `product-law.md`
- `plan.md`
- `ORUCAVEAM.md`
- `skill.md`
- `design-tokens.md`
- `styles.css` `:root`
- `index.html` / `script.js`

## A — Action (already on main — pending verification)

| Item | Expected location |
|------|-------------------|
| Bright video tokens | `styles.css` `--video-opacity: 0.78`, `--video-brightness: 0.88` |
| Settings panel markup | `index.html` `#settingsPanel` |
| Scale / lang / theme / motion logic | `script.js` |
| Mobile nav toggle | `index.html` `#navToggle` + CSS `@media (max-width: 980px)` |
| Product Law settings rules | `product-law.md` items 14–18 |
| ORUCAVEAM discipline | `ORUCAVEAM.md` |

## V — Verification (this slice)

### Static verification (repo)

| Check | Status | Evidence |
|-------|--------|----------|
| `--video-opacity: 0.78` present | PENDING | |
| `--video-brightness: 0.88` present | PENDING | |
| `#settingsPanel` present in HTML | PENDING | |
| `#scaleRange` present | PENDING | |
| `#navToggle` present | PENDING | |
| `applyScale` present in JS | PENDING | |
| Mixkit video file exists | PENDING | |
| Product Law contains settings rules | PENDING | |
| ORUCAVEAM.md exists | PENDING | |

### Browser verification

| Check | Status | Notes |
|-------|--------|-------|
| Video visibly brighter after hard refresh | PENDING | User must hard-refresh (cache) |
| Settings panel opens from ⚙ | PENDING | |
| Scale slider changes UI size 50–100% | PENDING | |
| Mobile hamburger opens nav | PENDING | |
| Language switches EN/FIL | PENDING | |

**Note:** Previous pushes did not include a formal V step. That is corrected here.

## E — Efficiency

- Prefer token edits over rewriting whole pages
- One settings panel, not multiple control surfaces
- Reuse existing glass / button components

## A — Audit

### What was claimed earlier
- Video brightened, mobile header fixed, settings added

### What was missing
- Formal ORUCAVEAM gate record
- Explicit verification checklist
- Browser evidence
- Clear instruction that hard-refresh may be required

### Limitations
- This environment cannot open a real Chromium viewport for visual confirmation
- User must confirm visual brightness and mobile menu in their browser

## M — Minimal resources

- No new frameworks
- No second theme engine until Light is approved
- Scale via `--ui-scale` only

---

## Next authorized state

1. Run static verification against `main`
2. User hard-refreshes site and reports video brightness + mobile menu + settings
3. Record PASS/PARTIAL/FAIL in `validation.md`
4. Only then endorse continuation
