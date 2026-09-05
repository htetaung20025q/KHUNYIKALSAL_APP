import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface SupportCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  countLabel?: string;
}

export const SupportCard: React.FC<SupportCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  countLabel,
}) => {
  return (
    <Link
      href={href}
      className="bg-white rounded-2xl border border-gray-200/80 p-6 md:p-7 card-hover block group focus:outline-none focus:ring-2 focus:ring-[#e31b23]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#f7f7f7] border border-gray-200 flex items-center justify-center text-gray-800 group-hover:bg-[#fff1f2] group-hover:border-[#fecdd3] group-hover:text-[#e31b23] transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#e31b23] group-hover:text-white transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-1.5">
        <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#e31b23] transition-colors">
          {title}
        </h3>
        {countLabel && (
          <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {countLabel}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-semibold text-[#e31b23]">
        <span>Explore Guide</span>
      </div>
    </Link>
  );
};
