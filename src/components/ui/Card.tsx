import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cn('card transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg', className)} {...props}>
      {children}
    </div>
  );
}
