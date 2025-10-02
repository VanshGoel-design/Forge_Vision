"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const pixelButtonVariants = cva(
  'font-pixel text-lg border-4 border-double transition-colors duration-200 focus:outline-none focus:ring-4',
  {
    variants: {
      variant: {
        default: 'text-white bg-gray-800 border-white hover:bg-yellow-400 hover:text-black hover:border-black focus:ring-yellow-300',
        primary: 'text-black bg-green-400 border-green-200 hover:bg-green-300 focus:ring-green-500',
        secondary: 'text-white bg-transparent border-white hover:bg-white hover:text-black focus:ring-gray-300',
      },
      size: {
        default: 'px-6 py-3',
        lg: 'text-xl px-8 py-4',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);


interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof pixelButtonVariants> {
  children: React.ReactNode;
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(pixelButtonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PixelButton.displayName = 'PixelButton';

export default PixelButton;