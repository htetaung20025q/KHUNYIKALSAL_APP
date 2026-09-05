'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import {
  Users,
  Code2,
  Megaphone,
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Share2,
  Copy,
  Check,
  X,
  Info,
  Send,
} from 'lucide-react';

export const JoinUsClient: React.FC = () => {
  const [modalType, setModalType] = useState<
    'skills' | 'share' | 'ideas' | 'support' | 'join-placeholder' | null
  >(null);
  const [copied, setCopied] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerData, setVolunteerData] = useState({
    name: '',
    email: '',
    role: 'Development (Web / Mobile)',
    message: '',
  });

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  const resetModals = () => {
    setModalType(null);
    setVolunteerSubmitted(false);
  };

  const joinCards = [
    {
      id: 'skills',
      title: 'Volunteer Your Skills',
      badge: 'Skills & Craft',
      description:
        'Developers, designers, content creators, and people with different skills can contribute to the development and improvement of Khu Nyi Kal Sal.',
      icon: Code2,
      actionText: 'Contribute Skills',
      onClick: () => setModalType('skills'),
      highlight: true,
    },
    {
      id: 'awareness',
      title: 'Spread Awareness',
      badge: 'Community',
      description:
        'Help more people learn about emergency preparedness and Khu Nyi Kal Sal by sharing the project with your community.',
      icon: Megaphone,
      actionText: 'Share with Community',
      onClick: () => setModalType('share'),
      highlight: false,
    },
    {
      id: 'ideas',
      title: 'Share Your Ideas',
      badge: 'Feedback & Ideas',
      description:
        'Your feedback, ideas, and experience can help us make the platform more useful, accessible, and reliable.',
      icon: Lightbulb,
      actionText: 'Submit Ideas',
      onClick: () => setModalType('ideas'),
      highlight: false,
    },
    {
      id: 'support',
      title: 'Support the Project',
      badge: 'Sustainability',
      description:
        'Help us continue developing and maintaining the platform through available forms of support.',
      icon: HeartHandshake,
      actionText: 'Learn About Support',
      onClick: () => setModalType('support'),
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Interactive Modals with Clearly Marked Placeholders */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative">
            <button
              onClick={resetModals}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal: Volunteer Skills */}
            {modalType === 'skills' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e31b23] flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Volunteer Your Skills
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Join as a volunteer developer, UI/UX designer, content creator, or tester.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                  <span>
                    <strong>Community Notice:</strong> Official volunteer onboarding channels are currently in preparation. Submissions through this form are logged in local test mode.
                  </span>
                </div>

                {volunteerSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base">
                      Thank You for Stepping Forward!
                    </h4>
                    <p className="text-xs text-gray-600 max-w-sm mx-auto">
                      Your interest as a <strong>{volunteerData.role}</strong> has been noted. We look forward to collaborating with you.
                    </p>
                    <button
                      type="button"
                      onClick={resetModals}
                      className="btn-secondary text-xs mt-2"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVolunteerSubmit} className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={volunteerData.name}
                        onChange={(e) =>
                          setVolunteerData({ ...volunteerData, name: e.target.value })
                        }
                        placeholder="e.g. Aung Min"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#e31b23]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={volunteerData.email}
                        onChange={(e) =>
                          setVolunteerData({ ...volunteerData, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#e31b23]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Area of Contribution *
                      </label>
                      <select
                        value={volunteerData.role}
                        onChange={(e) =>
                          setVolunteerData({ ...volunteerData, role: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:border-[#e31b23]"
                      >
                        <option value="Development (Web / Mobile)">
                          Software Development (Mobile App / Web Platform)
                        </option>
                        <option value="UI/UX & Visual Design">
                          UI/UX Design & User Research
                        </option>
                        <option value="Safety Content & Translation">
                          Emergency Content & First-Aid Guidelines
                        </option>
                        <option value="Testing & Field Simulation">
                          QA Testing & Emergency Scenario Validation
                        </option>
                        <option value="Community & Awareness Outreach">
                          Community Outreach & Awareness
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Experience / Brief Note
                      </label>
                      <textarea
                        rows={2}
                        value={volunteerData.message}
                        onChange={(e) =>
                          setVolunteerData({ ...volunteerData, message: e.target.value })
                        }
                        placeholder="Brief note about your background or how you'd like to help..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#e31b23]"
                      />
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button type="submit" className="btn-primary text-xs py-2.5 px-5">
                        Submit Volunteer Interest
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Modal: Share Project */}
            {modalType === 'share' && (
              <div className="space-y-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e31b23] flex items-center justify-center mx-auto sm:mx-0">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Share Khu Nyi Kal Sal
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Help friends, family, and your local community discover emergency preparedness resources.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-left space-y-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                    Website Address
                  </span>
                  <div className="flex items-center justify-between gap-2 bg-white p-2.5 rounded-xl border border-gray-200">
                    <span className="text-xs text-gray-700 truncate font-mono">
                      https://khunyikalsal.org
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="btn-primary py-1.5 px-3 text-xs flex items-center gap-1.5 flex-shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  Sharing the project helps more people be prepared before emergencies happen.
                </p>
              </div>
            )}

            {/* Modal: Share Ideas */}
            {modalType === 'ideas' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e31b23] flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Share Your Ideas & Feedback
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    We welcome suggestions on usability, offline resilience, and emergency workflow improvements.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-xs text-gray-700 space-y-2 leading-relaxed">
                  <p>
                    <strong>What kind of ideas help most?</strong>
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>Feedback on accessibility for elderly or low-literacy users.</li>
                    <li>Technical recommendations for low-connectivity offline dispatch.</li>
                    <li>Standard emergency protocol suggestions for local townships.</li>
                  </ul>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <Link href="/support" className="text-xs font-semibold text-[#e31b23] hover:underline">
                    Submit via Support Feedback Form →
                  </Link>
                  <button
                    type="button"
                    onClick={resetModals}
                    className="btn-secondary text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Modal: Support the Project */}
            {modalType === 'support' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e31b23] flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Supporting the Project
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Transparent overview of our volunteer-driven initiative.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-xs text-gray-700 space-y-2 leading-relaxed">
                  <p>
                    <strong>Our Operational Commitments:</strong>
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>We do not charge users for emergency assistance.</li>
                    <li>We do not currently have dedicated sponsors or commercial funding.</li>
                    <li>Contributions of skills, time, ideas, and infrastructure help keep the platform accessible to everyone.</li>
                  </ul>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={resetModals}
                    className="btn-secondary text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Modal: Join Form Placeholder */}
            {modalType === 'join-placeholder' && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#e31b23] flex items-center justify-center">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Join the Khu Nyi Kal Sal Mission
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Thank you for wanting to be part of our volunteer-driven community!
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-xs text-gray-700 space-y-2 leading-relaxed">
                  <p>
                    <strong>How to participate right now:</strong>
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-600">
                    <li>Volunteer your technical, design, or writing skills.</li>
                    <li>Share the platform with friends, family, and community groups.</li>
                    <li>Provide testing feedback and suggest usability improvements.</li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalType('skills')}
                    className="btn-primary text-xs w-full sm:w-auto"
                  >
                    <span>Volunteer Skills</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetModals}
                    className="btn-secondary text-xs w-full sm:w-auto"
                  >
                    <span>Close</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 1. JOIN US HERO */}
      <section className="relative py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3]">
                <Users className="w-3.5 h-3.5 text-[#e31b23]" />
                <span>Community &amp; Volunteer Mission</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.12]">
                Join Us in Making <br className="hidden sm:inline" />
                <span className="text-[#e31b23]">a Difference.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Khu Nyi Kal Sal is a volunteer-driven project built with a simple mission: to help save people&apos;s lives whenever possible by making emergency assistance more accessible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#how-to-join"
                  className="btn-primary w-full sm:w-auto text-base"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Us</span>
                </a>

                <a
                  href="#why-we-exist"
                  className="btn-secondary w-full sm:w-auto text-base"
                >
                  <span>Learn About Our Mission</span>
                </a>
              </div>

              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-500">
                <span className="flex items-center gap-1.5 font-medium text-gray-700">
                  <ShieldCheck className="w-4 h-4 text-[#e31b23]" />
                  Volunteer-Driven
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>Zero Commercial Funding</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>Open Participation</span>
              </div>
            </div>

            {/* Official Logo Spotlight Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-[#f7f7f7] p-8 rounded-3xl border border-gray-200 shadow-sm text-center max-w-xs w-full space-y-4">
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    src="/assets/logo.png"
                    alt="Khu Nyi Kal Sal Logo"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Khu Nyi Kal Sal
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Emergency Response Technology
                  </p>
                </div>
                <div className="bg-white rounded-xl p-3 border border-gray-200 text-xs text-gray-700 font-medium leading-relaxed">
                  &ldquo;To help save people&apos;s lives whenever possible by making emergency assistance more accessible.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION SECTION */}
      <section id="why-we-exist" className="py-16 md:py-24 bg-[#f7f7f7] border-b border-gray-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading
            badge="Foundational Purpose"
            title="Why We Exist"
            description="Emergencies can happen when people least expect them. In those moments, having access to the right assistance can make a meaningful difference."
          />

          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm text-left sm:text-center space-y-5">
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
              Khu Nyi Kal Sal was created to use technology to help connect people with emergency assistance when it matters most.
            </p>
            <div className="h-0.5 w-16 bg-[#e31b23] mx-auto rounded-full" />
            <p className="text-lg sm:text-xl font-bold text-[#111111] max-w-xl mx-auto">
              Our goal is simple: help save people&apos;s lives whenever possible.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed pt-2">
              We do not claim that technology can prevent every tragedy or guarantee emergency outcomes, but we are committed to eliminating communication delays so people have the fastest possible access to assistance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VOLUNTEER-DRIVEN SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-black text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
            <div
              className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30">
                <Sparkles className="w-3.5 h-3.5 text-[#e31b23]" />
                <span>Grassroots Initiative</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Built by Volunteers. <br />
                Driven by Purpose.
              </h2>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Khu Nyi Kal Sal is being developed as a volunteer-driven initiative. We believe that meaningful technology can be built by people who are willing to contribute their time, skills, and ideas for a greater purpose.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setModalType('skills')}
                  className="btn-primary text-sm py-3 px-6"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Volunteer Your Skills</span>
                </button>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 bg-gray-800/80 text-white text-sm font-semibold transition-all"
                >
                  <span>About the Application</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WAYS TO JOIN */}
      <section id="how-to-join" className="py-16 md:py-24 bg-[#f7f7f7] border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ways to Participate"
            title="How You Can Join"
            description="Joining does not require financial contribution. People are welcome to contribute their skills, time, ideas, awareness, or resources."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {joinCards.map((card) => (
              <div
                key={card.id}
                className={`bg-white rounded-3xl border p-7 card-hover flex flex-col justify-between group ${
                  card.highlight
                    ? 'border-red-300 ring-2 ring-red-50 shadow-md'
                    : 'border-gray-200/90 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#fff1f2] border border-[#fecdd3] text-[#e31b23] flex items-center justify-center group-hover:bg-[#e31b23] group-hover:text-white transition-colors">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#e31b23] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={card.onClick}
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                      card.highlight ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NO SPONSOR / VOLUNTEER MESSAGE */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading
            badge="Independence & Transparency"
            title="Why Your Help Matters"
            description="Khu Nyi Kal Sal is currently being developed as a volunteer-driven project without dedicated sponsors or commercial funding."
          />

          <div className="bg-[#f7f7f7] rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-4">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Because of this, community participation can play an important role in helping us continue developing, maintaining, and improving the platform.
            </p>
            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-gray-500">
              <ShieldCheck className="w-4 h-4 text-[#e31b23]" />
              <span>Independent Public Safety Technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY SECTION */}
      <section className="py-16 md:py-24 bg-[#f7f7f7] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e31b23]">
            <Users className="w-4 h-4" />
            <span>Community Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Together, We Can Do More.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Building a platform that can help people during emergencies is not something one person can do alone.
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Every contribution matters — whether you contribute your skills, your ideas, your time, or simply help spread the message.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setModalType('skills')}
              className="btn-primary text-sm py-3 px-6 inline-flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>Get Involved with the Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. JOIN FORM / CTA */}
      <section id="join-form" className="py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 sm:p-12 shadow-sm text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#fff1f2] text-[#e31b23] flex items-center justify-center mx-auto border border-[#fecdd3]">
              <Send className="w-7 h-7" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Want to Be Part of the Mission?
            </h2>

            <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              If you would like to contribute to Khu Nyi Kal Sal, we&apos;d love to hear from you.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setModalType('skills')}
                className="btn-primary w-full sm:w-auto text-base py-3.5 px-8"
              >
                <span>Join Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setModalType('ideas')}
                className="btn-secondary w-full sm:w-auto text-base py-3.5 px-8"
              >
                <span>Share Ideas</span>
              </button>
            </div>

            <p className="text-xs text-gray-400 pt-2">
              Volunteer onboarding is open to anyone willing to support public safety.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fff1f2] rounded-3xl border border-[#fecdd3] p-8 sm:p-12 lg:p-16 text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-[#e31b23] border border-[#fecdd3] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Stand With Khu Nyi Kal Sal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight">
              Help Us Build a Safer Tomorrow.
            </h2>

            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Join Khu Nyi Kal Sal and help us build technology that can make emergency assistance more accessible when every second matters.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setModalType('skills')}
                className="btn-primary w-full sm:w-auto text-base"
              >
                <Users className="w-4 h-4" />
                <span>Join Us</span>
              </button>

              <Link href="/get-app" className="btn-secondary w-full sm:w-auto text-base">
                <span>Get the App</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
