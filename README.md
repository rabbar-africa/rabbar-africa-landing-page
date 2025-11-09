# Landing Page

A modern, responsive landing page built with the latest web technologies.

## Tech Stack

- **Next.js 15.5** - React framework with App Router
- **React 19** - Latest React version with enhanced features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **ESLint** - Code linting and formatting

## Features

- ⚡️ Blazing fast with Turbopack
- 📱 Fully responsive design
- 🎨 Modern UI components with shadcn/ui
- 🎯 Type-safe with TypeScript
- 🚀 Optimized for performance
- 📦 Component-based architecture

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Create an optimized production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
├── src/
│   ├── app/                # App Router pages and layouts
│   │   ├── globals.css     # Global styles with Tailwind CSS
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Home page component
│   ├── components/         # Reusable components
│   │   └── ui/             # shadcn/ui components
│   └── lib/                # Utility functions
├── public/                 # Static assets
└── package.json           # Project dependencies and scripts
```

## Adding Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

## Customization

### Themes
The project uses CSS variables for theming. You can customize colors in `src/app/globals.css`.

### Components
All UI components are in `src/components/ui/` and can be customized as needed.

### Styling
Use Tailwind CSS classes for styling. The configuration supports the latest Tailwind v4 features.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render
