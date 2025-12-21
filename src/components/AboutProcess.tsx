"use client";

import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutProcess() {
    const t = useTranslations("AboutProcess");

    const steps = [
        {
            key: "discovery",
            icon: Search,
        },
        {
            key: "architecture",
            icon: PenTool,
        },
        {
            key: "development",
            icon: Code2,
        },
        {
            key: "deployment",
            icon: Rocket,
        }
    ];

    return (
        <section className="py-24 bg-slate-900/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">{t("title")}</h2>
                    <p className="text-slate-400">{t("description")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800 -z-10" />

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center relative">
                            <div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center mb-6 z-10">
                                <step.icon className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{t(`steps.${step.key}.title`)}</h3>
                            <p className="text-slate-400 text-sm">{t(`steps.${step.key}.desc`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
