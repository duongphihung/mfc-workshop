import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Sets the default dev server port
    strictPort: true, // Exit if the port is already in use, instead of trying the next
    host: true, // Exposes the server to the local network (0.0.0.0)
    // allowedHosts: ['kimlongmotor.iotmind.vn']
    allowedHosts: true // Allow all hosts
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@components": new URL("./src/components", import.meta.url).pathname,
      "@layout": new URL("./src/layout", import.meta.url).pathname,
      "@utils": new URL("./src/utils", import.meta.url).pathname,
    },
  },
  optimizeDeps: {
    include: ['**/*.scss'], // Include all .scss files
  },
  css: {
    modules: {
      // Enable CSS Modules for all .scss files
      localsConvention: 'camelCaseOnly',
    },
  },
})
