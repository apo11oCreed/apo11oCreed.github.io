import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { resolve } from "path";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  const isTest = process.env.NODE_ENV === 'test';
  
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      // Override qwikCity plugin with correct path for routes directory (only for non-test builds)
      !isTest && qwikCity({
        routesDir: resolve(__dirname, "../../src/routes"),
      }),
      staticAdapter({
        // Canonical origin (matches CNAME). Override with ORIGIN env if needed.
        origin: process.env.ORIGIN || "https://ncdesigns-studio.com",
        // If you ever host under a subpath, add: basePath: '/subpath'
      }),
    ].filter(Boolean),
    // Explicitly set the root to point back to the project root
    root: "../../",
  };
});
