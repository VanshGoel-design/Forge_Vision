"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Chapter from '@/components/chapter';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PixelButton from '@/components/pixel-button';

gsap.registerPlugin(ScrollTrigger);

const storyData = [
  {
    character: 'Vansh',
    title: 'Chapter 1: The Designer',
    story: "Vansh's journey began with a love for stories and a pencil. He found his canvas in the digital world, weaving tales not with words, but with HTML and CSS. Every line of code was a brushstroke, every stylesheet a color palette, crafting experiences that were not just seen, but felt.",
    image: PlaceHolderImages.find((img) => img.id === 'chapter-1'),
  },
  {
    character: 'Yash',
    title: 'Chapter 2: The Alchemist',
    story: "Yash was a seeker of logic in a world of chaos. He discovered JavaScript and with it, the power to breathe life into static pages. He saw code as a puzzle, a series of logical spells that could conjure motion, interaction, and delight, turning websites into living things.",
    image: PlaceHolderImages.find((img) => img.id === 'chapter-2'),
  },
  {
    character: 'Sidharth',
    title: 'Chapter 3: The Architect',
    story: "Sidharth was a builder at heart. He wasn't content with just a facade; he needed to build the entire castle. He bridged the worlds of frontend and backend, erecting digital fortresses that were as robust in their foundations as they were beautiful in their design, delivering real-world value.",
    image: PlaceHolderImages.find((img) => img.id === 'chapter-3'),
  },
];

export default function Storybook() {
  const component = useRef(null);
  const chapters = useRef<(HTMLDivElement | null)[]>([]);

  const handleContinue = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalChapters = chapters.current.length;
      chapters.current.forEach((chapter, index) => {
        if (!chapter) return;

        gsap.set(chapter, {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transformOrigin: 'left center',
          visibility: 'hidden',
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: component.current,
            start: `top+=${index * 100}%`,
            end: `top+=${(index + 1) * 100}%`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
        
        tl.fromTo(chapter, {
            visibility: 'hidden',
            rotationY: -90,
            scale: 1.1,
        },
        {
            visibility: 'visible',
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.inOut',
        })
        .to(chapter, {
            rotationY: 90,
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.inOut',
            delay: 1, // Hold the page for a moment
        }, '+=1');
      });

    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="relative h-[300vh] w-full bg-[#1a1a1a]">
      {storyData.map((data, index) => (
        <div key={index} ref={(el) => (chapters.current[index] = el)} className="w-full h-screen">
          <Chapter
            character={data.character}
            title={data.title}
            story={data.story}
            image={data.image}
          />
        </div>
      ))}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <PixelButton onClick={handleContinue}>Continue to Projects</PixelButton>
        </div>
    </section>
  );
}
