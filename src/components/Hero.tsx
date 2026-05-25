"use client";

import React from "react";
import Image from "next/image";
import { Apple, Play, Video, Headphones, Star } from "lucide-react";
import Typewriter from "./common/Typewriter";

export default function Hero() {
  return (
    <section id="home" className="relative w-full pt-16 md:pt-24 pb-0 overflow-hidden flex flex-col items-center">
      
      {/* ════════════════════════════════════════════════════
          ORIGINAL BACKGROUND (Grid + Brand Glow)
      ════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-500/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* ════════════════════════════════════════════════════
          CURVE EFFECT (Arching Beam)
      ════════════════════════════════════════════════════ */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden z-0 flex justify-center">
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="w-[150%] max-w-[1200px] h-[400px] absolute top-[-100px] md:top-[-120px] opacity-80"
        >
          <path
            d="M 0 600 Q 500 0 1000 600"
            fill="none"
            stroke="url(#hero-beam-glow)"
            strokeWidth="60"
            filter="blur(30px)"
          />
          <path
            d="M 0 600 Q 500 0 1000 600"
            fill="none"
            stroke="url(#hero-beam-core)"
            strokeWidth="8"
            filter="blur(4px)"
          />
          <defs>
            <linearGradient id="hero-beam-core" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(3,183,206,1)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="hero-beam-glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(3,183,206,0.6)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ════════════════════════════════════════════════════
          TOP TEXT CONTENT
      ════════════════════════════════════════════════════ */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto w-full mt-4 md:mt-8">
        
        {/* Rating Block (Replaces Pill) */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
          {/* <div className="flex -space-x-2">
            <img src="/hero/left.svg" className="w-8 h-8 rounded-full border-2 border-[#020617] object-cover" alt="User" />
            <img src="/hero/center.svg" className="w-8 h-8 rounded-full border-2 border-[#020617] object-cover" alt="User" />
            <img src="/hero/right.svg" className="w-8 h-8 rounded-full border-2 border-[#020617] object-cover" alt="User" />
          </div> */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs text-gray-300 font-medium tracking-wide">Rated 4.9/5 • Daily Islamic Learning Experience</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1] max-w-[700px] mx-auto min-h-[70px] sm:min-h-[80px] md:min-h-[110px]">
          <Typewriter 
            text="Learn, Reflect & Connect With Allah" 
            speed={60} 
            delay={500} 
            cursor={false}
          />
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-[800px] mx-auto leading-relaxed">
          Wahid helps you explore the meanings, virtues, Quranic references, and authentic hadiths behind the 99 Beautiful Names of Allah designed for daily reflection and spiritual growth.  
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12 w-full sm:w-auto">
          
          {/* App Store Button */}
          <button onClick={() => window.open("https://apps.apple.com/", "_blank")} className="flex items-center justify-center gap-2.5 bg-white text-black px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-all font-semibold w-full sm:w-[150px]">
            <Apple className="w-5 h-5 fill-black" />
            <div className="text-left">
              <div className="text-[9px] font-medium leading-none mb-1 text-gray-600">Download on the</div>
              <div className="text-[13px] leading-none tracking-tight">App Store</div>
            </div>
          </button>

          {/* Google Play Button */}
          <button onClick={() => window.open("https://play.google.com/store/games?hl=en_IN", "_blank")} className="flex items-center justify-center gap-2.5 bg-[#111111] border border-white/10 text-white px-4 py-2.5 rounded-xl hover:bg-[#1a1a1a] transition-all font-semibold w-full sm:w-[150px]">
            <Play className="w-4 h-4 fill-white" />
            <div className="text-left">
              <div className="text-[9px] font-medium leading-none mb-1 text-gray-400">Get it on</div>
              <div className="text-[13px] leading-none tracking-tight">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          MOCKUP SECTION (3 HERO IMAGES)
      ════════════════════════════════════════════════════ */}
      <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[380px] lg:h-[440px] mx-auto flex justify-center mt-2 sm:mt-4">

        {/* --- LEFT IMAGE --- */}
        <div className="absolute left-[-5%] sm:left-[5%] md:left-[10%] lg:left-[14%] top-16 sm:top-20 z-10 opacity-70 sm:opacity-90 transition-all duration-500 hover:z-40 hover:opacity-100 group">
          <div className="-rotate-[15deg] transition-transform duration-500 group-hover:-rotate-[5deg]">
            <Image
              src="/hero/center.svg"
              alt="App screen left"
              width={260}
              height={540}
              className="w-[180px] sm:w-[220px] md:w-[260px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* --- RIGHT IMAGE --- */}
        <div className="absolute right-[-5%] sm:right-[5%] md:right-[10%] lg:right-[14%] top-16 sm:top-20 z-10 opacity-70 sm:opacity-90 transition-all duration-500 hover:z-40 hover:opacity-100 group">
          <div className="rotate-[15deg] transition-transform duration-500 group-hover:rotate-[5deg]">
            <Image
              src="/hero/right.svg"
              alt="App screen right"
              width={260}
              height={540}
              className="w-[180px] sm:w-[220px] md:w-[260px] h-auto drop-shadow-2xl"
            />
          </div>

          
        </div>

        {/* --- CENTER IMAGE --- */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 transition-transform duration-500 hover:scale-[1.03]">
          <Image
            src="/hero/left.svg"
            alt="App screen center"
            width={300}
            height={620}
            className="w-[210px] sm:w-[260px] md:w-[300px] h-auto drop-shadow-[0_0_80px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>
    </section>
  );
}
