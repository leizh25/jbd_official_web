// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/mywork/date/myprogram/dev/official_web_template/node_modules/.pnpm/vite@5.2.10_@types+node@20.12.7_sass@1.75.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/mywork/date/myprogram/dev/official_web_template/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.10_vue@3.4.26/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///D:/mywork/date/myprogram/dev/official_web_template/node_modules/.pnpm/vite-plugin-vue-devtools@7.1.3_vite@5.2.10_vue@3.4.26/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///D:/mywork/date/myprogram/dev/official_web_template/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/mywork/date/myprogram/dev/official_web_template/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.26/node_modules/unplugin-vue-components/dist/vite.js";
import { PrimeVueResolver } from "file:///D:/mywork/date/myprogram/dev/official_web_template/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.26/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///D:/mywork/date/myprogram/dev/official_web_template/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: ["vue", "@vueuse/core", "vue-router", "vue-i18n"],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ["./src/utils", "./src/components"],
      dts: "./auto-imports.d.ts"
    }),
    Components({
      dts: true,
      dirs: ["src/components", "src/views"],
      resolvers: [PrimeVueResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
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
    port: 3e3,
    proxy: {
      "/api": {
        target: "http://192.168.1.79:8097",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxteXdvcmtcXFxcZGF0ZVxcXFxteXByb2dyYW1cXFxcZGV2XFxcXG9mZmljaWFsX3dlYl90ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbXl3b3JrXFxcXGRhdGVcXFxcbXlwcm9ncmFtXFxcXGRldlxcXFxvZmZpY2lhbF93ZWJfdGVtcGxhdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L215d29yay9kYXRlL215cHJvZ3JhbS9kZXYvb2ZmaWNpYWxfd2ViX3RlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scyc7XHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IHsgUHJpbWVWdWVSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBWdWVEZXZUb29scygpLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ0B2dWV1c2UvY29yZScsICd2dWUtcm91dGVyJywgJ3Z1ZS1pMThuJ10sXHJcbiAgICAgIGluY2x1ZGU6IFsvXFwuW3RqXXN4PyQvLCAvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXHJcbiAgICAgIGRpcnM6IFsnLi9zcmMvdXRpbHMnLCAnLi9zcmMvY29tcG9uZW50cyddLFxyXG4gICAgICBkdHM6ICcuL2F1dG8taW1wb3J0cy5kLnRzJ1xyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgZHRzOiB0cnVlLFxyXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJywgJ3NyYy92aWV3cyddLFxyXG4gICAgICByZXNvbHZlcnM6IFtQcmltZVZ1ZVJlc29sdmVyKCldXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgIH1cclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgLyoqXHU1OTgyXHU2NzlDXHU1RjE1XHU1MTY1XHU1OTFBXHU0RTJBXHU2NTg3XHU0RUY2XHVGRjBDXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4XHJcbiAgICAgICAgICogJ0BpbXBvcnQgXCJAL2Fzc2V0cy9zY3NzL2dsb2JhbFZhcmlhYmxlMS5zY3NzXCI7XHJcbiAgICAgICAgICogQGltcG9ydFwiQC9hc3NldHMvc2Nzcy9nbG9iYWxWYXJpYWJsZTIuc2Nzc1wiOydcclxuICAgICAgICAgKiovXHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiQC9zdHlsZS9nbG9iYWxWYXIuc2Nzc1wiOydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gICAgcHJveHk6IHtcclxuICAgICAgJy9hcGknOiB7XHJcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xOTIuMTY4LjEuNzk6ODA5N1wiLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9WLFNBQVMsZUFBZSxXQUFXO0FBRXZYLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHdCQUF3QjtBQVBzTCxJQUFNLDJDQUEyQztBQVN4USxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTyxnQkFBZ0IsY0FBYyxVQUFVO0FBQUEsTUFDekQsU0FBUyxDQUFDLGNBQWMsVUFBVSxjQUFjLE9BQU87QUFBQSxNQUN2RCxNQUFNLENBQUMsZUFBZSxrQkFBa0I7QUFBQSxNQUN4QyxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxNQUFNLENBQUMsa0JBQWtCLFdBQVc7QUFBQSxNQUNwQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7QUFBQSxJQUNoQyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS0osZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
