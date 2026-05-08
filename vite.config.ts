import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const isVercel = !!process.env.VERCEL

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  plugins: [
    tanstackStart(),
    tailwindcss(),
    nitro({
      preset: isVercel ? 'vercel' : 'node-server',
    }),
    viteReact(),
    tsConfigPaths(),
  ],
})
