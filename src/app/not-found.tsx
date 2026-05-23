import Link from "next/link";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col font-sans selection:bg-brand-500/30">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 pt-32 pb-24">
        
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* 404 Content */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-brand-300 to-brand-500 drop-shadow-[0_0_40px_rgba(3,183,206,0.3)]">
            404
          </h1>
          
          <div className="w-16 h-1.5 bg-brand-500 rounded-full mt-4 mb-8 shadow-[0_0_15px_rgba(3,183,206,0.5)]" />
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
          
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-12">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <Link href="/">
            <button className="rounded-xl bg-brand-500 bg-gradient-to-r from-brand-400 to-brand-500 px-8 py-4 text-base font-semibold text-black shadow-[0_0_40px_rgba(3,183,206,0.4)] hover:shadow-[0_0_60px_rgba(3,183,206,0.6)] hover:scale-105 transition-all active:scale-95 cursor-pointer flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          </Link>
        </div>
        
        {/* Floating Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-brand-200 rounded-full animate-pulse"
              style={{
                left: `${(i * 23) % 100}%`,
                top: `${(i * 17) % 100}%`,
                width: `${(i % 3) + 2}px`,
                height: `${(i % 3) + 2}px`,
                opacity: (i % 5) / 10 + 0.3,
                animationDuration: `${(i % 4) + 3}s`
              }}
            />
          ))}
        </div>
        
      </main>
      
      <Footer />
    </div>
  );
}
