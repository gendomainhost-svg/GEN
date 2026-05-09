"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import MegaMenu from "./navigation/MegaMenu";
import {
  mainNav,
  utilityLinks,
  type MainNavItem,
} from "./navigation/headerNav";

const HOVER_OPEN_DELAY = 80;
const HOVER_CLOSE_DELAY = 150;

function itemMatchesPath(item: MainNavItem, pathname: string): boolean {
  if (
    item.href === pathname ||
    (item.href !== "/" && pathname.startsWith(item.href + "/"))
  ) {
    return true;
  }
  if (item.groups) {
    for (const group of item.groups) {
      for (const link of group.links) {
        if (
          link.href === pathname ||
          (link.href !== "/" && pathname.startsWith(link.href + "/"))
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const clearTimers = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleOpen = useCallback(
    (name: string) => {
      clearTimers();
      openTimer.current = setTimeout(() => {
        setOpenMenu(name);
      }, HOVER_OPEN_DELAY);
    },
    [clearTimers]
  );

  const scheduleClose = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, HOVER_CLOSE_DELAY);
  }, [clearTimers]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to a real search route or client-side filter
    setIsSearchOpen(false);
  };

  const showUtilityBar = !isScrolled;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-dark shadow-2xl shadow-black/10" : "bg-transparent"
      }`}
    >
      <AnimatePresence initial={false}>
        {showUtilityBar && (
          <motion.div
            key="utility-bar"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="hidden md:block border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6">
              <ul className="flex items-center justify-end gap-x-6 py-2 text-xs">
                {utilityLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.span
              className="font-serif text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              GEN
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {mainNav.map((item) => {
              if (item.button) {
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="relative bg-accent-700 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(185,28,28,0.3)] shadow-md text-sm ml-4 overflow-hidden group"
                    >
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                      <span className="relative">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              }

              const hasMenu = !!item.groups?.length;
              const isOpen = openMenu === item.name;
              const isActive = itemMatchesPath(item, pathname);

              return (
                <div
                  key={item.name}
                  className="relative px-1 py-2"
                  onMouseEnter={() => {
                    setHoveredLink(item.href);
                    if (hasMenu) scheduleOpen(item.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    if (hasMenu) scheduleClose();
                  }}
                >
                  {hoveredLink === item.href && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-white/10 rounded-md"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {hasMenu ? (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onFocus={() => scheduleOpen(item.name)}
                      onClick={() =>
                        setOpenMenu((prev) =>
                          prev === item.name ? null : item.name
                        )
                      }
                      className={`relative z-10 inline-flex items-center gap-1 px-2 py-1 rounded-md transition-colors text-sm font-medium ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-500 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative z-10 inline-block px-2 py-1 transition-colors text-sm font-medium ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-500 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              );
            })}

            <button
              type="button"
              aria-label={isSearchOpen ? "Close search" : "Open search"}
              aria-expanded={isSearchOpen}
              onClick={() => setIsSearchOpen((v) => !v)}
              className="ml-2 p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isSearchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Desktop search row */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.form
              key="search-row"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSearchSubmit}
              className="hidden md:block overflow-hidden"
            >
              <div className="mt-3 flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2">
                <Search size={16} className="text-white/60" />
                <input
                  autoFocus
                  type="search"
                  placeholder="Search GEN..."
                  className="flex-1 bg-transparent outline-none text-white placeholder-white/50 text-sm"
                />
                <button
                  type="submit"
                  className="text-white/80 hover:text-white text-sm font-medium"
                >
                  Search
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Desktop Mega-menu panel */}
        <AnimatePresence>
          {openMenu &&
            (() => {
              const item = mainNav.find((m) => m.name === openMenu);
              if (!item || !item.groups?.length) return null;
              return (
                <MegaMenu
                  key={openMenu}
                  groups={item.groups}
                  featured={item.featured}
                  onMouseEnter={clearTimers}
                  onMouseLeave={scheduleClose}
                  onLinkClick={() => setOpenMenu(null)}
                />
              );
            })()}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-4 pb-4 glass-dark rounded-xl px-4 py-4 backdrop-blur-md overflow-hidden"
            >
              {/* Utility chips */}
              <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-white/10">
                {utilityLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {mainNav.map((item, i) => {
                if (item.button) {
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className="block bg-accent-700 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium text-center transition-all shadow-md mt-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                }

                const hasMenu = !!item.groups?.length;
                const isExpanded = mobileExpanded === item.name;
                const isActive = itemMatchesPath(item, pathname);

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex-1 transition-colors py-3 px-2 rounded-lg ${
                          isActive
                            ? "text-white font-semibold bg-white/5"
                            : "text-white/90 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                      {hasMenu && (
                        <button
                          type="button"
                          aria-label={
                            isExpanded
                              ? `Collapse ${item.name}`
                              : `Expand ${item.name}`
                          }
                          aria-expanded={isExpanded}
                          onClick={() =>
                            setMobileExpanded((prev) =>
                              prev === item.name ? null : item.name
                            )
                          }
                          className="p-2 text-white/70 hover:text-white"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {hasMenu && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pb-3"
                        >
                          {item.groups!.map((group) => (
                            <div key={group.heading} className="mt-2 pl-3">
                              <p className="text-white/40 uppercase tracking-wider text-[10px] font-semibold mt-3 mb-1">
                                {group.heading}
                              </p>
                              <ul className="space-y-1">
                                {group.links.map((link) => (
                                  <li
                                    key={`m-${group.heading}-${link.name}`}
                                  >
                                    <Link
                                      href={link.href}
                                      onClick={() =>
                                        setIsMobileMenuOpen(false)
                                      }
                                      className="block py-2 px-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5"
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
