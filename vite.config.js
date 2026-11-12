import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import { APP_FULL_NAME, APP_NAME } from './src/config.js'

// https://vite.dev/config/
export default defineConfig({
  // path แบบสัมพัทธ์ สำหรับ GitHub Pages
  base: './',
  build: {
    rollupOptions: {
      output: {
        // แยกไฟล์ Firebase และ React
        manualChunks(id) {
          if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase')) return 'firebase'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
    // Firebase มีขนาดใหญ่
    chunkSizeWarningLimit: 900,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: APP_FULL_NAME,
        short_name: APP_NAME,
        description: 'เลี้ยงสัตว์ ให้อาหาร อาบน้ำ เล่นด้วย และพาเข้านอนทุกวัน',
        lang: 'th',
        theme_color: '#BFE3F5',
        background_color: '#F6FAFD',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // แคชฟอนต์ไว้ใช้ตอนออฟไลน์
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
    }),
  ],
})
