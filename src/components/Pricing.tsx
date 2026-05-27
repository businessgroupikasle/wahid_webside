"use client";

import { Ticket, Brain, Headset, Check } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Free",
    icon: Ticket,
    subtitle: "Learn the 99 Names of Allah with ease",
    prices: { USD: "$0", INR: "₹0", AED: "AED 0" },
    period: "/ month",
    cta: "Start Free",
    ctaStyle: "bg-transparent border border-brand-500/30 text-brand-600 hover:bg-brand-500/10",
    features: [
      "Access to all 99 Names",
      "Arabic text & transliteration",
      "Short meanings",
      "Basic references",
      "Save favorites"
    ]
  },
  {
    name: "Noor+",
    icon: Brain,
    badge: "Popular",
    subtitle: "Deep learning experience",
    prices: { USD: "$7", INR: "₹599", AED: "AED 25" },
    period: "/ month",
    cta: "Start Free Trial",
    ctaStyle: "bg-gradient-to-r from-brand-400 to-brand-500 text-white hover:opacity-90 shadow-lg shadow-brand-500/25 border border-brand-400/50",
    highlight: true,
    features: [
      "Everything in Free",
      "Detailed explanations & authentic references",
      "Quranic mentions for each Name",
      "Audio pronunciation",
      "Interactive quizzes & progress tracking",
      "Ad-free experience",
      "Offline learning access"
    ]
  }
];

type Currency = 'USD' | 'INR' | 'AED';

import { useState } from "react";

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="pricing" className="w-full py-8 bg-white dark:bg-[#020617] text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
           Unlock a Deeper Learning Experience
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Go beyond memorization with reflections, quizzes, and authentic references.          </p>
        </motion.div>

        {/* Currency Toggle */}
        <motion.div 
          className="flex justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className="bg-slate-100 dark:bg-white/5 p-1 rounded-full inline-flex">
            {(['USD', 'INR', 'AED'] as Currency[]).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  currency === cur 
                    ? 'bg-white dark:bg-[#020617] text-brand-600 dark:text-brand-400 shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {tiers.map((tier, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`group relative rounded-3xl overflow-hidden flex flex-col p-8 border transition-colors duration-500 ${
                tier.highlight 
                  ? 'bg-slate-50 dark:bg-white/[0.02] border-brand-500/30 shadow-xl' 
                  : 'bg-white dark:bg-transparent border-slate-200 dark:border-white/10 hover:border-brand-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:shadow-lg'
              }`}
            >
              {/* Highlight Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 ${tier.highlight ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-500/5 to-transparent pointer-events-none transition-opacity duration-500 ${tier.highlight ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.highlight ? 'bg-brand-500 text-white' : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300'}`}>
                    <tier.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-medium text-slate-900 dark:text-white">{tier.name}</span>
                </div>
                {tier.badge && (
                  <span className="px-3 py-1 bg-brand-100 text-brand-900 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {tier.badge}
                  </span>
                )}
              </div>

              {/* Subtitle */}
              <p className="text-slate-500 dark:text-gray-400 text-xs font-medium mb-6 relative z-10 h-4">
                {tier.subtitle}
              </p>

              {/* Price Box */}
              <div className="bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-white/10 rounded-2xl p-6 mb-8 relative z-10 shadow-sm">
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">{tier.prices[currency]}</span>
                  {tier.period && <span className="text-sm text-slate-500 dark:text-gray-400">{tier.period}</span>}
                </div>
                <button className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${tier.ctaStyle}`}>
                  {tier.cta}
                </button>
              </div>

              {/* Features List */}
              <div className="relative z-10 flex-1">
                <p className="text-slate-900 dark:text-white text-sm font-semibold mb-6">What's included</p>
                <ul className="flex flex-col gap-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand-600" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
