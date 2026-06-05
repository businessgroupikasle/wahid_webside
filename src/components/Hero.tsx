"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "./common/Typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-16 md:pt-24 pb-0 overflow-hidden flex flex-col items-center bg-white dark:bg-[#020617]"
    >


      {/* ════════════════════════════════════════════════════
          TOP TEXT CONTENT
      ════════════════════════════════════════════════════ */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto w-full mt-4 md:mt-8">

        {/* Badge pill */}
        {/* <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50 text-brand-600">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            99 Beautiful Names of Allah
          </span>
        </div> */}

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 dark:text-white mb-5 leading-[1.1] max-w-[720px] mx-auto min-h-[70px] sm:min-h-[80px] md:min-h-[120px]">
         <h1>An App to Learn and Live By Allah's Beautiful Names</h1>
          {/* <Typewriter
           
            // // speed={60}
            // delay={500}
            // cursor={false}
          /> */}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-gray-400 mb-10 max-w-[640px] mx-auto leading-relaxed font-medium">
          Indeed, Allah has ninety-nine Names, one 
          hundred except one; whoever memorizes them by heart, understands their meanings, 
          and lives according to them will enter Paradise
          <span className="block mt-2 text-xs sm:text-sm opacity-80 text-right">— Ṣaḥīḥ al-Bukhārī 7392, Ṣaḥīḥ Muslim 2677</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8 sm:mb-12 w-full sm:w-auto">
          <button
            onClick={() => window.open("https://apps.apple.com/", "_blank")}
            className="hover:opacity-80 transition-opacity active:scale-95 cursor-pointer w-[160px] flex justify-center"
          >
            <img
              src="/buttons/appstore.svg"
              alt="Download on the App Store"
              className="h-[46px] sm:h-[50px] w-auto object-contain"
            />
          </button>
          <button
            onClick={() => window.open("https://play.google.com/store/games?hl=en_IN", "_blank")}
            className="hover:opacity-80 transition-opacity active:scale-95 cursor-pointer w-[160px] flex justify-center"
          >
            <img
              src="/buttons/googleplay.svg"
              alt="Get it on Google Play"
              className="h-[46px] sm:h-[50px] w-auto object-contain"
            />
          </button>
        </div>

        {/* Social proof */}
        {/* <div className="flex items-center gap-3 mb-10">
          <div className="flex -space-x-1.5">
            {['left', 'center', 'right'].map((img) => (
              <img
                key={img}
                src={`/hero/${img}.svg`}
                className="w-7 h-7 rounded-full border-2 border-white shadow-sm object-cover"
                alt="User"
              />
            ))}
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Trusted by <span className="text-slate-800 font-semibold">10,000+</span> Muslim learners worldwide
          </p>
        </div>*/}
      </div> 

      {/* ════════════════════════════════════════════════════
          MOCKUP SECTION (3 HERO IMAGES)
      ════════════════════════════════════════════════════ */}
      <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[380px] lg:h-[440px] mx-auto flex justify-center mt-2 sm:mt-4">


        {/* LEFT phone */}
        <div className="absolute left-[-5%] sm:left-[5%] md:left-[10%] lg:left-[14%] top-16 sm:top-20 z-10 opacity-70 sm:opacity-90 transition-all duration-500 hover:z-40 hover:opacity-100 group">
          <div className="-rotate-[15deg] transition-transform duration-500 group-hover:-rotate-[5deg]">
            <Image
              src="/hero/center.svg"
              alt="App screen left"
              width={260}
              height={540}
              className="w-[180px] sm:w-[220px] md:w-[260px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_20px_40px_rgba(3,183,206,0.15)]"
            />
          </div>
        </div>

        {/* RIGHT phone */}
        <div className="absolute right-[-5%] sm:right-[5%] md:right-[10%] lg:right-[14%] top-16 sm:top-20 z-10 opacity-70 sm:opacity-90 transition-all duration-500 hover:z-40 hover:opacity-100 group">
          <div className="rotate-[15deg] transition-transform duration-500 group-hover:rotate-[5deg]">
            <Image
              src="/hero/right.svg"
              alt="App screen right"
              width={260}
              height={540}
              className="w-[180px] sm:w-[220px] md:w-[260px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_20px_40px_rgba(3,183,206,0.15)]"
            />
          </div>
        </div>

        {/* CENTER phone */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 transition-transform duration-500 hover:scale-[1.03]">
          <Image
            src="/hero/left.svg"
            alt="App screen center"
            width={300}
            height={620}
            className="w-[210px] sm:w-[260px] md:w-[300px] h-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_24px_60px_rgba(3,183,206,0.25)]"
          />
        </div>

      </div>
    </section>
  );
}
