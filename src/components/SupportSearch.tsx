'use client';

import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, HelpCircle, AlertCircle, Wrench, ShieldAlert } from 'lucide-react';
import { SUPPORT_ARTICLES, FAQ_ITEMS } from '@/data/support';

interface SupportSearchProps {
  onSelectArticle?: (id: string) => void;
}

export const SupportSearch: React.FC<SupportSearchProps> = ({ onSelectArticle }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories: (string)[] = [
    'All',
    'Getting Started',
    'SOS Help',
    'Location & Emergency',
    'Troubleshooting',
    'FAQ',
  ];

  // Search filtering logic
  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();

    const filteredArticles = SUPPORT_ARTICLES.filter((article) => {
      const matchCategory =
        activeCategory === 'All' || article.category === activeCategory;
      if (!matchCategory) return false;
      if (!q) return true;

      const titleMatch = article.title.toLowerCase().includes(q);
      const summaryMatch = article.summary.toLowerCase().includes(q);
      const tagsMatch = article.tags.some((tag) => tag.toLowerCase().includes(q));
      const stepsMatch = article.steps.some((step) =>
        step.toLowerCase().includes(q)
      );

      return titleMatch || summaryMatch || tagsMatch || stepsMatch;
    });

    const filteredFaqs =
      activeCategory === 'All' || activeCategory === 'FAQ'
        ? FAQ_ITEMS.filter((faq) => {
            if (!q) return activeCategory === 'FAQ';
            return (
              faq.question.toLowerCase().includes(q) ||
              faq.answer.toLowerCase().includes(q)
            );
          })
        : [];

    return {
      articles: filteredArticles,
      faqs: filteredFaqs,
    };
  }, [query, activeCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'SOS Help':
        return <ShieldAlert className="w-4 h-4 text-[#e31b23]" />;
      case 'Troubleshooting':
        return <Wrench className="w-4 h-4 text-amber-600" />;
      case 'Location & Emergency':
        return <AlertCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onSelectArticle) {
      onSelectArticle(id);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Prominent Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for help... (e.g. SOS not working, location permission, cancel alert)"
          className="block w-full pl-11 pr-12 py-4 bg-white border-2 border-gray-200 rounded-2xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e31b23] focus:ring-4 focus:ring-red-50 transition-all shadow-sm"
          aria-label="Search support articles"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
            aria-label="Clear search query"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-[#e31b23] text-white shadow-sm'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Live Search Quick Results (when typing) */}
      {query && (
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-lg p-4 space-y-3 animate-in fade-in-50">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <span>
              Found {searchResults.articles.length + searchResults.faqs.length} results for &ldquo;{query}&rdquo;
            </span>
            <button
              onClick={() => setQuery('')}
              className="text-[#e31b23] hover:underline"
            >
              Clear
            </button>
          </div>

          {searchResults.articles.length === 0 && searchResults.faqs.length === 0 ? (
            <div className="py-8 text-center text-gray-500 text-sm">
              No matching help articles found. You can browse categories below or submit a support inquiry.
            </div>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {searchResults.articles.map((article) => (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => handleScrollToSection(article.id)}
                  className="w-full text-left p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(article.category)}
                      <span className="text-xs font-medium text-gray-500">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#e31b23]">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#e31b23] group-hover:translate-x-0.5 transition-transform flex-shrink-0 mt-1" />
                </button>
              ))}

              {searchResults.faqs.map((faq) => (
                <button
                  key={faq.id}
                  type="button"
                  onClick={() => handleScrollToSection('faq-section')}
                  className="w-full text-left p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#e31b23]" />
                      <span className="text-xs font-medium text-gray-500">
                        FAQ · {faq.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#e31b23]">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {faq.answer}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#e31b23] flex-shrink-0 mt-1" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
