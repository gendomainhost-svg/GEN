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
    setIsSearchOpen(false);
  };

  const showUtilityBar = !isScrolled;

  const linkBase =
    "relative z-10 inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm font-medium transition-colors";
  const linkInactive = "text-white/80 hover:text-white";
  const linkActive = "text-white font-semibold";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 transition-all duration-500 ${
        isScrolled
          ? "glass-dark shadow-2xl shadow-black/10"
          : "bg-primary-950/80 backdrop-blur-md"
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
            className="hidden overflow-hidden border-b border-white/10 md:block"
          >
            <div className="mx-auto max-w-7xl px-6">
              <ul className="flex items-center justify-end gap-x-8 py-2 text-xs">
                {utilityLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 transition-colors hover:text-white"
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

      <div className="relative mx-auto max-w-7xl px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <motion.span
              className="font-serif text-2xl font-bold tracking-tight text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              GEN
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-0.5 md:flex">
            {mainNav.map((item) => {
              if (item.button) {
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="ml-3"
                  >
                    <Link
                      href={item.href}
                      className="relative overflow-hidden rounded-md bg-accent-700 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
                    >
                      {item.name}
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
                  className="relative px-0.5 py-1"
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
                      className="absolute inset-0 rounded-md bg-white/10"
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
                      className={`${linkBase} ${isActive ? linkActive : linkInactive}`}
                    >
                      <span
                        className={
                          isActive ? "border-b-2 border-accent-400 pb-0.5" : ""
                        }
                      >
                        {item.name}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`shrink-0 text-white/50 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${linkBase} ${isActive ? linkActive : linkInactive}`}
                    >
                      <span
                        className={
                          isActive ? "border-b-2 border-accent-400 pb-0.5" : ""
                        }
                      >
                        {item.name}
                      </span>
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
              className="ml-1 rounded-md p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {isSearchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="rounded-md p-2 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
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
              className="hidden overflow-hidden md:block"
            >
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
                <Search size={16} className="text-white/60" />
                <input
                  autoFocus
                  type="search"
                  placeholder="Search GEN..."
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/50"
                />
                <button
                  type="submit"
                  className="text-sm font-semibold text-accent-300 hover:text-accent-200"
                >
                  Search
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-4 overflow-hidden rounded-xl border border-white/20 bg-primary-900/90 p-4 backdrop-blur-md md:hidden"
            >
              <div className="mb-4 flex flex-wrap gap-2 border-b border-white/10 pb-4">
                {utilityLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 transition-colors hover:bg-white/10"
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
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className="mt-3 block rounded-md bg-accent-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
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
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex-1 rounded-md py-3 pl-2 pr-2 transition-colors ${
                          isActive
                            ? "font-semibold text-accent-300"
                            : "text-white/90 hover:bg-white/5"
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
                          className="p-2 text-white/60 hover:text-white"
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
                              <p className="mb-1 mt-3 text-[10px] font-semibold uppercase tracking-wider text-white/45">
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
                                      className="block rounded-md py-2 px-2 text-sm text-white/85 hover:bg-white/5 hover:text-accent-300"
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

      {/* Full-width mega-menu — desktop only */}
      <div className="hidden md:block">
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
      </div>
    </motion.nav>
  );
}
