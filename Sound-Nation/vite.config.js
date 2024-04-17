import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      
      input: {
        main: resolve(__dirname, 'index.html'),
        robots: resolve(__dirname, 'robots.txt'),
        sitemap: resolve(__dirname, 'sitemap.xml')
      },
      
      output: {
        manualChunks: undefined
      }
    }
  },
  assetsInclude: ['**/*.xml']
})
