import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
  ],
	resolve: {
		alias: {
			'/@': '/src',
		}
	},
  publicDir: "./public/",
  build: {
    outDir: "build",
  },
  server: {
    port: 4000,
  },
});