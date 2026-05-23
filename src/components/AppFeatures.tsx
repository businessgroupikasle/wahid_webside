'use client';

import { useState, useEffect, useRef } from "react";

type TabId = 'reflect' | 'relax' | 'grow' | 'balance';

const tabs: { id: TabId; label: string; description: string }[] = [
  {
    id: 'reflect',
    label: 'Reflect',
    description: 'Check in with your emotions daily and journal your thoughts to build lasting self-awareness.',
  },
  {
    id: 'relax',
    label: 'Relax',
    description: 'Take a moment to relax with guided audio sessions that calm your mind and reduce stress.',
  },
  {
    id: 'grow',
    label: 'Grow',
    description: 'Build habits that help you grow through structured challenges and daily progress tracking.',
  },
  {
    id: 'balance',
    label: 'Balance',
    description: 'Maintain balance throughout your day by monitoring sleep, movement, and mindfulness.',
  },
];

function BackIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-4 h-4 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PlayButton() {
  return (
    <div className="w-7 h-7 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
        <polygon points="5,3 19,12 5,21" />
      </svg>
    </div>
  );
}

function ReflectScreen() {
  const [selectedMood, setSelectedMood] = useState(3);
  const moods = ['😞', '😕', '😐', '🙂', '😄'];
  const entries = [
    { date: 'Today, 9:00 AM', text: 'Feeling grateful for the small things...' },
    { date: 'Yesterday', text: 'Noticed I was tense. Took a walk to reset.' },
    { date: 'May 21', text: 'Morning meditation helped my focus today.' },
  ];

  return (
    <div className="flex flex-col h-full text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 flex-shrink-0">
        <BackIcon />
        <span className="text-xs font-semibold">Reflect</span>
        <div className="w-4" />
      </div>
      <div className="mx-3 bg-brand-500/40 rounded-2xl p-3 mb-2 flex-shrink-0">
        <p className="text-[9px] text-gray-400 mb-2">How are you feeling today?</p>
        <div className="flex justify-between">
          {moods.map((emoji, i) => (
            <button
              key={i}
              onClick={() => setSelectedMood(i)}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-base transition-all cursor-pointer ${
                selectedMood === i ? 'bg-brand-500 scale-110 shadow-lg' : 'bg-white/10'
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-3 bg-gradient-to-br from-brand-500/50 to-brand-500/30 border border-white/10 rounded-2xl p-3 mb-2 flex-shrink-0">
        <p className="text-[8px] text-brand-400 uppercase tracking-wide mb-1">Today's Prompt</p>
        <p className="text-[9px] text-gray-200 leading-relaxed">What is one thing you're grateful for right now?</p>
      </div>
      <div className="px-3 flex-1 overflow-hidden">
        <p className="text-[8px] text-gray-500 uppercase tracking-wide mb-2">Recent Reflections</p>
        {entries.map((entry, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-2.5 mb-2">
            <p className="text-[8px] text-brand-400 mb-0.5">{entry.date}</p>
            <p className="text-[9px] text-gray-300 leading-relaxed">{entry.text}</p>
          </div>
        ))}
      </div>
      <div className="px-3 pb-5 mt-2 flex-shrink-0">
        <button className="w-full bg-brand-500 rounded-xl py-2.5 text-[10px] font-semibold text-white cursor-pointer">
          + New Reflection
        </button>
      </div>
    </div>
  );
}

function RelaxScreen() {
  const sessions = [
    { title: 'Deep Breathing', duration: '5 min', locked: false },
    { title: 'Ocean Waves', duration: '15 min', locked: true },
    { title: 'Rain Sound', duration: '20 min', locked: true },
    { title: 'Body Scan', duration: '10 min', locked: true },
    { title: 'Night Wind', duration: '25 min', locked: true },
  ];

  return (
    <div className="flex flex-col h-full text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 flex-shrink-0">
        <BackIcon />
        <span className="text-xs font-semibold">Relax</span>
        <div className="w-4" />
      </div>
      <div className="mx-3 rounded-2xl overflow-hidden mb-3 relative h-24 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-400 to-brand-500" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="text-[8px] bg-brand-500/40 text-brand-200 rounded-full px-2 py-0.5 mb-1 inline-block">Featured</span>
          <p className="text-xs font-semibold text-white">Evening Wind Down</p>
          <p className="text-[8px] text-white/70">Guided · 20 min</p>
        </div>
      </div>
      <div className="px-3 flex-1 overflow-hidden">
        <p className="text-[8px] text-gray-500 uppercase tracking-wide mb-2">Sessions</p>
        {sessions.map((session, i) => (
          <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2.5 mb-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-semibold border flex-shrink-0 ${
                !session.locked ? 'border-brand-500 text-brand-400' : 'border-white/20 text-white/40'
              }`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-medium truncate">{session.title}</p>
                <p className="text-[8px] text-gray-400">Audio · {session.duration}</p>
              </div>
            </div>
            {session.locked ? <LockIcon /> : <PlayButton />}
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowScreen() {
  const lessons = Array.from({ length: 6 }, (_, i) => ({
    num: String(i + 1).padStart(2, '0'),
    locked: i !== 0,
  }));
  const circumference = 2 * Math.PI * 20;

  return (
    <div className="flex flex-col h-full text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 flex-shrink-0">
        <BackIcon />
        <span className="text-xs font-semibold">Explore</span>
        <div className="w-4" />
      </div>
      <div className="mx-3 rounded-2xl overflow-hidden mb-3 relative h-28 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-300 via-brand-400 to-brand-500" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold text-white">Rise and Shine Challenge</p>
            <p className="text-[8px] text-white/70">Ongoing · 1/6</p>
          </div>
          <div className="relative w-12 h-12 flex-shrink-0">
            <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="4" />
              <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="4"
                strokeDasharray={`${circumference * 0.1} ${circumference}`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold">10%</span>
          </div>
        </div>
      </div>
      <div className="px-3 flex-1 overflow-hidden">
        {lessons.map((lesson, i) => (
          <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2.5 mb-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-semibold border flex-shrink-0 ${
                !lesson.locked ? 'border-brand-500 text-brand-400' : 'border-white/20 text-white/40'
              }`}>
                {lesson.num}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-medium">Audio title</p>
                <p className="text-[8px] text-gray-400">Audio · 15:22 min</p>
              </div>
            </div>
            {lesson.locked ? <LockIcon /> : <PlayButton />}
          </div>
        ))}
      </div>
    </div>
  );
}

function BalanceScreen() {
  const pillars = [
    { label: 'Sleep', value: 85, color: 'bg-brand-400' },
    { label: 'Mindfulness', value: 60, color: 'bg-brand-500' },
    { label: 'Movement', value: 45, color: 'bg-brand-400' },
    { label: 'Nutrition', value: 78, color: 'bg-brand-400' },
  ];
  const score = 67;
  const circumference = 2 * Math.PI * 36;

  return (
    <div className="flex flex-col h-full text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 flex-shrink-0">
        <BackIcon />
        <span className="text-xs font-semibold">Balance</span>
        <div className="w-4" />
      </div>
      <div className="flex flex-col items-center py-2 flex-shrink-0">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
            <circle cx="40" cy="40" r="36" fill="none" stroke="url(#balanceGrad)" strokeWidth="6"
              strokeDasharray={`${circumference * score / 100} ${circumference}`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="balanceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#03b7ce" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold">{score}</span>
            <span className="text-[7px] text-gray-400">Wellness Score</span>
          </div>
        </div>
        <p className="text-[9px] text-gray-400 mt-1">Good progress! Keep it up.</p>
      </div>
      <div className="px-3 flex-1 overflow-hidden">
        <p className="text-[8px] text-gray-500 uppercase tracking-wide mb-2">Today's Balance</p>
        {pillars.map((pillar, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between text-[9px] mb-1">
              <span className="text-gray-300">{pillar.label}</span>
              <span className="text-gray-400">{pillar.value}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full ${pillar.color} rounded-full`} style={{ width: `${pillar.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mx-3 pb-5 flex-shrink-0">
        <div className="bg-brand-500/40 border border-brand-500/20 rounded-xl p-2.5">
          <p className="text-[8px] text-brand-400 mb-0.5">Today's Tip</p>
          <p className="text-[9px] text-gray-300">Try a 10-minute walk to boost your movement score.</p>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen({ tab }: { tab: TabId }) {
  switch (tab) {
    case 'reflect': return <ReflectScreen />;
    case 'relax':   return <RelaxScreen />;
    case 'grow':    return <GrowScreen />;
    case 'balance': return <BalanceScreen />;
  }
}

export default function AppFeatures() {
  const [activeTab, setActiveTab] = useState<TabId>('reflect');
  const active = tabs.find((t) => t.id === activeTab)!;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth < 1024) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -top / scrollable));
      const index = Math.min(Math.floor(progress * tabs.length), tabs.length - 1);
      setActiveTab(tabs[index].id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTab = (index: number) => {
    if (!sectionRef.current) return;
    
    if (window.innerWidth < 1024) {
      // On mobile, just set the active tab without scrolling the window strangely
      return;
    }

    const { top } = sectionRef.current.getBoundingClientRect();
    const scrollable = sectionRef.current.clientHeight - window.innerHeight;
    
    // Calculate the target progress so it falls neatly into the active index's range
    const targetProgress = index / tabs.length + 0.05; 
    const targetScrollY = window.scrollY + top + (scrollable * targetProgress);

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  return (
    <div id="features" ref={sectionRef} className="relative lg:h-[400vh] bg-[#020617] pt-20 lg:pt-0 pb-20 lg:pb-0">
    <section className="lg:sticky top-0 w-full lg:h-screen flex items-center justify-center overflow-hidden">

      {/* Large circular glow — matches the reference design */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(3,183,206,0.22) 0%, rgba(3,183,206,0.10) 45%, transparent 72%)',
        }}
      />
      {/* Outer faint ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-brand-500/15 pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Three-column layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 gap-8 lg:gap-0">

        {/* Right (Top on Mobile): glassmorphic tab buttons */}
        <div className="w-full lg:hidden flex overflow-x-auto gap-2 pb-4 snap-x hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
              }}
              className={`relative flex-shrink-0 snap-start text-sm md:text-base font-medium transition-all duration-300 rounded-2xl px-5 py-3 cursor-pointer ${
                activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {activeTab === tab.id && (
                <span
                  className="absolute inset-0 rounded-2xl border border-white/15 backdrop-blur-md"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    boxShadow: '0 4px 24px rgba(3,183,206,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                />
              )}
              {activeTab === tab.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-brand-500 rounded-r-full shadow-[0_0_8px_rgba(3,183,206,0.8)]" />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Left: description text */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end lg:pr-16 lg:pr-32 order-3 lg:order-1 mt-8 lg:mt-0">
          <div className="w-full max-w-[480px] text-center lg:text-left">
            <p
              key={activeTab}
              className="text-gray-300 text-lg leading-relaxed animate-[fadeIn_0.3s_ease]"
            >
              {active.description}
            </p>
          </div>
        </div>

        {/* Center: phone mockup */}
        <div className="relative w-[280px] h-[560px] md:w-[330px] md:h-[660px] bg-[#0D0D0D] rounded-[48px] flex-shrink-0 shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.08)] order-2">
          {/* Side buttons */}
          <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#1c1c1c] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[144px] w-[3px] h-8 bg-[#1c1c1c] rounded-l-sm" />
          <div className="absolute -right-[3px] top-32 w-[3px] h-14 bg-[#1c1c1c] rounded-r-sm" />

          {/* Screen */}
          <div className="absolute inset-[3px] rounded-[45px] overflow-hidden bg-[#0f172a] flex flex-col">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-1 text-[9px] text-white/60 flex-shrink-0 relative z-10">
              <span className="font-medium">9:41</span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-end gap-[2px]">
                  <div className="w-[2px] h-[6px] bg-white/50 rounded-full" />
                  <div className="w-[2px] h-[8px] bg-white/50 rounded-full" />
                  <div className="w-[2px] h-[10px] bg-white/70 rounded-full" />
                  <div className="w-[2px] h-[12px] bg-white/70 rounded-full" />
                </div>
                <div className="flex items-center border border-white/40 rounded-[3px] px-0.5 h-[11px] gap-[1px]">
                  <div className="w-3 h-[7px] bg-white/80 rounded-[1px]" />
                  <div className="w-[2px] h-[5px] bg-white/30 rounded-r-[1px]" />
                </div>
              </div>
            </div>

            {/* App content */}
            <div key={activeTab} className="flex-1 overflow-hidden animate-[fadeIn_0.25s_ease]">
              <PhoneScreen tab={activeTab} />
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full pointer-events-none" />
        </div>

        {/* Right: glassmorphic tab buttons (Desktop Only) */}
        <div className="hidden lg:flex flex-1 justify-start pl-8 lg:pl-16 order-3">
          <div className="w-[180px] flex flex-col items-start gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  scrollToTab(tabs.findIndex(t => t.id === tab.id));
                }}
                className={`relative w-full text-left text-2xl font-medium transition-all duration-300 rounded-2xl px-5 py-3 cursor-pointer ${
                  activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {activeTab === tab.id && (
                  <span
                    className="absolute inset-0 rounded-2xl border border-white/15 backdrop-blur-md"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      boxShadow: '0 4px 24px rgba(3,183,206,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
                    }}
                  />
                )}
                {activeTab === tab.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-brand-500 rounded-r-full shadow-[0_0_8px_rgba(3,183,206,0.8)]" />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
