import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { StepCard } from '@/components/StepCard';
import { FeatureCard } from '@/components/FeatureCard';
import { SupportCard } from '@/components/SupportCard';
import { CTASection } from '@/components/CTASection';
import {
  Smartphone,
  Radio,
  Send,
  Users,
  Ambulance,
  CarFront,
  Flame,
  CloudLightning,
  ShieldAlert,
  MapPin,
  Wrench,
  HelpCircle,
  Clock,
  ShieldCheck,
  Signal,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Khu Nyi Kal Sal — Emergency Response Platform',
  description:
    'Help When It Matters Most. Fast, reliable emergency-response mobile app connecting citizens with responders, safety awareness, and family networks.',
};

export default function HomePage() {
  const steps = [
    {
      number: '01',
      title: 'Open the App',
      description:
        'Launch Khu Nyi Kal Sal instantly from your lock screen widget or home screen shortcut.',
      icon: Smartphone,
    },
    {
      number: '02',
      title: 'Press SOS',
      description:
        'Press and hold the prominent SOS trigger for 3 seconds with haptic confirmation to initiate.',
      icon: Radio,
    },
    {
      number: '03',
      title: 'Alert Sent',
      description:
        'Your precise coordinates and vital emergency info are encrypted and transmitted via GPS & SMS.',
      icon: Send,
    },
    {
      number: '04',
      title: 'Help Connected',
      description:
        'Nearby responders and registered emergency contacts receive instant routing and live incident tracking.',
      icon: Users,
    },
  ];

  const emergencyFeatures = [
    {
      title: 'Medical Emergency',
      description:
        'Direct connection to emergency medical dispatch, relaying essential patient data, blood group, and allergy notes.',
      icon: Ambulance,
      badgeText: 'Medical',
    },
    {
      title: 'Road Accident',
      description:
        'Immediate hazard signaling and location beaconing for vehicle collisions, traffic rescue, and tow assistance.',
      icon: CarFront,
      badgeText: 'Traffic Safety',
    },
    {
      title: 'Fire Emergency',
      description:
        'Rapid alert forwarding to regional fire brigades with building access details, hazard warnings, and evacuation alerts.',
      icon: Flame,
      badgeText: 'Rescue',
    },
    {
      title: 'Disaster',
      description:
        'Emergency response coordination during earthquakes, flash floods, and severe storms with offline fallback.',
      icon: CloudLightning,
      badgeText: 'Civil Defense',
    },
  ];

  const supportCards = [
    {
      title: 'SOS Help',
      description:
        'Learn how to send an emergency alert, test the system safely, cancel false alarms, and read status badges.',
      href: '/support#sos-help',
      icon: ShieldAlert,
      countLabel: '4 Guides',
    },
    {
      title: 'Location Help',
      description:
        'Enable high-accuracy GPS permissions, understand location sharing privacy, and configure offline maps.',
      href: '/support#location-emergency',
      icon: MapPin,
      countLabel: '3 Guides',
    },
    {
      title: 'Troubleshooting',
      description:
        'Step-by-step solutions for notification chime issues, battery optimization exceptions, and login verifications.',
      href: '/support#troubleshooting',
      icon: Wrench,
      countLabel: '5 Articles',
    },
    {
      title: 'FAQ',
      description:
        'Clear answers on platform pricing, emergency contact limits, cross-city alerts, and offline SMS fallback.',
      href: '/support#faq-section',
      icon: HelpCircle,
      countLabel: 'Common Inquiries',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. What is Khu Nyi Kal Sal? Section */}
      <section className="py-16 md:py-24 bg-[#f7f7f7] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Platform Mission"
            title="What is Khu Nyi Kal Sal?"
            description="Khu Nyi Kal Sal is designed to make emergency assistance easier to access when every second matters."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200/90 shadow-sm card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2.5">
                  Rapid Emergency Access
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Eliminates long directory searches and confusion during high-stress situations. A direct, standardized workflow connects users to appropriate services immediately.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#e31b23]">
                Zero Friction Dispatch
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/90 shadow-sm card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center mb-5">
                  <Signal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2.5">
                  Reliable Coordinate Relaying
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sends precise satellite GPS coordinates and street-level landmarks directly to responders, preventing delays caused by callers unfamiliar with their exact surroundings.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#e31b23]">
                Dual GPS & SMS Fail-Safe
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200/90 shadow-sm card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2.5">
                  Family & Community Network
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Informs designated emergency contacts simultaneously so family members are notified of your status and live route updates in real time.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#e31b23]">
                Simultaneous Family Alerts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simple 4-Step Process"
            title="How It Works"
            description="Designed for maximum clarity and speed during critical moments. Follow this simple 4-step emergency workflow."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#e31b23] hover:text-[#c4141c] group"
            >
              <span>Read the in-depth platform overview & safety architecture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Emergency Features Section */}
      <section className="py-16 md:py-24 bg-[#f7f7f7] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Incident Categories"
            title="Emergency Features"
            description="Tailored emergency options ensure your alert reaches the right specialized responders without delay."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyFeatures.map((feat) => (
              <FeatureCard
                key={feat.title}
                title={feat.title}
                description={feat.description}
                icon={feat.icon}
                badgeText={feat.badgeText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quick Support Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3] mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Knowledge & Help Center</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
                Quick Support
              </h2>
              <p className="mt-3 text-base text-gray-600 max-w-xl">
                Get answers and find resolution guides for permissions, notifications, and emergency protocols in seconds.
              </p>
            </div>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 hover:text-[#e31b23] hover:border-red-200 hover:bg-red-50/50 transition-all self-start md:self-auto"
            >
              <span>View All Support Topics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCards.map((card) => (
              <SupportCard
                key={card.title}
                title={card.title}
                description={card.description}
                href={card.href}
                icon={card.icon}
                countLabel={card.countLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Get the App CTA Section */}
      <CTASection />
    </div>
  );
}
