"use client";

import { Monitor, Server, Database } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Services() {
  const t = useTranslations("Services");
  const locale = useLocale();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Set initial states
      gsap.set(".service-card", { y: 40, opacity: 0 });

      gsap.to(".service-card", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
      });

      const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);
      return () => clearTimeout(refreshTimer);
    },
    { scope: container, dependencies: [locale] },
  );

  const services = [
    {
      key: "frontend",
      icon: Monitor,
      color: "from-blue-500/20 to-blue-600/5",
      textColor: "text-blue-400",
    },
    {
      key: "backend",
      icon: Server,
      color: "from-purple-500/20 to-purple-600/5",
      textColor: "text-purple-400",
    },
    {
      key: "database",
      icon: Database,
      color: "from-emerald-500/20 to-emerald-600/5",
      textColor: "text-emerald-400",
    },
  ];

  return (
    <section
      id="services"
      ref={container}
      className="py-20 md:py-32 bg-slate-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Technology & Services
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative p-6 md:p-10 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Card Background Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-8 ${service.textColor} group-hover:scale-110 group-hover:bg-white/5 transition-all duration-500`}
                >
                  <service.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {t(`${service.key}.title`)}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {t(`${service.key}.tech`)
                    .split(",")
                    .map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        {item.trim()}
                      </span>
                    ))}
                </div>

                <p className="text-slate-400 leading-relaxed text-base">
                  {t(`${service.key}.value`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
