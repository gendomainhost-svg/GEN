import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Global Efficiency Network (GEN)",
    template: "%s | Global Efficiency Network (GEN)",
  },
  description:
    "An international capacity-building and consulting organization originating from the United States. Specializing in institutional excellence and executive training.",
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
      "An international capacity-building and consulting organization originating from the United States. Specializing in institutional excellence and executive training.",
    images: [
      {
        url: "/images/WHYUSA.png",
        width: 1200,
        height: 630,
        alt: "Global Efficiency Network - Capacity Building. Consulting. Institutional Excellence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Efficiency Network (GEN)",
    description:
      "An international capacity-building and consulting organization originating from the United States. Specializing in institutional excellence and executive training.",
    images: ["/images/WHYUSA.png"],
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
