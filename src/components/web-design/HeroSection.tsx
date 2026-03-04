"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WebDesignHero() {
  const t = useTranslations("WebDesign.hero");

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-20 px-4">
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-0 md:left-20 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-full bg-[conic-gradient(from_0deg_at_50%_50%,#0000_0deg,transparent_60deg,#1e293b_100deg,transparent_140deg,transparent_360deg)] opacity-15 -rotate-45 blur-[100px]" />
        <div className="absolute top-[-20%] right-[-10%] w-[120%] h-full bg-[conic-gradient(from_180deg_at_50%_50%,#0000_0deg,transparent_60deg,#3b82f6_100deg,transparent_140deg,transparent_360deg)] opacity-20 rotate-45 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/50 border border-slate-800 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-slate-300 text-sm font-medium">
              {t("badge")}
            </span>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
        >
          <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-slate-400">
            {t("title")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed text-balance font-light"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <div className="relative group rounded-full p-px bg-linear-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-size-[400%_400%] animate-[shimmer_4s_linear_infinite]">
            <Button
              size="lg"
              className="relative rounded-full bg-slate-950 text-white px-8 py-6 h-auto text-lg hover:bg-slate-900 transition-all font-medium"
            >
              {t("cta")}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Grid */}
      <div className="absolute inset-0 z-0 bg-slate-950 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent" />
      </div>
    </section>
  );
}
