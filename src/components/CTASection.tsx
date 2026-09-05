import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StoreBadgeGroup } from '@/components/StoreBadges';
import { Smartphone, ShieldCheck } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-gray-200/90 shadow-sm p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Subtle background glow element */}
          <div
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-red-50/70 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Instant Emergency Access</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
                Be Ready When It Matters.
              </h2>

              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Get Khu Nyi Kal Sal and stay prepared for emergency situations. Free to download, instant GPS response, and family notifications.
              </p>

              {/* Official Store Badges */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <StoreBadgeGroup size="md" layout="responsive" />
                <Link
                  href="/about"
                  className="btn-secondary w-full sm:w-auto text-sm py-3 px-5 h-12"
                >
                  <span>About Khu Nyi Kal Sal</span>
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#e31b23]" />
                  Android & iOS
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>Zero Subscription Fees</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>24/7 Readiness</span>
              </div>
            </div>

            {/* Right Card / Logo showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-[#fafafa] rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center shadow-sm">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src="/assets/logo.png"
                    alt="Khu Nyi Kal Sal Official Logo"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-1">
                  Khu Nyi Kal Sal
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  Official Mobile Application
                </p>

                <div className="w-full space-y-2 text-left text-xs bg-white rounded-xl p-3 border border-gray-100">
                  <div className="flex items-center justify-between text-gray-700">
                    <span>OS Compatibility</span>
                    <span className="font-semibold text-gray-900">Android 8+ / iOS 14+</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span>License</span>
                    <span className="font-semibold text-emerald-600">Free Public Service</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Data Privacy</span>
                    <span className="font-semibold text-gray-900">End-to-End Secure</span>
                  </div>
                </div>

                <Link
                  href="/get-app"
                  className="mt-4 text-xs font-semibold text-[#e31b23] hover:underline"
                >
                  View Download Options & QR Code →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
