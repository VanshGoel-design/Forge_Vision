"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Project Alpha',
    description: 'An immersive 3D product configurator for a futuristic vehicle.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    tech: ['React', 'Spline', 'GSAP'],
  },
  {
    title: 'Project Beta',
    description: 'A data visualization platform with complex animations and a sleek UI.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    tech: ['Next.js', 'D3.js', 'Tailwind'],
  },
  {
    title: 'Project Gamma',
    description: 'A portfolio website for a digital artist, focusing on minimalism and motion.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    tech: ['HTML5', 'CSS3', 'GSAP'],
  },
  {
    title: 'Project Delta',
    description: 'An e-commerce store with a unique 3D shopping experience.',
    image: PlaceHolderImages.find((img) => img.id === 'project-4'),
    tech: ['React', 'Three.js', 'Firebase'],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop || !sectionRef.current || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const sections = gsap.utils.toArray<HTMLDivElement>('.project-card');
    
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 2.5),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollContainer.offsetWidth}`,
      },
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 sm:py-32 md:h-screen md:flex md:items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        <div className="md:pl-4 lg:pl-16 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Digital <span className="text-primary text-glow">Creations</span>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-xl">
            A glimpse into the worlds we've built. Swipe or scroll to explore.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>
        </div>

        {/* Desktop Horizontal Scroll */}
        <div ref={scrollContainerRef} className="hidden md:flex flex-nowrap w-[250vw]">
          {projects.map((project, index) => (
            <div key={index} className="w-[50vw] px-4 project-card">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tech }: (typeof projects)[0]) {
  return (
    <Card className="group overflow-hidden card-glow transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.4)] hover:-translate-y-2">
      <CardContent className="p-0">
        <div className="relative h-64 w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={description}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary">{title}</h3>
          <p className="text-foreground/80 mt-2 h-12">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <Badge key={t} variant="secondary" className="font-light">
                {t}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Project <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
