"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HtmlIcon } from '@/components/icons/html-icon';
import { CssIcon } from '@/components/icons/css-icon';
import { JsIcon } from '@/components/icons/js-icon';
import { ReactIcon } from '@/components/icons/react-icon';
import { SplineIcon } from '@/components/icons/spline-icon';
import { GsapIcon } from '@/components/icons/gsap-icon';


gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'Abstract Tech',
    description: 'A cutting-edge platform for visualizing complex data.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    tags: ['React', 'GSAP', 'Spline'],
    icons: [<ReactIcon className="w-6 h-6" />, <GsapIcon className="w-6 h-6" />, <SplineIcon className="w-6 h-6" />]
  },
  {
    title: 'Futuristic Code',
    description: 'An interactive coding environment for learning new languages.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    tags: ['HTML', 'CSS', 'JavaScript'],
     icons: [<HtmlIcon className="w-6 h-6" />, <CssIcon className="w-6 h-6" />, <JsIcon className="w-6 h-6" />]
  },
  {
    title: 'Data Visualization',
    description: 'A tool for creating beautiful and informative charts.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    tags: ['React', 'D3.js', 'Firebase'],
     icons: [<ReactIcon className="w-6 h-6" />]
  },
    {
    title: 'Neon Grid',
    description: 'A retro-futuristic game built with web technologies.',
    image: PlaceHolderImages.find((img) => img.id === 'project-4'),
    tags: ['HTML', 'CSS', 'JavaScript'],
     icons: [<HtmlIcon className="w-6 h-6" />, <CssIcon className="w-6 h-6" />, <JsIcon className="w-6 h-6" />]
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const projects = projectRefs.current;

    if (section) {
      gsap.fromTo(
        projects,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom bottom',
            toggleActions: 'play none none none',
          },
        }
      );
    }
     return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="opacity-0"
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {project.image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                      data-ai-hint={project.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                    <div className="flex gap-4 mt-4">
                    {project.icons.map((icon, i) => (
                      <div key={i}>{icon}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
