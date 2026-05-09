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
      className="absolute left-0 right-0 top-full mt-2 z-40"
    >
      <div className="mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl glass-dark rounded-xl shadow-2xl shadow-black/30 overflow-hidden">
        <div
          className={`grid gap-8 px-6 md:px-10 py-8 ${
            hasFeatured ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {hasFeatured && featured && (
            <div className="md:col-span-1 flex flex-col justify-between bg-white/5 border border-white/10 rounded-lg p-5">
              <div>
                <h3 className="font-serif text-xl text-white mb-2">
                  {featured.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {featured.blurb}
                </p>
              </div>
              <Link
                href={featured.href}
                onClick={onLinkClick}
                className="mt-5 inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium text-sm group"
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
            } grid gap-8 ${
              groups.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1"
            }`}
          >
            {groups.map((group) => (
              <div key={group.heading}>
                <h4 className="text-white/50 uppercase tracking-wider text-xs font-semibold mb-4">
                  {group.heading}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.heading}-${link.name}`}>
                      <Link
                        href={link.href}
                        onClick={onLinkClick}
                        role="menuitem"
                        className="block group"
                      >
                        <span className="block text-white/90 group-hover:text-white text-sm font-medium transition-colors">
                          {link.name}
                        </span>
                        {link.description && (
                          <span className="block text-white/50 group-hover:text-white/70 text-xs mt-0.5 transition-colors">
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
