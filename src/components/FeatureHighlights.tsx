import { Zap, Headphones, Activity } from "lucide-react";

function MoodTrackerCard() {
  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-[2rem] overflow-hidden relative flex flex-col h-[400px]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full pointer-events-none" />
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
      />

      {/* Animation Container */}
      <div className="flex-1 relative flex items-center justify-center p-8">
        <div className="w-full relative h-20 flex flex-col justify-end pb-2">
          {/* 5 Background Faces */}
          <div className="absolute top-0 left-0 right-0 flex justify-between px-2 text-white/20">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d={i < 2 ? "M8 15h8" : i === 2 ? "M8 15s1.5 2 4 2 4-2 4-2" : "M8 14s1.5 2 4 2 4-2 4-2"}></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            ))}
          </div>

          {/* Track background */}
          <div className="w-full h-1.5 bg-white/10 rounded-full relative overflow-hidden">
            {/* Animated brand fill */}
            <div className="absolute top-0 bottom-0 left-0 bg-brand-500 lottie-mood-fill rounded-full" />
          </div>

          {/* Animated Thumb and Highlighted Face */}
          <div className="absolute top-[-18px] left-0 w-10 flex flex-col items-center lottie-mood-thumb">
            <div className="relative">
              {/* Teardrop background */}
              <svg className="w-10 h-10 text-brand-500 drop-shadow-[0_0_15px_rgba(3,183,206,0.6)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C12 22 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 12 22 12 22Z" />
              </svg>
              {/* Face inside */}
              <svg className="w-5 h-5 text-white absolute top-2 left-1/2 -translate-x-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            {/* Slider thumb */}
            <div className="w-4 h-4 bg-gray-200 rounded-full mt-1 border-[3px] border-[#0f172a]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 pt-0 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
            <Activity className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">Learn the 99 Names</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Explore the meanings, virtues, wisdom, and spiritual significance behind every Beautiful Name of Allah in a simple and engaging format.
        </p>
      </div>
    </div>
  );
}

function GuidedMeditationsCard() {
  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-[2rem] overflow-hidden relative flex flex-col h-[400px]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      {/* Animation Container */}
      <div className="flex-1 relative flex items-center justify-center p-8">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Animated Lotus */}
          <div className="absolute inset-0 flex items-center justify-center lottie-breathe text-brand-400/30">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-[0_0_20px_rgba(3,183,206,0.3)]">
              <path d="M50 80 C 20 80, 0 50, 50 10 C 100 50, 80 80, 50 80 Z" />
              <path d="M50 80 C 10 70, -10 30, 40 15 C 50 40, 50 60, 50 80 Z" opacity="0.6" />
              <path d="M50 80 C 90 70, 110 30, 60 15 C 50 40, 50 60, 50 80 Z" opacity="0.6" />
              <path d="M50 80 C 20 60, 0 30, 30 25 C 40 45, 45 60, 50 80 Z" opacity="0.4" />
              <path d="M50 80 C 80 60, 100 30, 70 25 C 60 45, 55 60, 50 80 Z" opacity="0.4" />
            </svg>
          </div>
          
          {/* Meditating Figure */}
          <div className="absolute inset-0 flex items-center justify-center z-10 text-gray-300 drop-shadow-md">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-20 h-20 mt-4">
              <circle cx="50" cy="20" r="12" />
              <path d="M 50 36 C 25 36, 15 65, 20 75 L 35 85 L 65 85 L 80 75 C 85 65, 75 36, 50 36 Z" opacity="0.8" />
              <path d="M 20 75 Q 50 95, 80 75 Q 50 85, 20 75 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 pt-0 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
            <Headphones className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">Quran & Hadith References</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Discover authentic Quranic verses and verified hadiths connected to each Name, explained in a clear and easy-to-understand way.
        </p>
      </div>
    </div>
  );
}

function HabitBuilderCard() {
  const icons = [
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
  ];

  return (
    <div className="bg-[#0f172a] border border-white/5 rounded-[2rem] overflow-hidden relative flex flex-col h-[400px]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      {/* Animation Container */}
      <div className="flex-1 relative flex items-center justify-center p-8 overflow-hidden">
        
        {/* Concentric Arcs */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-32 h-32 rounded-full border-t border-white" />
          <div className="absolute w-48 h-48 rounded-full border-t border-white" />
          <div className="absolute w-64 h-64 rounded-full border-t border-white" />
        </div>

        {/* Center Smiling Face */}
        <div className="relative z-10 w-20 h-20 rounded-full bg-brand-500/40 border border-brand-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(3,183,206,0.3)] backdrop-blur-sm">
          <svg className="w-10 h-10 text-brand-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <path d="M9 9h.01"></path>
            <path d="M15 9h.01"></path>
          </svg>
        </div>

        {/* Rotating Icons */}
        <div className="absolute inset-0 flex items-center justify-center lottie-spin">
          {icons.map((icon, i) => {
            const angle = (i * (180 / (icons.length - 1))) * (Math.PI / 180) - Math.PI;
            const radius = 100;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div 
                key={i} 
                className="absolute w-8 h-8 bg-[#1e293b] border border-white/10 rounded-full flex items-center justify-center text-white/70 shadow-lg lottie-counter-spin"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {icon}
              </div>
            );
          })}
        </div>

      </div>

      {/* Content */}
      <div className="p-8 pt-0 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-semibold text-white">Daily Reflections</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Build consistency in dhikr and remembrance through peaceful reminders, reflections, and daily spiritual learning.
        </p>
      </div>
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="w-full py-32 bg-[#020617] text-white overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Feature Highlights</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to learn, reflect, and connect with Allah through His Beautiful Names, carefully crafted for daily spiritual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MoodTrackerCard />
          <GuidedMeditationsCard />
          <HabitBuilderCard />
        </div>
      </div>

      {/* Inline styles for Lottie-like animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes lottieSlideThumb {
          0%, 100% { transform: translateX(0%); }
          50% { transform: translateX(180px); }
        }
        @keyframes lottieSlideFill {
          0%, 100% { width: 10%; }
          50% { width: 85%; }
        }
        @keyframes lottieBreathe {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes lottieSpin {
          0% { transform: rotate(-30deg); }
          50% { transform: rotate(30deg); }
          100% { transform: rotate(-30deg); }
        }
        @keyframes lottieCounterSpin {
          0% { transform: rotate(30deg); }
          50% { transform: rotate(-30deg); }
          100% { transform: rotate(30deg); }
        }

        .lottie-mood-thumb {
          animation: lottieSlideThumb 4s ease-in-out infinite;
        }
        .lottie-mood-fill {
          animation: lottieSlideFill 4s ease-in-out infinite;
        }
        .lottie-breathe {
          animation: lottieBreathe 4s ease-in-out infinite;
        }
        .lottie-spin {
          animation: lottieSpin 8s ease-in-out infinite;
        }
        .lottie-counter-spin {
          animation: lottieCounterSpin 8s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
