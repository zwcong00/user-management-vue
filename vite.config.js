import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/user': {
        target: 'http://localhost:52001',
        changeOrigin: true
      }
    }
  }
})
