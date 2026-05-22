"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Shield,
  Briefcase,
  Cpu,
} from "lucide-react";
import Section from "./Section";

const partnerTypes = [
  {
    name: "Universities & Academic Institutions",
    icon: GraduationCap,
    color: "text-accent-700",
  },
  {
    name: "Government Agencies & Public Institutions",
    icon: Shield,
    color: "text-primary-700",
  },
  {
    name: "Service-Oriented Private Organizations",
    icon: Building2,
    color: "text-accent-600",
  },
  {
    name: "Professional Firms & Consultants",
    icon: Briefcase,
    color: "text-primary-600",
  },
  {
    name: "Technology & Solution Providers",
    icon: Cpu,
    color: "text-accent-700",
  },
  {
    name: "Universities & Academic Institutions",
    icon: GraduationCap,
    color: "text-accent-700",
  },
  {
    name: "Government Agencies & Public Institutions",
    icon: Shield,
    color: "text-primary-700",
  },
  {
    name: "Service-Oriented Private Organizations",
    icon: Building2,
    color: "text-accent-600",
  },
];

export default function StrategicPartners() {
  return (
    <Section className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative text-center mb-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          Networks & Partnerships
        </motion.span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Building Strong Institutional Networks
        </h2>
        <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto">
          GEN collaborates with a diverse range of partners to deliver
          high-quality programs and services. GEN also connects clients with
          service providers whose products and expertise support institutional
          efficiency and service improvement.
        </p>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-8 px-4 md:px-0">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Infinite Scroll Marquee */}
        <div className="flex space-x-8 animate-marquee">
          {/* First Set */}
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-40 md:w-48 h-28 md:h-32 bg-primary-50 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center border border-primary-200 hover:shadow-lg transition-all"
              >
                <Icon className={`${partner.color} mb-2`} size={32} />
                <p className="text-primary-900 font-semibold text-sm text-center">
                  {partner.name}
                </p>
              </motion.div>
            );
          })}
          {/* Duplicate Set for Infinite Scroll */}
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 md:w-48 h-28 md:h-32 bg-primary-50 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center border border-primary-200 hover:shadow-lg transition-all"
              >
                <Icon className={`${partner.color} mb-2`} size={32} />
                <p className="text-primary-900 font-semibold text-sm text-center">
                  {partner.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Join the Network CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <a
          href="/contact"
          className="inline-flex items-center text-primary-900 hover:text-accent-700 font-semibold text-lg transition-colors group"
        >
          Explore Partnership Opportunities
          <ArrowRight
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </a>
      </motion.div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
}
