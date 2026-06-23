'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { techStack } from '@/data/techStack';
import Image from 'next/image';

export function TechStackSection() {
  // Flat list for marquee
  const allTech = React.useMemo(() => techStack.flatMap(c => c.items), []);
  const row1 = allTech.slice(0, Math.ceil(allTech.length / 2));
  const row2 = allTech.slice(Math.ceil(allTech.length / 2));

  return (
    <section id="tech-stack" className="section-padding bg-[#0C0C0C] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeading 
          eyebrow="TEKNOLOGI"
          title={<span className="text-white">Teknologi yang <br className="hidden md:block"/> Kami Kuasai.</span>}
          description="Kami menggunakan stack teknologi modern dan teruji untuk memastikan produk Anda cepat, aman, dan mudah diskalakan."
          className="[&_.eyebrow]:text-brand-orange [&_p]:text-white/60"
        />

        <div className="mt-12 space-y-8 relative before:absolute before:inset-y-0 before:left-0 before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-[#0C0C0C] before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-[#0C0C0C] after:to-transparent after:z-10">
          
          {/* Row 1 - Scroll Left */}
          <div className="flex overflow-hidden group">
            <div className="flex items-center gap-4 min-w-max pr-4 animate-marquee group-hover:[animation-play-state:paused]">
              {[...row1, ...row1, ...row1].map((tech, i) => (
                <div 
                  key={`${tech.name}-${i}`}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-brand-orange/40 hover:bg-brand-orange/10 transition-colors group cursor-default"
                >
                  <div className="w-5 h-5 relative opacity-70 group-hover:opacity-100 transition-opacity">
                    <Image src={tech.logo} alt={tech.name} fill unoptimized className="object-contain filter brightness-0 invert group-hover:filter-none" />
                  </div>
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="flex overflow-hidden group">
            <div className="flex items-center gap-4 min-w-max pr-4 animate-marquee-reverse group-hover:[animation-play-state:paused]">
              {[...row2, ...row2, ...row2].map((tech, i) => (
                <div 
                  key={`${tech.name}-${i}`}
                  className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-brand-orange/40 hover:bg-brand-orange/10 transition-colors group cursor-default"
                >
                  <div className="w-5 h-5 relative opacity-70 group-hover:opacity-100 transition-opacity">
                    <Image src={tech.logo} alt={tech.name} fill unoptimized className="object-contain filter brightness-0 invert group-hover:filter-none" />
                  </div>
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {techStack.map(cat => (
            <span key={cat.category} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60 tracking-wider uppercase">
              {cat.category}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
