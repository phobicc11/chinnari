# Digital Greeting Card — Chinnari

A fully responsive, 6-screen animated digital greeting card built with **React, Vite, Tailwind CSS, and Framer Motion**.

## 1. Setup

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 2. Project Structure

```text
chinnari/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    ├── data/
    │   └── clientConfig.js
    ├── utils/
    │   └── youtube.js
    └── components/
        ├── EnvelopeCover.jsx
        ├── EnvelopeOpen.jsx
        ├── LetterPage.jsx
        ├── VideoPage.jsx
        ├── PhotoCollage.jsx
        ├── FinalPage.jsx
        ├── Polaroid.jsx
        └── decorations/
            ├── WatercolorFlower.jsx
            └── HandDrawnMarks.jsx
```

## 3. Customization

Edit `src/data/clientConfig.js` to customize the greeting card content, including:

- Theme colors and backgrounds
- Cover and envelope text
- Letter paragraphs and photos
- YouTube video
- Photo collage
- Final message and closing photos

## 4. Technologies Used

- React
- Vite
- Tailwind CSS
- Framer Motion
- JavaScript
- CSS

## 5. Deployment

The project can be deployed using GitHub Pages or another static hosting platform.

For GitHub Pages, configure the repository's **Settings → Pages** section according to your deployment setup.

## 6. Notes

- Replace placeholder images with your intended photos.
- Keep personal content and configuration in `src/data/clientConfig.js` where applicable.
- Do not commit API keys, passwords, or private environment variables.
