import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/admin/', // Production path
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'https://www.aspireks.com/backend',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  build: {
    outDir: '../admin',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  css: {
    postcss: './postcss.config.js'
  }
})
