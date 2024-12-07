import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import electron from "vite-plugin-electron/simple";

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    !process.env.E2E_TESTING &&
      electron({
        main: {
          entry: "electron/main/index.ts",
          vite: {
            build: {
              outDir: "dist-electron/main",
            },
          },
        },
        preload: {
          input: "electron/preload/index.ts",
          vite: {
            build: {
              outDir: "dist-electron/preload",
            },
          },
        },
      }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
