# Digital Greeting Card — Master Template

A fully responsive, 6-screen animated digital greeting card built with **React + Vite + Tailwind CSS + Framer Motion**.

Every piece of client-specific content (text, images, video, colors) lives in one file:
**`src/data/clientConfig.js`**. To launch a new client site, duplicate this project and edit only that file.

## 1. Setup — exact terminal commands

```bash
# Scaffold a new Vite + React project
npm create vite@latest digital-greeting-card -- --template react
cd digital-greeting-card

# Install runtime dependencies
npm install framer-motion react-icons

# Install Tailwind CSS + its peer tooling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then replace the generated `tailwind.config.js`, `postcss.config.js`, `index.html`,
and everything in `src/` with the files provided in this deliverable.

```bash
# Run the dev server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Deploying to GitHub Pages

Pushing to the `main` branch builds and deploys the site with GitHub Actions.
In the repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**. The site will be available at
`https://ayahmohamed1.github.io/bluecard/`.

## 2. Project structure

```
digital-greeting-card/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx                     # step state + screen transitions
    ├── index.css                   # Tailwind directives + global styles
    ├── data/
    │   └── clientConfig.js         # <-- EDIT THIS FILE PER CLIENT
    ├── utils/
    │   └── youtube.js              # YouTube URL/ID parser
    ├── assets/                     # client photos (jpg/png)
    └── components/
        ├── EnvelopeCover.jsx       # Screen 1 — closed envelope
        ├── EnvelopeOpen.jsx        # Screen 2 — opening + balloons
        ├── LetterPage.jsx          # Screen 3 — split letter layout
        ├── VideoPage.jsx           # Screen 4 — YouTube embed
        ├── PhotoCollage.jsx        # Screen 5 — heart-shaped grid
        ├── FinalPage.jsx           # Screen 6 — closing typography
        ├── Polaroid.jsx            # shared polaroid image frame
        └── decorations/
            ├── WatercolorFlower.jsx
            └── HandDrawnMarks.jsx  # heart doodle + sparkle star
```

## 3. Customizing for a new client

Open `src/data/clientConfig.js` and edit:

- `theme` — background/primary/accent/balloon hex colors
- `cover` / `envelopeOpen` — intro copy
- `letter.paragraphs` — the main message, plus `letter.images` (2 photos)
- `video.youtubeId` — paste a full YouTube URL or bare video ID
- `collage.photos` — **exactly 10** photos, mapped in order onto the heart grid
- `finale.images` — the 2 closing photos + closing typography text

Drop new photos into `src/assets/` (or point to any hosted URL) and reference them
by path in the config. No component code needs to change.

## 4. Notes on implementation choices

- **Watercolor flowers** are built as lightweight inline SVGs
  (`components/decorations/WatercolorFlower.jsx`) rather than PNG assets, so the
  template ships with zero binary dependencies and the tint is themeable via props.
- **Photo collage grid** uses CSS `grid-template-areas` to form the heart shape
  (`PhotoCollage.jsx`) — swap in any 10 images via config, no markup changes needed.
- **Reduced motion**: `prefers-reduced-motion` is respected globally in `index.css`.
- **Accessibility**: envelope/card taps are real `<button>` elements with `aria-label`s,
  and focus states are visible (`:focus-visible`).
- Placeholder images in `src/assets/` are solid-color stand-ins — swap them out with
  real client photos before shipping.
