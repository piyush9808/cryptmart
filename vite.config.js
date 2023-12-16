import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxy } from 'http-proxy-middleware';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: createProxy('/config/api', {
      target: 'https://api.coingecko.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    }),
  },
})
