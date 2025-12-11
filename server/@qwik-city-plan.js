var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { c as componentQrl, i as inlinedQrl, _ as _jsxC, S as Slot, F as Fragment, a as _jsxQ, b as _jsxBranch, d as _wrapSignal, e as _IMMUTABLE, f as _wrapProp, u as useStylesScopedQrl, g as useSignal, h as useOnDocument, j as useVisibleTaskQrl, k as _fnSignal, l as useLexicalScope, m as _noopQrl, n as useOnWindow } from "./q-2a_kPAEI.js";
import gsap from "gsap";
const s_VKFlAWJuVm8 = /* @__PURE__ */ __name(() => {
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "yB_0")
  }, 1, "yB_1");
}, "s_VKFlAWJuVm8");
const layout = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_VKFlAWJuVm8, "s_VKFlAWJuVm8"));
const head = {
  title: "Nelson Correia - Front-end Developer",
  meta: [
    // Basic SEO
    {
      name: "description",
      content: "Front-end developer specializing in Svelte, TypeScript, and modern web applications."
    },
    {
      name: "keywords",
      content: "front-end developer, svelte, typescript, web development, javascript"
    },
    {
      name: "author",
      content: "Nelson Correia"
    },
    {
      name: "robots",
      content: "index, follow"
    },
    {
      name: "language",
      content: "en"
    },
    // Viewport & Mobile
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    },
    {
      name: "theme-color",
      content: "#25408f"
    },
    {
      name: "color-scheme",
      content: "light dark"
    },
    // Open Graph (Facebook)
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:title",
      content: "Nelson Correia - Front-end Developer"
    },
    {
      property: "og:description",
      content: "Front-end developer crafting modern web experiences"
    },
    {
      property: "og:url",
      content: "https://ncdesigns-studio.com"
    },
    {
      property: "og:image",
      content: "https://ncdesigns-studio.com/og-facebook.png"
    },
    {
      property: "og:image:width",
      content: "1200"
    },
    {
      property: "og:image:height",
      content: "630"
    },
    // Additional SEO
    {
      name: "canonical",
      content: "https://ncdesigns-studio.com"
    },
    {
      name: "revisit-after",
      content: "7 days"
    },
    {
      name: "rating",
      content: "general"
    },
    {
      name: "distribution",
      content: "global"
    },
    // Apple/iOS
    {
      name: "mobile-web-app-capable",
      content: "yes"
    },
    // Microsoft
    {
      name: "msapplication-TileColor",
      content: "#25408f"
    }
  ],
  links: [
    // Favicons
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico"
    },
    // Canonical
    {
      rel: "canonical",
      href: "https://ncdesigns-studio.com"
    },
    // Preconnect for performance
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: ""
    }
  ]
};
const Layout_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layout,
  head
}, Symbol.toStringTag, { value: "Module" }));
const projects = [
  {
    name: "Scrollytelling Interactive Visualization",
    description: "Developed a scrollytelling experience with animated, data-driven visualizations and seamlessly integrated a third-party application into the SPA. Ensured consistent performance and compatibility across major browsers and both desktop and mobile devices.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/pubs/visualizations/DVA3888-1.html",
    stack: [
      "Yarn",
      "Vite",
      "Svelte",
      "TypeScript",
      "SCSS",
      "D3.js",
      "Scrollama"
    ],
    img: "interactive-app-visualization-2.png",
    type: "visualization"
  },
  {
    name: "Data-Driven Interactive Tool",
    description: "Extended an existing data visualization application by integrating new datasets and enhancing user interactivity. Tooltips and more granular views were added to promote further data exploration.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/research/gun-policy/law-navigator.html",
    stack: [
      "NPM",
      "Webpack",
      "SCSS",
      "D3.js"
    ],
    img: "interactive-app-tool-3.png",
    type: "tool"
  },
  {
    name: "Data-Driven Interactive Visualization",
    description: "Built an interactive interpretation of a complex system of policies and their outcomes. On hover, paths are highlighted as a mechanism to present multi-layered relationships.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/pubs/visualizations/DVA1544-2/logic-model-for-intermediate-force-capabilities.html",
    stack: [
      "Yarn",
      "Vite",
      "Tailwind CSS"
    ],
    img: "interactive-app-visualization-1.png",
    type: "visualization"
  },
  {
    name: "Newsletter Templates",
    description: "Developed responsive email newsletter components and templates using MJML, ensuring compatibility across various email clients.",
    credit: "Project completed while serving as Web Applications Developer at RAND Corporation.",
    url: "https://www.rand.org/global-and-emerging-risks/centers/ai-security-and-technology/newsletters/2025/11.html",
    stack: [
      "Yarn",
      "MJML",
      "HTL",
      "Java",
      "JSP"
    ],
    img: "campaigns-newsletter-1.png",
    type: "email"
  }
];
const projectList = "_projectList_r3ey5_1";
const techStack = "_techStack_r3ey5_48";
const styles$1 = {
  projectList,
  techStack
};
const srcSet$3 = "/assets/interactive-app-visualization-2.webp 200w, /assets/interactive-app-visualization-22.webp 400w, /assets/interactive-app-visualization-24.webp 600w, /assets/interactive-app-visualization-23.webp 698w";
const width$3 = 698;
const height$3 = 1618;
const PROPS$3 = { srcSet: srcSet$3, width: width$3, height: height$3 };
function InteractiveAppVisualization1(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$3, void 0, 3, key, dev);
}
__name(InteractiveAppVisualization1, "InteractiveAppVisualization1");
const srcSet$2 = "/assets/interactive-app-tool-3.webp 200w, /assets/interactive-app-tool-32.webp 400w, /assets/interactive-app-tool-33.webp 600w, /assets/interactive-app-tool-34.webp 800w, /assets/interactive-app-tool-35.webp 1200w";
const width$2 = 1200;
const height$2 = 963;
const PROPS$2 = { srcSet: srcSet$2, width: width$2, height: height$2 };
function InteractiveAppTool3(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$2, void 0, 3, key, dev);
}
__name(InteractiveAppTool3, "InteractiveAppTool3");
const srcSet$1 = "/assets/interactive-app-visualization-1.webp 200w, /assets/interactive-app-visualization-12.webp 400w, /assets/interactive-app-visualization-13.webp 600w, /assets/interactive-app-visualization-14.webp 800w, /assets/interactive-app-visualization-15.webp 1200w";
const width$1 = 1200;
const height$1 = 1206;
const PROPS$1 = { srcSet: srcSet$1, width: width$1, height: height$1 };
function InteractiveAppVisualization3(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$1, void 0, 3, key, dev);
}
__name(InteractiveAppVisualization3, "InteractiveAppVisualization3");
const srcSet = "/assets/campaigns-newsletter-12.webp 200w, /assets/campaigns-newsletter-1.webp 400w, /assets/campaigns-newsletter-13.webp 600w, /assets/campaigns-newsletter-14.webp 800w, /assets/campaigns-newsletter-15.webp 1200w";
const width = 1200;
const height = 9627;
const PROPS = { srcSet, width, height };
function CampaignsNewsletter1(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS, void 0, 3, key, dev);
}
__name(CampaignsNewsletter1, "CampaignsNewsletter1");
const imageMap = {
  "interactive-app-visualization-2.png": InteractiveAppVisualization1,
  "interactive-app-tool-3.png": InteractiveAppTool3,
  "interactive-app-visualization-1.png": InteractiveAppVisualization3,
  "campaigns-newsletter-1.png": CampaignsNewsletter1
};
const s_W1MswfbHEcE = /* @__PURE__ */ __name((props) => {
  return /* @__PURE__ */ _jsxQ("ul", null, {
    class: styles$1.projectList
  }, props.projects.map((project, index2) => {
    _jsxBranch();
    const ImageComponent = project.img ? imageMap[project.img] : null;
    return /* @__PURE__ */ _jsxQ("li", null, null, [
      /* @__PURE__ */ _jsxQ("h3", null, null, /* @__PURE__ */ _jsxQ("a", {
        href: _wrapSignal(project, "url")
      }, {
        target: "_blank",
        rel: "noopener noreferrer"
      }, _wrapSignal(project, "name"), 1, null), 1, null),
      ImageComponent && /* @__PURE__ */ _jsxC(ImageComponent, {
        get alt() {
          return project.name;
        },
        style: {
          width: "50%",
          height: "200px",
          objectFit: "cover",
          objectPosition: "2rem"
        },
        [_IMMUTABLE]: {
          alt: _wrapProp(project, "name"),
          style: _IMMUTABLE
        }
      }, 3, "0C_0"),
      /* @__PURE__ */ _jsxQ("p", null, null, _wrapSignal(project, "description"), 1, null),
      /* @__PURE__ */ _jsxQ("p", null, null, /* @__PURE__ */ _jsxQ("small", null, null, /* @__PURE__ */ _jsxQ("em", null, null, _wrapSignal(project, "credit"), 1, null), 1, null), 1, null),
      /* @__PURE__ */ _jsxQ("h4", null, null, "Technologies Used:", 3, null),
      /* @__PURE__ */ _jsxQ("ul", null, {
        class: styles$1.techStack
      }, project.stack.map((tech) => /* @__PURE__ */ _jsxQ("li", null, null, tech, 1, tech)), 1, null)
    ], 1, `${project.name}-${index2}`);
  }), 1, "0C_1");
}, "s_W1MswfbHEcE");
const ProjectList = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_W1MswfbHEcE, "s_W1MswfbHEcE"));
const styles = "._dialog-backdrop_1lcwi_2 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n  animation: _fadeIn_1lcwi_1 0.3s ease-out;\n}\n@keyframes _fadeIn_1lcwi_1 {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n._dialog-content_1lcwi_27 {\n  background: var(--background-color);\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  animation: _slideIn_1lcwi_1 0.3s ease-out;\n  position: relative;\n  overflow: hidden;\n}\n@keyframes _slideIn_1lcwi_1 {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n._dialog-small_1lcwi_51 {\n  width: 100%;\n  max-width: 400px;\n}\n._dialog-medium_1lcwi_56 {\n  width: 100%;\n  max-width: 600px;\n}\n._dialog-large_1lcwi_61 {\n  width: 100%;\n  max-width: 900px;\n}\n._dialog-header_1lcwi_67 {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1.5rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n._dialog-header_1lcwi_67 h2 {\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  flex: 1;\n}\n._dialog-close_1lcwi_83 {\n  background: none;\n  border: none;\n  font-size: 2rem;\n  line-height: 1;\n  color: var(--text-color);\n  cursor: pointer;\n  padding: 0;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n  flex-shrink: 0;\n  margin-left: 1rem;\n}\n._dialog-close_1lcwi_83:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n._dialog-close_1lcwi_83:focus {\n  outline: 2px solid var(--primary-color);\n  outline-offset: 2px;\n}\n._dialog-body_1lcwi_112 {\n  padding: 1.5rem;\n  overflow-y: auto;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  ._dialog-backdrop_1lcwi_2 {\n    padding: 0.5rem;\n  }\n  ._dialog-content_1lcwi_27 {\n    max-height: 95vh;\n  }\n  ._dialog-header_1lcwi_67 {\n    padding: 1rem;\n  }\n  ._dialog-body_1lcwi_112 {\n    padding: 1rem;\n  }\n  ._dialog-header_1lcwi_67 h2 {\n    font-size: 1.25rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  ._dialog-backdrop_1lcwi_2 {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  ._dialog-header_1lcwi_67 {\n    border-bottom-color: rgba(255, 255, 255, 0.1);\n  }\n  ._dialog-close_1lcwi_83:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n}";
const s_7ldVcDWrykY = /* @__PURE__ */ __name(() => {
  const [props] = useLexicalScope();
  props.isOpen.value = false;
  if (props.onClose$) props.onClose$();
}, "s_7ldVcDWrykY");
const s_25nHLry4QtU = /* @__PURE__ */ __name((event) => {
  const [handleClose, props] = useLexicalScope();
  if ((props.closeOnBackdrop ?? true) && event.target === event.currentTarget) handleClose();
}, "s_25nHLry4QtU");
const s_458P5iWQHv8 = /* @__PURE__ */ __name((event) => {
  const [handleClose, props] = useLexicalScope();
  if ((props.closeOnEscape ?? true) && props.isOpen.value && event.key === "Escape") handleClose();
}, "s_458P5iWQHv8");
const s_s2c0eHBzgXA = /* @__PURE__ */ __name((props) => {
  _jsxBranch();
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(styles, "s_sC01JsYzSek"));
  const dialogRef = useSignal();
  const handleClose = /* @__PURE__ */ inlinedQrl(s_7ldVcDWrykY, "s_7ldVcDWrykY", [
    props
  ]);
  const handleBackdropClick = /* @__PURE__ */ inlinedQrl(s_25nHLry4QtU, "s_25nHLry4QtU", [
    handleClose,
    props
  ]);
  useOnDocument("keydown", /* @__PURE__ */ inlinedQrl(s_458P5iWQHv8, "s_458P5iWQHv8", [
    handleClose,
    props
  ]));
  useVisibleTaskQrl(/* @__PURE__ */ _noopQrl("s_idGvp1E8e8w", [
    dialogRef,
    props
  ]));
  if (!props.isOpen.value) return null;
  return /* @__PURE__ */ _jsxQ("div", null, {
    class: "dialog-backdrop",
    onClick$: handleBackdropClick
  }, /* @__PURE__ */ _jsxQ("div", {
    ref: dialogRef
  }, {
    class: _fnSignal((p0) => `dialog-content dialog-${p0.size ?? "medium"}`, [
      props
    ], '`dialog-content dialog-${p0.size??"medium"}`'),
    tabIndex: -1,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": _fnSignal((p0) => p0.title ? "dialog-title" : void 0, [
      props
    ], 'p0.title?"dialog-title":undefined')
  }, [
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "dialog-header"
    }, [
      props.title && /* @__PURE__ */ _jsxQ("h2", null, {
        id: "dialog-title"
      }, _fnSignal((p0) => p0.title, [
        props
      ], "p0.title"), 3, "cx_0"),
      /* @__PURE__ */ _jsxQ("button", null, {
        class: "dialog-close",
        "aria-label": "Close dialog",
        onClick$: handleClose
      }, "×", 3, null)
    ], 1, null),
    /* @__PURE__ */ _jsxQ("div", null, {
      class: "dialog-body"
    }, /* @__PURE__ */ _jsxC(Slot, null, 3, "cx_1"), 1, null)
  ], 1, null), 1, "cx_2");
}, "s_s2c0eHBzgXA");
const Dialog = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_s2c0eHBzgXA, "s_s2c0eHBzgXA"));
const s_qFWf5RhlL7U = /* @__PURE__ */ __name((event) => {
  const [filteredProjects, selectedFilter] = useLexicalScope();
  const filterValue = event.target.value;
  selectedFilter.value = filterValue;
  if (filterValue === "all") filteredProjects.value = [
    ...projects
  ];
  else filteredProjects.value = projects.filter((project) => {
    switch (filterValue) {
      case "visualization":
        return project.type.toLowerCase().includes("visualization");
      case "tool":
        return project.type.toLowerCase().includes("tool");
      case "email":
        return project.type.toLowerCase().includes("email");
      default:
        return true;
    }
  });
}, "s_qFWf5RhlL7U");
const s_zE0QQuYrlX4 = /* @__PURE__ */ __name(() => {
  gsap.to("section.intro", {
    "--bg-scale": 1,
    "--bg-opacity": 0.1,
    duration: 0.5
  });
}, "s_zE0QQuYrlX4");
const s_B0lqk5IDDy4 = /* @__PURE__ */ __name(() => {
  const filteredProjects = useSignal([
    ...projects
  ]);
  const selectedFilter = useSignal("all");
  const isDialogOpen = useSignal(false);
  const handleFilterChange = /* @__PURE__ */ inlinedQrl(s_qFWf5RhlL7U, "s_qFWf5RhlL7U", [
    filteredProjects,
    selectedFilter
  ]);
  useOnWindow("load", /* @__PURE__ */ inlinedQrl(s_zE0QQuYrlX4, "s_zE0QQuYrlX4"));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: [
      /* @__PURE__ */ _jsxQ("main", null, null, [
        /* @__PURE__ */ _jsxQ("section", null, {
          class: "intro"
        }, /* @__PURE__ */ _jsxQ("div", null, {
          class: "content-text"
        }, [
          /* @__PURE__ */ _jsxQ("h1", null, null, [
            "Nelson Correia ",
            /* @__PURE__ */ _jsxQ("small", null, null, "Web Developer committed to performance & inclusion", 3, null)
          ], 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, "I transform ideas into pixel-perfect, user-focused applications by crafting modern, performant web experiences with Svelte, TypeScript, and cutting-edge frameworks.", 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, "Let's build something exceptional together.", 3, null)
        ], 3, null), 3, null),
        /* @__PURE__ */ _jsxQ("section", null, {
          class: "about"
        }, [
          /* @__PURE__ */ _jsxQ("h2", null, null, [
            /* @__PURE__ */ _jsxQ("span", null, {
              class: "material-symbols-outlined"
            }, "info", 3, null),
            "About Me"
          ], 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, [
            "I'm a passionate web developer with over 10 years of experience in creating engaging and efficient web applications and digital touch points. My expertise lies in ",
            /* @__PURE__ */ _jsxQ("abbr", null, {
              title: "Hypertext Markup Language"
            }, "HTML", 3, null),
            ", ",
            /* @__PURE__ */ _jsxQ("abbr", null, {
              title: "Cascading Stylesheets"
            }, "CSS", 3, null),
            ", JavaScript, and modern web technologies, allowing me to deliver high-quality solutions that meet both user needs and business goals."
          ], 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, "I thrive in collaborative environments, working closely with designers, back-end developers, and stakeholders to bring projects to life. My commitment to clean code, performance optimization, and accessibility ensures that every project I work on is not only visually appealing but also functional and inclusive.", 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, "When I'm not coding, I enjoy exploring the latest trends in web development.", 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, "Outside of coding, I enjoy quality family time and nurturing my kids' love for learning - skateboarding, playing instruments, and traveling.", 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, "Feel free to check out my portfolio and get in touch for any exciting opportunities!", 3, null)
        ], 3, null),
        /* @__PURE__ */ _jsxQ("section", null, {
          class: "projects"
        }, [
          /* @__PURE__ */ _jsxQ("h2", null, null, "What I've Built", 3, null),
          /* @__PURE__ */ _jsxQ("form", null, {
            action: ""
          }, /* @__PURE__ */ _jsxQ("fieldset", null, null, [
            /* @__PURE__ */ _jsxQ("legend", null, null, "Filter Projects", 3, null),
            /* @__PURE__ */ _jsxQ("label", null, {
              for: "projectFilter"
            }, "Select Category", 3, null),
            /* @__PURE__ */ _jsxQ("select", null, {
              name: "projectFilter",
              id: "projectFilter",
              value: _fnSignal((p0) => p0.value, [
                selectedFilter
              ], "p0.value"),
              onChange$: handleFilterChange
            }, [
              /* @__PURE__ */ _jsxQ("option", null, {
                value: "all"
              }, `All Projects (${projects.length})`, 3, null),
              /* @__PURE__ */ _jsxQ("option", null, {
                value: "visualization"
              }, "Data Visualizations", 3, null),
              /* @__PURE__ */ _jsxQ("option", null, {
                value: "tool"
              }, "Interactive Tools", 3, null),
              /* @__PURE__ */ _jsxQ("option", null, {
                value: "email"
              }, "Email/Newsletters", 3, null)
            ], 3, null)
          ], 3, null), 3, null),
          /* @__PURE__ */ _jsxC(ProjectList, {
            get projects() {
              return filteredProjects.value;
            },
            [_IMMUTABLE]: {
              projects: _fnSignal((p0) => p0.value, [
                filteredProjects
              ], "p0.value")
            }
          }, 3, selectedFilter.value)
        ], 1, null),
        /* @__PURE__ */ _jsxQ("section", null, null, [
          /* @__PURE__ */ _jsxQ("h2", null, null, "Skills & Technologies", 3, null),
          /* @__PURE__ */ _jsxQ("ul", null, null, [
            /* @__PURE__ */ _jsxQ("li", null, null, [
              "JavaScript (",
              /* @__PURE__ */ _jsxQ("abbr", null, {
                title: "Ecmascript 6"
              }, "ES6", 3, null),
              "+), TypeScript"
            ], 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Svelte, SvelteKit", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, [
              "HTML, CSS, ",
              /* @__PURE__ */ _jsxQ("abbr", null, {
                title: "Sassy Cascading Stylesheets"
              }, "SCSS", 3, null),
              ", ",
              /* @__PURE__ */ _jsxQ("abbr", null, {
                title: "Scalable Vector Graphics"
              }, "SVG", 3, null)
            ], 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Tailwind, Stylus", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Node", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "NPM, Yarn, Bun", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Responsive Design & Mobile-First Development", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Version Control (Git)", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, [
              "Performance Optimization & ",
              /* @__PURE__ */ _jsxQ("abbr", null, {
                title: "Search Engine Optimization"
              }, "SEO", 3, null),
              " Best Practices"
            ], 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Cross-Browser Compatibility", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, [
              "Accessibility (",
              /* @__PURE__ */ _jsxQ("abbr", null, {
                title: "Web Content Accessibility Guidelines"
              }, "WCAG", 3, null),
              ")"
            ], 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Jira and Agile & Scrum Methodologies", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, [
              /* @__PURE__ */ _jsxQ("abbr", null, {
                title: "Content Management Systems"
              }, "CMS", 3, null),
              " (WordPress, Wix, ",
              /* @__PURE__ */ _jsxQ("abbr", null, {
                title: "Adobe Experience Manager"
              }, "AEM", 3, null),
              ")"
            ], 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Build Tools (Vite, Webpack)", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Design Tools (Figma, Adobe Creative Cloud)", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, [
              /* @__PURE__ */ _jsxQ("abbr", null, {
                title: "Artificial Intelligence"
              }, "AI", 3, null),
              " agents and prompts"
            ], 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Google Analytics/Tag Manager", 3, null)
          ], 3, null)
        ], 3, null),
        /* @__PURE__ */ _jsxQ("section", null, {
          class: "contact"
        }, [
          /* @__PURE__ */ _jsxQ("h2", null, null, "Get In Touch", 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, [
            "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me at ",
            /* @__PURE__ */ _jsxQ("a", null, {
              href: "mailto:nelson.ncdesigns@gmail.com"
            }, "nelson.ncdesigns@gmail.com", 3, null),
            "."
          ], 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, /* @__PURE__ */ _jsxQ("button", null, {
            style: {
              padding: "0.75rem 1.5rem",
              backgroundColor: "var(--primary-color)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.2s"
            },
            onClick$: /* @__PURE__ */ _noopQrl("s_e0fU40Sf0FI", [
              isDialogOpen
            ])
          }, "Open Dialog Demo", 3, null), 3, null)
        ], 3, null)
      ], 1, null),
      /* @__PURE__ */ _jsxC(Dialog, {
        isOpen: isDialogOpen,
        title: "Dialog Component Demo",
        size: "medium",
        children: [
          /* @__PURE__ */ _jsxQ("p", null, null, "This is a demonstration of the Dialog component!", 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, "The dialog supports:", 3, null),
          /* @__PURE__ */ _jsxQ("ul", null, null, [
            /* @__PURE__ */ _jsxQ("li", null, null, "Different sizes (small, medium, large)", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Keyboard navigation (press ESC to close)", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Backdrop click to close", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Focus trapping for accessibility", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Smooth animations", 3, null),
            /* @__PURE__ */ _jsxQ("li", null, null, "Mobile-responsive design", 3, null)
          ], 3, null),
          /* @__PURE__ */ _jsxQ("p", null, null, [
            "Try pressing the ",
            /* @__PURE__ */ _jsxQ("kbd", null, null, "ESC", 3, null),
            " key or clicking outside the dialog to close it."
          ], 3, null)
        ],
        [_IMMUTABLE]: {
          isOpen: _IMMUTABLE,
          title: _IMMUTABLE,
          size: _IMMUTABLE
        }
      }, 3, "i8_0")
    ]
  }, 1, "i8_1");
}, "s_B0lqk5IDDy4");
const index = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_B0lqk5IDDy4, "s_B0lqk5IDDy4"));
const IndexRoute = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const serverPlugins = [];
const Layout = /* @__PURE__ */ __name(() => Layout_, "Layout");
const routes = [
  ["/", [Layout, () => IndexRoute], "/", ["q-CMnMIswv.js", "q-BLpZBQBB.js"]]
];
const menus = [];
const trailingSlash = true;
const basePathname = "/";
const cacheModules = true;
const _qwikCityPlan = { routes, serverPlugins, menus, trailingSlash, basePathname, cacheModules };
export {
  basePathname,
  cacheModules,
  _qwikCityPlan as default,
  menus,
  routes,
  serverPlugins,
  trailingSlash
};
