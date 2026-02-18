import { signal } from "@builder.io/qwik";

// Export as a shared signal for fullscreen image functionality
export const fullscreenImage = signal<string | null>(null);