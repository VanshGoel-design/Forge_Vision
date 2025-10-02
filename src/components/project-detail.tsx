"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import PixelButton from './pixel-button';
import { Badge } from './ui/badge';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type Project = {
  title: string;
  description: string;
  image?: ImagePlaceholder;
  tags: string[];
  icons: React.ReactNode[];
  liveUrl: string;
  githubUrl: string;
};

type ProjectDetailProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.inOut' }
    );
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'power2.out', delay: 0.1 }
    );
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: onClose,
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 font-pixel"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="relative w-11/12 max-w-5xl max-h-[90vh] bg-black border-4 border-green-400/50 shadow-[0_0_30px_theme(colors.green.400/60)] p-8 rounded-lg text-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-green-400 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Image & Buttons */}
          <div className="flex flex-col gap-4">
            {project.image && (
              <div className="w-full aspect-video border-2 border-green-400/50 rounded-md overflow-hidden">
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
            )}
            <div className="flex flex-col md:flex-row gap-4">
              <PixelButton
                variant="primary"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="w-full"
              >
                View Live Site
              </PixelButton>
              <PixelButton
                variant="secondary"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="w-full"
              >
                Browse GitHub
              </PixelButton>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col">
            <h2 className="text-4xl text-green-400 mb-4">{project.title}</h2>
            <p className="font-sans text-base text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mb-6">
              <h3 className="text-2xl text-green-400 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-4 items-center">
                {project.icons.map((icon, i) => (
                  <div key={i} className="text-green-400">{icon}</div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-green-400 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="bg-green-900 text-green-300 border-green-700 font-sans">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}