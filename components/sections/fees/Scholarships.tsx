"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  GraduationCap,
  Users,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const scholarshipKeys = [
  "academicExcellence",
  "meritBased",
  "needBased",
  "internationalStudents",
  "researchFellowships",
] as const;
const scholarshipIcons = [
  GraduationCap,
  Award,
  DollarSign,
  Users,
  TrendingUp,
] as const;
const scholarshipCoverages = [
  "50-100%",
  "25-75%",
  "30-80%",
  "40-60%",
  "Full Coverage",
] as const;
const scholarshipColors = [
  "orange",
  "amber",
  "orange",
  "amber",
  "orange",
] as const;
const scholarshipDeadlines = [
  "March 15, 2025",
  "April 1, 2025",
  "May 1, 2025",
  "March 30, 2025",
  "February 28, 2025",
] as const;

const colorClasses = {
  orange:
    "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
  amber:
    "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400",
};

export default function Scholarships() {
  const t = useTranslations("fees.scholarships");

  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
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

        {/* Scholarships Grid - Staggered 2-3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* First row: 2 items */}
          {scholarshipKeys.slice(0, 2).map((key, index) => {
            const Icon = scholarshipIcons[index];
            const coverage = scholarshipCoverages[index];
            const color = scholarshipColors[index];
            const deadline = scholarshipDeadlines[index];
            const scholarship = {
              name: t(`items.${key}.name`),
              description: t(`items.${key}.description`),
              eligibility: t.raw(`items.${key}.eligibility`) as string[],
              color,
            };
            return (
              <motion.div
                key={scholarship.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={index === 0 ? "md:col-span-1 lg:col-span-2" : ""}
              >
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all border-2 border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-12 h-12 rounded-lg ${
                          colorClasses[
                            scholarship.color as keyof typeof colorClasses
                          ]
                        } flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                          {coverage}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {t("coverage")}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold mb-1">
                      {scholarship.name}
                    </CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {scholarship.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <h4 className="font-semibold text-xs mb-2">
                        {t("eligibility")}:
                      </h4>
                      <ul className="space-y-1">
                        {scholarship.eligibility.map(
                          (item: string, idx: number) => (
                            <li
                              key={idx}
                              className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                            >
                              <span className="text-orange-600 dark:text-orange-400 mt-0.5">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-800">
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                        {t("applicationDeadline")}:
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {deadline}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
          {/* Remaining items */}
          {scholarshipKeys.slice(2).map((key, index) => {
            const actualIndex = index + 2;
            const Icon = scholarshipIcons[actualIndex];
            const coverage = scholarshipCoverages[actualIndex];
            const color = scholarshipColors[actualIndex];
            const deadline = scholarshipDeadlines[actualIndex];
            const scholarship = {
              name: t(`items.${key}.name`),
              description: t(`items.${key}.description`),
              eligibility: t.raw(`items.${key}.eligibility`) as string[],
              color,
            };
            return (
              <motion.div
                key={scholarship.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: actualIndex * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all border-2 border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-12 h-12 rounded-lg ${
                          colorClasses[
                            scholarship.color as keyof typeof colorClasses
                          ]
                        } flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                          {coverage}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {t("coverage")}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold mb-1">
                      {scholarship.name}
                    </CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {scholarship.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <h4 className="font-semibold text-xs mb-2">
                        {t("eligibility")}:
                      </h4>
                      <ul className="space-y-1">
                        {scholarship.eligibility.map(
                          (item: string, idx: number) => (
                            <li
                              key={idx}
                              className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                            >
                              <span className="text-orange-600 dark:text-orange-400 mt-0.5">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-800">
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                        {t("applicationDeadline")}:
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {deadline}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
          >
            <Link href={`/apply`}>{t("apply")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
