export interface UtilityLink {
  name: string;
  href: string;
}

export interface MegaMenuLink {
  name: string;
  href: string;
  description?: string;
}

export interface MegaMenuGroup {
  heading: string;
  links: MegaMenuLink[];
}

export interface MegaMenuFeatured {
  title: string;
  blurb: string;
  href: string;
  cta?: string;
}

export interface MainNavItem {
  name: string;
  href: string;
  button?: boolean;
  groups?: MegaMenuGroup[];
  featured?: MegaMenuFeatured;
}

export const utilityLinks: UtilityLink[] = [
  { name: "For Individuals", href: "/contact?type=individual" },
  { name: "For Institutions", href: "/contact?type=institutional" },
  { name: "For Partners", href: "/contact?type=partnership" },
  { name: "Press", href: "/contact" },
];

export const mainNav: MainNavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Programs",
    href: "/programs",
    groups: [
      {
        heading: "Program Pathways",
        links: [
          {
            name: "California Executive Learning Program",
            href: "/programs/california-executive-learning",
            description:
              "Flagship program on workforce development, job creation & economic growth",
          },
          {
            name: "Open-Enrollment Programs",
            href: "/programs",
            description: "Public cohorts open to qualified individuals",
          },
          {
            name: "Commissioned Programs",
            href: "/programs",
            description: "Custom-built programs for institutions",
          },
        ],
      },
      {
        heading: "Formats",
        links: [
          {
            name: "Executive Short Courses",
            href: "/programs",
            description: "Intensive leadership and management",
          },
          {
            name: "Study Tours",
            href: "/programs",
            description: "Sector-specific immersive learning",
          },
          {
            name: "Fellowships",
            href: "/programs",
            description: "Extended professional development",
          },
          {
            name: "Shadowing",
            href: "/programs",
            description: "Direct observation of operational excellence",
          },
        ],
      },
    ],
    featured: {
      title: "California Executive Learning Program",
      blurb:
        "Flagship five-day executive learning program in California, September 14–18, 2026. Expressions of interest now open.",
      href: "/programs/california-executive-learning",
      cta: "Register interest",
    },
  },
  {
    name: "Consulting",
    href: "/consulting",
    groups: [
      {
        heading: "Services",
        links: [
          { name: "Organizational Diagnostics", href: "/consulting" },
          { name: "Service Delivery Optimization", href: "/consulting" },
          { name: "Leadership & Governance Advisory", href: "/consulting" },
          { name: "Operational Efficiency", href: "/consulting" },
          { name: "Strategy & Institutional Reform", href: "/consulting" },
        ],
      },
    ],
    featured: {
      title: "Request consulting",
      blurb:
        "Tell us about your institutional challenge — we'll scope an engagement together.",
      href: "/contact?type=institutional",
      cta: "Start a conversation",
    },
  },
  {
    name: "Experience",
    href: "/experience",
    groups: [
      {
        heading: "Experiential Learning",
        links: [
          {
            name: "Institutional Shadowing",
            href: "/experience",
            description: "Observe operational practices first-hand",
          },
          {
            name: "Professional Fellowships",
            href: "/experience",
            description: "Immersive mentorship and hands-on learning",
          },
          {
            name: "Site Visits & Operational Tours",
            href: "/experience",
            description: "Sector-focused visits to U.S. facilities",
          },
        ],
      },
    ],
    featured: {
      title: "Why experiential learning",
      blurb:
        "Observation, engagement, and adaptation — the GEN method for transferring practice into context.",
      href: "/experience",
      cta: "See the method",
    },
  },
  {
    name: "About",
    href: "/about",
    groups: [
      {
        heading: "About GEN",
        links: [
          { name: "Mission & Approach", href: "/about" },
          { name: "Our Team", href: "/our-team" },
          { name: "Knowledge Exchange", href: "/experience" },
        ],
      },
    ],
    featured: {
      title: "Meet the team",
      blurb:
        "The leadership and advisors behind GEN's global capacity-building work.",
      href: "/our-team",
      cta: "View leadership",
    },
  },
  { name: "Contact Us", href: "/contact", button: true },
];
