import { defineConfig } from 'vite';

export default defineConfig({
  base: '/inx-tattoo-studio/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    open: true
  }
});
