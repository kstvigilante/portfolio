export interface Profile {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  yearsOfExperience: number;
  summary: string;
  links: readonly SocialLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProductSurface {
  name: string;
  platform: string;
  description: string;
  stack: readonly string[];
  /** Omit for internal tools that have no public URL. */
  link?: { href: string; label: string };
}

export interface RecentProject {
  name: string;
  tagline: string;
  summary: string;
  contributions: readonly string[];
  stack: readonly string[];
  surfaces: readonly ProductSurface[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  summary: string;
  highlights: readonly string[];
  tags: readonly string[];
  metric?: { value: string; label: string };
}

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  points: readonly string[];
}

export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export interface Achievement {
  title: string;
  body: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  location: string;
}

export interface NavItem {
  id: string;
  label: string;
}
