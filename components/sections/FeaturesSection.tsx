"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { useTranslations } from "next-intl";

const features = [
  {
    icon: GraduationCap,
    key: "academicExcellence",
  },
  {
    icon: Globe,
    key: "globalNetwork",
  },
  {
    icon: Users,
    key: "diverseCommunity",
  },
  {
    icon: Award,
    key: "recognizedDegrees",
  },
  {
    icon: BookOpen,
    key: "modernFacilities",
  },
  {
    icon: TrendingUp,
    key: "careerSupport",
  },
];

export default function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-800 dark:text-slate-100">
            {t("title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 shadow-sm hover:shadow-lg">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-600 dark:to-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(`${feature.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
