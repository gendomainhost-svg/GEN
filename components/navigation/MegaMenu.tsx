"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { MegaMenuFeatured, MegaMenuGroup } from "./headerNav";

interface MegaMenuProps {
  groups: MegaMenuGroup[];
  featured?: MegaMenuFeatured;
  onLinkClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function MegaMenu({
  groups,
  featured,
  onLinkClick,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  const hasFeatured = !!featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      className="absolute left-0 right-0 top-full z-40 border-t border-white/15 bg-primary-900/95 shadow-2xl shadow-black/40 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div
          className={`grid gap-10 py-10 md:py-12 ${
            hasFeatured ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {hasFeatured && featured && (
            <div className="md:col-span-1 flex flex-col justify-between rounded-lg border border-white/15 bg-white/5 p-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {featured.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {featured.blurb}
                </p>
              </div>
              <Link
                href={featured.href}
                onClick={onLinkClick}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-sm text-accent-400 hover:text-accent-300 group"
              >
                {featured.cta ?? "Learn more"}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          )}

          <div
            className={`${
              hasFeatured ? "md:col-span-2" : "md:col-span-2"
            } grid gap-10 ${
              groups.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"
            }`}
          >
            {groups.map((group) => (
              <div key={group.heading}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
                  {group.heading}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.heading}-${link.name}`}>
                      <Link
                        href={link.href}
                        onClick={onLinkClick}
                        role="menuitem"
                        className="group block"
                      >
                        <span className="block text-sm font-medium text-white/90 transition-colors group-hover:text-white">
                          {link.name}
                        </span>
                        {link.description && (
                          <span className="mt-0.5 block text-xs leading-snug text-white/50 transition-colors group-hover:text-white/70">
                            {link.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
