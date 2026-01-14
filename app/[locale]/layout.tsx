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
      "bsmu",
      "bsmu.edu.rs",
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
      "European university",
    ],
  },
  ru: {
    title:
      "BSMU - Балканский Университет Науки и Управления | Обучение в Сербии",
    description:
      "BSMU - Балканский Университет Науки и Управления. Международное образование в Сербии с программами бакалавриата, магистратуры и докторантуры. Качественное образование через науку и управление.",
    keywords: [
      "BSMU",
      "bsmu",
      "bsmu.edu.rs",
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
      "bsmu",
      "bsmu.edu.rs",
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
  const baseUrl = "https://bsmu.edu.rs";
  const ogLocale = locale === "ru" ? "ru_RU" : locale === "tr" ? "tr_TR" : "en_US";
  const alternateLocales = ["en_US", "ru_RU", "tr_TR"].filter((l) => l !== ogLocale);

  return {
    metadataBase: new URL(baseUrl),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [
      {
        name: "Balkan Science and Management University",
        url: baseUrl,
      },
    ],
    creator: "Balkan Science and Management University",
    publisher: "Balkan Science and Management University",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ru: `${baseUrl}/ru`,
        tr: `${baseUrl}/tr`,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: alternateLocales,
      url: `${baseUrl}/${locale}`,
      siteName: "Balkan Science and Management University",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "/images/BSMU-logo-dark.png",
          width: 1200,
          height: 630,
          alt: "Balkan Science and Management University Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/images/BSMU-logo-dark.png"],
      creator: "@bsmu_edu",
      site: "@bsmu_edu",
    },
    category: "education",
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
