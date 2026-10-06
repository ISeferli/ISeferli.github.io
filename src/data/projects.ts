import type { Project } from '../types';
import { asset } from '../utils';

/**
 * ✏️ Add your projects here. Put images in /public/images/<project-slug>/
 * and reference them with asset('images/<project-slug>/file.jpg').
 * Until an image file exists, a labelled placeholder is shown instead.
 *
 * Story block types:
 *   heading   - a section title (also appears in the "In this story" menu)
 *   paragraph - text, supports **bold** and `code`
 *   image     - layout 'full' (default), 'left' or 'right' (text wraps around it)
 *   gallery   - 2 or 3 images side by side
 *   quote     - a highlighted line, with optional cite
 *   list      - bullet points
 *   video     - a YouTube video by id
 */

const ur = (file: string, game:string) => asset(`images/${game}/${file}`);

export const projects: Project[] = [
  // Green Dragon's Inn: Complete
  {
    slug: 'green-inn',
    title: 'Green Dragon\'s Inn',
    tagline:
      'Simple RPG created using Unity for a two month university assignment.',
    kind: 'personal',
    year: 2023,
    cover: { src: ur('cover2.png', 'gdi'), alt: 'Green Dragon\'s Inn'},
    category: 'Fantasy RPG',
    projectType: 'University project',
    duration: '2 months',
    platforms: ['Windows'],
    techStack: ['Unity', 'C#'],
    roles: ['Game Programmer'],
    links: [
      { label: 'View the code', url: 'https://github.com/ISeferli/Green_Dragons_Inn' },
    ],
    story: [
      {
        type: 'heading',
        text: 'Overview'
      },
      {
        type: 'paragraph',
        text: 'This is a simple RPG built in Unity with C# as a two-month university assignment. The game includes core RPG features such as character creation, attribute assignment, leveling up, and equipment management.'
      },
      {
        type: 'paragraph',
        text: 'After graduating, I revisited the project to polish the user interface, fix some animation issues, and add a new character. I intentionally kept it simple, without extra shaders or post-processing effects, because I want it to remain a reminder of how my first Unity project came together.'
      },
      {
        type: 'heading',
        text: 'What I Would Do Differently'
      },
      {
        type: 'paragraph',
        text: 'The area I know I could improve is the overall design. At the time, I didn\'t understand the importance of a strong game loop and assumed a simple "defeat your enemies" RPG would be enough. As a result, the level design was mostly shaped around meeting the assignment\'s requirements rather than creating a compelling player experience.'
      },
      {
        type: 'heading',
        text: 'Character Creation'
      },
      {
        type: 'image',
        layout: 'right',
        image: {
          src: ur('pic2.png', 'gdi'),
          alt: 'Character selection menu',
          caption: 'Character Selection image at the start of the game.',
        },
      },
      {
        type: 'paragraph',
        text: 'Character creation took a long time and taught me how all the pieces of a game connect, from the UI to the logic behind it. At first, I had far too many functions while trying to figure out how to assign attributes to each character, save the player\'s choices, and let them reset and start over.'
      },
      {
        type: 'paragraph',
        text: 'Once the structure was in place, the hard part was the math. The assignment required each class to have a different number of attribute points to distribute, and keeping everything updated through events every time a button was pressed was chaotic.'
      },
      {
        type: 'heading',
        text: 'Inventory System'
      },
      {
        type: 'image',
        layout: 'left',
        image: {
          src: ur('pic3.png', 'gdi'),
          alt: 'Inventory system UI',
          caption: 'The appearance of the inventory system with the starting gear.',
        },
      },
      {
        type: 'paragraph',
        text: 'The inventory was another challenge, again because of connecting the mechanics to the UI. Setting up the inventory and the `InventoryManager` was fairly straightforward, thanks to some excellent tutorials with solid architecture to follow.'
      },
      {
        type: 'paragraph',
        text: 'The real problem was a bug that duplicated weapons when they were equipped from the inventory. I still remember a friend playtesting the game on his own. After five minutes, he called me over with a big smile and showed me he had ten identical swords in his inventory. I fixed this by clearing the dictionary that stored the inventory data each time it was refreshed, and by refining the item-use event, which had been creating a new instance of the item every time it was used.'
      },
      {
        type: 'heading',
        text: 'Battle Encounters'
      },
      {
        type: 'image',
        layout: 'full',
        image: {
          src: ur('pic4.png', 'gdi'),
          alt: 'Battle Encounter',
          caption: 'Battle Encounter in first scene, fighting two main enemies, spiders.',
        },
      },
      {
        type: 'paragraph',
        text: 'The part I enjoyed most, even though it could still be improved, was the battle system. I split it across separate scripts: `WorldInteraction.cs` handled selecting and moving characters in the world, and control passed to `CombatController.cs` whenever a character came within range of an enemy. All of this was managed by a simple `GameMode` boolean that the enemies toggled.'
      },
      {
        type: 'heading',
        text: 'Enemy AI'
      },
      {
        type: 'paragraph',
        text: 'An RPG also needs a variety of enemies, each with their own move sets and behavior during battle. I built the AI with a simple state machine: enemies always move into range of the player\'s character first and then open with their special attack. I didn\'t go much deeper than that, since I was happy with having distinct attack patterns for each enemy.'
      },
      {
        type: 'heading',
        text: 'Turn-Based Grid Movement'
      },
      {
        type: 'paragraph',
        text: 'Since combat was turn-based, I needed a grid that appeared only during battles. A `GridGenerator` script created the grid, using `Gizmos` to visualize the tiles. When combat started, every enemy and character snapped to the nearest tile.'
      },
      {
        type: 'paragraph',
        text: 'To decide where enemies should move, I wrote a `FindNearestTile` function that used `Vector3.Distance` to sort the tiles by distance and find the one that would put the enemy within range of the player\'s character. It was math I hadn\'t worked with before, but it was exciting to see how everything worked behind the scenes.'
      },
      {
        type: 'gallery',
        images: [
          { src: ur('pic1.png', 'gdi'), alt: 'Main menu' },
          { src: ur('quest.png', 'gdi'), alt: 'Riddle quest during second scene' },
          { src: ur('fight.gif', 'gdi'), alt: 'Showcasing fight animations' },
        ],
      }
    ],
  },

  // Undead Rush: Complete
  {
    slug: 'undead-rush',
    title: 'Undead Rush',
    tagline:
      'A small first-person shooter made in Unity (C#). Survive waves of zombies and beat your previous high score.',
    kind: 'personal',
    year: 2025,
    cover: { src: ur('cover.png', 'undead'), alt: 'Undead Rush' },
    category: 'Shooter, first-person',
    projectType: 'Solo project',
    duration: '4 weeks',
    platforms: ['Windows'],
    techStack: ['Unity', 'C#'],
    roles: ['Programmer'],
    links: [
      { label: 'Play the game', url: 'https://iseferli.itch.io/undead-rush', primary: true },
      // { label: 'View the code', url: '#' },
    ],
    story: [
      {
        type: 'paragraph',
        text: 'Undead Rush is a small Unity C# game created as a portfolio project to showcase gameplay programming, animation handling, and graphics implementation. You play as a first-person character navigating an abandoned area filled with zombies. Your goal is simple: survive as long as possible and achieve a higher score than your previous run by eliminating incoming enemies.',
      },
      { type: 'heading', text: 'Where the idea came from' },
      {
        type: 'paragraph',
        text: 'When I decided it was time to start working on my own projects and get familiar with Unity again, I began searching for tutorials on different game systems. Eventually, I found an excellent course on making an FPS game. It seemed like the right size for a project I could actually finish, while still having enough moving parts to show real systems working together: player movement, shooting, enemy AI, waves, scoring, and UI. That\'s how **Undead Rush** started, first by building the fundamentals from the course, and then by adding my own features on top.'
      },
      {
        type: 'image',
        layout: 'right',
        image: {
          src: ur('models.png', 'undead'),
          alt: 'Early prototype with simple environment',
          caption: 'The first prototype to test all the character\'s features.',
        },
      },
      {
        type: 'paragraph',
        text: 'The first week was spent purely following the course. I built everything from scratch, starting with the first-person controller. The enemies were just capsules, the level was a flat plane, and the only goal was to get the core features working well enough to understand the basic concepts of building a game.'
      },
      {
        type: 'paragraph',
        text: 'The first, and biggest, problem I ran into was animation. Thanks to my degree, I already had a good grip on coding, so I decided to use this project to focus on other parts of Unity. That\'s why I chose to find my own assets from free stores and adapt the animations myself, rather than using the ones provided in the course.',
      },
      {
        type: 'paragraph',
        text: 'The challenge was finding a hands-only model that also matched the art style I had in mind, since my artistic side couldn\'t accept assets that didn\'t fit together. I ended up using a pack that came with a ready-made FPS controller, then separated the model from it so I could connect it to my own controller, since building that controller was what I wanted to learn from the course.'
      },
//https://assetstore.unity.com/packages/templates/systems/low-poly-shooter-pack-free-sample-144839
      { type: 'heading', text: 'Player controller' },
      {
        type: 'paragraph',
        text: 'From there, setting up the character was fairly straightforward. I had to understand how the model moves with the camera and along which axis each one rotates. To stop the camera from rotating a full 360 degrees vertically, I clamped its rotation using a `ClampRotationAroundXAxis` function.'
      },
      {
        type: 'paragraph',
        text: 'I also used a `SphereCast` on every jump to check whether the character was grounded, which prevented double or triple jumps. These were math concepts I had never applied to a real problem before, and seeing them in action immediately made the project click for me.'
      },
      {
        type: 'gallery',
        images: [
          { src: ur('pic1.png', 'undead'), alt: 'Player firing at a zombie', caption: 'Firing at a zombie.' },
          { src: ur('reload.gif', 'undead'), alt: 'Reload animation in first person', caption: 'Reload animation with ammo UI.' },
        ],
      },
      { type: 'heading', text: 'Inventory and UI' },
      {
        type: 'paragraph',
        text: 'Next, I added an `InventoryManager` so the player could pick up health and ammo. By this point, I had a much better understanding of how the UI connects to everything else. Instead of putting all the logic in a single script, I set up events to distribute updates properly, which helped me see how game mechanics can stay connected to the UI while remaining separate from it.'
      },
      { type: 'heading', text: 'Enemies' },
      {
        type: 'paragraph',
        text: 'After that, I moved on to the enemies. The course covered state machines and how events can be used to detect and trigger state changes. We also experimented with ragdoll physics. On top of that, I added colliders to different parts of the enemy\'s body to distinguish between headshots and body shots, so enemies take more damage to kill unless they\'re hit in the head.'
      },
      {
        type: 'image',
        layout: 'left',
        image: {
          src: ur('wave_sphere.png', 'undead'),
          alt: 'Scene view showing the baked NavMesh',
          caption: 'The baked NavMesh the zombies walk on and on of the sphere colliders they spawn.',
        },
      },
      {
        type: 'paragraph',
        text: 'Zombies use a `NavMeshAgent` driven by a small state machine: **idle**, **chase**, **attack** and **dead**. Path updates run on a timer instead of every frame, which kept performance steady with dozens of enemies on screen.',
      },
      { type: 'heading', text: 'Sound and Atmosphere' },
      {
        type: 'paragraph',
        text: 'One big difference from my first project was the use of more detailed sound effects. Now every action had audio feedback, from the enemies\' low growling, which changed when they started chasing you, to hit effects and reloading sounds. Adding fog to the environment and experimenting with rendering and lighting was also a lot of fun.',
      },
      {
        type: 'paragraph',
        text: 'There was a lighting bug I didn\'t understand at the time, since this game only had one scene. It finally made sense during my second game jam, where the project had multiple scenes and I learned that lighting needs to be baked so it stays correct for each specific scene.',
      },
      { type: 'heading', text: 'Adding My Own Game Loop' },
      {
        type: 'image',
        image: {
          src: ur('gameplay.gif', 'undead'),
          alt: 'Foggy forest area at dusk with zombies approaching',
          caption: 'Fog, post-processing and lighting do most of the mood work.',
        },
      },
      {
        type: 'paragraph',
        text: 'Beyond the course content, I wanted the project to feel like an actual game rather than just a tech demo, so I built a simple game loop around a timer. Each enemy you kill adds time to the clock, up to a maximum of one minute, and increases your score.'
      },
      {
        type: 'paragraph',
        text: 'I also added enemy waves that spawn when the player leaves a circular trigger area and isn\'t looking toward its center, so enemies never appear out of thin air in front of the player. The number of enemies keeps increasing, and the game continues until the timer runs out.'
      },
    ],
  },

  // HR Crisis at the North Pole: Complete
  {
    slug: 'hrc',
    title: 'HR Crisis at the North Pole',
    tagline: 'Game that was created in 30 days for the Winter VN Game Jam 2025.',
    kind: 'jam',
    year: 2025,
    cover: { src: asset('images/hrc/cover2.png'), alt: 'HRC Logo art' },
    category: 'Visual Novel',
    projectType: 'Team of 8',
    duration: '30 days',
    platforms: ['HTML5'],
    techStack: ['Unity', 'C#', 'Ink'],
    roles: ['Gameplay Programmer', 'Game Systems'],
    jam: { name: 'Winter Visual Novel Jam 2025', theme: 'Winter'},
    links: [{ label: 'Play on itch.io', url: 'https://iulik-67.itch.io/hrcrisisnorthpole', primary: true }],
    story: [
      {
        type: 'paragraph',
        text: 'HR Crisis at the North Pole is created in 30 days for the Winter VN Game Jam 2025. All characters and story are original creations. Themes include workplace culture, holiday pressure, and what happens when magical creatures need HR intervention.',
      },
      {
        type: 'image',
        image: { src: asset('images/hrc/pic1.png'), alt: 'Interviewing Rain-deer', caption: 'Interviewing one of the reindeers.' },
      },
      { type: 'heading', text: 'Where the idea came from' },
      {
        type: 'paragraph',
        text: 'This was my first team project, and it highlights my experience collaborating with the wonderful people I met during the Develop at Ubisoft mentorship program. Before our mentorship projects began, one of the other mentees told us about a small, relaxed game jam taking place in December. It felt like the perfect way to kick off our journey together.'
      },
      {
        type: 'paragraph',
        text: 'We held long brainstorming meetings before the jam started, and that\'s where the idea of an HR interview puzzle game set at the North Pole was born. By the time the jam officially began, we had already divided our to-do list based on how each of us could contribute.'
      },
      {
        type: 'paragraph',
        text: 'I had discovered the Ink scripting library while experimenting on a previous project, so I suggested we use it for the dialogue. As a result, I took on the role of building the dialogue system and the save system.'
      },
      { type: 'heading', text: 'Understanding Ink' },
      {
        type: 'image',
        image: { src: ur('ink.png', 'hrc'), alt: 'Ink prototype dialogue', caption: 'First sample dialogue that showcases a section'},
        layout: 'right'
      },
      {
        type: 'paragraph',
        text: 'Since our dialogue would be written in Ink, my first step was to read the documentation and learn how scripts are structured. To my surprise, it felt like learning a whole new programming language. It wasn\'t too complicated for the scope of our project, but realizing that I could have variables change throughout the script and have Unity react to those changes through events was amazing.'
      },
      {
        type: 'paragraph',
        text: 'The full dialogue was written later by the team, but I knew the general structure I needed. So I started by writing a test script divided into sections, which Ink calls knots and declares with `=== section_name ===`, and added a simple two-line dialogue to each one. I then used tags like `#speaker` to test how the speaking character could change from line to line.'
      },
      { type: 'heading', text: 'Prototyping the Dialogue System' },
      {
        type: 'paragraph',
        text: 'Once the test script was ready, I immediately started on the C# side to figure out how to pull all of this information into Unity. I began with my favorite placeholder objects: rectangles. Rectangles everywhere! One became the dialogue box, which displayed the speaking character\'s name and their line, and two white rectangles stood in for the characters.'
      },
      {
        type: 'paragraph',
        text: 'To confirm that each line from Ink arrived with the correct #speaker tag, I added a small animation to the white rectangles: whenever a character spoke, their rectangle bobbed up and down slightly. Funnily enough, we kept that animation in the final version. To show transitions between sections, each of which had its own background, I added a scrolling black screen that worked like a loading transition.'
      },
      {
        type: 'image',
        image: { src: ur('prototype.png', 'hrc'), alt: 'Game prototype dialogue', caption: 'First look of the UI structure of the game'},
        layout: 'full'
      },
      { type: 'heading', text: 'Coding Aspect' },
      {
        type: 'paragraph',
        text: 'On the code side, I created a `DialogueManager.cs` that handled every new dialogue entry. It was the only script communicating directly with Ink, and it sent messages to the UI whenever the text needed to change. The manager observed the variables I had created, such as `characterVisible`, tracked which branch of the story the player was in, and checked whether the current point in the story contained choices or regular dialogue, so it could tell the UI what to display.'
      },
      {
        type: 'paragraph',
        text: 'The UI itself was handled by a `VisualManager`, which contained all the functions for updating visuals based on the changes it received. For this to work, the mood and speaker tags had to follow the same naming convention as the art assets, and the assets had to be organized into the correct folders. That way, when a line marked a character as happy, the system could find the right "happy" artwork for any character.'
      },
      {
        type: 'gallery',
        images: 
          [
            {src: ur('mood_code_example.png', 'hrc'), alt: 'Code example mood', caption: 'Setting the mood during dialogue in `SetMood` function'},
            {src: ur('raindeer.png', 'hrc'), alt: 'File structure', caption: 'Name structure of the files depending the character'},
          ]
      },
      { type: 'heading', text: 'Save System' },
      {
        type: 'paragraph',
        text: 'The most difficult part was building a save system for the dialogue. Ink can save the story\'s state, including exactly where the player left off. Keeping the visuals in sync, however, was another matter.'
      },
      {
        type: 'image',
        image: { src: ur('pause.png', 'hrc'), alt: 'Pause menu', caption: 'Pause menu appearance, including the history of the dialogue so far'},
        layout: 'right'
      },
      {
        type: 'paragraph',
        text: 'Lines without a tag, because the same character was still speaking, would show whichever character had appeared last before loading, which was often the wrong one. I didn\'t have time to research whether there was a cleaner way to recover the current speaker from the story history, so I decided to add the speaker tags to every line of dialogue manually.'
      },
      { type: 'heading', text: 'Looking Back' },
      {
        type: 'paragraph',
        text: 'In the end, I was really happy with my first collaboration and proud of building a complete dialogue system from scratch, the kind of system that engines like Ren\'Py provide out of the box.'
      },
      {
        type: 'image',
        image: { src: ur('maincharacter.png', 'hrc'), alt: 'Mood over this game', caption: ''},
        layout: 'full'
      },
    ],
  },

  // Starting Dreams: Complete
  {
    slug: 'sdreams',
    title: 'Starting Dreams',
    tagline: 'Game that was created in 7 days for the theme Strange Places, Brackeys Game Jam 2026.1.',
    kind: 'jam',
    year: 2026,
    cover: { src: asset('images/sdreams/cover.png'), alt: 'Starting Dreams Logo art' },
    category: 'Puzzle, Atmospheric',
    projectType: 'Team of 2',
    duration: '7 days',
    platforms: ['HTML5'],
    techStack: ['Unity', 'C#'],
    roles: ['Gameplay Programmer', 'Game Systems', 'Game Design'],
    jam: { name: 'Brackeys Game Jam 2026.1.', theme: 'Strange Places', result: '#905' },
    links: [{ label: 'Play on itch.io', url: 'https://iseferli.itch.io/starting-dreams', primary: true }],
    story: [
      {
        type: 'paragraph',
        text: 'Starting Dream is created in 7 days for the Brackeys Game Jam 2026.1. All assets throughout gameplay, except Audio, are created by the talented Panagiotis Mastakas. This is a first collaboration together from knowing each other for so long, and it has a special position in heart. It is an environmental puzzle experience about how everyday life shapes our emotions and thoughts. The main focus was making an atmospheric game.',
      },
      {
        type: 'gallery',
        images: [
          { src: asset('images/sdreams/level3.png'), alt: 'Level 3 of game', caption: 'Shot from Level 3 of the game, Red Plane' },
          { src: asset('images/sdreams/level1.png'), alt: 'Level 1 of game', caption: 'Shot from Level 1 of the game, Basement' },
      ],
      },
      {
        type: 'heading',
        text: 'Where the Idea Came From'
      },
      {
        type: 'paragraph',
        text: 'Our story starts four years ago, when Panagiotis told me he wanted to make assets for games and asked if I\'d be interested in building something together. I told him I needed to finish my studies first. And here we are, finally participating in our first game jam together.'
      }, 
      {
        type: 'image',
        image: 
          { src: ur('sketches.jpeg', 'sdreams'), alt: 'Concept sketches', caption: 'Early concept sketches from Panagiotis'},
        layout: 'right'
      },
      {
        type: 'paragraph',
        text: 'Before the jam began, Brackeys shared a list of possible themes, so we sat down and brainstormed ideas for each one. It was so much fun having someone who could sketch out a concept in just a few minutes. When the theme was revealed as **Stranger Places**, our concept was clear: make something atmospheric with simple puzzles, and focus on what players feel as they explore each place.'
      }, 
      {
        type: 'paragraph',
        text: 'Panagiotis created the lore behind everything, with each level representing a different feeling tied to everyday tasks the character might be doing. We built from there, added a pick-up-and-place mechanic for the puzzles to create a simple game loop, and had our first game in a week.'
      },
      {
        type: 'heading',
        text: 'Building the Foundation'
      },
      {
        type: 'paragraph',
        text: 'Since I didn\'t have any assets or a finished scenario yet and I had a week to finish the game, my first task was to build the core systems and make them as expandable as possible, so we could add more as the week went on.'
      },
      {
        type: 'image',
        image: 
          { src: ur('early_movement.gif', 'sdreams'), alt: 'Movement prototype', caption: 'Early prototype of movement, showing the character moving around the blockout'},
      },
      {
        type: 'paragraph',
        text: 'I started with movement. The game was going to be first-person, and I had already built a first-person controller for my FPS prototype, **Undead Rush**. With a few changes, I attached the camera to the parent `Character` object, set up the integrations, and suddenly I had the first object in my game: the player character.'
      },
      {
        type: 'heading',
        text: 'Portals and Scene Transitions'
      },
      {
        type: 'paragraph',
        text: 'Next, with Bad Bunny as my personal hype man, I worked on the overall structure. We planned four scenes, each a different place for the character to explore and solve puzzles in. Every time all the puzzles in a scene were solved, a portal would appear to take the character to the next room.'
      },
      {
        type: 'paragraph',
        text: 'Since the puzzles hadn\'t been written yet, I moved on to the portals. I created a `Portal` script that handles the scene transition through `OnTriggerEnter` when the player enters the portal\'s collider, and exposed a public `isOpen` variable that changes during gameplay once the puzzles are solved.'
      },
      {
        type: 'heading',
        text: 'Items and Inventory'
      },
      {
        type: 'paragraph',
        text: 'Later that same day, I started working on items and the inventory, since picking up items and placing them in specific positions needed to be tracked during gameplay.'
      },
      {
        type: 'paragraph',
        text: 'I made a simple `InventoryManager.cs` that adds and removes items from a list, and an `Item.cs` script to hold each item\'s data, such as its name and description. I also created an `ItemScript` ScriptableObject to define all the possible item variations, with an `ItemDatabase.cs` that identifies which item is which based on its assigned ScriptableObject.'
      },
      {
        type: 'paragraph',
        text: 'I then turned the item script into an interface, since we\'d have more complex item types building on the base object: pickup items, items used for placement, simple interactable items, and so on.'
      },
      {
        type: 'paragraph',
        text: 'To interact with items, I created `PlayerInteraction.cs`, which fires a `Physics.Raycast` that detects items using a `LayerMask`. When an item is detected, its information is displayed, first in the Inspector for testing, and later in the UI. Pressing the **E** key lets the player pick up an item or interact with a placement point, with each item type having its own `Interact` function based on the interface it implements.'
      },
      {
        type: 'paragraph',
        text: 'By the end of the first day, we had movement, basic interaction, and scene transitions in place.'
      },
      {
        type: 'image',
        image: 
          { src: ur('interaction.gif', 'sdreams'), alt: 'Interaction in inspector', caption: 'Screenshot of the interaction during prototype, appearing in the inspector'},
      },
      {
        type: 'heading',
        text: 'The Basement'
      },
      {
        type: 'paragraph',
        text: 'Over the next few days, with the basic game loop in place, I started using the first assets Panagiotis sent me to build the scenes one by one and connect everything together.'
      },
      {
        type: 'paragraph',
        text: 'I began with the simplest scene, both in environment design and puzzles: the basement. The puzzle was straightforward: find the batteries and put them in a remote to turn off the TV. I set up the pickup items and gave each placement point the ID of its correct solution.'
      },
      {
        type: 'paragraph',
        text: 'I created a `LevelManager.cs` to track the puzzles that need to be solved in each scene. Each time a placement point receives its target item, it sends an event to the `AddSolvedPuzzle` function to tell the manager that one of the room\'s puzzles has been solved. I then connected the second-to-last puzzle to open a hidden section of the room that reveals the teleporter, with its door opening once the final puzzle is complete.'
      },
      {
        type: 'gallery',
        images: [
          { src: ur('basement_remote.jpeg', 'sdreams'), alt: 'Remote in basement', caption: 'Interacting with the remote to solve on puzzle in the Basement scene.'},
          { src: ur('door_opening.gif', 'sdreams'), alt: 'Door opening', caption: 'Solving one puzzle making the door open and the teleporter to appear'},
        ]
      },
      {
        type: 'heading',
        text: 'Designing Open Environments',
      },
      {
        type: 'paragraph',
        text: 'Everything ran smoothly until it was time to build the next two scenes, which were larger, more open areas, and suddenly my environment design skills were overwhelmed. Even though I knew which puzzles to include and how they should look, I struggled to make the environments look good and feel atmospheric.'
      },
      {
        type: 'paragraph',
        text: 'Each of these scenes took more than a day, which left only two days for playtesting, since I kept adjusting things until I was happy with the environment.'
      },
      {
        type: 'image',
        image: 
          { src: ur('town_scene.jpeg', 'sdreams'), alt: 'Town picture', caption: 'Screenshot of the final version of the open town in second scene.'},
      },
      {
        type: 'heading',
        text: 'The Painting Puzzle',
      },
      {
        type: 'paragraph',
        text: 'The other complex challenge was the puzzle in the final scene. The idea was to collect drawings scattered around the environment and then place them in the correct order.'
      },
      {
        type: 'paragraph',
        text: 'This took longer because it wasn\'t a simple pickup: the system had to register the ID of each item in the inventory so it could recognize whether the correct drawing was placed in the correct position. I created a box item that runs `CheckIfListIsCorrect`, comparing the names of the items in the `placedPaintings` array against the `solutionName` list.'
      },
      {
        type: 'heading',
        text: 'Playtesting'
      },
      {
        type: 'paragraph',
        text: 'Finally, we had friends playtest the game. Along with smaller notes about certain puzzles and the character\'s movement speed, they found one big problem: interaction spamming.'
      },
      {
        type: 'paragraph',
        text: 'If a player spammed the E key while picking up an item, it would be added to the inventory twice, filling part of a slot with "garbage" data and preventing them from progressing. I fixed this by adding an `interactionCooldown` to block repeated interactions and an `isUsed` boolean to track whether an item can still be interacted with.'
      },
      {
        type: 'heading',
        text: 'The Results'
      },
      {
        type: 'paragraph',
        text: 'Even though we didn\'t rank very high, our goal was to start something together and see how well we could collaborate, since we both share the dream of making games.'
      },
      {
        type: 'paragraph',
        text: 'The reviews were overwhelmingly positive about the atmosphere, which was the main goal of the game. The only exception was mostly the second scene, where the environment was large and the assets looked small in view. Hearing people, from friends to strangers on the internet, say that the atmosphere was the game\'s biggest strength made me feel much more confident in my design abilities.'
      },
      {
        type: 'heading',
        text: 'What I Would Improve'
      },
      {
        type: 'paragraph',
        text: 'There are some code changes and mechanic updates I\'d like to make in the future. I want to add a quest log at the top of the screen, since some reviewers weren\'t sure how many items were left to find.'
      },
      {
        type: 'paragraph',
        text: 'I also know that after day five, with only two days left, I made some changes that weren\'t great architecturally, like giving the paintings their own separate logic even though they\'re technically pickup items. When I have the time, I\'d like to clean all of that up.'
      },
      {
        type: 'paragraph',
        text: 'For now, I\'m happy with how it turned out. To me, this project represents not just another game jam, but the start of something new with a good friend.'
      },
    ],
  },

  //to-do: Fill the story behind glyph
  // {
  //   slug: 'dialogue-glyph',
  //   title: 'Glyph Input Dialogue',
  //   tagline:
  //     'Project in Unity (C#) that implements a dialogue box system that handles a dynamic input glyph rendering.',
  //   kind: 'personal',
  //   year: 2026,
  //   cover: { src: asset('images/glyph/cover.png'), alt: 'Dialogue Glyph' },
  //   category: 'System',
  //   projectType: 'Solo project',
  //   duration: '2 days',
  //   platforms: ['Windows'],
  //   techStack: ['Unity', 'C#'],
  //   roles: ['Programmer'],
  //   links: [
  //     { label: 'View the code', url: 'https://github.com/ISeferli/Glyph_Input_Dialogue' },
  //   ],
  //   story: [
  //   ],
  // },

  //to-do: Fill the story behind shot through the wall
  // {
  //   slug: 'spin-round',
  //   title: 'Shot Through the Wall',
  //   tagline:
  //     'Game in Unity (C#) that focuses on the implementation of a split-screen logic.',
  //   kind: 'personal',
  //   year: 2026,
  //   cover: { src: asset('images/shot/cover.png'), alt: 'Shot Throught the Wall cover' },
  //   category: 'Split-screen, adventure',
  //   projectType: 'Solo project',
  //   duration: '30 days',
  //   platforms: ['Windows'],
  //   techStack: ['Unity', 'C#'],
  //   roles: ['Game Programmer'],
  //   links: [
  //     { label: 'Play on itch.io', url: 'https://iseferli.itch.io/shot-through-the-wall' },
  //     { label: 'View the code', url: 'https://github.com/ISeferli/spinround' },
  //   ],
  //   story: [
  //   ],
  // },

  // Rage Havoc: Complete
  {
    slug: 'rage-havoc',
    title: 'Rage Havoc',
    tagline:
      'VR Game developed Unity (C#)',
    kind: 'personal',
    year: 2026,
    cover: { src: asset('images/havoc/cover.png'), alt: 'Rage Havoc cover' },
    category: 'VR,  Destruction, Sandbox, Simulation',
    projectType: 'Solo project',
    duration: '30 days',
    platforms: ['VR'],
    techStack: ['Unity', 'C#'],
    roles: ['Game Programmer'],
    links: [
      { label: 'View the code', url: 'https://github.com/ISeferli/ragehavoc' },
    ],
    story: [
      {
        type: 'paragraph',
        text: 'This is a VR project built in Unity with C#, designed to recreate the experience of a rage room. You can pick up a tool, like an axe, and use it to smash objects, or grab smaller items and throw them. Each object fractures and leaves debris behind when it breaks.'
      },
      {
        type: 'image',
        image: 
          { src: ur('breaking.gif', 'havoc'), alt: 'Breaking item gif', caption: 'Breaking an object during gameplay'},
      },
      {
        type: 'heading',
        text: 'Where the Idea Came From'
      },
      {
        type: 'paragraph',
        text: 'This project started as a request from a close friend. He had an idea he wanted to bring to life but didn\'t have the programming skills, so we worked on the design together and I built it. I had spent a year testing and admiring a VR project at work, so I jumped at the chance to finally make something similar myself instead of only testing it.'
      }, 
      {
        type: 'paragraph',
        text: 'The goal was simple: create two small scenes, one indoors and one outdoors, filled with breakable props the player could destroy by hand or with a tool.'
      },
      {
        type: 'gallery',
        images: [
          { src: ur('indoors.png', 'havoc'), alt: 'Indoors scene', caption: 'Screenshot of inside the cabin'},
          { src: ur('outdoors.png', 'havoc'), alt: 'Outdoors scene', caption: 'Screenshot of the traversing the woods'},
        ]
      },
      {
        type: 'heading',
        text: 'Setting Up VR'
      },
      {
        type: 'paragraph',
        text: 'To learn the structure of a VR game, I started with Valem Tutorials\' YouTube series. It covered all the core mechanics found in most VR games: hand controllers, the camera offset driver, interactions through the `XR Interaction Manager` and its related components, and player movement through either teleportation or controller input.'
      },
      {
        type: 'video',
        title: 'Valem Tutorials Youtube Series',
        youtubeId: 'https://www.youtube.com/playlist?list=PLpEoiloH-4eM15HYUXK_2a6rldDDx8FcF',
      },
      {
        type: 'heading',
        text: 'Breakable Objects'
      },
      {
        type: 'paragraph',
        text: 'With the basics in place, it was time to figure out how to make things break. I built the indoor environment first and added a vase as a breakable object and an axe as the tool.'
      },
      {
        type: 'paragraph',
        text: 'Each breakable asset has a force threshold, calculated from the collision\'s relative velocity and the rigidbody\'s mass. When a hit exceeds that threshold, the object takes damage. In the Inspector, I could choose whether an object disappears completely on break or goes through several damage stages, which works better for sturdier objects.'
      },
      {
        type: 'image',
        layout: 'right',
        image: 
          { src: ur('breakable_comp.png', 'havoc'), alt: 'Breakable component inspector', caption: 'Breakable component in the Inspector, showing the threshold and damage stage settings.'},
      },
      {
        type: 'paragraph',
        text: 'On each hit, the `ApplyDamage` function advances the object to its next damage state and spawns particles specific to that object. Every item uses the same particle system, with dust for everything and particle gravity adjusted to suggest different materials. By using pieces of each object\'s mesh as the particle renderer, the particles look like actual debris from that item.'
      },
      {
        type: 'image',
        image: 
          { src: ur('glass_shut.gif', 'havoc'), alt: 'Glass shattering', caption: 'A GIF of a glass shattering'},
      },
      {
        type: 'heading',
        text: 'Larger Props'
      },
      {
        type: 'paragraph',
        text: 'Making bigger objects breakable, like a table and a wooden crate, was more complicated. I didn\'t have time to work on fracturing meshes myself, so I found assets that came with pre-made debris versions.'
      },
      {
        type: 'image',
        image: { src: ur('table_breaking.gif', 'havoc'), alt: 'Table gif', caption: 'Table breaking on axe impact'},
        layout: 'left'
      },
      {
        type: 'paragraph',
        text: 'Each of these objects has all of its damage stages grouped under an empty `GameObject`, with each stage as a child showing a different level of damage. When the object reaches its final stage, it\'s fully replaced with the debris version, so it looks like it falls apart.'
      },
      {
        type: 'heading',
        text: 'Axe as Breakable Tool'
      },
      {
        type: 'paragraph',
        text: 'The tool was a bit simpler. On collision, I calculate its velocity using `currentVelocity.magnitude` and check whether the object it hit is breakable. If it is, the hit\'s force is calculated from that velocity and a `forceMultiplier`. The only other setup the axe needed was an attach transform, which tells the interactor where the player\'s hand should grip it.'
      },
      {
        type:'heading', text:'What I Would Improve'
      },
      {
        type: 'paragraph',
        text: 'One part that\'s still glitchy and I want to improve is opening doors. Scene changes happen when the player opens a door, and I experimented with Fixed Joints and Hinge Joints so the door would swing open at the right angle. For some reason, though, it shakes during interaction, which makes me think the joints aren\'t connected properly yet.'
      },
      {
        type: 'paragraph',
        text: 'The biggest improvement though is the breaking system: I\'d love to make every object breakable by working directly with their meshes, instead of being limited by the assets I used. I\'d also like to add a glow-based highlight for objects the player gets close to, rather than swapping their material entirely.'
      },
      {
        type: 'heading',
        text: 'Looking Back'
      },
      {
        type: 'paragraph',
        text: 'Watching friends who had never tried VR before play my prototype and laugh while smashing everything reminded me why I love making games. So, I would say I loved the reminder to push me make more things and more complicated projects.'
      },
    ],
  },

  // Axe Rush: Complete
  {
    slug: 'axe-rush',
    title: 'Axe Rush',
    tagline:
      'Small game developed in C++ in process of learning to write without engine',
    kind: 'personal',
    year: 2026,
    cover: { src: ur('axecover.png', 'axe'), alt: 'Axe Rush cover' },
    category: 'Arcade, Casual, Survival',
    projectType: 'Solo project',
    duration: '2 weeks',
    platforms: ['Windows'],
    techStack: ['C++', 'Raylib'],
    roles: ['Game Programmer'],
    links: [
      { label: 'View the code', url: 'https://github.com/ISeferli/AxeRush' },
    ],
    story: [
      {
        type: 'paragraph',
        text: 'Axe Rush is a simple game developed entirely in C++ without a game engine, using the Raylib library. An axe bounces around the window while spinning, and you control a bubble that must avoid colliding with it. The longer you survive, the faster both the axe and the bubble move, making it harder and harder to escape.'
      },
      {
        type: 'heading',
        text: 'Where the Idea Came From'
      },
      {
        type: 'paragraph',
        text: 'The concept came from a C++ fundamentals course I was following. One section covered basic movement within the window, automatic movement for objects, and setting boundaries. After finishing it, I decided to build a quick game loop around those ideas so I could experiment further with C++.'
      }, 
      {
        type: 'paragraph',
        text: 'The course provided the basics: simple bounds for the objects, moving the bubble with the WASD keys, and automatic movement for the axe. What I wanted to add was a more structured architecture with everything organized into classes, DVD-logo-style bouncing movement for the axe, and speeds that increase over time. I also drew two quick sprites for the axe and the bubble so I could experiment with textures. Finally, I worked on the UI to create a main menu and learn how scene changes work without an engine.'
      },
      {
        type: 'gallery',
        images: [
          { src: ur('bubble.png', 'axe'), alt: 'Bubble sprite', caption: 'Bubble sprite created for use in this game'},
          { src: ur('axe.png', 'axe'), alt: 'Axe sprite', caption: 'Axe sprite created for use in this game'},
        ]
      },
      {
        type: 'heading',
        text: 'Quest: Bubble creation'
      },
      {
        type: 'paragraph',
        text: 'I started by moving the bubble into its own file, `bubble.cpp`, and restructuring it as a class. While following the course, I had already been splitting code into separate files, but I was relying on pointers to share and modify data. Switching to classes was a nice change: instead of passing pointers around and worrying about values being overwritten, each instance simply held its own variables.'
      },
      {
        type: 'paragraph',
        text: 'The bubble itself was simple. Its only animation was a slight back-and-forth rotation to make it look like it was floating (my imagination got the better of me). In the `MoveBubble` function, I mainly had to make sure it was initialized correctly and that every input updated its variables and was reflected on screen.'
      },
      {
        type: 'image',
        image: { src: ur('bubble_move.gif', 'axe'), alt: 'Bubble move gif', caption: 'Bubble moving according the keys'},
        layout: 'left'
      },
      {
        type: 'paragraph',
        text: 'The tricky part was understanding how time and `deltaTime` work, so that increasing the object\'s speed after a few seconds would still look smooth. I\'ll admit I had some amazing moments where I increased the speed too quickly, causing the bubble to jump around and even disappear from the window, snapping past the boundaries I had set.'
      },
      {
        type: 'heading',
        text: 'Quest: Axe creation'
      },
      {
        type: 'paragraph',
        text: 'Once I knew how to draw a texture and move it with changing speed, I moved on to the axe. It was a bit more complicated, since it needed to both move on its own and rotate.'
      },
      {
        type: 'paragraph',
        text: 'Rotation turned out to be easy, because Raylib\'s `DrawTexturePro` function takes a rotation parameter. I just had to increase the axe\'s rotation every `updateRotationTime`, the same way I handled speed, and reset it to 0 once it reached 360 degrees.'
      },
      {
        type: 'image',
        image: { src: ur('axe_move.gif', 'axe'), alt: 'Axe movement', caption: 'Axe random movement inside the window'}
      },
      {
        type: 'paragraph',
        text: 'I was more intimidated by the movement, since I assumed it would need random number generation. Then I realized that simply reversing the axe\'s direction whenever it hit the minimum or maximum width or height of the window gave the same effect. With that, I had one object controlled by the player and one that moved automatically, and both sped up over time.'
      },
      {
        type: 'heading',
        text: 'Collision without engine'
      },
      {
        type: 'paragraph',
        text: 'The part I\'m still not happy with, even after digging through the documentation, is collision. At first, I calculated each object\'s collision radius from its texture width and scale. Since both objects were roughly circular, with the bubble being round and the axe spinning, this seemed like a reasonable approach.'
      },
      {
        type: 'paragraph',
        text: 'What I really wanted was a collider that matched the axe\'s actual shape, perhaps a combination of a circle and a rectangle, but I couldn\'t find a way to keep those colliders aligned with the texture as it rotated. As a result, the bubble would sometimes pop when it got close to the axe without actually touching it.'
      },
      {
        type: 'image',
        image: { src: ur('wrong_bound.png', 'axe'), alt: 'Axe boundary', caption: 'Showcasing the axe\'s boundary in a red circle and how it affects the collision'},
        layout: 'left'
      },
      {
        type: 'paragraph',
        text: 'After many attempts, I settled on a single circle collider, kept small enough not to ruin the gameplay, so that with the rotation it still looks like the axe is hitting the bubble. I decided to leave it as is for now and come back to it once I have more experience with C++.'
      },
      {
        type: 'heading',
        text: 'Scenes and Game States'
      },
      {
        type: 'paragraph',
        text: 'The last thing I experimented with was events, which here mostly meant booleans that changed when a button was clicked or a collision happened. After working in Unity for so long, it was strange to see what happens behind the scenes and build a simple state system myself, where a `currentScene` variable indicated whether the game was in `MAIN_MENU` or `GAME`.'
      },
      {
        type: 'paragraph',
        text: 'In the end, the main file was built around two functions: one for the main menu with its two buttons, and one for the game itself, which handled movement and brought up a pause menu whenever a collision occurred.'
      },
      {
        type: 'heading',
        text: 'Back to My Roots'
      },
      {
        type: 'paragraph',
        text: 'This project also reminded me how important variable initialization is in C++. If a variable isn\'t initialized, it can hold garbage values that break everything, and tracking down the bug can take a long time, while a simple `variable = 0` would have prevented it entirely. I had forgotten about this after years of writing Java and C# inside an engine, so getting back to my roots (I started coding in C) was refreshing.'
      },
      {
        type: 'gallery',
        images: [
          { src: ur('mainmenu.jpeg', 'axe'), alt: 'Main Menu', caption: 'Main menu'},
          { src: ur('gameplay.gif', 'axe'), alt: 'Gameplay', caption: 'Game loop'},
          { src: ur('lose.gif', 'axe'), alt: 'Lose', caption: 'Bubble breaking on collision'},
          { src: ur('pause.jpeg', 'axe'), alt: 'Restart', caption: 'Restart UI menu'},
        ]
      }
    ],
  },
];



  //   slug: 'undead-rush',
  //   title: 'Undead Rush',
  //   tagline:
  //     'A small first-person shooter made in Unity (C#). Survive waves of zombies and beat your previous high score.',
  //   kind: 'personal',
  //   year: 2025,
  //   cover: { src: ur('cover.png'), alt: 'Undead Rush' },
  //   category: 'Shooter, first-person',
  //   projectType: 'Solo project',
  //   duration: '4 weeks',
  //   platforms: ['Windows'],
  //   techStack: ['Unity', 'C#'],
  //   roles: ['Programmer'],
  //   links: [
  //     { label: 'Play the game', url: 'https://iseferli.itch.io/undead-rush', primary: true },
  //     { label: 'View the code', url: '#' },
  //   ],
  //   story: [
  //   ],
  // }