import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
import { APP_FULL_NAME, APP_NAME } from './src/config.js'

// https://vite.dev/config/
export default defineConfig({
  // './' = ใช้ path แบบสัมพัทธ์ ทำให้ deploy ขึ้น GitHub Pages ได้ไม่ว่าจะตั้งชื่อ repo ว่าอะไร
  // (ใช้คู่กับ HashRouter ใน main.jsx)
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: APP_FULL_NAME,
        short_name: APP_NAME,
        description: 'เลี้ยงน้องหมา ให้อาหาร ให้น้ำ และเล่นด้วยทุกวัน',
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
        // เก็บไฟล์ฟอนต์ไว้ในเครื่องด้วย เปิดแอปตอนออฟไลน์ตัวหนังสือจะได้ไม่เพี้ยน
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
    }),
  ],
})
