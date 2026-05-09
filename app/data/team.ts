export type TeamCategory = "founder" | "leadership";

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  category: TeamCategory;
  initials: string;
  bio: string[];
  expertise?: string[];
  education?: string[];
  imageSrc?: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "godwin-honu",
    name: "Godwin Honu",
    title: "Founder & Principal",
    category: "founder",
    initials: "GH",
    bio: [
      "Godwin Honu is the founder and principal of Global Efficiency Network (GEN). With a deep commitment to strengthening institutional performance globally, he established GEN to bridge the gap between world-class operational practices and the organizations that need them most.",
      "His vision drives GEN's mission to connect institutions and professionals worldwide with high-standard learning, expertise, and operational practices drawn from the United States and beyond.",
    ],
    expertise: [
      "Institutional Reform",
      "Capacity Building",
      "Experiential Learning",
      "Global Partnerships",
    ],
  },
  {
    slug: "program-director",
    name: "Program Director",
    title: "Program Director",
    category: "leadership",
    initials: "PD",
    bio: [
      "Designing and delivering capacity-building programs that connect global leaders with U.S. best practices through immersive training, executive development, and experiential learning formats.",
    ],
  },
  {
    slug: "consulting-director",
    name: "Consulting Director",
    title: "Consulting Director",
    category: "leadership",
    initials: "CD",
    bio: [
      "Providing institutional consulting and advisory services that drive measurable performance improvements across organizational diagnostics, service delivery, and operational efficiency.",
    ],
  },
];

export const TEAM_SLUGS = teamMembers.map((m) => m.slug) as readonly string[];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}

export function getMembersByCategory(category: TeamCategory): TeamMember[] {
  return teamMembers.filter((m) => m.category === category);
}
