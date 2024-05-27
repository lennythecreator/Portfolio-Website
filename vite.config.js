import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'About.html',
        projects: 'Projects.html',
      
      }
    },
    outDir: 'dist',
  },
});
