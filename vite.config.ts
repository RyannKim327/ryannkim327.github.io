import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { decoder } from "./src/utils/tools";

const URL = decoder([
  104, 116, 116, 112, 115, 58, 47, 47, 97, 112, 105, 45, 109, 112, 111, 112, 45,
  98, 97, 99, 107, 101, 110, 100, 46, 111, 110, 114, 101, 110, 100, 101, 114,
  46, 99, 111, 109,
]);

// const URL = decoder([
//   104, 116, 116, 112, 58, 47, 47, 108, 111, 99, 97, 108, 104, 111, 115, 116, 58,
//   56, 48, 48, 48,
// ]);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: URL,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
