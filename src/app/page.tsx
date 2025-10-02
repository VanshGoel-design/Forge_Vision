"use client";

import Header from '@/components/header';
import Hero from '@/app/sections/hero';
import Storybook from '@/app/sections/storybook';
import GalacticArchives from '@/app/sections/galactic-archives';
import Contact from '@/app/sections/contact';

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <main>
        <Storybook />
        <GalacticArchives />
        <Contact />
      </main>
    </>
  );
}
