'use client'

import * as React from 'react'
import {motion} from 'framer-motion'
import {Button} from '@/components/ui/Button'
import {ChevronDown} from 'lucide-react'
import {StatItem} from '@/types'
import Image from 'next/image'

const stats: StatItem[] = [
  {label: 'Proyek Selesai', value: 50, suffix: '+'},
  {label: 'Klien Puas', value: 30, suffix: '+'},
  {label: 'Layanan', value: 6, suffix: ''},
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[var(--bg-page)] transition-colors duration-300"
    >
      {/* Background — static gradient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle, var(--text-primary) 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Static ambient glow */}
        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[80px] bg-gradient-to-br from-brand-primary/15 via-brand-orange/8 to-transparent" />

        {/* Static decorative shape */}
        <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-gradient-to-br from-brand-primary/8 to-transparent rounded-tl-[100px] rounded-br-[100px] border border-[var(--border-default)]" />
      </div>

      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, ease: 'easeOut'}}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-[var(--shadow-sm)] mb-8 relative overflow-hidden group cursor-default"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex h-2.5 w-2.5 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)] z-10">
                Akasa Devsign{' '}
                <span className="text-[var(--text-muted)] font-medium">Creative Agency</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
              className="text-[var(--text-display-lg)] md:text-[var(--text-display-xl)] lg:text-[var(--text-display-2xl)] font-extrabold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6"
            >
              Bridging Visual Aesthetics <br className="hidden md:block" />
              with <span className="text-gradient">Powerful Code.</span>
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.3, ease: 'easeOut'}}
              className="text-[var(--text-body-lg)] md:text-[var(--text-body-xl)] text-[var(--text-secondary)] max-w-xl mb-10 leading-relaxed"
            >
              Menghubungkan keindahan desain dengan kekuatan teknologi untuk menciptakan solusi
              digital yang berdampak nyata bagi bisnis Anda.
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.4, ease: 'easeOut'}}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                size="xl"
                variant="primary"
                className="w-full sm:w-auto"
                onClick={() => {
                  const el = document.getElementById('portfolio')
                  if (el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})
                }}
              >
                Lihat Portfolio
              </Button>
              <Button
                size="xl"
                variant="secondary"
                className="w-full sm:w-auto bg-[var(--bg-surface)] border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-muted)] hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm"
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})
                }}
              >
                Konsultasi Gratis
              </Button>
            </motion.div>
          </div>

          {/* Right: Visual Asset */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1]}}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Geometric / Code Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent rounded-[2rem] border border-[var(--border-default)] bg-[var(--bg-surface-muted)] overflow-hidden flex items-center justify-center shadow-[var(--shadow-card)]">
              <div className="absolute top-10 left-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-2xl" />

              <div className="relative z-10 w-3/4 h-3/4 border border-[var(--border-strong)] rounded-2xl bg-[var(--bg-surface)]/70 backdrop-blur-md p-6 flex flex-col shadow-lg">
                {/* <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="h-4 w-1/3 bg-[var(--border-strong)] rounded" />
                  <div className="h-4 w-3/4 bg-[var(--border-default)] rounded" />
                  <div className="h-4 w-2/3 bg-[var(--border-default)] rounded" />
                  <div className="h-4 w-1/2 bg-[var(--border-default)] rounded" />
                  <div className="h-4 w-4/5 bg-[var(--border-default)] rounded" />
                  <div className="mt-8 h-4 w-1/4 bg-brand-primary/40 rounded" />
                </div>
                 */}

                <Image src="/bg-hero.jpeg" alt="Hero" fill className="object-cover" />
              </div>

              {/* Floating element */}
              <div className="absolute -right-8 top-1/4 w-24 h-24 bg-gradient-to-br from-brand-orange to-brand-primary rounded-2xl rotate-12 shadow-[var(--shadow-brand)] flex items-center justify-center border border-white/20 animate-float">
                <span className="text-white font-bold text-3xl">{'</>'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="animate-bounce-slow">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative z-20 border-y border-[var(--border-default)] bg-[var(--bg-surface)]/70 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-8 sm:py-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-default)]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: i * 0.1}}
                className="flex flex-col items-center px-8 w-full sm:w-auto pt-6 sm:pt-0 first:pt-0"
              >
                <div className="flex items-start">
                  <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-amber">
                    {stat.value}
                  </span>
                  <span className="text-xl font-bold text-brand-primary ml-1">{stat.suffix}</span>
                </div>
                <span className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
