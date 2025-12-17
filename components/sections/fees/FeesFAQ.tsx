"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const faqKeys = [
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
  "q8",
  "q9",
  "q10",
] as const;

export default function FeesFAQ() {
  const t = useTranslations("fees.faq");

  return (
    <section className="py-20 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqKeys.slice(0, 5).map((key, index) => (
                <AccordionItem
                  key={key}
                  value={`item-${index}`}
                  className="bg-white dark:bg-slate-900 rounded-lg px-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-base py-3 hover:no-underline">
                    {t(`items.${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 dark:text-slate-300 leading-relaxed pb-3 text-sm">
                    {t(`items.${key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqKeys.slice(5).map((key, index) => (
                <AccordionItem
                  key={key}
                  value={`item-${index + 5}`}
                  className="bg-white dark:bg-slate-900 rounded-lg px-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-base py-3 hover:no-underline">
                    {t(`items.${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 dark:text-slate-300 leading-relaxed pb-3 text-sm">
                    {t(`items.${key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {t("contact")}
          </p>
          <Link
            href={`/contact`}
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:underline font-semibold"
          >
            {t("contactLink")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
