import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { COLORS, StarSeparator } from "@/constants";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.id === slug);
  const navigate = useNavigate();
  const [readme, setReadme] = useState("Loading…");
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;

    fetch(project.readmeUrl)
      .then(res => res.text())
      .then(setReadme)
      .catch(() => setReadme("README not available."));
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <section className="pt-40 pb-24" style={{ backgroundColor: COLORS.primary }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <Link
            to="/projects"
            className="text-[#B5A8D5] text-sm font-bold tracking-widest hover:text-white transition-colors mb-8 inline-block normal-case"
        >
            ← Back to Projects
        </Link>

        <div className="bg-[#B5A8D5] rounded-3xl w-full max-w-7xl h-full overflow-y-auto shadow-2xl relative flex flex-col px-10 py-4">
          <div className="bg-[#B5A8D5] backdrop-blur-sm border-b rounded-2xl border-[#211C84] px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="bg-[#211C84] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">{project.reason}</span>
            </div>
          </div>
          {/* Title Section */}
          <div className="p-6 md:p-12">
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-4 flex justify-center">{project.title}</h1>
            <StarSeparator />
              <p className="text-xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
                {project.description}
              </p>
          </div>      

          {/* Layout Grid */}      
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left: Main Visuals & Development Log */}
            <div className="lg:col-span-8 space-y-12">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#211C84]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
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
                  {project.devDescription}
                </div>
                <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Features</h2>
                </div>
                <div className="space-y-3 mb-6">
                  {project.featuresTitle.map((title, index) => (
                    <p key={index} className="text-lg leading-relaxed text-slate-800">
                      <span className="font-bold">{title}:</span>{' '}
                      {project.features[index]}
                    </p>
                  ))}
                </div>
                {/* {readmeContent?.trim() && (
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
                )} */}
              </div>
            </div>

            {/* Right: Metadata & Tech Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#211C84] text-white rounded-3xl p-10 sticky top-24">
                <h4 className="text-[#B5A8D5] font-bold uppercase tracking-widest text-sm mb-6">Project Metadata</h4>
                <div className="space-y-6">
                  <div>
                    <span className="block text-[#B5A8D5] text-xs uppercase mb-1">Category</span>
                    <p className="text-lg font-bold mb-2">{project.category}</p>
                    <div>
                      <span className="block text-[#B5A8D5] text-xs uppercase mb-1">Project Type</span>
                      <p className="text-lg font-bold mb-2">{project.group}</p>
                    </div>
                    <div>
                      <span className="block text-[#B5A8D5] text-xs uppercase mb-1">Tech Stack</span>
                      <div className="flex flex-wrap gap-2 mt-2 mb-2">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-[#211C84] text-[#B5A8D5] border border-[#B5A8D5]/30 rounded-lg text-xs font-bold uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="block text-[#B5A8D5] text-xs uppercase mb-1 mt-1">Project Roles</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.roles.map(t => (
                          <span key={t} className="px-3 py-1 bg-[#211C84] text-[#B5A8D5] border border-[#B5A8D5]/30 rounded-lg text-xs font-bold uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-slate-800">
                      <a
                        href={project.gameUrl}
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
              </div>
              <div className="bg-[#7A73D1]/10 border-2 border-dashed border-[#211C84]/30 rounded-3xl p-8 text-center">
                <p className="text-[#211C84] font-bold text-sm uppercase">Curious about the code?</p>
                <p className="text-slate-600 text-sm mt-2">Contact me for a walkthrough of the repository and architecture.</p>
              </div>
            </div>
          </div>

          {/* Screenshots Grid */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Gameplay Visuals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((ss, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-lg border border-[#211C84] group" onClick={() => setModalImg(ss)}>
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
      </div>

      {/* Image Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setModalImg(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImg(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-[#211C84] text-white rounded-full flex items-center justify-center font-bold text-lg hover:bg-[#B5A8D5] transition-colors z-10 shadow-lg"
            >
              ✕
            </button>
            <img
              src={modalImg}
              alt="Expanded view"
              className="w-full h-auto rounded-2xl shadow-2xl border border-[#B5A8D5]/30"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectPage;
