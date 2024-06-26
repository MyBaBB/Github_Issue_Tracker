import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
 
 
 


 
export default defineConfig({
  base: './', 

  plugins: [
    react(),
    VitePWA({
      manifest: {
        "name":"Issue Tracker",
        "short_name":"Tracker",
        "start_url":"./",
        "display":"standalone",
        "background_color":"#265370",
        "lang":"en","scope":"./",
        "icons":[
          {
            "src":"favicon-32x32.png",
             "sizes":"32x32","type":"image/png",
             "purpose":"any maskable"
            },
             {
              "src":"favicon-16x16.png",
              "sizes":"16x16",
              "type":"image/png",
              "purpose":"any maskable"
            },
              {
                "src":"maskable192.png",
                "sizes":"192x192","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"maskable192.png",
                "sizes":"192x192","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"logo192.jpg",
              "sizes":"192x192",
              "type":"image/jpg"
            },
              {
                "src":"logo256.jpg",
                "sizes":"256x256",
                "type":"image/jpg"
            },
              {
                "src":"logo384'jpg",
                "sizes":"384x384",
                "type":"image/jpg"
            },
              {
                "src":"logo512.jpg",
                "sizes":"512x512",
                "type":"image/jpg"
            },
              {
                "src":"android-chrome-512x512.png",
                "sizes":"512x512","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"android-chrome-192x192.png",
                "sizes":"192x192","type":"image/png",
                "purpose":"any maskable"
            },
              {
                "src":"apple-touch-icon.png",
                "sizes":"180x180","type":"image/png",
                "purpose":"any maskable"
            }],
              "theme_color":"#0d2657"
            }

    }),
  ],
})