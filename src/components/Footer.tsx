import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/[0.06] py-10 bg-bg-deep relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[13.5px] text-text-muted">
          {/* Brand Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-montserrat font-extrabold text-[12px]">
              EM
            </div>
            <div className="flex items-center gap-2">
              <span className="font-montserrat italic font-bold text-text-primary text-[15px]">
                Email Marketing Mastery<span className="text-brand">.</span>
              </span>
              <span className="text-text-muted text-[13px]">
                by Max Sturtevant &copy; {currentYear}
              </span>
            </div>
          </div>

          {/* Quick links & Status */}
          <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-1.5 text-[12.5px] text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-brand live-dot" />
              <span>Community Active</span>
            </div>

            <span className="text-white/10 hidden sm:inline">·</span>

            <a
              href="https://www.skool.com/email-marketerz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-brand transition-colors font-medium text-text-secondary"
            >
              <span>Hosted on Skool</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <span className="text-white/10 hidden sm:inline">·</span>

            <a
              href="#top"
              className="hover:text-text-primary transition-colors text-text-secondary"
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
