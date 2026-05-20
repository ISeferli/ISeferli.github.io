
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import ReactMarkdown from "react-markdown";
import { StarSeparator, COLORS } from '../constants';
import { projects } from '@/data/projects';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [readmeContent, setReadmeContent] = useState<string>('');

  useEffect(() => {
    if (!selectedProject) return;

    setReadmeContent('Loading…');

    fetch(selectedProject.readmeUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load README');
        return res.text();
      })
      .then(setReadmeContent)
      .catch(() =>
        setReadmeContent('README not available for this project.')
      );
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 bg-[#B5A8D5]">
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="mb-12">
          <div className="flex items-end justify-between mb-3">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-800">Portfolio</h2>
            <a
              href='/projects'
              className='text-slate-800 font-bold text-sm tracking-widest hover:text-white transition-colors duration-300 pb-1'
            >
              View All →
            </a>
          </div>
          <div
            className="h-0.5 bg-black animate-expand-line"
            style={{ transformOrigin: 'left' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl p-4 bg-[#7A73D1] aspect-[4/3]"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#211C84]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center p-6">
                <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm uppercase tracking-widest mt-2">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
