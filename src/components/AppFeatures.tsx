'use client';

const features = [
  {
    id: 'reflect',
    eyebrow: '',
    title: 'Guided Learning Paths',
    titleHighlight: '',
    titleEnd: '',
    description:
      'Follow a structured learning experience designed to help you progress through the 99 Beautiful Names with clarity and purpose.',
    image: '/appfeature/app1.jpeg',
    imageBg: 'bg-[#ede9ff]',
    reverse: false,
  },
  {
    id: 'learn',
    eyebrow: '',
    title: 'Quizzes & Reflections',
    titleHighlight: '',
    titleEnd: '',
    description:
      'Strengthen retention through interactive quizzes and thoughtful reflections that help turn learning into daily practice.',
    image: '/appfeature/app2.jpeg',
    imageBg: 'bg-[#7c3aed]',
    reverse: true,
  },
  {
    id: 'memorize',
    eyebrow: '',
    title: 'Authentic References',
    titleHighlight: '',
    titleEnd: '',
    description:
      'Explore every Name with carefully curated Quranic verses, authentic hadiths, and trusted scholarly sources.',
    image: '/appfeature/app3.jpeg',
    imageBg: 'bg-[#ccfbf1]',
    reverse: false,
  },
  {
    id: 'connect',
    eyebrow: '',
    title: 'Streaks & Milestones',
    titleHighlight: '',
    titleEnd: '',
    description:
      'Stay motivated with daily streaks, progress tracking, and achievement milestones that encourage consistency in remembrance and learning.',
    image: '/appfeature/app4.jpeg',
    imageBg: 'bg-[#fef3c7]',
    reverse: true,
  },
];

export default function AppFeatures() {
  return (
    <section id="features" className="relative bg-slate-50/50 dark:bg-[#020617] py-20 lg:py-32 border-t border-slate-200 dark:border-white/5">
      {/* Header */}
      <div className="text-center mb-20 lg:mb-28">
        <span className="inline-block text-xs uppercase tracking-[0.25em] font-bold text-brand-600 dark:text-brand-400 bg-brand-500/8 dark:bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full mb-5">
          App Features
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Thoughtfully Designed for Meaningful Learning
        </h2>
      </div>

      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-8 flex flex-col gap-24 lg:gap-36">
        {features.map((feat) => (
          <div
            key={feat.id}
            className={`flex flex-col gap-10 items-center lg:gap-16 ${
              feat.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                className={`relative ${feat.imageBg} rounded-3xl w-full max-w-[420px] overflow-hidden`}
              >
                <img
                  src={feat.image}
                  alt={feat.id}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
              {feat.eyebrow && (
                <p className="text-sm font-semibold text-brand-500 dark:text-brand-400 tracking-wide">
                  {feat.eyebrow}
                </p>
              )}

              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
                {feat.title}{' '}
                <span className="text-brand-600 dark:text-brand-400">{feat.titleHighlight}</span>
                {feat.titleEnd && ` ${feat.titleEnd}`}
              </h2>

              <p className="text-base text-slate-500 dark:text-white/60 leading-relaxed max-w-[480px] mx-auto lg:mx-0">
                {feat.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
