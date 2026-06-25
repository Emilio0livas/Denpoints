import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/team-6-s26/lab-f-andrew/', // Must match the working URL directory name exactly
})