import { getMemberBySlug } from "@/app/data/team";

const SITE_URL = "https://globalefficiencynetwork.org";

export default function OrganizationJsonLd() {
  const founder = getMemberBySlug("godwin-honu");

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Global Efficiency Network",
        alternateName: "GEN",
        legalName: "Global Efficiency Network, LLC",
        url: SITE_URL,
        email: "geninquirer@gmail.com",
        description:
          "Global Efficiency Network (GEN) is a U.S.-based organization that designs and delivers capacity-building, consulting, and experiential learning programs for institutions and professionals worldwide.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9340 Helena Rd STE F - 111",
          addressLocality: "Birmingham",
          addressRegion: "AL",
          postalCode: "35244-1747",
          addressCountry: "US",
        },
        ...(founder && {
          founder: {
            "@type": "Person",
            name: founder.name,
            jobTitle: founder.title,
            ...(founder.linkedinUrl && { sameAs: [founder.linkedinUrl] }),
          },
        }),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Global Efficiency Network (GEN)",
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
