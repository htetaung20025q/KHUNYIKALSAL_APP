'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldAlert, Mail } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Support',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate reliable dispatch submission
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      category: 'General Support',
      subject: '',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
      {status === 'success' ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Thank you for contacting Khu Nyi Kal Sal Support. Our emergency tech team will review your inquiry and follow up at{' '}
            <strong className="text-gray-900">{formData.email}</strong>.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary text-sm"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-gray-100 pb-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e31b23] mb-1">
              <Mail className="w-4 h-4" />
              <span>Direct Support Channel</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111] tracking-tight">
              Contact Khu Nyi Kal Sal Team
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Need technical troubleshooting, app onboarding assistance, or feedback? Send us a ticket.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Aung Kyaw"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#e31b23] focus:ring-2 focus:ring-red-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#e31b23] focus:ring-2 focus:ring-red-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="category"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Category *
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:border-[#e31b23] focus:ring-2 focus:ring-red-50"
              >
                <option value="General Support">General Support</option>
                <option value="SOS & Dispatch Issue">SOS & Dispatch Issue</option>
                <option value="Location / GPS Problem">Location / GPS Problem</option>
                <option value="Account & OTP Verification">Account & OTP Verification</option>
                <option value="Feedback / Safety Suggestion">Feedback / Safety Suggestion</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
              >
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief summary of inquiry"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#e31b23] focus:ring-2 focus:ring-red-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
            >
              Detailed Message *
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your question or issue, including your phone model and Android/iOS version if applicable..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#e31b23] focus:ring-2 focus:ring-red-50"
            />
          </div>

          <div className="rounded-xl bg-red-50/70 border border-red-100 p-3.5 flex items-start gap-3 text-xs text-red-900">
            <ShieldAlert className="w-4 h-4 text-[#e31b23] flex-shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> This form is for technical app support and feedback. If you are experiencing an immediate live emergency, please trigger the SOS button inside the mobile app or contact your local emergency response hotline directly.
            </p>
          </div>

          <div className="flex items-center justify-end pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full sm:w-auto"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'submitting' ? 'Submitting...' : 'Send Message'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
