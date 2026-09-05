'use client';

import React from 'react';
import Image from 'next/image';

interface StoreBadgeProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AppStoreBadge: React.FC<StoreBadgeProps> = ({
  href = '#app-store-placeholder',
  onClick,
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-10 w-[128px]',
    md: 'h-12 w-[154px]',
    lg: 'h-14 w-[180px]',
  };

  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`inline-flex items-center justify-center relative transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e31b23] focus-visible:ring-offset-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md ${heightClasses[size]} ${className}`}
      aria-label="Download Khu Nyi Kal Sal on the Apple App Store"
    >
      <Image
        src="/assets/app-store-badge.svg"
        alt="Download on the App Store"
        fill
        sizes="180px"
        className="object-contain"
      />
    </a>
  );
};

export const GooglePlayBadge: React.FC<StoreBadgeProps> = ({
  href = '#google-play-placeholder',
  onClick,
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-10 w-[128px]',
    md: 'h-12 w-[154px]',
    lg: 'h-14 w-[180px]',
  };

  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`inline-flex items-center justify-center relative transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e31b23] focus-visible:ring-offset-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md ${heightClasses[size]} ${className}`}
      aria-label="Get Khu Nyi Kal Sal on Google Play"
    >
      <Image
        src="/assets/google-play-badge.svg"
        alt="Get it on Google Play"
        fill
        sizes="180px"
        className="object-contain"
      />
    </a>
  );
};

interface StoreBadgeGroupProps {
  onBadgeClick?: (store: 'apple' | 'google') => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'row' | 'column' | 'responsive';
}

export const StoreBadgeGroup: React.FC<StoreBadgeGroupProps> = ({
  onBadgeClick,
  className = '',
  size = 'md',
  layout = 'responsive',
}) => {
  const layoutClasses = {
    row: 'flex flex-row items-center gap-3',
    column: 'flex flex-col items-center gap-3',
    responsive: 'flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5',
  };

  return (
    <div className={`${layoutClasses[layout]} ${className}`}>
      <AppStoreBadge
        size={size}
        onClick={onBadgeClick ? () => onBadgeClick('apple') : undefined}
      />
      <GooglePlayBadge
        size={size}
        onClick={onBadgeClick ? () => onBadgeClick('google') : undefined}
      />
    </div>
  );
};
