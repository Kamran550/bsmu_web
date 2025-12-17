"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Newspaper, TrendingUp } from "lucide-react";

export default function NewsHero() {
  const t = useTranslations("news.hero");

  return (
    <section className="relative w-full min-h-[55vh] flex items-center justify-center bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 dark:from-slate-950 dark:via-slate-900 dark:to-black pt-24 md:pt-28 lg:pt-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/70 via-amber-900/60 to-orange-800/70"></div>

      {/* Geometric Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-orange-400 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-amber-400 rotate-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full"
            >
              <Newspaper className="w-4 h-4 text-orange-300" />
              <span className="text-sm font-medium text-orange-200">
                {t("title")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="block text-white mb-2">
                {t("title").split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
                {t("title").split(" ").slice(2).join(" ")}
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative Card */}
              <div className="relative bg-gradient-to-br from-orange-600/30 to-amber-600/30 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/30">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-xl">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{t("latestUpdates")}</p>
                    <p className="text-white/70 text-sm">{t("stayInformed")}</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-xl opacity-80"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-xl opacity-70"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
    </section>
  );
}
