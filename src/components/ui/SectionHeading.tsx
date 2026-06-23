import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionHeadingProps extends Omit<HTMLMotionProps<"div">, 'title'> {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'flex flex-col mb-12 lg:mb-16',
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left',
        className
      )}
      {...props}
    >
      <span className="eyebrow mb-3">{eyebrow}</span>
      <h2 className="text-[var(--text-h2)] md:text-[var(--text-h1)] font-bold leading-[1.15] tracking-tight mb-4 text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--text-body-lg)] text-text-secondary max-w-[560px]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
