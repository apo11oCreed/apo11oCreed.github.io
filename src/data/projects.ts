// import ImgInteractiveAppVisualization1 from '~/media/interactive-app-visualization-1.png?jsx';

export const projects = [
  {
    name: "Scrollytelling Interactive Visualization",
    description: "Developed a scrollytelling experience with animated, data-driven visualizations and seamlessly integrated a third-party application into the SPA. Ensured consistent performance and compatibility across major browsers and both desktop and mobile devices.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/pubs/visualizations/DVA3888-1.html",
    stack: ["Yarn","Vite","Svelte", "TypeScript", "SCSS", "D3.js", "Scrollama"],
    img: "interactive-app-visualization-2.png",
    type: "visualization"
  },
  {
    name: "Data-Driven Interactive Tool",
    description: "Extended an existing data visualization application by integrating new datasets and enhancing user interactivity. Tooltips and more granular views were added to promote further data exploration.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/research/gun-policy/law-navigator.html",
    stack: ["NPM", "Webpack", "SCSS", "D3.js"],
    img: "interactive-app-tool-3.png",
    type: "tool"
  },
  {
    name: "Data-Driven Interactive Visualization",
    description: "Built an interactive interpretation of a complex system of policies and their outcomes. On hover, paths are highlighted as a mechanism to present multi-layered relationships.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/pubs/visualizations/DVA1544-2/logic-model-for-intermediate-force-capabilities.html",
    stack: ["Yarn", "Vite", "Tailwind CSS"],
    img: "interactive-app-visualization-1.png",
    type: "visualization"
  },
  {
    name: "Newsletter Templates",
    description: "Developed responsive email newsletter components and templates using MJML, ensuring compatibility across various email clients.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology/newsletters/2025/11.html",
    stack: ["Yarn", "MJML", "HTL", "Java", "JSP"],
    img: "campaigns-newsletter-1.png",
    type: "email"
  },
  {
    name: "WordPress Custom Theme - Multisite",
    description: "Developed a custom WordPress multisite theme using PHP, JavaScript, and CSS. Implemented includes file system and optimized the theme for performance and SEO. Leveraged cookie-based logic to enable navigation between subsites.",
    credit: "Project completed while serving as Frontend Developer at Vue Health",
    url: "https://xatmep.com/hcp/",
    stack: ["PHP", "JavaScript", "CSS", "WordPress"],
    img: "wordpress-custom-multisite.png",
    type: "website"
  },
  {
    name: "WordPress Custom Theme - Single Site",
    description: "Developed a custom WordPress single site theme using PHP, JavaScript, and CSS. Implemented intuitive authoring systems and optimized the theme for performance and SEO.",
    credit: "Project completed while serving as Contractor at Doctors' Management Service, Inc.",
    url: "https://www.doctorsmanagementservice.org/",
    stack: ["PHP", "JavaScript", "SCSS", "WordPress"],
    img: "wordpress-custom.png",
    type: "website"
  }
] as const;

export type Project = typeof projects[number];