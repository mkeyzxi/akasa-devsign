'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-[var(--bg-page)] relative overflow-hidden">
      <div className="container-custom">
        <SectionHeading 
          eyebrow="TESTIMONI"
          title="Apa Kata Mereka?"
          align="center"
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button 
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-sm flex items-center justify-center text-text-secondary hover:text-brand-primary hover:border-brand-primary/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button 
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-sm flex items-center justify-center text-text-secondary hover:text-brand-primary hover:border-brand-primary/30 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative h-[380px] sm:h-[300px] md:h-[280px] w-full overflow-hidden px-4 md:px-0">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 w-full flex items-center justify-center"
              >
                <div className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-8 md:p-10 shadow-[var(--shadow-card)] max-w-3xl w-full mx-auto relative">
                  <span className="absolute top-6 left-6 text-brand-primary/10 font-serif text-[120px] leading-none select-none">"</span>
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < currentTestimonial.rating ? 'fill-brand-amber text-brand-amber' : 'text-gray-300 dark:text-gray-600'}`} />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-text-primary font-medium leading-relaxed mb-8">
                      {currentTestimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      {currentTestimonial.avatar && (
                        <div className="w-12 h-12 rounded-full overflow-hidden relative border border-[var(--border-default)] shrink-0">
                          <Image src={currentTestimonial.avatar} alt={currentTestimonial.name} fill unoptimized className="object-cover" sizes="48px" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-text-primary">{currentTestimonial.name}</h4>
                        <p className="text-sm text-text-muted">{currentTestimonial.role}, {currentTestimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-brand-primary w-6' : 'bg-brand-primary/20 hover:bg-brand-primary/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
