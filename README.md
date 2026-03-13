# RyannKim327 Portfolio

**Project version:** `3.0.2`

[![wakatime](https://wakatime.com/badge/user/8ef6ba9a-e605-4488-8da5-581413894876/project/3ec01f89-d6f0-404a-b8f2-b1edf4f6542c.svg)](https://wakatime.com/badge/user/8ef6ba9a-e605-4488-8da5-581413894876/project/3ec01f89-d6f0-404a-b8f2-b1edf4f6542c)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.1-06B6D4?style=flat&logo=tailwindcss)

> **A modern, responsive portfolio website showcasing the work and skills of Ryann Kim Sesgundo, an aspiring full-stack developer.**

## 🚀 Live Demo

Visit the live portfolio at: [ryannkim327.is-a.dev](https://ryannkim327.is-a.dev)

## ✨ Features

- 🎨 **Modern Single-Page Design** - Clean, professional layout with smooth scrolling
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion for engaging user experience
- 🎯 **TypeScript** - Type-safe development for better code quality
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 📦 **Component-Based Architecture** - Modular and maintainable code structure
- 🌙 **Dark/Light Theme** - Elegant theme switching with dark and light modes, featuring purple accents
- 📝 **Blog System** - Fetch + view blog posts with Markdown rendering
- 💅 **Enhanced Markdown Styling** - Proper list styling, code blocks, and inline code formatting
- 🧰 **Admin Dashboard (WIP)** - Manage portfolio content (experiences/projects/blogs)
- 🧩 **Experience Icons (Admin)** - Add an icon field when creating/editing experiences
- 🔗 **Backend Integration** - Connected to Go-based backend API

## 🛠️ Tech Stack

### Frontend

- **React 19.2.4** - Modern React with latest features
- **TypeScript 5.9.3** - Static type checking
- **Vite 7.3.1** - Next-generation frontend tooling
- **Tailwind CSS 4.2.1** - Utility-first CSS framework

### Backend

- **Go** - Backend API server
- **Repository**: [portfolio-backend](https://github.com/RyannKim327/portfolio-backend)

### Libraries & Tools

- **Framer Motion 12.23.26** - Animation library
- **FontAwesome** - Icon library
- **Axios 1.13.2** - HTTP client for API communication
- **Zod 4.3.4** - Schema validation
- **Swiper 12.0.3** - Touch slider component
- **ESLint** - Code linting
- **gh-pages** - GitHub Pages deployment

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── parts/             # Layout components (header, etc.)
│   ├── screen/            # Page sections (hero, about, projects, contact)
│   ├── utils/             # Utility functions and API helpers
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── types/                 # TypeScript type definitions
└── package.json           # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ryannkim327/ryannkim327.github.io.git
   cd ryannkim327.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
| `npm run deploy`  | Deploy to GitHub Pages   |

## 🎨 Design Philosophy

This portfolio is designed to feel **modern, focused, and fast**—a single-page experience that keeps attention on the work while still providing personality through motion and theming.

### Core Principles

- **Content-first layout**
  - Prioritizes readability and scan-ability (clear section hierarchy, consistent spacing, and purposeful typography).
  - Keeps copy and projects easy to discover without overwhelming the visitor.

- **Single-page flow with clear navigation**
  - Smooth scrolling between sections to maintain context and reduce friction.
  - Navigation is designed to orient users quickly and minimize “where am I?” moments.

- **Responsive by default**
  - Breakpoints are chosen to support common device widths and ensure layouts degrade gracefully.
  - Touch targets, spacing, and component stacking are tuned for mobile ergonomics.

- **Theme as a product feature (Light/Dark, neutral palette)**
  - The theme switch is treated as part of the experience, not an afterthought.
  - The palette intentionally stays clean and neutral (light surfaces + dark slate backgrounds) to keep focus on content and imagery.
  - Contrast and readability are prioritized across both modes.

- **Motion with intention**
  - Animations are used to guide attention (section entry, emphasis, micro-interactions), not distract.
  - Transitions are kept subtle and consistent to reinforce polish.

- **Performance-minded UI**
  - Leverages a modern build toolchain (Vite) and component modularity to keep interactions snappy.
  - Avoids unnecessary visual noise and heavy assets where possible.

- **Accessibility-oriented decisions**
  - Designs aim for strong contrast, readable font sizing, and predictable interaction patterns.
  - UI structure is kept semantic-friendly to support assistive technologies.

- **Maintainable, component-driven structure**
  - Reusable UI sections/components keep styling consistent and updates straightforward.
  - Utility-first styling (Tailwind) favors small, composable changes without CSS sprawl.

## 📝 Changelog

> Notes
>
> - This changelog is derived from this repo’s **git history** (non-merge commits). It’s maintained manually and is not automatically tied to `package.json`.
> - Versions follow semantic versioning (**MAJOR.MINOR.PATCH**).

### v3.0.2 (Current) — 2026-03-12 → 2026-03-13

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

- Modern React + TypeScript
- Responsive design with Tailwind CSS
- Light/Dark theme switching
- Backend API integration
- Smooth animations with Framer Motion
- GitHub Pages deployment

## 🌐 Deployment

The portfolio is automatically deployed to GitHub Pages using the custom domain `ryannkim327.is-a.dev`.

To deploy your own version:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🔗 Backend Integration

This portfolio connects to a Go-based backend API for dynamic content and contact form functionality.

**Backend Repository**: [https://github.com/RyannKim327/portfolio-backend](https://github.com/RyannKim327/portfolio-backend)

The backend provides:

- Contact form submission handling
- Dynamic content management
- API endpoints for portfolio data

## 📝 About the Developer

**Ryann Kim Sesgundo** is an aspiring full-stack developer focused on enhancing abilities and capabilities to create different applications using modern stacks and technologies.

### Connect

- **Portfolio**: [ryannkim327.is-a.dev](https://ryannkim327.is-a.dev)
- **GitHub**: [@ryannkim327](https://github.com/ryannkim327)
- **Backend Repository**: [portfolio-backend](https://github.com/RyannKim327/portfolio-backend)
- **LinkedIn**: [RyannKim327](https://linkedin.com/in/RyannKim327)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ryannkim327/ryannkim327.github.io/issues).

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.

**You are free to:**

- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made
- **NonCommercial** — You may not use the material for commercial purposes

**This means:**

- ✅ You can use this code for learning and personal projects
- ✅ You can modify and share the code with proper attribution
- ❌ You cannot sell this code or use it for commercial purposes
- ❌ You cannot remove the original author's attribution

For more details, see the [LICENSE](LICENSE) file or visit [Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/).

## 🙏 Acknowledgments

- **Vite** team for the amazing build tool
- **React** team for the powerful library
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **FontAwesome** for beautiful icons
- **Go** community for the robust backend language

## 🔧 Technical Details

### Performance Optimizations

- Code splitting with React lazy loading
- Optimized bundle size with Vite
- Efficient CSS with Tailwind's purge functionality
- Image optimization and lazy loading

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Development Tools

- ESLint for code quality
- TypeScript for type safety
- Vite for fast development
- GitHub Actions for CI/CD

---

<div align=\"center\">
  <p>Made with ❤️ by <strong>Ryann Kim Sesgundo</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
  <p><em>This project is open source but not for commercial use</em></p>
</div>
