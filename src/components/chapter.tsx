"use client";

import Image from 'next/image';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Typewriter from './typewriter';

type ChapterProps = {
  character: string;
  title: string;
  story: string;
  image?: ImagePlaceholder;
};

export default function Chapter({ character, title, story, image }: ChapterProps) {
  return (
    <div className="w-full h-full bg-black flex flex-col md:flex-row items-center justify-center p-8 font-pixel text-white">
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4">
        {image && (
          <Image
            src={image.imageUrl}
            alt={character}
            width={512}
            height={512}
            className="object-contain max-w-full max-h-full pixelated"
            data-ai-hint={image.imageHint}
            style={{ imageRendering: 'pixelated' }}
          />
        )}
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-4 md:p-8">
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-4">{title}</h2>
        <h3 className="text-2xl md:text-4xl text-cyan-400 mb-8">{character}</h3>
        <div className="border-2 border-cyan-400 p-4 rounded-lg bg-black/50">
           <Typewriter text={story} className="text-base md:text-lg leading-relaxed" />
        </div>
      </div>
    </div>
  );
}
