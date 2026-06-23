'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { team } from '@/data/team';
import Image from 'next/image';

export function TeamSection() {
  return (
    <section id="team" className="section-padding bg-[var(--bg-section-alt)]">
      <div className="container-custom">
        <SectionHeading 
          eyebrow="TIM KAMI"
          title="Di Balik Layar Akasa."
          description="Berkenalan dengan para pemikir kreatif dan problem solver yang siap mewujudkan ide Anda."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="aspect-[4/5] relative overflow-hidden bg-[var(--bg-surface-muted)]">
                  <Image 
                    src={member.avatar} 
                    alt={member.name} 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Social links overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 hover:bg-brand-primary flex items-center justify-center text-white transition-colors backdrop-blur-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 hover:bg-brand-primary flex items-center justify-center text-white transition-colors backdrop-blur-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                    )}
                    {member.social.behance && (
                      <a href={member.social.behance} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 hover:bg-brand-primary flex items-center justify-center text-white transition-colors backdrop-blur-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11.5c.34-.14.65-.35.9-.63.26-.28.46-.62.58-.98.1-.33.15-.68.15-1.04 0-1.44-.45-2.52-1.35-3.24C9.38 4.9 8 4.54 6.12 4.54H2v15h4.63c2.05 0 3.56-.42 4.53-1.25.96-.84 1.44-2.07 1.44-3.7 0-.58-.08-1.13-.25-1.65-.16-.5-.4-.95-.7-1.34-.33-.37-.73-.68-1.18-.93a4.2 4.2 0 0 0-.47-.17zM5.5 7.6h1c.42 0 .76.1.98.28.23.18.34.45.34.82 0 .36-.1.62-.3.78-.2.17-.5.26-.92.26H5.5V7.6zm1.38 8.84H5.5v-3h1.4c.54 0 .96.1 1.26.34.3.23.45.58.45 1.05 0 .5-.15.86-.45 1.1-.3.22-.72.33-1.28.33z"/><path d="M18.8 9.5c-1.3-.08-2.55.3-3.54 1.1-.9.76-1.43 1.86-1.52 3.06h8c-.02-.85-.35-1.65-.94-2.28-.58-.62-1.34-1.15-2.52-1.88M19 15.5c.74 0 1.46-.2 2.1-.56l.6 2.3c-.87.42-1.83.66-2.82.68-1.47 0-2.65-.45-3.54-1.36-.88-.9-1.32-2.16-1.32-3.76 0-1.55.43-2.8 1.3-3.74.86-.94 2-1.4 3.42-1.4 1.4 0 2.5.4 3.3 1.24.8.84 1.2 2.06 1.2 3.65v.9h-6c0 .7.25 1.27.75 1.7.5.42 1.1.63 1.8.63"/><path d="M16 5h5v2h-5z"/></svg>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/20 hover:bg-brand-primary flex items-center justify-center text-white transition-colors backdrop-blur-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-5 flex flex-col items-center text-center">
                  <h3 className="font-bold text-lg text-text-primary group-hover:text-brand-primary transition-colors">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-primary mb-2">{member.role}</p>
                  <p className="text-xs text-text-secondary">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
