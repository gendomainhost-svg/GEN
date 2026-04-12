"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import { User, ArrowRight } from "lucide-react";
import Link from "next/link";

const leadership = [
  {
    name: "Godwin Honu",
    title: "Founder & Principal",
    bio: "Godwin Honu is the founder and principal of Global Efficiency Network (GEN). With a deep commitment to strengthening institutional performance globally, he established GEN to bridge the gap between world-class operational practices and the organizations that need them most. His vision drives GEN's mission to connect institutions and professionals worldwide with high-standard learning, expertise, and operational practices drawn from the United States and beyond.",
    placeholder: "GH",
    featured: true,
  },
  {
    name: "Program Director",
    title: "Program Director",
    bio: "Designing and delivering capacity-building programs that connect global leaders with U.S. best practices through immersive training, executive development, and experiential learning formats.",
    placeholder: "PD",
    featured: false,
  },
  {
    name: "Consulting Director",
    title: "Consulting Director",
    bio: "Providing institutional consulting and advisory services that drive measurable performance improvements across organizational diagnostics, service delivery, and operational efficiency.",
    placeholder: "CD",
    featured: false,
  },
];

export default function OurTeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Section className="bg-primary-900 text-white pt-28 pb-12 md:pt-32 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">
            Our Team
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Meet the people driving GEN&apos;s mission to strengthen
            institutional performance worldwide.
          </p>
        </motion.div>
      </Section>

      {/* Founder Spotlight */}
      <Section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-8"
          >
            Founder
          </motion.h2>

          {/* Godwin Honu — Featured Founder Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 md:p-10 border-2 border-primary-200 shadow-lg mb-12"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-28 h-28 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                <span className="text-white text-3xl font-bold">GH</span>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-1">
                  Godwin Honu
                </h3>
                <p className="text-accent-700 font-semibold mb-4">
                  Founder &amp; Principal
                </p>
                <p className="text-secondary-DEFAULT leading-relaxed text-base md:text-lg">
                  Godwin Honu is the founder and principal of Global Efficiency
                  Network (GEN). With a deep commitment to strengthening
                  institutional performance globally, he established GEN to
                  bridge the gap between world-class operational practices and
                  the organizations that need them most. His vision drives
                  GEN&apos;s mission to connect institutions and professionals
                  worldwide with high-standard learning, expertise, and
                  operational practices drawn from the United States and beyond.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold">
                    Institutional Reform
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold">
                    Capacity Building
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold">
                    Experiential Learning
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold">
                    Global Partnerships
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Leadership */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-8"
          >
            Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership
              .filter((m) => !m.featured)
              .map((member, index) => (
                <motion.div
                  key={member.placeholder}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-primary-50 rounded-lg p-6 border border-primary-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-900 text-lg font-bold">
                        {member.placeholder}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-primary-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary-700 font-semibold text-sm mb-2">
                        {member.title}
                      </p>
                      <p className="text-secondary-DEFAULT text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </Section>

      {/* Clients & Beneficiaries */}
      <Section className="py-16 md:py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Who We Serve
            </h2>
            <p className="text-secondary-DEFAULT text-base md:text-lg leading-relaxed">
              GEN works with a broad range of organizations. Our programs are
              designed for institutions that serve large and diverse populations
              and seek measurable performance improvement.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Government ministries, agencies, and public institutions",
              "Legislative and oversight bodies",
              "Service-oriented private organizations",
              "Financial institutions and infrastructure operators",
              "Manufacturing and logistics organizations",
              "NGOs and international institutions",
            ].map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="bg-white rounded-lg p-4 border border-primary-200 flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-accent-700 rounded-full flex-shrink-0" />
                <span className="text-primary-900 text-sm font-medium">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Work With Us
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            GEN welcomes engagement from institutions, partners, and
            professionals worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
          >
            Contact GEN
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}
