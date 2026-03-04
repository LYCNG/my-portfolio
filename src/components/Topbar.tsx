"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "./ui/button";
import Image from "next/image";
import { useLenis } from "lenis/react";

export function Topbar() {
  const t = useTranslations("Topbar");
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "#");
      lenis?.scrollTo(targetId, {
        offset: -64,
        duration: 1.5,
      });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href, {
        offset: -64,
        duration: 1.5,
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white tracking-tight"
        >
          <Image
            src="/lian.svg"
            alt="SharkLian"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <span className="hidden sm:inline">SharkLian Portfolio.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a
            href="/#projects"
            onClick={(e) => handleAnchorClick(e, "/#projects")}
            className="hover:text-white transition-colors"
          >
            {t("projects")}
          </a>

          <a
            href="/#services"
            onClick={(e) => handleAnchorClick(e, "/#services")}
            className="hover:text-white transition-colors"
          >
            {t("services")}
          </a>
          <a
            href="/#process"
            onClick={(e) => handleAnchorClick(e, "/#process")}
            className="hover:text-white transition-colors"
          >
            {t("process")}
          </a>
          <a
            href="/#hire"
            onClick={(e) => handleAnchorClick(e, "/#hire")}
            className="hover:text-white transition-colors"
          >
            {t("hire")}
          </a>
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
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
            >
              {t("contact")}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
