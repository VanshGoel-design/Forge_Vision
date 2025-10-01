"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Define the type for the Spline Viewer element to satisfy TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
        'events-target': string;
      };
    }
  }
}

export default function Hero() {
  const splineViewerRef = useRef<HTMLElement>(null);
  
  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    const splineViewer = splineViewerRef.current;

    const handleLoad = () => {
      // This function runs when the Spline scene is loaded
      if (splineViewer && (splineViewer as any).shadowRoot) {
        const shadowRoot = (splineViewer as any).shadowRoot;
        const logo = shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove();
        }
      }
    };
    
    // Fallback interval to ensure the logo is removed
    const interval = setInterval(() => {
      if (splineViewer && (splineViewer as any).shadowRoot) {
        const shadowRoot = (splineViewer as any).shadowRoot;
        const logo = shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove();
          clearInterval(interval);
        }
      }
    }, 100);

    if (splineViewer) {
      splineViewer.addEventListener('load', handleLoad);
    }

    return () => {
      if (splineViewer) {
        splineViewer.removeEventListener('load', handleLoad);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] bg-background">
      <div className="absolute inset-0 z-0">
        <spline-viewer
          ref={splineViewerRef}
          url="https://prod.spline.design/CTbcW2wvd-u4soLg/scene.splinecode"
          events-target="global"
        />
      </div>
      <div className="relative z-10 container mx-auto h-full flex items-center pointer-events-none">
        <div className="flex flex-col justify-center items-start h-full p-8 md:p-0">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              <span className="text-primary">Crafting Digital</span>{' '}
              <span className="text-foreground/80">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              I build immersive and beautiful web applications using modern technologies.
            </p>
            <Button size="lg" className="group pointer-events-auto" onClick={handleScrollToProjects}>
              View My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
       <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '63px',
          backgroundImage: 'url(/gradient-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 10
        }}></div>
    </section>
  );
}
