import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ 
  base: '/velvet-oracle/',
  plugins: [react()] });
