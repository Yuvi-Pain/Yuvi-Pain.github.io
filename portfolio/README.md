# Yuvraj Bains — Portfolio

A React + Vite portfolio with a homepage and one reusable project-detail
template driven entirely by `src/data/projects.js`. Add a 5th project by
adding one object to that file — no new page needed.

## Run it locally

You need [Node.js](https://nodejs.org/) (v18+) installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Before you deploy — fill these in

1. **Resume**: drop your resume PDF into `public/resume.pdf` (the button on
   the homepage already links to `/resume.pdf`).
2. **LinkedIn URL**: open `src/data/profile.js` and replace the placeholder
   `linkedin` value with your real profile URL.
3. **Screenshots**: `src/data/projects.js` has a `visuals` array per
   project. DroneSystem, Scrabble, and the Bookstore already point at real
   diagrams bundled in `public/images/`. MacroSpots currently has an empty
   `visuals` array — add entries there once you have screenshots, e.g.:
   ```js
   visuals: [
     { src: "/images/macrospots/map-view.png", caption: "Map view with colored pins" },
   ],
   ```
   Drop the actual image files into `public/images/macrospots/`.
4. **Repo links**: double check each project's `repo` field points at the
   right GitHub URL.

## Build for production

```bash
npm run build
```

This outputs a static site into `dist/` — that folder is what you deploy.

## Deploying — all three options below are free

### Option A: Vercel (easiest, recommended)
1. Push this project to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import that repo.
3. Vercel auto-detects Vite. Click Deploy. Done — you get a live URL and
   automatic redeploys on every push.

### Option B: Netlify
1. Push to GitHub.
2. Go to netlify.com → "Add new site" → "Import an existing project".
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.

### Option C: GitHub Pages
1. Push this project to a GitHub repo, e.g. `yourname/portfolio`.
2. If the repo name isn't `yourname.github.io`, open `vite.config.js` and
   set `base: '/portfolio/'` (match your actual repo name exactly, with
   leading and trailing slashes). Skip this step if your repo IS named
   `yourname.github.io` — then leave `base: '/'`.
3. Run `npm install` (this also installs `gh-pages`, already wired into
   the `deploy` script below).
4. Run `npm run deploy` — this builds the site and pushes it to a
   `gh-pages` branch automatically.
5. In your repo's Settings → Pages, set "Source" to "Deploy from a branch",
   branch `gh-pages`, folder `/ (root)`. Save.
6. Wait ~1 minute, then visit `https://yourname.github.io/portfolio/`
   (or `https://yourname.github.io/` if that's your repo name).

This project uses `HashRouter` (URLs look like `/#/projects/drone-dispatch`)
specifically so it works with zero extra config on all three options above.
If you end up on Vercel or Netlify and want clean URLs without the `#`,
swap `HashRouter` for `BrowserRouter` in `src/main.jsx` — ask Claude for the
one-line change and a redirect rule if you get there.

## Project structure

```
src/
  data/
    profile.js      # your name, bio, skills, links
    projects.js      # all 4 projects' content — edit this to update text
  components/        # Nav, Hero, ProjectCard, ChallengeLog, etc.
  pages/
    Home.jsx          # homepage
    ProjectPage.jsx    # single template, reused for every project via the URL slug
  styles/
    global.css         # all design tokens + styles live here
public/
  images/              # real diagrams already included for 3 of your 4 projects
```
