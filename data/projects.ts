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
  {
    id: '4',
    title: 'Starting Dreams',
    category: 'Puzzle, Atmospheric',
    description: 'Game that was created in 7 days for the theme Strange Places, Brackeys Game Jam 2026.1.',
    imageUrl: '/sdreamslogo.png',
    tech: ['Unity', 'C#'],
    screenshots: [
        '/sdreams/bRQNGy.png',
        '/sdreams/oqzAWB.png'
      ],
    reason: 'Game Jam',
    readmeUrl: '/readmes/sdreams.md',
    gameUrl: 'https://iseferli.itch.io/starting-dreams',
    group: 'Group Project',
    roles: [
      'Programming & Game Systems',
      'Game Design'
    ],
    devDescription: 'Starting Dream is created in 7 days for the Brackeys Game Jam 2026.1. All assets throughout gameplay, except Audio, are created by the talented Panagiotis Mastakas. This is a first collaboration together from knowing each other for so long, and it has a special position in heart. It is an environmental puzzle experience about how everyday life shapes our emotions and thoughts. The main focus was making an atmospheric game.',
    features: [
      'Pick up, carry, and place items to find solutions and progress through the game.',
      'Store and manage collected objects to use them when needed during puzzle sequences',
      'Explore immersive environments designed to create reflective moments through visual storytelling',
      'Carefully crafted lighting and ambience for each scene to have a different visual effect',
      'Fully original handcrafted 3D models and environmental assets created specifically for the game'
    ],
    featuresTitle: [
        'Object Interaction System',
        'Inventory System',
        'Atmospheric Exploration',
        'Environmental Design',
        'Original 3D Assets'
    ]
  },
  {
    id: '5',
    title: 'Glyph Input Dialogue',
    category: 'System',
    description: 'Project in Unity (C#) that implements a dialogue box system that handles a dynamic input glyph rendering.',
    imageUrl: '/glyphlogo.png',
    tech: ['Unity', 'C#'],
    screenshots: [
      '/glyph/glyph1.png',
      '/glyph/glyph2.png',
      '/glyph/glyph3.png',
    ],
    reason: 'Project Study Case',
    readmeUrl: '',
    gameUrl: 'https://github.com/ISeferli/Glyph_Input_Dialogue',
    group: 'Solo Project',
    roles: [
      'Programming & Game Systems',
    ],
    devDescription: 'This project implements a simple dialogue interaction system used in narrative-driven games. The main goal is to make dynamically changes in the dialogue text when the input system changes from Controller to Keyboard. The system is built around a structure where dialogue data is stored in ScriptableObjects and processed through a manager that communicates with the UI.',
    features: [
      'Created an interactive dialogue box with custom fonts and UI elements for better visuals.',
      'Created a manager of the progression of the dialogue entries that connects the dialogue coming from Scriptable Objects data to the UI',
      'Each dialogue entry appears on screen with a typewriting effect. The speed variables are handled in Inspector to avoid hardcoding inputs',
      'Implemented a system where when glyph icons are detected that need to be added, it automatically displays the icon attributed to that specific name',
      'Detecing the current input device, using Unity’s new Input System.'
    ],
    featuresTitle: [
      'Dialogue UI',
      'Dialogue System',
      'Typewriter Effect',
      'Inline Input Glyph',
      'Input System',
    ]
  },
  // {
  //   id: '6',
  //   title: 'Axe Rush',
  //   category: 'Puzzle',
  //   description: '',
  //   imageUrl: '',
  //   tech: ['C++'],
  //   screenshots: [
  //   ],
  //   reason: 'Project Study Case',
  //   readmeUrl: '',
  //   gameUrl: '',
  //   group: 'Solo Project',
  //   roles: [
  //     'Programming & Game Systems',
  //   ],
  //   devDescription: '',
  //   features: [
  //   ],
  //   featuresTitle: [
  //   ]
  // },
  // {
  //   id: '7',
  //   title: 'Fighting Hues',
  //   category: 'Rogue-Like',
  //   description: '',
  //   imageUrl: '',
  //   tech: ['Unity', 'C#'],
  //   screenshots: [
  //   ],
  //   reason: 'Ubisoft Mentorship',
  //   readmeUrl: '',
  //   gameUrl: '',
  //   group: 'Solo Project',
  //   roles: [
  //     'Programming & Game Systems',
  //     'Game Design'
  //   ],
  //   devDescription: '',
  //   features: [
  //   ],
  //   featuresTitle: [
  //   ]
  // },
  // {
  //   id: '8',
  //   title: 'Rage Havoc',
  //   category: 'VR',
  //   description: '',
  //   imageUrl: '',
  //   tech: ['Unity', 'C#', 'VR'],
  //   screenshots: [
  //   ],
  //   reason: 'Project Study Case',
  //   readmeUrl: '',
  //   gameUrl: '',
  //   group: 'Solo Project',
  //   roles: [
  //     'Programming & Game Systems',
  //   ],
  //   devDescription: '',
  //   features: [
  //   ],
  //   featuresTitle: [
  //   ]
  // },
  // {
  //   id: '9',
  //   title: 'Split Screen',
  //   category: 'Adventure, Split Screen',
  //   description: '',
  //   imageUrl: '',
  //   tech: ['Unity', 'C#'],
  //   screenshots: [
  //   ],
  //   reason: 'Project Study Case',
  //   readmeUrl: '',
  //   gameUrl: '',
  //   group: 'Solo Project',
  //   roles: [
  //     'Programming & Game Systems',
  //   ],
  //   devDescription: '',
  //   features: [
  //   ],
  //   featuresTitle: [
  //   ]
  // },
];