export type ContentCategory =
  | 'Emergency Safety'
  | 'First Response Awareness'
  | 'Fire Safety'
  | 'Road Safety'
  | 'Disaster Preparedness';

export interface ContentArticle {
  slug: string;
  title: string;
  category: ContentCategory;
  description: string;
  readTime: string;
  publishedDate: string;
  intro: string;
  keyTakeaways: string[];
  safetyNotice: string;
  sections: {
    title: string;
    content: string;
    steps?: string[];
  }[];
  relatedSlugs: string[];
}

export type SupportCategory =
  | 'Getting Started'
  | 'SOS Help'
  | 'Location & Emergency'
  | 'Troubleshooting';

export interface SupportArticle {
  id: string;
  title: string;
  category: SupportCategory;
  summary: string;
  steps: string[];
  tips?: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}
