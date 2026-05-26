"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Simple and meaningful explanations",
    screenTitle: "Easy to Understand",
    screenDesc: "Explore the meanings of the 99 Beautiful Names with clarity and depth."
  },
  {
    title: "Authentic Quranic references",
    screenTitle: "Quranic Context",
    screenDesc: "Discover how each name is mentioned and contextualized in the Holy Quran."
  },
  {
    title: "Verified hadiths and reflections",
    screenTitle: "Prophetic Traditions",
    screenDesc: "Read authentic hadiths and thoughtful reflections related to each name."
  },
  {
    title: "Beautiful Arabic pronunciation",
    screenTitle: "Audio Pronunciations",
    screenDesc: "Listen to beautiful and accurate Arabic pronunciations of the 99 Names."
  },
  {
    title: "Daily reminders for remembrance and reflection.",
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

  return (
    <section className="w-full py-24 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Mockup Container */}
        <div className="flex-1 w-full max-w-[540px] relative">
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-[3rem] border border-white/5 bg-[#140b2e] overflow-hidden flex items-end justify-center pt-8 px-8">
            
            {/* Background Grid */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #03b7ce 1px, transparent 1px), linear-gradient(to bottom, #03b7ce 1px, transparent 1px)`,
                backgroundSize: '48px 48px'
              }}
            />
            {/* Top Right Glow */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-brand-500/40 rounded-full blur-[100px] pointer-events-none" />

            {/* Phone Image */}
            <Image 
              src="/hero/Finally.svg"
              alt="Finally App Screen"
              width={320}
              height={640}
              className="relative z-10 w-full max-w-[240px] lg:max-w-[280px] h-auto drop-shadow-2xl object-contain -translate-y-4 lg:-translate-y-6"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 flex flex-col justify-center max-w-xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.15]">
            Finally an app that brings<br />
            <span className="text-brand-100">You Closer to Allah.</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Wahid is a peaceful and beautifully designed Islamic learning app that helps Muslims deepen their understanding of the 99 Beautiful Names of Allah.          </p>
          
          <div className="flex flex-col gap-5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-6 h-6 shrink-0 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/20 text-brand-400">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-gray-200 font-medium text-[15px]">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
