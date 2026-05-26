'use client';

import { useState } from 'react';

export default function TermsModal() {
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
        Terms &amp; Conditions
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col animate-[fadeIn_0.2s_ease]">

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 shrink-0">
              <h2 className="text-xl font-semibold text-white">Terms &amp; Conditions</h2>
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

              <p>
                By downloading, accessing, or using the Wahid app, you agree to comply with and be bound by
                these Terms &amp; Conditions. Please read them carefully before use.
              </p>

              <div>
                <h3 className="text-white font-medium mb-2">1. Acceptance of Terms</h3>
                <p>
                  By downloading, accessing, or using the Wahid app, you agree to comply with and be bound
                  by these Terms &amp; Conditions. If you do not agree, please do not use the app.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">2. Use of the App</h3>
                <p className="mb-2">
                  Wahid provides educational and spiritual content related to the 99 Names of Allah. The app
                  is intended for personal, non-commercial use only.
                </p>
                <p className="mb-2">Users agree not to:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>Misuse or interfere with the app's functionality</li>
                  <li>Copy, distribute, or reproduce app content without permission</li>
                  <li>Use the app for unlawful purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">3. Subscription &amp; Billing</h3>
                <p className="mb-2">
                  Certain features within Wahid may require a paid subscription. Subscription pricing and
                  features may change at any time with notice provided through the app or platform.
                </p>
                <p>
                  Subscriptions renew automatically unless canceled before the renewal date through your
                  App Store or Google Play account settings.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">4. No Refund Policy</h3>
                <p>
                  All payments made for subscriptions are final and non-refundable. Wahid does not provide
                  refunds or credits for partially used subscription periods, unused features, or accidental
                  purchases.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">5. Cancel Anytime</h3>
                <p>
                  Users may cancel their subscription at any time through their device's subscription
                  settings. After cancellation, premium access will remain active until the end of the
                  current billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">6. Content &amp; Accuracy</h3>
                <p className="mb-2">
                  We strive to provide authentic and accurate Islamic references and educational content.
                  However, Wahid does not guarantee that all content will always be error-free or fully
                  comprehensive.
                </p>
                <p>
                  Users are encouraged to consult qualified scholars for detailed religious guidance when
                  necessary.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">7. Intellectual Property</h3>
                <p>
                  All app content, branding, logos, graphics, and materials are the intellectual property
                  of Wahid and may not be copied or used without written permission.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">8. Limitation of Liability</h3>
                <p>
                  Wahid shall not be held responsible for any indirect, incidental, or consequential
                  damages resulting from the use or inability to use the app.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">9. Changes to Terms</h3>
                <p>
                  We may update these Terms &amp; Conditions from time to time. Continued use of the app
                  after updates constitutes acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">10. Contact Us</h3>
                <p>
                  If you have any questions regarding these Terms &amp; Conditions, please contact us
                  through the official support channels provided within the app.
                </p>
              </div>

              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-5 mt-8">
                <h3 className="text-brand-400 font-medium mb-3 text-base">Key Highlights</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>For personal, non-commercial use only</li>
                  <li>Subscriptions auto-renew unless canceled</li>
                  <li>All payments are final — no refunds</li>
                  <li>Cancel anytime via App Store or Google Play</li>
                  <li>Content is educational and spiritual in nature</li>
                  <li>All branding and content belong to Wahid</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
