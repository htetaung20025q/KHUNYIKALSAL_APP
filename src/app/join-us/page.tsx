import React from 'react';
import { Metadata } from 'next';
import { JoinUsClient } from './JoinUsClient';

export const metadata: Metadata = {
  title: 'Join Us — Khu Nyi Kal Sal',
  description:
    'Join the Khu Nyi Kal Sal volunteer-driven mission and help us build technology that can make emergency assistance more accessible.',
  openGraph: {
    title: 'Join Us — Khu Nyi Kal Sal',
    description:
      'Join the Khu Nyi Kal Sal volunteer-driven mission and help us build technology that can make emergency assistance more accessible.',
    type: 'website',
  },
};

export default function JoinUsPage() {
  return <JoinUsClient />;
}
