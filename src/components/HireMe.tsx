"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";


export function HireMe() {
  const t = useTranslations("HireMe");

  const platforms = [
    {
      key: "upwork",
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0111dd1d91dfc8f766?mp_source=share", // Placeholder URL, to be updated
      color: "hover:border-[#14a800] hover:text-[#14a800]",
      bg: "hover:bg-[#14a800]/5"
    },
    {
      key: "arc",
      name: "Arc.dev",
      url: "https://arc.dev/dashboard/d/profile/edit", // Placeholder
      color: "hover:border-[#35469C] hover:text-[#35469C]",
      bg: "hover:bg-[#35469C]/5"
    },

  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-slate-400 text-lg">
            {t("desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
          {platforms.map((platform) => (
            <a 
              key={platform.key}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 ${platform.color} ${platform.bg}`}
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-inherit transition-colors">
                {platform.name}
              </h3>
              <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-inherit transition-colors">
                {t("cta")}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
