# RyannKim327 Portfolio

**Project version:** `4.0.0`

[![wakatime](https://wakatime.com/badge/user/61954829-dd88-47de-8b67-7d673663ea1c/project/da79e6a7-f448-49fd-8ce7-d643023e18b8.svg)](https://wakatime.com/badge/user/61954829-dd88-47de-8b67-7d673663ea1c/project/da79e6a7-f448-49fd-8ce7-d643023e18b8)
![Svelte](https://img.shields.io/badge/Svelte-5.55.4-FF3E00?style=flat&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.0.8-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.2-06B6D4?style=flat&logo=tailwindcss)

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
- 📝 **Blog System** - Fetch + view blog posts with Markdown support
- 🖼️ **Blog Post Images** - Support for image galleries attached to blog posts
- 🧰 **Admin Dashboard** - Manage portfolio content (experiences, projects, blogs)
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

- **svelte-spa-router** - Simple hash-based routing for Svelte apps
- **Axios 1.15.0** - Promise-based HTTP client for API communication
- **gh-pages** - Easy deployment to GitHub Pages

## 📁 Project Structure

```
portfolio-svelte/
├── public/                 # Static assets (icons, 404, etc.)
├── src/
│   ├── assets/            # Project-specific images and logos
│   ├── components/        # Reusable Svelte components (card, header, icon)
│   ├── lib/               # Utility functions, fetch logic, and shared logic
│   ├── routes/            # Main views and sections
│   │   ├── admin/         # Administrative dashboard components
│   │   └── home/          # Home sections (hero, about, projects, contact, blogs)
│   ├── App.svelte         # Root Svelte component
│   ├── main.ts            # Entry point of the application
│   └── routes.ts          # SPA routing configuration
└── package.json           # Dependencies and scripts configuration
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

## 📝 Changelog

Detailed version history can be found in [CHANGELOGS.md](./CHANGELOGS.md).

## 📄 License

Distributed under the MIT License. See [LICENSE.md](./LICENSE.md) for more information.

## 🙏 Acknowledgments

- **Vite** for the amazing build tool
- **Svelte** for the intuitive and powerful framework
- **Tailwind CSS** for making styling a breeze
- **Go** for the robust backend API
