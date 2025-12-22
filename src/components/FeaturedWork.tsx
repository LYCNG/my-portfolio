"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

export function FeaturedWork() {
  const t = useTranslations("FeaturedWork");

  const projects = [
    {
      key: "fintech",
      tags: ["React", "WebGL", "Rust (WASM)", "Socket.io"],
    },
    {
      key: "ai",
      tags: ["Next.js", "React Flow", "Python API", "PostgreSQL"],
    },
    {
      key: "logistics",
      tags: ["React Query", "Micro-frontends", "Docker", "AWS"],
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-purple-500 font-mono text-sm uppercase tracking-wider mb-2 block">{t("label")}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t("title")}</h2>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                <span className="text-yellow-500 font-mono text-sm font-bold uppercase tracking-tight">{t("status_badge")}</span>
                <span className="w-px h-4 bg-yellow-500/20" />
                <span className="text-yellow-500/80 text-sm">{t("status_desc")}</span>
            </div>


          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full min-h-[400px] rounded-3xl border border-dashed border-slate-800 bg-slate-900/20 flex flex-col items-center justify-center relative overflow-hidden group"
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%,100%_100%] animate-[shimmer_3s_infinite_linear]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center p-8 max-w-lg">
                <motion.div 
                    animate={{ 
                        rotate: [0, 10, -10, 0],
                        y: [0, -5, 0]
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                    }}
                    className="w-24 h-24 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-8 shadow-2xl relative"
                >
                    <Lock className="w-10 h-10 text-slate-500" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center animate-bounce">
                        <div className="w-2 h-2 bg-slate-950 rounded-full" />
                    </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">{t("placeholder_title")}</h3>
                <p className="text-slate-400 mb-8">
                    {t("placeholder_desc")}
                </p>

                <div className="flex gap-4 opacity-50 pointer-events-none grayscale">
                    <div className="h-20 w-32 bg-slate-800 rounded-lg border border-slate-700" />
                    <div className="h-20 w-32 bg-slate-800 rounded-lg border border-slate-700" />
                    <div className="h-20 w-32 bg-slate-800 rounded-lg border border-slate-700 hidden sm:block" />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
