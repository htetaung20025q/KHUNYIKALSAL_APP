import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import {
  ShieldAlert,
  Clock,
  Compass,
  HeartPulse,
  Radio,
  Lock,
  BatteryCharging,
  Users,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export const metadata = {
  title: 'About Khu Nyi Kal Sal',
  description:
    'Learn about Khu Nyi Kal Sal, why it was created, the critical emergency-response problem it addresses, and how it protects citizens when every second matters.',
};

export default function AboutPage() {
  const problemsAddressed = [
    {
      title: 'Caller Panic & Unclear Locations',
      desc: 'During high-adrenaline crises, callers frequently cannot remember street names, ward boundaries, or exact building numbers, delaying dispatched vehicles by critical minutes.',
      icon: AlertTriangle,
    },
    {
      title: 'Multiple Uncoordinated Hotlines',
      desc: 'Remembering distinct, fragmented telephone numbers for police, fire, red cross, or municipal ambulance creates dangerous hesitation during life-threatening moments.',
      icon: Clock,
    },
    {
      title: 'Lack of Family Notification',
      desc: 'Traditional 911/emergency dispatchers cannot notify a victim’s family members simultaneously, leaving relatives unaware and unable to assist or provide vital medical history.',
      icon: Users,
    },
  ];

  const appCapabilities = [
    {
      title: 'One-Touch Distress Activation',
      desc: 'A prominent 3-second hold button prevents accidental clicks while allowing instant one-touch panic dispatch without browsing complex menus.',
      icon: Radio,
    },
    {
      title: 'Real-Time Telemetry & GPS Beaconing',
      desc: 'Combines GPS satellites, cellular triangulation, and Wi-Fi networks to pinpoint position within meters, transmitting live updates even as the user moves.',
      icon: Compass,
    },
    {
      title: 'Encrypted Offline Emergency Medical Card',
      desc: 'Pre-stored blood group, critical allergies, emergency contact phone numbers, and preexisting conditions are sent securely to certified paramedics.',
      icon: HeartPulse,
    },
    {
      title: 'Offline SMS Gateway Fallback',
      desc: 'When mobile data or Wi-Fi connectivity drops, Khu Nyi Kal Sal automatically constructs a compact, encrypted SMS packet sent to emergency gateways.',
      icon: Smartphone,
    },
    {
      title: 'Privacy & Data Protection by Design',
      desc: 'No routine background movement tracking. Location permissions are utilized strictly during active SOS sessions and canceled immediately upon incident closure.',
      icon: Lock,
    },
    {
      title: 'Lightweight & Battery Efficient',
      desc: 'Engineered for low-end hardware and unstable power environments. Operates with minimal background battery drain and low memory footprint.',
      icon: BatteryCharging,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Header Section */}
      <section className="relative py-16 md:py-24 bg-[#f7f7f7] border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3] mb-4">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>About The Application</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Designed For When Every Second Counts.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Khu Nyi Kal Sal is an emergency-response mobile platform engineered to bridge the gap between people facing unexpected peril and the dedicated responders who can save them.
            </p>
          </div>
        </div>
      </section>

      {/* Storytelling: The Origin & The Problem */}
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e31b23]">
                <span>The Problem It Aims To Address</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight">
                Why Khu Nyi Kal Sal Was Created
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                In sudden medical collapses, severe traffic collisions, structural fires, and natural disasters, delays are almost never caused by a lack of willingness to help. They are caused by <strong>information breakdown</strong>.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                When an emergency strikes, victims often struggle to articulate their location, locate the correct departmental telephone number, or inform their family. Responders lose precious minutes trying to locate an incident site without precise landmarks.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Khu Nyi Kal Sal was created with a single, uncompromising mandate: <em>eliminate every unnecessary barrier between a human being in distress and rapid, qualified assistance.</em>
              </p>
            </div>

            {/* Visual Callout Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#f7f7f7] rounded-3xl border border-gray-200/90 p-8 space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src="/assets/logo.png"
                      alt="Khu Nyi Kal Sal Official Logo"
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Khu Nyi Kal Sal
                    </h3>
                    <p className="text-xs text-gray-500">
                      Public Emergency Infrastructure
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e31b23] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Universal Access:</strong> Completely free for all residents, zero paywalls.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e31b23] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Minimal Complexity:</strong> High-contrast, large-button design operable by anyone under acute stress.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e31b23] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <strong>Dual Safety Net:</strong> Simultaneous dispatch to local responders and trusted family members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Critical Failure Modes Addressed */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemsAddressed.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-200/80 p-7 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Emergency-Response Concept Works */}
      <section className="py-16 md:py-24 bg-[#f7f7f7] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Architecture"
            title="How the Response Concept Works"
            description="A coordinated triangle connecting the citizen in need, verified emergency rescue units, and the user’s personal safety circle."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e31b23] bg-[#fff1f2] px-2.5 py-1 rounded-full border border-[#fecdd3]">
                  Node 1 · Citizen
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                  Instant Beacon Broadcast
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The user presses SOS or selects a specific category (Medical, Road, Fire, Disaster). The app locks current coordinates and transmits an emergency bundle immediately.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
                Operates with or without active Wi-Fi
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e31b23] bg-[#fff1f2] px-2.5 py-1 rounded-full border border-[#fecdd3]">
                  Node 2 · Responders
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                  Triage & Field Dispatch
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The nearest verified response station (ambulance, traffic rescue, or fire company) receives the ticket with turn-by-turn route coordinates and medical summary.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
                Reduces arrival hesitation & wrong turns
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e31b23] bg-[#fff1f2] px-2.5 py-1 rounded-full border border-[#fecdd3]">
                  Node 3 · Trusted Circle
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">
                  Simultaneous Family Alerts
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Up to 5 designated emergency contacts receive high-priority push messages and SMS containing live tracking links, so family members know where you are.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
                Live location link expires automatically
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Capabilities */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering & Capabilities"
            title="Core Application Features"
            description="Engineered specifically for reliability, privacy, and performance under real-world emergency conditions."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-2xl border border-gray-200/80 p-7 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center mb-5">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Users During Emergencies */}
      <section className="py-16 md:py-24 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Ready on Your Phone Whenever You Need It.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Emergency preparedness is not about expecting danger every day—it is about having the right tool configured once so that you and your loved ones never have to navigate a crisis alone.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link href="/get-app" className="btn-primary">
                  Download Khu Nyi Kal Sal
                </Link>
                <Link href="/content" className="btn-secondary">
                  Explore Safety Awareness Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
