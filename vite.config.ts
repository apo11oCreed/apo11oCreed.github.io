import { defineConfig } from "vite";
import pkg from "./package.json";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";

const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

export default defineConfig(() => {
  return {
    build: {
      target: "es2020",
      lib: {
        entry: "./src/index.ts",
        formats: ["es", "cjs"],
        fileName: (format, entryName) =>
          `${entryName}.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
      rollupOptions: {
        output: {
          preserveModules: true,
          preserveModulesRoot: "src",
        },
        // externalize deps that shouldn't be bundled into the library
        external: [
          /^node:.*/,
          ...excludeAll(dependencies),
          ...excludeAll(peerDependencies),
        ],
      },
    },
    server: {
      port: "8080",
      allowedHosts: [
        "6240c6c47dce467a9c50d432d7f3f47b.vfs.cloud9.us-east-1.amazonaws.com",
        "47f0519e5afd4ba28b322f42a9a35d1d.vfs.cloud9.us-east-1.amazonaws.com",
        "b127d72b52e6464a85457c7c3271348e.vfs.cloud9.us-east-1.amazonaws.com",
      ],
    },
    plugins: [qwikVite(), tsconfigPaths({ root: "." })],
  };
});
