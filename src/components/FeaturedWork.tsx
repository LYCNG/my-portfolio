"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

export function FeaturedWork() {
  const t = useTranslations("FeaturedWork");

  const projects = [
    {
      key: "annotation",
      image: "/projects/annotation-studio.png",
      url: "https://sharklian-annotiation-studio.vercel.app/",
      tags: ["React", "Material-UI", "Vite", "Konva"],
      responsive: false,
    },
    {
      key: "intelligence",
      image: "/projects/shark-intelligence.png",
      url: "https://shark-lian-intelligence.vercel.app/",
      tags: ["React", "TypeScript", "Tailwind CSS", "i18n","Ant Design"],
      responsive: true,
    },{
      key: "art",
      image: "/projects/project-preview.png",
      url: "https://shark-lian-art.vercel.app/",
      tags: ["React", "TypeScript", "Tailwind CSS", "framer-motion"],
      responsive: true,
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-purple-500 font-mono text-sm uppercase tracking-wider mb-2 block">{t("label")}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">{t("title")}</h2>
          </div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Left: Screenshot */}
              <div className="relative h-64 lg:h-auto bg-slate-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(`projects.${project.key}.title`)}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />

                {/* Platform Badge */}
                <div className={`absolute top-4 left-4 flex items-center gap-2 text-xs font-mono bg-slate-950/80 px-3 py-1.5 rounded-full border ${project.responsive ? 'text-green-400 border-green-500/30' : 'text-slate-300 border-slate-700'}`}>
                  {project.responsive ? (
                    <>
                      <Smartphone className="w-3.5 h-3.5" />
                      {t("responsive")}
                    </>
                  ) : (
                    <>
                      <Monitor className="w-3.5 h-3.5" />
                      {t("desktop_only")}
                    </>
                  )}
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-blue-400 text-sm font-medium">{t(`projects.${project.key}.category`)}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                  {t(`projects.${project.key}.title`)}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {t(`projects.${project.key}.desc`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <Button asChild className="group/btn">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {t("view_demo")}
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Coming Soon - Animated Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 w-full min-h-[280px] rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 flex flex-col items-center justify-center relative overflow-hidden group"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%,100%_100%] animate-[shimmer_3s_infinite_linear]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center p-8">
            <motion.div 
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -3, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-6 shadow-xl relative"
            >
              <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-slate-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center animate-bounce">
                <div className="w-1.5 h-1.5 bg-slate-950 rounded-full" />
              </div>
            </motion.div>

            <p className="text-slate-400 font-mono text-sm">{t("more_coming")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
