"use client";

import Header from '@/components/header';
import Hero from '@/app/sections/hero';
import Projects from '@/app/sections/projects';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
