export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: 'design' | 'development';
  subServices: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'uiux' | 'branding' | 'social';
  description: string;
  thumbnail: string;
  tags: string[];
  year: number;
  url?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar: string;
  social: {
    linkedin?: string;
    github?: string;
    behance?: string;
    instagram?: string;
  };
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  logo: string;
  color?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
