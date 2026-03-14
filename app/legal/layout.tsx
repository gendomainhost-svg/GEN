"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const legalPages = [
  { name: "Terms of Use", href: "/legal/terms" },
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Disclaimer", href: "/legal/disclaimer" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                  Legal Documents
                </h2>
                <nav className="space-y-2">
                  {legalPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`block px-4 py-3 rounded-lg transition-all ${
                        pathname === page.href
                          ? "bg-primary-900 text-white font-semibold"
                          : "text-secondary-DEFAULT hover:bg-primary-50 hover:text-primary-900"
                      }`}
                    >
                      {page.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg max-w-none">
                {children}
              </div>
            </motion.article>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  );
}
