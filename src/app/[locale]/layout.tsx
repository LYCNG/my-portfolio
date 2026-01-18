import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Topbar } from '@/components/Topbar';
import "../globals.css";

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: "/lian.svg",
    },
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
      type: 'website',
      siteName: 'SharkLian Portfolio',
      locale: locale === 'zh-TW' ? 'zh_TW' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('og.title'),
      description: t('og.description'),
    },
    keywords: t('keywords'),
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 font-sans antialiased text-white" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Topbar />
          <main className="pt-16">
            {children}
          </main>
        </NextIntlClientProvider>
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "SharkLian",
              "url": "https://sharklian-portfolio.vercel.app",
              "jobTitle": "Senior Frontend Developer",
              "description": "Senior Frontend Developer specializing in React, Next.js, and TypeScript architecture.",
              "image": "https://sharklian-portfolio.vercel.app/lian.svg",
              "sameAs": [
                "https://github.com/LYCNG/my-portfolio",
                "https://www.upwork.com/freelancers/~0111dd1d91dfc8f766",
                "https://www.fiverr.com/gray_shark/convert-figma-to-next-js-and-tailwind-css"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
