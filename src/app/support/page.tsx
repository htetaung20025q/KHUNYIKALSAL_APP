import React from 'react';
import { SupportSearch } from '@/components/SupportSearch';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ContactForm } from '@/components/ContactForm';
import { SUPPORT_ARTICLES, FAQ_ITEMS } from '@/data/support';
import {
  ShieldAlert,
  MapPin,
  Wrench,
  Sparkles,
  HelpCircle,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const metadata = {
  title: 'Khu Nyi Kal Sal Support Center',
  description:
    'Find help with Khu Nyi Kal Sal. Guides for sending an SOS, configuring location permissions, troubleshooting alerts, and contacting support.',
};

export default function SupportPage() {
  const gettingStarted = SUPPORT_ARTICLES.filter(
    (a) => a.category === 'Getting Started'
  );
  const sosHelp = SUPPORT_ARTICLES.filter((a) => a.category === 'SOS Help');
  const locationEmergency = SUPPORT_ARTICLES.filter(
    (a) => a.category === 'Location & Emergency'
  );
  const troubleshooting = SUPPORT_ARTICLES.filter(
    (a) => a.category === 'Troubleshooting'
  );

  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] min-h-screen">
      {/* Search Header Banner */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Official Help & Support Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight">
              How can we help?
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Quickly find step-by-step guides, troubleshooting solutions, and answers to common emergency questions.
            </p>
          </div>

          {/* Interactive Live Search Component */}
          <SupportSearch />
        </div>
      </section>

      {/* Fast Navigation Shortcut Bar */}
      <section className="bg-white border-b border-gray-200 py-4 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
            <a
              href="#getting-started"
              className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 whitespace-nowrap transition-colors"
            >
              Getting Started
            </a>
            <a
              href="#sos-help"
              className="px-3 py-1.5 rounded-lg bg-[#fff1f2] hover:bg-red-100 text-[#e31b23] whitespace-nowrap transition-colors"
            >
              SOS Help
            </a>
            <a
              href="#location-emergency"
              className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 whitespace-nowrap transition-colors"
            >
              Location & Emergency
            </a>
            <a
              href="#troubleshooting"
              className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 whitespace-nowrap transition-colors"
            >
              Troubleshooting
            </a>
            <a
              href="#faq-section"
              className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 whitespace-nowrap transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact-section"
              className="px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-black text-white whitespace-nowrap transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Main Support Directory Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* 1. Getting Started */}
        <section id="getting-started" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Getting Started
              </h2>
              <p className="text-xs text-gray-500">
                Setup guide, registration, and initial configuration
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gettingStarted.map((article) => (
              <div
                key={article.id}
                id={article.id}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-sm flex flex-col justify-between scroll-mt-36"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-gray-100">
                    {article.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600 flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {article.tips && (
                  <div className="mt-5 pt-3 border-t border-gray-100 text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-lg">
                    <strong className="text-gray-700">Tip:</strong> {article.tips}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 2. SOS Help */}
        <section id="sos-help" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                SOS Help
              </h2>
              <p className="text-xs text-gray-500">
                How alerts work, canceling false triggers, and understanding status indicators
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sosHelp.map((article) => (
              <div
                key={article.id}
                id={article.id}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-sm flex flex-col justify-between scroll-mt-36"
              >
                <div>
                  <div className="mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#e31b23] bg-[#fff1f2] px-2 py-0.5 rounded-full border border-[#fecdd3]">
                      SOS Guide
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {article.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e31b23] flex-shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {article.tips && (
                  <div className="mt-5 pt-3 border-t border-gray-100 text-[11px] text-gray-500 bg-red-50/50 p-2.5 rounded-lg border border-red-100">
                    <strong className="text-red-900">Note:</strong> {article.tips}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 3. Location & Emergency */}
        <section id="location-emergency" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Location & Emergency
              </h2>
              <p className="text-xs text-gray-500">
                GPS telemetry, privacy boundaries, and dispatch coordination
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationEmergency.map((article) => (
              <div
                key={article.id}
                id={article.id}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-sm flex flex-col justify-between scroll-mt-36"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {article.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {article.tips && (
                  <div className="mt-5 pt-3 border-t border-gray-100 text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-lg">
                    <strong className="text-gray-700">Privacy Assurance:</strong> {article.tips}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Troubleshooting */}
        <section id="troubleshooting" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Troubleshooting
              </h2>
              <p className="text-xs text-gray-500">
                Fix common issues with SOS activation, GPS signals, notifications, and login
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {troubleshooting.map((article) => (
              <div
                key={article.id}
                id={article.id}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-sm flex flex-col justify-between scroll-mt-36"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <h3 className="text-base font-bold text-gray-900">
                      {article.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {article.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {article.tips && (
                  <div className="mt-5 pt-3 border-t border-gray-100 text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                    <strong className="font-semibold">Troubleshoot Advice:</strong> {article.tips}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 5. FAQ Section */}
        <section id="faq-section" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-900 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-gray-500">
                Frequently asked questions on privacy, internet connectivity, and features
              </p>
            </div>
          </div>

          <div className="max-w-4xl">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* 6. Contact Support Section */}
        <section id="contact-section" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Contact Support
              </h2>
              <p className="text-xs text-gray-500">
                Get in touch directly with our emergency platform engineering team
              </p>
            </div>
          </div>

          <div className="max-w-4xl">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
