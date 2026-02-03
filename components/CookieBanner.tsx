"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-primary-900 text-white p-6 shadow-2xl border-t-2 border-accent-700"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-white/90 leading-relaxed">
                We use cookies to improve your experience. By using this site,
                you agree to our{" "}
                <Link
                  href="/legal/privacy"
                  className="text-accent-400 hover:text-accent-300 underline font-semibold"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecline}
                className="px-6 py-3 bg-transparent border-2 border-white/30 hover:border-white/50 text-white rounded-lg font-medium transition-all hover:bg-white/10"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-accent-700 hover:bg-accent-600 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
              >
                Accept
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="md:hidden text-white/70 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
