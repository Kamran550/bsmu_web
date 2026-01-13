"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const contactInfo = {
  phone: {
    primary: "+32 483 38 31 70",
    secondary: "+32 483 38 31 70",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  email: {
    primary: "info@bsmu.edu.rs",
    admissions: "international@bsmu.edu.rs",
    support: "rectorate@bsmu.edu.rs",
  },
  address: {
    city: "Jurija Gagarina 12, 11070, Beograd, Serbia",
    zip: "00-000",
    country: "Serbia",
  },
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: Closed",
    sunday: "Sunday: Closed",
  },
};

export default function ContactInfo() {
  const t = useTranslations("contact.info");

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

        {/* Contact Cards Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border-2 border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-600">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t("phone")}
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${contactInfo.phone.primary.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="block text-lg font-semibold text-orange-600 dark:text-orange-400 hover:underline"
                    >
                      {contactInfo.phone.primary}
                    </a>
                    <a
                      href={`tel:${contactInfo.phone.secondary.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      {contactInfo.phone.secondary}
                    </a>
                    <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">
                        {contactInfo.phone.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border-2 border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-600">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900 dark:to-amber-900 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t("email")}
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${contactInfo.email.primary}`}
                      className="block text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline break-all"
                    >
                      {contactInfo.email.primary}
                    </a>
                    <div className="space-y-1 pt-2 border-t">
                      <p className="text-xs text-muted-foreground mb-1">
                        {t("admissions")}
                      </p>
                      <a
                        href={`mailto:${contactInfo.email.admissions}`}
                        className="block text-xs text-gray-600 dark:text-gray-300 hover:underline break-all"
                      >
                        {contactInfo.email.admissions}
                      </a>
                    </div>
                    <div className="space-y-1 pt-2 border-t">
                      <p className="text-xs text-muted-foreground mb-1">
                        {t("support")}
                      </p>
                      <a
                        href={`mailto:${contactInfo.email.support}`}
                        className="block text-xs text-gray-600 dark:text-gray-300 hover:underline break-all"
                      >
                        {contactInfo.email.support}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border-2 border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-600">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t("address")}
                  </h3>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300">
                    <p>{contactInfo.address.city}</p>
                    <p className="text-sm">{contactInfo.address.zip}</p>
                    <p className="text-sm font-semibold mt-2">
                      {contactInfo.address.country}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <h3 className="text-xl font-bold">{t("officeHours")}</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>{t("hours.saturday")}</p>
                <p className="text-muted-foreground">{t("hours.sunday")}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
