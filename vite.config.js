import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // relativo: funciona en usuario.github.io/<repo>/ sin importar el nombre del repo
  plugins: [react()],
})
