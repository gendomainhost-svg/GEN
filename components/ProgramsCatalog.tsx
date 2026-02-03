"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Calendar, Users } from "lucide-react";
import Section from "./Section";

type Category =
  | "All"
  | "Executive Training"
  | "Custom Programs"
  | "Fellowships"
  | "Advisory Services"
  | "Knowledge Exchange";

interface Program {
  id: string;
  title: string;
  category: Category;
  description: string;
  location: string;
  format?: string;
  targetAudience?: string;
}

const mockPrograms: Program[] = [
  {
    id: "1",
    title: "Strategic Leadership Immersion Program",
    category: "Executive Training",
    description:
      "Intensive leadership development program for senior executives focusing on strategic thinking and operational excellence.",
    location: "United States",
    format: "In-Person",
    targetAudience: "Senior Executives",
  },
  {
    id: "2",
    title: "Public Sector Reform Strategy",
    category: "Custom Programs",
    description:
      "Tailored program designed to address specific institutional challenges and reform objectives.",
    location: "Global Delivery",
    format: "Hybrid",
    targetAudience: "Government Officials",
  },
  {
    id: "3",
    title: "Institutional Shadowing Fellowship",
    category: "Fellowships",
    description:
      "Extended program for senior executives to observe and learn from leading US institutions.",
    location: "United States",
    format: "Immersive",
    targetAudience: "Senior Executives",
  },
  {
    id: "4",
    title: "Healthcare Systems Study Tour",
    category: "Fellowships",
    description:
      "Site visits to premier healthcare facilities to observe operational excellence and innovation.",
    location: "United States",
    format: "Study Tour",
    targetAudience: "Healthcare Leaders",
  },
  {
    id: "5",
    title: "Digital Transformation Executive Course",
    category: "Executive Training",
    description:
      "Advanced program covering digital governance, innovation, and technology integration in public services.",
    location: "United States",
    format: "In-Person",
    targetAudience: "IT Executives",
  },
  {
    id: "6",
    title: "Ministry Capacity Building Program",
    category: "Custom Programs",
    description:
      "Comprehensive training program tailored to strengthen ministry operations and service delivery.",
    location: "Global Delivery",
    format: "Hybrid",
    targetAudience: "Ministry Officials",
  },
  {
    id: "7",
    title: "Institutional Performance Diagnostic",
    category: "Advisory Services",
    description:
      "Comprehensive assessment and strategic recommendations for organizational improvement.",
    location: "Global Delivery",
    format: "Consulting",
    targetAudience: "Organizational Leaders",
  },
  {
    id: "8",
    title: "Global Efficiency Summit",
    category: "Knowledge Exchange",
    description:
      "Annual conference bringing together leaders from around the world to share best practices.",
    location: "United States",
    format: "Conference",
    targetAudience: "Global Leaders",
  },
  {
    id: "9",
    title: "Operational Excellence Workshop",
    category: "Executive Training",
    description:
      "Hands-on workshop focusing on process optimization and efficiency improvements.",
    location: "United States",
    format: "In-Person",
    targetAudience: "Operations Managers",
  },
];

const categories: Category[] = [
  "All",
  "Executive Training",
  "Custom Programs",
  "Fellowships",
  "Advisory Services",
  "Knowledge Exchange",
];

export default function ProgramsCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = mockPrograms.filter((program) => {
    const matchesCategory =
      activeCategory === "All" || program.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Section className="bg-white py-20 md:py-32">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
          Programs & Services Portfolio
        </h1>
        <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto mb-8">
          Comprehensive solutions for leadership effectiveness, operational
          efficiency, and institutional reform
        </p>

        {/* Search/Filter Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-DEFAULT" size={20} />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-primary-200 focus:border-primary-900 focus:ring-2 focus:ring-primary-900/20 bg-white text-primary-900 placeholder-secondary-DEFAULT"
            />
          </div>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base min-h-[44px] ${
              activeCategory === category
                ? "bg-primary-900 text-white shadow-lg scale-105"
                : "bg-primary-50 text-primary-900 hover:bg-primary-100 border border-primary-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Program Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + searchQuery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-primary-200 flex flex-col group"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-900 text-xs font-semibold rounded-full">
                    {program.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-700 transition-colors">
                  {program.title}
                </h3>

                {/* Description - Truncated to 2 lines */}
                <p className="text-secondary-DEFAULT text-sm mb-4 flex-grow line-clamp-2">
                  {program.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-primary-200">
                  <div className="flex items-center text-sm text-secondary-DEFAULT">
                    <MapPin className="mr-2" size={16} />
                    <span>{program.location}</span>
                  </div>
                </div>

                {/* View Details Link */}
                <a
                  href={`/programs/${program.id}`}
                  className="mt-4 text-accent-700 hover:text-accent-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform"
                >
                  View Details →
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredPrograms.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-secondary-DEFAULT text-lg">
            No programs found matching your criteria.
          </p>
        </motion.div>
      )}
    </Section>
  );
}
