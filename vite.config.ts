/**
 * This is the base config for vite.
 * When building, the adapter config is used which loads this file and extends it.
 */
import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import pkg from "./package.json";

type PkgDep = Record<string, string>;
const { dependencies = {}, devDependencies = {} } = pkg as any as {
  dependencies: PkgDep;
  devDependencies: PkgDep;
  [key: string]: unknown;
};
errorOnDuplicatesPkgDeps(devDependencies, dependencies);

/**
 * Note that Vite normally starts from `index.html` but the qwikCity plugin makes start at `src/entry.ssr.tsx` instead.
 */
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  const isTest = process.env.NODE_ENV === 'test';
  
  return {
    plugins: [
      // Configure qwikCity plugin with explicit routes directory
      !isTest && qwikCity({
        routesDir: 'src/routes',
      }),
      qwikVite({
        // Optimize for dev tools usage
        debug: false,
        // Reduce chunks in development for better HMR
        entryStrategy: command === 'build' ? { type: 'smart' } : { type: 'single' },
      }), 
      tsconfigPaths({ root: "." }),
    ].filter(Boolean),
    server: {
      // Server port and host configuration
      port: 8080,
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        'ncdesigns-studio.com',
        "b127d72b52e6464a85457c7c3271348e.vfs.cloud9.us-east-1.amazonaws.com",
        "6e18811d1810409f8e3a85ae06a47df5.vfs.cloud9.us-east-1.amazonaws.com",
      ],
      // Headers for development
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0",
      },
      // Optimize HMR for dev tools usage
      hmr: {
        overlay: false,
        // Use a different port for HMR to avoid conflicts
        port: 5174,
      },
      // Improve file watching performance
      watch: {
        usePolling: false,
        ignored: ['**/node_modules/**', '**/dist/**', '**/.qwik/**', '**/tmp/**'],
        // Reduce file watching frequency
        interval: 1000,
        binaryInterval: 3000,
      },
      // Optimize for development with dev tools
      middlewareMode: false,
      fs: {
        strict: false,
      },
    },
    // Improve dev performance when dev tools are open
    esbuild: {
      // Reduce source map overhead in dev
      sourcemap: command === 'serve' ? 'inline' : true,
      // Optimize for dev tools
      keepNames: true,
      minifyIdentifiers: false,
      minifySyntax: false,
      minifyWhitespace: false,
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (chunkInfo) => {
            const name = chunkInfo.name || 'unknown';
            const extType = name.split('.').pop();
            
            // For images, use name without hash
            if (['png', 'jpg', 'jpeg', 'webp', 'svg'].includes(extType || '')) {
              return 'assets/[name].[ext]';
            }
            
            return 'assets/[name]-[hash].[ext]';
          },
        },
      },
    },
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: [],
    },

    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev dependencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,

    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600",
      },
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['src/test/setup.ts'],
      include: ['src/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  };
});

// *** utils ***

/**
 * Function to identify duplicate dependencies and throw an error
 * @param {Object} devDependencies - List of development dependencies
 * @param {Object} dependencies - List of production dependencies
 */
function errorOnDuplicatesPkgDeps(
  devDependencies: PkgDep,
  dependencies: PkgDep,
) {
  let msg = "";
  // Create an array 'duplicateDeps' by filtering devDependencies.
  // If a dependency also exists in dependencies, it is considered a duplicate.
  const duplicateDeps = Object.keys(devDependencies).filter(
    (dep) => dependencies[dep],
  );

  // include any known qwik packages
  const qwikPkg = Object.keys(dependencies).filter((value) =>
    /qwik/i.test(value),
  );

  // any errors for missing "qwik-city-plan"
  // [PLUGIN_ERROR]: Invalid module "@qwik-city-plan" is not a valid package
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;

  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }

  // Format the error message with the duplicates list.
  // The `join` function is used to represent the elements of the 'duplicateDeps' array as a comma-separated string.
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;

  // Throw an error with the constructed message.
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
