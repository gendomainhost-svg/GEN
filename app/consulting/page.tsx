"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import {
  ChevronDown,
  Search,
  Building2,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const consultingServices = [
  {
    id: 1,
    title: "Organizational Diagnostics",
    icon: Search,
    description:
      "Comprehensive assessment of operational health and efficiency. We analyze your institution's current state, identify bottlenecks, and map opportunities for improvement through data-driven methodologies.",
    details: [
      "Performance assessment and gap analysis",
      "Operational health evaluation",
      "Stakeholder interviews and surveys",
      "Data-driven diagnostics",
      "Strategic recommendations report",
    ],
  },
  {
    id: 2,
    title: "Service Delivery Optimization",
    icon: Building2,
    description:
      "Focusing on improving how institutions deliver services to citizens and clients. We help optimize service delivery frameworks, processes, and outcomes for better organizational performance.",
    details: [
      "Improving citizen-facing processes",
      "Service delivery framework design",
      "Process mapping and optimization",
      "Customer experience enhancement",
      "Performance metrics development",
    ],
  },
  {
    id: 3,
    title: "Leadership & Governance Advisory",
    icon: TrendingUp,
    description:
      "Strengthening management frameworks and decision-making processes. Our approach enhances accountability, transparency, and effectiveness across all levels of your institution.",
    details: [
      "Governance structures and decision frameworks",
      "Leadership development programs",
      "Accountability systems design",
      "Transparency initiatives",
      "Strategic planning support",
    ],
  },
  {
    id: 4,
    title: "Operational Efficiency & Process Improvement",
    icon: Users,
    description:
      "Implementation support to ensure results. We provide hands-on guidance throughout the transformation process, helping your team navigate challenges and achieve measurable outcomes through operational improvements.",
    details: [
      "Operational efficiency strategies",
      "Process improvement methodologies",
      "Change management support",
      "Implementation roadmaps",
      "Performance monitoring systems",
    ],
  },
];

const engagementProcess = [
  {
    step: 1,
    title: "Needs Assessment",
    description: "Comprehensive evaluation of organizational challenges and objectives",
  },
  {
    step: 2,
    title: "Proposal & Scope",
    description: "Detailed proposal outlining approach, timeline, and deliverables",
  },
  {
    step: 3,
    title: "Deployment",
    description: "On-site or remote delivery (US or client location)",
  },
  {
    step: 4,
    title: "Evaluation",
    description: "Assessment of outcomes and recommendations for continuous improvement",
  },
];

export default function ConsultingPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Section className="bg-primary-900 text-white pt-28 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">
            Institutional Advisory Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            GEN provides advisory and consulting services focused on
            strengthening institutional efficiency, leadership, and
            performance. Our consulting engagements are practical,
            evidence-based, and aligned with each client's institutional
            realities.
          </p>
        </motion.div>
      </Section>

      {/* Service Accordion */}
      <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Core Consulting Areas
          </h2>
          <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
            Comprehensive advisory services tailored to your institution's
            unique challenges and objectives
          </p>
        </motion.div>

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
                className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-primary-200 hover:border-accent-700 transition-all"
              >
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full px-6 py-6 flex items-center justify-between hover:bg-primary-50 transition-colors text-left"
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="w-14 h-14 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent-700" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-primary-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-secondary-DEFAULT leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`text-primary-700 transition-transform flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={28}
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
                      <div className="px-6 pb-6 pt-0 bg-primary-50">
                        <div className="pl-[4.5rem]">
                          <h4 className="font-semibold text-primary-900 mb-4">
                            Service Details:
                          </h4>
                          <ul className="space-y-2">
                            {service.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-secondary-DEFAULT"
                              >
                                <CheckCircle2
                                  className="text-accent-700 flex-shrink-0 mt-1 mr-3"
                                  size={18}
                                />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Engagement Process */}
      <Section className="py-16 md:py-20 bg-primary-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Engagement Process
            </h2>
            <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
              A structured approach to ensuring successful consulting outcomes
            </p>
          </motion.div>

          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-primary-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagementProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-secondary-DEFAULT leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Integration Note */}
      <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-accent-50 border-l-4 border-accent-700 p-8 rounded-r-lg">
            <p className="text-primary-900 leading-relaxed text-lg">
              <strong>Note:</strong> Consulting engagements may be delivered
              independently or integrated with GEN's training programs for
              maximum impact. We also deploy U.S.-based expertise globally when
              programs are delivered outside the United States.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="py-16 md:py-20 bg-primary-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Request a diagnostic assessment and discover how GEN can help
            strengthen your organization's performance.
          </p>
          <Link
            href="/contact?type=institutional"
            className="inline-flex items-center bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
          >
            Request a Diagnostic Assessment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}
