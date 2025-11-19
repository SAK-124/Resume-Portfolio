import { LucideIcon } from 'lucide-react';

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string[];
  tags: string[];
  icon?: LucideIcon;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  details?: string;
  link?: string;
}
