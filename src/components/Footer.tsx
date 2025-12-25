"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold text-white tracking-tight">{t("title")}</h4>
                    <p className="text-slate-500 text-sm">{t("copyright", { year: new Date().getFullYear() })}</p>
                </div>

                <div className="flex gap-4">
                    <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0" asChild>
                        <a href="https://github.com/LYCNG" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0" asChild>
                        <a href="https://www.linkedin.com/in/lian-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0" asChild>
                        <a href="mailto:liancheng196@gmail.com" aria-label="Email">
                            <Mail className="w-5 h-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </footer>
  );
}
