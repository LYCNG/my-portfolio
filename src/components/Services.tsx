"use client";

import { BarChart3, Database, RefreshCw, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      key: "visualization",
      icon: BarChart3,
    },
    {
      key: "api",
      icon: Database,
    },
    {
      key: "legacy",
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-24 bg-slate-950 relative ">
      <div className="container mx-auto px-4 md:px-6">
         <div className="mb-16">
            <div className="flex items-center gap-2 text-blue-500 mb-4 font-mono text-sm uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>{t("label")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("title")}</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
                {t("description")}
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all text-slate-300">
                        <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{t(`items.${service.key}.title`)}</h3>
                    <p className="text-slate-400 leading-relaxed">{t(`items.${service.key}.desc`)}</p>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
}
