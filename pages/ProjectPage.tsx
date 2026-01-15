import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { projects } from "../data/projects";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [readme, setReadme] = useState("Loading…");

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
    <section className="min-h-screen bg-[#B5A8D5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-[#211C84] font-bold uppercase tracking-widest"
        >
          ← Back to portfolio
        </button>

        {/* Title */}
        <h1 className="text-5xl font-black text-slate-800 mb-4">
          {project.title}
        </h1>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden border border-[#211C84] shadow-xl mb-12">
          <img src={project.imageUrl} alt={project.title} />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="prose max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {readme}
              </ReactMarkdown>
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots?.map((ss, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-[#211C84]"
                >
                  <img src={ss} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 bg-[#211C84] text-white rounded-3xl p-8">
            <p className="uppercase text-sm tracking-widest mb-2">Tech</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 border rounded-lg text-xs">
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
