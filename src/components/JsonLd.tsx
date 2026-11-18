import { BRAND } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BRAND.name,
    alternateName: BRAND.shortName,
    description: `${BRAND.tagline}. Professional flooring installation, refinishing, and complete home renovation in Orange County.`,
    url: BRAND.siteUrl,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: `${BRAND.siteUrl}/images/logo-mark.png`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Orange County, California",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    founder: {
      "@type": "Person",
      name: BRAND.contactName,
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
