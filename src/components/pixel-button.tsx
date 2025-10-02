"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'font-pixel text-lg text-white bg-gray-800 border-4 border-double border-white px-6 py-3',
          'hover:bg-yellow-400 hover:text-black hover:border-black transition-colors duration-200',
          'focus:outline-none focus:ring-4 focus:ring-yellow-300',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PixelButton.displayName = 'PixelButton';

export default PixelButton;
