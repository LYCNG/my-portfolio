"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { SiFiverr, SiUpwork } from "react-icons/si";

import { motion } from "framer-motion";

export function HireMe() {
  const t = useTranslations("HireMe");

  const platforms = [
    {
      key: "upwork",
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0111dd1d91dfc8f766?mp_source=share", 
      color: "hover:border-[#14a800] hover:text-[#14a800]",
      bg: "hover:bg-[#14a800]/5",
      icon: SiUpwork 
    },
    {
      key: "fiverr",
      name: "Fiverr",
      url: "https://www.fiverr.com/gray_shark/convert-figma-to-next-js-and-tailwind-css",
      color: "hover:border-[#1DBF73] hover:text-[#1DBF73]",
      bg: "hover:bg-[#1DBF73]/5",
      icon: SiFiverr
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900" id="hire">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            {t("desc")}
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto "
        >
          {platforms.map((platform) => (
            <motion.a 
              key={platform.key}
              variants={item}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 ${platform.color} ${platform.bg}`}
            >
              <div className="flex items-center gap-2 mb-2">
                 {platform.icon && <platform.icon className="w-6 h-6" />}
                 <h3 className="text-xl font-bold text-white group-hover:text-inherit transition-colors">
                  {platform.name}
                 </h3>
              </div>
              <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-inherit transition-colors">
                {t("cta")}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
