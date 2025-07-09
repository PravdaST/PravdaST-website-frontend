import { Helmet } from 'react-helmet-async';

export function WebSiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.pravdagency.eu/#website",
    "name": "Pravda ST - Бизнес Инженеринг Агенция",
    "alternateName": "Pravda Agency",
    "url": "https://www.pravdagency.eu",
    "description": "Консултантска компания за бизнес инженеринг. Изграждаме системи за предвидим растеж на B2B компании в България.",
    "inLanguage": "bg-BG",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.pravdagency.eu/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.pravdagency.eu/blog?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://www.pravdagency.eu/#organization"
    },
    "sameAs": [
      "https://www.facebook.com/pravdast.agency/",
      "https://www.youtube.com/@PravdaST",
      "https://www.instagram.com/pravdast.agency/",
      "https://www.linkedin.com/company/pravda-st/"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}