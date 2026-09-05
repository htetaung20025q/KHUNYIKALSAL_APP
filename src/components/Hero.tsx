import React from 'react';
import Image from 'next/image';
import { StoreBadgeGroup } from '@/components/StoreBadges';
import { ShieldCheck, MapPin, Radio, BellRing, PhoneCall } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-gray-100">
      {/* Subtle background ambient pattern */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3]">
              <span className="w-2 h-2 rounded-full bg-[#e31b23] animate-ping" />
              <span>Public Emergency Response Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.12]">
              Help When It <br className="hidden sm:inline" />
              <span className="text-[#e31b23]">Matters Most.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4b5563] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Khu Nyi Kal Sal is an emergency-response platform designed to help connect people with the right assistance when they need it.
            </p>

            {/* CTAs with Official Store Badges */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <StoreBadgeGroup size="md" layout="responsive" />
                <a
                  href="#how-it-works"
                  className="btn-secondary w-full sm:w-auto text-sm py-3 px-5 h-12"
                >
                  <span>How It Works</span>
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl font-bold text-[#111111]">3 Sec</div>
                <div className="text-xs text-gray-500 font-medium">SOS Confirmation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#111111]">100%</div>
                <div className="text-xs text-gray-500 font-medium">Free Public Service</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#111111]">GPS + SMS</div>
                <div className="text-xs text-gray-500 font-medium">Dual Redundancy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Emergency Phone/Status Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Card container simulating the app experience */}
              <div className="relative bg-white rounded-3xl border-2 border-gray-200/90 shadow-2xl p-6 sm:p-7 overflow-hidden">
                {/* App Top Bar */}
                <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/assets/logo.png"
                        alt="Khu Nyi Kal Sal Brand"
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-900 block leading-tight">
                        Khu Nyi Kal Sal
                      </span>
                      <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Network Active · GPS Locked
                      </span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-red-50 text-[#e31b23] text-[10px] font-bold tracking-wider uppercase border border-red-200">
                    Live Ready
                  </div>
                </div>

                {/* Central SOS Mockup Button */}
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="relative group cursor-pointer mb-5">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-[#e31b23] to-[#c4141c] flex flex-col items-center justify-center text-white shadow-[0_10px_35px_rgba(227,27,35,0.38)] border-4 border-white ring-4 ring-red-100 transition-transform duration-200 group-hover:scale-105">
                      <Radio className="w-8 h-8 mb-1 animate-pulse" />
                      <span className="text-2xl font-black tracking-wider">SOS</span>
                      <span className="text-[10px] uppercase font-semibold text-red-100 tracking-wider">
                        Hold 3 Sec
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                    Tap & hold to broadcast distress beacon to local responders and trusted family contacts.
                  </p>
                </div>

                {/* Live Status Cards inside the Mockup */}
                <div className="space-y-2.5 bg-[#f7f7f7] p-3.5 rounded-2xl border border-gray-100">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-[#e31b23]" />
                      <span className="font-semibold">Current Location</span>
                    </div>
                    <span className="text-emerald-700 font-bold">Accuracy ± 4m</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-gray-700">
                      <BellRing className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">Emergency Contacts</span>
                    </div>
                    <span className="text-gray-900 font-medium">3 Registered</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-gray-700">
                      <PhoneCall className="w-4 h-4 text-amber-600" />
                      <span className="font-semibold">SMS Fallback Mode</span>
                    </div>
                    <span className="text-gray-900 font-medium">Standby</span>
                  </div>
                </div>

                {/* Floating safety badge */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-[#e31b23]" />
                  <span>Encrypted telemetry & emergency dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
