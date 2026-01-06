"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Tablet, Smartphone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");



  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          {t("status")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-24 text-white mb-6 max-w-5xl text-balance"
        >
          {t("title_prefix")} <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">{t("title_highlight")}</span> <br className="hidden md:block" />
          {t("title_suffix")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl text-balance space-y-6 leading-relaxed"
        >
          <p>
            {t.rich("intro", {
              name: (chunks) => <span className="font-bold underline underline-offset-4 decoration-blue-500 decoration-2 text-white">{chunks}</span>,
              react: (chunks) => <span className="inline-block px-1.5 py-0.5 mx-1 text-base rounded-md bg-[#61DAFB]/10 text-[#61DAFB] border border-[#61DAFB]/20 font-mono font-bold tracking-tight">{chunks}</span>,
              nest: (chunks) => <span className="inline-block px-1.5 py-0.5 mx-1 text-base rounded-md bg-[#E0234E]/10 text-[#E0234E] border border-[#E0234E]/20 font-mono font-bold tracking-tight">{chunks}</span>,
              ts: (chunks) => <span className="inline-block px-1.5 py-0.5 mx-1 text-base rounded-md bg-[#3178C6]/10 text-[#3178C6] border border-[#3178C6]/20 font-mono font-bold tracking-tight">{chunks}</span>
            })}
          </p>
          <p className="text-slate-400">
             {t.rich("philosophy", {
              tailwind: (chunks) => <span className="inline-block px-1.5 py-0.5 mx-1 text-base rounded-md bg-[#38B2AC]/10 text-[#38B2AC] border border-[#38B2AC]/20 font-mono font-bold tracking-tight">{chunks}</span>,
              antd: (chunks) => <span className="inline-block px-1.5 py-0.5 mx-1 text-base rounded-md bg-[#1890FF]/10 text-[#1890FF] border border-[#1890FF]/20 font-mono font-bold tracking-tight">{chunks}</span>,
              mui: (chunks) => <span className="inline-block px-1.5 py-0.5 mx-1 text-base rounded-md bg-[#007FFF]/10 text-[#007FFF] border border-[#007FFF]/20 font-mono font-bold tracking-tight">{chunks}</span>
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-5xl mb-12"
        >
           <h3 className="text-white text-lg font-semibold mb-6 text-center opacity-80 uppercase tracking-widest">{t("expertise_title")}</h3>
           <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="text-blue-400 font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">{t("expertise_items.annotation.title")}</div>
                  <div className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{t("expertise_items.annotation.desc")}</div>
              </div>
              <div className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-purple-400 font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">{t("expertise_items.ai.title")}</div>
                  <div className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{t("expertise_items.ai.desc")}</div>
              </div>
              <div className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="text-emerald-400 font-bold text-lg mb-2 group-hover:text-emerald-300 transition-colors">{t("expertise_items.admin.title")}</div>
                  <div className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{t("expertise_items.admin.desc")}</div>
              </div>
           </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-slate-300 font-medium mb-10 max-w-2xl italic"
        >
            "{t("closing")}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="rounded-full group" asChild>
            <a href="#projects">
              {t("cta_projects")}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <a 
              href="https://github.com/LYCNG/my-portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 w-4 h-4" />
              {t("cta_code")}
            </a>
          </Button>
        </motion.div>

        {/* Feature Visual: RWD Capability */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 w-full max-w-5xl h-64 md:h-96 rounded-t-3xl border-t border-l border-r border-slate-800 bg-slate-900/50 backdrop-blur-sm relative overflow-hidden group"
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex items-end gap-4 md:gap-8 mb-6">
                    {/* Desktop */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <Monitor className="w-16 h-16 md:w-24 md:h-24 text-slate-700/50 group-hover:text-blue-500/80 transition-colors duration-500" />
                        <div className="h-1 w-12 md:w-20 bg-slate-800 rounded-full group-hover:bg-blue-500/50 transition-colors duration-500" />
                    </motion.div>

                    {/* Tablet */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <Tablet className="w-12 h-12 md:w-16 md:h-16 text-slate-700/50 group-hover:text-purple-500/80 transition-colors duration-500" />
                        <div className="h-1 w-8 md:w-12 bg-slate-800 rounded-full group-hover:bg-purple-500/50 transition-colors duration-500" />
                    </motion.div>

                    {/* Mobile */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                         className="flex flex-col items-center gap-1"
                    >
                        <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-slate-700/50 group-hover:text-emerald-500/80 transition-colors duration-500" />
                        <div className="h-1 w-4 md:w-6 bg-slate-800 rounded-full group-hover:bg-emerald-500/50 transition-colors duration-500" />
                    </motion.div>
                </div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="px-6 py-2 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-sm md:text-base backdrop-blur-md"
                >
                    {t("rwd_capability")}
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent" />
            
            <div className="absolute top-8 left-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
        </motion.div>
      </div>
    </section>
  );
}
