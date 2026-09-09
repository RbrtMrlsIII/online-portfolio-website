# Product Vision

## Product

A cinematic online portfolio for **Roberto Cabalse Morales III (Roberto)** that presents identity, work, experimentation, and contact through an expressive interactive interface.

## Canonical experience direction

- Cinematic portfolio
- Live video background
- Glass-skeuomorphic UI
- Responsive viewport strategy
- Roberto as the visual anchor
- DOM UI separated from WebGL
- WebGL / meshes / shaders used as progressive enhancement
- Animated translation
- Tactile / depth-based interaction
- Performance and accessibility as product requirements

## North-star sentence

> **The interface serves Roberto, not the other way around.**

The technology exists to amplify Roberto's story and work. Effects, motion, video, WebGL, and skeuomorphic detail must never become the reason the user cannot understand or use the portfolio.

## Experience architecture

The scene layer provides atmosphere and future live-video/WebGL effects. The DOM layer owns semantic content, navigation, controls, accessibility, and resilient interaction. WebGL and advanced visual effects may enhance the scene but are never the sole carrier of essential information.

## Visual personality

The initial canonical direction is **Ember Glass**: a dark brown-black foundation, warm ember/burnished-gold light, translucent glass materials, subtle physical depth, restrained glow, and high-contrast editorial typography.

## Motion personality

Motion should feel intentional and physical: short UI feedback, medium morph/depth transitions, and slower ambient scene movement. Motion must yield to the Motion toggle and `prefers-reduced-motion`.

## Responsive personality

The composition changes by viewport rather than merely scaling down. Desktop can use layered spatial composition; tablet simplifies the relationship between content and visual anchor; mobile prioritizes legibility, touchability, and stable performance.
