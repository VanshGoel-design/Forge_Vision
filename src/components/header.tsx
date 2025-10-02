"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };
  
    useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Scroll handler for background transition
    const scrollHandler = () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-background/80', 'backdrop-blur-xl', 'shadow-md');
      } else {
        header.classList.remove('bg-background/80', 'backdrop-blur-xl', 'shadow-md');
      }
    };
    window.addEventListener('scroll', scrollHandler);

    // GSAP animation to hide header on storybook scroll
    const storybookSection = document.querySelector('#storybook');
    if (storybookSection) {
      ScrollTrigger.create({
        trigger: storybookSection,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => gsap.to(header, { y: '-100%', opacity: 0, duration: 0.5, ease: 'power2.inOut' }),
        onLeaveBack: () => gsap.to(header, { y: '0%', opacity: 1, duration: 0.5, ease: 'power2.inOut' }),
        onEnterBack: () => gsap.to(header, { y: '-100%', opacity: 0, duration: 0.5, ease: 'power2.inOut' }),
        onLeave: () => gsap.to(header, { y: '0%', opacity: 1, duration: 0.5, ease: 'power2.inOut' }),
      });
    }

    return () => {
        window.removeEventListener('scroll', scrollHandler);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-semibold tracking-tight">Forge Vision</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background/80 backdrop-blur-xl border-l-border w-full h-full p-0 flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-b-border">
                 <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-xl font-semibold tracking-tight">Forge Vision</span>
                </Link>
                <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-6 w-6 text-foreground" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 gap-12">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-3xl font-medium text-foreground hover:text-primary transition-colors"
                        onClick={(e) => handleLinkClick(e, link.href)}
                    >
                        {link.label}
                    </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
