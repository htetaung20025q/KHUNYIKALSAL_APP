'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';
import { MAIN_NAV_LINKS } from '@/data/navigation';
import { StoreBadgeGroup } from '@/components/StoreBadges';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for subtle backdrop shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white ${
        scrolled
          ? 'shadow-sm border-b border-gray-200/90 backdrop-blur-md bg-white/95'
          : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e31b23] rounded-lg"
            aria-label="Khu Nyi Kal Sal Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Khu Nyi Kal Sal Official Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#111111] group-hover:text-[#e31b23] transition-colors leading-none">
                Khu Nyi Kal Sal
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase mt-1">
                Emergency Response
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {MAIN_NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#e31b23] font-semibold bg-[#fff1f2]'
                      : 'text-gray-700 hover:text-[#111111] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#e31b23] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/get-app"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#e31b23] hover:bg-[#c4141c] shadow-sm hover:shadow transition-all"
            >
              <span>Get App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/get-app"
              className="px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#e31b23] hover:bg-[#c4141c]"
            >
              Get App
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#111111] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#e31b23]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="space-y-1">
            {MAIN_NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#e31b23] font-bold bg-[#fff1f2]'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#e31b23]" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col gap-3.5">
            <div className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Download Official App
            </div>
            <StoreBadgeGroup size="sm" layout="responsive" />
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
              <ShieldAlert className="w-3.5 h-3.5 text-[#e31b23]" />
              <span>Official Release for Android & iOS</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
