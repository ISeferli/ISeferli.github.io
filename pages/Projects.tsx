import React, { useState } from 'react';
import { COLORS, StarSeparator } from '@/constants';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const PROJECT_GROUPS = ['All', 'Personal', 'Game Jam'];

const Projects: React.FC = () => {
    const [activeGroup, setActiveGroup] = useState<string>('All');

    const personalProjects = projects.filter(p =>
        p.group?.toLowerCase().includes('solo') ||
        p.group?.toLowerCase().includes('personal')
    );

    const gameJamProjects = projects.filter(p =>
        p.group?.toLowerCase().includes('jam') ||
        p.group?.toLowerCase().includes('group')
    );

    const showPersonal = activeGroup === 'All' || activeGroup === 'Personal';
    const showGameJam = activeGroup === 'All' || activeGroup === 'Game Jam';

    return (
        <section className="min-h-screen pt-40 pb-24" style={{ backgroundColor: COLORS.primary }}>
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight flex justify-center">
                        All Projects
                    </h1>
                    <StarSeparator light/>
                    <p className="text-[#B5A8D5] text-lg font-light max-w-xl mt-4">
                        A full collection of games and tools I've built.
                    </p>
                </div>

                {/* Group Filter Tabs */}
                <div className="flex gap-2 mb-8 bg-[#211C84]/30 p-1.5 rounded-2xl w-fit">
                    {PROJECT_GROUPS.map(group => (
                        <button
                            key={group}
                            onClick={() => setActiveGroup(group)}
                            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-200
                                ${activeGroup === group
                                    ? 'bg-[#211C84] text-white shadow-lg'
                                    : 'text-[#B5A8D5] hover:text-white'
                                }`}
                        >
                            {group}
                        </button>
                    ))}
                </div>

                {/* Personal Projects Section */}
                {showPersonal && personalProjects.length > 0 && (
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-2 h-10 bg-[#B5A8D5] rounded-full" />
                            <div>
                                <p className="text-[#B5A8D5] text-xs uppercase tracking-widest font-bold mb-0.5">Solo Work</p>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Personal Projects</h2>
                            </div>
                            <span className="ml-auto text-[#B5A8D5]/50 text-sm font-bold uppercase tracking-widest">
                                {personalProjects.length} project{personalProjects.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                        <div className="h-px bg-[#B5A8D5]/20 mb-10" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {personalProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} accent="#B5A8D5" />
                            ))}
                        </div>
                    </div>
                )}

                {/* Game Jam Section */}
                {showGameJam && gameJamProjects.length > 0 && (
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-2 h-10 bg-[#B5A8D5] rounded-full" />
                            <div>
                                <p className="text-[#B5A8D5] text-xs uppercase tracking-widest font-bold mb-0.5">Collaborative Work</p>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Game Jams</h2>
                            </div>
                            <span className="ml-auto text-[#B5A8D5]/50 text-sm font-bold uppercase tracking-widest">
                                {gameJamProjects.length} project{gameJamProjects.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                        <div className="h-px bg-[#7A73D1]/20 mb-10" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {gameJamProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} accent="#7A73D1" />
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty state */}
                {personalProjects.length === 0 && gameJamProjects.length === 0 && (
                    <div className="text-center py-24 text-[#B5A8D5]/50 text-lg">
                        No projects found.
                    </div>
                )}
            </div>
        </section>
    );
};

/* ─── Reusable Card ─── */
interface ProjectCardProps {
    project: any;
    index: number;
    accent?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, accent = '#B5A8D5' }) => (
    <Link
        to={`/projects/${project.id}`}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#7A73D1] aspect-[4/3] block"
    >
        <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#211C84]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center p-6">
            <svg className="w-12 h-12 mb-3 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-xs uppercase tracking-widest mt-2" style={{ color: accent }}>
                {project.category}
            </p>
            <span
                className="mt-4 px-4 py-1 border rounded-full text-xs uppercase tracking-widest"
                style={{ borderColor: `${accent}80`, color: accent }}
            >
                {project.group}
            </span>
        </div>

        {/* Always-visible reason badge */}
        <div className="absolute bottom-3 left-3">
            <span className="bg-[#211C84] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                {project.reason}
            </span>
        </div>
    </Link>
);

export default Projects;