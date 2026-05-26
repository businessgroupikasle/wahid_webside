"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const learningItems = [
  {
    title: "Understand all 99 Beautiful Names of Allah",
    detail: "Easy, clear explanations for every Name accessible for beginners and enriching for advanced learners.",
  },
  {
    title: "Explore authentic Quran verses and hadiths",
    detail: "Discover the Quranic ayat and verified hadiths directly connected to each Beautiful Name of Allah.",
  },
  {
    title: "Build daily remembrance through reflections",
    detail: "Consistent spiritual insights and dhikr practices woven into your everyday routine.",
  },
  // {
  //   title: "Listen to clear and beautiful Arabic pronunciation",
  //   detail: "Hear each Name recited with proper Tajweed so you can remember it with your heart and tongue.",
  // },
  {
    title: "Strengthen your connection with Allah",
    detail: "Through consistent learning and reflection, deepen your relationship with your Creator.",
  },
];

function StarsBackground() {
  const stars = [
    { top: "8%",  left: "6%",  size: 1.5, opacity: 0.4 },
    { top: "18%", left: "22%", size: 2,   opacity: 0.6 },
    { top: "5%",  left: "55%", size: 1,   opacity: 0.3 },
    { top: "28%", left: "78%", size: 2.5, opacity: 0.7 },
    { top: "12%", left: "90%", size: 1.5, opacity: 0.5 },
    { top: "42%", left: "3%",  size: 1,   opacity: 0.3 },
    { top: "55%", left: "88%", size: 2,   opacity: 0.5 },
    { top: "70%", left: "15%", size: 1.5, opacity: 0.4 },
    { top: "80%", left: "65%", size: 1,   opacity: 0.3 },
    { top: "90%", left: "40%", size: 2,   opacity: 0.6 },
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
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}

function DecorativeOrb() {
  return (
    <div className="flex items-start justify-center relative w-full h-full mt-4">
      <img 
        src="/whatlearn/what.svg" 
        alt="What You'll Learn" 
        className="w-full max-w-[500px] h-auto object-contain drop-shadow-[0_0_40px_rgba(3,183,206,0.15)]"
      />
    </div>
  );
}

export default function WhatYoullLearn() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
  };

  return (
    <section className="w-full py-16 bg-[#020617] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative rounded-[3rem] bg-[#0f172a] border border-white/5 px-6 py-14 md:px-16 overflow-hidden">

          <StarsBackground />

          {/* Top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
          {/* Bottom-left glow accent */}
          <div className="absolute bottom-0 left-0 w-96 h-64 bg-brand-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Heading + Items */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideLeftVariants}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                <span className="text-brand-300 text-xs tracking-wide font-medium uppercase">Your Learning Path</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white/90 mb-4 leading-tight">
                What You'll{" "}
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: "linear-gradient(135deg, #03b7ce, #6dd5fa)",
                }}>
                  Learn
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                A transformative journey through the Beautiful Names of Allah 
                crafted to build knowledge, remembrance, and a lasting spiritual connection.
              </p>

              {/* Learning items */}
              <motion.div 
                className="flex flex-col gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {learningItems.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    {/* Check circle */}
                    <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center group-hover:bg-brand-500/30 group-hover:border-brand-500/70 transition-all duration-300 shadow-[0_0_10px_rgba(3,183,206,0.15)]">
                      <Check className="w-3 h-3 text-brand-400" />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-white/90 text-sm font-medium leading-snug group-hover:text-white transition-colors duration-200">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Decorative orb */}
            <motion.div 
              className="hidden lg:flex items-start justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideRightVariants}
            >
              <DecorativeOrb />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
