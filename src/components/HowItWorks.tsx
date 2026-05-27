"use client";

import { ArrowLeft, Lock } from "lucide-react";
import { motion } from "framer-motion";

function StarsBackground() {
  // Generate a static array of stars to prevent hydration mismatch
  const stars = [
    { top: "10%", left: "15%", size: 2, opacity: 0.6 },
    { top: "20%", left: "5%", size: 1, opacity: 0.3 },
    { top: "8%", left: "45%", size: 3, opacity: 0.8 },
    { top: "25%", left: "30%", size: 1.5, opacity: 0.5 },
    { top: "5%", left: "75%", size: 2, opacity: 0.7 },
    { top: "15%", left: "85%", size: 1, opacity: 0.4 },
    { top: "30%", left: "65%", size: 2.5, opacity: 0.9 },
    { top: "12%", left: "95%", size: 1.5, opacity: 0.5 },
    { top: "40%", left: "20%", size: 1, opacity: 0.3 },
    { top: "35%", left: "80%", size: 2, opacity: 0.6 },
    { top: "50%", left: "10%", size: 1.5, opacity: 0.4 },
    { top: "45%", left: "90%", size: 1, opacity: 0.3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i % 3)}s`
          }}
        />
      ))}
    </div>
  );
}

function ReflectCard() {
  return (
    <div className="bg-[#18181b] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Text */}
      <div className="p-8 pb-0 relative z-10">
        <h3 className="text-2xl font-medium text-white mb-4">Learn</h3>
        <p className="text-gray-400 text-sm leading-relaxed pr-4">
          Explore the meanings, Quranic references, and authentic hadiths behind every Beautiful Name of Allah.
        </p>
      </div>

      {/* Bottom Phone Mockup */}
      <div className="flex-1 flex items-end justify-center px-8 mt-8">
        <div className="w-full h-64 relative">
          <img 
            src="/howitsworks/how1.svg" 
            alt="Learn" 
            className="absolute top-0 left-0 w-full translate-y-4 group-hover:translate-y-2 transition-transform duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </div>
  );
}

function RelaxCard() {
  return (
    <div className="bg-[#18181b] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Phone Mockup */}
      <div className="flex-1 flex items-start justify-center px-8 mb-8">
        <div className="w-full h-64 relative">
          <img 
            src="/howitsworks/how2.svg" 
            alt="Reflect" 
            className="absolute bottom-0 left-0 w-full -translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="p-8 pt-0 relative z-10">
        <h3 className="text-2xl font-medium text-white mb-4">Reflect</h3>
        <p className="text-gray-400 text-sm leading-relaxed pr-4">
          Receive daily reminders and spiritual reflections that help strengthen your heart and connection with Allah.
        </p>
      </div>
    </div>
  );
}

function GrowCard() {
  return (
    <div className="bg-[#18181b] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Text */}
      <div className="p-8 pb-0 relative z-10">
        <h3 className="text-2xl font-medium text-white mb-4">Connect</h3>
        <p className="text-gray-400 text-sm leading-relaxed pr-4">
          Grow spiritually through remembrance, reflection, and consistent Islamic learning.
        </p>
      </div>

      {/* Bottom Phone Mockup */}
      <div className="flex-1 flex items-end justify-center px-8 mt-8">
        <div className="w-full h-64 relative">
          <img 
            src="/howitsworks/how3.svg" 
            alt="Connect" 
            className="absolute top-0 left-0 w-full translate-y-4 group-hover:translate-y-2 transition-transform duration-500 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full py-24 bg-[#020617] text-white">
      {/* Outer Container with Starry Glow */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative rounded-[3rem] bg-[#0f172a] border border-white/5 px-6 py-20 md:px-16 overflow-hidden">
          
          <StarsBackground />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <motion.div 
              className="flex flex-col items-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-medium text-center mb-4 tracking-tight text-white/90">
                How It Works
              </h2>
              <p className="text-gray-400 text-center max-w-2xl text-sm sm:text-base leading-relaxed">
                A simple and beautiful journey to learn, reflect, and strengthen your connection with Allah every day.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={itemVariants} className="h-full"><ReflectCard /></motion.div>
              <motion.div variants={itemVariants} className="h-full"><RelaxCard /></motion.div>
              <motion.div variants={itemVariants} className="h-full"><GrowCard /></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
