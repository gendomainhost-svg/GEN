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
    description:
      "Design and deliver immersive training and executive development programs for institutions and professionals worldwide.",
    icon: GraduationCap,
    size: "large" as const,
  },
  {
    id: 2,
    title: "Institutional Consulting",
    description:
      "Provide institutional consulting and performance advisory services focused on strengthening efficiency, leadership, and performance.",
    icon: Briefcase,
    size: "medium" as const,
  },
  {
    id: 3,
    title: "Experiential Learning",
    description:
      "Facilitate experiential learning through fellowships, shadowing, and study tours in real institutions and decision-making environments.",
    icon: Target,
    size: "medium" as const,
  },
  {
    id: 4,
    title: "Knowledge Exchange",
    description:
      "Enable knowledge exchange through conferences, seminars, and peer forums for continuous learning and cross-institutional collaboration.",
    icon: Users,
    size: "medium" as const,
  },
  {
    id: 5,
    title: "Networks & Partnerships",
    description:
      "Connect institutions with service providers and technical partners to deliver high-quality programs and services.",
    icon: Globe,
    size: "medium" as const,
  },
  {
    id: 6,
    title: "Recognition & Excellence",
    description:
      "Recognize institutions and leaders demonstrating excellence in efficiency, innovation, accountability, and service delivery.",
    icon: Award,
    size: "medium" as const,
  },
];

export default function ServicesSection() {
  return (
    <Section id="services" className="bg-white dot-pattern py-24 md:py-28 defer-paint">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <span className="section-label mb-4">Our Services</span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-3">
          What We Do
        </h2>
        <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
          GEN serves public institutions, service-oriented private organizations,
          and mission-driven entities seeking practical, results-focused learning
          experiences that translate into measurable institutional improvement.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isLarge = service.size === "large";
          const colSpan = isLarge ? "md:col-span-2 lg:col-span-2" : "";

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={colSpan}
            >
              <div className="group relative card-elevated rounded-2xl p-6 md:p-8 cursor-default h-full md:hover:-translate-y-0.5 md:transition-transform md:duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-primary-100 text-primary-700 group-hover:bg-accent-700 group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent-700/20">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3 group-hover:text-accent-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-secondary-DEFAULT leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link
                      href={
                        service.id === 2
                          ? "/consulting"
                          : service.id === 3
                          ? "/experience"
                          : "/programs"
                      }
                      className="text-accent-700 font-semibold flex items-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-700 to-accent-500 group-hover:w-full transition-all duration-500 rounded-t-xl" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
