import Navbar from "../components/common/Navbar";
import Hero from "../components/Hero";
import AppFeatures from "../components/AppFeatures";
import MoodInsights from "../components/MoodInsights";
import FeatureHighlights from "../components/FeatureHighlights";
import WhatYoullLearn from "../components/WhatYoullLearn";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CTASection";
import LogoTicker from "../components/LogoTicker";
import Footer from "../components/common/Footer";
import ScrollReveal from "../components/common/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-brand-500/30">
      <Navbar />
      <main>
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <LogoTicker />
        </ScrollReveal>
        <ScrollReveal>
          <AppFeatures />
        </ScrollReveal>
        <ScrollReveal>
          <MoodInsights />
        </ScrollReveal>
        <FeatureHighlights />
        <ScrollReveal>
          <WhatYoullLearn />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>
        {/* <ScrollReveal>
          <Testimonials />
        </ScrollReveal> */}
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
        <ScrollReveal>
          <BlogSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
