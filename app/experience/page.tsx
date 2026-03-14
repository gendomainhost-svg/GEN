"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import {
  Eye,
  Users,
  Target,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function ExperiencePage() {
  const methodSteps = [
    {
      step: 1,
      title: "Observation",
      description: "Site visits to US facilities to observe operational excellence in real-world settings",
      icon: Eye,
    },
    {
      step: 2,
      title: "Engagement",
      description: "Shadowing practitioners and engaging directly with US institutions and professionals",
      icon: Users,
    },
    {
      step: 3,
      title: "Adaptation",
      description: "Workshops to apply lessons learned and adapt proven practices to your home context",
      icon: Target,
    },
  ];

  const formats = [
    {
      title: "Institutional Shadowing",
      description:
        "Direct observation of operational practices and decision-making processes",
      icon: Eye,
    },
    {
      title: "Site Visits",
      description:
        "Guided tours of US infrastructure, agencies, and service delivery facilities",
      icon: BookOpen,
    },
    {
      title: "Peer Exchange",
      description:
        "Structured dialogue sessions with peers from similar institutions",
      icon: Users,
    },
    {
      title: "Fellowships",
      description:
        "Extended immersion programs combining shadowing, mentorship, and learning",
      icon: Target,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Section className="bg-primary-900 text-white pt-28 md:pt-32 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">
            Learning Through Exposure
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">
            Moving beyond theory to observe real systems in action
          </p>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Experiential learning is central to GEN's model. Participants engage
            with real institutions, professionals, and systems to gain insights
            that classroom instruction alone cannot provide.
          </p>
        </motion.div>
      </Section>

      {/* The GEN Method */}
      <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            The GEN Method
          </h2>
          <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
            A structured approach to experiential learning that transforms
            observation into actionable institutional improvement
          </p>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-accent-500 to-primary-300 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {methodSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Point */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-accent-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent-700/20 rounded-full -z-10" />
                  </div>

                  {/* Step Number */}
                  <div className="text-center mb-4">
                    <span className="inline-block w-10 h-10 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-secondary-DEFAULT leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section className="py-16 md:py-20 bg-primary-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <blockquote className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-l-4 border-accent-700">
            <p className="text-2xl md:text-3xl font-serif text-primary-900 italic leading-relaxed mb-6">
              "Participants engage directly with U.S. institutions to observe,
              learn, and adapt proven practices to their own operational
              contexts."
            </p>
            <footer className="text-secondary-DEFAULT font-medium">
              — Global Efficiency Network Approach
            </footer>
          </blockquote>
        </motion.div>
      </Section>

      {/* Format Grid */}
      <Section className="py-16 md:py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Experiential Formats
          </h2>
          <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
            These experiences enable participants to translate observed
            practices into actionable improvements within their own
            institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-50 rounded-xl p-8 border-2 border-primary-200 hover:border-accent-700 transition-all shadow-md hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-accent-700" size={28} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                      {format.title}
                    </h3>
                    <p className="text-secondary-DEFAULT leading-relaxed">
                      {format.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="py-16 md:py-20 bg-primary-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Why Experiential Learning Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Real-world context and application",
            "Direct access to practitioners and leaders",
            "Practical insights from operational environments",
            "Adaptation frameworks for home contexts",
            "Long-lasting institutional impact",
            "Network building with global peers",
          ].map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-primary-200 shadow-sm"
            >
              <CheckCircle2 className="text-accent-700 flex-shrink-0" size={24} />
              <span className="text-primary-900 font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>
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
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our experiential learning programs and transform observation
            into institutional improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/programs"
              className="inline-flex items-center bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
            >
              Explore Programs
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}
