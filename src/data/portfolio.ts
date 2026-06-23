import { PortfolioItem } from '../types';

export const portfolio: PortfolioItem[] = [
  {
    id: '1',
    slug: 'e-commerce-furniture',
    title: 'Katalog Furnitur Minimalis',
    client: 'Mebel Lokal',
    category: 'web',
    description: 'Platform e-commerce dengan sistem manajemen inventori yang terintegrasi.',
    thumbnail: '/logo.jpeg',
    tags: ['Next.js', 'Tailwind CSS', 'Shopify'],
    year: 2025,
    featured: true
  },
  {
    id: '2',
    slug: 'fintech-mobile-app',
    title: 'Aplikasi Keuangan Pribadi',
    client: 'Fintech Startup',
    category: 'mobile',
    description: 'Aplikasi pencatatan keuangan yang modern dan intuitif dengan visualisasi data.',
    thumbnail: '/logo.jpeg',
    tags: ['Flutter', 'Firebase', 'UI/UX'],
    year: 2025,
    featured: true
  },
  {
    id: '3',
    slug: 'brand-identity-coffee',
    title: 'Rebranding Kedai Kopi',
    client: 'Kopi Senja',
    category: 'branding',
    description: 'Penyegaran identitas visual untuk kedai kopi artisan di pusat kota.',
    thumbnail: '/logo.jpeg',
    tags: ['Logo Design', 'Packaging', 'Social Media'],
    year: 2024,
    featured: true
  },
  {
    id: '4',
    slug: 'dashboard-analytics',
    title: 'Dashboard Analitik Bisnis',
    client: 'Enterprise Corp',
    category: 'uiux',
    description: 'Desain sistem dashboard internal untuk memantau performa penjualan secara realtime.',
    thumbnail: '/logo.jpeg',
    tags: ['Figma', 'Design System', 'React'],
    year: 2024,
    featured: false
  },
  {
    id: '5',
    slug: 'social-media-campaign',
    title: 'Kampanye Ramadhan',
    client: 'Fashion Brand',
    category: 'social',
    description: 'Strategi dan eksekusi visual untuk kampanye media sosial selama bulan Ramadhan.',
    thumbnail: '/logo.jpeg',
    tags: ['Instagram', 'Content Creation', 'Illustration'],
    year: 2025,
    featured: false
  },
  {
    id: '6',
    slug: 'company-profile-agency',
    title: 'Website Profil Agensi',
    client: 'Creative Studio',
    category: 'web',
    description: 'Website profil perusahaan yang dinamis dengan animasi scroll dan portofolio interaktif.',
    thumbnail: '/logo.jpeg',
    tags: ['React', 'Framer Motion', 'GSAP'],
    year: 2024,
    featured: true
  }
];
