"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

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
        <motion.div 
          className="relative z-10 px-6 sm:px-10 max-w-2xl flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-5 leading-[1.12]">
            Transform the way you learn the 99 Names of Allah
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-9 sm:mb-10 max-w-[660px] mx-auto">
           Experience a modern Islamic learning app designed to help you understand, remember, and reflect on Allah’s beautiful Names every day.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">

            {/* App Store Button */}
            <button onClick={() => window.open("https://apps.apple.com/", "_blank")} className="group hover:opacity-80 transition-opacity active:scale-95 cursor-pointer w-[160px] flex justify-center">
              <img src="/buttons/appstore.svg" alt="Download on the App Store" className="h-[46px] sm:h-[50px] w-auto object-contain" />
            </button>

            {/* Google Play Button */}
            <button onClick={() => window.open("https://play.google.com/store/games?hl=en_IN", "_blank")} className="group hover:opacity-80 transition-opacity active:scale-95 cursor-pointer w-[160px] flex justify-center">
              <img src="/buttons/googleplay.svg" alt="Get it on Google Play" className="h-[46px] sm:h-[50px] w-auto object-contain" />
            </button>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
