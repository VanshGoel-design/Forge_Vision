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
      <div className="container mx-auto h-full grid md:grid-cols-2 items-center">
        <div className="flex flex-col justify-center items-start h-full p-8 md:p-0">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              <span className="text-foreground/20">Crafting Digital</span>{' '}
              <span className="text-primary">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              I build immersive and beautiful web applications using modern technologies.
            </p>
            <Button size="lg" className="group" onClick={handleScrollToProjects}>
              View My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="relative w-full h-full hidden md:flex items-center justify-center">
            <Spline
              scene="https://prod.spline.design/41208gZ5M-oB23tL/scene.splinecode"
            />
        </div>
      </div>
    </section>
  );
}
