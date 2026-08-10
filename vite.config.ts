
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/config'

export default defineConfig({
  plugins: [
    tanstackStart(),
    tsconfigPaths(),
    react(),
  ],
})
