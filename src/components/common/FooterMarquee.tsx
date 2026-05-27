import React from "react";

export default function FooterMarquee() {
  const text = "Wahid";
  // Create enough repeats for a seamless marquee
  const repeatedText = [...Array(10)].fill(text);

  return (
    <div className="relative w-full overflow-hidden mt-0 pt-2">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#020617] pointer-events-none" />

      {/* Static Star Field */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="star-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" className="fill-slate-900 dark:fill-white" opacity="0.3" />
            <circle cx="45" cy="40" r="1.5" className="fill-slate-900 dark:fill-white" opacity="0.2" />
            <circle cx="85" cy="20" r="1" className="fill-slate-900 dark:fill-white" opacity="0.2" />
            <circle cx="25" cy="80" r="1" className="fill-slate-900 dark:fill-white" opacity="0.1" />
            <circle cx="75" cy="85" r="1.5" className="fill-slate-900 dark:fill-white" opacity="0.25" />
            <circle cx="105" cy="65" r="1" className="fill-slate-900 dark:fill-white" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#star-pattern)" />
      </svg>

      {/* Floating Particles/Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-slate-900 dark:bg-white rounded-full animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              bottom: `${(i * 23) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              opacity: (i % 5) / 10 + 0.1,
              animationDuration: `${(i % 4) + 3}s`
            }}
          />
        ))}
      </div>

      {/* Scrolling Text */}
      <div className="relative z-10 flex whitespace-nowrap -mb-6">
        {/* Primary Track */}
        <div className="animate-[scroll-left_40s_linear_infinite] flex items-center gap-6 px-6">
          {repeatedText.map((item, i) => (
            <span 
              key={`a-${i}`} 
              className="text-[60px] md:text-[100px] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-brand-300 to-brand-500 select-none opacity-90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* Edge Gradients for Smoothness */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-20 pointer-events-none" />
      {/* Slight bottom fade for the text */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-[#020617] to-transparent z-20 pointer-events-none" />
    </div>
  );
}
