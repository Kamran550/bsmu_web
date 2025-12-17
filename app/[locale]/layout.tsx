import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { routing } from "@/i18n/routing";
import { NavbarDemo } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SeoJsonLd } from "@/components/seo/JsonLd";
import { TopLoader } from "@/components/ui/TopLoader";
import type { Metadata } from "next";

// Hər dil üçün SEO məlumatları - Title həmişə ingilis dilindədir
const seoData: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: "BSMU - Balkan Science and Management University | Study in Serbia",
    description:
      "BSMU - Balkan Science and Management University. International education in Serbia with bachelor's, master's and PhD programs. Quality education through science and management.",
    keywords: [
      "BSMU",
      "Balkan Science and Management University",
      "study in Serbia",
      "international university",
      "Serbia education",
      "bachelor degree Serbia",
      "master degree Serbia",
      "PhD Serbia",
      "Serbian university",
      "science and management",
      "Belgrade university",
      "Serbian university",
    ],
  },
  ru: {
    title:
      "BSMU - Балканский Университет Науки и Управления | Обучение в Сербии",
    description:
      "BSMU - Балканский Университет Науки и Управления. Международное образование в Сербии с программами бакалавриата, магистратуры и докторантуры. Качественное образование через науку и управление.",
    keywords: [
      "BSMU",
      "Балканский Университет Науки и Управления",
      "Образование в Сербии",
      "Обучение в Сербии",
      "Международный университет",
      "Сербский университет",
      "Бакалавриат в Сербии",
      "Магистратура в Сербии",
      "Докторантура в Сербии",
      "Европейский университет",
      "наука и управление",
      "университет Белграда",
    ],
  },
  tr: {
    title: "BSMU - Balkan Bilim ve Yönetim Üniversitesi | Sırbistan'da Eğitim",
    description:
      "BSMU - Balkan Bilim ve Yönetim Üniversitesi. Sırbistan'da lisans, yüksek lisans ve doktora programları ile uluslararası eğitim. Bilim ve yönetim yoluyla kaliteli eğitim.",
    keywords: [
      "BSMU",
      "Balkan Bilim ve Yönetim Üniversitesi",
      "Sırbistan'da eğitim",
      "Sırbistan'da okumak",
      "uluslararası üniversite",
      "Sırbistan üniversitesi",
      "lisans programları",
      "yüksek lisans programları",
      "doktora",
      "Avrupa üniversitesi",
      "bilim ve yönetim",
      "Belgrad üniversitesi",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoData[locale] || seoData.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    icons: {
      icon: [
        { url: "/images/BSMU-logo-dark.png", sizes: "any", type: "image/png" },
        {
          url: "/images/BSMU-logo-dark.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/images/BSMU-logo-dark.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/images/BSMU-logo-dark.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      shortcut: "/images/BSMU-logo-dark.png",
    },
    alternates: {
      canonical: `https://bsmu.edu.rs/${locale}`,
      languages: {
        en: "https://bsmu.edu.rs/en",
        ru: "https://bsmu.edu.rs/ru",
        tr: "https://bsmu.edu.rs/tr",
      },
    },
    openGraph: {
      locale: locale === "ru" ? "ru_RU" : locale === "tr" ? "tr_TR" : "en_US",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <SeoJsonLd />
      <Suspense fallback={null}>
        <TopLoader />
      </Suspense>
      <NavbarDemo />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
