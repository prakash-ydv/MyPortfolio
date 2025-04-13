import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // server: {
  //   proxy: {
  //     '/gfg': {
  //       target: 'https://geeks-for-geeks-api.vercel.app/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/gfg/, ''),
  //     },
  //   },
  // },
})
