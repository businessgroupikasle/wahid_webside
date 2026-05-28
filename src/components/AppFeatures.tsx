'use client';

import { useState, useEffect } from "react";

const features = [
  {
    id: 'reflect',
    label: 'Reflect',
    description:
      'Reflect on the beautiful meanings behind the 99 Names of Allah and strengthen your spiritual connection through daily remembrance. Each Name offers wisdom, peace, and guidance for everyday life.',
    image: '/appfeature/app1.png',
  },
  {
    id: 'learn',
    label: 'Learn',
    description:
      'Learn all 99 Names of Allah with easy explanations, Arabic transliteration, and authentic references designed to make Islamic learning simple and accessible for everyone.',
    image: '/appfeature/app2.png',
  },
  {
    id: 'memorize',
    label: 'Memorize',
    description:
      'Memorize the Names of Allah through interactive quizzes, repetition, and progress tracking that help you build a consistent and meaningful learning habit.',
    image: '/appfeature/app3.png',
  },
  {
    id: 'connect',
    label: 'Connect',
    description:
      'Connect your heart with Allah by understanding His attributes more deeply and applying the lessons from each Name in your daily life and worship.',
    image: '/appfeature/app4.png',
  },
];

export default function AppFeatures() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-advance the active tab every 4 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="features" className="relative bg-[#f0f0f0] dark:bg-[#0a0a0a] py-20 lg:py-32">
      <div 
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 lg:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] font-bold text-brand-600 dark:text-brand-400 bg-brand-500/8 dark:bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full mb-4">
            App Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Everything you need to know
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full lg:w-[28%]">
            {features.slice(0, 2).map((feat, idx) => (
              <div 
                key={feat.id} 
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-300 ${
                  activeTab === idx 
                    ? 'bg-white shadow-xl dark:bg-white/10 scale-105 z-10 relative border-l-4 border-brand-500' 
                    : 'bg-[#e4e4e4] dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10'
                }`}
              >
                <div className={`transition-all duration-500 transform ${activeTab === idx ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{feat.label}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image Area */}
          <div className="w-full lg:w-[44%] aspect-square bg-white dark:bg-[#111] flex items-center justify-center shadow-2xl relative overflow-hidden rounded-[3rem]">
             {features.map((feat, idx) => (
               <div 
                 key={feat.id}
                 className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out flex items-center justify-center ${
                   activeTab === idx 
                     ? 'opacity-100 z-10 scale-100' 
                     : 'opacity-0 z-0 scale-95'
                 }`}
               >
                 <img 
                   src={feat.image} 
                   alt={feat.label}
                   className="max-w-[85%] max-h-[85%] object-contain drop-shadow-2xl rounded-3xl"
                 />
               </div>
             ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full lg:w-[28%]">
            {features.slice(2, 4).map((feat, idx) => (
              <div 
                key={feat.id} 
                onMouseEnter={() => setActiveTab(idx + 2)}
                onClick={() => setActiveTab(idx + 2)}
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-300 ${
                  activeTab === idx + 2
                    ? 'bg-white shadow-xl dark:bg-white/10 scale-105 z-10 relative border-l-4 border-brand-500' 
                    : 'bg-[#e4e4e4] dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10'
                }`}
              >
                <div className={`transition-all duration-500 transform ${activeTab === idx + 2 ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{feat.label}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
