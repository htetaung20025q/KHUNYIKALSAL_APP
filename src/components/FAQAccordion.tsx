'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/types';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-red-200 bg-white shadow-sm ring-1 ring-red-100'
                : 'border-gray-200/80 bg-white hover:border-gray-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e31b23]"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#e31b23] flex-shrink-0" />
                <h4 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                  {item.question}
                </h4>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#e31b23]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                <p className="pt-2">{item.answer}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                  <span>Category: {item.category}</span>
                  <span className="text-emerald-700 font-medium">Verified by Khu Nyi Kal Sal Support</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
