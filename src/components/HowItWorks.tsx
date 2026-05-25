import { ArrowLeft, Lock } from "lucide-react";

function StarsBackground() {
  // Generate a static array of stars to prevent hydration mismatch
  const stars = [
    { top: "10%", left: "15%", size: 2, opacity: 0.6 },
    { top: "20%", left: "5%", size: 1, opacity: 0.3 },
    { top: "8%", left: "45%", size: 3, opacity: 0.8 },
    { top: "25%", left: "30%", size: 1.5, opacity: 0.5 },
    { top: "5%", left: "75%", size: 2, opacity: 0.7 },
    { top: "15%", left: "85%", size: 1, opacity: 0.4 },
    { top: "30%", left: "65%", size: 2.5, opacity: 0.9 },
    { top: "12%", left: "95%", size: 1.5, opacity: 0.5 },
    { top: "40%", left: "20%", size: 1, opacity: 0.3 },
    { top: "35%", left: "80%", size: 2, opacity: 0.6 },
    { top: "50%", left: "10%", size: 1.5, opacity: 0.4 },
    { top: "45%", left: "90%", size: 1, opacity: 0.3 },
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
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i % 3)}s`
          }}
        />
      ))}
    </div>
  );
}

function ReflectCard() {
  return (
    <div className="bg-[#18181b] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col relative group">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Text */}
      <div className="p-8 pb-0 relative z-10">
        <h3 className="text-2xl font-medium text-white mb-4">Learn</h3>
        <p className="text-gray-400 text-sm leading-relaxed pr-4">
          Explore the meanings, virtues, Quranic references, and authentic hadiths behind every Beautiful Name of Allah.
        </p>
      </div>

      {/* Bottom Phone Mockup */}
      <div className="flex-1 flex items-end justify-center px-8 mt-8">
        <div className="w-full h-64 bg-[#121212] rounded-t-[2.5rem] border-x-[8px] border-t-[8px] border-[#2a2a2a] shadow-2xl relative overflow-hidden flex flex-col translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2 text-[10px] text-white/80 font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20V2L2 22z" /></svg>
              <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
            </div>
          </div>

          <div className="px-5 pt-2 flex flex-col gap-3 relative z-10">
            <div>
              <h4 className="text-white text-xs font-semibold">Your Emotional Journey</h4>
              <p className="text-gray-400 text-[8px] leading-relaxed">
                A 7-day reflection on your moods, energy, and mindfulness growth.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3 pb-2 relative">
              {/* Chart SVG */}
              <div className="relative h-16 ml-3 mt-1">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0 70 C 15 65, 20 40, 33 35 C 45 30, 48 55, 60 50 C 75 45, 85 30, 100 25" fill="none" stroke="#03b7ce" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <circle cx="48" cy="46" r="3" fill="#fbbf24" className="ring-2 ring-[#1a1a1a]" />
                </svg>
                {/* Tooltip */}
                <div className="absolute left-[48%] top-[46%] ml-2 -mt-3 bg-white/10 backdrop-blur-md border border-white/20 rounded pl-1 pr-2 py-0.5 flex items-center gap-1">
                  <span className="text-[10px]">🙂</span>
                  <div className="flex flex-col">
                    <span className="text-[6px] text-white font-medium leading-tight">Wed</span>
                    <span className="text-[5px] text-gray-300 leading-tight">Mood level: 6/10</span>
                  </div>
                </div>
              </div>
              {/* X Axis */}
              <div className="flex justify-between text-[6px] text-gray-500 ml-3">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </div>
              <div className="mt-2 bg-white/5 rounded px-2 py-1.5 text-[7px] text-gray-400">
                Insight Tip: Regular reflection helps smooth emotional highs...
              </div>
            </div>
          </div>
          {/* Ambient Brand glow in phone */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-brand-500/10 blur-[40px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function RelaxCard() {
  return (
    <div className="bg-[#18181b] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col relative group">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Phone Mockup */}
      <div className="flex-1 flex items-start justify-center px-8 mb-8">
        <div className="w-full h-64 bg-[#121212] rounded-b-[2.5rem] border-x-[8px] border-b-[8px] border-[#2a2a2a] shadow-2xl relative overflow-hidden flex flex-col -translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
          <div className="p-4 pt-6 flex flex-col gap-3 relative z-10">
            {/* Audio Player Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-brand-500">06</div>
                <div>
                  <div className="text-white text-[10px] font-medium">Audio title</div>
                  <div className="text-gray-400 text-[7px]">Audio - 15:22 min</div>
                </div>
              </div>
              <Lock className="w-3 h-3 text-gray-500" />
            </div>

            {/* Sunset Challenge Card */}
            <div className="rounded-xl h-28 relative overflow-hidden p-3 flex flex-col justify-end">
              {/* Custom SVG Sunset Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500 via-brand-400 to-brand-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-300 rounded-full shadow-[0_0_20px_rgba(253,224,71,1)]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-brand-500/80 backdrop-blur-sm" />
              
              <div className="absolute inset-0 bg-black/10" />
              
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <div className="text-white text-[10px] font-bold shadow-sm">Rise and Shine Challenge</div>
                  <div className="text-white/80 text-[7px]">Ongoing • 1/6</div>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center relative bg-black/20 backdrop-blur-md">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="16" cy="16" r="14" fill="none" stroke="white" strokeWidth="2.5" strokeDasharray="15 100" strokeLinecap="round" />
                  </svg>
                  <span className="text-[7px] font-bold text-white">10%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="p-8 pt-0 relative z-10">
        <h3 className="text-2xl font-medium text-white mb-4">Reflect</h3>
        <p className="text-gray-400 text-sm leading-relaxed pr-4">
          Receive daily reminders and spiritual reflections that help strengthen your heart and connection with Allah.
        </p>
      </div>
    </div>
  );
}

function GrowCard() {
  const bars = [10, 15, 8, 20, 12, 25, 18, 22, 14, 28, 16, 20, 10, 15, 8, 20, 12];
  
  return (
    <div className="bg-[#18181b] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col relative group">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Text */}
      <div className="p-8 pb-0 relative z-10">
        <h3 className="text-2xl font-medium text-white mb-4">Connect</h3>
        <p className="text-gray-400 text-sm leading-relaxed pr-4">
          Grow spiritually through remembrance, reflection, and consistent Islamic learning.
        </p>
      </div>

      {/* Bottom Phone Mockup */}
      <div className="flex-1 flex items-end justify-center px-8 mt-8">
        <div className="w-full h-64 bg-[#121212] rounded-t-[2.5rem] border-x-[8px] border-t-[8px] border-[#2a2a2a] shadow-2xl relative overflow-hidden flex flex-col translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2 text-[10px] text-white/80 font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20V2L2 22z" /></svg>
              <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 pt-2 relative z-10">
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-white text-[11px] font-medium">Pre-recorded Sessions</span>
          </div>

          {/* Visualizer & Meditator */}
          <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center">
            {/* Audio Bars */}
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 200 100">
              {bars.map((height, i) => {
                const angle = (i * (180 / (bars.length - 1))) - 90;
                return (
                  <rect 
                    key={i} 
                    x="98" y="50" width="3" height={height} 
                    rx="1.5" 
                    fill="#03b7ce" 
                    transform={`rotate(${angle} 100 100) translate(0 -45)`} 
                  />
                )
              })}
            </svg>
            
            {/* Sunset Half Circle */}
            <div className="relative w-28 h-14 rounded-t-full overflow-hidden flex justify-center items-end border-b-2 border-brand-500 shadow-[0_0_30px_rgba(3,183,206,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-300 via-brand-400 to-brand-500" />
              <div className="absolute bottom-0 w-full h-4 bg-brand-500/50 backdrop-blur-sm" />
              <div className="absolute bottom-3 w-8 h-8 rounded-full bg-yellow-300 blur-[2px]" />
              
              {/* Silhouette */}
              <svg className="w-8 h-8 text-[#121212] relative z-10 -mb-[1px]" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="30" r="12" />
                <path d="M 50 45 C 25 45, 10 80, 15 90 L 35 100 L 65 100 L 85 90 C 90 80, 75 45, 50 45 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full py-24 bg-[#020617] text-white">
      {/* Outer Container with Starry Glow */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative rounded-[3rem] bg-[#0f172a] border border-white/5 px-6 py-20 md:px-16 overflow-hidden">
          
          <StarsBackground />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col items-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-center mb-4 tracking-tight text-white/90">
                How It Works
              </h2>
              <p className="text-gray-400 text-center max-w-2xl text-sm sm:text-base leading-relaxed">
                A simple and beautiful journey to learn, reflect, and strengthen your connection with Allah every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ReflectCard />
              <RelaxCard />
              <GrowCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
