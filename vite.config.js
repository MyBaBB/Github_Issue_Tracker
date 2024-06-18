import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './', 
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "name":"Issue tracker",
        "short_name":"Tracker",
        "start_url":"./",
        "display":"standalone",
        "background_color":"#2a61a1",
        "lang":"en","scope":"./",
      },
        icons: [
          
          {
            src: 'maskable192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any maskable",
      },
          {
            src: 'logo192.jpg',
            sizes: '192x192',
            type: 'image/png',
           
      },
      
          {
            src: 'logo256.jpg',
            sizes: '256x256',
            type: 'image/png',
       
      },
          {
            src: 'logo384.jpg',
            sizes: '384x384',
            type: 'image/png',
          
          },
          {
            src: 'logo512.jpg',
            sizes: '512x512',
            type: 'image/png',
           
          },
        ],
    }),
  ],
})
