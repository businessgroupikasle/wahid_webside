'use client';

import { useState, useEffect, useRef } from "react";

type TabId = 'reflect' | 'learn' | 'memorize' | 'connect';

const tabs: { id: TabId; label: string; description: string; image: string }[] = [
  {
    id: 'reflect',
    label: 'Reflect',
    description:
      'Reflect on the beautiful meanings behind the 99 Names of Allah and strengthen your spiritual connection through daily remembrance. Each Name offers wisdom, peace, and guidance for everyday life.',
    image: '/appfeature/app1.png',
  },
  {
    id: 'learn',
    label: 'Learn',
    description:
      'Learn all 99 Names of Allah with easy explanations, Arabic transliteration, and authentic references designed to make Islamic learning simple and accessible for everyone.',
    image: '/appfeature/app2.png',
  },
  {
    id: 'memorize',
    label: 'Memorize',
    description:
      'Memorize the Names of Allah through interactive quizzes, repetition, and progress tracking that help you build a consistent and meaningful learning habit.',
    image: '/appfeature/app3.png',
  },
  {
    id: 'connect',
    label: 'Connect',
    description:
      'Connect your heart with Allah by understanding His attributes more deeply and applying the lessons from each Name in your daily life and worship.',
    image: '/appfeature/app4.png',
  },
];

const DURATION = 4000;

export default function AppFeatures() {
  const [activeTab, setActiveTab] = useState<TabId>('reflect');
  const [animating,  setAnimating]  = useState(false);
  const [progress,   setProgress]   = useState(0);
  const rafRef   = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null!);
  const activeIndex = tabs.findIndex((t) => t.id === activeTab);

  /* ── Auto-advance + rAF progress ── */
  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    const tick = (now: number) => {
      const pct = Math.min(((now - start) / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    timerRef.current = setTimeout(() => {
      setActiveTab((prev) => {
        const idx = tabs.findIndex((t) => t.id === prev);
        return tabs[(idx + 1) % tabs.length].id;
      });
    }, DURATION);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  }, [activeTab]);

  /* ── Manual switch — resets timer ── */
  const switchTab = (id: TabId) => {
    if (id === activeTab || animating) return;
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    setAnimating(true);
    setTimeout(() => { setActiveTab(id); setAnimating(false); }, 200);
  };

  /* shared transition style for images */
  const phoneStyle = (id: TabId) => ({
    opacity: activeTab === id ? (animating ? 0 : 1) : 0,
    transform: activeTab === id
      ? animating ? 'scale(0.95) translateY(10px)' : 'scale(1) translateY(0)'
      : 'scale(0.95) translateY(10px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  });

  /* shared transition style for text panels */
  const textStyle = (id: TabId) => ({
    position: (activeTab === id ? 'relative' : 'absolute') as 'relative' | 'absolute',
    top: 0, left: 0, width: '100%',
    opacity: activeTab === id ? (animating ? 0 : 1) : 0,
    transform: activeTab === id
      ? animating ? 'translateY(8px)' : 'translateY(0)'
      : 'translateY(8px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    pointerEvents: (activeTab === id ? 'auto' : 'none') as 'auto' | 'none',
  });

  return (
    <section id="features" className="relative bg-white dark:bg-[#020617] py-16 lg:py-24 overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(3,183,206,0.08) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">

        {/* Section badge */}
        <div className="text-center mb-6 lg:mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.25em] font-bold text-brand-600 dark:text-brand-400 bg-brand-500/8 dark:bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full">
            App Features
          </span>
        </div>

        {/* ════════════════════════
            MOBILE  (hidden lg+)
        ════════════════════════ */}
        <div className="lg:hidden flex flex-col rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-white/[0.03] shadow-sm dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]">

          {/* Tab strip */}
          <div className="flex gap-1 p-2 bg-slate-50 dark:bg-white/[0.02] border-b border-slate-100 dark:border-white/8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`relative flex-1 text-xs font-semibold py-2.5 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden
                  ${activeTab === tab.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-600 dark:text-white/35 dark:hover:text-white/65'}`}
              >
                {activeTab === tab.id && (
                  <span className="absolute inset-0 rounded-xl bg-brand-500 shadow-[0_0_12px_rgba(3,183,206,0.4)]" />
                )}
                {activeTab === tab.id && (
                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-white/40 rounded-full"
                    style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Image area */}
          <div className="relative flex justify-center items-center overflow-hidden bg-slate-50 dark:bg-white/[0.015]" style={{ minHeight: '280px' }}>
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10 bg-gradient-to-t from-slate-50 dark:from-[#020617] to-transparent" />
            <div className="relative z-20 w-full h-full flex items-center justify-center">
              {tabs.map((tab) => (
                <img
                  key={tab.id}
                  src={tab.image}
                  alt={tab.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={phoneStyle(tab.id)}
                />
              ))}
            </div>
          </div>

          {/* Text area */}
          <div className="px-6 pt-6 pb-7 bg-white dark:bg-[#020617]">
            <div className="relative" style={{ minHeight: '130px' }}>
              {tabs.map((tab) => (
                <div key={tab.id} className="w-full" style={textStyle(tab.id)}>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{tab.label}</h3>
                  <p className="text-sm text-slate-500 dark:text-white/55 leading-relaxed">{tab.description}</p>
                </div>
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className="relative cursor-pointer overflow-hidden rounded-full bg-slate-200 dark:bg-white/[0.12]"
                  style={{
                    height: '5px',
                    width: activeTab === tab.id ? '32px' : '5px',
                    transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  {activeTab === tab.id && (
                    <span
                      className="absolute inset-y-0 left-0 bg-brand-500 rounded-full"
                      style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
                    />
                  )}
                </button>
              ))}
              <span className="ml-auto text-xs text-slate-400 dark:text-white/30 font-medium tabular-nums">
                {activeIndex + 1} / {tabs.length}
              </span>
            </div>
          </div>
        </div>

        {/* ════════════════════════
            DESKTOP (hidden mobile)
        ════════════════════════ */}
        <div className="hidden lg:block rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
          <div className="grid lg:grid-cols-[200px_1fr_280px] xl:grid-cols-[220px_1fr_300px]">

            {/* COL 1 — Tabs */}
            <div className="flex flex-col border-r border-slate-100 dark:border-white/8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className={`relative text-left px-7 py-6 text-xl font-semibold transition-all duration-300 cursor-pointer border-b border-slate-100 dark:border-white/8 last:border-b-0 overflow-hidden
                    ${activeTab === tab.id
                      ? 'text-slate-900 dark:text-white bg-slate-50 dark:bg-white/[0.05]'
                      : 'text-slate-400 dark:text-white/35 hover:text-slate-600 dark:hover:text-white/70 hover:bg-slate-50 dark:hover:bg-white/[0.03]'}`}
                >
                  {/* Accent bar */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] bg-brand-500 rounded-r-full"
                    style={{
                      height: activeTab === tab.id ? '32px' : '0px',
                      opacity: activeTab === tab.id ? 1 : 0,
                      boxShadow: activeTab === tab.id ? '0 0 8px rgba(3,183,206,0.7)' : 'none',
                      transition: 'height 0.3s ease, opacity 0.3s ease',
                    }}
                  />
                  {tab.label}
                  {/* Timer progress bar */}
                  {activeTab === tab.id && (
                    <span
                      className="absolute bottom-0 left-0 h-[2px] bg-brand-500/40 rounded-full"
                      style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* COL 2 — Description */}
            <div className="flex flex-col justify-center px-8 lg:py-12 border-r border-slate-100 dark:border-white/8">
              <h2 className="text-2xl xl:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Everything you need to know {' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ color: '#4bd5e8' }}
                >
                   Allah's Names
                </span>
              </h2>

              <div className="relative" style={{ minHeight: '96px' }}>
                {tabs.map((tab) => (
                  <p
                    key={tab.id}
                    className="text-slate-500 dark:text-white/55 text-base lg:text-lg leading-relaxed"
                    style={textStyle(tab.id)}
                  >
                    {tab.description}
                  </p>
                ))}
              </div>

              {/* Active label + dots */}
              <div className="flex items-center gap-3 mt-8">
                <div className="w-6 h-px bg-slate-200 dark:bg-white/15" />
                <div className="relative h-5 overflow-hidden">
                  {tabs.map((tab) => (
                    <span
                      key={tab.id}
                      className="text-xs font-semibold text-brand-500 dark:text-brand-400 uppercase tracking-[0.2em]"
                      style={{
                        position: activeTab === tab.id ? 'relative' : 'absolute',
                        top: 0, left: 0,
                        opacity: activeTab === tab.id ? (animating ? 0 : 1) : 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                      }}
                    >
                      {tab.label}
                    </span>
                  ))}
                </div>

                <div className="ml-auto flex items-center gap-1.5">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => switchTab(tab.id)}
                      className="relative cursor-pointer overflow-hidden rounded-full bg-slate-200 dark:bg-white/[0.12]"
                      style={{
                        height: '5px',
                        width: activeTab === tab.id ? '24px' : '5px',
                        transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                      }}
                    >
                      {activeTab === tab.id && (
                        <span
                          className="absolute inset-y-0 left-0 bg-brand-500 rounded-full"
                          style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* COL 3 — Image */}
            <div className="relative flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-white/[0.02] rounded-l-[2rem]">
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10 bg-gradient-to-t from-slate-50 dark:from-[#020617] to-transparent" />

              <div className="relative z-20 w-full h-full flex items-center justify-center">
                {tabs.map((tab) => (
                  <img
                    key={tab.id}
                    src={tab.image}
                    alt={`${tab.label} screen`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={phoneStyle(tab.id)}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
