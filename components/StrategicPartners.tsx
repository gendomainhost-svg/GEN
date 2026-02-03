"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, Shield } from "lucide-react";
import Section from "./Section";

const partnerTypes = [
  { name: "University Partner", icon: GraduationCap, color: "text-blue-600" },
  { name: "Tech Provider", icon: Building2, color: "text-green-600" },
  { name: "Gov Agency", icon: Shield, color: "text-purple-600" },
  { name: "University Partner", icon: GraduationCap, color: "text-blue-600" },
  { name: "Tech Provider", icon: Building2, color: "text-green-600" },
  { name: "Gov Agency", icon: Shield, color: "text-purple-600" },
  { name: "University Partner", icon: GraduationCap, color: "text-blue-600" },
  { name: "Tech Provider", icon: Building2, color: "text-green-600" },
];

export default function StrategicPartners() {
  return (
    <Section className="bg-white py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Ecosystem Connectivity
        </h2>
        <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto">
          Collaborating with universities, government agencies, and technology
          providers to deliver high-quality solutions
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
          Become a Partner Institution
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
