"use client";

import Header from '@/components/header';
import Hero from '@/app/sections/hero';
import Projects from '@/app/sections/projects';
import Contact from '@/app/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
