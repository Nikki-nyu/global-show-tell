import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/global-show-tell/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Main app entry
        opencall: './public/opencall/index.html', // Additional HTML page
      },
    },
  },
})
