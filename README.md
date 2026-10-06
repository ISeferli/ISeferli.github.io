# Game Portfolio (React + TypeScript + Vite)

## Run it
    npm install
    npm run dev       # local preview
    npm run build     # production files in /dist

## Where to edit
- `src/data/about.ts`    – name, bio, skills, experience, contact links
- `src/data/projects.ts` – every project and its development story
- `src/styles.css`       – colour tokens at the top 
- `public/images/`       – screenshots, e.g. `public/images/undead-rush/cover.jpg`

## Writing a development story
A story is a list of blocks, so you can place images anywhere in the text:

    { type: 'heading', text: 'Zombie AI' },
    { type: 'paragraph', text: 'Zombies use a `NavMeshAgent` and **four states**.' },
    { type: 'image', layout: 'right', image: { src: asset('images/my-game/ai.jpg'), alt: '...', caption: '...' } },
    { type: 'gallery', images: [ {...}, {...} ] },
    { type: 'quote', text: '...' },
    { type: 'list', items: ['...', '...'] },
    { type: 'video', youtubeId: 'dQw4w9WgXcQ', title: 'Trailer' },

Image layouts: `full` (default), `left` or `right` (text wraps around it; stacks on phones).
Every image opens in a lightbox (arrow keys to browse, Esc to close).
Missing image files show a labelled placeholder, so you can add screenshots later.
