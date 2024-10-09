import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});

// jest.config.js
module.exports = {
  preset: "vite",
  test: {
    environment: "jsdom", // Use jsdom for testing React components
    transform: {
      "^.+\\.tsx?$": "vite", // Transform TypeScript files using Vite
    },
  },
};
