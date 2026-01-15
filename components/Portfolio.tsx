
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import ReactMarkdown from "react-markdown";
import { StarSeparator, COLORS } from '../constants';
import { projects } from '@/data/projects';

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
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-800 mb-4">PORTFOLIO</h2>
        <StarSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#211C84]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center p-6">
                <svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm uppercase tracking-widest mt-2">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expansive Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-10 bg-slate-900/90 backdrop-blur-md transition-all duration-300 overflow-hidden">
          <div className="bg-[#B5A8D5] rounded-3xl w-full max-w-7xl h-full max-h-[95vh] overflow-y-auto shadow-2xl relative flex flex-col">
            
            {/* Modal Header/Top Bar */}
            <div className="sticky top-0 z-10 bg-[#B5A8D5] backdrop-blur-sm border-b border-[#211C84] px-6 py-4 flex justify-between items-center">
               <div className="flex items-center gap-4">
                  <span className="bg-[#211C84] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">{selectedProject.reason}</span>
                  <h2 className="text-xl font-bold text-slate-800 uppercase hidden sm:block">{selectedProject.title}</h2>
               </div>
               <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-800 transition-all"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-12">
              {/* Title Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-4">{selectedProject.title}</h1>
                <StarSeparator />
                <p className="text-xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Layout Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                
                {/* Left: Main Visuals & Development Log */}
                <div className="lg:col-span-8 space-y-12">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-[#211C84]">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Development Story Section */}
                  <div className="bg-[#7A73D1] rounded-3xl p-8 md:p-12 border border-[#211C84]">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-10 h-10 bg-[#211C84] text-white rounded-lg flex items-center justify-center font-bold">#</div>
                       <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Development Story</h3>
                    </div>
                    <div className="prose prose-invert max-w-none text-lg leading-relaxed mb-6">
                      {selectedProject.devDescription}
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                       <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Features</h2>
                    </div>
                    <div className="space-y-3 mb-6">
                      {selectedProject.featuresTitle.map((title, index) => (
                        <p key={index} className="text-lg leading-relaxed text-slate-800">
                          <span className="font-bold">{title}:</span>{' '}
                          {selectedProject.features[index]}
                        </p>
                      ))}
                    </div>
                    {readmeContent?.trim() && (
                      <>
                        <div className="flex items-center gap-4 mb-2">
                          <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">
                            Credits
                          </h2>
                        </div>

                        <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {readmeContent}
                          </ReactMarkdown>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Screenshots Grid */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Gameplay Visuals</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.screenshots.map((ss, idx) => (
                          <div key={idx} className="rounded-xl overflow-hidden shadow-lg border border-[#211C84] group">
                             <img 
                              src={ss} 
                              alt={`Screenshot ${idx + 1}`} 
                              className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Metadata & Tech Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="bg-[#211C84] text-white rounded-3xl p-8 sticky top-24">
                    <h4 className="text-[#B5A8D5] font-bold uppercase tracking-widest text-sm mb-6">Project Metadata</h4>
                    
                    <div className="space-y-6">
                      <div>
                        <span className="block text-[#B5A8D5] text-xs uppercase mb-1">Category</span>
                        <p className="text-lg font-bold">{selectedProject.category}</p>
                      </div>

                      <div>
                        <span className="block text-[#B5A8D5] text-xs uppercase mb-1">Project Type</span>
                        <p className="text-lg font-bold">{selectedProject.group}</p>
                      </div>
                      
                      <div>
                        <span className="block text-[#B5A8D5] text-xs uppercase mb-1">Tech Stack</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProject.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-[#211C84] text-[#B5A8D5] border border-[#B5A8D5]/30 rounded-lg text-xs font-bold uppercase">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[#B5A8D5] text-xs uppercase mb-1">Project Roles</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProject.roles.map(t => (
                            <span key={t} className="px-3 py-1 bg-[#211C84] text-[#B5A8D5] border border-[#B5A8D5]/30 rounded-lg text-xs font-bold uppercase">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-6 border-t border-slate-800">
                          <a
                            href={selectedProject.gameUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#B5A8D5] hover:bg-[#7A73D1] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm shadow-lg shadow-[#1abc9c]/20"
                          >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Game
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#7A73D1]/10 border-2 border-dashed border-[#211C84]/30 rounded-3xl p-8 text-center">
                    <p className="text-[#211C84] font-bold text-sm uppercase">Curious about the code?</p>
                    <p className="text-slate-600 text-sm mt-2">Contact me for a walkthrough of the repository and architecture.</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="text-center pt-12 border-t border-[#211C84]">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 bg-[#211C84] hover:bg-black text-white font-bold py-4 px-12 rounded-2xl transition-all uppercase tracking-widest"
                >
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
