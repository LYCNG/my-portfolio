"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Briefcase,
  BarChart3,
  AppWindow,
  Image as ImageIcon,
  Users,
  Layout,
} from "lucide-react";

export function Experience() {
  const t = useTranslations("Experience");

  const items = [
    { key: "ai_panel", icon: BarChart3, color: "text-blue-400" },
    { key: "eip", icon: Layout, color: "text-purple-400" },
    { key: "revenue", icon: AppWindow, color: "text-emerald-400" },
    { key: "annotation", icon: ImageIcon, color: "text-amber-400" },
    { key: "custom", icon: Users, color: "text-pink-400" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-cyan-500 font-mono text-sm mb-4"
            >
              <Briefcase className="w-4 h-4" />
              <span>{t("years")}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              {t("title")}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p className="text-2xl text-slate-200 font-bold">{t("role")}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className={`w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>

              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {t(`items.${item.key}.title`)}
              </h4>

              <p className="text-slate-400 leading-relaxed text-sm">
                {t(`items.${item.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
