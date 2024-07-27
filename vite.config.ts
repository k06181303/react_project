import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import React from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    React(),
    AutoImport({
      dts: "src/types/auto-imports.d.ts",
      imports: ["react"],
      dirs: ["./src/hooks"],
    }),
  ],
});
