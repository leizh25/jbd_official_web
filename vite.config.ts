import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vue-router', 'vue-i18n'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['./src/utils', './src/components'],
      dts: './auto-imports.d.ts'
    }),
    Components({
      dts: true,
      dirs: ['src/components', 'src/views'],
      resolvers: [PrimeVueResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**如果引入多个文件，可以使用
         * '@import "@/assets/scss/globalVariable1.scss";
         * @import"@/assets/scss/globalVariable2.scss";'
         **/
        additionalData: '@import "@/style/globalVar.scss";'
      }
    }
  },
  server: {
    // port: 5173,
    proxy: {
      '/api': {
        target: "http://192.168.1.79:8097",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
