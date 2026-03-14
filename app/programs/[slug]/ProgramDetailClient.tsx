"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Calendar, Download, FileText, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ShadowingFeature from "@/components/ShadowingFeature";
import Section from "@/components/Section";

// Mock program data - in production, this would come from a database
const programDatabase: Record<string, any> = {
  "strategic-leadership-immersion": {
    id: "strategic-leadership-immersion",
    title: "Strategic Leadership Immersion Program",
    format: "In-Person / Fellowship",
    location: "Alabama, USA",
    targetAudience: "Senior Executives",
    overview:
      "An intensive leadership development program designed for senior executives seeking to enhance their strategic thinking, operational excellence, and institutional leadership capabilities. This program combines immersive learning experiences with direct observation of high-performing US institutions.",
    learningOutcomes: [
      "Strategic thinking and decision-making frameworks",
      "Operational efficiency and process optimization",
      "Governance and accountability structures",
      "Change management and transformation leadership",
      "Cross-sector knowledge exchange",
      "Innovation and digital transformation strategies",
    ],
    methodology:
      "This program employs an immersive, experiential learning approach. Participants engage in direct observation of operational excellence, interactive workshops with practitioners, and structured reflection sessions. The methodology emphasizes adaptation rather than replication, helping leaders contextualize best practices for their own institutions.",
    isFellowship: false,
  },
  "institutional-shadowing-fellowship": {
    id: "institutional-shadowing-fellowship",
    title: "Institutional Shadowing Fellowship",
    format: "Immersive / Fellowship",
    location: "United States",
    targetAudience: "Senior Executives",
    overview:
      "An extended program for senior executives to observe and learn from leading US institutions through direct shadowing experiences. Participants engage with high-performing organizations in real-time, gaining insights into operational excellence and strategic management.",
    learningOutcomes: [
      "Direct observation of operational excellence",
      "Understanding of institutional best practices",
      "Networking with US practitioners and leaders",
      "Action planning for institutional improvement",
      "Implementation strategies for reform",
    ],
    methodology:
      "Participants spend extended periods shadowing leaders and observing operations at premier US institutions. The program includes pre-departure orientation, on-site immersion, debriefing sessions, and post-return advisory support to ensure successful implementation of insights.",
    isFellowship: true,
  },
};

interface AccordionItem {
  title: string;
  content: string[];
}

const weeklyAgenda: AccordionItem[] = [
  {
    title: "Week 1: Foundation & Orientation",
    content: [
      "Program introduction and objectives",
      "Strategic leadership frameworks",
      "Site visit preparation",
    ],
  },
  {
    title: "Week 2: Immersive Learning",
    content: [
      "Institutional shadowing sessions",
      "Interactive workshops with practitioners",
      "Case study analysis",
    ],
  },
  {
    title: "Week 3: Synthesis & Planning",
    content: [
      "Debriefing and reflection sessions",
      "Action planning workshops",
      "Implementation strategy development",
    ],
  },
];

interface ProgramDetailClientProps {
  slug: string;
}

export default function ProgramDetailClient({ slug }: ProgramDetailClientProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [isSticky, setIsSticky] = useState(false);

  const program = programDatabase[slug] || programDatabase["strategic-leadership-immersion"];

  const toggleModule = (title: string) => {
    setExpandedModules((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Sticky Header Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-40 bg-primary-900 text-white py-6 shadow-lg transition-all ${
          isSticky ? "py-4" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            {program.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center">
              <FileText className="mr-2" size={18} />
              <span>{program.format}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={18} />
              <span>{program.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2" size={18} />
              <span>{program.targetAudience}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Column - Main Content (70%) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview */}
            <Section className="bg-white p-8 rounded-xl shadow-md border border-primary-200">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-4">
                Overview
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-secondary-DEFAULT leading-relaxed">
                  {program.overview}
                </p>
              </div>
            </Section>

            {/* Learning Outcomes */}
            <Section className="bg-white p-8 rounded-xl shadow-md border border-primary-200">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">
                Learning Outcomes
              </h2>
              <ul className="space-y-3">
                {program.learningOutcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-secondary-DEFAULT">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Methodology */}
            <Section className="bg-white p-8 rounded-xl shadow-md border border-primary-200">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-4">
                Methodology
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-secondary-DEFAULT leading-relaxed">
                  {program.methodology}
                </p>
              </div>
            </Section>

            {/* Shadowing Feature - Only for Fellowships */}
            {program.isFellowship && <ShadowingFeature />}

            {/* Weekly Agenda / Modules - Accordion */}
            <Section className="bg-white p-8 rounded-xl shadow-md border border-primary-200">
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">
                Program Structure
              </h2>
              <div className="space-y-4">
                {weeklyAgenda.map((module) => (
                  <div
                    key={module.title}
                    className="border border-primary-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleModule(module.title)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-primary-50 hover:bg-primary-100 transition-colors text-left"
                    >
                      <span className="font-semibold text-primary-900">
                        {module.title}
                      </span>
                      {expandedModules.includes(module.title) ? (
                        <ChevronUp className="text-primary-700" size={20} />
                      ) : (
                        <ChevronDown className="text-primary-700" size={20} />
                      )}
                    </button>
                    {expandedModules.includes(module.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 py-4 bg-white"
                      >
                        <ul className="space-y-2">
                          {module.content.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start text-secondary-DEFAULT"
                            >
                              <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Right Column - Sticky Sidebar (30%) */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Next Cohort */}
              <div className="bg-primary-900 rounded-xl p-6 text-white">
                <h3 className="font-serif text-xl font-bold mb-4">Next Cohort</h3>
                <div className="flex items-center mb-4">
                  <Calendar className="mr-2" size={20} />
                  <span className="text-lg font-semibold">March 15, 2024</span>
                </div>
                <p className="text-white/70 text-sm mb-6">
                  Applications close February 28, 2024
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-primary-50 hover:bg-primary-100 text-primary-900 px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg border-2 border-primary-200 flex items-center justify-center min-h-[44px]">
                  <Download className="mr-2" size={20} />
                  Download Brochure
                </button>
                <button className="w-full bg-accent-700 hover:bg-accent-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-h-[44px]">
                  Apply / Request Proposal
                  <FileText className="ml-2" size={20} />
                </button>
              </div>

              {/* Additional Info */}
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h4 className="font-semibold text-primary-900 mb-3">
                  Need More Information?
                </h4>
                <p className="text-sm text-secondary-DEFAULT mb-4">
                  Contact our program team for detailed information about
                  curriculum, dates, and application process.
                </p>
                <a
                  href="/contact"
                  className="text-accent-700 hover:text-accent-600 font-semibold text-sm"
                >
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  );
}
