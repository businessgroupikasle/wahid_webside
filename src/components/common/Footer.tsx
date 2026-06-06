import React from "react";
import { AtSign } from "lucide-react";
import Image from "next/image";
import FooterMarquee from "./FooterMarquee";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsModal from "./TermsModal";

// Custom SVGs for brand icons removed from lucide-react
const IconX = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconInstagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconLinkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-[#020617] text-slate-900 dark:text-white pt-24 relative overflow-hidden">
      
      {/* Subtle top border */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-200 dark:border-white/10">
          
          {/* Column 1 */}
          <div className="md:col-span-5 md:pr-12 md:border-r border-slate-200 dark:border-white/10 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/Logo/wahid_logo.svg" 
                alt="wahid logo" 
                width={60} 
                height={60}
              />
              {/* <span className="text-2xl text-slate-900 dark:text-white">Wahid</span> */}
            </div>
           
            <div className="flex items-center gap-5">
              {/* <IconX className="w-4 h-4 text-slate-400 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" /> */}
              <a href="https://www.instagram.com/thewahidapp/" target="_blank" rel="noopener noreferrer">
                <IconInstagram className="w-5 h-5 text-slate-400 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" />
              </a>
              {/* <IconLinkedin className="w-5 h-5 text-slate-400 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" /> */}
              <a href="https://www.facebook.com/thewahidapp" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="w-5 h-5 text-slate-400 dark:text-white/50 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-3 md:pl-6 md:pr-12 md:border-r border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-[2px]" />
              <h3 className="text-slate-900 dark:text-white text-sm font-semibold tracking-wide">Quick Links</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {[
                // { name: 'Home', href: '#home' },
                // { name: 'Pricing', href: '#pricing' },
                // { name: 'Features', href: '#features' },
                // { name: 'Blog', href: '#blog' }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 dark:text-gray-400 text-sm hover:text-brand-600 dark:hover:text-brand-400 transition-colors inline-block">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:col-span-4 md:pl-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-[2px]" />
              <h3 className="text-slate-900 dark:text-white text-sm font-semibold tracking-wide">More Links</h3>
            </div>
            <ul className="flex flex-col gap-4">
              <li><PrivacyPolicyModal /></li>
              <li><TermsModal /></li>
              {/* <li><a href="#" className="text-gray-400 text-sm hover:text-brand-400 transition-colors inline-block">Changelog</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-brand-400 transition-colors inline-block">License</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-brand-400 transition-colors inline-block">Style guide</a></li> */}
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-gray-500 gap-4 border-t border-slate-200 dark:border-white/10">
          <p>© {new Date().getFullYear()} Wahid All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Powered by Ikasle</span>
            <span className="hidden sm:inline text-slate-300 dark:text-gray-700"></span>
            {/* <span className="hover:text-white transition-colors cursor-pointer">Design & Developed by - Morphic - License</span> */}
          </div>
        </div>
      </div>

      {/* Scrolling Text Section */}
      {/* <FooterMarquee /> */}
      
    </footer>
  );
}
