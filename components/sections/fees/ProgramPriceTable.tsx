"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

const programKeys = ["bachelors", "masters", "doctoral", "online"] as const;
const programConfig = [
  { annualFee: 4000, totalFee: 14000, popular: false },
  { annualFee: 4000, totalFee: 14000, popular: true },
  { annualFee: 4000, totalFee: 14000, popular: false },
  { annualFee: 2800, totalFee: 8400, popular: false },
] as const;

export default function ProgramPriceTable() {
  const t = useTranslations("fees.priceTable");

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
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

        {/* Programs Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {programKeys.map((key, index) => {
            const config = programConfig[index];
            const program = {
              ...config,
              name: t(`programs.${key}.name`),
              duration: t(`programs.${key}.duration`),
              features: t.raw(`programs.${key}.features`) as string[],
            };
            return (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <Card
                  className={`h-full flex flex-row md:flex-col shadow-lg hover:shadow-xl transition-all overflow-hidden ${
                    program.popular
                      ? "border-2 border-orange-500 dark:border-orange-600 bg-orange-50/50 dark:bg-orange-950/30"
                      : "border border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {program.popular && (
                    <div className="absolute -top-3 -right-3 bg-orange-600 dark:bg-orange-700 text-white px-4 py-1 rounded-full text-xs font-semibold rotate-12">
                      {t("mostPopular")}
                    </div>
                  )}
                  <div className="flex-1 p-6 border-r md:border-r-0 md:border-b border-slate-200 dark:border-slate-800">
                    <CardTitle className="text-xl font-bold mb-2">
                      {program.name}
                    </CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {program.duration}
                    </p>
                    <div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                        €{program.annualFee.toLocaleString()}
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-normal ml-1">
                          {t("year")}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {t("total")}: €{program.totalFee.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <CardContent className="flex-1 p-6">
                    <ul className="space-y-2.5">
                      {program.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">{t("note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
