import { defineConfig } from 'vite';

export default defineConfig({
  base: '/inx-tattoo-studio/',  // ← ADD THIS (match your repo name exactly)
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    open: true
  }
});