# Professional Portfolio Website

A high-performance, dark-themed personal portfolio website designed for a Senior Full-Stack Engineer. Built with **Next.js 15+ (App Router)**, **Tailwind CSS v4**, and **Framer Motion**, featuring full Internationalization (i18n) support.

![Project Preview](https://placehold.co/1200x630/0f172a/ffffff?text=Portfolio+Preview)

## 🚀 Key Features

- **Modern Tech Stack**: Next.js 15, React 19, Tailwind v4, Framer Motion.
- **Internationalization (i18n)**: Seamless support for English (`en`) and Traditional Chinese (`zh-TW`) using `next-intl`.
- **Performance First**: Server Components, optimized fonts, and minimal client-side bundles.
- **Premium UI/UX**:
  - Dark mode aesthetic with glassmorphism effects.
  - Sticky **Topbar** with language switcher.
  - **Hero Section** with dynamic background animations.
  - **Featured Work** displaying NDA-friendly abstract architecture diagrams.
  - **Tech Stack** infinite marquee.
  - **Services** & **Process** showcasing technical expertise.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)

## 📂 Project Structure

```bash
src/
├── app/
│   ├── [locale]/          # Localized routes (en, zh-TW)
│   │   ├── layout.tsx     # Root layout with i18n provider
│   │   └── page.tsx       # Main landing page
│   └── globals.css        # Global Tailwind v4 styles
├── components/            # Reusable UI components
│   ├── ui/                # Base UI elements (Button, etc.)
│   ├── Hero.tsx           # Home Hero section
│   ├── Topbar.tsx         # Navigation & Lang switcher
│   └── ...
├── i18n/                  # i18n configuration
│   ├── request.ts         # Request handler
│   └── routing.ts         # Routing logic
└── middleware.ts          # i18n Middleware
messages/
├── en.json                # English translations
└── zh-TW.json             # Traditional Chinese translations
```

## ⚡ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000). The site will automatically redirect to your preferred locale (e.g., `/en`).

## 🌍 Internationalization (i18n)

This project uses `next-intl` for routing and translations.

- **Adding a new language:**
  1.  Update `src/i18n/routing.ts` to include the new locale code.
  2.  Create a new JSON file in `messages/` (e.g., `es.json`).
  3.  Restart the dev server.

## 📦 Build & Deploy

To create a production build:

```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License.
