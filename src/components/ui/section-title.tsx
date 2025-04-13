
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  className 
}) => {
  return (
    <div className={cn(
      'mb-10',
      center && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1 w-20 bg-chess-primary mt-4',
        center && 'mx-auto'
      )} />
    </div>
  );
};

export default SectionTitle;
