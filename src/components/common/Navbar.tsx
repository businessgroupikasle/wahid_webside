'use client';

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down past 100px, otherwise show
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Reset the 5-second inactivity timer on every scroll
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className={`w-full flex items-center justify-between py-4 px-6 md:px-10 bg-transparent text-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Logo Section */}
      <div className="flex items-center gap-3">
       <Image 
          src="/Logo/wahid_logo.svg" 
          alt="wahid logo" 
          width={60} 
          height={60}/>
          {/* <span className="text-2xl  text-white  ">Wahid</span> */}
      </div>

      {/* Navigation & Actions */}
      <div className="hidden md:flex items-center rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.03] py-2 px-8 md:px-12 lg:px-16 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-10 md:gap-14 lg:gap-16 mr-6 md:mr-8 lg:mr-10">
          
          <Link href="#pricing" className="text-sm font-medium text-slate-600 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#features" className="text-sm font-medium text-slate-600 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white transition-colors">
            Features
          </Link>
          {/* <Link href="#blog" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
            Blog
          </Link> */}
         
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => window.open("http://play.google.com/store/games?hl=en_IN", "_blank")} className="rounded-xl bg-brand-500 bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-lg shadow-brand-500/25 hover:from-brand-300 hover:to-brand-400 hover:shadow-brand-500/40 transition-all active:scale-95 cursor-pointer">
            Download app
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex md:hidden items-center gap-3">
        <ThemeToggle />
        <button 
          className="text-slate-900 dark:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed top-[76px] left-0 w-full h-[calc(100vh-76px)] bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-slate-700 dark:text-gray-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Home 
          </Link>
          <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-slate-700 dark:text-gray-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Pricing
          </Link>
          <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-slate-700 dark:text-gray-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Features
          </Link>
          <Link href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-slate-700 dark:text-gray-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Blog
          </Link>
          <button onClick={() => window.open("http://play.google.com/store/games?hl=en_IN", "_blank")} className="mt-4 rounded-xl bg-brand-500 bg-gradient-to-r from-brand-400 to-brand-500 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-brand-500/25 hover:from-brand-300 hover:to-brand-400 hover:shadow-brand-500/40 transition-all active:scale-95 cursor-pointer">
            Download app
          </button>
        </div>
      </div>
    </nav>
  );
}
