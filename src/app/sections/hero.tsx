"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/41208gZ5M-oB23tL/scene.splinecode"
          className="!w-full !h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-8 md:p-16 pointer-events-none text-white">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Crafting Digital{' '}
            <span className="text-primary">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            I build immersive and beautiful web applications using modern technologies.
          </p>
          <Button size="lg" className="group pointer-events-auto" onClick={handleScrollToProjects}>
            View My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
