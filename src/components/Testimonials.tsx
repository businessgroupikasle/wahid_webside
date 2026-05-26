"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ─── typewriter phrases ─────────────────────────────────── */
const PHRASES = ["Real Calm", "Real Balance", "Real Peace", "Real Clarity", "Real Focus"];

function TypewriterText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">("typing");

  useEffect(() => {
    const phrase = PHRASES[index];

    if (phase === "typing") {
      if (text === phrase) {
        const t = setTimeout(() => setPhase("deleting"), 1800);
        return () => clearTimeout(t);
      }
      const t = setTimeout(
        () => setText(phrase.slice(0, text.length + 1)),
        85
      );
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text === "") {
        setIndex((i) => (i + 1) % PHRASES.length);
        setPhase("typing");
        return;
      }
      const t = setTimeout(() => setText(text.slice(0, -1)), 45);
      return () => clearTimeout(t);
    }
  }, [text, phase, index]);

  return (
    <span className="text-brand-400 whitespace-nowrap">
      {text}
      {/* blinking cursor */}
        {/* <span
          className="inline-block align-middle ml-[2px] w-[2px] rounded-full bg-brand-400 animate-pulse"
          style={{ height: "0.85em", verticalAlign: "middle" }}
          aria-hidden
        /> */}
    </span>
  );
}

/* ─── data ──────────────────────────────────────────────── */
type Card = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  accent: string;
};

const row1: Card[] = [
  {
    quote: "Every morning starts with MindFlow. It's like gentle therapy in my pocket, guiding me through calm and focus.",
    name: "Daniel Reyes",
    role: "Bolt E-Bikes",
    avatar: "DR",
    accent: "#03b7ce",
  },
  {
    quote: "MindFlow helped me reconnect with myself, slow down my thoughts, and approach each day with peaceful clarity.",
    name: "Amanda Lee",
    role: "Homeowner",
    avatar: "AL",
    accent: "#8b5cf6",
  },
  {
    quote: "The short meditations are perfect during breaks. MindFlow fits easily into my busy day and restores balance.",
    name: "Amina Yusuf",
    role: "EcoHive",
    avatar: "AY",
    accent: "#10b981",
  },
  {
    quote: "I've tried countless mindfulness apps, but MindFlow is the only one that truly understands my emotions.",
    name: "Sarah Kim",
    role: "NovaSkin",
    avatar: "SK",
    accent: "#f59e0b",
  },
  {
    quote: "MindFlow gave me a safe space to unwind after stressful workdays. It's my go-to tool for a mental reset.",
    name: "Sophia Carter",
    role: "Homeowner",
    avatar: "SC",
    accent: "#ec4899",
  },
  {
    quote: "I used to wake up anxious, but MindFlow's morning reflections brought calm, structure, and positivity back.",
    name: "Liam Novak",
    role: "EcoHive",
    avatar: "LN",
    accent: "#3b82f6",
  },
  {
    quote: "MindFlow's tone is caring and warm — it helps me manage anxiety naturally without feeling pressured.",
    name: "Aisha Rahman",
    role: "NovaSkin",
    avatar: "AR",
    accent: "#6366f1",
  },
  {
    quote: "I love how MindFlow celebrates progress. It's made mindfulness easy, rewarding, and part of my daily routine.",
    name: "Liam Parker",
    role: "Bolt E-Bikes",
    avatar: "LP",
    accent: "#f97316",
  },
];

/* ─── card ──────────────────────────────────────────────── */
function TestimonialCard({ t }: { t: Card }) {
  return (
    <div className="group/card relative w-[82vw] max-w-[300px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-auto min-h-[210px] bg-[#080f1e] border border-white/[0.07] rounded-2xl p-5 md:p-6 flex flex-col justify-between flex-shrink-0 overflow-hidden transition-all duration-400 hover:-translate-y-0.5 hover:border-white/[0.15] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">

      {/* accent top line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[1.5px] opacity-60 group-hover/card:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${t.accent} 0%, transparent 65%)` }}
      />

      {/* hover inner glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 55% at 8% 0%, ${t.accent}0d 0%, transparent 65%)` }}
      />

      {/* watermark */}
      <div
        aria-hidden
        className="absolute -top-2 right-3 text-[72px] font-serif leading-none select-none pointer-events-none"
        style={{ color: `${t.accent}10` }}
      >"</div>

      {/* quote */}
      <div className="relative z-10">
        <svg
          className="w-5 h-5 mb-3 opacity-50"
          viewBox="0 0 32 32"
          fill="currentColor"
          style={{ color: t.accent }}
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-300 text-[13.5px] md:text-[14px] leading-relaxed">
          "{t.quote}"
        </p>
      </div>

      {/* author */}
      <div className="flex items-center gap-2.5 mt-4 pt-3.5 border-t border-white/[0.06] relative z-10">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[11px] flex-shrink-0"
          style={{
            background: `${t.accent}1a`,
            border: `1px solid ${t.accent}45`,
            color: t.accent,
          }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-white font-medium text-[13px] leading-none">{t.name}</p>
          <p className="text-gray-500 text-[11px] mt-1">{t.role}</p>
        </div>

        {/* stars — right side */}
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-3 h-3" viewBox="0 0 20 20"
              fill={i < 5 ? t.accent : "rgba(255,255,255,0.10)"}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── section ───────────────────────────────────────────── */
export default function Testimonials() {
  const scrollRow = [...row1, ...row1, ...row1, ...row1];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#020617] overflow-hidden">

      {/* ── header ── */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 md:mb-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-brand-400 text-[11px] font-semibold tracking-widest uppercase">
            Testimonials
          </span>
        </div>

        {/* heading with typewriter */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-5xl font-medium tracking-tight text-white mb-4 min-h-[1.3em]">
          Real People {" "}
          <TypewriterText />
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Thousands trust MindFlow every day to find clarity, balance, and a
          little more peace.
        </p>
      </motion.div>

      {/* ── scrolling row ── */}
      <div className="relative">
        {/* edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        <div className="flex items-stretch gap-4 md:gap-5 min-w-max animate-[scroll-left_55s_linear_infinite] px-4 sm:px-6 hover:[animation-play-state:paused]">
          {scrollRow.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

    </section>
  );
}
