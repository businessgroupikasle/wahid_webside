import React from "react";

function ParticleDust() {
  // Generate a fixed array of particles to avoid hydration mismatches
  const particles = Array.from({ length: 50 }).map((_, i) => {
    // Deterministic pseudo-random generation based on index
    const left = ((i * 17) % 100);
    const bottom = ((i * 23) % 100);
    const size = ((i * 7) % 2) + 1;
    const opacity = ((i * 11) % 50 + 10) / 100;
    const duration = ((i * 13) % 4) + 2;
    const delay = ((i * 19) % 3);

    return { left, bottom, size, opacity, duration, delay };
  });

  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10" />
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="w-full py-16 bg-[#020617] px-6">
      <div className="max-w-[1200px] mx-auto bg-[#0f172a] rounded-[2rem] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center py-16 md:py-20 shadow-2xl">
        
        {/* Cinematic Light Beams */}
        <div className="absolute -top-32 -left-32 w-80 h-[800px] bg-brand-500/20 blur-[90px] -rotate-45 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-80 h-[800px] bg-brand-500/20 blur-[90px] rotate-45 pointer-events-none" />

        {/* Ambient Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-brand-500/5 blur-[50px] pointer-events-none" />

        {/* Floating Particles */}
        <ParticleDust />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-white mb-6 leading-tight">
            Find Calm In Your Everyday Life.
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Our AI chatbot transformed our customer support — faster responses, happier clients, and effortless automation every day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* App Store Button */}
            <button className="w-full sm:w-[180px] bg-[#09090b] border border-white/10 hover:border-white/20 text-white rounded-xl px-6 py-3.5 flex items-center justify-center gap-3 transition-colors shadow-lg shadow-black/50 group cursor-pointer">
              <svg className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="12" />
                <path d="M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="white" />
                <path d="M12 16a4 4 0 01-4-4h-2a6 6 0 1012 0h-2a4 4 0 01-4 4z" fill="white" />
              </svg>
              <span className="font-semibold text-[15px]">App Store</span>
            </button>
            
            {/* Play Store Button */}
            <button className="w-full sm:w-[180px] bg-white text-black rounded-xl px-6 py-3.5 flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors shadow-lg group cursor-pointer">
              <svg className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="12" />
                <path d="M12 7v10m-3-7l6 4-6 4z" fill="white" />
              </svg>
              <span className="font-semibold text-[15px]">Play Store</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
