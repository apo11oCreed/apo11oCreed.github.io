var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { c as componentQrl, i as inlinedQrl, _ as _jsxC, S as Slot, F as Fragment, u as useStylesScopedQrl, a as _jsxQ, b as _fnSignal, d as useSignal, e as useVisibleTaskQrl, f as _jsxBranch, g as _IMMUTABLE, h as _wrapSignal, j as _noopQrl, k as _wrapProp, l as useOnWindow, m as useLexicalScope } from "./q-B1zVdy5g.js";
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
    caption: "Screenshot of a responsive D3 animated bar chart",
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
      "Scrollama",
      "Figma"
    ],
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
    stack: [
      "NPM",
      "Webpack",
      "SCSS",
      "D3.js",
      "Figma"
    ],
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
    stack: [
      "Yarn",
      "Vite",
      "Tailwind CSS",
      "Figma"
    ],
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
    stack: [
      "Yarn",
      "MJML",
      "HTL",
      "Java",
      "JSP",
      "Figma"
    ],
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
    stack: [
      "PHP",
      "JavaScript",
      "CSS",
      "WordPress"
    ],
    img: "wordpress-custom-multisite.png",
    imgAlt: "",
    type: "website"
  },
  {
    name: "WordPress Custom Theme - Single Site",
    caption: "Screenshot of the Doctors' Management Service homepage with navigation, hero, and social media feeds",
    description: "Developed a custom WordPress single site theme using PHP, JavaScript, and CSS. Implemented intuitive authoring systems and optimized the theme for performance and SEO.",
    credit: "Project completed while serving as Contractor at Doctors' Management Service, Inc.",
    url: "https://www.doctorsmanagementservice.org/",
    stack: [
      "PHP",
      "JavaScript",
      "SCSS",
      "WordPress"
    ],
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
    stack: [
      "HTML",
      "CSS",
      "Adobe Creative Cloud"
    ],
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
    stack: [
      "HTML",
      "Javascript",
      "CSS",
      "Google Analytics",
      "Google Tag Manager",
      "Google Search Console",
      "Push Notifications",
      "Bootstrap"
    ],
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
    stack: [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    img: "interactive-app-tool-4",
    imgAlt: "",
    type: "tool"
  }
];
const fullscreenImage = {
  _value: null,
  get value() {
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
  }
};
const light = "_light_1swmi_36";
const dark = "_dark_1swmi_40";
const styles$2 = {
  light,
  dark
};
const s_x6WdtBlWzbQ = /* @__PURE__ */ __name((props) => {
  const Tag = `h${props.level ?? 1}`;
  const className = props.mode === "dark" ? styles$2.dark : props.mode === "light" ? styles$2.light : void 0;
  return /* @__PURE__ */ _jsxC(Tag, {
    class: className,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "k0_0")
  }, 1, "k0_1");
}, "s_x6WdtBlWzbQ");
const Heading = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_x6WdtBlWzbQ, "s_x6WdtBlWzbQ"));
const styles$1 = "figure {\n  margin: 1rem 0;\n}\nfigure img {\n  max-width: 100%;\n  height: auto;\n}\nfigure figcaption {\n  font-size: 0.875rem;\n  margin-top: 0.5rem;\n  font-style: italic;\n}";
const s_J7ZNxRct8Vk = /* @__PURE__ */ __name((props) => {
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(styles$1, "s_rYfmEGob0gQ"));
  return /* @__PURE__ */ _jsxQ("figure", null, {
    itemScope: true,
    itemType: "https://schema.org/ImageObject"
  }, [
    /* @__PURE__ */ _jsxC(Slot, null, 3, "tY_0"),
    props.caption && /* @__PURE__ */ _jsxQ("figcaption", null, {
      itemProp: "caption"
    }, [
      _fnSignal((p0) => p0.caption, [
        props
      ], "p0.caption"),
      props.author && /* @__PURE__ */ _jsxQ("span", null, {
        itemProp: "author",
        itemScope: true,
        itemType: "https://schema.org/Person"
      }, /* @__PURE__ */ _jsxQ("meta", null, {
        itemProp: "name",
        content: _fnSignal((p0) => p0.author, [
          props
        ], "p0.author")
      }, null, 3, null), 3, "tY_1")
    ], 1, "tY_2"),
    props.contentUrl && /* @__PURE__ */ _jsxQ("span", null, {
      itemProp: "contentUrl",
      style: {
        display: "none"
      }
    }, _fnSignal((p0) => p0.contentUrl, [
      props
    ], "p0.contentUrl"), 3, "tY_3")
  ], 1, "tY_4");
}, "s_J7ZNxRct8Vk");
const Figure = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_J7ZNxRct8Vk, "s_J7ZNxRct8Vk"));
const projectList = "_projectList_1dpd3_1";
const imgWrapper = "_imgWrapper_1dpd3_69";
const techStack = "_techStack_1dpd3_93";
const fullscreenOverlay = "_fullscreenOverlay_1dpd3_118";
const closeButton = "_closeButton_1dpd3_144";
const styles = {
  projectList,
  imgWrapper,
  techStack,
  fullscreenOverlay,
  closeButton
};
const srcSet$8 = "/assets/interactive-app-visualization-2.webp 200w, /assets/interactive-app-visualization-22.webp 400w, /assets/interactive-app-visualization-23.webp 600w, /assets/interactive-app-visualization-24.webp 800w, /assets/interactive-app-visualization-25.webp 1200w";
const width$8 = 1200;
const height$8 = 800;
const PROPS$8 = { srcSet: srcSet$8, width: width$8, height: height$8 };
function InteractiveAppVisualization1(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$8, void 0, 3, key, dev);
}
__name(InteractiveAppVisualization1, "InteractiveAppVisualization1");
const srcSet$7 = "/assets/interactive-app-tool-3.webp 200w, /assets/interactive-app-tool-32.webp 400w, /assets/interactive-app-tool-33.webp 600w, /assets/interactive-app-tool-34.webp 800w, /assets/interactive-app-tool-35.webp 1200w";
const width$7 = 1200;
const height$7 = 800;
const PROPS$7 = { srcSet: srcSet$7, width: width$7, height: height$7 };
function InteractiveAppTool3(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$7, void 0, 3, key, dev);
}
__name(InteractiveAppTool3, "InteractiveAppTool3");
const srcSet$6 = "/assets/interactive-app-visualization-1.webp 200w, /assets/interactive-app-visualization-12.webp 400w, /assets/interactive-app-visualization-13.webp 600w, /assets/interactive-app-visualization-14.webp 800w, /assets/interactive-app-visualization-15.webp 1200w";
const width$6 = 1200;
const height$6 = 800;
const PROPS$6 = { srcSet: srcSet$6, width: width$6, height: height$6 };
function InteractiveAppVisualization3(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$6, void 0, 3, key, dev);
}
__name(InteractiveAppVisualization3, "InteractiveAppVisualization3");
const srcSet$5 = "/assets/campaigns-newsletter-1.webp 200w, /assets/campaigns-newsletter-12.webp 400w, /assets/campaigns-newsletter-13.webp 600w, /assets/campaigns-newsletter-14.webp 800w, /assets/campaigns-newsletter-15.webp 1200w";
const width$5 = 1200;
const height$5 = 800;
const PROPS$5 = { srcSet: srcSet$5, width: width$5, height: height$5 };
function CampaignsNewsletter1(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$5, void 0, 3, key, dev);
}
__name(CampaignsNewsletter1, "CampaignsNewsletter1");
const srcSet$4 = "/assets/wordpress-custom-multisite.webp 200w, /assets/wordpress-custom-multisite2.webp 400w, /assets/wordpress-custom-multisite3.webp 600w, /assets/wordpress-custom-multisite4.webp 800w, /assets/wordpress-custom-multisite5.webp 1200w";
const width$4 = 1200;
const height$4 = 800;
const PROPS$4 = { srcSet: srcSet$4, width: width$4, height: height$4 };
function WordPressCustomMultisite(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$4, void 0, 3, key, dev);
}
__name(WordPressCustomMultisite, "WordPressCustomMultisite");
const srcSet$3 = "/assets/wordpress-custom.webp 200w, /assets/wordpress-custom2.webp 400w, /assets/wordpress-custom3.webp 600w, /assets/wordpress-custom4.webp 800w, /assets/wordpress-custom5.webp 1200w";
const width$3 = 1200;
const height$3 = 800;
const PROPS$3 = { srcSet: srcSet$3, width: width$3, height: height$3 };
function WordPressCustom(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$3, void 0, 3, key, dev);
}
__name(WordPressCustom, "WordPressCustom");
const srcSet$2 = "/assets/campaign-marketing-email-1.webp 200w, /assets/campaign-marketing-email-12.webp 400w, /assets/campaign-marketing-email-14.webp 600w, /assets/campaign-marketing-email-13.webp 800w, /assets/campaign-marketing-email-15.webp 1200w";
const width$2 = 1200;
const height$2 = 800;
const PROPS$2 = { srcSet: srcSet$2, width: width$2, height: height$2 };
function CampaignsMarketingEmail1(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$2, void 0, 3, key, dev);
}
__name(CampaignsMarketingEmail1, "CampaignsMarketingEmail1");
const srcSet$1 = "/assets/enterprise-ecom-1.webp 200w, /assets/enterprise-ecom-12.webp 400w, /assets/enterprise-ecom-13.webp 600w, /assets/enterprise-ecom-14.webp 800w, /assets/enterprise-ecom-15.webp 1200w";
const width$1 = 1200;
const height$1 = 800;
const PROPS$1 = { srcSet: srcSet$1, width: width$1, height: height$1 };
function EnterpriseEcom1(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS$1, void 0, 3, key, dev);
}
__name(EnterpriseEcom1, "EnterpriseEcom1");
const srcSet = "/assets/interactive-app-tool-4.webp 200w, /assets/interactive-app-tool-42.webp 400w, /assets/interactive-app-tool-43.webp 600w, /assets/interactive-app-tool-44.webp 800w, /assets/interactive-app-tool-45.webp 1200w";
const width = 1200;
const height = 800;
const PROPS = { srcSet, width, height };
function InteractiveAppTool4(props, key, _, dev) {
  return _jsxQ("img", { ...{ decoding: "async", loading: "lazy" }, ...props }, PROPS, void 0, 3, key, dev);
}
__name(InteractiveAppTool4, "InteractiveAppTool4");
const InteractiveAppVisualization1Url = "/assets/interactive-app-visualization-2.png";
const InteractiveAppTool3Url = "/assets/interactive-app-tool-3.png";
const InteractiveAppVisualization3Url = "/assets/interactive-app-visualization-1.png";
const CampaignsNewsletter1Url = "/assets/campaigns-newsletter-1.png";
const WordPressCustomMultisiteUrl = "/assets/wordpress-custom-multisite.png";
const WordPressCustomUrl = "/assets/wordpress-custom.png";
const CampaignsMarketingEmail1Url = "/assets/campaign-marketing-email-1.png";
const EnterpriseEcom1Url = "/assets/enterprise-ecom-1.png";
const InteractiveAppTool4Url = "/assets/interactive-app-tool-4.png";
const imageMap = {
  "interactive-app-visualization-2.png": InteractiveAppVisualization1,
  "interactive-app-tool-3.png": InteractiveAppTool3,
  "interactive-app-visualization-1.png": InteractiveAppVisualization3,
  "campaigns-newsletter-1.png": CampaignsNewsletter1,
  "wordpress-custom-multisite.png": WordPressCustomMultisite,
  "wordpress-custom.png": WordPressCustom,
  "campaign-marketing-email-1": CampaignsMarketingEmail1,
  "enterprise-ecom-1": EnterpriseEcom1,
  "interactive-app-tool-4": InteractiveAppTool4
};
const imageUrlMap = {
  "interactive-app-visualization-2.png": InteractiveAppVisualization1Url,
  "interactive-app-tool-3.png": InteractiveAppTool3Url,
  "interactive-app-visualization-1.png": InteractiveAppVisualization3Url,
  "campaigns-newsletter-1.png": CampaignsNewsletter1Url,
  "wordpress-custom-multisite.png": WordPressCustomMultisiteUrl,
  "wordpress-custom.png": WordPressCustomUrl,
  "campaign-marketing-email-1": CampaignsMarketingEmail1Url,
  "enterprise-ecom-1": EnterpriseEcom1Url,
  "interactive-app-tool-4": InteractiveAppTool4Url
};
const getFullImageUrl = /* @__PURE__ */ __name((filename) => {
  const processedUrl = imageUrlMap[filename];
  if (!processedUrl) return "";
  if (processedUrl.startsWith("/")) {
    const processedPath = processedUrl.replace(".png", "5.webp");
    const origin = typeof window !== "undefined" ? window.location.origin : "https://ncdesigns-studio.com";
    return `${origin}${processedPath}`;
  }
  return processedUrl;
}, "getFullImageUrl");
const s_E9WxFoX5Yz0 = /* @__PURE__ */ __name(() => {
  fullscreenImage.value = null;
}, "s_E9WxFoX5Yz0");
const s_W1MswfbHEcE = /* @__PURE__ */ __name((props) => {
  const dialogRef = useSignal();
  useVisibleTaskQrl(/* @__PURE__ */ _noopQrl("s_vMhWtdeCuEM", [
    dialogRef
  ]));
  const closeFullscreen$ = /* @__PURE__ */ inlinedQrl(s_E9WxFoX5Yz0, "s_E9WxFoX5Yz0");
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: [
      /* @__PURE__ */ _jsxQ("ul", null, {
        class: styles.projectList
      }, props.projects.map((project, index2) => {
        _jsxBranch();
        const ImageComponent = project.img ? imageMap[project.img] : null;
        const imgAlt = project.imgAlt || project.name;
        const projectUrl = project.url ? project.url : "#";
        return /* @__PURE__ */ _jsxQ("li", null, null, [
          /* @__PURE__ */ _jsxC(Heading, {
            level: 3,
            children: /* @__PURE__ */ _jsxQ("a", {
              href: projectUrl
            }, {
              target: "_blank",
              rel: "noopener noreferrer"
            }, _wrapSignal(project, "name"), 1, null),
            [_IMMUTABLE]: {
              level: _IMMUTABLE
            }
          }, 1, "0C_0"),
          ImageComponent && /* @__PURE__ */ _jsxQ("div", null, {
            class: styles.imgWrapper
          }, [
            /* @__PURE__ */ _jsxQ("button", {
              onClick$: /* @__PURE__ */ _noopQrl("s_gB0TOBia13g", [
                project
              ])
            }, {
              class: "material-symbols-outlined"
            }, "open_in_full", 2, null),
            /* @__PURE__ */ _jsxC(Figure, {
              get caption() {
                return project.caption;
              },
              contentUrl: getFullImageUrl(project.img || ""),
              author: "Nelson Correia",
              children: /* @__PURE__ */ _jsxC(ImageComponent, {
                alt: imgAlt,
                style: {
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  objectPosition: "0"
                },
                itemProp: "image",
                [_IMMUTABLE]: {
                  style: _IMMUTABLE,
                  itemProp: _IMMUTABLE
                }
              }, 3, "0C_1"),
              [_IMMUTABLE]: {
                caption: _wrapProp(project, "caption"),
                author: _IMMUTABLE
              }
            }, 1, "0C_2")
          ], 1, "0C_3"),
          /* @__PURE__ */ _jsxQ("p", null, null, _wrapSignal(project, "description"), 1, null),
          /* @__PURE__ */ _jsxQ("p", null, null, /* @__PURE__ */ _jsxQ("small", null, null, /* @__PURE__ */ _jsxQ("em", null, null, _wrapSignal(project, "credit"), 1, null), 1, null), 1, null),
          /* @__PURE__ */ _jsxC(Heading, {
            level: 4,
            children: "Technologies Used:",
            [_IMMUTABLE]: {
              level: _IMMUTABLE
            }
          }, 3, "0C_4"),
          /* @__PURE__ */ _jsxQ("ul", null, {
            class: styles.techStack
          }, project.stack.map((tech) => /* @__PURE__ */ _jsxQ("li", null, null, tech, 1, tech)), 1, null)
        ], 1, `${project.name}-${index2}`);
      }), 1, null),
      /* @__PURE__ */ _jsxQ("dialog", {
        ref: dialogRef
      }, {
        class: styles.fullscreenOverlay,
        onClick$: closeFullscreen$
      }, [
        /* @__PURE__ */ _jsxQ("button", null, {
          class: `${styles.closeButton} material-symbols-outlined`,
          onClick$: closeFullscreen$
        }, "close", 3, null),
        fullscreenImage.value && (() => {
          _jsxBranch();
          const FullscreenImageComponent = imageMap[fullscreenImage.value];
          const project = props.projects.find((p) => p.img === fullscreenImage.value);
          return FullscreenImageComponent ? /* @__PURE__ */ _jsxC(FullscreenImageComponent, {
            alt: project?.name || "",
            style: {
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            },
            [_IMMUTABLE]: {
              style: _IMMUTABLE
            }
          }, 3, "0C_5") : null;
        })()
      ], 1, null)
    ]
  }, 1, "0C_6");
}, "s_W1MswfbHEcE");
const ProjectList = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_W1MswfbHEcE, "s_W1MswfbHEcE"));
const s_qFWf5RhlL7U = /* @__PURE__ */ __name((event) => {
  const [filteredProjects, selectedFilter] = useLexicalScope();
  const filterValue = event.target.value;
  selectedFilter.value = filterValue;
  if (typeof window !== "undefined" && window.dataLayer) window.dataLayer.push({
    "event": "projectFilterChange",
    "projectFilter": filterValue,
    "projectFilterLabel": event.target.options[event.target.selectedIndex].text
  });
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
      case "website":
        return project.type.toLowerCase().includes("website");
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
  const handleFilterChange = /* @__PURE__ */ inlinedQrl(s_qFWf5RhlL7U, "s_qFWf5RhlL7U", [
    filteredProjects,
    selectedFilter
  ]);
  useOnWindow("load", /* @__PURE__ */ inlinedQrl(s_zE0QQuYrlX4, "s_zE0QQuYrlX4"));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxQ("main", null, null, [
      /* @__PURE__ */ _jsxQ("section", null, {
        class: "intro"
      }, /* @__PURE__ */ _jsxQ("div", null, {
        class: "content-text"
      }, [
        /* @__PURE__ */ _jsxC(Heading, {
          level: 1,
          children: [
            "Nelson Correia ",
            /* @__PURE__ */ _jsxQ("small", null, null, "Web Developer committed to performance & inclusion", 3, null)
          ],
          [_IMMUTABLE]: {
            level: _IMMUTABLE
          }
        }, 3, "i8_0"),
        /* @__PURE__ */ _jsxQ("p", null, null, "I transform ideas into pixel-perfect, user-focused applications by crafting modern, performant web experiences with Svelte, TypeScript, and cutting-edge frameworks.", 3, null),
        /* @__PURE__ */ _jsxQ("p", null, null, "Let's build something exceptional together.", 3, null)
      ], 1, null), 1, null),
      /* @__PURE__ */ _jsxQ("section", null, {
        class: "about"
      }, [
        /* @__PURE__ */ _jsxC(Heading, {
          level: 2,
          children: [
            /* @__PURE__ */ _jsxQ("span", null, {
              class: "material-symbols-outlined"
            }, "info", 3, null),
            "About Me"
          ],
          [_IMMUTABLE]: {
            level: _IMMUTABLE
          }
        }, 3, "i8_1"),
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
      ], 1, null),
      /* @__PURE__ */ _jsxQ("section", null, {
        class: "projects"
      }, [
        /* @__PURE__ */ _jsxC(Heading, {
          level: 2,
          children: "What I've Built",
          [_IMMUTABLE]: {
            level: _IMMUTABLE
          }
        }, 3, "i8_2"),
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
            "value": selectedFilter,
            onChange$: handleFilterChange,
            "onInput$": /* @__PURE__ */ _noopQrl("s_K8WWiqZ1Wdw", [
              selectedFilter
            ])
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
            }, "Email/Newsletters", 3, null),
            /* @__PURE__ */ _jsxQ("option", null, {
              value: "website"
            }, "Websites", 3, null)
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
        /* @__PURE__ */ _jsxC(Heading, {
          level: 2,
          children: "Skills & Technologies",
          [_IMMUTABLE]: {
            level: _IMMUTABLE
          }
        }, 3, "i8_3"),
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
      ], 1, null),
      /* @__PURE__ */ _jsxQ("section", null, {
        class: "contact"
      }, [
        /* @__PURE__ */ _jsxC(Heading, {
          level: 2,
          children: "Get In Touch",
          [_IMMUTABLE]: {
            level: _IMMUTABLE
          }
        }, 3, "i8_4"),
        /* @__PURE__ */ _jsxQ("p", null, null, [
          "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me at ",
          /* @__PURE__ */ _jsxQ("a", null, {
            href: "mailto:nelson.ncdesigns@gmail.com"
          }, "nelson.ncdesigns@gmail.com", 3, null),
          "."
        ], 3, null)
      ], 1, null)
    ], 1, null)
  }, 1, "i8_5");
}, "s_B0lqk5IDDy4");
const index = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_B0lqk5IDDy4, "s_B0lqk5IDDy4"));
const IndexRoute = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const serverPlugins = [];
const Layout = /* @__PURE__ */ __name(() => Layout_, "Layout");
const routes = [
  ["/", [Layout, () => IndexRoute], "/", ["q-DLo3Jnic.js", "q-BtZ_YLSW.js"]]
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
