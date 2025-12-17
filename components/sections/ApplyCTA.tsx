"use client";

import { motion } from "framer-motion";
import { applyInfo } from "@/constants/apply-info";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Clock,
  Sparkles,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ApplyCTA() {
  const t = useTranslations("cta");
  return (
    <section className="relative py-32 overflow-hidden bg-slate-900 dark:bg-black">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-orange-400 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-amber-400 rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-orange-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 dark:from-slate-950/90 dark:to-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                {/* Decorative accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 rounded-t-3xl"></div>

                {/* Icon badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg"
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                    {t("title")}
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed"
                >
                  {t("description")}
                </motion.p>

                {/* Benefits Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid sm:grid-cols-2 gap-4 mb-8"
                >
                  {applyInfo.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="flex items-start gap-3 p-4 bg-slate-800/50 dark:bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-orange-500/50 transition-colors"
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm md:text-base text-slate-200 font-medium">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="group bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-base md:text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  >
                    <Link href="/apply" className="flex items-center gap-2">
                      <span>{t("button")}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-600 hover:border-orange-500 text-slate-200 hover:text-orange-400 text-base md:text-lg px-8 py-6 font-semibold bg-slate-800/50 hover:bg-slate-800 transition-all"
                  >
                    <Link href="/programs" className="flex items-center gap-2">
                      <span>{t("learnMore")}</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Deadline Card with Visual Appeal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative">
                {/* Main Deadline Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative bg-gradient-to-br from-orange-600/90 to-amber-600/90 backdrop-blur-xl rounded-3xl p-10 md:p-14 border-2 border-orange-400/50 shadow-2xl"
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl"></div>

                  <div className="relative z-10 text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      <Clock className="w-10 h-10 text-white" />
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="text-2xl md:text-3xl font-bold text-white mb-4"
                    >
                      {t("deadlineTitle")}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="text-lg md:text-xl text-white/90 font-semibold mb-6"
                    >
                      {applyInfo.deadline}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-white">
                        {t("applicationsOpen")}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl rotate-12 shadow-xl opacity-80"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full shadow-xl opacity-70"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
