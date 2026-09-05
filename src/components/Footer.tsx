import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MAIN_NAV_LINKS, BRAND_CONFIG } from '@/data/navigation';
import { ShieldCheck, HeartHandshake, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#E31B23] text-white border-t border-red-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Mission Column */}
          <div className="md:col-span-6 lg:col-span-7 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
            >
              <div className="relative w-11 h-11 flex-shrink-0 bg-white rounded-xl p-1 shadow-md">
                <Image
                  src="/assets/logo.png"
                  alt="Khu Nyi Kal Sal Logo"
                  fill
                  sizes="44px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  Khu Nyi Kal Sal
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-red-100 uppercase mt-1">
                  Emergency Response
                </span>
              </div>
            </Link>

            <p className="text-sm md:text-base text-red-100 max-w-md leading-relaxed">
              {BRAND_CONFIG.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
              <span className="inline-flex items-center gap-1.5 font-medium text-white bg-white/15 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-white" />
                Verified Responder Dispatch
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-white bg-white/15 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-xs">
                <HeartHandshake className="w-4 h-4 text-white" />
                Public Safety Platform
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-red-200 mb-4">
                Navigation
              </h3>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
                {MAIN_NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-white font-medium transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-xs text-red-100/90 leading-relaxed">
                {BRAND_CONFIG.emergencyDisclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Links */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs text-center sm:text-left">
            <p className="text-red-200">
              {BRAND_CONFIG.copyright}
            </p>
            <span className="hidden sm:inline text-white/30">•</span>
            <p className="inline-flex items-center gap-1.5 font-bold text-yellow-300">
              <Code2 className="w-3.5 h-3.5 shrink-0" />
              <span>Developer by Htet Aung</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-red-100">
            <Link href="/support" className="hover:text-white transition-colors">
              Support Center
            </Link>
            <Link href="/join-us" className="hover:text-white font-semibold transition-colors">
              Join Us
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About the Mission
            </Link>
            <Link href="/get-app" className="hover:text-white transition-colors">
              Download App
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
