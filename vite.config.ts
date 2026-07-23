import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/data/**/*', // Source folder
          dest: 'data',            // Destination folder
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // Alias for the `src` directory
    },
  },
  assetsInclude: ['**/*.JPG'], // Add this line to handle .JPG files
  server: {
    port: 3000, // Specify the port you want to use
  },
  base: '/test/', // Set the base path for your app when deployed
});