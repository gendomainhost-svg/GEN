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
  linkedinUrl?: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "godwin-honu",
    name: "Godwin Honu",
    title: "Founder & Executive Director",
    category: "founder",
    initials: "GH",
    imageSrc: "/team/godwin-honu.png",
    linkedinUrl: "https://www.linkedin.com/in/godwin-honu-53582a271",
    bio: [
      "Godwin Honu is the Founder and Executive Director of Global Efficiency Network (GEN), an international platform based in the United States dedicated to advancing leadership excellence, strengthening institutional performance, and promoting organizational efficiency worldwide.",
      "With a professional background in public administration, governance, and legislative research, Godwin brings extensive experience working within parliamentary and public sector institutions. His work has focused on policy analysis, legislative support, and institutional development aimed at strengthening governance systems and enhancing public sector effectiveness.",
      "Godwin previously served within the Parliamentary Service of the Parliament of Ghana, where he rose to the rank of Assistant Director IIA. In this role, he contributed to the administrative and operational functions supporting legislative processes and institutional performance.",
      "Prior to this, he served for several years as a Research Assistant to a Member of Parliament, providing policy research, legislative analysis, and advisory support on governance and public policy matters.",
      "He holds a Master of Public Administration from the University of Ghana Business School, where his academic training focused on public sector management, governance systems, and institutional development.",
      "Godwin has since relocated to the United States, where he established Global Efficiency Network (GEN) to create a platform for global knowledge exchange and institutional capacity building. Through GEN, he seeks to connect leaders, institutions, and professionals from around the world with high-performing systems, expertise, and experiential learning opportunities in the United States and other advanced economies.",
      "His work is driven by a commitment to strengthening leadership capacity, improving institutional effectiveness, and fostering international collaboration in addressing complex governance and organizational challenges.",
    ],
    expertise: [
      "Public Administration & Governance",
      "Legislative Research & Policy Analysis",
      "Parliamentary & Public Sector Institutions",
      "Institutional Development",
      "Global Capacity Building",
    ],
    education: [
      "Master of Public Administration, University of Ghana Business School",
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
