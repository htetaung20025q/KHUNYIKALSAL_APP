import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  centered = true,
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#fff1f2] text-[#e31b23] border border-[#fecdd3]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#4b5563] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
