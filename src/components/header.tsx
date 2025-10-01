"use client";

import Link from 'next/link';
import { Code, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Code className="w-8 h-8 text-primary group-hover:animate-pulse" />
          <span className="text-xl font-bold tracking-tighter text-glow">NeonEdge</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-light text-foreground/80 hover:text-primary transition-colors hover:text-glow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background/80 backdrop-blur-xl border-l-primary/20 w-full h-full p-0 flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-b-primary/10">
                 <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                    <Code className="w-8 h-8 text-primary" />
                    <span className="text-xl font-bold tracking-tighter text-glow">NeonEdge</span>
                </Link>
                <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-6 w-6 text-primary" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 gap-12">
                {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                        <Link
                            href={link.href}
                            className="text-4xl font-bold text-foreground hover:text-primary transition-colors hover:text-glow"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
