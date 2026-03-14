"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import { BookOpen, Briefcase, Globe2, Target } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const whyUSA = [
    {
      title: "Mature Institutional Systems",
      description:
        "Well-established frameworks for public administration and governance",
    },
    {
      title: "Advanced Operational Models",
      description:
        "Cutting-edge approaches to organizational management and efficiency",
    },
    {
      title: "Diverse Service Delivery Frameworks",
      description:
        "Varied models for delivering services across different sectors",
    },
    {
      title: "Practitioner-Led Best Practices",
      description:
        "Real-world expertise from active professionals and leaders",
    },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Practical Exposure",
      description: "Rather than abstract theory",
    },
    {
      icon: Briefcase,
      title: "Practitioner-Led",
      description: "Not only instructors",
    },
    {
      icon: Globe2,
      title: "Cross-Sector Exchange",
      description: "Knowledge sharing across industries",
    },
    {
      icon: Target,
      title: "Adaptation",
      description: "Not replication, of best practices",
    },
  ];

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
            About GEN
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            An institutional learning and consulting platform dedicated to
            strengthening organizational performance across sectors and regions.
          </p>
        </motion.div>
      </Section>

      {/* Who We Are */}
      <Section className="py-16 md:py-20 bg-primary-50/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-6">
            Who We Are
          </h2>
          <p className="text-secondary-DEFAULT leading-relaxed mb-4">
            Global Efficiency Network (GEN) is an institutional learning and
            consulting platform dedicated to strengthening organizational
            performance across sectors and regions. GEN was established to meet
            the growing demand for practical, exposure-based learning that
            improves how institutions lead, operate, and deliver services.
          </p>
          <p className="text-secondary-DEFAULT leading-relaxed">
            While GEN originates from the United States, its work is global in
            outlook and application.
          </p>
        </motion.div>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-16 md:py-20 bg-white border-b border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 rounded-xl p-6 md:p-8 border border-primary-200"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Our Mission
              </h2>
              <p className="text-secondary-DEFAULT leading-relaxed">
                To strengthen institutional performance and service delivery by
                connecting organizations and professionals to high-standard
                learning, expertise, and operational practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary-900 text-white rounded-xl p-6 md:p-8 border border-primary-700"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-white/90 leading-relaxed text-lg">
                A global ecosystem of efficient, accountable, and high-performing
                institutions delivering tangible value to the people and
                communities they serve.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Our Philosophy */}
      <Section className="py-16 md:py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-2">
              Our Philosophy
            </h2>
            <p className="text-secondary-DEFAULT max-w-2xl">
              GEN believes that sustainable institutional improvement is achieved through:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-lg p-5 border border-primary-200"
                >
                  <div className="w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="text-primary-700" size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-secondary-DEFAULT text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section className="py-16 md:py-20 bg-white border-t border-primary-100">
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
                <h3 className="font-serif text-lg font-bold text-primary-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-accent-700 font-semibold text-sm mb-2">
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

      {/* Why the United States */}
      <Section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <Image
            src="/images/WHYUSA.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-3">
              Why the United States
            </h2>
            <p className="text-secondary-DEFAULT max-w-2xl">
              The United States offers one of the world&apos;s most advanced ecosystems
              for public administration, service delivery, innovation, and
              organizational management.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUSA.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-primary-50/80 rounded-lg p-6 border border-primary-200 hover:border-primary-300 transition-colors"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="text-accent-700" size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-DEFAULT text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-secondary-DEFAULT text-sm"
          >
            GEN also deploys U.S.-based expertise globally when programs are
            delivered outside the United States.
          </motion.p>
        </div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}
