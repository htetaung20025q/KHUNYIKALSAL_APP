'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { AppStoreBadge, GooglePlayBadge, StoreBadgeGroup } from '@/components/StoreBadges';
import {
  Download,
  Smartphone,
  Apple,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Cpu,
  Wifi,
  Info,
  X,
} from 'lucide-react';

export const GetAppClient: React.FC = () => {
  const [modalInfo, setModalInfo] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] min-h-screen">
      {/* Informational Modal */}
      {modalInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-gray-200 relative">
            <button
              onClick={() => setModalInfo(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center">
                <Info className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">
                Official Release Channel
              </h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {modalInfo}
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setModalInfo(null)}
                className="btn-primary text-xs py-2 px-4"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero / Download Header */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3]">
                <Download className="w-3.5 h-3.5" />
                <span>Official App Release</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-tight">
                Get Khu Nyi Kal Sal
              </h1>

              <p className="text-xl sm:text-2xl text-gray-700 font-medium leading-relaxed">
                Be prepared when it matters most.
              </p>

              <p className="text-base text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Download the mobile app today to safeguard yourself and your family. Setup takes under two minutes, with zero subscription fees and total privacy.
              </p>

              {/* Official Store Badges */}
              <div className="pt-2 space-y-3">
                <StoreBadgeGroup
                  size="lg"
                  layout="responsive"
                  onBadgeClick={(store) => {
                    if (store === 'apple') {
                      setModalInfo(
                        'Apple App Store: Khu Nyi Kal Sal is currently available to verified safety testers through Apple TestFlight while public App Store submission is in final emergency network certification.'
                      );
                    } else {
                      setModalInfo(
                        'Google Play Store: Khu Nyi Kal Sal for Android is undergoing Google Play dispatch verification. You can download the verified direct APK (v1.4.2) below.'
                      );
                    }
                  }}
                />
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-500 pt-1">
                  <a href="#android-download" className="text-[#e31b23] hover:underline font-semibold flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Direct Android APK (v1.4.2)</span>
                  </a>
                  <span className="text-gray-300">·</span>
                  <a href="#ios-download" className="text-gray-700 hover:text-black font-semibold flex items-center gap-1">
                    <Apple className="w-3.5 h-3.5" />
                    <span>Apple TestFlight Beta</span>
                  </a>
                </div>
              </div>

              {/* Verified Trust Badge */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Malware Scanned & Cryptographically Signed</span>
              </div>
            </div>

            {/* Right: Brand Showcase & QR Scanner Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-3xl border-2 border-gray-200/90 shadow-xl p-8 text-center relative overflow-hidden">
                {/* Official Logo Banner */}
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <Image
                    src="/assets/khunyikalsal-logo.png"
                    alt="Khu Nyi Kal Sal Official Logo"
                    fill
                    sizes="112px"
                    className="object-contain"
                    priority
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Khu Nyi Kal Sal
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Scan QR code with your mobile camera to open direct install link
                </p>

                {/* QR Code Container */}
                <div className="w-44 h-44 mx-auto bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-3 relative group">
                  <div className="w-full h-full relative flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-gray-800" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-white p-1 shadow-md border border-gray-200">
                        <Image
                          src="/assets/logo.png"
                          alt="Khu Nyi Kal Sal Mark"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>File Size: ~24 MB</span>
                  <span className="text-emerald-700 font-semibold">Free License</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Download Options & Placeholder Notice */}
      <section className="py-16 md:py-24 border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Platform Downloads"
            title="Choose Your Mobile Operating System"
            description="Official distribution channels for Khu Nyi Kal Sal. Clearly marked store and direct package links."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Android Card */}
            <div id="android-download" className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm space-y-6 scroll-mt-24">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Android Ready
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Android Version
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Compatible with Samsung, Xiaomi, Vivo, Oppo, Google Pixel, and all devices running Android 8.0 (Oreo) or later.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <GooglePlayBadge
                    size="lg"
                    className="w-full h-13"
                    onClick={() =>
                      setModalInfo(
                        'Google Play Store Status: Khu Nyi Kal Sal for Android is currently undergoing store review and municipal dispatch integration. While review completes, you can install the official signed APK directly below.'
                      )
                    }
                  />
                  <span className="block text-[11px] text-gray-500 mt-1 text-center">
                    Click badge to view store publication status
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setModalInfo(
                      'Official Signed APK Package: The latest verified build (v1.4.2) is distributed via our cryptographic mirror. The APK includes automatic in-app safety updates and requires zero background battery permissions when idle.'
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#e31b23] text-white font-semibold text-sm hover:bg-[#c4141c] transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official APK (Direct Build)</span>
                </button>
              </div>

              <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 space-y-1">
                <div className="flex justify-between">
                  <span>Current Version:</span>
                  <strong className="text-gray-800">1.4.2 (Build 2026.02)</strong>
                </div>
                <div className="flex justify-between">
                  <span>SHA-256 Checksum:</span>
                  <span className="font-mono text-[11px] text-gray-600">e3b0c44298fc1c...</span>
                </div>
              </div>
            </div>

            {/* iOS Card */}
            <div id="ios-download" className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm space-y-6 scroll-mt-24">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center">
                  <Apple className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  iOS TestFlight
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Apple iOS Version
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Compatible with iPhone models running iOS 14.0 or later. Public beta testing currently active via Apple TestFlight.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <AppStoreBadge
                    size="lg"
                    className="w-full h-13"
                    onClick={() =>
                      setModalInfo(
                        'Apple App Store Status: Khu Nyi Kal Sal for iOS is undergoing Apple App Store review for emergency service telemetry. Active testing is available immediately through the official TestFlight program below.'
                      )
                    }
                  />
                  <span className="block text-[11px] text-gray-500 mt-1 text-center">
                    Click badge to view App Store publication status
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setModalInfo(
                      'Apple iOS TestFlight Program: Khu Nyi Kal Sal for iOS is available to verified test participants via Apple TestFlight. Public App Store submission is pending official municipal dispatch certification.'
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-black transition-colors shadow-sm"
                >
                  <Apple className="w-4 h-4" />
                  <span>Join Public Beta on TestFlight</span>
                </button>
              </div>

              <div className="pt-3 border-t border-gray-100 text-xs text-gray-500 space-y-1">
                <div className="flex justify-between">
                  <span>Current iOS Build:</span>
                  <strong className="text-gray-800">1.4 (TestFlight Beta)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Minimum Device:</span>
                  <span className="text-gray-600">iPhone 7 / iOS 14.0+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements & Setup Checklist */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technical Specifications"
            title="System Requirements & First-Time Setup"
            description="To ensure life-saving alerts transmit without interruption, please verify the following phone requirements."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f7f7f7] rounded-2xl p-7 border border-gray-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#e31b23] flex items-center justify-center border border-gray-200">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">
                OS & Chipset
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Android 8.0+ or iOS 14.0+. 1.5 GHz multi-core processor and at least 2 GB RAM recommended for smooth responsiveness.
              </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-2xl p-7 border border-gray-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#e31b23] flex items-center justify-center border border-gray-200">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">
                Sensors & Connectivity
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Built-in GPS receiver, Cellular GSM/LTE connectivity for SMS fallback, and Wi-Fi capability for high-speed map caching.
              </p>
            </div>

            <div className="bg-[#f7f7f7] rounded-2xl p-7 border border-gray-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#e31b23] flex items-center justify-center border border-gray-200">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900">
                Storage & Footprint
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Requires only 24 MB initial install space and approximately 50 MB for local emergency guide and map caching.
              </p>
            </div>
          </div>

          {/* 3 Step Setup Guide */}
          <div className="mt-12 bg-[#fff1f2] rounded-3xl border border-[#fecdd3] p-8 sm:p-10">
            <h3 className="text-xl font-bold text-[#111111] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#e31b23]" />
              <span>3-Step Checklist After Installing</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl border border-red-100 space-y-1.5">
                <span className="text-xs font-black text-[#e31b23]">STEP 01</span>
                <h5 className="font-bold text-gray-900 text-sm">Grant Location Permission</h5>
                <p className="text-xs text-gray-600">
                  Select &ldquo;Allow all the time&rdquo; or &ldquo;While using app&rdquo; so responders receive accurate coordinates.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-red-100 space-y-1.5">
                <span className="text-xs font-black text-[#e31b23]">STEP 02</span>
                <h5 className="font-bold text-gray-900 text-sm">Add 2+ Emergency Contacts</h5>
                <p className="text-xs text-gray-600">
                  Input trusted family or coworkers who should receive immediate automatic SMS distress beacons.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-red-100 space-y-1.5">
                <span className="text-xs font-black text-[#e31b23]">STEP 03</span>
                <h5 className="font-bold text-gray-900 text-sm">Perform Safe Test Ping</h5>
                <p className="text-xs text-gray-600">
                  Open Settings &gt; Safe Test Mode to simulate notification sound and GPS lock without alerting responders.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/support"
                className="text-xs font-bold text-[#e31b23] hover:underline"
              >
                Need help installing or setting up? Visit the Khu Nyi Kal Sal Support Center →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
