"use client";

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    // GSAP animations can be re-added here if needed
  }, [isSplineLoaded]);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-background" />}>
          <Spline
            scene="https://prod.spline.design/CTbcW2wvd-u4soLg/scene.splinecode"
            onLoad={() => setIsSplineLoaded(true)}
            className="!w-full !h-full"
          />
        </Suspense>
      </div>
      <div
        ref={containerRef}
        className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4"
      >
        <div className="bg-card/50 backdrop-blur-md p-8 sm:p-12 rounded-lg shadow-lg max-w-lg">
           <h1 className="text-4xl md:text-5xl font-bold">
            Digital Experiences
          </h1>
          <p className="text-lg md:text-xl max-w-xl mt-6 font-light text-foreground/80">
            Crafting unique and immersive web applications.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-shadow duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
