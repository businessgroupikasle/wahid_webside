"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  {
    title: "Discover the meanings that transform hearts",
    screenTitle: "Easy to Understand",
    screenDesc: "Explore the meanings of the 99 Beautiful Names with clarity and depth."
  },
  {
    title: "Reflect through authentic Quran and Hadith",
    screenTitle: "Quranic Context",
    screenDesc: "Discover how each name is mentioned and contextualized in the Holy Quran."
  },
  {
    title: "Learn beautiful Arabic pronunciation",
    screenTitle: "Prophetic Traditions",
    screenDesc: "Read authentic hadiths and thoughtful reflections related to each name."
  },
  {
    title: "Strengthen your faith with daily reminders",
    screenTitle: "Audio Pronunciations",
    screenDesc: "Listen to beautiful and accurate Arabic pronunciations of the 99 Names."
  },
  {
    title: "Build a deeper relationship with Allah every day",
    screenTitle: "Daily Dhikr",
    screenDesc: "Set daily reminders to reflect and remember the names of Allah throughout your day."
  }
];

export default function MoodInsights() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-8 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Mockup Container */}
        <div 
          className="flex-1 w-full max-w-[540px] relative"
        >
          <div className="relative w-full rounded-[3rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] overflow-hidden flex items-center justify-center p-6 lg:p-10 shadow-lg">
            
            {/* Background Grid */}
            {/* <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #03b7ce 1px, transparent 1px), linear-gradient(to bottom, #03b7ce 1px, transparent 1px)`,
                backgroundSize: '48px 48px'
              }}
            /> */}
            {/* Top Right Glow */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />

            {/* Phone Video */}
            <video 
              src="/video/Wahid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full max-w-[420px] lg:max-w-[520px] xl:max-w-[640px] h-auto drop-shadow-2xl object-contain rounded-[3rem]"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div 
          className="flex-1 flex flex-col justify-center max-w-xl relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15]">
            Your heart was created to<br />
            <span className="text-brand-600">know Allah</span>
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
            Whether you seek peace in hardship, gratitude in blessing, or strength in your faith, Wahid helps you reflect on Allah's Names and bring His remembrance into your daily life.          </p>
          
          <div 
            className="flex flex-col gap-5"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-6 h-6 shrink-0 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/30 text-brand-600">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-700 dark:text-gray-300 font-medium text-[15px]">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
