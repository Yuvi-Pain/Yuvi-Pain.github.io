import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to GitHub Pages under a repo (not a custom domain or a
// <username>.github.io root repo), set `base` to '/your-repo-name/'.
// For Vercel/Netlify, leave it as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
