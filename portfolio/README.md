# Yuvraj Bains — Portfolio

A React + Vite portfolio site with a homepage and one project-detail template that gets reused across all projects. It's all driven by `src/data/projects.js`, so adding a 5th project just means adding one object to that file. No new page required.

## Running it locally

Needs Node.js v18 or newer.

```bash
npm install
npm run dev
```

Open the local URL it prints, usually `http://localhost:5173`.

## Before deploying

1. **Resume** — drop the resume PDF into `public/resume.pdf`. The button on the homepage already links to `/resume.pdf`.
2. **LinkedIn URL** — open `src/data/profile.js` and swap the placeholder `linkedin` value for the real profile URL.
3. **Screenshots** — `src/data/projects.js` has a `visuals` array per project. DroneSystem, Scrabble, and the Bookstore already point at real diagrams in `public/images/`. MacroSpots currently has an empty `visuals` array — add entries once there are screenshots:

   ```js
   visuals: [
     { src: "/images/macrospots/map-view.png", caption: "Map view with colored pins" },
   ],
   ```

   Drop the actual image files into `public/images/macrospots/`.
4. **Repo links** — double check each project's `repo` field points at the right GitHub URL.

## Build for production

```bash
npm run build
```

This outputs a static site into `dist/`. That's the folder to deploy.

## Deploying

All three of these are free.

### Vercel (easiest)

1. Push the project to a GitHub repo.
2. Go to vercel.com, "Add New Project", import that repo.
3. Vercel auto-detects Vite. Click Deploy and it's live, with automatic redeploys on every push.

### Netlify

1. Push to GitHub.
2. Go to netlify.com, "Add new site", "Import an existing project".
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.

### GitHub Pages

1. Push the project to a GitHub repo, e.g. `yourname/portfolio`.
2. If the repo name isn't `yourname.github.io`, open `vite.config.js` and set `base: '/portfolio/'`, matching the actual repo name exactly with leading and trailing slashes. Skip this if the repo IS named `yourname.github.io` — leave `base: '/'`.
3. Run `npm install`. This also installs `gh-pages`, already wired into the `deploy` script below.
4. Run `npm run deploy`. This builds the site and pushes it to a `gh-pages` branch automatically.
5. In the repo's Settings → Pages, set "Source" to "Deploy from a branch", branch `gh-pages`, folder `/ (root)`. Save.
6. Wait about a minute, then visit `https://yourname.github.io/portfolio/` or `https://yourname.github.io/` if that's the repo name.

This project uses `HashRouter`, so URLs look like `/#/projects/drone-dispatch`. That's on purpose — it works with zero extra config on all three deploy options above. On Vercel or Netlify, clean URLs without the `#` are possible by swapping `HashRouter` for `BrowserRouter` in `src/main.jsx`, plus a redirect rule.

## Project structure

```
src/
  data/
    profile.js      # name, bio, skills, links
    projects.js     # all 4 projects' content
  components/       # Nav, Hero, ProjectCard, ChallengeLog, etc.
  pages/
    Home.jsx         # homepage
    ProjectPage.jsx  # single template, reused for every project via the URL slug
  styles/
    global.css       # design tokens and styles
public/
  images/            # diagrams for 3 of the 4 projects
```
