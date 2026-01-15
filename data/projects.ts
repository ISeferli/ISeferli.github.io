import { Project } from "../types";

export const projects: Project[] = [
  {
    id: '1',
    title: 'Green Dragon\'s Inn',
    category: 'Fantasy RPG',
    description: 'Simple RPG created using Unity for a university two month assignment. The game includes basic RPG features such as character creation, attribute assignment, leveling up and equipment management.',
    imageUrl: '/log.png',
    tech: ['C#', 'Unity'],
    screenshots: [
      '/gdi/pic1.png',
      '/gdi/pic2.png',
      '/gdi/pic3.png',
      '/gdi/pic4.png',
    ],
    reason: 'University Project',
    readmeUrl: '/readmes/greendragonsinn.md',
    gameUrl: 'https://github.com/lily-games/Green-Dragon-Inn-exe',
    group: 'Solo Project',
    roles: [
      'Programmer',
    ],
    devDescription: 'This is a simple RPG created using Unity C# for a university two month assignment. The game includes basic RPG features such as character creation, attribute assignment, leveling up and equipment management. After graduating, the game got slightly updated in terms of the graphical interface, solved some issues with animation and made a new character. The project has remained simple as I want to remember how my first Unity project was created without any more shader and post processing effects.',
    features: [
      'Customize your character with unique attributes.',
      'Distribute points in Strength, Dexterity, Constitution, Intelligence, and Wisdom. Each attribute affects gameplay.',
      'Each character gains experience during a fight and after a specific amount, they can level up.',
      'Equip weapons and items to enhance abilities.',
      'Each monster leaves randomized loot when defeated.',
      'Each game level has a different quest, which assigns experience points at completion.',
    ],
    featuresTitle: [
        'Character Creation',
        'Attribute System',
        'Leveling Up System',
        'Equipment',
        'Loot',
        'Quest System',
    ]
  },
  {
    id: '2',
    title: 'Undead Rush',
    category: 'Shooter, First-Person',
    description: 'A small first-person shooter made in Unity (C#) as a portfolio project. Your objective is to survive waves of zombies and beat your previous high score.',
    imageUrl: '/undeadlogo.png',
    tech: ['Unity', 'C#'],
    screenshots: [
      '/undead/pic1.png',
      '/undead/pic2.png',
    ],
    reason: 'Project Study Case',
    readmeUrl: '/readmes/undeadrush.md',
    gameUrl: 'https://iseferli.itch.io/undead-rush',
    group: 'Solo Project',
    roles: [
      'Programmer',
    ],
    devDescription: 'Undead Rush is a small Unity C# game created as a portfolio project to showcase gameplay programming, animation handling, and graphics implementation. You play as a first-person character navigating an abandoned area filled with zombies. Your goal is simple: survive as long as possible and achieve a higher score than your previous run by eliminating incoming enemies.',
    features: [
      'Custom movement, camera look, and shooting logic.',
      'Zombies navigate the map and chase the player.',
      'Tracks and updates the highest score.',
      'Weapon animations and Unity Animator Controller.',
      'Enhanced visuals using Unity’s Post-Processing Stack.',
    ],
    featuresTitle: [
        'First-Person Controller',
        'Enemy AI',
        'Scoring System',
        'Animations',
        'Post Processing',
    ]
  },
  {
    id: '3',
    title: 'HR Crisis at the North Pole',
    category: 'Visual Novel',
    description: 'Game that was created in 30 days for the Winter VN Game Jam 2025.',
    imageUrl: '/hrcrisislogol.png',
    tech: ['Unity', 'C#', 'Ink'],
    screenshots: [
        '/hrc/pic1.png',
      ],
    reason: 'Game Jam',
    readmeUrl: '/readmes/hrcrisis.md',
    gameUrl: 'https://iulik-67.itch.io/hrcrisisnorthpole',
    group: 'Group Project',
    roles: [
      'Programming & Game Systems',
    ],
    devDescription: 'HR Crisis at the North Pole is created in 30 days for the Winter VN Game Jam 2025. All characters and story are original creations. Themes include workplace culture, holiday pressure, and what happens when magical creatures need HR intervention.',
    features: [
      'Original story written using the Ink scripting language that contains branching narrative.',
      'Custom-built dialogue system integrated with Ink which supports dialogue lines, player choices and story variable tracking.',
      'Original character artwork and background illustrations.',
      'Point-and-click puzzle elements embedded into the narrative.',
      'Save and load functionality for story progression.',
      'Transition effects between scenes'
    ],
    featuresTitle: [
        'Narrative & Writing',
        'Custom Dialogue System',
        'Visual Artwork',
        'Gameplay Mechanics',
        'Save & Load System',
        'Scene Transitions',
    ]
  },
];