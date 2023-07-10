import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 500 * 1024, // Límite de tamaño de fragmento en bytes (500 kB)
    rollupOptions: {
      output: {
        manualChunks: {
          // Configura manualmente los fragmentos si es necesario
        }
      }
    }
  }
})
