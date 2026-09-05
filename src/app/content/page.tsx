import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { ContentHubClient } from './ContentHubClient';
import { CTASection } from '@/components/CTASection';

export const metadata = {
  title: 'Emergency Safety & Awareness',
  description:
    'Comprehensive safety resources, first-response awareness guides, fire safety protocols, and disaster preparedness manuals from Khu Nyi Kal Sal.',
};

export default function ContentPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7]">
      {/* Header section */}
      <section className="py-14 md:py-20 bg-white border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Knowledge & Safety Library"
            title="Emergency Safety & Awareness"
            description="Verified educational guides to help you, your household, and your community prepare for, respond to, and prevent hazardous situations."
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContentHubClient />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
