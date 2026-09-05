import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Khu Nyi Kal Sal — Emergency Response Platform',
    template: '%s | Khu Nyi Kal Sal',
  },
  description:
    'Khu Nyi Kal Sal is a modern emergency-response mobile platform designed to connect people with rapid assistance when every second matters.',
  keywords: [
    'Khu Nyi Kal Sal',
    'Emergency Response',
    'SOS App',
    'Medical Emergency',
    'Public Safety',
    'First Aid',
    'Disaster Preparedness',
  ],
  authors: [{ name: 'Khu Nyi Kal Sal Team' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Khu Nyi Kal Sal — Emergency Response Platform',
    description:
      'Help When It Matters Most. Fast, reliable emergency-response mobile app connecting citizens and rescue teams.',
    siteName: 'Khu Nyi Kal Sal',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-[#111111] antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
