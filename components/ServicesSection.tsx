"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Target,
  Users,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";
import Section from "./Section";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Training & Executive Development",
    description: "Immersive programs for institutions and professionals worldwide.",
    icon: GraduationCap,
    size: "large" as const,
    highlight: false,
  },
  {
    id: 2,
    title: "Institutional Consulting",
    description: "Advisory services for efficiency and service delivery.",
    icon: Briefcase,
    size: "medium" as const,
    highlight: true,
  },
  {
    id: 3,
    title: "Experiential Learning",
    description: "Fellowships, shadowing, and study tours in real environments.",
    icon: Target,
    size: "medium" as const,
    highlight: false,
  },
  {
    id: 4,
    title: "Knowledge Exchange",
    description: "Conferences, seminars, and peer forums.",
    icon: Users,
    size: "medium" as const,
    highlight: false,
  },
  {
    id: 5,
    title: "Networks & Partnerships",
    description: "Connecting institutions with partners for improvement.",
    icon: Globe,
    size: "medium" as const,
    highlight: false,
  },
  {
    id: 6,
    title: "Recognition & Excellence",
    description: "Honoring excellence in efficiency and service delivery.",
    icon: Award,
    size: "medium" as const,
    highlight: false,
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section id="services" className="bg-primary-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-2">
          What We Do
        </h2>
        <p className="text-lg text-secondary-DEFAULT max-w-2xl mx-auto">
          Practical, results-focused learning for institutions and organizations.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;
          const isLarge = service.size === "large";
          const colSpan = isLarge ? "md:col-span-2 lg:col-span-2" : "";
          // Ensure large cards stack on mobile
          const mobileColSpan = isLarge ? "" : "";

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`group relative bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-primary-200 hover:border-primary-300 ${
                service.highlight
                  ? "ring-2 ring-accent-700 ring-offset-4 ring-offset-primary-50 bg-gradient-to-br from-white to-accent-50/30"
                  : ""
              } ${colSpan}`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                      service.highlight
                        ? "bg-accent-50 text-accent-700"
                        : "bg-primary-100 text-primary-700"
                    }`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-DEFAULT leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href={
                      service.id === 2
                        ? "/consulting"
                        : "/programs"
                    }
                    className="text-accent-700 font-semibold flex items-center group-hover:translate-x-2 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

