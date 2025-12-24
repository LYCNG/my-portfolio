"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";

export function Topbar() {
  const t = useTranslations("Topbar");
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-tight">
          <img src="/lian.svg" alt="SharkLian" className="w-8 h-8" />
          SharkLian Portfolio.
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#projects" className="hover:text-white transition-colors">{t("projects")}</a>
            <a href="#services" className="hover:text-white transition-colors">{t("services")}</a>
            <a href="#process" className="hover:text-white transition-colors">{t("process")}</a>
        </nav>

        <div className="flex items-center gap-4">
            <div className="flex gap-2">
                <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => switchLocale("en")}
                    className="text-xs px-2 h-8"
                >
                    EN
                </Button>
                <div className="w-px h-4 bg-slate-800 my-auto" />
                <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => switchLocale("zh-TW")}
                    className="text-xs px-2 h-8"
                >
                    繁中
                </Button>
            </div>
            <Button size="sm" asChild>
                <a href="#contact">{t("contact")}</a>
            </Button>
        </div>
      </div>
    </header>
  );
}
