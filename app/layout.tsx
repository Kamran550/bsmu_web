import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Əsas məlumatlar
  title: {
    default:
      "BSMU - Balkan Science and Management University | Study in Serbia",
    template: "%s | BSMU - Balkan Science and Management University",
  },
  description:
    "BSMU - Balkan Science and Management University. International education in Serbia with bachelor's, master's and PhD programs. Quality education through science and management.",

  // Açar sözlər
  keywords: [
    "BSMU",
    "bsmu",
    "bsmu.edu.rs",
    "Balkan Science and Management University",
    "Serbia university",
    "Serbian university",
    "international university Serbia",
    "international university",
    "science and management university",
    "study in Serbia",
    "education in Serbia",
    "PhD Serbia",
    "PhD in Serbia",
    "bachelor degree Serbia",
    "bachelor programs in Serbia",
    "master degree Serbia",
    "master programs in Serbia",
    "doctoral programs in Serbia",
    "Belgrade university",
    "European university",
    "Serbia education",
  ],

  // Müəllif və yaradıcı
  authors: [
    {
      name: "Balkan Science and Management University",
      url: "https://bsmu.edu.rs",
    },
  ],
  creator: "Balkan Science and Management University",
  publisher: "Balkan Science and Management University",

  // Robots
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

  // Canonical URL
  metadataBase: new URL("https://bsmu.edu.rs"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ru: "/ru",
      tr: "/tr",
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "tr_TR"],
    url: "https://bsmu.edu.rs",
    siteName: "Balkan Science and Management University",
    title: "Balkan Science and Management University | Study in Serbia",
    description:
      "Balkan Science and Management University. International education in Serbia with bachelor's, master's and PhD programs. Quality education through science and management.",
    images: [
      {
        url: "/images/BSMU-logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Balkan Science and Management University Logo",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Balkan Science and Management University",
    description:
      "Balkan Science and Management University. International education in Serbia with bachelor's, master's and PhD programs.",
    images: ["/images/BSMU-logo-dark.png"],
    creator: "@bsmu_edu",
    site: "@bsmu_edu",
  },

  // Verification - Domain ilə verification edilib, kod lazım deyil

  // Category
  category: "education",

  // Icons / Favicon
  icons: {
    icon: [
      { url: "/images/BSMU-logo-dark.png", sizes: "any", type: "image/png" },
      { url: "/images/BSMU-logo-dark.png", sizes: "32x32", type: "image/png" },
      { url: "/images/BSMU-logo-dark.png", sizes: "16x16", type: "image/png" },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
