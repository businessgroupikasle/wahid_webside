"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-8 sm:py-16 md:py-20 bg-white dark:bg-[#020617] px-4 sm:px-6 lg:px-10">
      <div
        className="max-w-[1400px] mx-auto relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 flex flex-col items-center justify-center text-center py-20 sm:py-24 md:py-28 shadow-lg bg-slate-50 dark:bg-[#0B0F19]"
      >

        {/* ════════════════════════════════════════════════════
            STAR BACKGROUND — tinted with brand cyan
        ════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stars" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="25"  cy="25"  r="1.2" fill="rgba(3,183,206,0.40)" />
                <circle cx="150" cy="40"  r="1.5" fill="rgba(15,23,42,0.15)" />
                <circle cx="80"  cy="90"  r="0.8" fill="rgba(3,183,206,0.20)" />
                <circle cx="180" cy="130" r="1.2" fill="rgba(15,23,42,0.20)" />
                <circle cx="50"  cy="160" r="1.0" fill="rgba(3,183,206,0.30)" />
                <circle cx="110" cy="180" r="1.8" fill="rgba(3,183,206,0.35)" />
                <circle cx="10"  cy="110" r="0.8" fill="rgba(15,23,42,0.10)" />
                <circle cx="140" cy="10"  r="1.0" fill="rgba(3,183,206,0.25)" />
                <circle cx="170" cy="80"  r="1.5" fill="rgba(15,23,42,0.15)" />
                <circle cx="40"  cy="120" r="1.0" fill="rgba(3,183,206,0.20)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stars)" />
          </svg>
        </div>



        {/* ════════════════════════════════════════════════════
            CENTRE VIGNETTE — matches card bg so text stays readable
        ════════════════════════════════════════════════════ */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(248,250,252,0.82)_0%,transparent_100%)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(11,15,25,0.82)_0%,transparent_100%)]"
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

            <span className="text-brand-700 text-[11px] font-medium tracking-[0.18em] uppercase border border-brand-500/30 rounded-full px-4 py-1.5 bg-brand-500/10 whitespace-nowrap">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-5 leading-[1.12]">
           Know Allah through His Beautiful Names.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-9 sm:mb-10 max-w-[660px] mx-auto">
          Wahid helps you build a daily habit of learning, reflection, and remembrance so you can strengthen your faith, grow closer to Allah, 
          and walk a path towards Jannah.
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
