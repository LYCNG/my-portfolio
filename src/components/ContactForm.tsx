"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Wallet,
  MessageSquare,
  User,
  Mail,
} from "lucide-react";
import { sendEmail } from "@/lib/actions/sendEmail";
import { Button } from "./ui/button";

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [subjects, setSubjects] = useState<string[]>([]);

  const toggleSelection = (val: string) => {
    if (subjects.includes(val)) {
      setSubjects(subjects.filter((i) => i !== val));
    } else {
      setSubjects([...subjects, val]);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    subjects.forEach((s) => formData.append("subject", s));

    const result = await sendEmail(formData);

    setIsSubmitting(false);
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setSubjects([]);
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-80px)] py-12 bg-slate-950 relative overflow-hidden flex items-center justify-center px-6"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse delay-1000" />

      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden md:max-h-[85vh]"
        >
          {/* Subtle Top Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

          {/* Form Content Area */}
          <div className="p-6 md:p-12 overflow-y-auto no-scrollbar">
            <header className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-black tracking-[0.4em] uppercase text-blue-500 mb-4 block"
              >
                Inquiry
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                {t("title")}
              </h2>
            </header>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Row 1: Basic Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 group">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <User className="w-4 h-4 text-blue-500" />
                    {t("fields.name.label")}
                    <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      required
                      placeholder={t("fields.name.placeholder")}
                      className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-3 md:py-4 text-white placeholder:text-slate-600 hover:border-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <Mail className="w-4 h-4 text-blue-500" />
                    {t("fields.email.label")}
                    <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t("fields.email.placeholder")}
                      className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-3 md:py-4 text-white placeholder:text-slate-600 hover:border-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Requirement Section */}
              <div className="space-y-6">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1 block">
                  {t("fields.subject.label")}
                </label>
                <div className="flex flex-wrap gap-3">
                  {t.raw("fields.subject.options").map((opt: string) => {
                    const isSelected = subjects.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleSelection(opt)}
                        className={`px-8 py-4 rounded-full border text-sm font-bold transition-all duration-500 ${
                          isSelected
                            ? "bg-blue-600 border-blue-500 text-white shadow-[0_10px_20px_rgba(59,130,246,0.4)] scale-105"
                            : "bg-white/3 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 2: Budget & Time Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <Wallet className="w-4 h-4 text-blue-500" />
                    {t("fields.budget.label")}
                  </label>
                  <input
                    name="budget"
                    placeholder={t("fields.budget.placeholder")}
                    className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-3 md:py-4 text-white placeholder:text-slate-600 hover:border-white/20 focus:outline-none transition-all text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {t("fields.time.label")}
                  </label>
                  <input
                    name="time"
                    placeholder={t("fields.time.placeholder")}
                    className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-3 md:py-4 text-white placeholder:text-slate-600 hover:border-white/20 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">
                  <MessageSquare className="w-4 h-4 text-blue-500" />
                  {t("fields.description.label")}
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder={t("fields.description.placeholder")}
                  className="w-full bg-white/3 border border-white/10 rounded-3xl p-6 text-white placeholder:text-slate-600 hover:border-white/20 focus:outline-none focus:border-blue-500/50 transition-all resize-none text-lg"
                />
              </div>

              {/* Footer Actions */}
              <div className="pt-4 flex flex-col gap-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 md:h-[64px] text-xl rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:brightness-125 transition-all duration-500 text-white font-black flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(59,130,246,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t("submit")}
                      <Send className="w-6 h-6" />
                    </>
                  )}
                </Button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-4"
                    >
                      <CheckCircle2 className="w-6 h-6 shrink-0" />
                      <p className="font-bold text-lg">{t("success")}</p>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-4"
                    >
                      <AlertCircle className="w-6 h-6 shrink-0" />
                      <p className="font-bold text-lg">{t("error")}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
