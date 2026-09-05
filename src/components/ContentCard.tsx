import React from 'react';
import Link from 'next/link';
import { ContentArticle } from '@/types';
import { ArrowRight, Clock } from 'lucide-react';

interface ContentCardProps {
  article: ContentArticle;
}

export const ContentCard: React.FC<ContentCardProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-2xl border border-gray-200/80 p-6 md:p-7 card-hover flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3]">
            {article.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#111111] mb-2.5 tracking-tight group-hover:text-[#e31b23] transition-colors line-clamp-2">
          <Link href={`/content/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
          {article.description}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          {article.publishedDate}
        </span>
        <Link
          href={`/content/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e31b23] hover:text-[#c4141c] group/link"
        >
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
