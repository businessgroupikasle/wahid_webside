import { HeartHandshake, Box, Layers, BoxSelect, SquareStack, Globe } from "lucide-react";

const logos = [
  { icon: HeartHandshake, label: "Mind Coaches" },
  { icon: Box, label: "Therapists" },
  { icon: BoxSelect, label: "Yoga Studios" },
  { icon: Layers, label: "Wellness Retreats" },
  { icon: SquareStack, label: "Mindfulness" },
  { icon: Globe, label: "Techwave" },
];

export default function LogoTicker() {
  // We repeat the logos multiple times to ensure enough content to fill wide screens and animate seamlessly
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full py-16 border-t border-white/5 bg-[#020617] overflow-hidden relative flex items-center">
      {/* Gradients for smooth fade in/out on the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      {/* Ticker Track */}
      <div className="flex items-center gap-16 min-w-max animate-[scroll-left_40s_linear_infinite] px-8 hover:[animation-play-state:paused]">
        {repeatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default grayscale hover:grayscale-0">
            <logo.icon className="w-7 h-7 text-gray-300" />
            <span className="text-xl font-semibold text-gray-300 tracking-wide whitespace-nowrap">
              {logo.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
