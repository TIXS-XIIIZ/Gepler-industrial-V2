export type Language = 'th' | 'en';

export type DisciplineKey = 'web' | 'app' | 'iot' | 'ai';

export interface ServiceItem {
  id: DisciplineKey;
  number: string;
  title: {
    th: string;
    en: string;
  };
  subtitle: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  capabilities: {
    th: string[];
    en: string[];
  };
  techStack: string[];
  metrics: {
    value: string;
    label: {
      th: string;
      en: string;
    };
  };
}

export interface ShowcaseProject {
  id: string;
  category: DisciplineKey;
  title: {
    th: string;
    en: string;
  };
  subtitle: {
    th: string;
    en: string;
  };
  tagline: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  metric: {
    label: { th: string; en: string };
    value: string;
  };
  technologies: string[];
  interactiveType: 'telemetry' | 'vision' | 'performance' | 'app-simulator';
  featuredImage?: string;
  clientIndustry: {
    th: string;
    en: string;
  };
}

export interface ConfiguratorModule {
  id: string;
  category: DisciplineKey;
  name: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  icon: string;
  complexity: 'Standard' | 'Advanced' | 'Enterprise';
}
