'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { portfolio } from '@/data/portfolio';
import Image from 'next/image';

const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'branding', label: 'Branding' },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredPortfolio = React.useMemo(() => {
    if (activeCategory === 'all') return portfolio;
    return portfolio.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="section-padding bg-[var(--bg-section-alt)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <SectionHeading 
            eyebrow="PORTFOLIO"
            title={<>Karya Terbaik <span className="text-brand-primary">Kami.</span></>}
            className="mb-0 lg:mb-0"
          />
          
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-transparent text-text-secondary hover:bg-black/5 dark:hover:bg-white/5 border border-transparent hover:border-[var(--border-default)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-[#F0EDE8] dark:bg-[#1A1A1A]">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-black">
                      Lihat Detail &rarr;
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 relative bg-[var(--bg-surface)]">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="neutral">{item.client}</Badge>
                    <span className="text-xs text-text-muted font-medium">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-1 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPortfolio.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <p>Belum ada proyek di kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
