// Slugs for program detail pages - used by generateStaticParams for static export
export const PROGRAM_SLUGS = [
  "strategic-leadership-immersion",
  "institutional-shadowing-fellowship",
] as const;

export type ProgramSlug = (typeof PROGRAM_SLUGS)[number];
