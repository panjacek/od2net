import { defineConfig, searchForWorkspaceRoot } from "vite";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  base: "/routing-engines/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [svelte()],
  // TODO For the symlinks in assets
  server: {
    fs: {
      allow: [".."],
    },
  },
})
