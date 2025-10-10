import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    <main>
        <section>
          <h1>Hi, I'm Nelson Correia</h1>
          <p>
            Front-end developer crafting modern, performant web experiences with 
            Svelte, TypeScript, and cutting-edge frameworks. I transform ideas into 
            pixel-perfect, user-focused applications.
          </p>
          <p>
            Let's build something exceptional together.
          </p>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Nelson Correia - Front-end Developer",
  meta: [
    // Basic SEO
    { name: "description", content: "Front-end developer specializing in Svelte, TypeScript, and modern web applications." },
    { name: "keywords", content: "front-end developer, svelte, typescript, web development, javascript" },
    { name: "author", content: "Nelson Correia" },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "en" },
    
    // Viewport & Mobile
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "theme-color", content: "#25408f" },
    { name: "color-scheme", content: "light dark" },
    
    // Open Graph (Facebook/LinkedIn)
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Nelson Correia - Front-end Developer" },
    { property: "og:description", content: "Front-end developer crafting modern web experiences" },
    { property: "og:url", content: "https://ncdesigns-studio.com" },
    { property: "og:image", content: "https://ncdesigns-studio.com/og-facebook.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    
    // Additional SEO
    { name: "canonical", content: "https://ncdesigns-studio.com" },
    { name: "revisit-after", content: "7 days" },
    { name: "rating", content: "general" },
    { name: "distribution", content: "global" },
    
    // Apple/iOS
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: "Nelson Correia" },
    
    // Microsoft
    { name: "msapplication-TileColor", content: "#25408f" },
  ],
  links: [
    // Favicons
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "apple-touch-icon", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    
    // Canonical
    { rel: "canonical", href: "https://ncdesigns-studio.com" },
    
    // Preconnect for performance
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  ],
};
