import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: {
      clientPort: 443, // Obliga a usar el puerto seguro de la nube
    },
    allowedHosts: true // Permite que IDX se conecte sin problemas
  }
})