'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card'; // Will create this next
import { Lightbulb, Trophy, Users, Zap, Target } from 'lucide-react';
import Image from 'next/image';

const values = [
  { icon: Lightbulb, title: 'Creativity', desc: 'Solusi out-of-the-box' },
  { icon: Trophy, title: 'Professionalism', desc: 'Kualitas standar enterprise' },
  { icon: Users, title: 'Collaboration', desc: 'Komunikasi yang transparan' },
  { icon: Zap, title: 'Innovation', desc: 'Teknologi modern' },
  { icon: Target, title: 'Impact', desc: 'Fokus pada hasil bisnis' },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--bg-section-alt)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SectionHeading 
              eyebrow="TENTANG KAMI"
              title={<>Ruang Tanpa Batas untuk <span className="text-brand-primary">Karya Luar Biasa.</span></>}
              description="Kata 'Akasa' terinspirasi dari 'Akasha' — sebuah ruang tanpa batas tempat lahirnya kemungkinan baru. Kami adalah tim desainer dan developer yang percaya bahwa estetika visual dan performa teknologi tidak harus saling mengorbankan."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {values.slice(0, 4).map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-surface-muted)] border border-[var(--border-default)] hover:border-brand-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                    <val.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text-primary">{val.title}</h4>
                    <p className="text-xs text-text-muted mt-1">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-[var(--shadow-lg)] border border-[var(--border-default)]">
              <Image 
                src="/logo.jpeg"
                alt="Tim Akasa Devsign"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 text-white text-xs font-bold uppercase tracking-wider mb-2">
                  <Target className="w-3 h-3" /> Our Mission
                </div>
                <p className="text-white font-medium md:text-lg max-w-[400px] leading-snug shadow-sm">
                  "Menjadi agensi digital terpercaya yang menjembatani bisnis lokal menuju standar global."
                </p>
              </div>
            </div>
            
            {/* Decorative shape */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 bg-brand-orange/10 rounded-3xl blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
