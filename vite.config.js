import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const Prerender = require('vite-plugin-prerender')
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer')

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about', '/projects', '/gallery', '/contact'],
      renderer: new PuppeteerRenderer({
        headless: true,
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
      })
    }),
  ],
})
