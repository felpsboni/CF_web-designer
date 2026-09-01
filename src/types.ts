export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  segment: string;
  projectType: string;
  description: string;
  tags: string[];
  deliverables: string[];
  desktopImage: string;
  mobileImage: string;
  liveUrl?: string;
  year?: string;
  conceptBadge?: string;
  palette: {
    primary: string;
    accent: string;
    bg: string;
  };
}

export interface ProcessStep {
  number: string;
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  keyDeliverables: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budgetRange: string;
  message: string;
}
