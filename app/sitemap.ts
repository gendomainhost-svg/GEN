import type { MetadataRoute } from "next";
import { TEAM_SLUGS } from "@/app/data/team";
import { FLAGSHIP_PROGRAM_PATH } from "@/app/data/flagshipProgram";

export const dynamic = "force-static";

const SITE_URL = "https://globalefficiencynetwork.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/programs", priority: 0.9 },
    { path: FLAGSHIP_PROGRAM_PATH, priority: 0.9 },
    { path: "/consulting", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/experience", priority: 0.7 },
    { path: "/our-team", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    ...TEAM_SLUGS.map((slug) => ({ path: `/our-team/${slug}`, priority: 0.5 })),
    { path: "/legal/privacy", priority: 0.3 },
    { path: "/legal/terms", priority: 0.3 },
    { path: "/legal/disclaimer", priority: 0.3 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    priority,
  }));
}
