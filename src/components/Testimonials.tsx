import React from "react";

const row1 = [
  {
    quote: "Every morning starts with MindFlow. It's like gentle therapy in my pocket, guiding me through calm and focus.",
    name: "Daniel Reyes",
    role: "Bolt E-Bikes",
    avatar: "DR",
    color: "bg-brand-500"
  },
  {
    quote: "MindFlow helped me reconnect with myself, slow down my thoughts, and approach each day with peaceful clarity.",
    name: "Amanda Lee",
    role: "Homeowner",
    avatar: "AL",
    color: "bg-brand-500"
  },
  {
    quote: "The short meditations are perfect during breaks. MindFlow fits easily into my busy day and restores balance.",
    name: "Amina Yusuf",
    role: "EcoHive",
    avatar: "AY",
    color: "bg-brand-500"
  },
  {
    quote: "I've tried countless mindfulness apps, but MindFlow is the only one that truly understands my emotions and feels human.",
    name: "Sarah Kim",
    role: "NovaSkin",
    avatar: "SK",
    color: "bg-brand-500"
  }
];

const row2 = [
  {
    quote: "MindFlow gave me a safe space to unwind after stressful workdays. It's my go-to tool for a mental reset.",
    name: "Sophia Carter",
    role: "Homeowner",
    avatar: "SC",
    color: "bg-brand-500"
  },
  {
    quote: "I used to wake up anxious, but MindFlow's morning reflections have brought calm, structure, and positivity back.",
    name: "Liam Novak",
    role: "EcoHive",
    avatar: "LN",
    color: "bg-brand-500"
  },
  {
    quote: "MindFlow's tone is caring and warm—it helps me manage anxiety naturally without feeling pressured or judged.",
    name: "Aisha Rahman",
    role: "NovaSkin",
    avatar: "AR",
    color: "bg-brand-500"
  },
  {
    quote: "I love how MindFlow celebrates progress. It's made mindfulness easy, rewarding, and an everyday part of my routine.",
    name: "Liam Parker",
    role: "Bolt E-Bikes",
    avatar: "LP",
    color: "bg-rose-600"
  }
];

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="w-[85vw] max-w-[350px] md:max-w-none md:w-[420px] h-auto min-h-[240px] bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between flex-shrink-0 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div>
        <svg className="w-8 h-8 text-white rotate-180 mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 11h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3v8z" />
          <path d="M10 11l-2 5" />
          <path d="M21 11h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3v8z" />
          <path d="M21 11l-2 5" />
        </svg>
        <p className="text-gray-300 text-[15px] leading-relaxed">"{t.quote}"</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${t.color}`}>
          {t.avatar}
        </div>
        <div>
          <div className="text-white font-medium text-sm">{t.name}</div>
          <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate arrays to ensure seamless infinite scrolling
  const scrollRow1 = [...row1, ...row1, ...row1, ...row1];
  const scrollRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="w-full py-32 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Real People. Real Calm.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Hear how MindFlow helps thousands find clarity, balance, and a little more peace every day.
        </p>
      </div>

      <div className="relative flex flex-col gap-6">
        {/* Gradients for smooth fade in/out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scroll Right to Left */}
        <div className="flex items-center gap-6 min-w-max animate-[scroll-left_60s_linear_infinite] px-6 hover:[animation-play-state:paused]">
          {scrollRow1.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Row 2: Scroll Left to Right */}
        {/* We use the same scroll-left keyframe but with animation-direction: reverse */}
        <div className="flex items-center gap-6 min-w-max animate-[scroll-left_60s_linear_infinite] [animation-direction:reverse] px-6 hover:[animation-play-state:paused]">
          {scrollRow2.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
