"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import TeamCard from "@/components/team/TeamCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getMembersByCategory } from "@/app/data/team";

export default function OurTeamPage() {
  const founders = getMembersByCategory("founder");
  const leadership = getMembersByCategory("leadership");

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Section className="bg-primary-900 text-white pt-36 pb-12 md:pt-40 md:pb-16">
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

      {/* Founder & Principal */}
      {founders.length > 0 && (
        <Section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-8"
            >
              Founder &amp; Principal
            </motion.h2>

            <div className="space-y-6">
              {founders.map((member, idx) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <TeamCard member={member} variant="featured" />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Leadership Team */}
      {leadership.length > 0 && (
        <Section className="py-16 md:py-20 bg-primary-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-2"
            >
              Leadership Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-secondary-DEFAULT mb-10 max-w-2xl"
            >
              The directors leading GEN&apos;s programs and consulting practice.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((member, idx) => (
                <motion.div
                  key={member.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Clients & Beneficiaries */}
      <Section className="py-16 md:py-20 bg-white">
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
                className="bg-primary-50 rounded-lg p-4 border border-primary-200 flex items-center space-x-3"
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
