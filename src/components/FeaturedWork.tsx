"use client";

import { useRef } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "./ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeaturedWork() {
  const t = useTranslations("FeaturedProjects");
  const locale = useLocale();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".project-card", { y: 60, opacity: 0 });

      gsap.to(".project-card", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });

      const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);
      return () => clearTimeout(refreshTimer);
    },
    { scope: container, dependencies: [locale] },
  );

  const projects = [
    {
      key: "project_a",
      image: "/projects/annotation-studio.png", // Keep existing or placeholder
      tags: ["React", "Konva.js", "TypeScript", "NestJS", "PostgreSQL"],
    },
    {
      key: "project_b",
      image: "/projects/shark-intelligence.png", // Keep existing or placeholder
      tags: ["Next.js", "Tailwind CSS", "Express.js", "SQL"],
    },
  ];

  return (
    <section
      ref={container}
      className="py-20 md:py-32 bg-slate-950 border-t border-white/5"
      id="projects"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, i) => (
            <div
              key={project.key}
              className={`project-card group flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-blue-500/10">
                  <Image
                    src={project.image}
                    alt={t(`${project.key}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Decorative blob behind image */}
                <div
                  className={`absolute -z-10 w-64 h-64 blur-[100px] rounded-full opacity-20 ${i % 2 === 0 ? "-left-10 -top-10 bg-blue-500" : "-right-10 -bottom-10 bg-purple-500"}`}
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">
                    {t(`${project.key}.type`)}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {t(`${project.key}.title`)}
                  </h3>
                </div>

                <p className="text-slate-400 leading-relaxed text-lg">
                  {t(`${project.key}.desc`)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 py-4">
                  <div className="flex items-center gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span>{t(`${project.key}.achievement_1`)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span>{t(`${project.key}.achievement_2`)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
