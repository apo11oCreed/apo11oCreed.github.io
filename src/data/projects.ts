import ImgInteractiveAppVisualization1 from '~/media/interactive-app-visualization-1.png?jsx';

export const projects = [
  {
    name: "The Future of Artificial Intelligence Policy Is the Future of Competing Demands",
    description: "Developed a scrollytelling experience with animated, data-driven visualizations and seamlessly integrated a third-party application into the SPA. Ensured consistent performance and compatibility across major browsers and both desktop and mobile devices.",
    url: "https://www.rand.org/pubs/visualizations/DVA3888-1.html",
    stack: ["Vite","Svelte", "TypeScript", "CSS"],
    img: "interactive-app-visualization-2.png"
  }
] as const;

export type Project = typeof projects[number];