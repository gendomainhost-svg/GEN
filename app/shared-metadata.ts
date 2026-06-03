import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Global Efficiency Network (GEN)",
    template: "%s | Global Efficiency Network (GEN)",
  },
  description:
    "Global Efficiency Network (GEN) is a U.S.-based organization that designs and delivers high-standard capacity-building, consulting, and experiential learning programs for institutions and professionals worldwide.",
  keywords: [
    "Capacity Building",
    "Institutional Reform",
    "Executive Training",
    "US Consulting",
    "Global Efficiency",
    "Public Administration Training",
    "US Study Tours",
    "Institutional Efficiency",
    "Government Consulting",
    "Executive Education",
    "Experiential Learning",
    "US Best Practices",
    "Global Leadership Development",
  ],
  authors: [{ name: "Global Efficiency Network" }],
  creator: "Global Efficiency Network",
  publisher: "Global Efficiency Network",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://globalefficiencynetwork.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globalefficiencynetwork.org",
    siteName: "Global Efficiency Network",
    title: "Global Efficiency Network (GEN)",
    description:
      "Global Efficiency Network (GEN) is a U.S.-based organization that designs and delivers high-standard capacity-building, consulting, and experiential learning programs for institutions and professionals worldwide.",
    images: [
      {
        url: "/images/gen.webp",
        width: 1376,
        height: 743,
        alt: "Global Efficiency Network (GEN)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Efficiency Network (GEN)",
    description:
      "Global Efficiency Network (GEN) is a U.S.-based organization that designs and delivers high-standard capacity-building, consulting, and experiential learning programs for institutions and professionals worldwide.",
    images: ["/images/gen.webp"],
  },
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
};
