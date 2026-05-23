import { Check } from "lucide-react";

export default function MoodInsights() {
  const features = [
    "Reflect on how you feel with the Mood Tracker",
    "Build lasting habits with gentle reminders",
    "Calm your mind with quick guided meditations",
    "Understand your emotions with clear visual insights"
  ];

  return (
    <section className="w-full py-24 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Mockup Container */}
        <div className="flex-1 w-full max-w-[540px] relative">
          {/* Outer styled box with gradients */}
          <div className="relative w-full aspect-square rounded-[3rem] border border-white/5 bg-[#140b2e] overflow-hidden flex items-end justify-center pt-16 px-16">
            
            {/* Background Grid */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #03b7ce 1px, transparent 1px), linear-gradient(to bottom, #03b7ce 1px, transparent 1px)`,
                backgroundSize: '48px 48px'
              }}
            />
            {/* Top Right Glow */}
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-brand-500/40 rounded-full blur-[100px] pointer-events-none" />

            {/* Phone Mockup */}
            <div className="relative w-full max-w-[320px] h-full bg-[#121212] rounded-t-[40px] border-x-[8px] border-t-[8px] border-[#2a2a2a] shadow-2xl flex flex-col overflow-hidden">
              
              {/* Camera Hole */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] z-20 border border-white/5" />

              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pt-4 pb-2 text-[10px] text-white/80 relative z-10 font-medium">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20V2L2 22z" /></svg>
                  <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
                </div>
              </div>

              {/* App Content */}
              <div className="flex-1 px-5 pt-6 flex flex-col gap-4">
                
                <div>
                  <h3 className="text-white text-base font-semibold mb-1">Your Emotional Journey</h3>
                  <p className="text-gray-400 text-[10px] leading-relaxed pr-4">
                    A 7-day reflection on your moods, energy, and mindfulness growth.
                  </p>
                </div>

                {/* Chart Card */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 pb-3 relative">
                  {/* Y Axis labels */}
                  <div className="absolute left-4 top-4 bottom-8 flex flex-col justify-between text-[8px] text-gray-500">
                    <span>10</span>
                    <span>6</span>
                    <span>3</span>
                    <span>0</span>
                  </div>
                  
                  {/* Grid Lines */}
                  <div className="absolute left-8 right-4 top-5 bottom-8 flex flex-col justify-between">
                    <div className="border-b border-white/5 w-full" />
                    <div className="border-b border-white/5 w-full" />
                    <div className="border-b border-white/5 w-full" />
                    <div className="border-b border-white/5 w-full" />
                  </div>

                  {/* Chart SVG */}
                  <div className="relative h-24 ml-4 mt-1 mb-2">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path 
                        d="M 0 70 C 15 65, 20 40, 33 35 C 45 30, 48 55, 60 50 C 75 45, 85 30, 100 25" 
                        fill="none" 
                        stroke="#03b7ce" 
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Data Point */}
                      <circle cx="48" cy="46" r="3" fill="#03b7ce" className="ring-2 ring-[#1a1a1a]" />
                    </svg>

                    {/* Tooltip */}
                    <div className="absolute left-[48%] top-[46%] ml-2 -mt-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-1.5 flex items-center gap-2 shadow-lg z-10 w-28">
                      <div className="text-sm">🙂</div>
                      <div className="flex flex-col">
                        <span className="text-[8px] text-white font-medium">Wed</span>
                        <span className="text-[7px] text-gray-300">Mood level: 6/10</span>
                      </div>
                    </div>
                  </div>

                  {/* X Axis labels */}
                  <div className="flex justify-between text-[8px] text-gray-500 ml-4 relative z-10">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>

                  {/* Insight Tip */}
                  <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-2.5 text-[9px] leading-relaxed text-gray-300">
                    <span className="text-brand-400 font-medium">Insight Tip:</span> Regular reflection helps smooth emotional highs and lows. Try journaling after stressful events.
                  </div>
                </div>

                {/* Secondary Card */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex-1">
                  <h4 className="text-white text-xs font-semibold mb-1">Emotional Balance Overview</h4>
                  <p className="text-gray-400 text-[10px]">Your mood distribution this week</p>
                  
                  {/* Fake progress bars for UI */}
                  <div className="mt-4 flex gap-1 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-400 w-[40%]" />
                    <div className="bg-brand-400 w-[30%]" />
                    <div className="bg-brand-400 w-[20%]" />
                    <div className="bg-brand-400 w-[10%]" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.15]">
            Finally—an app that brings<br />
            <span className="text-brand-100">calm to your everyday.</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Hear how MindFlow helps thousands find clarity, balance, and a little more peace every day.
          </p>
          
          <div className="flex flex-col gap-5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-6 h-6 shrink-0 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/20 text-brand-400">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-gray-200 font-medium text-[15px]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
