export type ProgramCategory = "Open" | "Commissioned";

export interface Program {
  id: string;
  title: string;
  category: ProgramCategory;
  description: string;
  features: string[];
  targetAudience: string;
  image?: string;
  duration?: string;
  location?: string;
}

export const programsData: Program[] = [
  // Open Enrollment Programs
  {
    id: "exec-short-courses",
    title: "Executive Short Courses",
    category: "Open",
    description:
      "Intensive leadership seminars delivered in US venues, focusing on advanced management practices and operational efficiency.",
    features: [
      "Fixed calendar dates",
      "US-based venues",
      "Networking opportunities",
      "Multi-day intensive format",
      "Industry expert facilitators",
    ],
    targetAudience: "Senior administrators, public officials, and institutional leaders",
    duration: "3-5 days",
    location: "United States",
  },
  {
    id: "sector-study-tours",
    title: "Sector-Specific Study Tours",
    category: "Open",
    description:
      "Immersive site visits to US infrastructure, agencies, and institutions to observe operational excellence in real-world settings.",
    features: [
      "Site visits to US facilities",
      "Direct observation of operations",
      "Q&A sessions with practitioners",
      "Sector-specific focus areas",
      "Group learning experience",
    ],
    targetAudience:
      "Technical professionals, service delivery executives, and sector specialists",
    duration: "5-7 days",
    location: "United States",
  },
  {
    id: "professional-fellowships",
    title: "Professional Fellowships",
    category: "Open",
    description:
      "Long-term immersive programs combining shadowing, mentorship, and structured learning in US institutions.",
    features: [
      "Extended duration programs",
      "Shadowing opportunities",
      "Mentorship pairing",
      "Structured learning modules",
      "Certificate upon completion",
    ],
    targetAudience:
      "Mid-to-senior level professionals seeking deep immersion",
    duration: "2-4 weeks",
    location: "United States",
  },
  // Commissioned & Custom Programs
  {
    id: "custom-curriculum",
    title: "Custom Curriculum Design",
    category: "Commissioned",
    description:
      "Tailored training programs designed based on your institution's specific objectives, challenges, and operational context.",
    features: [
      "Needs assessment included",
      "Bespoke curriculum design",
      "Client-specific objectives",
      "Flexible delivery locations",
      "Evaluation and follow-up support",
    ],
    targetAudience: "Institutions, ministries, and organizations with specific training needs",
    duration: "Variable",
    location: "US or Client Location",
  },
  {
    id: "reform-bootcamps",
    title: "Institutional Reform Bootcamps",
    category: "Commissioned",
    description:
      "Intensive on-site or hybrid workshops focused on reform strategy, change management, and institutional transformation.",
    features: [
      "Strategic reform planning",
      "Change management frameworks",
      "Team-based workshops",
      "Implementation roadmaps",
      "Post-program support",
    ],
    targetAudience:
      "Organizations undergoing transformation or seeking reform strategies",
    duration: "1-2 weeks",
    location: "Client Site or Hybrid",
  },
];

// Helper functions
export const getProgramsByCategory = (
  category: ProgramCategory
): Program[] => {
  return programsData.filter((program) => program.category === category);
};

export const getProgramById = (id: string): Program | undefined => {
  return programsData.find((program) => program.id === id);
};
