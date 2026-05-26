'use client';

import { useState } from 'react';

export default function PrivacyPolicyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="text-gray-400 text-sm hover:text-brand-400 transition-colors inline-block cursor-pointer"
      >
        Privacy Policy
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col animate-[fadeIn_0.2s_ease]">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 shrink-0">
              <h2 className="text-xl font-semibold text-white">Privacy Policy</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 sm:p-8 overflow-y-auto text-gray-300 text-sm leading-relaxed space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <p>Welcome to the Wahid App. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information while using our application and services.</p>
              
              <div>
                <h3 className="text-white font-medium mb-2">1. Introduction</h3>
                <p>The Wahid App is designed for users in India and Dubai only. We are committed to protecting user privacy and ensuring secure usage of our platform.</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">2. Information We Collect</h3>
                <p>We collect only limited information necessary for the proper functioning of the app, including:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                  <li>Basic account information (such as name, phone number, or email)</li>
                  <li>Device information for security and performance</li>
                  <li>App usage data for improving user experience</li>
                </ul>
                <p className="mt-2">We do not collect sensitive personal information unless required for a specific feature.</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">3. No Third-Party Data Sharing</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>User data is not sold, rented, or shared with third-party companies.</li>
                  <li>We do not allow unauthorized third-party websites or services to access user information.</li>
                  <li>The app does not transfer user data to external platforms without user consent.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">4. Data Transfer Restrictions</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>User data remains protected and is not transferred internationally unless legally required.</li>
                  <li>We aim to store and process data securely within approved service environments.</li>
                  <li>No unnecessary cross-border data transfers are performed.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">5. Usage Limited to India and Dubai</h3>
                <p>This application is intended only for users located in:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                  <li>India</li>
                  <li>Dubai</li>
                </ul>
                <p className="mt-2">Services outside these regions may be limited or unavailable.</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">6. Data Security</h3>
                <p>We implement reasonable security measures to protect user information, including:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                  <li>Encrypted connections</li>
                  <li>Secure servers</li>
                  <li>Restricted access controls</li>
                  <li>Regular security monitoring</li>
                </ul>
                <p className="mt-2">However, no online platform can guarantee 100% security.</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">7. User Rights</h3>
                <p>Users may request to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                  <li>Access their data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete their account and related data</li>
                  <li>Withdraw consent for optional services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">8. Cookies and Tracking</h3>
                <p>The app may use limited cookies or device identifiers only for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                  <li>Login sessions</li>
                  <li>Performance improvements</li>
                  <li>Security purposes</li>
                </ul>
                <p className="mt-2">We do not use invasive tracking technologies.</p>
              </div>

              {/* <div>
                <h3 className="text-white font-medium mb-2">9. Children's Privacy</h3>
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal data from children.</p>
              </div> */}

              <div>
                <h3 className="text-white font-medium mb-2">9. Policy Updates</h3>
                <p>We may update this Privacy Policy from time to time. Changes will be posted within the application or website.</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">10. Contact Us</h3>
                <p>If you have questions regarding this Privacy Policy, you may contact the Wahid support team through the official application or website.</p>
              </div>

              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-5 mt-8">
                <h3 className="text-brand-400 font-medium mb-3 text-base">Additional Recommended Privacy Points</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>No user location tracking without permission</li>
                  <li>No camera or microphone access without consent</li>
                  <li>OTP and authentication details are encrypted</li>
                  <li>Users can request permanent account deletion</li>
                  <li>App complies with applicable privacy laws in India and UAE</li>
                  <li>Minimal data collection principle followed</li>
                  <li>No advertising-based data profiling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
