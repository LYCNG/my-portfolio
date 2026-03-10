"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Button } from "./ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { useLenis } from "lenis/react";

export function Hero() {
  const t = useTranslations("Hero");
  const pathname = usePathname();
  const lenis = useLenis();
  const container = useRef<HTMLDivElement>(null);
  const codeEditorRef = useRef<HTMLDivElement>(null);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.includes("#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.includes("#") ? href.split("#")[1] : "";
      if (targetId) {
        lenis?.scrollTo(`#${targetId}`, {
          offset: -80,
          duration: 1.5,
        });
      }
    }
  };

  useGSAP(
    () => {
      // Intro animations
      const tl = gsap.timeline();
      tl.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.4",
        )
        .from(
          ".hero-visual",
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=1",
        );

      // Floating animation for code editor
      gsap.to(codeEditorRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Background elements animation
      gsap.to(".bg-blob", {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: {
          each: 2,
          from: "random",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="top"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-slate-950"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bg-blob absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="bg-blob absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="bg-blob absolute top-[40%] left-[30%] w-[25vw] h-[25vw] bg-blue-400/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hero-cta">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("greeting")}</span>
            </div>

            <h1 className="hero-title text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              {t("h1")}
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("h2")}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button
                size="lg"
                className="hero-cta rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 h-14 text-lg group"
                asChild
              >
                <Link
                  href="/#contact"
                  onClick={(e) => handleAnchorClick(e, "/#contact")}
                >
                  {t("cta_primary")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="hero-visual relative flex justify-center lg:justify-end">
            {/* Abstract Design Element: Code Editor Mockup */}
            <div
              ref={codeEditorRef}
              className="relative w-full max-w-[500px] aspect-4/3 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-3xl p-6 shadow-2xl flex flex-col"
            >
              {/* Editor Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                <div className="ml-2 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>portfolio-v2.tsx</span>
                </div>
              </div>

              {/* Editor Content (Mockup Code) */}
              <div className="flex-1 font-mono text-sm space-y-3 overflow-hidden">
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">1</span>
                  <p className="text-purple-400">
                    const <span className="text-blue-400">SharkLian</span> ={" "}
                    {"{"}
                  </p>
                </div>
                <div className="flex gap-4 pl-4">
                  <span className="text-slate-600 select-none">2</span>
                  <p className="text-slate-300">
                    role:{" "}
                    <span className="text-emerald-400">
                      "Full-Stack Engineer"
                    </span>
                    ,
                  </p>
                </div>
                <div className="flex gap-4 pl-4">
                  <span className="text-slate-600 select-none">3</span>
                  <p className="text-slate-300">
                    experience:{" "}
                    <span className="text-amber-400">"5 Years"</span>,
                  </p>
                </div>
                <div className="flex gap-4 pl-4">
                  <span className="text-slate-600 select-none">4</span>
                  <p className="text-slate-300">stack: [</p>
                </div>
                <div className="flex gap-4 pl-8">
                  <span className="text-slate-600 select-none">5</span>
                  <p className="text-emerald-400">
                    "React", "Node.js", "TypeScript"
                  </p>
                </div>
                <div className="flex gap-4 pl-4">
                  <span className="text-slate-600 select-none">6</span>
                  <p className="text-slate-300">],</p>
                </div>
                <div className="flex gap-4 pl-4">
                  <span className="text-slate-600 select-none">7</span>
                  <p className="text-blue-400">
                    transform:{" "}
                    <span className="text-purple-400">(logic) =&gt; {"{"}</span>
                  </p>
                </div>
                <div className="flex gap-4 pl-8">
                  <span className="text-slate-600 select-none">8</span>
                  <p className="text-purple-400">
                    return{" "}
                    <span className="text-white">
                      SeamlessExperience(logic)
                    </span>
                  </p>
                </div>
                <div className="flex gap-4 pl-4">
                  <span className="text-slate-600 select-none">9</span>
                  <p className="text-purple-400">{"}"}</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">10</span>
                  <p className="text-purple-400">{"}"}</p>
                </div>
              </div>

              {/* Decorative side elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
