"use client";

import { motion } from "framer-motion";
import { Card, CardTitle } from "@/components/ui/card";
import { Calendar, CreditCard, Wallet, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const planKeys = [
  "fullPayment",
  "semesterPayment",
  "monthlyPayment",
  "installmentPlan",
] as const;
const planIcons = [DollarSign, Calendar, CreditCard, Wallet] as const;
const planDiscounts = ["10%", "5%", "0%", "Custom"] as const;
const planRecommended = [false, true, false, false] as const;

export default function PaymentPlans() {
  const t = useTranslations("fees.paymentPlans");

  return (
    <section className="py-20 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
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

        {/* Payment Plans Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {planKeys.map((key, index) => {
            const Icon = planIcons[index];
            const discount = planDiscounts[index];
            const recommended = planRecommended[index];
            const plan = {
              name: t(`plans.${key}.name`),
              description: t(`plans.${key}.description`),
              benefits: t.raw(`plans.${key}.benefits`) as string[],
              recommended,
            };
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <Card
                  className={`h-full flex flex-row md:flex-col shadow-lg hover:shadow-xl transition-all overflow-hidden ${
                    plan.recommended
                      ? "border-2 border-orange-500 dark:border-orange-600 bg-orange-50/50 dark:bg-orange-950/30"
                      : "border border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 -right-3 bg-orange-600 dark:bg-orange-700 text-white px-3 py-1 rounded-full text-xs font-semibold rotate-12">
                      {t("recommended")}
                    </div>
                  )}
                  <div className="shrink-0 p-6 border-r md:border-r-0 md:border-b border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <CardTitle className="text-xl font-bold mb-2">
                      {plan.name}
                    </CardTitle>
                    {discount !== "Custom" && (
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                        {discount} {t("off")}
                      </div>
                    )}
                    {discount === "Custom" && (
                      <div className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-2">
                        {t("customTerms")}
                      </div>
                    )}
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {plan.description}
                    </p>
                    <ul className="space-y-2">
                      {plan.benefits.map((benefit: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <span className="text-orange-600 dark:text-orange-400 mt-0.5">
                            ✓
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
          >
            <Link href={`/contact`}>{t("contact")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
