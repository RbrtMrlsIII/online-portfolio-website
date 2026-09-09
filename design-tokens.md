# Design Tokens / Roots

## Purpose

Canonical map of the portfolio's visual roots. Implementation lives in `styles.css` `:root`.

**Status:** Temporary defaults under the **Glassmorphism** direction. Still fully open for change.

---

## Current tuned values

### Background & Atmosphere

| Token | Value | Role |
|-------|-------|------|
| `--color-bg-0` | `#070b12` | Deepest page background |
| `--color-scene-vignette` | `rgba(4,7,14,0.28)` | Light vignette so video stays bright |

### Glass Surfaces (lightened)

| Token | Value | Role |
|-------|-------|------|
| `--color-surface` | `rgba(255,255,255,0.11)` | Standard glass |
| `--color-surface-strong` | `rgba(255,255,255,0.16)` | Stronger glass |
| `--color-surface-soft` | `rgba(255,255,255,0.08)` | Soft glass |

### Glass Material

| Token | Value |
|-------|-------|
| `--glass-blur` | `14px` |
| `--glass-blur-heavy` | `22px` |
| `--glass-saturate` | `140%` |

### Video (bright / natural)

| Token | Value | Notes |
|-------|-------|-------|
| `--video-opacity` | `0.78` | Much brighter |
| `--video-brightness` | `0.88` | Near-normal quality |
| `--video-saturation` | `1.08` | |
| `--video-contrast` | `1.04` | |

### Scale system

| Token | Value | Role |
|-------|-------|------|
| `--ui-scale` | `1` (100%) | Overall interface scale (0.5 – 1.0) |

Applied on `html` via `zoom` / transform strategy controlled from Settings.

### Accent

| Token | Value |
|-------|-------|
| `--color-accent` | `#38bdf8` |
| `--color-accent-2` | `#7dd3fc` |

---

## Rules (from skill.md + product-law)

1. Always prefer tokens over hard-coded values.
2. Use semantic shortcuts (`--ink`, `--glass`, `--accent`, etc.).
3. Glass panels use the `.glass-panel` family.
4. When changing roots, update both `styles.css` and this file.
5. New product ideas must be recorded in Product Law.
6. Nothing is locked yet — roots can still evolve.
