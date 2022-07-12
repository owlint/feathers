import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { dedupe: ['vue'] },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'feathers',
    },
    rollupInputOptions: {
      external: ['vue'],
    },
    rollupOptions: {
      input: 'src/index.js',
      external: ['vue'],
      output: {
        format: 'umd',
        name: 'feathers',
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
