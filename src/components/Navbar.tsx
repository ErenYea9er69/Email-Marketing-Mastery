"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#why", label: "Why Us" },
    { href: "#curriculum", label: "What's Inside" },
    { href: "#claude-skill", label: "Claude Skill" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080a08]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between min-h-[72px] gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-montserrat italic font-extrabold text-[18px] leading-[1.1] tracking-tight text-text-primary hover:opacity-90 transition-opacity"
          >
            Email<br />
            Marketing<br />
            Mastery<span className="text-brand">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-[14px] font-medium text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.skool.com/email-marketerz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-[44px] px-5 rounded-xl bg-brand hover:bg-brand-hover text-brand-dark font-montserrat font-bold text-[14px] transition-all duration-200 shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Join for $247/mo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/[0.06] transition-all"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown — animated slide */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? "max-h-[400px] opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 border-t border-border-subtle flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-xl text-[15px] font-medium text-text-secondary hover:text-text-primary hover:bg-white/[0.04] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
