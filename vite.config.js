import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "liz-wade",
    project: "javascript-react"
  })],

  base: "/week-7-hackathon-teamslick/",

  build: {
    sourcemap: true
  }
})