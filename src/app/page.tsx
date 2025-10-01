"use client";

import { useState } from 'react';
import Preloader from '@/components/preloader';
import Header from '@/components/header';
import Hero from '@/app/sections/hero';
import About from '@/app/sections/about';
import Projects from '@/app/sections/projects';
import Contact from '@/app/sections/contact';
import Footer from '@/components/footer';
import FloatingParticles from '@/components/floating-particles';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Preloader onLoaded={() => setIsLoaded(true)} />
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <FloatingParticles />
      </div>
    </>
  );
}
