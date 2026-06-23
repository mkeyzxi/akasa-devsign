import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'web-development',
    title: 'Web Development',
    description: 'Membangun website profesional yang cepat, responsif, dan mudah digunakan.',
    icon: 'Code2',
    category: 'development',
    subServices: [
      'Company Profile',
      'Landing Page',
      'Portfolio Website',
      'E-Commerce',
      'Dashboard Admin',
      'Custom Web App',
      'SEO Friendly'
    ]
  },
  {
    id: '2',
    slug: 'mobile-apps-development',
    title: 'Mobile Apps Development',
    description: 'Mengembangkan aplikasi Android dan iOS yang modern dan user-friendly.',
    icon: 'Smartphone',
    category: 'development',
    subServices: [
      'Mobile App Design',
      'Android Development',
      'Cross Platform App',
      'API Integration',
      'Maintenance & Support'
    ]
  },
  {
    id: '3',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Menciptakan pengalaman pengguna yang nyaman dan intuitif.',
    icon: 'Layout',
    category: 'design',
    subServices: [
      'User Research',
      'Wireframe',
      'Prototyping',
      'Design System',
      'User Testing'
    ]
  },
  {
    id: '4',
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'Membantu bisnis berkomunikasi secara visual dengan materi yang berkesan.',
    icon: 'Palette',
    category: 'design',
    subServices: [
      'Poster',
      'Banner',
      'Brosur',
      'Feed Instagram',
      'Company Profile',
      'Packaging Design'
    ]
  },
  {
    id: '5',
    slug: 'social-media-design',
    title: 'Social Media Design',
    description: 'Membangun citra dan konsistensi brand di media sosial.',
    icon: 'Share2',
    category: 'design',
    subServices: [
      'Konten Instagram',
      'Facebook Content',
      'TikTok Visual Assets',
      'Story Design',
      'Campaign Design'
    ]
  },
  {
    id: '6',
    slug: 'logo-branding-design',
    title: 'Logo & Branding Design',
    description: 'Membangun identitas visual yang kuat dan mudah dikenali.',
    icon: 'Tag',
    category: 'design',
    subServices: [
      'Logo Design',
      'Brand Identity',
      'Brand Guidelines',
      'Rebranding',
      'Visual System'
    ]
  }
];
