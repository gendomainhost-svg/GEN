export const FLAGSHIP_PROGRAM = {
  slug: "california-executive-learning",
  title:
    "California Executive Learning Program on Workforce Development, Job Creation & Economic Growth",
  shortTitle: "California Executive Learning Program",
  dates: "September 14–18, 2026",
  location: "California, USA",
  heroDescription:
    "Experience California's practical approaches to workforce development, job creation, economic growth, entrepreneurship, trade and investment, and institutional innovation through a five-day executive learning and institutional benchmarking program.",
  eoiNotice:
    "We invite public officials, policymakers, workforce leaders, economic development practitioners, institutional executives, and development professionals to express their interest in participating. Formal registration details will be shared as program arrangements are finalized.",
  about:
    "The California Executive Learning Program is the flagship executive learning initiative of Global Efficiency Network (GEN). It connects participants with California institutions to examine proven practices that strengthen institutions, improve public service delivery, support workforce development, stimulate economic growth, promote entrepreneurship, and attract trade and investment.",
  learningThemes: [
    "Workforce Development",
    "Job Creation",
    "Economic Growth",
    "Entrepreneurship & Small Business Development",
    "Trade & Investment",
    "Public–Private Partnerships",
    "Institutional Benchmarking",
    "Leadership & Institutional Innovation",
  ],
  participants: [
    "Government ministers and senior public officials",
    "Members of Parliament",
    "Workforce development leaders",
    "Economic development practitioners",
    "Local government executives",
    "University and technical education leaders",
    "Development organizations",
    "Public sector managers",
  ],
  learningExperience: [
    "Executive presentations",
    "Institutional benchmarking visits",
    "Professional exchanges",
    "Panel discussions",
    "Interactive Q&A sessions",
    "Networking with California institutions",
  ],
  learningPartners:
    "GEN is actively engaging California government agencies, workforce organizations, educational institutions, research organizations, and international exchange organizations. Confirmed learning partners will be announced as participation is finalized.",
  eoiBenefits: [
    "Program updates",
    "Registration information",
    "Participation requirements",
    "Fees and logistics",
    "Program agenda as it becomes available",
  ],
} as const;

export const FLAGSHIP_PROGRAM_PATH = `/programs/${FLAGSHIP_PROGRAM.slug}`;
