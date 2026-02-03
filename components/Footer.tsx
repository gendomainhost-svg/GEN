"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  programs: [
    { name: "Executive Training", href: "#services" },
    { name: "Fellowships", href: "#services" },
    { name: "Client-Specific Programs", href: "#services" },
  ],
  consulting: [
    { name: "Advisory Services", href: "#consulting" },
    { name: "Organizational Diagnostics", href: "#consulting" },
    { name: "Change Management", href: "#consulting" },
  ],
  about: [
    { name: "About GEN", href: "#about" },
    { name: "Our Approach", href: "#about" },
    { name: "Knowledge Exchange", href: "#knowledge" },
  ],
  partners: [
    { name: "Partner With Us", href: "#contact" },
    { name: "Become a Partner", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">GEN</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Global Efficiency Network
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-white/70 text-sm">
                  Headquartered in Alabama, United States
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent-500 flex-shrink-0" size={20} />
                <a
                  href="mailto:info@globalefficiencynetwork.org"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  info@globalefficiencynetwork.org
                </a>
              </div>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Consulting Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Consulting</h4>
            <ul className="space-y-2">
              {footerLinks.consulting.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Partners Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">About</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mb-4 text-white">Partners</h4>
            <ul className="space-y-2">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Email Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="max-w-md">
            <h4 className="font-semibold mb-3">
              Stay updated on global best practices
            </h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="bg-accent-700 hover:bg-accent-600 px-6 py-2 rounded-lg font-medium transition-colors shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Final Positioning Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-white/50 text-sm">
            A trusted global partner for capacity building, consulting, and
            institutional performance improvement.
          </p>
          <p className="text-white/30 text-xs mt-4">
            © {new Date().getFullYear()} Global Efficiency Network. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

