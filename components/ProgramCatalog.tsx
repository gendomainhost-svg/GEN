"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, FileText, GraduationCap, Briefcase, Eye } from "lucide-react";
import Section from "./Section";

type ProgramType = "All" | "Executive Training" | "Custom/Private" | "Fellowships" | "Study Tours";

interface Program {
  id: string;
  title: string;
  category: ProgramType;
  tag: string;
  location: string;
  description: string;
  icon: any;
}

const mockPrograms: Program[] = [
  {
    id: "1",
    title: "Leadership Immersion Program",
    category: "Executive Training",
    tag: "Scheduled",
    location: "United States",
    description:
      "Intensive leadership development program for senior executives focusing on strategic thinking and operational excellence.",
    icon: GraduationCap,
  },
  {
    id: "2",
    title: "Public Sector Reform Strategy",
    category: "Custom/Private",
    tag: "Client-Specific",
    location: "On-Site or US",
    description:
      "Tailored program designed to address specific institutional challenges and reform objectives.",
    icon: Briefcase,
  },
  {
    id: "3",
    title: "Institutional Shadowing Fellowship",
    category: "Fellowships",
    tag: "Immersive",
    location: "United States",
    description:
      "Extended program for senior executives to observe and learn from leading US institutions.",
    icon: Eye,
  },
  {
    id: "4",
    title: "Healthcare Systems Study Tour",
    category: "Study Tours",
    tag: "Scheduled",
    location: "United States",
    description:
      "Site visits to premier healthcare facilities to observe operational excellence and innovation.",
    icon: Eye,
  },
  {
    id: "5",
    title: "Digital Transformation Executive Course",
    category: "Executive Training",
    tag: "Scheduled",
    location: "United States",
    description:
      "Advanced program covering digital governance, innovation, and technology integration in public services.",
    icon: GraduationCap,
  },
  {
    id: "6",
    title: "Ministry Capacity Building Program",
    category: "Custom/Private",
    tag: "Client-Specific",
    location: "On-Site or US",
    description:
      "Comprehensive training program tailored to strengthen ministry operations and service delivery.",
    icon: Briefcase,
  },
];

export default function ProgramCatalog() {
  const [activeFilter, setActiveFilter] = useState<ProgramType>("All");

  const filteredPrograms =
    activeFilter === "All"
      ? mockPrograms
      : mockPrograms.filter((program) => program.category === activeFilter);

  const filters: ProgramType[] = [
    "All",
    "Executive Training",
    "Custom/Private",
    "Fellowships",
    "Study Tours",
  ];

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
          Program Catalog
        </h2>
        <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto">
          Explore GEN's comprehensive range of learning opportunities designed
          for leaders and institutions
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base min-h-[44px] ${
              activeFilter === filter
                ? "bg-primary-900 text-white shadow-lg scale-105"
                : "bg-white text-primary-900 hover:bg-primary-100 border border-primary-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Program Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-primary-200 flex flex-col"
                >
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-900 text-xs font-semibold rounded-full">
                      {program.category}
                    </span>
                    <span className="ml-2 inline-block px-3 py-1 bg-accent-100 text-accent-900 text-xs font-semibold rounded-full">
                      {program.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-700" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-3">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-DEFAULT text-sm mb-4 flex-grow">
                    {program.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center text-sm text-secondary-DEFAULT mb-4">
                    <MapPin className="mr-2" size={16} />
                    {program.location}
                  </div>

                  {/* Request Syllabus Button */}
                  <button className="mt-auto w-full bg-primary-900 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-h-[44px]">
                    <FileText className="mr-2" size={18} />
                    Request Syllabus
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {filteredPrograms.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-secondary-DEFAULT text-lg">
            No programs found in this category.
          </p>
        </motion.div>
      )}
    </Section>
  );
}
