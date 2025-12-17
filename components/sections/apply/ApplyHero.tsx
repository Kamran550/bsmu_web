"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ApplyHero() {
  const t = useTranslations("apply.hero");

  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-orange-900 via-amber-900 to-orange-800 dark:from-slate-950 dark:via-slate-900 dark:to-black pt-24 md:pt-28 lg:pt-32">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 via-amber-900/50 to-orange-800/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-left"
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
