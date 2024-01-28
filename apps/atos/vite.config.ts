import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(import.meta.dirname, 'src/cli.ts'),
        resolve(import.meta.dirname, 'src/index.ts'),
      ],
      name: 'MyLib',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
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
