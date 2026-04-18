# Changelog

> Notes
>
> - This changelog is derived from this repo’s **git history** (non-merge commits). It’s maintained manually and is not automatically tied to `package.json`.
> - Versions follow semantic versioning (**MAJOR.MINOR.PATCH**).

## Table of Contents

- [v4.0.0 - 2026-04-18](#v400---2026-04-18)
- [v3.7.0 - 2026-04-16](#v370---2026-04-16)
- [v3.6.1 - 2026-04-02](#v361---2026-04-02)
- [v3.6.0 - 2026-04-02](#v360---2026-04-02)
- [v3.5.1 - 2026-03-28](#v351---2026-03-28)
- [v3.5.0 - 2026-03-28](#v350---2026-03-28)
- [v3.3.0 - 2026-03-19](#v330---2026-03-19)
- [v3.2.0 - 2026-03-18](#v320---2026-03-18)
- [v3.1.0 - 2026-03-15](#v310---2026-03-15)
- [v3.0.3 — 2026-03-13](#v303--2026-03-13)
- [v3.0.2 — 2026-03-12](#v302--2026-03-12)
- [v3.0.1 — 2026-03-10](#v301--2026-03-10)
- [v3.0.0 — 2026-03-03](#v300--2026-03-03)
- [v2.1.0 — 2026-02-04](#v210--2026-02-04)
- [v2.0.0 — 2026-01-03](#v200--2026-01-03)
- [v1.0.0 — 2024-11-03](#v100--2024-11-03)
- [Highlights](#highlights)

### v4.0.0 - 2026-04-18

- **Framework Migration**
  - **Migrated from Vite ReactJS to Vite Svelte.**
  - Re-implemented all core features in Svelte 5.
  - Simplified state management and component architecture using Svelte primitives.
- **Features & Enhancements**
  - Added new Svelte-based routing system with `svelte-spa-router`.
  - Re-implemented `Hero`, `About`, `Projects`, `Blogs`, and `Contact` sections as Svelte components.
  - Maintained full Tailwind CSS 4.2 integration for styling.
  - Ported Admin dashboard to Svelte.
- **Improvements & Fixes**
  - Updated build pipeline to use Vite 8.0 with Svelte plugin.
  - Refined component architecture for better modularity in Svelte.
  - Optimized bundle size by leveraging Svelte's compile-time features.
  - Updated dependencies to the latest versions including `Svelte 5.55` and `Vite 8.0.8`.

### v3.7.0 - 2026-04-16

- **Features & Enhancements**
  - Added `Feedback` form screen for user engagement.
  - Introduced a reusable `Card` component for consistent UI across Blogs, Certifications, and Experiences.
  - Implemented `Poem` preview functionality.
- **Improvements & Fixes**
  - Refined UI with updated `slate` and `taupe` color schemes.
  - Optimized responsiveness in `Hero`, `Blogs`, and `Certifications` sections.
  - Updated dependencies including `React 19.2.5`, `Vite 8.0.8`, and `Tailwind CSS 4.2.2`.
  - Improved `Coat-Control` middleware and devtools detection logic.
  - Fixed API endpoint handling for production and local environments.

### v3.6.1 - 2026-04-02

- **Improvements & Fixes**
  - Refined type safety for `Input` and `PersonalInfo` components.
  - Cleaned up unused imports and variables in `Admin`, `Header`, `Blogs`, and `Hero` sections for better code quality.

### v3.6.0 - 2026-04-02

- **Features & Enhancements**
  - Added `Poem` preview functionality for poetic content.
  - Initiated `Resume` Layout and converted it into a reusable component for consistent presentation.
- **Improvements & Fixes**
  - Refined component architecture for better reusability across the portfolio.

### v3.5.1 - 2026-03-28

- **Features & Enhancements**
  - Added dedicated `Certifications` list page for better organization.
  - Implemented `See More` functionality for certifications.
- **Improvements & Fixes**
  - Optimized layout for blogs, projects, and certifications using dynamic grid widths.
  - Refined media retrieval logic for certification images.
  - Cleaned up unused dependencies (`framer-motion`, `swiper`, `zod`) to reduce bundle size.

### v3.5.0 - 2026-03-28

- **Features & Enhancements**
  - Added `Paginator` for improved navigation in blogs and lists.
  - Implemented `See More` functionality for blog posts.
  - Added `Edit blogs` capability for administrative management.
  - Migrated `Contacts` to an Admin-based cloud system.
- **Improvements & Fixes**
  - Refined `Syntax Highlighting` for better code readability.
  - Fixed interaction issues between pagination and click events.
  - Updated experience updates to use `PUT` method.

### v3.3.0 - 2026-03-19

- **Blog Enhancements**
  - Integrated `Markdown Editor` for seamless blog posting.
  - Added `Code Highlighter` for technical content.
- **UI Tweaks**
  - Added `onEnter` function for improved input handling.

### v3.2.0 - 2026-03-18

- **Administration & Security**
  - Added `Passkey` for secure admin verification.
  - Implemented `Poetry Posting` feature.
  - Added `Encryption` for online public repository access.
- **Multimedia & UI**
  - Updated upload section with multimedia support.
  - Redesigned Mobile View navigation.
  - Added fluid transition animations.

### v3.1.0 - 2026-03-15

- **User Experience**
  - Added `AI chatbot` for interactive user engagement.
- **Responsiveness Fixes**
  - Removed nested scroll containers in Blogs.
  - Improved mobile layout and hover behavior for Certifications.
  - Optimized text width for Feedback and Hero sections.

### v3.0.3 — 2026-03-13

- Blog posts: added optional `imgs` field + UI to render image gallery (`2e2ebba`, `4f55f87`)
- Admin blogs: added images input and submit payload support (`2e2ebba`)
- Admin pages: responsive tweaks + consistent rounded corners on forms/buttons (`4f55f87`, `2e2ebba`)
- Blog UI polish: rounded containers and minor markdown layout tweaks (`2e2ebba`)

### v3.0.2 — 2026-03-12 → 2026-03-13

- Improved blog Markdown rendering (lists + code blocks + inline code) (`4d620e5`)
- Admin experiences: added `icon` input field (`4d620e5`)
- Blogs fixes and posting/updates (`5922479`, `c987791`)
- Admin/UX iterations: dashboard/rename, navlink migration, hero + experiences updates (`9897679`, `685e79a`, `2396a42`, `fc90903`)

### v3.0.1 — 2026-03-10

- Adjusted blog headers/hero/about and loading behavior (`a78eff8`)

### v3.0.0 — 2026-03-03 → 2026-03-08

- Upload image + project image preview (`af1ab58`)
- Blog feature: fetch + UI (`fb6e9e1`, `cc37e1d`)
- Blog/portfolio UI updates and refinements (`6253364`, `53ca14c`, `aa729f9`, `5adb165`, `0fcc9c2`, `3b58a8a`, `75c2a47`, `1969331`, `220b5f7`, `576e790`, `7bae64c`, `eb6c6f8`, `93d9ff3`, `aab0667`)

### v2.1.0 — 2026-02-04 → 2026-02-12

- Added posting blog (`e0827e7`)
- Various fixes/changes (`f7459a4`, `9fc0d50`, `2418022`, `8e7d51a`, `d0015b6`)

### v2.0.0 — 2026-01-03 → 2026-01-27

- Light mode and general updates (`00dfb18`, `ff85567`, `69ed8c5`)
- Custom 404 page and repo hygiene (removed `.env`) (`d0b7253`, `56df339`, `16652c9`)
- API hook update, color changes, mobile/about phone view, loading improvements (`25e6b96`, `66e6ff6`, `5bdb6a6`)
- Feedback designs/updates and null fix (`c593b1c`, `0095aa5`, `71863d4`, `e3ea6e0`, `9bd98de`, `383563e`, `c733889`, `ee2c2e1`, `9edfe4c`)
- Simplification / cleanup (`a9f4049`)

### v1.0.0 — 2024-11-03 → 2025-12-22

- Added custom domain + responsiveness + scroll/parallax fixes (`c753b0c`, `87764b0`, `11dfcc6`, `612c60a`)
- Major restructure/updates (`2e64345`, `77cdd8a`, `d9a831a`)
- Performance optimizations (`1f3f16b`)
- Layout/experience/about section updates (`0ef7ded`, `bcd361a`, `ce9a2c5`, `c01acf0`)

### Highlights

- Modern **Svelte 5** + TypeScript
- Responsive design with **Tailwind CSS 4.2**
- Lightweight and fast with **Vite 8**
- Dark/Light theme switching
- Backend API integration
- GitHub Pages deployment
