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
        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px]  rounded-full blur-[80px] bg-gradient-to-br from-brand-primary/15 via-brand-orange/8 to-transparent" />

        {/* Static decorative shape */}
        <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-gradient-to-br from-brand-primary/8 to-transparent rounded-tl-[100px] rounded-br-[100px] border border-[var(--border-default)]" />
      </div>

      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
              className="mb-8"
            >
              <div className="flex items-center gap-4">
                <span className="block w-12 h-[3px] rounded-full bg-gradient-to-r from-brand-primary to-brand-amber" />
                <div className="flex items-baseline gap-2.5">
                  <span className="text-lg md:text-xl font-extrabold text-gradient tracking-tight">
                    Akasa Devsign
                  </span>
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)]">
                    Creative Agency
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
              className="text-[clamp(1.5rem,3vw+0.5rem,2.25rem)] md:text-[clamp(1.75rem,3.5vw+0.5rem,2.75rem)] lg:text-[clamp(2rem,4vw+0.5rem,3.25rem)] font-extrabold text-[var(--text-primary)] leading-[1.2] tracking-tight mb-6"
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
            className="relative hidden lg:block h-[550px] w-full"
          >
            {/* Ambient glow behind the card */}
            <div className="absolute -inset-4 z-0 ">
              <div className="absolute top-8 left-8 w-40 h-40 bg-brand-orange/25 rounded-full blur-[60px]" />
              <div className="absolute bottom-12 right-8 w-48 h-48 bg-brand-primary/20 rounded-full blur-[70px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-amber/15 rounded-full blur-[50px]" />
            </div>

            {/* Main image card */}
            <div className="absolute inset-0 z-10 rounded-[2rem] rounded-tl-[6rem] rounded-br-[6rem] overflow-hidden border border-[var(--border-strong)] shadow-[var(--shadow-card)]">
              {/* Gradient border overlay */}
              <div
                className="absolute inset-0 z-20 rounded-[2rem] pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(210,36,24,0.15) 0%, transparent 40%, transparent 60%, rgba(237,138,56,0.12) 100%)',
                }}
              />

              {/* The hero image */}
              <Image
                src="/bg-hero.jpeg"
                alt="Akasa Devsign — Creative Digital Agency"
                fill
                priority
                className="object-cover object-top"
                quality={90}
              />

              {/* Soft brand overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

              {/* Bottom info bar on image */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 ">
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[var(--border-default)] shadow-lg">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-orange flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20">
                      A
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20">
                      D
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-amber to-brand-primary flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/20">
                      S
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--text-primary)] truncate">
                      Akasa Devsign Team
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">Design • Develop • Deploy</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card — top-right */}
            <motion.div
              initial={{opacity: 0, y: 20, rotate: 6}}
              animate={{opacity: 1, y: 0, rotate: 6}}
              transition={{duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1]}}
              className="absolute -right-6 top-8 z-30 px-5 py-4 rounded-2xl bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-strong)] shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-orange flex items-center justify-center shadow-[var(--shadow-brand)]">
                  <span className="text-white font-bold text-sm">{'</>'}</span>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] font-medium">Clean Code</p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">Modern Stack</p>
                </div>
              </div>
            </motion.div>

            {/* Floating accent card — bottom-left */}
            <motion.div
              initial={{opacity: 0, y: 20, rotate: -3}}
              animate={{opacity: 1, y: 0, rotate: -3}}
              transition={{duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1]}}
              className="absolute -left-4 bottom-20 z-30 px-5 py-4 rounded-2xl bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-strong)] shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-amber to-brand-orange flex items-center justify-center">
                  <span className="text-white text-lg">★</span>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] font-medium">Completed</p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">50+ Projects</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative rotating ring */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 z-0 opacity-20 animate-[spin_20s_linear_infinite]">
              <div className="w-full h-full rounded-full border-2 border-dashed border-brand-primary/50" />
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
