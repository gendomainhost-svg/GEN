"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import ProgramCard from "@/components/ProgramCard";
import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Briefcase,
  GraduationCap,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProgramsByCategory } from "@/app/data/programs";

export default function ProgramsPage() {
  const openPrograms = getProgramsByCategory("Open");
  const commissionedPrograms = getProgramsByCategory("Commissioned");

  const programFormats = [
    {
      icon: GraduationCap,
      title: "Executive Short Courses",
      description: "Intensive leadership and management programs",
    },
    {
      icon: BookOpen,
      title: "Study Tours",
      description: "Sector-specific immersive learning experiences",
    },
    {
      icon: Users,
      title: "Fellowships",
      description: "Extended professional development programs",
    },
    {
      icon: Eye,
      title: "Shadowing",
      description: "Direct observation of operational excellence",
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
            Program Pathways
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Select the learning model that fits your needs
          </p>
        </motion.div>
      </Section>

      {/* Open / Commissioned + formats + program lists */}
      <Section className="py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Open Enrollment Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 hover:border-primary-400 transition-all shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="text-accent-700" size={32} />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary-900">
                  Open Enrollment
                </h2>
                <p className="text-secondary-DEFAULT mt-1">
                  Individual Leaders & Officials
                </p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-primary-900">
                  <strong>Fixed Calendar:</strong> Pre-structured programs at
                  scheduled dates
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-primary-900">
                  <strong>US-Based Venues:</strong> Programs delivered primarily
                  in the United States
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-primary-900">
                  <strong>Networking:</strong> Connect with peers from around
                  the world
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-primary-900">
                  <strong>Multiple Formats:</strong> Short courses, study tours,
                  and fellowships
                </span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md"
            >
              <Calendar className="mr-2" size={20} />
              View Calendar
            </Link>
          </motion.div>

          {/* Commissioned & Custom Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-primary-900 text-white rounded-xl p-8 md:p-12 border-2 border-primary-800 hover:border-accent-700 transition-all shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image
                src="/images/COMPRO.png"
                alt="Commissioned Programs"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent-700 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="text-white" size={32} />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold">
                  Commissioned & Custom
                </h2>
                <p className="text-white/70 mt-1">
                  Institutions & Ministries
                </p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>
                  <strong>Bespoke Curriculum:</strong> Tailored to your
                  institution's specific objectives
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>
                  <strong>Flexible Location:</strong> Delivered at client
                  location or in the US
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>
                  <strong>Team Training:</strong> Cohort-based programs for
                  organizational capacity
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>
                  <strong>Needs Assessment:</strong> Comprehensive scoping and
                  evaluation process
                </span>
              </li>
            </ul>

              <Link
                href="/contact"
                className="inline-flex items-center bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md border-2 border-white/20 hover:border-white/40"
              >
                <Briefcase className="mr-2" size={20} />
                Request Proposal
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Program Formats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 text-center mb-10">
            Program Formats
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-primary-200 text-center"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-700" size={28} />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-primary-900 mb-2">
                    {format.title}
                  </h4>
                  <p className="text-secondary-DEFAULT text-sm">
                    {format.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Program lists */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 text-center mb-10">
            Open Enrollment Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {openPrograms.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>

          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 text-center mb-10 mt-16">
            Commissioned & Custom Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commissionedPrograms.map((program, index) => (
              <ProgramCard
                key={program.id}
                program={program}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}