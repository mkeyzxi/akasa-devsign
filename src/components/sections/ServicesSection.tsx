'use client'

import {motion} from 'framer-motion'
import {SectionHeading} from '@/components/ui/SectionHeading'
import {Card} from '@/components/ui/Card'
import {Badge} from '@/components/ui/Badge'
import {Button} from '@/components/ui/Button'
import {services} from '@/data/services'
import {Check} from 'lucide-react'
export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[var(--bg-page)] relative">
      <div className="container-custom">
        <SectionHeading
          eyebrow="LAYANAN KAMI"
          title={
            <>
              Apa yang Bisa Kami <br className="hidden md:block" /> Bantu untuk Anda?
            </>
          }
          description="Dari ide hingga produk digital yang berdampak. Kami menyediakan solusi end-to-end untuk kebutuhan bisnis Anda."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {services.map((service, i) => {
            return (
              <motion.div
                key={service.id}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-50px'}}
                transition={{duration: 0.5, delay: i * 0.1}}
              >
                <div className="h-full group">
                  <Card className=" flex flex-col hover:border-brand-primary/20 ">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 overflow-hidden group-hover:overflow-visible">
                        <img
                          loading="lazy"
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full object-center transition-transform  group-hover:relative duration-300 group-hover:scale-110 group-hover:-rotate-12 group-hover:!z-10"
                        />
                      </div>
                      <Badge
                        variant={service.category === 'development' ? 'brand' : 'amber'}
                        className="capitalize"
                      >
                        {service.category}
                      </Badge>
                    </div>

                    <h3 className="text-[var(--text-h3)] font-bold text-text-primary mb-3">
                      {service.title}
                    </h3>

                    <p className="text-[var(--text-body-sm)] text-text-muted mb-6 flex-1">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mt-auto pt-6 border-t border-[var(--border-default)]">
                      {service.subServices.slice(0, 4).map((sub, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                          <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                      {service.subServices.length > 4 && (
                        <li className="text-xs text-text-muted italic pt-1 pl-6">
                          + {service.subServices.length - 4} layanan lainnya...
                        </li>
                      )}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.3}}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            variant="gradient"
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) window.scrollTo({top: el.offsetTop - 80, behavior: 'smooth'})
            }}
          >
            Konsultasi Gratis &rarr;
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
