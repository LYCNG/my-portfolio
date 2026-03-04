"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseMe() {
  const t = useTranslations("WebDesign.why_me");

  const benefits = [
    "Native English/Mandarin Communication",
    "Enterprise Standard Codebase",
    "Lifetime Bug Warranty (30 Days)",
    "Full Source Code Ownership",
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-slate-500"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            {t("desc")}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-0.5 rounded-2xl overflow-hidden group"
            >
              {/* Moving Border Gradient */}
              <div className="absolute inset-0 bg-conic-to-t from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[spin_4s_linear_infinite]" />

              <div className="relative h-full flex items-center gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 group-hover:bg-slate-900/90 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-slate-200 font-medium text-lg">
                  {benefit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
