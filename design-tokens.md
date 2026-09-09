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
| `--color-scene-vignette` | `rgba(4,7,14,0.45)` | Softer video darkening |

### Glass Surfaces (lightened)

| Token | Value | Role |
|-------|-------|------|
| `--color-surface` | `rgba(255,255,255,0.10)` | Standard glass |
| `--color-surface-strong` | `rgba(255,255,255,0.14)` | Stronger glass |
| `--color-surface-soft` | `rgba(255,255,255,0.07)` | Soft glass |

### Glass Material

| Token | Value |
|-------|-------|
| `--glass-blur` | `14px` |
| `--glass-blur-heavy` | `22px` |
| `--glass-saturate` | `140%` |

### Video (brighter / more natural)

| Token | Value | Notes |
|-------|-------|-------|
| `--video-opacity` | `0.62` | Higher visibility |
| `--video-brightness` | `0.72` | Closer to normal quality |
| `--video-saturation` | `1.05` | |
| `--video-contrast` | `1.05` | |

### Accent

| Token | Value |
|-------|-------|
| `--color-accent` | `#38bdf8` |
| `--color-accent-2` | `#7dd3fc` |

---

## Rules (from skill.md)

1. Always prefer tokens over hard-coded values.
2. Use semantic shortcuts (`--ink`, `--glass`, `--accent`, etc.).
3. Glass panels use the `.glass-panel` family.
4. When changing roots, update both `styles.css` and this file.
5. Nothing is locked yet — roots can still evolve.
