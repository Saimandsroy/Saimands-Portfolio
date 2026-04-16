import { lingui } from "@lingui/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(srcDir),
    },
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/three/")) {
            return "three-core";
          }

          if (
            id.includes("/node_modules/@react-three/fiber/") ||
            id.includes("/node_modules/@react-three/drei/")
          ) {
            return "react-three";
          }

          if (
            id.includes("/node_modules/@react-three/postprocessing/") ||
            id.includes("/node_modules/postprocessing/")
          ) {
            return "postprocessing";
          }

          if (id.includes("/node_modules/gsap/")) {
            return "gsap";
          }

          if (id.includes("/node_modules/framer-motion/")) {
            return "framer-motion";
          }

          if (id.includes("/node_modules/leva/")) {
            return "leva";
          }

          if (id.includes("/node_modules/howler/")) {
            return "howler";
          }
        },
      },
    },
  },
  assetsInclude: ["**/*.fbx", "**/*.hdr"],
  plugins: [
    react({ plugins: [["@lingui/swc-plugin", {}]] }),
    tailwindcss(),
    lingui(),
  ],
});
