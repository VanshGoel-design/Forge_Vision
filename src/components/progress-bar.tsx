"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, ...props }, ref) => {
    const progress = Math.max(0, Math.min(100, value || 0));
    
    return (
      <div
        ref={ref}
        className={cn(
          "h-2 w-full bg-gray-700 border-2 border-white",
          className
        )}
        {...props}
      >
        <div
          className="h-full bg-yellow-400 transition-all duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
);
ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
