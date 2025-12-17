"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NewsletterSection() {
  const t = useTranslations("news.newsletter");
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="shadow-xl border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-100/30 dark:from-orange-950/30 dark:to-orange-900/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2 text-slate-800 dark:text-slate-100">
                {t("title")}
              </CardTitle>
              <p className="text-slate-600 dark:text-slate-400">{t("description")}</p>
            </CardHeader>
            <CardContent>
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-center p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
                  <p className="text-green-800 dark:text-green-200 font-semibold">
                    {t("thankYou")}
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    {t("successMessage")}
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white whitespace-nowrap"
                  >
                    {t("subscribe")}
                  </Button>
                </form>
              )}
              <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-4">
                {t("privacy")}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
