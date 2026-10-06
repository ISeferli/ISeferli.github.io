import type { ImageAsset } from '../types';
import { asset } from '../utils';

export interface Social {
  kind: 'linkedin' | 'github' | 'email' | 'link';
  label: string;
  url: string;
}

export const about = {
  name: 'Iliodora Seferli',
  role: 'Gameplay Programmer',
  logo: null as ImageAsset | null,
  headline: '',
  intro:
    'Gameplay programmer working mostly in Unity and C#. Here you’ll find all my work, from personal ideas to try out things to game jam projects.',

  aboutTitle: 'About me',
  bio: [
    'I’m a passionate software developer with a strong interest in both web and game development. I enjoy exploring new technologies and applying them to solve real-world challenges.',
    'Currently, I’m working on small-scale projects and following courses on various game engines to better understand the mechanics, physics, and design principles behind different game genres.',
    'This helps me become familiar with how games work under the hood and improve my overall development skills. I’m always looking for ways to grow as a developer, and discovering a new project to work on is something I truly enjoy. I hope you like the games I’ve created so far, and feel free to leave any feedback or comments on my itch.io page.'
  ],
  portrait: { src: asset('images/portrait.jpg'), alt: 'Portrait of me' } as ImageAsset,

  // Shown under your name on the home page and on the About page
  socials: [
    { kind: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/iliodora-seferli-926ab8187/' },
    { kind: 'github', label: 'GitHub', url: 'https://github.com/ISeferli' },
    { kind: 'email', label: 'Email', url: 'mailto:iliodorasef@gmail.com' },
  ] as Social[],

  skills: [
    { title: 'Engines', items: ['Unity', 'Unreal (Basics)'] },
    { title: 'Languages', items: ['C#', 'C++', 'TypeScript', 'Java', 'C', 'Python'] },
    { title: 'Specialties', items: ['Gameplay systems', 'Enemy AI', 'Tools'] },
    { title: 'Workflow', items: ['Git', 'Jira', 'Trello'] },
  ],

  experience: [
    {
      when: '2026',
      title: 'Develop at Ubisoft',
      description: 'Selected as a mentee to work on a game development project spanning four months.',
    },
    {
      when: '2024 – now',
      title: 'Software Engineer, Sofmedica Ventures',
      description: 'Full-time role focused on test automation and quality across a production codebase.',
    },
    {
      when: '2017 – 2024',
      title: 'M.Sc., Electrical and Computer Engineering, TUC',
      description: 'Thesis on Interactive Story Generation via Content Filtering, using C# for the Graphics and Python for AI.',
    },
  ],
};
