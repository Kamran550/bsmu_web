"use client";

import { heroData } from "@/constants/hero";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ArrowRight, Play, Sparkles, Rocket } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-slate-900 dark:bg-black pt-24 md:pt-28 lg:pt-32">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-amber-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `url(${heroData.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-orange-400 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 border-2 border-amber-400 rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-orange-400 rotate-45"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">
                  {t("badge")}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              >
                <span className="block text-white mb-2">
                  {t("title").split(" ").slice(0, 4).join(" ")}
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                  {t("title").split(" ").slice(4).join(" ")}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                {t("subtitle")}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-base md:text-lg px-8 py-6 font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <Link href="/apply" className="flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    <span>{t("primaryButton")}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group border-2 border-slate-600 hover:border-orange-500 text-slate-200 hover:text-orange-400 text-base md:text-lg px-8 py-6 font-semibold bg-slate-800/50 hover:bg-slate-800/70 backdrop-blur-sm transition-all"
                >
                  <Link href="/programs" className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    <span>{t("secondaryButton")}</span>
                  </Link>
                </Button>
              </motion.div>

              {/* Stats Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-400">25+</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">{t("stats.yearsExperience")}</p>
                    <p className="text-slate-400 text-sm">{t("stats.excellence")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-400">50+</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">{t("stats.countries")}</p>
                    <p className="text-slate-400 text-sm">{t("stats.students")}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-orange-500/30 shadow-2xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={heroData.backgroundImage}
                      alt="BSMU Campus"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 -left-8 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-6 shadow-2xl border-2 border-orange-400/50 max-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{t("cards.academic")}</p>
                      <p className="text-white/80 text-sm">{t("cards.academicExcellence")}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 -right-8 bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border-2 border-orange-500/30 max-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{t("cards.innovation")}</p>
                      <p className="text-slate-400 text-sm">{t("cards.andLeadership")}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -right-12 w-24 h-24 bg-gradient-to-br from-orange-400/30 to-amber-400/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 -left-12 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
}
