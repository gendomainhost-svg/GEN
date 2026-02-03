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

      {/* Hero Section */}
      <Section className="bg-primary-900 text-white pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            About GEN
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            An institutional learning and consulting platform dedicated to
            strengthening organizational performance across sectors and regions
          </p>
        </motion.div>
      </Section>

      {/* Who We Are */}
      <Section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-primary-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-secondary-DEFAULT leading-relaxed mb-4">
            Global Efficiency Network (GEN) is an institutional learning and
            consulting platform dedicated to strengthening organizational
            performance across sectors and regions. GEN was established to meet
            the growing demand for practical, exposure-based learning that
            improves how institutions lead, operate, and deliver services.
          </p>
          <p className="text-lg text-secondary-DEFAULT leading-relaxed">
            While GEN originates from the United States, its work is global in
            outlook and application.
          </p>
        </motion.div>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-12 border border-primary-200"
          >
            <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-secondary-DEFAULT leading-relaxed">
              To strengthen institutional performance and service delivery by
              connecting organizations and professionals to high-standard
              learning, expertise, and operational practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-900 text-white rounded-xl p-8 md:p-12 shadow-lg border-2 border-accent-700"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Vision
            </h2>
            <p className="text-2xl md:text-3xl leading-relaxed text-white/90">
              A global ecosystem of efficient, accountable, and high-performing
              institutions delivering tangible value to the people and
              communities they serve.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Why the United States */}
      <Section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/images/WHYUSA.png"
            alt="Why USA"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Why the United States
            </h2>
            <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
              The United States offers one of the world's most advanced ecosystems
              for public administration, service delivery, innovation, and
              organizational management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {whyUSA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border-2 border-primary-200 hover:border-accent-700 transition-all shadow-md hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-accent-700" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3">
                {item.title}
              </h3>
              <p className="text-secondary-DEFAULT leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 text-lg text-secondary-DEFAULT"
          >
            GEN also deploys U.S.-based expertise globally when programs are
            delivered outside the United States.
          </motion.p>
        </div>
      </Section>

      {/* Our Philosophy / Values */}
      <Section className="py-20 bg-primary-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
            GEN believes that sustainable institutional improvement is achieved
            through:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-primary-200"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary-700" size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary-DEFAULT text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Leadership Team Placeholder */}
      <Section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Leadership Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leadership.map((member, index) => (
            <motion.div
              key={member.placeholder}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-50 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-primary-200"
            >
              <div className="w-32 h-32 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-900 text-3xl font-bold">
                  {member.placeholder}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-900 mb-1">
                {member.name}
              </h3>
              <p className="text-accent-700 font-semibold mb-3">
                {member.title}
              </p>
              <p className="text-secondary-DEFAULT text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}
