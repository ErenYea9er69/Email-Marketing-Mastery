import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border-subtle py-8 bg-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-text-muted">
          <div className="flex items-center gap-2">
            <span className="font-montserrat italic font-bold text-text-primary text-[15px]">
              Email Marketing Mastery<span className="text-brand">.</span>
            </span>
            <span>by Max Sturtevant &copy; {currentYear}</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.skool.com/email-marketerz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
            >
              Hosted on Skool
            </a>
            <span className="text-border-default">·</span>
            <Link href="#" className="hover:text-text-primary transition-colors">
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
