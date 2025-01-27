import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['196.png', '512.png'],
      manifest: {
        name: "World Wide Walt",
        short_name: "Walt",
        start_url: "/",
        display: "fullscreen",
        description: "Walt's Personal Website",
        background_color: "#000000",
        theme_color: "#007ba7",
        icons: [
          {
            src: "/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/196.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "any"
          }
        ],
      },
      // Key options for handling updates
      registerType: 'autoUpdate', // Ensures the service worker updates immediately
      workbox: {
        cleanupOutdatedCaches: true, // Removes outdated cached assets
        skipWaiting: true,           // Forces new service worker to take control
        clientsClaim: true,          // Activates service worker immediately
      }
    })
  ]
})
