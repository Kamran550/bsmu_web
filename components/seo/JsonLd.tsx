import Script from "next/script";

// Universitet üçün Organization Schema
export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://bsmu.edu.rs/#organization",
    name: "Balkan Science and Management University",
    alternateName: [
      "BSMU",
      "Балканский Университет Науки и Управления",
      "Balkan Science and Management University",
    ],
    url: "https://bsmu.edu.rs",
    logo: {
      "@type": "ImageObject",
      url: "https://bsmu.edu.rs/images/BSMU-logo-dark.png",
      width: 512,
      height: 512,
    },
    image: "https://bsmu.edu.rs/images/BSMU-logo-dark.png",
    description:
      "Balkan Science and Management University (BSMU) - International education in Serbia with bachelor's, master's and PhD programs. Quality education through science and management.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RS",
      addressLocality: "Serbia",
    },
    sameAs: [
      "https://www.facebook.com/bsmu",
      "https://www.instagram.com/bsmu",
      "https://www.linkedin.com/school/bsmu",
      "https://twitter.com/bsmu",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "admissions",
      availableLanguage: ["English", "Turkish", "Russian"],
    },
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

// Universitet üçün CollegeOrUniversity Schema
export function UniversityJsonLd() {
  const universityData = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "Balkan Science and Management University",
    alternateName: "BSMU",
    url: "https://bsmu.edu.rs",
    logo: "https://bsmu.edu.rs/images/BSMU-logo-dark.png",
    description:
      "BSMU offers international bachelor's, master's and PhD programs in Serbia. Fostering science and management through education and global understanding.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Serbia",
    },
    hasOfferingCatalog: {
      "@type": "OfferingCatalog",
      name: "Academic Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "Bachelor Programs",
          description: "Undergraduate degree programs",
        },
        {
          "@type": "Course",
          name: "Master Programs",
          description: "Graduate degree programs",
        },
        {
          "@type": "Course",
          name: "PhD Programs",
          description: "Doctoral degree programs",
        },
      ],
    },
  };

  return (
    <Script
      id="university-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(universityData) }}
    />
  );
}

// WebSite Schema - Axtarış üçün
export function WebsiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bsmu.edu.rs/#website",
    url: "https://bsmu.edu.rs",
    name: "BSMU - Balkan Science and Management University",
    alternateName: ["BSMU", "Balkan Science and Management University"],
    description: "Official website of Balkan Science and Management University",
    publisher: {
      "@id": "https://bsmu.edu.rs/#organization",
    },
    inLanguage: ["en", "tr", "ru"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://bsmu.edu.rs/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

// Bütün JSON-LD-ləri birləşdirən komponent
export function SeoJsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <UniversityJsonLd />
      <WebsiteJsonLd />
    </>
  );
}
