# 🌟 RyannKim327 Portfolio - Modern Developer Showcase

[![wakatime](https://wakatime.com/badge/user/8ef6ba9a-e605-4488-8da5-581413894876/project/3ec01f89-d6f0-404a-b8f2-b1edf4f6542c.svg)](https://wakatime.com/badge/user/8ef6ba9a-e605-4488-8da5-581413894876/project/3ec01f89-d6f0-404a-b8f2-b1edf4f6542c)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-06B6D4?style=flat&logo=tailwindcss)

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
- 🔗 **Backend Integration** - Connected to Go-based backend API

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern React with latest features
- **TypeScript 5.9.3** - Static type checking
- **Vite 7.3.0** - Next-generation frontend tooling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework

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

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🎨 Design Philosophy

This portfolio embraces a **modern single-page design** that creates an engaging and professional user experience. The layout features:

- **Clean, minimalist interface** with focus on content
- **Responsive breakpoints** that adapt to various screen sizes
- **Adaptive theming** with both light and dark modes featuring purple accents for a modern, professional appearance
- **Smooth scrolling navigation** between sections
- **Interactive elements** and animations for enhanced user engagement

## 📝 Changelog

### Version 1.0.0 (Current) - Major Release

#### Recent Updates (March 2026)
- **2026-03-05**: 📰 **Blogs** - Added/updated blog fetching + UI updates (`src/pages/get/blogs.tsx`, `src/screen/blogs.tsx`, `src/utils/interfaces.tsx`)
- **2026-03-04**: 🧩 **UI/UX Adjustments** - Tweaks to About + Projects sections (`src/screen/about.tsx`, `src/screen/projects.tsx`)
- **2026-03-04**: 📦 **Dependency & Screen Updates** - Updated packages and refined Blogs/Feedback screens (`package.json`, `src/screen/blogs.tsx`, `src/screen/feedback.tsx`)
- **2026-03-03**: 🦸 **Hero Section Update** - Refined hero layout/content (`src/screen/hero.tsx`)
- **2026-03-03**: 🧭 **Navigation & App Shell** - Updates across app layout/header/widgets + blogs integration (`src/App.tsx`, `src/parts/header.tsx`, `src/widgets/input.tsx`)
- **2026-03-03**: 🎨 **UI Refresh** - Introduced new theme assets and broader UI changes (added `dark.png`/`light.png`, removed `self.png`, API updates)

#### Recent Updates (January 2026)
- **2026-01-09**: 📱 **Mobile Optimization Update** - Added responsive phone view for about section and improved loading notifications
- **2026-01-09**: 🔄 Enhanced loading indicator with visual status feedback and better UX
- **2026-01-07**: 🔒 **Security Enhancement** - Removed .env file from repository and added to .gitignore
- **2026-01-07**: 📄 Added custom 404 error page for better user experience
- **2026-01-07**: 🗂️ Improved file organization and structure
- **2026-01-04**: 🌞 **Light Mode Support** - Added comprehensive light/dark theme toggle functionality
- **2026-01-04**: 🎉 **Major Release v1.0.0** - Version bump to stable release
- **2026-01-04**: 📱 Enhanced responsive design for mobile devices
- **2026-01-04**: 🧹 Code cleanup and optimization improvements
- **2026-01-04**: 🖼️ Hero section responsive image handling
- **2026-01-03**: 🔧 API endpoint URL handling improvements
- **2026-01-03**: 🐛 Multiple bug fixes and optimizations
- **2025-12-22**: ✨ Enhanced about section with better content
- **2025-12-21**: 🎨 UI improvements and refinements

#### Major Updates (2025)
- **2025-11-20**: Added more professional experience content
- **2025-11-20**: Updated README documentation
- **2025-11-20**: Complete layout redesign for better user experience
- **2025-08-30**: Performance optimizations
- **2025-07-08**: Major codebase updates and improvements
- **2025-07-06**: Complete project restructure and modernization

#### Key Features Added
- ✅ Modern React 19 implementation
- ✅ TypeScript integration for type safety
- ✅ Responsive design with Tailwind CSS
- ✅ Light/Dark theme switching functionality
- ✅ Mobile-optimized about section layout
- ✅ Enhanced loading indicators and notifications
- ✅ Backend API integration
- ✅ Smooth animations with Framer Motion
- ✅ Professional portfolio sections
- ✅ Contact form functionality
- ✅ Project showcase gallery
- ✅ Custom 404 error page
- ✅ Security improvements (environment variables)
- ✅ GitHub Pages deployment

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
