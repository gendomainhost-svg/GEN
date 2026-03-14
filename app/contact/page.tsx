"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
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
            Contact GEN
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you find the right
            program or consulting solution.
          </p>
        </motion.div>
      </Section>

      {/* Contact Information & Form Section */}
      <Section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/images/CONTACT.png"
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:geninquirer@gmail.com"
                      className="text-secondary-DEFAULT hover:text-accent-700 transition-colors"
                    >
                      geninquirer@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">
                      Headquarters
                    </h3>
                    <p className="text-secondary-DEFAULT">
                      Global Efficiency Network, LLC<br />
                      9340 Helena Rd STE F - 111, Birmingham, AL 35244-1747
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-200">
                <h3 className="font-semibold text-primary-900 mb-3">
                  Ways to Engage
                </h3>
                <ul className="space-y-2 text-sm text-secondary-DEFAULT">
                  <li>• Apply for an open-enrollment program</li>
                  <li>• Request a commissioned or customized program</li>
                  <li>• Engage GEN for consulting or advisory services</li>
                  <li>• Explore partnership opportunities</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-2xl border border-primary-200">
                <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8">
                  Send Us a Message
                </h2>
                <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
              <ContactForm />
            </Suspense>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Footer />
      <CookieBanner />
    </main>
  );
}
