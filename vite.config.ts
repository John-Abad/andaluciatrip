import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo: github.com/John-Abad/andaluciatrip → sitio en /andaluciatrip/
const repo = "andaluciatrip";

export default defineConfig({
  base: `/${repo}/`,
  plugins: [react()],
});
