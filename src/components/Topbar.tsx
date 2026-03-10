"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "./ui/button";
import { useLenis } from "lenis/react";
import { Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Topbar() {
  const t = useTranslations("Topbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // If it's a page link without a hash anchor, let the router handle it
    if (!href.includes("#")) {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      return;
    }

    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "#");
      lenis?.scrollTo(targetId, {
        offset: -64,
        duration: 1.5,
      });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      lenis?.scrollTo(href, {
        offset: -64,
        duration: 1.5,
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-white tracking-tighter"
          >
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SharkLian
            </span>
            <span className="text-white"> Dev</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link
              href="/"
              onClick={(e) => handleAnchorClick(e, "/")}
              className="hover:text-white transition-colors"
            >
              {t("home")}
            </Link>

            <Link
              href="/about"
              onClick={(e) => handleAnchorClick(e, "/about")}
              className="hover:text-white transition-colors"
            >
              {t("about")}
            </Link>
          </nav>

          {/* Desktop Right SideActions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <Globe className="w-4 h-4 text-slate-500" />
              <button
                onClick={() => switchLocale("en")}
                className={`text-xs font-bold transition-colors ${locale === "en" ? "text-blue-400" : "text-slate-500 hover:text-slate-300"}`}
              >
                EN
              </button>
              <span className="text-slate-800">/</span>
              <button
                onClick={() => switchLocale("zh-TW")}
                className={`text-xs font-bold transition-colors ${locale === "zh-TW" ? "text-blue-400" : "text-slate-500 hover:text-slate-300"}`}
              >
                繁中
              </button>
            </div>

            <Button
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 shadow-lg shadow-blue-500/20"
              asChild
            >
              <Link
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
              >
                {t("book_call")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors z-[110] relative"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu Drawer */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lg:hidden bg-slate-950/95 overflow-y-auto"
          >
            <div className="min-h-full flex flex-col pt-28 pb-12 px-6">
              <nav className="flex flex-col gap-8 text-2xl font-black text-white/90">
                <Link
                  href="/"
                  onClick={(e) => handleAnchorClick(e, "/")}
                  className="py-4 border-b border-white/5 flex items-center justify-between group active:scale-[0.98] transition-all"
                >
                  <span className="group-hover:text-blue-400 transition-colors">
                    {t("home")}
                  </span>
                  <span className="text-slate-800 text-sm font-mono tracking-widest">
                    01
                  </span>
                </Link>
                <Link
                  href="/about"
                  onClick={(e) => handleAnchorClick(e, "/about")}
                  className="py-4 border-b border-white/5 flex items-center justify-between group active:scale-[0.98] transition-all"
                >
                  <span className="group-hover:text-emerald-400 transition-colors">
                    {t("about")}
                  </span>
                  <span className="text-slate-800 text-sm font-mono tracking-widest">
                    02
                  </span>
                </Link>
              </nav>

              <div className="mt-auto pt-16 space-y-10">
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-8 justify-center p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <Globe className="w-5 h-5 text-slate-500" />
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => switchLocale("en")}
                      className={`text-sm font-black transition-all ${locale === "en" ? "text-blue-400 scale-110" : "text-slate-500 hover:text-slate-300"}`}
                    >
                      EN
                    </button>
                    <span className="text-slate-800 text-xs">/</span>
                    <button
                      onClick={() => switchLocale("zh-TW")}
                      className={`text-sm font-black transition-all ${locale === "zh-TW" ? "text-blue-400 scale-110" : "text-slate-500 hover:text-slate-300"}`}
                    >
                      繁中
                    </button>
                  </div>
                </div>

                {/* Mobile CTA */}
                <Button
                  size="lg"
                  className="w-full rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black h-16 text-xl shadow-[0_15px_40px_rgba(37,99,235,0.4)] active:scale-[0.97] transition-all"
                  asChild
                >
                  <Link
                    href="/#contact"
                    onClick={(e) => handleAnchorClick(e, "/#contact")}
                  >
                    {t("book_call")}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
