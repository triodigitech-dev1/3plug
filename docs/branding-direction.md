# branding-direction.md

## 3PlugPOS Branding Direction

This direction uses existing assets in `public/branding` plus new generated assets in `public/branding/generated`.

## Primary Brand Source

- Official source logo: `public/logo.png`
- This file is now the root reference for:
  - favicon/web icons
  - Tauri desktop app icons
  - UI color and motion direction

## Core Identity

- Product name: `3PlugPOS`
- Tagline: `Offline-First Business Core`
- Visual concept: three connected plug nodes representing:
  - Operations
  - Management
  - Administration

## Color System (From Existing Brand Palette)

Use these as design tokens:

- `--brand-deep: #155874`
- `--brand-dark: #246F89`
- `--brand-muted: #1C6480`
- `--brand-balanced: #317F90`
- `--brand-soft: #479095`
- `--brand-light: #60A298`
- `--brand-ink: #0C2330`

Reference source:
- `public/branding/brandcolor.md`

## Logo Set

Primary logo in app UI:

- `public/logo.png`

Support vector variants (internal/generated):

- Mark: `public/branding/generated/3plug-mark.svg`
- Horizontal lockup: `public/branding/generated/3plug-horizontal.svg`
- Stacked lockup: `public/branding/generated/3plug-stacked.svg`

Existing source assets retained:

- `public/branding/logo-trio.png`
- `public/branding/no-bg-logo.png`
- `public/branding/logo-element-nobg.png`

## Icon/Favicon Set

Web:

- `public/favicon-32x32.png`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/site.webmanifest`

Desktop/Tauri:

- Regenerated under `src-tauri/icons/` from `3plug-mark.svg`

## Usage Rules

1. Use `public/logo.png` as first-choice brand image in product surfaces.
2. Use generated icon files from `public/logo.png` for web and app packaging.
3. Use `3plug-horizontal.svg` or `3plug-stacked.svg` only as optional vector derivatives.
4. Keep clear space equal to one small plug radius around the mark.
5. Do not recolor logo internals outside the brand palette.

## Frontend Styling Stack

- Tailwind is now enabled in the project via:
  - `tailwindcss`
  - `@tailwindcss/vite`

Configured in:

- `vite.config.js`
- `src/index.css`
