"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, GraduationCap, Clock, ArrowRight } from "lucide-react";
import { programs, categories, Program } from "@/constants/programs";
import { useTranslations } from "next-intl";

export default function ProgramsGrid() {
  const t = useTranslations("programs.grid");
  const tCategories = useTranslations("programs.categories");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter programs based on category and search
  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesCategory =
        selectedCategory === "all" || program.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.degree.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-800 dark:text-slate-100">
            {t("title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Filter & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : ""
                  }
                >
                  {tCategories(category.id)}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        {filteredPrograms.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-6 text-sm text-slate-600 dark:text-slate-400"
          >
            {t("found")} {filteredPrograms.length}{" "}
            {filteredPrograms.length === 1
              ? t("programs")
              : t("programsPlural")}
          </motion.div>
        )}

        {/* Programs Grid - 2 Column Layout */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredPrograms.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center py-16"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400">{t("noResults")}</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
            >
              {t("clearFilters")}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const t = useTranslations("programs.grid");
  const categoryColors: Record<string, string> = {
    undergraduate:
      "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
    graduate:
      "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400",
    doctoral:
      "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
    online: "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400",
    professional:
      "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Card
        className={`h-full flex flex-row lg:flex-col shadow-lg hover:shadow-xl transition-all overflow-hidden ${
          program.featured ? "border-2 border-orange-500 dark:border-orange-600 bg-orange-50/50 dark:bg-orange-950/30" : "border border-slate-200 dark:border-slate-800"
        }`}
      >
        {program.featured && (
          <div className="absolute -top-3 -right-3 bg-orange-600 dark:bg-orange-700 text-white px-3 py-1 rounded-full text-xs font-semibold rotate-12">
            {t("featuredProgram")}
          </div>
        )}
        <div className="flex-1 p-6 border-r lg:border-r-0 lg:border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-start justify-between mb-3">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                categoryColors[program.category] || "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              }`}
            >
              {program.degree}
            </span>
            {program.featured && (
              <GraduationCap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            )}
          </div>
          <CardTitle className="text-xl font-bold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {program.title}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{program.duration}</span>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
            {program.description}
          </p>
        </div>
        <CardContent className="flex-1 p-6 flex flex-col">
          {/* Features */}
          <div className="mb-4 flex-1">
            <h4 className="font-semibold text-sm mb-2 text-slate-800 dark:text-slate-200">{t("keyFeatures")}</h4>
            <ul className="space-y-1.5">
              {program.features.slice(0, 3).map((feature, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="text-orange-600 dark:text-orange-400 mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div className="mb-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="font-semibold text-sm mb-2 text-slate-800 dark:text-slate-200">{t("careerPaths")}</h4>
            <div className="flex flex-wrap gap-2">
              {program.career.slice(0, 2).map((career, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded"
                >
                  {career}
                </span>
              ))}
              {program.career.length > 2 && (
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  +{program.career.length - 2} {t("more")}
                </span>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex gap-2">
            <Button asChild variant="outline" className="flex-1 group/btn border-slate-300 dark:border-slate-700">
              <Link href={`/programs/${program.id}`}>
                {t("learnMore")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white">
              <Link href="/apply">{t("apply")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
