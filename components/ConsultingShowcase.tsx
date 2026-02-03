"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  Building2,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import Section from "./Section";
import Link from "next/link";

const consultingServices = [
  {
    id: 1,
    title: "Organizational Diagnostics & Performance Assessment",
    description:
      "Comprehensive assessment of operational health and efficiency. We analyze your institution's current state, identify bottlenecks, and map opportunities for improvement through data-driven methodologies.",
    icon: Search,
  },
  {
    id: 2,
    title: "Service Delivery Optimization",
    description:
      "Focusing on improving how institutions deliver services to citizens and clients. We help optimize service delivery frameworks, processes, and outcomes for better organizational performance.",
    icon: Building2,
  },
  {
    id: 3,
    title: "Leadership & Governance Advisory",
    description:
      "Strengthening management frameworks and decision-making processes. Our approach enhances accountability, transparency, and effectiveness across all levels of your institution.",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Operational Efficiency & Process Improvement",
    description:
      "Implementation support to ensure results. We provide hands-on guidance throughout the transformation process, helping your team navigate challenges and achieve measurable outcomes through operational improvements.",
    icon: Users,
  },
];

export default function ConsultingShowcase() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <Section id="consulting" className="bg-primary-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Institutional Consulting
        </h2>
        <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
          GEN provides advisory and consulting services focused on strengthening institutional efficiency, leadership, and performance. Our consulting engagements are practical, evidence-based, and aligned with each client's institutional realities.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-accent-50 border-l-4 border-accent-700 p-6 rounded-r-lg">
          <p className="text-primary-900 font-medium">
            <strong>Core Consulting Areas:</strong> GEN's consulting services cover organizational diagnostics, service delivery optimization, leadership and governance advisory, operational efficiency, and strategy and institutional reform support.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {consultingServices.map((service, index) => {
          const Icon = service.icon;
          const isOpen = openAccordion === service.id;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(service.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-primary-50 transition-colors text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-accent-700" size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-900">
                    {service.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`text-primary-700 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-secondary-DEFAULT leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          href="#contact"
          className="inline-flex items-center bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
        >
          Request a Diagnostic Assessment
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </motion.div>
    </Section>
  );
}

