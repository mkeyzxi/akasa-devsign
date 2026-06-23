import { TechCategory } from '../types';

export const techStack: TechCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', logo: '/logo.jpeg', color: '#61DAFB' },
      { name: 'Next.js', logo: '/logo.jpeg', color: '#000000' },
      { name: 'Vue.js', logo: '/logo.jpeg', color: '#4FC08D' },
      { name: 'Tailwind CSS', logo: '/logo.jpeg', color: '#06B6D4' },
      { name: 'TypeScript', logo: '/logo.jpeg', color: '#3178C6' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', logo: '/logo.jpeg', color: '#339933' },
      { name: 'Express', logo: '/logo.jpeg', color: '#000000' },
      { name: 'Laravel', logo: '/logo.jpeg', color: '#FF2D20' },
      { name: 'Python', logo: '/logo.jpeg', color: '#3776AB' }
    ]
  },
  {
    category: 'Mobile',
    items: [
      { name: 'Flutter', logo: '/logo.jpeg', color: '#02569B' },
      { name: 'React Native', logo: '/logo.jpeg', color: '#61DAFB' },
      { name: 'Kotlin', logo: '/logo.jpeg', color: '#7F52FF' }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', logo: '/logo.jpeg', color: '#4169E1' },
      { name: 'MySQL', logo: '/logo.jpeg', color: '#4479A1' },
      { name: 'MongoDB', logo: '/logo.jpeg', color: '#47A248' },
      { name: 'Firebase', logo: '/logo.jpeg', color: '#FFCA28' }
    ]
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', logo: '/logo.jpeg', color: '#F24E1E' },
      { name: 'Adobe XD', logo: '/logo.jpeg', color: '#FF61F6' },
      { name: 'Illustrator', logo: '/logo.jpeg', color: '#FF9A00' },
      { name: 'Photoshop', logo: '/logo.jpeg', color: '#31A8FF' }
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Vercel', logo: '/logo.jpeg', color: '#000000' },
      { name: 'Docker', logo: '/logo.jpeg', color: '#2496ED' },
      { name: 'GitHub Actions', logo: '/logo.jpeg', color: '#2088FF' },
      { name: 'Nginx', logo: '/logo.jpeg', color: '#009639' }
    ]
  }
];
