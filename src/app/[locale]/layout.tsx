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
      </body>
    </html>
  );
}
