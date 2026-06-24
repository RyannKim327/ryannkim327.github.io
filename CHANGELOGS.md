# Changelog

> Notes
>
> - This changelog is derived from this repo’s **git history** (non-merge commits). It’s maintained manually and is not automatically tied to `package.json`.
> - Versions follow semantic versioning (**MAJOR.MINOR.PATCH**).

## Table of Contents

- [v4.4.0 - 2026-06-24](#v440---2026-06-24)
- [v4.3.4 - 2026-06-21](#v434---2026-06-21)
- [v4.3.3 - 2026-06-19](#v433---2026-06-19)
- [v4.3.2 - 2026-06-10](#v432---2026-06-10)
- [v4.3.1 - 2026-06-10](#v431---2026-06-10)
- [v4.3.0 - 2026-06-09](#v430---2026-06-09)
- [v4.2.1 - 2026-05-19](#v421---2026-05-19)
- [v4.2.0 - 2026-05-17](#v420---2026-05-17)
- [v4.1.0 - 2026-05-14](#v410---2026-05-14)
- [v4.0.2 - 2026-04-25](#v402---2026-04-25)
- [v4.0.1 - 2026-04-23](#v401---2026-04-23)
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
...

### v4.4.0 - 2026-06-24

- **Features & Enhancements**
  - **Admin Certificate Management:** Introduced a brand-new Admin subpage (`src/routes/admin/certificates.svelte`) with a clean, blurred-card design, enabling admins to easily upload and submit professional milestones with details (source, category, image URL, and verification link).
  - **Dynamic Image Sourcing:** Implemented dynamic file retrieval fallback. If a certificate image URL does not start with `"http"`, the portfolio automatically resolves it via the backend retrieval API (`retrieval("retrieve", { file: cert.url })`), allowing for seamless display of locally uploaded certificates.
  - **Interactive Credential Links:** Enhanced certificate cards in the `About` and `Certificates` sections to be fully interactive. Clicking a card securely redirects the user to the official credential or verification link in a new tab if one is provided.
  - **Admin Header & Navigation updates:** Registered the certificates management page in the Admin navigation flow (`src/components/admin-headers.svelte` and `src/routes/admin/index.svelte`), using a dedicated award icon for quick access.

### v4.3.4 - 2026-06-21

- **Features & Enhancements**
  - **Horizontal Scroll Implementation:** Transitioned from vertical to horizontal scrolling layout for improved user experience on wide screens, implementing snap-center behavior and smooth scroll handling via wheel events.
  - **Header Bug Fix:** Fixed header scroll position calculation to properly track horizontal scroll progress and display correct section highlighting.
  - **Admin Login Improvements:** 
    - Removed unnecessary delay in admin verification after login for immediate access.
    - Added toast notifications for admin login success and error states to provide better user feedback.

### v4.3.3 - 2026-06-19

- **UI/UX Enhancements**
  - **About Section Improvements:** Enhanced visual design of the Experiences and Certificates sections with improved hover effects, shadows, transitions, and layout refinements for better user engagement and aesthetics.
  - **Blogs Section Updates:** Increased blog items per page from 9 to 12 and changed grid layout from 3-column to 4-column display for better content presentation.
  - **Certificates Section Updates:** Increased certificate items per page from 6 to 8 and changed grid layout from 3-column to 4-column display for better content presentation.
  - **Responsive Design Refinements:** Improved spacing, padding, and layout consistency across mobile and desktop views.

- **Development Workflow**
  - **Local Development Configuration:** Updated API configuration to point to localhost:8000 for local development and testing purposes.
  - **Code Formatting:** Standardized code formatting and indentation across components for better readability and maintainability.

### v4.3.2 - 2026-06-10

- **Admin UI Unification**
  - **Standardized Dashboard Design:** Unified all admin routes (`Poetry`, `Blogs`, `Projects`, `Experiences`, `Resume`) with the modern, blurred-card aesthetic established in the Upload section.
  - **Enhanced Layouts:** Implemented centered flex containers and shadow-heavy containers across the entire admin dashboard for better focus and visual consistency.
  - **Refined Form Elements:** Standardized all inputs, textareas, and buttons with consistent rounding, focus states, and interaction transitions.
  - **Modernized Login:** Redesigned the Admin Access screen with a secure, high-tech card layout and improved visual feedback.

### v4.3.1 - 2026-06-10

- **Tech & Aesthetics Improvements**
  - **Animated Background:** Introduced a global `AnimatedBackground` component featuring a static tech grid and independently drifting blurred radials for an immersive "tech" atmosphere.
  - **Dynamic Transitions:** Implemented Svelte `fly` and `fade` transitions for Hero section content (name, subtitle, and images) for a polished entrance effect.
  - **Interactive Hover Effects:** Enhanced the `Card` component with smooth vertical lift and shadow glow effects on hover, providing better visual feedback across projects and certificates.
  - **Theme Optimization:** Refined animation visibility and colors for both Light and Dark modes to ensure consistent aesthetics across themes.

### v4.3.0 - 2026-06-09

- **Features & Enhancements**
  - **Wakatime Integration:** Integrated Wakatime data for real-time coding activity display in the AI component and Home page.
  - **New Footer:** Added a professional footer component featuring the developer's name and "MPOP Reverse II" branding.
  - **Mobile UI Improvements:**
    - Redesigned "About" section for mobile users with tabbed navigation for Experiences and Certificates.
    - Added social platform icons (Facebook, GitHub, LinkedIn, NPM) to the Contact section.
    - Enhanced the AI chat interface with a backdrop blur effect and improved mobile responsiveness.
- **Maintenance & Technical Updates**
  - **API Migration:** Updated the backend API endpoint to `api-mpop-backend.onrender.com`.
  - **UI Refinements:**
    - Added custom scrollbar styles for better UX.
    - Improved layout consistency and spacing in Projects and About sections.
    - Updated developer social links.
  - **Dependency Updates:** Updated core dependencies including Svelte 5.56, Vite 8.0.16, Axios 1.17, and others for improved performance and security.

### v4.2.1 - 2026-05-19

- **UI/UX Refinements**
  - Enhanced **Dark Mode** support across multiple components (Input, Textarea, Experiences, Upload) for better visibility and consistency.
  - Improved **Icon** rendering in the navigation, ensuring correct styling for selected states.
  - Refined layouts and spacing in **Admin** routes (Experiences, Projects, Upload) for a more polished dashboard experience.
  - Adjusted **Hero** section padding and **Contact** form button styling for improved aesthetics.
  - Fixed **Certificates** image aspect ratio and layout issues to ensure proper display.
- **Maintenance & Fixes**
  - Updated the API URL to the production endpoint in `fetch.ts`.
  - Addressed accessibility warnings and minor code cleanup in the `Certificates` component.

### v4.2.0 - 2026-05-17

- **Features & Enhancements**
  - Integrated **GitHub API** for dynamic project fetching, allowing projects to be synced directly from GitHub.
- **Maintenance & Fixes**
  - Fixed issues with **Experiences** and **Poetry** sections for improved stability.
  - General adjustments and optimizations across the application.
  - Updated deployment configurations.

### v4.1.0 - 2026-05-14

- **Features & Enhancements**
  - Integrated **AI Assistant** component for interactive user engagement.
  - Implemented **File Upload** functionality in the Admin dashboard.
  - Added **GitHub Actions workflows** for automated deployment to GitHub Pages.
  - Initialized **Post Blog** functions for enhanced content management.
- **UI/UX Improvements**
  - Refined **Light Mode** styling for pagination and image components.
  - Optimized scrollbar width for a cleaner, more focused layout.
  - Various design refinements and layout adjustments across the app.
- **Maintenance & Fixes**
  - Updated core dependencies: **Vite 8.0.12**, **Svelte 5.55.5**, and **Tailwind 4.3.0**.
  - Fixed and optimized CI/CD workflow configurations.
  - Improved data fetching logic for better performance.

### v4.0.2 - 2026-04-25

- **Security & Administration**
  - Implemented an `Admin Code` verification gate for the Admin dashboard.
  - Added specialized fetch utilities (`adminGet`, `adminPost`, etc.) that include the admin key in headers.
  - Added `storage` and `session` helpers for persistent and session-based data management.
- **Bug Fixes**
  - Fixed an issue where the `AI` component would fail to load if certain profile data was missing or before it was ready.
  - Adjusted the `Hero` section profile image alignment for better centering.
- **Refinement**
  - Cleaned up unused imports and improved component pathing in the Admin section.

### v4.0.1 - 2026-04-23

- **Markdown Integration**
  - Integrated `marked` for robust Markdown parsing.
  - Added `dompurify` for secure Markdown rendering.
  - Implemented `Markdown` component for consistent content presentation across the app.
  - Enabled real-time Markdown preview in Admin Blog posting.
- **Enhanced Notifications**
  - Integrated `svelte-french-toast` for beautiful, non-intrusive UI notifications.
  - Added toast feedback for API interactions in `About`, `Blogs`, `Feedback`, and `Projects`.
- **UI/UX Improvements**
  - Added `Ai` (AI Assistant) component to the home page.
  - Refined `Projects` section with hover effects and improved layout.
  - Added `Toaster` for global notification management.

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
  - **New:** Added `Feedback` form and list functionality.
  - **New:** Implemented `Resume` layout and component.
  - **New:** Integrated `Loaders` for better async state handling.
  - **New:** Added custom `Input` and `Textarea` components.
  - **New:** Implemented `Poetry` layout with preview functionality.
- **Improvements & Fixes**
  - Updated build pipeline to use Vite 8.0 with Svelte plugin.
  - Refined component architecture for better modularity in Svelte.
  - Optimized bundle size by leveraging Svelte's compile-time features.
  - Updated dependencies to the latest versions including `Svelte 5.55` and `Vite 8.0.8`.
  - Fixed various layout issues in Admin routes and components.


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
