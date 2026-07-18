import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  base: './',
  plugins: [react(), cloudflare()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})