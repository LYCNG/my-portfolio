# 🚀 SharkLian Dev - Premium Portfolio

A state-of-the-art, high-performance personal portfolio website built for modern web standards. This project showcases the fusion of **Next.js 15**, **Tailwind CSS v4**, and sophisticated **GSAP** animations, delivering a premium dark-themed experience for tech professionals.

![SharkLian Portfolio Preview](https://placehold.co/1200x630/020617/3b82f6?text=SharkLian+Dev+Portfolio+v2.0)

## ✨ Core Features

- **⚡ Next.js 15 + React 19**: Leveraging the latest App Router patterns and React Server Components.
- **🎨 Tailwind CSS v4**: Utilizing the cutting-edge utility-first CSS framework for ultra-fast, modern styling.
- **🎭 GSAP & useGSAP**: High-fidelity entrance animations, stagger effects, and scroll-triggered transitions.
- **🖱️ Lenis Smooth Scroll**: Silky smooth scrolling across all devices.
- **🌐 Full Internationalization (i18n)**: Seamless English (`en`) and Traditional Chinese (`zh-TW`) support with `next-intl`.
- **📫 Integrated Contact System**: Functional contact form powered by **Resend Email API** with project inquiry templates.
- **📱 True Responsive Design**: Meticulously optimized for Mobile, Tablet, and Desktop layouts.
- **🔍 SEO Optimized**: Metadata API integration with JSON-LD structured data.

## 🛠️ Technology Stack

| Category      | Technology                                                                    |
| :------------ | :---------------------------------------------------------------------------- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router)                                |
| **Language**  | [TypeScript](https://www.typescriptlang.org/)                                 |
| **Animation** | [GSAP](https://gsap.com/) + [@gsap/react](https://github.com/greensock/react) |
| **Styling**   | [Tailwind CSS v4](https://tailwindcss.com/)                                   |
| **Icons**     | [Lucide React](https://lucide.dev/)                                           |
| **Email**     | [Resend](https://resend.com/)                                                 |
| **Scroll**    | [Lenis](https://lenis.darkroom.engineering/)                                  |
| **i18n**      | [next-intl](https://next-intl-docs.vercel.app/)                               |

## 📂 Project Structure

```bash
src/
├── app/
│   ├── [locale]/          # Multi-language routes
│   │   ├── about/         # Dedicated About Page
│   │   ├── contact/       # Contact Information
│   │   ├── portfolio/     # Full Project List
│   │   ├── layout.tsx     # Global Layout & Providers
│   │   └── page.tsx       # Landing Page (Hero, Featured, Experience)
│   └── globals.css        # Tailwind v4 Global Configurations
├── components/            # Atomic & Section Components
│   ├── AboutCTA.tsx       # "Book a call" Section for About
│   ├── ContactForm.tsx    # Optimized Form with Resend integration
│   ├── Hero.tsx           # Dynamic Entrance Hero
│   ├── Topbar.tsx         # Liquid Sticky Navigation
│   └── ...
├── lib/
│   └── actions/           # Server Actions (sendEmail.ts)
└── i18n/                  # Routing & Translation Config
messages/
├── en.json                # English Translation Catalog
└── zh-TW.json             # Traditional Chinese Translation Catalog
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **Resend API Key**: Required for the contact form functionality.

### Installation

1.  **Clone the project:**

    ```bash
    git clone https://github.com/LYCNG/my-portfolio.git
    cd my-portfolio
    ```

2.  **Environment Setup**:
    Create a `.env.local` file in the root directory:

    ```env
    RESEND_API_KEY=re_your_api_key_here
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Launch development server:**
    ```bash
    npm run dev
    ```

### Production Build

```bash
npm run build
npm start
```

## 📄 License

This project is open-source and available under the **MIT License**.

---

\*Created with ❤️ by **SharkLian Dev\***.
