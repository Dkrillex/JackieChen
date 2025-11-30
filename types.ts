export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  companyColor?: string; // Optional custom color for company name
  isLink?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorImage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}