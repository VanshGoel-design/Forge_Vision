"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom-=100px',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Code className="w-8 h-8 text-primary group-hover:animate-pulse" />
            <span className="text-xl font-bold tracking-tighter">NeonEdge</span>
          </Link>
          <div className="flex gap-6 text-foreground/70">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex gap-6">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="w-6 h-6 text-foreground/70 hover:text-primary transition-colors hover:scale-110" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-foreground/70 hover:text-primary transition-colors hover:scale-110" />
            </Link>
          </div>
        </div>
        <div className="text-center text-foreground/50 mt-8 pt-8 border-t border-border">
          &copy; {new Date().getFullYear()} NeonEdge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
