import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CONTENT_ARTICLES } from '@/data/content';
import { ContentCard } from '@/components/ContentCard';
import {
  ChevronRight,
  Clock,
  Calendar,
  AlertOctagon,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';

interface ContentDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CONTENT_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ContentDetailPageProps) {
  const { slug } = await params;
  const article = CONTENT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Khu Nyi Kal Sal',
    };
  }

  return {
    title: `${article.title} | Khu Nyi Kal Sal`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
    },
  };
}

export default async function ContentDetailPage({ params }: ContentDetailPageProps) {
  const { slug } = await params;
  const article = CONTENT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find related articles
  const relatedArticles = CONTENT_ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  ).slice(0, 2);

  return (
    <div className="flex flex-col w-full bg-[#f7f7f7] min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-gray-200/80 py-3.5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            <Link href="/content" className="hover:text-gray-900 transition-colors">
              Content Hub
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            <span className="text-gray-500">{article.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            <span className="text-gray-900 font-medium truncate max-w-xs">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header Card */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3]">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {article.publishedDate}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal border-l-4 border-[#e31b23] pl-4 py-1 bg-red-50/30 rounded-r-lg">
              {article.intro}
            </p>
          </div>

          {/* Important Safety Notes (Required highlighted callout) */}
          <div className="bg-white rounded-3xl border-2 border-red-200 p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#e31b23] flex items-center justify-center flex-shrink-0">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-red-950 uppercase tracking-wider">
                  Important Safety Notice
                </h3>
                <p className="text-sm sm:text-base text-red-900 leading-relaxed">
                  {article.safetyNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Key Takeaways Section */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-sm mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#e31b23]" />
              <span>Key Preparedness Takeaways</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.keyTakeaways.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#e31b23] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Content Sections */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm space-y-10 mb-12">
            {article.sections.map((section, idx) => (
              <div
                key={idx}
                className={idx > 0 ? 'pt-8 border-t border-gray-100' : ''}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-[#111111] mb-4 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  {section.content}
                </p>

                {section.steps && section.steps.length > 0 && (
                  <div className="bg-[#f7f7f7] rounded-2xl p-5 border border-gray-100 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                      Action Checklist
                    </span>
                    {section.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800">
                        <span className="w-5 h-5 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[10px] font-bold text-gray-700 flex-shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span className="leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related Content & Navigation Footer */}
          {relatedArticles.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  Related Safety Guides
                </h3>
                <Link
                  href="/content"
                  className="text-xs font-semibold text-[#e31b23] hover:underline"
                >
                  View All Guides →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <ContentCard key={rel.slug} article={rel} />
                ))}
              </div>
            </div>
          )}

          {/* Back to Content Hub Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/content"
              className="inline-flex items-center gap-2 btn-secondary text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Content Hub</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
