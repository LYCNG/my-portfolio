"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLenis } from "lenis/react";

export function AboutCTA() {
  const t = useTranslations("About");
  const tTopbar = useTranslations("Topbar");
  const pathname = usePathname();
  const lenis = useLenis();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.includes("#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.includes("#") ? href.split("#")[1] : "";
      if (targetId) {
        lenis?.scrollTo(`#${targetId}`, {
          offset: -80,
          duration: 1.5,
        });
      }
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ready to start?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white leading-tight"
          >
            {t("cta_title") || "準備好開始您的專案了嗎？"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
          >
            {t("cta_desc") || "讓我們一起將您的想法轉化為高品質的數位產品。"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-8"
          >
            <Button
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black px-12 h-16 text-xl group shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all"
              asChild
            >
              <Link
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "/#contact")}
              >
                {tTopbar("book_call")}
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
