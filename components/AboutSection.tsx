"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, Globe2, CheckCircle2 } from "lucide-react";
import Section from "./Section";

const features = [
  {
    icon: BookOpen,
    title: "Experiential Learning",
    description: "Practical exposure to real institutions, practitioners, systems, and decision-making environments",
  },
  {
    icon: Briefcase,
    title: "US-Based Expertise",
    description: "Leveraging the depth, innovation, and operational excellence of the United States",
  },
  {
    icon: Globe2,
    title: "Global Application",
    description: "Connecting organizations worldwide with high-standard learning, expertise, and operational practices",
  },
];

const benefits = [
  "Practical exposure rather than abstract theory",
  "Learning from practitioners, not only instructors",
  "Cross-sector knowledge exchange",
  "Adaptation, not replication, of best practices",
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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
    <Section id="about" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Our Approach
        </h2>
        <p className="text-lg md:text-xl text-secondary-DEFAULT max-w-3xl mx-auto leading-relaxed">
          GEN's approach is grounded in experiential learning. Rather than theory-heavy instruction, our programs emphasize exposure to real institutions, practitioners, systems, and decision-making environments. Participants engage directly with U.S. institutions and professionals to observe, learn, and adapt proven practices to their own operational contexts.
        </p>
      </motion.div>

      {/* Bridge Concept Visualization */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon className="text-primary-700" size={40} />
                </div>
                {index < features.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent" />
                )}
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-DEFAULT">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bridge Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-xl md:text-2xl font-serif text-primary-900 font-semibold italic">
          Our Philosophy: Sustainable institutional improvement through practical exposure, practitioner-led learning, and cross-sector knowledge exchange
        </p>
      </motion.div>

      {/* Benefits Checklist */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 bg-primary-50 p-4 rounded-lg border border-primary-100"
            >
              <CheckCircle2 className="text-accent-700 flex-shrink-0" size={24} />
              <span className="text-primary-900 font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

