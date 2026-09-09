# Design Tokens / Roots

## Purpose

Canonical map of the portfolio's visual roots. Implementation lives in `styles.css` `:root`.

**Status:** Temporary defaults under the **Glassmorphism** direction. Still fully open for change.

---

## Fine-tuned Glassmorphism Theme (Current)

### Background & Atmosphere

| Token | Value | Role |
|-------|-------|------|
| `--color-bg-0` | `#070b12` | Deepest page background |
| `--color-bg-1` | `#0c1220` | Secondary |
| `--color-bg-2` | `#151e2e` | Elevated |
| `--color-scene-vignette` | `rgba(4,7,14,0.68)` | Video / scene darkening |

### Glass Surfaces

| Token | Value | Role |
|-------|-------|------|
| `--color-surface` | `rgba(255,255,255,0.07)` | Standard glass |
| `--color-surface-strong` | `rgba(255,255,255,0.11)` | Stronger glass |
| `--color-surface-soft` | `rgba(255,255,255,0.045)` | Soft / subtle glass |
| `--color-surface-highlight` | `rgba(255,255,255,0.16)` | Highlight edge |

### Text Hierarchy

| Token | Value | Role |
|-------|-------|------|
| `--color-ink` | `#f8fafc` | Primary text |
| `--color-text` | `#e2e8f0` | Body text |
| `--color-muted` | `#94a3b8` | Secondary |
| `--color-dim` | `#64748b` | Labels / tertiary |

### Borders

| Token | Value |
|-------|-------|
| `--color-line` | `rgba(255,255,255,0.13)` |
| `--color-line-soft` | `rgba(255,255,255,0.07)` |
| `--color-line-accent` | `rgba(56,189,248,0.32)` |

### Accent

| Token | Value | Notes |
|-------|-------|-------|
| `--color-accent` | `#38bdf8` | Primary soft blue |
| `--color-accent-2` | `#7dd3fc` | Lighter |
| `--color-success` | `#4ade80` | Status |

### Glass Material

| Token | Value | Rationale |
|-------|-------|-----------|
| `--glass-blur` | `16px` | Clear frosted look (not muddy) |
| `--glass-blur-heavy` | `26px` | For larger panels |
| `--glass-saturate` | `145%` | Slightly richer glass |
| `--glass-border` | `1px` | Thin modern edge |
| `--shadow-glass` | soft outer + inner highlight | Realistic depth |

### Video Treatment (Mixkit coral reef)

| Token | Value | Why |
|-------|-------|-----|
| `--video-opacity` | `0.38` | Keeps UI dominant |
| `--video-saturation` | `1.0` | Natural |
| `--video-contrast` | `1.08` | Slight punch |
| `--video-brightness` | `0.48` | Darker so glass reads clearly |

---

## Other families (unchanged structure)

Typography, spacing, motion, responsive, and layering tokens remain in the same structure. See `styles.css` for the full list.

## Rule

Prefer tokens. Hard-coded values are fine during exploration. Promote stable values to `:root`.
