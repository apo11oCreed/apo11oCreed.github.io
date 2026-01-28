// This file can be used to add references for global types like `vite/client`.

// Add global `vite/client` types. For more info, see: https://vitejs.dev/guide/features#client-types
/// <reference types="vite/client" />

// Google Tag Manager / Analytics
interface Window {
  dataLayer: any[];
  gtag?: (...args: any[]) => void;
}
