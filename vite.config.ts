import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { TanStackStartVite } from '@tanstack/react-start/plugin'

export default defineConfig({
  plugins: [
    TanStackStartVite({
      deployment: {
        target: 'vercel',
      },
    }),
    tsconfigPaths(),
    react(),
  ],
})
