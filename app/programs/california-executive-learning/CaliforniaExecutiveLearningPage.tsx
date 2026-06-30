"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Building2,
  Handshake,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import ExpressionOfInterestForm from "@/components/programs/ExpressionOfInterestForm";
import { FLAGSHIP_PROGRAM } from "@/app/data/flagshipProgram";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start text-secondary-DEFAULT">
          <div className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaliforniaExecutiveLearningPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="section-label mb-6">Flagship Program</span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary-900">
            {FLAGSHIP_PROGRAM.title}
          </h1>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-secondary-DEFAULT sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <Calendar className="text-accent-700" size={20} />
              <span className="font-medium">
                Proposed Program Dates: {FLAGSHIP_PROGRAM.dates}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-accent-700" size={20} />
              <span className="font-medium">{FLAGSHIP_PROGRAM.location}</span>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-secondary-DEFAULT">
            {FLAGSHIP_PROGRAM.heroDescription}
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-accent-200 bg-accent-50/60 px-6 py-5 text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-800">
              Expressions of Interest Are Now Open
            </p>
            <p className="mt-3 text-secondary-DEFAULT leading-relaxed">
              {FLAGSHIP_PROGRAM.eoiNotice}
            </p>
          </div>

          <a
            href="#expression-of-interest"
            className="mt-10 inline-flex items-center rounded-lg bg-accent-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-xl"
          >
            Expression of Interest
            <ArrowRight className="ml-2" size={20} />
          </a>
        </motion.div>
      </Section>

      <Section className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            About the Program
          </h2>
          <p className="text-lg leading-relaxed text-secondary-DEFAULT">
            {FLAGSHIP_PROGRAM.about}
          </p>
        </motion.div>
      </Section>

      <Section className="bg-primary-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900">
              Learning Themes
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLAGSHIP_PROGRAM.learningThemes.map((theme, index) => (
              <motion.div
                key={theme}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-primary-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                  <Sparkles className="text-primary-700" size={20} />
                </div>
                <p className="font-semibold text-primary-900">{theme}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
                <Users className="text-accent-700" size={24} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900">
                Who Should Participate
              </h2>
            </div>
            <BulletList items={FLAGSHIP_PROGRAM.participants} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
                <BookOpen className="text-accent-700" size={24} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900">
                Learning Experience
              </h2>
            </div>
            <BulletList items={FLAGSHIP_PROGRAM.learningExperience} />
          </motion.div>
        </div>
      </Section>

      <Section className="bg-primary-50 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-xl border border-primary-200 bg-white p-8 md:p-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
              <Handshake className="text-primary-700" size={24} />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900">
              Learning Partners
            </h2>
          </div>
          <p className="leading-relaxed text-secondary-DEFAULT">
            {FLAGSHIP_PROGRAM.learningPartners}
          </p>
        </motion.div>
      </Section>

      <Section id="expression-of-interest" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="section-label mb-4">Expression of Interest</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900">
              Register Your Interest
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-secondary-DEFAULT">
              Interested individuals and institutions are invited to submit an
              Expression of Interest. Please provide your contact details, role,
              and country so we can share program updates, registration information, participation requirements, fees, and
              logistics as they become available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="rounded-xl border border-primary-200 bg-primary-50 p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Building2 className="text-accent-700" size={22} />
                  <h3 className="font-serif text-xl font-bold text-primary-900">
                    You Will Receive
                  </h3>
                </div>
                <BulletList items={FLAGSHIP_PROGRAM.eoiBenefits} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-primary-200 bg-white p-6 shadow-md md:p-8 lg:col-span-3"
            >
              <ExpressionOfInterestForm />
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="cta-band">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Explore Other GEN Programs
          </h2>
          <p className="mb-8 text-secondary-DEFAULT">
            View open-enrollment and commissioned program pathways across GEN&apos;s
            institutional learning portfolio.
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center rounded-lg border border-primary-300 bg-white px-6 py-3 font-semibold text-primary-900 transition-colors hover:border-primary-400 hover:bg-primary-50"
          >
            View All Programs
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}
