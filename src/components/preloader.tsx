"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onLoaded }: { onLoaded: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressCircleRef = useRef<SVGCircleElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const circle = progressCircleRef.current;
    if (!circle) return;

    const R = circle.r.baseVal.value;
    const circumference = R * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const counter = { value: 0 };

    gsap.set(titleRef.current, { opacity: 0, y: 20 });
    gsap.set(progressCircleRef.current, { opacity: 0 });
    gsap.set(progressTextRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        if (preloaderRef.current) {
          gsap.to(preloaderRef.current, {
            scale: 1.2,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: () => {
              onLoaded();
              if (preloaderRef.current) preloaderRef.current.style.display = 'none';
            },
          });
        }
      },
    });

    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .to([progressCircleRef.current, progressTextRef.current], { opacity: 1, duration: 0.5 }, '-=0.5')
      .to(circle, {
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power2.inOut',
      })
      .to(
        counter,
        {
          value: 100,
          duration: 3,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (progressTextRef.current) {
              progressTextRef.current.textContent = `${Math.round(counter.value)}%`;
            }
          },
        },
        '<'
      )
      .to([titleRef.current, progressCircleRef.current, progressTextRef.current], {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });

    return () => {
      tl.kill();
    };
  }, [onLoaded]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold text-primary mb-12 tracking-wider text-glow"
      >
        Crafting the Future…
      </h1>
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-primary/10"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            ref={progressCircleRef}
            className="text-primary -rotate-90 origin-center"
            strokeWidth="4"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
        </svg>
        <span
          ref={progressTextRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl font-bold font-code"
        >
          0%
        </span>
      </div>
    </div>
  );
}
