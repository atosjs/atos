import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(import.meta.dirname, 'src/cli.ts'),
        resolve(import.meta.dirname, 'src/index.ts'),
      ],
      formats: ['es'],

    },
    rollupOptions: {
      external: ['vue', ...Object.keys(pkg.dependencies)],
      output: {
        preserveModules: false,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
