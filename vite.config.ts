import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    vue(),
    vueI18n({
      // include ALL locale files
      include: path.resolve(__dirname, './src/locales/**'),
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    }),
  ],
    build: {
    assetsInlineLimit: 0, // force JSON to be included in bundle
  },
})