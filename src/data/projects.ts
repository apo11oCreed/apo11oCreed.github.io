// import ImgInteractiveAppVisualization1 from '~/media/interactive-app-visualization-1.png?jsx';

export const projects = [
  {
    name: "Scrollytelling Interactive Visualization",
    caption: "Screenshot of a responsive D3 animated bar chart",
    description: "Developed a scrollytelling experience with animated, data-driven visualizations and seamlessly integrated a third-party application into the SPA. Ensured consistent performance and compatibility across major browsers and both desktop and mobile devices.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/pubs/visualizations/DVA3888-1.html",
    stack: ["Yarn","Vite","Svelte", "TypeScript", "SCSS", "D3.js", "Scrollama", "Figma"],
    img: "interactive-app-visualization-2.png",
    imgAlt: "",
    type: "visualization"
  },
  {
    name: "Data-Driven Interactive Tool",
    caption: "Screenshot of an interactive map with information panel, drop down menu, and year range slider",
    description: "Extended an existing data visualization application by integrating new datasets and enhancing user interactivity. Tooltips and more granular views were added to promote further data exploration.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/research/gun-policy/law-navigator.html",
    stack: ["NPM", "Webpack", "SCSS", "D3.js", "Figma"],
    img: "interactive-app-tool-3.png",
    imgAlt: "",
    type: "tool"
  },
  {
    name: "Data-Driven Interactive Visualization",
    caption: "Screenshot of an interactive visualization highlighting multi-layered policy relationships",
    description: "Built an interactive interpretation of a complex system of policies and their outcomes. On hover, paths are highlighted as a mechanism to present multi-layered relationships.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/pubs/visualizations/DVA1544-2/logic-model-for-intermediate-force-capabilities.html",
    stack: ["Yarn", "Vite", "Tailwind CSS", "Figma"],
    img: "interactive-app-visualization-1.png",
    imgAlt: "",
    type: "visualization"
  },
  {
    name: "Newsletter Templates",
    caption: "Screenshot of a RAND newsletter template with citation bar, heading/logo, and hero image",
    description: "Developed responsive email newsletter components and templates using MJML, ensuring compatibility across various email clients.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology/newsletters/2025/11.html",
    stack: ["Yarn", "MJML", "HTL", "Java", "JSP", "Figma"],
    img: "campaigns-newsletter-1.png",
    imgAlt: "",
    type: "email"
  },
  {
    name: "WordPress Custom Theme - Multisite",
    caption: "Screenshot of the Xatmep multisite with 3-column grid and Important Safety Information drawer",
    description: "Developed a custom WordPress multisite theme using PHP, JavaScript, and CSS. Implemented includes file system and optimized the theme for performance and SEO. Leveraged cookie-based logic to enable navigation between subsites.",
    credit: "Project completed while serving as Frontend Developer at Vue Health",
    url: "https://xatmep.com/hcp/",
    stack: ["PHP", "JavaScript", "CSS", "WordPress"],
    img: "wordpress-custom-multisite.png",
    imgAlt: "Section of the Xatmep multisite homepage showing info cards and important safety information",
    type: "website"
  },
  {
    name: "WordPress Custom Theme - Single Site",
    caption: "Screenshot of the Doctors' Management Service homepage with navigation, hero, and social media feeds",
    description: "Developed a custom WordPress single site theme using PHP, JavaScript, and CSS. Implemented intuitive authoring systems and optimized the theme for performance and SEO.",
    credit: "Project completed while serving as Contractor at Doctors' Management Service, Inc.",
    url: "https://www.doctorsmanagementservice.org/",
    stack: ["PHP", "JavaScript", "SCSS", "WordPress"],
    img: "wordpress-custom.png",
    imgAlt: "",
    type: "website"
  },
  {
    name: "Marketing Email Templates",
    caption: "Screenshot of a marketing email templates built in Dreamweaver!",
    description: "Created fluid/elastic marketing email templates using HTML and CSS, ensuring compatibility across various email clients and devices.",
    credit: "Projects completed while serving as Web Developer for Distinctive Apparel Holding and Specialty Commerce Corp.",
    url: null,
    stack: ["HTML", "CSS", "Adobe Creative Cloud"],
    img: "campaign-marketing-email-1",
    imgAlt: "",
    type: "email"
  },
  {
    name: "E-commerce Website",
    caption: "Screenshot of Chadwicks of Boston and Territory Ahead homepage and product page",
    description: "Maintained multiple e-commerce websites on enterprise platforms. Implemented custom features and optimized site performance to enhance user experience and drive sales.",
    credit: "Project completed while serving as Web Developer for Distinctive Apparel Holding and Specialty Commerce Corp.",
    url: "https://www.chadwicks.com/",
    stack: ["HTML", "Javascript", "CSS", "Google Analytics", "Google Tag Manager", "Google Search Console", "Push Notifications", "Bootstrap"],
    img: "enterprise-ecom-1",
    imgAlt: "",
    type: "website"
  },
  {
    name: "Frequently Asked Questions (FAQ) Interactive Tool",
    caption: "Screenshot of the Chadwicks of Boston FAQ showing the accordion behavior",
    description: "Developed an interactive FAQ tool that allows users to easily navigate and find answers to common questions. Implemented search functionality and categorized content for improved user experience.",
    credit: "Project completed while serving as Web Developer for Distinctive Apparel Holding",
    url: null,
    stack: ["JavaScript", "HTML", "CSS"],
    img: "interactive-app-tool-4",
    imgAlt: "",
    type: "tool"
  }
] as const;

export type Project = typeof projects[number];