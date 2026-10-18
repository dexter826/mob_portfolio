import type { ComponentType } from 'react';
import type { I18nRecord } from './i18n';

export interface Education {
  period: string;
  school: I18nRecord;
  major: I18nRecord;
  gpa: string;
}

export interface PersonalInfo {
  name: string;
  role: I18nRecord;
  rolePrefix: string;
  roleSuffix: string;
  basedIn: I18nRecord;
  status: I18nRecord;
  email: string;
  github: string;
  facebook: string;
  instagram: string;
  birthDate: string;
  quote: I18nRecord;
  bio: I18nRecord;
  education: Education;
}

export interface SkillItem {
  category: I18nRecord;
  items: (string | I18nRecord)[];
}

export interface FeatureCategory {
  category: I18nRecord;
  items: I18nRecord[];
}

export interface Project {
  slug: string;
  title: string;
  role: I18nRecord;
  description: I18nRecord;
  fullDescription: I18nRecord;
  problem: I18nRecord;
  solution: I18nRecord;
  features: I18nRecord[];
  detailedFeatures: FeatureCategory[];
  tech: string[];
  techStack: Record<string, string>;
  icon: ComponentType<{ className?: string }>;
  link: string;
  liveDemo: string;
  image: string;
}

export interface ExperienceItem {
  period: string;
  role: I18nRecord;
  company: string;
  link: string;
  description: I18nRecord;
}
