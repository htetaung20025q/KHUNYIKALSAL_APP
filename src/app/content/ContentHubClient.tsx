'use client';

import React, { useState, useMemo } from 'react';
import { ContentCard } from '@/components/ContentCard';
import { CONTENT_ARTICLES, CONTENT_CATEGORIES } from '@/data/content';
import { Search, BookOpen, ShieldCheck, X } from 'lucide-react';

export const ContentHubClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = useMemo(() => {
    return CONTENT_ARTICLES.filter((article) => {
      const matchCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Category Pills & Search Controls */}
      <div className="mb-10 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search educational guides (e.g. fire escape, road collision, earthquake)..."
            className="w-full pl-11 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#e31b23] focus:ring-2 focus:ring-red-50 shadow-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-[#e31b23] text-white shadow-sm'
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            All Guides ({CONTENT_ARTICLES.length})
          </button>

          {CONTENT_CATEGORIES.map((cat) => {
            const count = CONTENT_ARTICLES.filter((a) => a.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#e31b23] text-white shadow-sm'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-md mx-auto">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            No safety guides match your filter
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Try adjusting your search keywords or resetting your category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="btn-secondary text-xs"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ContentCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {/* Educational Standards Callout */}
      <div className="mt-16 rounded-2xl bg-white border border-gray-200/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e31b23] flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-gray-900">
            Certified Public Awareness & Safety Standards
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            All educational materials provided by Khu Nyi Kal Sal focus strictly on preventative measures, bystander safety etiquette, and early distress communication. For medical or surgical emergencies, always summon professional ambulance services immediately.
          </p>
        </div>
      </div>
    </div>
  );
};
