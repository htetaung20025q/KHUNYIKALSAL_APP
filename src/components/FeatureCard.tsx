import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badgeText?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  badgeText,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 p-6 md:p-8 card-hover relative group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-xl bg-[#fff1f2] border border-[#fecdd3] flex items-center justify-center text-[#e31b23] group-hover:bg-[#e31b23] group-hover:text-white transition-colors duration-200">
            <Icon className="w-6 h-6" />
          </div>
          {badgeText && (
            <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200">
              {badgeText}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#111111] mb-2.5 tracking-tight group-hover:text-[#e31b23] transition-colors">
          {title}
        </h3>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#e31b23] group-hover:translate-x-1 transition-transform">
        <span>Instant Triage & Dispatch Ready</span>
      </div>
    </div>
  );
};
