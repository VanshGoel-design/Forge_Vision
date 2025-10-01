"use client";

import React, { Suspense, lazy } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

function SplineScene() {
  return (
    <Spline
      scene="https://prod.spline.design/CTbcW2wvd-u4soLg/scene.splinecode"
      className="!w-full !h-full"
    />
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-background animate-pulse" />}>
          <SplineScene />
        </Suspense>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-8 md:p-16 pointer-events-none">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Crafting Digital
            <br />
            <span className="text-primary">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            I build immersive and beautiful web applications using modern technologies.
          </p>
          <Button size="lg" className="group pointer-events-auto">
            View My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
