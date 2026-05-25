"use client";

import React from "react";

export default function CTASection() {
  return (
    <section className="w-full py-14 sm:py-16 md:py-20 bg-[#020617] px-4 sm:px-6 lg:px-10">
      <div
        className="max-w-[1400px] mx-auto relative overflow-hidden rounded-[2rem] border border-brand-500/[0.15] flex flex-col items-center justify-center text-center py-20 sm:py-24 md:py-28"
        style={{ background: "#04091e" }}
      >

        {/* ════════════════════════════════════════════════════
            STAR BACKGROUND — tinted with brand cyan
        ════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stars" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="25"  cy="25"  r="1.2" fill="rgba(3,183,206,0.70)" />
                <circle cx="150" cy="40"  r="1.5" fill="rgba(255,255,255,0.40)" />
                <circle cx="80"  cy="90"  r="0.8" fill="rgba(3,183,206,0.30)" />
                <circle cx="180" cy="130" r="1.2" fill="rgba(255,255,255,0.50)" />
                <circle cx="50"  cy="160" r="1.0" fill="rgba(3,183,206,0.50)" />
                <circle cx="110" cy="180" r="1.8" fill="rgba(3,183,206,0.55)" />
                <circle cx="10"  cy="110" r="0.8" fill="rgba(255,255,255,0.20)" />
                <circle cx="140" cy="10"  r="1.0" fill="rgba(3,183,206,0.45)" />
                <circle cx="170" cy="80"  r="1.5" fill="rgba(255,255,255,0.35)" />
                <circle cx="40"  cy="120" r="1.0" fill="rgba(3,183,206,0.40)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stars)" />
          </svg>
        </div>

        {/* ════════════════════════════════════════════════════
            CURVED BEAM — brand cyan (#03b7ce)
        ════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            className="w-full h-full absolute inset-0 overflow-visible"
          >
            <defs>
              {/* Ambient outer glow — wide, soft brand cyan */}
              <linearGradient id="heavy-glow" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%"   stopColor="rgba(3,183,206,0.75)" />
                <stop offset="30%"  stopColor="rgba(3,183,206,0.28)" />
                <stop offset="100%" stopColor="rgba(3,183,206,0.02)" />
              </linearGradient>

              {/* Mid beam — medium brand cyan */}
              <linearGradient id="core-glow" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%"   stopColor="rgba(53,197,216,0.95)" />
                <stop offset="40%"  stopColor="rgba(3,183,206,0.55)" />
                <stop offset="100%" stopColor="rgba(3,183,206,0.08)" />
              </linearGradient>

              {/* Spine — bright white-cyan hot core */}
              <linearGradient id="spine-glow" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%"   stopColor="rgba(200,248,255,1.00)" />
                <stop offset="45%"  stopColor="rgba(3,183,206,0.85)" />
                <stop offset="100%" stopColor="rgba(3,183,206,0.18)" />
              </linearGradient>

              <filter id="blur-heavy" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="60" />
              </filter>
              <filter id="blur-medium" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="24" />
              </filter>
              <filter id="blur-light" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* Ambient */}
            <path d="M -200 1100 Q 500 -300 1200 1100" fill="none"
              stroke="url(#heavy-glow)" strokeWidth="140" filter="url(#blur-heavy)" />
            {/* Mid */}
            <path d="M -200 1100 Q 500 -300 1200 1100" fill="none"
              stroke="url(#core-glow)"  strokeWidth="40"  filter="url(#blur-medium)" />
            {/* Spine */}
            <path d="M -200 1100 Q 500 -300 1200 1100" fill="none"
              stroke="url(#spine-glow)" strokeWidth="8"   filter="url(#blur-light)" />
          </svg>
        </div>

        {/* ════════════════════════════════════════════════════
            CENTRE VIGNETTE — matches card bg so text stays readable
        ════════════════════════════════════════════════════ */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(4,9,30,0.82) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* ════════════════════════════════════════════════════
            CONTENT
        ════════════════════════════════════════════════════ */}
        <div className="relative z-10 px-6 sm:px-10 max-w-2xl flex flex-col items-center">

          {/* Ornamental badge  ◦ ─── Join us ─── ◦  — brand tinted */}
          <div className="flex items-center gap-2 sm:gap-3 mb-7 sm:mb-8">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-brand-400/70" />
              <div
                className="h-px w-5 sm:w-9"
                style={{ background: "linear-gradient(to right, rgba(3,183,206,0.50), rgba(3,183,206,0.06))" }}
              />
            </div>

            <span className="text-brand-400 text-[11px] font-medium tracking-[0.18em] uppercase border border-brand-500/30 rounded-full px-4 py-1.5 bg-brand-500/[0.08] whitespace-nowrap">
              Join us
            </span>

            <div className="flex items-center gap-1.5">
              <div
                className="h-px w-5 sm:w-9"
                style={{ background: "linear-gradient(to left, rgba(3,183,206,0.50), rgba(3,183,206,0.06))" }}
              />
              <div className="w-1 h-1 rounded-full bg-brand-400/70" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[34px] sm:text-5xl lg:text-[56px] font-medium tracking-tight text-white mb-4 sm:mb-5 leading-[1.12]">
            Ready to transform<br className="hidden sm:block" /> your financial management?
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-9 sm:mb-10 max-w-[660px] mx-auto">
            Streamline your business's financial management with our intuitive, scalable SaaS platform.
            Designed for U.S. enterprises, our solutions simplify complex processes.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">

            {/* App Store — dark card */}
            <button onClick={() => window.open("https://apps.apple.com/", "_blank")} className="group w-full sm:w-auto flex items-center gap-3 bg-[#0a0a0a] hover:bg-[#111] border border-white/[0.10] hover:border-white/20 text-white rounded-2xl px-5 py-3 transition-all duration-200 active:scale-95 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              {/* Green circle icon */}
              <div className="w-9 h-9 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
                  <circle cx="10" cy="10" r="2.2" fill="white" />
                  <circle cx="10" cy="10" r="5"   stroke="white" strokeWidth="1.4" fill="none" />
                  <line x1="10" y1="1"  x2="10" y2="4"  stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="10" y1="16" x2="10" y2="19" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="1"  y1="10" x2="4"  y2="10" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="16" y1="10" x2="19" y2="10" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-semibold text-[15px] tracking-tight">App Store</span>
            </button>

            {/* Play Store — white card */}
            <button onClick={() => window.open("https://play.google.com/store/games?hl=en_IN", "_blank")} className="group w-full sm:w-auto flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl px-5 py-3 transition-all duration-200 active:scale-95 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
              {/* Orange circle icon */}
              <div className="w-9 h-9 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <svg viewBox="0 0 20 20" className="w-5 h-5" fill="none">
                  <path
                    d="M10 4 C6.69 4 4 6.69 4 10 C4 13.31 6.69 16 10 16"
                    stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"
                  />
                  <path
                    d="M13.5 7.5 L16.5 10 L13.5 12.5"
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
                  />
                </svg>
              </div>
              <span className="font-semibold text-[15px] tracking-tight">Play Store</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
