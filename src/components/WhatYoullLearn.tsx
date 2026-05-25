import { Check } from "lucide-react";

const learningItems = [
  {
    title: "Understand all 99 Beautiful Names of Allah",
    detail: "Easy, clear explanations for every Name — accessible for beginners and enriching for advanced learners.",
  },
  {
    title: "Explore authentic Quran verses and hadiths",
    detail: "Discover the Quranic ayat and verified hadiths directly connected to each Beautiful Name of Allah.",
  },
  {
    title: "Build daily remembrance through reflections",
    detail: "Consistent spiritual insights and dhikr practices woven into your everyday routine.",
  },
  {
    title: "Listen to clear and beautiful Arabic pronunciation",
    detail: "Hear each Name recited with proper Tajweed so you can remember it with your heart and tongue.",
  },
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
    <div className="flex items-center justify-center relative w-full h-full min-h-[320px]">
      {/* Outer glow ring */}
      <div className="absolute w-64 h-64 rounded-full border border-brand-500/20 animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute w-48 h-48 rounded-full border border-brand-500/30" />

      {/* Rotating dashes ring */}
      <svg
        className="absolute w-72 h-72 opacity-20"
        viewBox="0 0 200 200"
        style={{ animation: "spinSlow 30s linear infinite" }}
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const r = 96;
          const x1 = 100 + (r - 4) * Math.cos(angle);
          const y1 = 100 + (r - 4) * Math.sin(angle);
          const x2 = 100 + (r + 4) * Math.cos(angle);
          const y2 = 100 + (r + 4) * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#03b7ce"
              strokeWidth={i % 9 === 0 ? "2" : "0.8"}
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* Radial glow */}
      <div
        className="absolute w-48 h-48 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(3,183,206,0.30) 0%, rgba(3,183,206,0.10) 55%, transparent 80%)",
        }}
      />

      {/* Center card */}
      <div className="relative z-10 flex flex-col items-center justify-center w-36 h-36 rounded-[2rem] bg-[#0a1628] border border-brand-500/30 shadow-[0_0_40px_rgba(3,183,206,0.2)] backdrop-blur-md">
        <span className="text-5xl font-bold text-brand-400 leading-none" style={{ fontFamily: "serif" }}>
          ٩٩
        </span>
        <span className="text-[10px] text-brand-300/70 tracking-widest uppercase mt-1">
          Names
        </span>
      </div>

      {/* Floating badges */}
      {[
        { label: "Al-Rahman", angle: 315, r: 112 },
        { label: "Al-Kareem", angle: 45,  r: 112 },
        { label: "Al-Hakeem", angle: 135, r: 112 },
        { label: "Al-Wadud",  angle: 225, r: 112 },
      ].map(({ label, angle, r }, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <div
            key={i}
            className="absolute bg-[#0f172a] border border-brand-500/20 rounded-full px-3 py-1 text-[10px] text-brand-300/80 whitespace-nowrap shadow-lg"
            style={{
              transform: `translate(${r * Math.cos(rad)}px, ${r * Math.sin(rad)}px)`,
            }}
          >
            {label}
          </div>
        );
      })}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      ` }} />
    </div>
  );
}

export default function WhatYoullLearn() {
  return (
    <section className="w-full py-24 bg-[#020617] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative rounded-[3rem] bg-[#0f172a] border border-white/5 px-6 py-20 md:px-16 overflow-hidden">

          <StarsBackground />

          {/* Top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
          {/* Bottom-left glow accent */}
          <div className="absolute bottom-0 left-0 w-96 h-64 bg-brand-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Heading + Items */}
            <div>
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
                A transformative journey through the Beautiful Names of Allah —
                crafted to build knowledge, remembrance, and a lasting spiritual connection.
              </p>

              {/* Learning items */}
              <div className="flex flex-col gap-4">
                {learningItems.map((item, i) => (
                  <div
                    key={i}
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
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Decorative orb */}
            <div className="hidden lg:flex items-center justify-center">
              <DecorativeOrb />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
