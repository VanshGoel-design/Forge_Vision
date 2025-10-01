
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Cuboid, Brush } from 'lucide-react';
import { HtmlIcon } from '@/components/icons/html-icon';
import { CssIcon } from '@/components/icons/css-icon';
import { JsIcon } from '@/components/icons/js-icon';
import { ReactIcon } from '@/components/icons/react-icon';
import { GsapIcon } from '@/components/icons/gsap-icon';
import { SplineIcon } from '@/components/icons/spline-icon';

const skills = [
  { name: 'HTML5', icon: HtmlIcon },
  { name: 'CSS3', icon: CssIcon },
  { name: 'JavaScript', icon: JsIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'GSAP', icon: GsapIcon },
  { name: 'Spline', icon: SplineIcon },
];

const services = [
  { name: 'Web Design', icon: Brush, description: 'Crafting visually stunning and intuitive interfaces.' },
  { name: '3D Experiences', icon: Cuboid, description: 'Building immersive and interactive 3D web worlds.' },
  { name: 'Modern UI/UX', icon: Code, description: 'Focused on user-centric design and seamless experiences.' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        onEnter: () => {
          gsap.fromTo(
            avatarsRef.current?.children!,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)' }
          );
          gsap.fromTo(
            skillsRef.current?.children!,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top 80%',
              },
            }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col items-center">
            <div ref={avatarsRef} className="flex space-x-[-40px] mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent relative shadow-[0_0_30px_hsl(var(--primary)_/_0.7)]" />
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-pink-500 relative mt-8 shadow-[0_0_30px_hsl(var(--accent)_/_0.7)]" />
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-primary relative shadow-[0_0_30px_hsl(var(--primary)_/_0.7)]" />
            </div>
            <p className="text-center max-w-md font-light text-foreground/80">
              We are a trio of passionate developers dedicated to pushing the boundaries of web experiences.
            </p>
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Creative Minds, <span className="text-primary text-glow">Powerful Code</span>
            </h2>
            <div className="space-y-6 mb-12">
              {services.map((service, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{service.name}</h3>
                    <p className="text-foreground/70 font-light">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-6">Our Toolkit</h3>
            <div ref={skillsRef} className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-lg card-glow transition-transform duration-300 hover:-translate-y-2"
                  title={skill.name}
                >
                  <skill.icon className="h-10 w-10 text-foreground/90" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
