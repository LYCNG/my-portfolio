"use client";

import { useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Workflow() {
  const t = useTranslations("Workflow");
  const locale = useLocale();
  const container = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Set initial states
      gsap.set(lineRef.current, { scaleX: 0 });
      gsap.set(".workflow-step", { y: 50, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.to(lineRef.current, {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.inOut",
      }).to(
        ".workflow-step",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.7)",
        },
        "-=1",
      );

      const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);
      return () => clearTimeout(refreshTimer);
    },
    { scope: container, dependencies: [locale] },
  );

  const steps = [
    {
      key: "step_1",
      icon: Search,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      key: "step_2",
      icon: PenTool,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      key: "step_3",
      icon: Code2,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
    },
    {
      key: "step_4",
      icon: Rocket,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
    },
  ];

  return (
    <section
      ref={container}
      id="process"
      className="py-20 md:py-32 bg-slate-950 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">
              How I Work
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-18 left-[10%] right-[10%] h-1 bg-slate-800 rounded-full z-0 overflow-hidden">
            <div
              ref={lineRef}
              className="w-full h-full bg-linear-to-r from-blue-500 via-purple-500 to-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.key}
                className="workflow-step flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white z-20">
                    0{i + 1}
                  </div>

                  {/* Icon Container */}
                  <div
                    className={`w-28 h-28 md:w-36 md:h-36 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:${step.borderColor}`}
                  >
                    <div
                      className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${step.bgColor} flex items-center justify-center`}
                    >
                      <step.icon
                        className={`w-8 h-8 md:w-12 md:h-12 ${step.color}`}
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {t(`${step.key}.title`)}
                </h3>

                <p className="text-slate-400 leading-relaxed font-medium">
                  {t(`${step.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
