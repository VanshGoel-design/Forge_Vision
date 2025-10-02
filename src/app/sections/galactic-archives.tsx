"use client";

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HtmlIcon } from '@/components/icons/html-icon';
import { CssIcon } from '@/components/icons/css-icon';
import { JsIcon } from '@/components/icons/js-icon';
import { ReactIcon } from '@/components/icons/react-icon';
import { SplineIcon } from '@/components/icons/spline-icon';
import { GsapIcon } from '@/components/icons/gsap-icon';
import ProjectDetail from '@/components/project-detail';
import Starfield from '@/components/starfield';

const projectsData = [
  {
    title: 'Abstract Tech',
    description: 'A cutting-edge platform for visualizing complex data. This project leverages the power of modern web technologies to create stunning and interactive data visualizations that help users understand complex datasets at a glance. Built with performance and aesthetics in mind.',
    image: PlaceHolderImages.find((img) => img.id === 'project-1'),
    tags: ['React', 'GSAP', 'Spline'],
    icons: [<ReactIcon className="w-8 h-8" />, <GsapIcon className="w-8 h-8" />, <SplineIcon className="w-8 h-8" />],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Futuristic Code',
    description: 'An interactive coding environment for learning new languages. It provides a real-time, collaborative space for developers to write, test, and share code. The platform supports multiple languages and features a sleek, futuristic interface to inspire creativity and learning.',
    image: PlaceHolderImages.find((img) => img.id === 'project-2'),
    tags: ['HTML', 'CSS', 'JavaScript'],
    icons: [<HtmlIcon className="w-8 h-8" />, <CssIcon className="w-8 h-8" />, <JsIcon className="w-8 h-8" />],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Data Visualization',
    description: 'A powerful tool for creating beautiful and informative charts and graphs. Users can upload their data and choose from a wide variety of chart types to generate stunning visualizations. The tool is designed to be intuitive and easy to use, even for non-technical users.',
    image: PlaceHolderImages.find((img) => img.id === 'project-3'),
    tags: ['React', 'D3.js', 'Firebase'],
    icons: [<ReactIcon className="w-8 h-8" />],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Neon Grid',
    description: 'A retro-futuristic game built with web technologies. Neon Grid combines classic arcade gameplay with modern graphics and effects. Players navigate a glowing grid, avoiding obstacles and collecting power-ups in a race against the clock. The game features a synthwave soundtrack and a distinct neon aesthetic.',
    image: PlaceHolderImages.find((img) => img.id === 'project-4'),
    tags: ['HTML', 'CSS', 'JavaScript'],
    icons: [<HtmlIcon className="w-8 h-8" />, <CssIcon className="w-8 h-8" />, <JsIcon className="w-8 h-8" />],
    liveUrl: '#',
    githubUrl: '#'
  },
];

type Project = typeof projectsData[0];

export default function GalacticArchives() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return;

      if (e.key === 'ArrowDown') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
      } else if (e.key === 'ArrowUp') {
        setActiveIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
      } else if (e.key === 'Enter') {
        setSelectedProject(projectsData[activeIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, selectedProject]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative min-h-screen bg-black text-green-400 font-pixel py-24 overflow-hidden">
      <Starfield />
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl border-2 border-green-400/50 bg-black/50 p-4 md:p-8 shadow-[0_0_20px_theme(colors.green.400/50)] rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl text-white animate-pulse">// MISSION ARCHIVES //</h2>
            <p className="text-sm md:text-base text-green-400/70 mt-2">Use Arrow Keys and Enter to Navigate</p>
          </div>

          <div className="w-full">
            <ul className="flex flex-col gap-2">
              {projectsData.map((project, index) => (
                <li
                  key={project.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleProjectSelect(project)}
                  className={`flex items-center gap-4 p-3 border-2 border-transparent transition-all duration-200 cursor-pointer ${
                    activeIndex === index ? 'bg-green-400/10 border-green-400' : ''
                  }`}
                >
                  <span
                    className={`text-2xl transition-opacity duration-200 ${
                      activeIndex === index ? 'opacity-100 animate-pulse' : 'opacity-0'
                    }`}
                  >
                    ▶
                  </span>
                  <span className="text-lg md:text-2xl text-white">{project.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={handleCloseDetail}
        />
      )}
    </section>
  );
}