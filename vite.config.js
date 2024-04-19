import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['196.png', '512.png'],
    manifest: {
      "manifest_version": 3,
      "name": "World Wide Walt",
      "version": "0.0.0",
      "start_url": "https://walterosborne.com/",
      "display": "fullscreen",
      "description": "Walt's Personal Website",
      "background_color": "#000000",
      "theme_color": "#007ba7",
      "icons": [
        {
          "src": "https://walterosborne.com/512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "https://walterosborne.com/196.png",
          "sizes": "196x196",
          "type": "image/png",
          "purpose": "any"
        }],
    }
  })
  ]
})
