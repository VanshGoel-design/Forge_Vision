"use client";

import Header from '@/components/header';
import Hero from '@/app/sections/hero';
import Storybook from '@/app/sections/storybook';
import GalacticArchives from '@/app/sections/galactic-archives';
import Contact from '@/app/sections/contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Storybook />
        <GalacticArchives />
        <Contact />
      </main>
    </>
  );
}
