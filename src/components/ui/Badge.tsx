import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        brand:
          'bg-brand-primary/10 text-brand-primary border border-brand-primary/20',
        neutral:
          'bg-black/5 text-[#555] border border-black/10 dark:bg-white/10 dark:text-gray-300 dark:border-white/20',
        amber:
          'bg-brand-amber/10 text-[#C06D00] border border-brand-amber/20 dark:text-brand-amber',
      },
    },
    defaultVariants: {
      variant: 'brand',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
