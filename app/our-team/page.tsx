"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";

const leadership = [
  {
    name: "Leadership Team Member",
    title: "Executive Director",
    bio: "Leading GEN's mission to strengthen institutional performance globally through experiential learning and strategic partnerships.",
    placeholder: "LK",
  },
  {
    name: "Leadership Team Member",
    title: "Program Director",
    bio: "Designing and delivering capacity-building programs that connect global leaders with US best practices.",
    placeholder: "PD",
  },
  {
    name: "Leadership Team Member",
    title: "Consulting Director",
    bio: "Providing institutional consulting services that drive measurable performance improvements.",
    placeholder: "CD",
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
            Meet the people driving GEN&apos;s mission to strengthen institutional
            performance worldwide.
          </p>
        </motion.div>
      </Section>

      {/* Leadership Team */}
      <Section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-8"
          >
            Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((member, index) => (
              <motion.div
                key={member.placeholder}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-primary-50 rounded-lg p-6 border border-primary-200 text-center"
              >
                <div className="w-20 h-20 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-900 text-xl font-bold">
                    {member.placeholder}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-700 font-semibold text-sm mb-2">
                  {member.title}
                </p>
                <p className="text-secondary-DEFAULT text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}
