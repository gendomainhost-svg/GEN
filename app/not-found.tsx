"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-[120px] md:text-[180px] font-serif font-bold text-primary-100 leading-none">
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-secondary-DEFAULT max-w-2xl mx-auto leading-relaxed">
                The resource you are looking for might have been moved or is
                restricted. Please use the navigation menu to find what you need,
                or return to the homepage.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md"
              >
                <Home className="mr-2" size={20} />
                Return Home
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center bg-accent-700 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md"
              >
                <Calendar className="mr-2" size={20} />
                View Program Calendar
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-16 pt-8 border-t border-primary-200">
              <p className="text-secondary-DEFAULT mb-4">
                You may also be looking for:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about"
                  className="text-accent-700 hover:text-accent-600 underline font-medium"
                >
                  About GEN
                </Link>
                <Link
                  href="/programs"
                  className="text-accent-700 hover:text-accent-600 underline font-medium"
                >
                  Programs
                </Link>
                <Link
                  href="/consulting"
                  className="text-accent-700 hover:text-accent-600 underline font-medium"
                >
                  Consulting Services
                </Link>
                <Link
                  href="/contact"
                  className="text-accent-700 hover:text-accent-600 underline font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
