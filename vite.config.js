import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Inx-Tattoo-Studio/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    open: true,
    strictPort: false
  },
  preview: {
    port: 3000,
    strictPort: false
  }
});
