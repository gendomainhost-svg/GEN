"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  programs: [
    { name: "Open-Enrollment Programs", href: "/programs" },
    { name: "Commissioned Programs", href: "/programs" },
    { name: "Experiential Learning", href: "/experience" },
  ],
  consulting: [
    { name: "Organizational Diagnostics", href: "/consulting" },
    { name: "Service Delivery Optimization", href: "/consulting" },
    { name: "Leadership & Governance", href: "/consulting" },
    { name: "Operational Efficiency", href: "/consulting" },
  ],
  about: [
    { name: "About GEN", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Knowledge Exchange", href: "/experience" },
  ],
  engage: [
    { name: "Apply for a Program", href: "/programs" },
    { name: "Request Consulting", href: "/contact" },
    { name: "Partnership Inquiry", href: "/contact" },
  ],
  legal: [
    { name: "Terms of Use", href: "/legal/terms" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
  ],
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-700 mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="group inline-flex items-center text-sm text-primary-600 hover:text-accent-700 transition-colors duration-200"
            >
              <span
                className="inline-block h-px w-0 bg-accent-500 transition-all duration-200 group-hover:w-2 group-hover:mr-2"
                aria-hidden
              />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-primary-200 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(254,226,226,0.5),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-primary-900 group-hover:text-accent-700 transition-colors">
                GEN
              </span>
            </Link>
            <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full" />
            <p className="mt-4 text-primary-800 font-medium">
              Global Efficiency Network
            </p>
            <p className="mt-2 text-sm text-secondary-DEFAULT leading-relaxed max-w-sm">
              Advancing institutional performance through experiential learning,
              consulting, and capacity building worldwide.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex gap-3 rounded-xl border border-primary-200 bg-white p-4 shadow-soft">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-secondary-DEFAULT leading-relaxed">
                  Global Efficiency Network, LLC
                  <br />
                  9340 Helena Rd STE F - 111
                  <br />
                  Birmingham, AL 35244-1747
                </p>
              </div>
              <a
                href="mailto:geninquirer@gmail.com"
                className="flex gap-3 rounded-xl border border-primary-200 bg-white p-4 shadow-soft transition-all hover:border-accent-300 hover:shadow-soft-lg group"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-700 group-hover:bg-accent-100">
                  <Mail size={18} />
                </div>
                <span className="text-sm text-secondary-DEFAULT group-hover:text-accent-700 transition-colors self-center">
                  geninquirer@gmail.com
                </span>
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:col-span-5">
            <FooterColumn title="Programs" links={footerLinks.programs} />
            <FooterColumn title="Consulting" links={footerLinks.consulting} />
            <FooterColumn title="About" links={footerLinks.about} />
            <div className="space-y-8">
              <FooterColumn title="Engage" links={footerLinks.engage} />
              <FooterColumn title="Legal" links={footerLinks.legal} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="h-full rounded-2xl border border-accent-200/80 bg-white p-6 md:p-7 shadow-soft-lg">
              <p className="section-label mb-4 text-xs">Newsletter</p>
              <h4 className="font-serif text-xl font-bold text-primary-900 mb-2">
                Stay informed
              </h4>
              <p className="text-sm text-secondary-DEFAULT leading-relaxed mb-6">
                Insights on institutional performance and global best
                practices—delivered to your inbox.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@organization.org"
                  className="w-full rounded-xl border border-primary-200 bg-primary-50/50 px-4 py-3 text-sm text-primary-900 placeholder:text-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-400"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent-700 px-5 py-3 text-sm font-semibold text-white shadow-accent-glow transition-all hover:bg-accent-600"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700 hover:text-accent-600 transition-colors"
              >
                Contact our team
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-200 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-secondary-DEFAULT leading-relaxed max-w-xl">
            A trusted global partner for capacity building, consulting, and
            institutional performance improvement.
          </p>
          <p className="text-xs text-primary-400 md:text-right shrink-0">
            © {new Date().getFullYear()} Global Efficiency Network. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
