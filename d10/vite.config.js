import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ECM-week-2-frontend-engineering/d10/',
    build: {
    outDir: '.', 
    emptyOutDir: false,
  }
})
