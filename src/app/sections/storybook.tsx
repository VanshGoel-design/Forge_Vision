"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Chapter from '@/components/chapter';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PixelButton from '@/components/pixel-button';
import ProgressBar from '@/components/progress-bar';

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
  const [progress, setProgress] = useState(0);

  const handleContinue = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: 'top top',
          end: '+=300%', // Each chapter gets 100% of viewport height
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setProgress(self.progress * 100);
          }
        },
      });

      chapters.current.forEach((chapter, index) => {
        if (!chapter) return;
        
        // Initial state
        gsap.set(chapter, { 
            position: 'absolute', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            autoAlpha: 0 // Use autoAlpha for performance (opacity + visibility)
        });

        // Fade in
        tl.to(chapter, { autoAlpha: 1, duration: 0.5 }, index);
        
        // Keep visible for its duration
        tl.to(chapter, { duration: 1 });

        // Fade out, unless it's the last chapter
        if (index < chapters.current.length - 1) {
            tl.to(chapter, { autoAlpha: 0, duration: 0.5 });
        }
      });

    }, component);
    
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="storybook" ref={component} className="relative h-screen w-full bg-[#1a1a1a]">
        <div className="absolute top-0 left-0 w-full h-full">
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
        </div>
        
        {/* Final screen with button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0"
             style={{ opacity: progress > 99 ? 1 : 0, transition: 'opacity 0.5s' }}>
            <div className="text-center text-white">
                <h2 className="text-4xl font-pixel mb-8">To Be Continued...</h2>
                <PixelButton onClick={handleContinue}>Continue to Projects</PixelButton>
            </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-1/3">
          <ProgressBar value={progress} />
          <div className="flex justify-between w-full text-white font-pixel text-xs mt-2">
            <span>Chapter 1</span>
            <span>Chapter 2</span>
            <span>Chapter 3</span>
          </div>
        </div>
    </section>
  );
}
