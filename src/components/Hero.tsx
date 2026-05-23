import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Brand Glow Effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-500/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl mt-12 md:mt-0 lg:-ml-12">

          {/* Reviews */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-brand-500 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=1')" }} />
              <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-brand-500 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=2')" }} />
              <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-brand-500 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=3')" }} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-sm text-gray-300 font-medium">Rated 4.9/5 by 120K+ users</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-6 text-white">
            Find Calm,<br />
            Feel Balanced.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            MindFlow helps you track your mood, build better habits, and nurture mindfulness—all in one beautifully simple app.
          </p>

          {/* CTA */}
          <button className="rounded-xl bg-brand-500 bg-gradient-to-r from-brand-400 to-brand-500 px-8 py-4 text-base font-semibold text-black shadow-[0_0_40px_rgba(3,183,206,0.4)] hover:shadow-[0_0_60px_rgba(3,183,206,0.6)] hover:scale-105 transition-all active:scale-95 cursor-pointer">
            Get the app
          </button>
        </div>

        {/* Right Content / Image */}
        <div className="flex-1 relative w-full flex justify-center md:justify-end mt-16 md:mt-0">
          <div className="relative w-full max-w-[320px] md:max-w-[500px] aspect-[4/5] animate-[float_6s_ease-in-out_infinite]">
            <Image
              src="/hero_phone.png"
              alt="MindFlow App on Smartphone"
              fill
              className="object-contain object-center md:object-right drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
