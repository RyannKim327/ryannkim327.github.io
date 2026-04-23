# RyannKim327 Portfolio

**Project version:** `4.0.1`

[![wakatime](https://wakatime.com/badge/user/61954829-dd88-47de-8b67-7d673663ea1c/project/da79e6a7-f448-49fd-8ce7-d643023e18b8.svg)](https://wakatime.com/badge/user/61954829-dd88-47de-8b67-7d673663ea1c/project/da79e6a7-f448-49fd-8ce7-d643023e18b8)
![Svelte](https://img.shields.io/badge/Svelte-5.55.4-FF3E00?style=flat&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.0.8-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.2-06B6D4?style=flat&logo=tailwindcss)
![Marked](https://img.shields.io/badge/Marked-18.0.2-000000?style=flat&logo=markdown)

> **A modern, responsive portfolio website showcasing the work and skills of Ryann Kim Sesgundo, an aspiring full-stack developer.**

## Table of Contents

- [🚀 Live Demo](#-live-demo)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Libraries & Tools](#libraries--tools)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [🎨 Design Philosophy](#-design-philosophy)
- [📝 Changelog](#-changelog)
- [🌐 Deployment](#-deployment)
- [🔗 Backend Integration](#-backend-integration)
- [📝 About the Developer](#-about-the-developer)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [🔧 Technical Details](#-technical-details)

## 🚀 Live Demo

Visit the live portfolio at: [ryannkim327.is-a.dev](https://ryannkim327.is-a.dev)

## ✨ Features

- 🎨 **Modern Svelte 5 Design** - Clean, professional layout leveraging Svelte's reactive model
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Built with Vite 8 for optimal development and production performance
- 🎯 **TypeScript** - Type-safe development for better code quality and maintenance
- 🎨 **Tailwind CSS 4.2** - Utility-first CSS framework for rapid and consistent styling
- 📦 **Component-Based Architecture** - Modular and maintainable code structure in Svelte
- 🌙 **Dark/Light Theme** - Elegant theme switching with dark and light modes, featuring purple accents
- 📝 **Markdown Support** - Integrated `marked` and `dompurify` for secure Markdown rendering in Blogs and Poetry
- 🔔 **Toast Notifications** - Real-time feedback using `svelte-french-toast`
- 🤖 **AI Assistant** - Integrated AI component for interactive user assistance
- 🧰 **Admin Dashboard** - Manage portfolio content with real-time Markdown preview
- 🔗 **Backend Integration** - Connected to Go-based backend API

## 🛠️ Tech Stack

### Frontend

- **Svelte 5.55.4** - Reactive and compiler-optimized frontend framework
- **TypeScript 6.0.3** - Static type checking for robust applications
- **Vite 8.0.8** - Next-generation frontend tooling for fast builds
- **Tailwind CSS 4.2.2** - Utility-first CSS framework for modern design

### Backend

- **Go** - High-performance backend API server
- **Repository**: [portfolio-backend](https://github.com/RyannKim327/portfolio-backend)

### Libraries & Tools

- **marked** - Fast Markdown parser and compiler
- **dompurify** - XSS sanitizer for HTML and Markdown
- **svelte-french-toast** - Lightweight toast notifications for Svelte
- **svelte-spa-router** - Simple hash-based routing for Svelte apps
- **Axios 1.15.0** - Promise-based HTTP client for API communication
- **gh-pages** - Easy deployment to GitHub Pages

## 📁 Project Structure

```mermaid
graph TD
    Root[portfolio-svelte] --> Public[public/]
    Root --> Src[src/]
    Root --> Config[Config Files]

    Public --> P_Assets[logo.png, icons.svg, etc.]
    Public --> P_Misc[404.html, favicon.svg]

    Src --> Assets[assets/]
    Src --> Components[components/]
    Src --> Lib[lib/]
    Src --> Routes[routes/]
    Src --> AppS[App.svelte]
    Src --> MainT[main.ts]
    Src --> RoutesT[routes.ts]

    Components --> C_MD[markdown.svelte]
    Components --> C_UI[input, textarea, card, loader, etc.]
    Components --> C_AI[ai.svelte]

    Routes --> R_Admin[admin/]
    Routes --> R_Home[home/]
    Routes --> R_User[user/]

    R_Admin --> A_Views[blogs, poetry, info]
    R_Home --> H_Sections[hero, about, projects, contact, blogs, feedback]

    Config --> C_Pkg[package.json]
    Config --> C_Vite[vite.config.ts]
    Config --> C_Svelte[svelte.config.js]
```

```
portfolio-svelte/
├── public/                 # Static assets (icons, 404, etc.)
├── src/
│   ├── assets/            # Project-specific images and logos
│   ├── components/        # Reusable Svelte components
│   │   ├── markdown.svelte # Markdown renderer
│   │   ├── ai.svelte       # AI assistant component
│   │   └── ...            # Other UI components
│   ├── lib/               # Shared logic and fetch utilities
│   ├── routes/            # Main views and sections
│   │   ├── admin/         # Administrative dashboard
│   │   ├── home/          # Home sections
│   │   └── user/          # User-specific views
│   ├── App.svelte         # Root Svelte component
│   ├── main.ts            # Entry point
│   └── routes.ts          # SPA routing
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (latest LTS recommended)
- **npm** or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RyannKim327/portfolio-svelte.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-svelte
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - Run Svelte and TypeScript checks
- `npm run deploy` - Build and deploy to GitHub Pages

## 🎨 Design Philosophy

- **Modern Aesthetic**: Clean lines, ample whitespace, and a focus on content clarity.
- **Purple Accents**: A consistent color palette featuring purple highlights to provide a distinct and professional look.
- **Dark/Light Mode**: User-selectable themes to ensure comfortable viewing in any environment.
- **Responsive Design**: Fluid layouts that adapt seamlessly from mobile devices to large desktop monitors.

## 📝 Changelog

Detailed version history can be found in [CHANGELOGS.md](./CHANGELOGS.md).

## 🌐 Deployment

The project is configured for easy deployment:
- **Hosting**: GitHub Pages
- **Domain**: [ryannkim327.is-a.dev](https://ryannkim327.is-a.dev)
- **CI/CD**: Uses `gh-pages` package for automated deployment from the `main` branch.

## 🔗 Backend Integration

This frontend interacts with a custom-built backend:
- **API**: Go-based REST API
- **Functionality**: Dynamic fetching of blog posts, project details, and professional experiences.
- **Source**: [portfolio-backend](https://github.com/RyannKim327/portfolio-backend)

## 📝 About the Developer

**Ryann Kim M. Sesgundo** is an aspiring full-stack developer passionate about building modern web applications. With a focus on performance and user experience, Ryann Kim continuously explores new technologies like Svelte, Go, and TypeScript to create impactful digital solutions.

## 🤝 Contributing

Contributions are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See [LICENSE.md](./LICENSE.md) for more information.

## 🙏 Acknowledgments

- **Vite** for the amazing build tool
- **Svelte** for the intuitive and powerful framework
- **Tailwind CSS** for making styling a breeze
- **Go** for the robust backend API

## 🔧 Technical Details

- **Svelte 5**: Leverages the latest "Runes" for fine-grained reactivity.
- **Tailwind CSS 4**: Utilizes the newest features of Tailwind for streamlined styling.
- **Vite 8**: Ensures a lightning-fast development experience and optimized production bundles.
- **SPA Architecture**: Uses `svelte-spa-router` for a smooth, single-page application experience.
