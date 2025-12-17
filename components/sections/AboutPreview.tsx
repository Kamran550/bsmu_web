"use client";

import { aboutPreviewData } from "@/constants/about";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles, Award } from "lucide-react";

export default function AboutPreview() {
  const t = useTranslations("aboutPreview");
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-full border border-orange-200 dark:border-orange-800">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                {t("badge")}
              </span>
              <Award className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left Content Card - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-2xl">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-bl-full"></div>

                <div className="relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
                  >
                    <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                      {t("title")}
                    </span>
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-4 mb-8"
                  >
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t("description")}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Link
                      href="/about"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span>{t("button")}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Image - Takes 2 columns with offset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2 relative"
            >
              {/* Decorative frame elements */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl opacity-20 dark:opacity-10 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-tr from-amber-400 to-orange-500 rounded-3xl opacity-20 dark:opacity-10 blur-xl"></div>

              <div className="relative">
                {/* Image container with unique styling */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-2">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src={aboutPreviewData.image}
                      alt="University campus"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating decorative badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl shadow-xl border-2 border-orange-200 dark:border-orange-700"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {t("yearsExperience")}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
