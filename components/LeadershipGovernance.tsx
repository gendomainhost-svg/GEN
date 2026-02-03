"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Award, BookOpen, Briefcase, Globe, Trophy, Linkedin } from "lucide-react";
import Section from "./Section";

interface BoardMember {
  id: string;
  name: string;
  role: string;
  title: string;
  isManagingMember?: boolean;
  linkedinUrl?: string;
}

const boardMembers: BoardMember[] = [
  {
    id: "1",
    name: "Managing Member",
    role: "Leadership",
    title: "Strategic Leadership & Operations",
    isManagingMember: true,
    linkedinUrl: "https://linkedin.com/in/managing-member",
  },
  {
    id: "2",
    name: "Public Sector Expert",
    role: "Advisory Board",
    title: "Former Senior Government Official",
    linkedinUrl: "https://linkedin.com/in/public-sector-expert",
  },
  {
    id: "3",
    name: "Academic Advisor",
    role: "Advisory Board",
    title: "Professor of Public Administration",
    linkedinUrl: "https://linkedin.com/in/academic-advisor",
  },
  {
    id: "4",
    name: "Industry Strategist",
    role: "Advisory Board",
    title: "Executive Consultant",
    linkedinUrl: "https://linkedin.com/in/industry-strategist",
  },
];

const functionalUnits = [
  {
    id: "1",
    name: "Program Design",
    description: "Curriculum development and learning architecture",
    icon: BookOpen,
  },
  {
    id: "2",
    name: "Experiential Learning",
    description: "Fellowships, shadowing, and immersive programs",
    icon: Award,
  },
  {
    id: "3",
    name: "Advisory",
    description: "Strategic consulting and institutional reform",
    icon: Briefcase,
  },
  {
    id: "4",
    name: "Knowledge Exchange",
    description: "Conferences, forums, and peer learning",
    icon: Globe,
  },
  {
    id: "5",
    name: "Recognition",
    description: "Excellence awards and institutional honors",
    icon: Trophy,
  },
  {
    id: "6",
    name: "Marketing",
    description: "Brand positioning and strategic communications",
    icon: Users,
  },
];

export default function LeadershipGovernance() {
  const [viewMode, setViewMode] = useState<"board" | "structure">("board");
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <Section className="bg-primary-900 text-white py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Governance & Strategic Leadership
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Guided by an Advisory Board of experienced professionals from public
          service, academia, and industry
        </p>
      </motion.div>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-12">
        <div className="bg-primary-800 rounded-lg p-1 inline-flex gap-2">
          <button
            onClick={() => setViewMode("board")}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 min-h-[44px] ${
              viewMode === "board"
                ? "bg-accent-700 text-white shadow-lg"
                : "text-white/70 hover:text-white"
            }`}
          >
            Leadership Team
          </button>
          <button
            onClick={() => setViewMode("structure")}
            className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 min-h-[44px] ${
              viewMode === "structure"
                ? "bg-accent-700 text-white shadow-lg"
                : "text-white/70 hover:text-white"
            }`}
          >
            Organizational Structure
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "board" ? (
          <motion.div
            key="board"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-primary-800 rounded-xl p-6 hover:bg-primary-700 transition-all duration-300 border border-primary-700 hover:border-accent-500"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Photo Placeholder - Grayscale to Color on Hover */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-primary-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 group-hover:from-accent-600 group-hover:to-accent-800 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users
                      className={`text-white/50 group-hover:text-white transition-all duration-500 ${
                        member.isManagingMember ? "scale-125" : ""
                      }`}
                      size={64}
                    />
                  </div>
                  {/* Grayscale overlay that fades on hover */}
                  <div className="absolute inset-0 bg-primary-900/50 group-hover:bg-transparent transition-all duration-500" />
                  
                  {/* LinkedIn Overlay - Slides up on hover */}
                  {member.linkedinUrl && (
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{
                        y: hoveredMember === member.id ? 0 : 100,
                        opacity: hoveredMember === member.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-primary-900/90 flex items-center justify-center"
                    >
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent-500 transition-colors"
                        aria-label={`View ${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={32} />
                      </a>
                    </motion.div>
                  )}
                </div>

                {/* Role Badge */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      member.isManagingMember
                        ? "bg-accent-700 text-white"
                        : "bg-primary-700 text-white/90"
                    }`}
                  >
                    {member.role}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-xl font-bold mb-2">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-white/70 text-sm">{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="structure"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {functionalUnits.map((unit, index) => {
              const Icon = unit.icon;
              return (
                <motion.div
                  key={unit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-800 rounded-xl p-6 border border-primary-700 hover:border-accent-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-700/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-accent-500" size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {unit.name}
                  </h3>
                  <p className="text-white/70 text-sm">{unit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
