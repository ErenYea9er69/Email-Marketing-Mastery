"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Zap,
  BookOpen,
  Cpu,
  Users,
  Star,
  HelpCircle,
  ArrowUpRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dockCollapsed, setDockCollapsed] = useState(false);

  // Monitor scroll distance for switching between Top Navbar and Left Dock
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy to track currently viewed section
  useEffect(() => {
    const sectionIds = [
      "top",
      "why",
      "curriculum",
      "claude-skill",
      "community",
      "bfcm",
      "reviews",
      "faq",
    ];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("top");
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Keyboard navigation & accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "top", href: "#top", label: "Home", icon: Home },
    { id: "why", href: "#why", label: "Why Us", icon: Zap },
    { id: "curriculum", href: "#curriculum", label: "What's Inside", icon: BookOpen },
    { id: "claude-skill", href: "#claude-skill", label: "Claude AI Skill", icon: Cpu },
    { id: "community", href: "#community", label: "Community", icon: Users },
    { id: "reviews", href: "#reviews", label: "Reviews", icon: Star },
    { id: "faq", href: "#faq", label: "FAQ", icon: HelpCircle },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. TOP FLOATING NAVBAR (Visible when at top of page)
      ───────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "-translate-y-28 opacity-0 scale-95 pointer-events-none"
            : "translate-y-0 opacity-100 scale-100 pointer-events-auto"
        }`}
      >
        <div className="max-w-[1100px] mx-auto pointer-events-auto">
          <div className="liquid-glass-nav rounded-2xl sm:rounded-full py-2.5 sm:py-3 px-4 sm:px-6 transition-all duration-300 shadow-xl shadow-black/50">
            <div className="flex items-center justify-between gap-3 sm:gap-6">
              {/* Brand Logo & Live Pulse */}
              <Link
                href="/"
                className="group flex items-center gap-2.5 sm:gap-3 shrink-0"
                aria-label="Email Marketing Mastery by Max Sturtevant"
              >
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-brand/20 via-brand/10 to-transparent border border-brand/30 flex items-center justify-center text-brand font-montserrat font-extrabold text-[13px] sm:text-[14px] shadow-sm shadow-brand/20 group-hover:border-brand group-hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 tracking-tight">EM</span>
                  <span className="absolute inset-0 rounded-xl bg-brand/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 font-montserrat italic font-extrabold text-[14px] sm:text-[16px] leading-none tracking-tight text-text-primary group-hover:text-white transition-colors">
                    <span>Email Marketing Mastery</span>
                    <span className="text-brand">.</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand live-dot" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-text-muted tracking-wide">
                      Live Agency Data
                    </span>
                  </div>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-black/20 border border-white/[0.04]">
                {navItems.slice(1).map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className={`relative px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                        isActive
                          ? "text-white bg-white/[0.12] shadow-sm border border-white/[0.14]"
                          : "text-text-secondary hover:text-text-primary hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        {isActive && (
                          <span className="w-1 h-1 rounded-full bg-brand animate-pulse" />
                        )}
                        {link.label}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Right CTA & Mobile Toggle */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://www.skool.com/email-marketerz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 h-[38px] sm:h-[42px] px-4 sm:px-5 rounded-full bg-brand hover:bg-brand-hover text-brand-dark font-montserrat font-bold text-[13px] sm:text-[14px] btn-spring sheen-glow shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/40 overflow-hidden"
                >
                  <span>Join for $247/mo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/[0.08] active:scale-95 transition-all"
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5 text-text-primary" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Top Menu Drawer */}
          <div
            className={`lg:hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden mt-2 ${
              mobileMenuOpen
                ? "max-h-[460px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="liquid-glass-dropdown rounded-2xl p-4 space-y-1">
              <div className="px-3 py-1.5 text-[11px] font-montserrat font-bold uppercase tracking-wider text-text-muted flex items-center justify-between">
                <span>Navigation</span>
                <span className="flex items-center gap-1 text-brand lowercase font-sans text-[11px]">
                  <Sparkles className="w-3 h-3" />
                  342 members
                </span>
              </div>

              {navItems.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-[14px] font-medium transition-all text-left ${
                      isActive
                        ? "text-brand bg-brand/10 border border-brand/20 font-semibold"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/[0.05]"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isActive
                          ? "bg-brand text-brand-dark"
                          : "bg-white/[0.04] text-text-secondary"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{link.label}</span>
                  </button>
                );
              })}

              <div className="pt-3 border-t border-white/[0.06] mt-2">
                <a
                  href="https://www.skool.com/email-marketerz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-brand text-brand-dark font-montserrat font-bold text-[14px] shadow-lg shadow-brand/20 active:scale-95 transition-all"
                >
                  <span>Join Community for $247/mo</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. LEFT SIDE FLOATING DOCK (Appears when scrolled down, exactly like the anime reference!)
      ───────────────────────────────────────────────────────────── */}
      <aside
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? dockCollapsed
              ? "-translate-x-[calc(100%-20px)] opacity-90"
              : "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
        aria-label="Side navigation dock"
      >
        <div className="relative group/dock flex items-center">
          {/* Main Left Dock Capsule */}
          <div className="relative flex flex-col items-center py-4 px-2 sm:px-2.5 rounded-r-2xl sm:rounded-r-3xl bg-[#090d09]/90 backdrop-blur-2xl border-y border-r border-white/[0.12] shadow-2xl shadow-black/90 space-y-2.5">
            {/* Ambient subtle backglow */}
            <div className="absolute top-0 right-0 w-16 h-28 bg-brand/[0.08] rounded-bl-full pointer-events-none blur-lg" />

            {/* Navigation Icon List */}
            <div className="flex flex-col items-center space-y-2 relative z-10">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <div key={item.id} className="relative group/item">
                    {/* Active vertical green indicator bar on left edge (matching screenshot!) */}
                    {isActive && (
                      <span
                        className="absolute -left-2 sm:-left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-brand rounded-r-full shadow-md shadow-brand/60 animate-pulse"
                        aria-hidden="true"
                      />
                    )}

                    {/* Nav Icon Button */}
                    <button
                      type="button"
                      onClick={() => scrollTo(item.href)}
                      className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
                        isActive
                          ? "bg-white/[0.12] text-white border border-white/[0.18] shadow-lg shadow-black/40 scale-105"
                          : "text-text-muted hover:text-text-primary hover:bg-white/[0.06] hover:scale-105"
                      }`}
                      aria-label={item.label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                    </button>

                    {/* Modern Liquid Glass Floating Tooltip */}
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 z-50">
                      <div className="px-3 py-1.5 rounded-xl bg-[#0e140e]/95 backdrop-blur-xl border border-white/[0.14] text-white text-[12.5px] font-medium whitespace-nowrap shadow-2xl shadow-black/80 flex items-center gap-2">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                        )}
                        <span>{item.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-6 h-px bg-white/[0.08] my-1" />

            {/* Action CTA: Skool Quick Join Icon */}
            <div className="relative group/cta">
              <a
                href="https://www.skool.com/email-marketerz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand text-brand-dark flex items-center justify-center shadow-lg shadow-brand/30 hover:bg-brand-hover hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Join Skool Community for $247/month"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              {/* Tooltip for CTA */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 -translate-x-2 group-hover/cta:opacity-100 group-hover/cta:translate-x-0 transition-all duration-200 z-50">
                <div className="px-3 py-1.5 rounded-xl bg-brand text-brand-dark font-montserrat font-bold text-[12.5px] whitespace-nowrap shadow-2xl shadow-brand/30 flex items-center gap-1.5">
                  <span>Join for $247/mo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Collapse / Expand Toggle Button (Chevron < like screenshot!) */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setDockCollapsed(!dockCollapsed)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/[0.06] transition-colors"
                aria-label={dockCollapsed ? "Expand side navigation" : "Collapse side navigation"}
                title={dockCollapsed ? "Expand dock" : "Collapse dock"}
              >
                {dockCollapsed ? (
                  <ChevronRight className="w-4 h-4 text-brand" />
                ) : (
                  <ChevronLeft className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
