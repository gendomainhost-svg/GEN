"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import TeamPortrait from "@/components/team/TeamPortrait";
import TeamCard from "@/components/team/TeamCard";
import type { TeamMember } from "@/app/data/team";

interface TeamMemberClientProps {
  member: TeamMember;
  others: TeamMember[];
}

export default function TeamMemberClient({
  member,
  others,
}: TeamMemberClientProps) {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <Section className="bg-primary-900 text-white pt-36 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/our-team"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Our Team
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">
              {member.name}
            </h1>
            <p className="text-accent-300 font-semibold text-lg">
              {member.title}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Profile body */}
      <Section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1"
            >
              <TeamPortrait
                initials={member.initials}
                name={member.name}
                imageSrc={member.imageSrc}
                size="lg"
              />
              {member.expertise && member.expertise.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-wider text-secondary-DEFAULT font-semibold mb-3">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-5">
                About
              </h2>
              <div className="space-y-4 text-secondary-DEFAULT leading-relaxed text-base md:text-lg">
                {member.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {member.education && member.education.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="text-accent-700" size={22} />
                    Education
                  </h3>
                  <ul className="space-y-2">
                    {member.education.map((line, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-secondary-DEFAULT"
                      >
                        <span className="mt-2 w-1.5 h-1.5 bg-accent-700 rounded-full flex-shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* More from our team */}
      {others.length > 0 && (
        <Section className="py-12 md:py-16 bg-primary-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900">
                More from our team
              </h2>
              <Link
                href="/our-team"
                className="text-accent-700 hover:text-accent-600 text-sm font-semibold"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((m, idx) => (
                <motion.div
                  key={m.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <TeamCard member={m} />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Footer />
      <CookieBanner />
    </main>
  );
}
