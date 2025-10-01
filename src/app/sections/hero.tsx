"use client";

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Phone } from 'lucide-react';
import { gsap } from 'gsap';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    if (isSplineLoaded && containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.gsap-reveal'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }
  }, [isSplineLoaded]);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-background" />}>
          <Spline
            scene="https://prod.spline.design/m-gZgKzCj2G3mG70/scene.splinecode"
            onLoad={() => setIsSplineLoaded(true)}
            className="!w-full !h-full"
          />
        </Suspense>
      </div>
      <div
        ref={containerRef}
        className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start text-left px-4"
      >
        <h1 className="gsap-reveal text-4xl md:text-6xl lg:text-7xl font-bold max-w-2xl text-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          We Are{' '}
          <span className="text-primary text-glow">Sidharth, Vansh & Yash</span> – Web
          Developers
        </h1>
        <p className="gsap-reveal text-lg md:text-xl max-w-xl mt-6 font-light text-foreground/80">
          Building immersive 3D websites that convert.
        </p>
        <div className="gsap-reveal mt-10">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.7)] transition-shadow duration-300 transform hover:scale-105"
              >
                Contact Us
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] card-glow">
              <DialogHeader>
                <DialogTitle className="text-primary text-glow">Contact Information</DialogTitle>
                <DialogDescription>
                  Reach out to us directly.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center p-4 rounded-lg bg-secondary/50">
                <Phone className="w-6 h-6 mr-4 text-primary" />
                <span className="text-2xl font-bold font-code tracking-wider text-foreground">
                  +91 9686545890
                </span>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
