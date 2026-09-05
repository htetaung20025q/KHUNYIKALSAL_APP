import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  icon: Icon,
  isLast = false,
}) => {
  return (
    <div className="relative flex flex-col items-start p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] card-hover group">
      {/* Top connector bar for desktop (visual continuity) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute -right-4 top-12 w-8 h-[2px] bg-gradient-to-r from-red-200 to-transparent z-10"
          aria-hidden="true"
        />
      )}

      {/* Step Number & Icon Header */}
      <div className="flex items-center justify-between w-full mb-5">
        <span className="text-3xl font-black text-[#e31b23] tracking-tighter">
          {number}
        </span>
        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-[#fff1f2] group-hover:text-[#e31b23] group-hover:border-[#fecdd3] transition-colors">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#e31b23] transition-colors">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
