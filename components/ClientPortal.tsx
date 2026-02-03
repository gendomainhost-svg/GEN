"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, Shield, ArrowRight } from "lucide-react";
import Section from "./Section";

export default function ClientPortal() {
  const [institutionalId, setInstitutionalId] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { institutionalId, password });
  };

  return (
    <Section className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            GEN Client Workspace
          </h2>
          <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto">
            Secure access for Fellows, Shadowing Participants, and Advisory
            Clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-50 rounded-xl p-8 md:p-12 shadow-lg border border-primary-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary-900">
                  Secure Login
                </h3>
                <p className="text-sm text-secondary-DEFAULT">
                  Access your learning materials
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Institutional ID */}
              <div className="relative">
                <label className="block text-sm font-semibold text-primary-900 mb-2">
                  Institutional ID
                </label>
                <div className="relative">
                  <User
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-secondary-DEFAULT transition-colors ${
                      isFocused === "id" ? "text-primary-900" : ""
                    }`}
                    size={20}
                  />
                  <input
                    type="text"
                    value={institutionalId}
                    onChange={(e) => setInstitutionalId(e.target.value)}
                    onFocus={() => setIsFocused("id")}
                    onBlur={() => setIsFocused(null)}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all duration-300 bg-white ${
                      isFocused === "id"
                        ? "border-primary-900 ring-4 ring-primary-900/20"
                        : "border-primary-300 focus:border-primary-900"
                    }`}
                    placeholder="Enter your institutional ID"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-semibold text-primary-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-secondary-DEFAULT transition-colors ${
                      isFocused === "password" ? "text-primary-900" : ""
                    }`}
                    size={20}
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setIsFocused("password")}
                    onBlur={() => setIsFocused(null)}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all duration-300 bg-white ${
                      isFocused === "password"
                        ? "border-primary-900 ring-4 ring-primary-900/20"
                        : "border-primary-300 focus:border-primary-900"
                    }`}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-900 hover:bg-primary-800 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-h-[44px]"
              >
                Access Workspace
                <ArrowRight className="ml-2" size={20} />
              </button>

              {/* Help Link */}
              <p className="text-center text-sm text-secondary-DEFAULT">
                Need assistance?{" "}
                <a href="/contact" className="text-accent-700 hover:text-accent-600 font-semibold">
                  Contact Support
                </a>
              </p>
            </form>
          </motion.div>

          {/* Right Side - Inspiring Quote/Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900/30"
          >
            <div className="absolute inset-0 bg-primary-900/50" />
            <div className="relative h-full min-h-[400px] flex flex-col items-center justify-center p-8 md:p-12 text-center">
              <div className="mb-6">
                <Shield className="text-accent-500 mx-auto" size={64} />
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                "Capacity building is not about replicating systems, but about
                adapting excellence to context."
              </blockquote>
              <p className="text-white/80 text-lg">
                — Global Efficiency Network
              </p>
              <div className="mt-8 pt-8 border-t border-white/20 w-full">
                <p className="text-white/70 text-sm">
                  Access your personalized learning materials, program resources,
                  and collaborative workspace
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
