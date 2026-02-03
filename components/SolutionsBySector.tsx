"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import Section from "./Section";

type Sector = "governments" | "private" | "institutions";

interface SectorContent {
  id: Sector;
  label: string;
  icon: any;
  valueProposition: string;
  focusAreas: string[];
  recommendedProgram: {
    title: string;
    description: string;
    features: string[];
  };
}

const sectorData: SectorContent[] = [
  {
    id: "governments",
    label: "Governments",
    icon: Building2,
    valueProposition:
      "Empowering public-facing organizations to enhance service delivery, accountability, and operational excellence through evidence-based practices and strategic reform.",
    focusAreas: ["Public-facing organizations", "Service delivery", "Accountability", "Operational excellence"],
    recommendedProgram: {
      title: "Public Sector Reform Strategy Program",
      description:
        "Comprehensive training and advisory services designed specifically for government agencies seeking transformation.",
      features: [
        "Customized reform roadmaps",
        "Service delivery optimization",
        "Accountability frameworks",
        "Stakeholder engagement strategies",
      ],
    },
  },
  {
    id: "private",
    label: "Private Organizations",
    icon: Briefcase,
    valueProposition:
      "Helping service-oriented private organizations achieve operational efficiency, leadership effectiveness, and sustainable growth through institutional best practices.",
    focusAreas: ["Operational efficiency", "Leadership effectiveness", "Sustainable growth", "Best practices"],
    recommendedProgram: {
      title: "Executive Leadership & Operational Excellence",
      description:
        "Tailored programs for private sector leaders focused on efficiency, innovation, and strategic management.",
      features: [
        "Leadership development",
        "Process optimization",
        "Innovation frameworks",
        "Performance metrics",
      ],
    },
  },
  {
    id: "institutions",
    label: "Institutions",
    icon: GraduationCap,
    valueProposition:
      "Supporting institutions with reform design, governance strengthening, and capacity building to achieve their mission-driven objectives.",
    focusAreas: ["Reform design", "Governance", "Capacity building", "Mission-driven objectives"],
    recommendedProgram: {
      title: "Institutional Reform & Governance Program",
      description:
        "Strategic consulting and training for institutions undergoing transformation or seeking to strengthen governance.",
      features: [
        "Reform strategy design",
        "Governance frameworks",
        "Capacity assessment",
        "Implementation support",
      ],
    },
  },
];

export default function SolutionsBySector() {
  const [activeSector, setActiveSector] = useState<Sector>("governments");

  const currentSector = sectorData.find((s) => s.id === activeSector) || sectorData[0];

  return (
    <Section className="bg-primary-50 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Solutions by Sector
        </h2>
        <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto">
          Sector-focused learning experiences tailored to your organization's
          unique needs and objectives
        </p>
      </motion.div>

      {/* Tab Interface */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-primary-200 pb-4">
        {sectorData.map((sector) => {
          const Icon = sector.icon;
          return (
            <button
              key={sector.id}
              onClick={() => setActiveSector(sector.id)}
              className={`flex items-center gap-3 px-6 md:px-8 py-4 rounded-t-lg font-semibold transition-all duration-300 min-h-[44px] relative ${
                activeSector === sector.id
                  ? "text-accent-700 bg-white"
                  : "text-secondary-DEFAULT hover:text-primary-900"
              }`}
            >
              <Icon
                size={20}
                className={activeSector === sector.id ? "text-accent-700" : ""}
              />
              <span>{sector.label}</span>
              {/* Active Indicator */}
              {activeSector === sector.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent-700 rounded-t-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Dynamic Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSector}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Value Proposition */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-primary-200">
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-4">
                Value Proposition
              </h3>
              <p className="text-secondary-DEFAULT mb-6 leading-relaxed">
                {currentSector.valueProposition}
              </p>

              {/* Focus Areas */}
              <div>
                <h4 className="font-semibold text-primary-900 mb-3">Focus Areas:</h4>
                <ul className="space-y-2">
                  {currentSector.focusAreas.map((area, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-accent-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-secondary-DEFAULT">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Program */}
            <div className="bg-primary-900 rounded-xl p-8 shadow-lg text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent-700 text-white text-xs font-semibold rounded-full">
                  Recommended Program
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                {currentSector.recommendedProgram.title}
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                {currentSector.recommendedProgram.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {currentSector.recommendedProgram.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-accent-700 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-h-[44px]">
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
