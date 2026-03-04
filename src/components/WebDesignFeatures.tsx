"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Rocket, Search, Paintbrush } from "lucide-react";

export function FeaturesSection() {
  const t = useTranslations("WebDesign.features");

  const features = [
    {
      key: "seo",
      icon: Search,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      key: "speed",
      icon: Rocket,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      key: "design",
      icon: Paintbrush,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
  ];

  return (
    <section className="py-32 relative bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 hover:border-slate-700 transition-all duration-500 group`}
            >
              {/* Hover Gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border ${feature.border}`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-400 transition-colors">
                  {t(`${feature.key}.title`)}
                </h3>

                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {t(`${feature.key}.desc`)}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 bg-linear-to-br from-white/10 to-transparent blur-2xl rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
