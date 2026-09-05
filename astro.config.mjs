import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://jusalvapatinhas.umbrastudio.com.br',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [react()],
  server: { host: '127.0.0.1', port: 5173 },
  vite: { server: { strictPort: true } },
})
