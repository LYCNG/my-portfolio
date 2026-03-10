"use client";

import { useTranslations } from "next-intl";
import { Cpu, Code, Globe, Trophy } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function AboutHero() {
  const t = useTranslations("About");
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".about-hero-content > *", { y: 40, opacity: 0 });
      gsap.set(".about-hero-visual", { scale: 0.9, opacity: 0 });
      gsap.set(".stat-card", { y: 20, opacity: 0 });

      const tl = gsap.timeline({
        delay: 0.2,
      });

      tl.to(".about-hero-content > *", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })
        .to(
          ".about-hero-visual",
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.6",
        )
        .to(
          ".stat-card",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)",
          },
          "-=0.4",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="about-hero-content space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <Code className="w-4 h-4" />
              <span>Full-Stack Engineer</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.15] tracking-tight whitespace-pre-line">
              {t("hero_title")}
            </h1>

            <div className="h-1.5 w-20 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              {t("hero_subtitle")}
            </p>

            <div className="pt-4">
              <p className="text-slate-300 leading-relaxed text-lg max-w-xl border-l-4 border-slate-800 pl-6">
                {t("content")}
              </p>
            </div>
          </div>

          {/* Visual Elements & Stats */}
          <div className="about-hero-visual relative w-full aspect-square md:aspect-4/3 lg:aspect-square max-w-lg mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 scale-105 border border-white/5" />

            {/* Main Visual Box */}
            <div className="absolute inset-0 bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col items-center justify-center group">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-size-[20px_20px]" />
              <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-700">
                <div className="w-24 h-24 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20">
                  <Cpu className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-widest uppercase">
                  SharkLian
                </h3>
                <p className="text-slate-500 font-mono mt-2">v2.0.0</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="stat-card absolute -left-6 top-12 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-white">5+</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  {t("stats_experience")}
                </p>
              </div>
            </div>

            <div className="stat-card absolute -right-6 bottom-12 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-black text-white">20+</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  {t("stats_projects")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
