import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Portfolio/', // <-- your repo name with slashes
  plugins: [vue()]
})