"use client";

import Image from "next/image";
import { Zap, Headphones, Activity } from "lucide-react";
import { motion } from "framer-motion";

function MoodTrackerCard() {
  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-[2rem] overflow-hidden relative flex flex-col h-auto min-h-[360px] lg:min-h-[400px]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full pointer-events-none" />
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
      />

      {/* Image Container */}
      <div className="flex-1 relative flex items-center justify-center p-6 overflow-hidden">
        <img
          src="/feature/feature1.svg"
          alt="Learn the 99 Names"
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8 pt-0 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
            <Activity className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">Learn the 99 Names</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Explore the meanings, wisdom, and spiritual significance behind every Beautiful Name of Allah in a simple and engaging format.
        </p>
      </div>
    </div>
  );
}

function GuidedMeditationsCard() {
  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-[2rem] overflow-hidden relative flex flex-col h-auto min-h-[360px] lg:min-h-[400px]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      {/* Image Container */}
      <div className="flex-1 relative flex items-center justify-center p-6 overflow-hidden">
        <img
          src="/feature/feature2.svg"
          alt="Quran & Hadith References"
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8 pt-0 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
            <Headphones className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">Quran & Hadith References</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Discover authentic Quranic verses and verified hadiths connected to each Name, explained in a clear and easy-to-understand way.
        </p>
      </div>
    </div>
  );
}

function HabitBuilderCard() {
  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-[2rem] overflow-hidden relative flex flex-col h-auto min-h-[360px] lg:min-h-[400px]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      {/* Image Container */}
      <div className="flex-1 relative flex items-center justify-center p-6 overflow-hidden">
        <img
          src="/feature/feature3.svg"
          alt="Daily Reflections"
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8 pt-0 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">Daily Reflections</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Build consistency in dhikr and remembrance through peaceful reminders, reflections, and daily spiritual learning.
        </p>
      </div>
    </div>
  );
}

export default function FeatureHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="w-full py-32 bg-[#020617] text-white overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Feature Highlights</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to learn, reflect, and connect with Allah through His Beautiful Names, carefully crafted for daily spiritual growth.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}><MoodTrackerCard /></motion.div>
          <motion.div variants={itemVariants}><GuidedMeditationsCard /></motion.div>
          <motion.div variants={itemVariants}><HabitBuilderCard /></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
