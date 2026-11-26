import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the repo at /dead-coin-graveyard/
  base: '/dead-coin-graveyard/',
  plugins: [react(), tailwindcss()],
})
