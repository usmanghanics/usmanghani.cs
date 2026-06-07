# 🚀 Usman Ghani Portfolio

A premium, high-performance portfolio website showcasing published mobile apps, AI systems, automation solutions, and production-grade software engineering work.

**Live Site:** [Portfolio Link]  
**Stack:** Next.js 14 | TypeScript | Tailwind CSS

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)

---

## 🎯 Overview

This portfolio is a modern, full-stack application built with **Next.js** that highlights:

- **Published Mobile Apps** - iOS and Android applications with millions of downloads
- **AI & Machine Learning** - Production AI systems and automation solutions
- **Software Engineering** - Full-stack development, backend systems, and DevOps work
- **Case Studies** - In-depth project documentation and technical insights

The previous static portfolio has been archived in the `old_portfolio/` directory for reference.

---

## ✨ Features

- ⚡ **Next.js 14** - Latest React framework with App Router
- 🎨 **Modern UI/UX** - Responsive design with smooth animations
- 🔍 **SEO Optimized** - Metadata, Open Graph, and structured data
- 📱 **Mobile First** - Fully responsive across all devices
- 🚀 **High Performance** - Optimized images, lazy loading, and caching
- 🌙 **Dark Mode Support** - Theme toggle for user preference
- ♿ **Accessible** - WCAG compliant with proper semantic HTML
- 📊 **Analytics Ready** - Integration points for tracking and monitoring

---

## 💻 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with SSR/SSG |
| **TypeScript** | Type-safe development (63.6% of codebase) |
| **Tailwind CSS** | Utility-first styling (36.3% of codebase) |
| **React** | UI component library |
| **JavaScript** | Client-side interactions (0.1%) |

---

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Code-with-UsmanG/Portfolio-Site.git
cd Portfolio-Site

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

---

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run tests (if configured)
npm test
```

### Project Structure

```
Portfolio-Site/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── projects/          # Projects pages
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
├── styles/               # Global styles
│   └── globals.css
├── public/               # Static assets
│   ├── images/
│   └── icons/
├── utils/               # Utility functions
├── types/              # TypeScript type definitions
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 🌐 Deployment

### Recommended Platforms

- **Vercel** (Official Next.js hosting)
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**
  ```bash
  # Build
  npm run build
  # Deploy via Netlify CLI or git integration
  ```

- **AWS Amplify, DigitalOcean, or self-hosted**

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your_analytics_id
```

---

## 📄 License

This project is personal work. All rights reserved © 2024 Usman Ghani.

---

## 📧 Contact

For inquiries about my work or collaboration opportunities:

- **Email:** [your-email@example.com]
- **LinkedIn:** [Your LinkedIn]
- **GitHub:** [@Code-with-UsmanG](https://github.com/Code-with-UsmanG)
- **Twitter:** [@YourHandle]

---

## 🙏 Acknowledgments

Built with ❤️ using modern web technologies and best practices in software engineering.

---

**Last Updated:** June 2024
