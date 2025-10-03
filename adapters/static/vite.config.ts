import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdapter({
        // Canonical origin (matches CNAME). Override with ORIGIN env if needed.
        origin: process.env.ORIGIN || "https://ncdesigns-studio.com",
        // If you ever host under a subpath, add: basePath: '/subpath'
      }),
    ],
  };
});
