# Design Tokens / Roots

## Purpose

This file is the canonical map for the portfolio's visual roots. CSS custom properties in `styles.css` are the implementation source.

**Status:** These are temporary defaults under the new **Glassmorphism** direction. Nothing is locked yet.

## Current direction

**Glassmorphism**
- Translucent glass surfaces
- Backdrop blur + slight saturation
- Soft light borders
- Layered depth with subtle shadows
- Dark cool background that works with the coral reef video

## Theme (temporary)

| Token | Value | Role |
|-------|-------|------|
| `--color-bg-0` | `#0b0f14` | Page background |
| `--color-bg-1` | `#111827` | Secondary surface |
| `--color-bg-2` | `#1e293b` | Elevated surface |
| `--color-surface` | `rgba(255,255,255,0.06)` | Standard glass |
| `--color-surface-strong` | `rgba(255,255,255,0.10)` | Stronger glass |
| `--color-surface-soft` | `rgba(255,255,255,0.04)` | Soft glass |
| `--color-ink` | `#f1f5f9` | Primary text |
| `--color-text` | `#e2e8f0` | Body text |
| `--color-muted` | `#94a3b8` | Secondary text |
| `--color-dim` | `#64748b` | Tertiary text |
| `--color-line` | `rgba(255,255,255,0.14)` | Borders |
| `--color-accent` | `#7dd3fc` | Soft cyan accent |
| `--color-accent-2` | `#bae6fd` | Lighter accent |
| `--color-success` | `#4ade80` | Status |

## Glass treatment

- `--glass-blur: 18px`
- `--glass-blur-heavy: 28px`
- `--glass-saturate: 140%`
- `--glass-border: 1px`
- `--shadow-glass`: soft outer + subtle inner highlight

## Video treatment (tuned for Mixkit coral reef)

- `--video-opacity: 0.45`
- `--video-saturation: 1.05`
- `--video-contrast: 1.05`
- `--video-brightness: 0.55`

## Typography, Spacing, Motion, Responsive, Layering

These families remain the same structure as before (still temporary). See `styles.css` `:root` for the full list.

## Rule

Components should prefer tokens. Hard-coded values are acceptable during exploration. Once a value stabilizes, promote it to `:root`.
