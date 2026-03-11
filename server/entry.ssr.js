var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { n as jsx, o as _renderSSR, s as setPlatform, p as _pauseFromContexts, F as Fragment, q as getPlatform, c as componentQrl, i as inlinedQrl, r as useContext, t as useServerData, f as _jsxBranch, _ as _jsxC, a as _jsxQ, v as _qrlSync, w as eventQrl, x as SkipRender, y as useStylesQrl, z as noSerialize, A as useStore, B as _weakSerialize, d as useSignal, C as useContextProvider, D as useTaskQrl, S as Slot, E as createContextId, j as _noopQrl, m as useLexicalScope, G as getLocale, H as withLocale, b as _fnSignal, I as _jsxS } from "./q-B1zVdy5g.js";
const manifest = { "manifestHash": "8b0xdd", "core": "q-DEKTz2-y.js", "preloader": "q-BpC6Ohyo.js", "qwikLoader": "q-DqxTHXD-.js", "bundleGraphAsset": "assets/bundle-graph-Csur4z6n.json", "injections": [{ "tag": "style", "location": "head", "attributes": { "data-src": "/assets/style-CWTHKhVs.css", "dangerouslySetInnerHTML": '@import "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=close,info,open_in_full";\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: "Ubuntu", sans-serif;\n  line-height: 1.1;\n  padding-top: 0.5em;\n  margin: 1em 0 0.5em;\n  font-weight: 500;\n}\nh1 {\n  font-size: 2rem;\n}\nh1 small {\n  font-weight: 300;\n  display: block;\n}\nh2 {\n  font-size: 1.5rem;\n}\nh3 {\n  font-size: 1.125rem;\n}\nh4 {\n  font-size: 0.875rem;\n}\n._light_1swmi_36 {\n  color: #25408f;\n}\n._dark_1swmi_40 {\n  color: #e0e0e0;\n}\n._projectList_1dpd3_1 {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n._projectList_1dpd3_1 > li {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: var(--background-color-figure);\n  border-radius: 8px;\n  border: 1px solid #ddd;\n}\n._projectList_1dpd3_1 li h3 {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  color: var(--primary-color);\n}\n._projectList_1dpd3_1 li h3 a {\n  text-decoration: none;\n  color: inherit;\n}\n._projectList_1dpd3_1 li h3 a:hover {\n  text-decoration: underline;\n}\n._projectList_1dpd3_1 li img {\n  display: block;\n  margin: 1rem 0;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n._projectList_1dpd3_1 li p {\n  margin-bottom: 0.8rem;\n  line-height: 1.6;\n}\n._projectList_1dpd3_1 :where(figcaption, em) {\n  display: inline-block;\n  line-height: 1.4;\n}\n._projectList_1dpd3_1 li p:has(small) {\n  position: relative;\n  padding-left: 2rem;\n}\n._projectList_1dpd3_1 li p:has(small):before {\n  content: "";\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-left: 1px solid oklch(from var(--primary-color) calc(l + 0.1) c h);\n  margin-left: 1rem;\n}\n._projectList_1dpd3_1 li em {\n  color: var(--primary-color);\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n._imgWrapper_1dpd3_69 {\n  position: relative;\n  display: inline-block;\n}\n._imgWrapper_1dpd3_69 > button {\n  display: none;\n  font-weight: 700;\n  position: absolute;\n  top: 2rem;\n  right: 1rem;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: var(--primary-color);\n  transition: background 0.3s;\n  background: var(--background-color-figure);\n}\n@media (width < 480px) {\n  ._imgWrapper_1dpd3_69 > button {\n    display: block;\n  }\n}\n._techStack_1dpd3_93 {\n  list-style: none;\n  padding: 0;\n  margin: 1rem 0 0 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n._techStack_1dpd3_93 li {\n  background: var(--secondary-color);\n  padding: 0.3rem 0.6rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  margin: 0;\n  border: none;\n  color: var(--text-color);\n}\n@media (prefers-color-scheme: dark) {\n  ._techStack_1dpd3_93 li {\n    --text-color: #000;\n  }\n}\n._fullscreenOverlay_1dpd3_118 {\n  border: none;\n  padding: 0;\n  max-width: 100vw;\n  max-height: 100vh;\n  background: rgba(0, 0, 0, 0.95);\n  touch-action: manipulation;\n}\n._fullscreenOverlay_1dpd3_118::backdrop {\n  background: rgba(0, 0, 0, 0.8);\n}\n._fullscreenOverlay_1dpd3_118[open] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n._fullscreenOverlay_1dpd3_118 img {\n  max-width: 95%;\n  max-height: 95%;\n  object-fit: contain;\n  touch-action: manipulation;\n}\n._closeButton_1dpd3_144 {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: none;\n  border-radius: 50%;\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10000;\n  transition: background 0.2s;\n}\n._closeButton_1dpd3_144:hover {\n  background: rgba(255, 255, 255, 1);\n}\n._closeButton_1dpd3_144 span {\n  font-size: 1.5rem;\n  color: #000;\n}\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\nmain {\n  display: block;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\npre {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\na {\n  background-color: transparent;\n}\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\nimg {\n  border-style: none;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\nbutton,\ninput {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\nprogress {\n  vertical-align: baseline;\n}\ntextarea {\n  overflow: auto;\n}\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\ndetails {\n  display: block;\n}\nsummary {\n  display: list-item;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none;\n}\n@layer base, component, utility, darkmode;\n@layer base {\n  :root {\n    --primary-color: #25408f;\n    --secondary-color: #c26f1f;\n    --background-color: #f5f5f5;\n    --text-color: #000;\n    --background-color-figure: #e9ecf4;\n    --bg-scale: 2;\n    --bg-opacity: 0;\n    --breakpoint-mobile: 768px;\n  }\n  body {\n    font-family: "Literata", serif;\n    font-optical-sizing: auto;\n    font-weight: 300;\n    font-style: normal;\n    background-color: var(--background-color);\n    color: var(--text-color);\n    line-height: 1.6;\n  }\n  p {\n    margin: 0.5em 0 1em 0;\n  }\n  section {\n    margin-bottom: 1rem;\n  }\n  main {\n    padding: 20px;\n    max-width: 75ch;\n    margin: 0 auto;\n    container-name: intro;\n    container-type: inline-size;\n  }\n  p {\n    text-wrap: pretty;\n  }\n  a {\n    color: inherit;\n  }\n  button {\n    cursor: pointer;\n    border: none;\n    background: none;\n  }\n  ::selection {\n    background-color: var(--secondary-color);\n    color: white;\n  }\n  .material-symbols-outlined {\n    font-variation-settings:\n      "FILL" 0,\n      "wght" 400,\n      "GRAD" 0,\n      "opsz" 24;\n    color: var(--primary-color);\n  }\n}\n@layer component {\n  section.intro {\n    background-color: var(--background-color-figure);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    position: relative;\n    overflow: hidden;\n  }\n  section.intro::before {\n    content: "";\n    background: url(/logo.svg) top right / auto 100% no-repeat #25408F;\n    width: 100%;\n    min-height: 100%;\n    scale: var(--bg-scale);\n    display: block;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    opacity: var(--bg-opacity);\n    overflow: hidden;\n    z-index: 0;\n  }\n  section.intro figure {\n    order: 1;\n  }\n  section.intro .content-text {\n    order: 0;\n    z-index: 1;\n  }\n  section.intro .content-text {\n    max-width: 60ch;\n  }\n  .projects fieldset {\n    border: 2px solid var(--primary-color);\n    border-radius: 8px;\n    padding: 1rem;\n    margin-bottom: 2rem;\n    background: var(--background-color-figure);\n  }\n  .projects legend {\n    font-weight: 500;\n    color: var(--primary-color);\n    padding: 0 0.5rem;\n  }\n  .projects label {\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: 500;\n  }\n  .projects select {\n    color: var(--text-color);\n    width: 100%;\n    max-width: 300px;\n    padding: 0.5rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    font-size: 1rem;\n    background: white;\n    cursor: pointer;\n  }\n  .projects select:focus {\n    outline: none;\n    border-color: var(--primary-color);\n    box-shadow: 0 0 0 2px rgba(37, 64, 143, 0.2);\n  }\n}\n@layer darkmode {\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --primary-color: #6ea0ff;\n      --secondary-color: #ffb366;\n      --background-color: #121212;\n      --text-color: #e0e0e0;\n      --background-color-figure: #1e1e1e;\n    }\n  }\n  .projects select {\n    --text-color: #000;\n  }\n}\n' } }], "mapping": { "s_gB0TOBia13g": "q-CTZqYnHm.js", "s_K8WWiqZ1Wdw": "q-Bt7GHGly.js", "s_32KLFlOO5uE": "q-Bro3g-tD.js", "s_Ysfvd0zsHZc": "q-CXxReeDt.js", "s_26Zk9LevwR4": "q-D_Gr4jvU.js", "s_35YlVmV10xA": "q-CMWDACEr.js", "s_vMhWtdeCuEM": "q-CRj8kPg9.js", "s_0vphQYqOdZI": "q-DxrS8YCY.js", "s_1raneLGffO8": "q-DndzFUcQ.js", "s_B0lqk5IDDy4": "q-Bt7GHGly.js", "s_J7ZNxRct8Vk": "q-DvrAYQdW.js", "s_MiPVFWJLcMo": "q-Bro3g-tD.js", "s_ScE8eseirUA": "q-CQsNQZpt.js", "s_VKFlAWJuVm8": "q-Bs5Uq49_.js", "s_W1MswfbHEcE": "q-CTZqYnHm.js", "s_bmV0oH7tsks": "q-C1lKfL-s.js", "s_p1yCGpFL1xE": "q-CXxReeDt.js", "s_pWsmcogutG8": "q-Dd67aIPA.js", "s_tntnak2DhJ8": "q-C5tvUbX8.js", "s_x6WdtBlWzbQ": "q-BYNaXR5g.js", "s_K4gvalEGCME": "q-CXxReeDt.js", "s_rYfmEGob0gQ": "q-DvrAYQdW.js", "s_9KRx0IOCHt8": "q-CG00oiOz.js", "s_A5SCimyrjAE": "q-B4m3fV0t.js", "s_N26RLdG0oBg": "q-CPGSO4zB.js", "s_WfTOxT4IrdA": "q-DkQ1NMT2.js", "s_0HB1p804N00": "q-DndzFUcQ.js", "s_74kvkuGdvug": "q-DndzFUcQ.js", "s_E9WxFoX5Yz0": "q-CTZqYnHm.js", "s_PmWjL2RrvZM": "q-Bro3g-tD.js", "s_US0pTyQnOdc": "q-C1lKfL-s.js", "s_aww2BzpANGM": "q-CXxReeDt.js", "s_qFWf5RhlL7U": "q-Bt7GHGly.js", "s_qGVD1Sz413o": "q-CXxReeDt.js", "s_xe8duyQ5aaU": "q-Dd67aIPA.js", "s_zE0QQuYrlX4": "q-Bt7GHGly.js", "s_zPJUEsxZLIA": "q-DndzFUcQ.js", "s_zpHcJzYZ88E": "q-Dd67aIPA.js" } };
/**
 * @license
 * @builder.io/qwik/server 1.19.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: /* @__PURE__ */ __name((a, b) => (typeof require !== "undefined" ? require : a)[b], "get")
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var SYNC_QRL = "<sync>";
function createPlatform(opts, resolvedManifest) {
  const mapper = resolvedManifest?.mapper;
  const mapperFn = opts.symbolMapper ? opts.symbolMapper : (symbolName, _chunk, parent) => {
    if (mapper) {
      const hash2 = getSymbolHash(symbolName);
      const result = mapper[hash2];
      if (!result) {
        if (hash2 === SYNC_QRL) {
          return [hash2, ""];
        }
        const isRegistered = globalThis.__qwik_reg_symbols?.has(hash2);
        if (isRegistered) {
          return [symbolName, "_"];
        }
        if (parent) {
          return [symbolName, `${parent}?qrl=${symbolName}`];
        }
        console.error("Cannot resolve symbol", symbolName, "in", mapper, parent);
      }
      return result;
    }
  };
  const serverPlatform = {
    isServer: true,
    async importSymbol(_containerEl, url, symbolName) {
      const hash2 = getSymbolHash(symbolName);
      const regSym = globalThis.__qwik_reg_symbols?.get(hash2);
      if (regSym) {
        return regSym;
      }
      let modulePath = String(url);
      if (!modulePath.endsWith(".js")) {
        modulePath += ".js";
      }
      const module = __require(modulePath);
      if (!(symbolName in module)) {
        throw new Error(`Q-ERROR: missing symbol '${symbolName}' in module '${modulePath}'.`);
      }
      return module[symbolName];
    },
    raf: /* @__PURE__ */ __name(() => {
      console.error("server can not rerender");
      return Promise.resolve();
    }, "raf"),
    nextTick: /* @__PURE__ */ __name((fn) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fn());
        });
      });
    }, "nextTick"),
    chunkForSymbol(symbolName, _chunk, parent) {
      return mapperFn(symbolName, mapper, parent);
    }
  };
  return serverPlatform;
}
__name(createPlatform, "createPlatform");
async function setServerPlatform(opts, manifest2) {
  const platform = createPlatform(opts, manifest2);
  setPlatform(platform);
}
__name(setServerPlatform, "setServerPlatform");
var getSymbolHash = /* @__PURE__ */ __name((symbolName) => {
  const index = symbolName.lastIndexOf("_");
  if (index > -1) {
    return symbolName.slice(index + 1);
  }
  return symbolName;
}, "getSymbolHash");
var QInstance = "q:instance";
var config = {
  $DEBUG$: false,
  $invPreloadProbability$: 0.65
};
var loadStart = Date.now();
var isJSRegex = /\.[mc]?js$/;
var BundleImportState_None = 0;
var BundleImportState_Queued = 1;
var BundleImportState_Preload = 2;
var BundleImportState_Alias = 3;
var base;
var graph;
var makeBundle = /* @__PURE__ */ __name((name, deps) => {
  return {
    $name$: name,
    $state$: isJSRegex.test(name) ? BundleImportState_None : BundleImportState_Alias,
    $deps$: shouldResetFactor ? deps?.map((d) => ({ ...d, $factor$: 1 })) : deps,
    $inverseProbability$: 1,
    $createdTs$: Date.now(),
    $waitedMs$: 0,
    $loadedMs$: 0
  };
}, "makeBundle");
var parseBundleGraph = /* @__PURE__ */ __name((serialized) => {
  const graph2 = /* @__PURE__ */ new Map();
  let i = 0;
  while (i < serialized.length) {
    const name = serialized[i++];
    const deps = [];
    let idx;
    let probability = 1;
    while (idx = serialized[i], typeof idx === "number") {
      if (idx < 0) {
        probability = -idx / 10;
      } else {
        deps.push({
          $name$: serialized[idx],
          $importProbability$: probability,
          $factor$: 1
        });
      }
      i++;
    }
    graph2.set(name, deps);
  }
  return graph2;
}, "parseBundleGraph");
var getBundle = /* @__PURE__ */ __name((name) => {
  let bundle = bundles.get(name);
  if (!bundle) {
    let deps;
    if (graph) {
      deps = graph.get(name);
      if (!deps) {
        return;
      }
      if (!deps.length) {
        deps = void 0;
      }
    }
    bundle = makeBundle(name, deps);
    bundles.set(name, bundle);
  }
  return bundle;
}, "getBundle");
var initPreloader = /* @__PURE__ */ __name((serializedBundleGraph, opts) => {
  if (opts) {
    if ("debug" in opts) {
      config.$DEBUG$ = !!opts.debug;
    }
    if (typeof opts.preloadProbability === "number") {
      config.$invPreloadProbability$ = 1 - opts.preloadProbability;
    }
  }
  if (base != null || !serializedBundleGraph) {
    return;
  }
  base = "";
  graph = parseBundleGraph(serializedBundleGraph);
}, "initPreloader");
var bundles = /* @__PURE__ */ new Map();
var shouldResetFactor;
var queueDirty;
var preloadCount = 0;
var queue = [];
var log = /* @__PURE__ */ __name((...args) => {
  console.log(
    `Preloader ${Date.now() - loadStart}ms ${preloadCount}/${queue.length} queued>`,
    ...args
  );
}, "log");
var resetQueue = /* @__PURE__ */ __name(() => {
  bundles.clear();
  queueDirty = false;
  shouldResetFactor = true;
  preloadCount = 0;
  queue.length = 0;
}, "resetQueue");
var sortQueue = /* @__PURE__ */ __name(() => {
  if (queueDirty) {
    queue.sort((a, b) => a.$inverseProbability$ - b.$inverseProbability$);
    queueDirty = false;
  }
}, "sortQueue");
var getQueue = /* @__PURE__ */ __name(() => {
  sortQueue();
  let probability = 0.4;
  const result = [];
  for (const b of queue) {
    const nextProbability = Math.round((1 - b.$inverseProbability$) * 10);
    if (nextProbability !== probability) {
      probability = nextProbability;
      result.push(probability);
    }
    result.push(b.$name$);
  }
  return result;
}, "getQueue");
var adjustProbabilities = /* @__PURE__ */ __name((bundle, newInverseProbability, seen) => {
  if (seen?.has(bundle)) {
    return;
  }
  const previousInverseProbability = bundle.$inverseProbability$;
  bundle.$inverseProbability$ = newInverseProbability;
  if (previousInverseProbability - bundle.$inverseProbability$ < 0.01) {
    return;
  }
  if (
    // don't queue until we have initialized the preloader
    base != null && bundle.$state$ < BundleImportState_Preload
  ) {
    if (bundle.$state$ === BundleImportState_None) {
      bundle.$state$ = BundleImportState_Queued;
      queue.push(bundle);
      config.$DEBUG$ && log(`queued ${Math.round((1 - bundle.$inverseProbability$) * 100)}%`, bundle.$name$);
    }
    queueDirty = true;
  }
  if (bundle.$deps$) {
    seen || (seen = /* @__PURE__ */ new Set());
    seen.add(bundle);
    const probability = 1 - bundle.$inverseProbability$;
    for (const dep of bundle.$deps$) {
      const depBundle = getBundle(dep.$name$);
      if (depBundle.$inverseProbability$ === 0) {
        continue;
      }
      let newInverseProbability2;
      if (probability === 1 || probability >= 0.99 && depsCount < 100) {
        depsCount++;
        newInverseProbability2 = Math.min(0.01, 1 - dep.$importProbability$);
      } else {
        const newInverseImportProbability = 1 - dep.$importProbability$ * probability;
        const prevAdjust = dep.$factor$;
        const factor = newInverseImportProbability / prevAdjust;
        newInverseProbability2 = Math.max(0.02, depBundle.$inverseProbability$ * factor);
        dep.$factor$ = factor;
      }
      adjustProbabilities(depBundle, newInverseProbability2, seen);
    }
  }
}, "adjustProbabilities");
var handleBundle = /* @__PURE__ */ __name((name, inverseProbability) => {
  const bundle = getBundle(name);
  if (bundle && bundle.$inverseProbability$ > inverseProbability) {
    adjustProbabilities(bundle, inverseProbability);
  }
}, "handleBundle");
var depsCount;
var preload = /* @__PURE__ */ __name((name, probability) => {
  if (!name?.length) {
    return;
  }
  depsCount = 0;
  let inverseProbability = probability ? 1 - probability : 0.4;
  if (Array.isArray(name)) {
    for (let i = name.length - 1; i >= 0; i--) {
      const item = name[i];
      if (typeof item === "number") {
        inverseProbability = 1 - item / 10;
      } else {
        handleBundle(item, inverseProbability);
      }
    }
  } else {
    handleBundle(name, inverseProbability);
  }
}, "preload");
function flattenPrefetchResources(prefetchResources) {
  const urls = [];
  const addPrefetchResource = /* @__PURE__ */ __name((prefetchResources2) => {
    if (prefetchResources2) {
      for (const prefetchResource of prefetchResources2) {
        if (!urls.includes(prefetchResource.url)) {
          urls.push(prefetchResource.url);
          if (prefetchResource.imports) {
            addPrefetchResource(prefetchResource.imports);
          }
        }
      }
    }
  }, "addPrefetchResource");
  addPrefetchResource(prefetchResources);
  return urls;
}
__name(flattenPrefetchResources, "flattenPrefetchResources");
var getBundles = /* @__PURE__ */ __name((snapshotResult) => {
  const platform = getPlatform();
  const bundles2 = snapshotResult?.qrls?.map((qrl) => {
    const symbol = qrl.$refSymbol$ || qrl.$symbol$;
    const chunk = qrl.$chunk$;
    const result = platform.chunkForSymbol(symbol, chunk, qrl.dev?.file);
    if (result) {
      return result[1];
    }
    return chunk;
  }).filter(Boolean);
  return [...new Set(bundles2)];
}, "getBundles");
function getPreloadPaths(snapshotResult, opts, resolvedManifest) {
  const prefetchStrategy = opts.prefetchStrategy;
  if (prefetchStrategy === null) {
    return [];
  }
  if (!resolvedManifest?.manifest.bundleGraph) {
    return getBundles(snapshotResult);
  }
  if (typeof prefetchStrategy?.symbolsToPrefetch === "function") {
    try {
      const prefetchResources = prefetchStrategy.symbolsToPrefetch({
        manifest: resolvedManifest.manifest
      });
      return flattenPrefetchResources(prefetchResources);
    } catch (e) {
      console.error("getPrefetchUrls, symbolsToPrefetch()", e);
    }
  }
  const symbols = /* @__PURE__ */ new Set();
  for (const qrl of snapshotResult?.qrls || []) {
    const symbol = getSymbolHash(qrl.$refSymbol$ || qrl.$symbol$);
    if (symbol && symbol.length >= 10) {
      symbols.add(symbol);
    }
  }
  return [...symbols];
}
__name(getPreloadPaths, "getPreloadPaths");
var expandBundles = /* @__PURE__ */ __name((names, resolvedManifest) => {
  if (!resolvedManifest?.manifest.bundleGraph) {
    return [...new Set(names)];
  }
  resetQueue();
  let probability = 0.99;
  for (const name of names.slice(0, 15)) {
    preload(name, probability);
    probability *= 0.85;
  }
  return getQueue();
}, "expandBundles");
var simplifyPath = /* @__PURE__ */ __name((base2, path) => {
  if (path == null) {
    return null;
  }
  const segments = `${base2}${path}`.split("/");
  const simplified = [];
  for (const segment of segments) {
    if (segment === ".." && simplified.length > 0) {
      simplified.pop();
    } else {
      simplified.push(segment);
    }
  }
  return simplified.join("/");
}, "simplifyPath");
var preloaderPre = /* @__PURE__ */ __name((base2, resolvedManifest, options, beforeContent, nonce) => {
  const preloaderPath = simplifyPath(base2, resolvedManifest?.manifest?.preloader);
  const bundleGraphPath = "/" + resolvedManifest?.manifest.bundleGraphAsset;
  if (preloaderPath && bundleGraphPath && options !== false) {
    const preloaderOpts = typeof options === "object" ? {
      debug: options.debug,
      preloadProbability: options.ssrPreloadProbability
    } : void 0;
    initPreloader(resolvedManifest?.manifest.bundleGraph, preloaderOpts);
    const opts = [];
    if (options?.debug) {
      opts.push("d:1");
    }
    if (options?.maxIdlePreloads) {
      opts.push(`P:${options.maxIdlePreloads}`);
    }
    if (options?.preloadProbability) {
      opts.push(`Q:${options.preloadProbability}`);
    }
    const optsStr = opts.length ? `,{${opts.join(",")}}` : "";
    const script = `let b=fetch("${bundleGraphPath}");import("${preloaderPath}").then(({l})=>l(${JSON.stringify(base2)},b${optsStr}));`;
    beforeContent.push(
      /**
       * We add modulepreloads even when the script is at the top because they already fire during
       * html download
       */
      jsx("link", { rel: "modulepreload", href: preloaderPath, nonce, crossorigin: "anonymous" }),
      jsx("link", {
        rel: "preload",
        href: bundleGraphPath,
        as: "fetch",
        crossorigin: "anonymous",
        nonce
      }),
      jsx("script", {
        type: "module",
        async: true,
        dangerouslySetInnerHTML: script,
        nonce
      })
    );
  }
  const corePath = simplifyPath(base2, resolvedManifest?.manifest.core);
  if (corePath) {
    beforeContent.push(jsx("link", { rel: "modulepreload", href: corePath, nonce }));
  }
}, "preloaderPre");
var includePreloader = /* @__PURE__ */ __name((base2, resolvedManifest, options, referencedBundles, nonce) => {
  if (referencedBundles.length === 0 || options === false) {
    return null;
  }
  const { ssrPreloads, ssrPreloadProbability } = normalizePreLoaderOptions(
    typeof options === "boolean" ? void 0 : options
  );
  let allowed = ssrPreloads;
  const nodes = [];
  const links = [];
  const manifestHash = resolvedManifest?.manifest.manifestHash;
  if (allowed) {
    const preloaderBundle = resolvedManifest?.manifest.preloader;
    const coreBundle = resolvedManifest?.manifest.core;
    const expandedBundles = expandBundles(referencedBundles, resolvedManifest);
    let probability = 4;
    const tenXMinProbability = ssrPreloadProbability * 10;
    for (const hrefOrProbability of expandedBundles) {
      if (typeof hrefOrProbability === "string") {
        if (probability < tenXMinProbability) {
          break;
        }
        if (hrefOrProbability === preloaderBundle || hrefOrProbability === coreBundle) {
          continue;
        }
        links.push(hrefOrProbability);
        if (--allowed === 0) {
          break;
        }
      } else {
        probability = hrefOrProbability;
      }
    }
  }
  const preloaderPath = simplifyPath(base2, manifestHash && resolvedManifest?.manifest.preloader);
  const insertLinks = links.length ? (
    /**
     * We only use modulepreload links because they behave best. Older browsers can rely on the
     * preloader which does feature detection and which will be available soon after inserting these
     * links.
     */
    `${JSON.stringify(links)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(base2)}+l;document.head.appendChild(e)});`
  ) : "";
  let script = insertLinks;
  if (preloaderPath) {
    script += `window.addEventListener('load',f=>{f=_=>import("${preloaderPath}").then(({p})=>p(${JSON.stringify(referencedBundles)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`;
  }
  if (script) {
    nodes.push(
      jsx("script", {
        type: "module",
        "q:type": "preload",
        /**
         * This async allows the preloader to be executed before the DOM is fully parsed even though
         * it's at the bottom of the body
         */
        async: true,
        dangerouslySetInnerHTML: script,
        nonce
      })
    );
  }
  if (nodes.length > 0) {
    return jsx(Fragment, { children: nodes });
  }
  return null;
}, "includePreloader");
var preloaderPost = /* @__PURE__ */ __name((base2, snapshotResult, opts, resolvedManifest, output) => {
  if (opts.preloader !== false) {
    const preloadBundles = getPreloadPaths(snapshotResult, opts, resolvedManifest);
    if (preloadBundles.length > 0) {
      const result = includePreloader(
        base2,
        resolvedManifest,
        opts.preloader,
        preloadBundles,
        opts.serverData?.nonce
      );
      if (result) {
        output.push(result);
      }
    }
  }
}, "preloaderPost");
function normalizePreLoaderOptions(input) {
  return { ...PreLoaderOptionsDefault, ...input };
}
__name(normalizePreLoaderOptions, "normalizePreLoaderOptions");
var PreLoaderOptionsDefault = {
  ssrPreloads: 7,
  ssrPreloadProbability: 0.5,
  debug: false,
  maxIdlePreloads: 25,
  preloadProbability: 0.35
  // deprecated
};
var QWIK_LOADER_DEFAULT_MINIFIED = 'const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{b(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),b=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:b,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{u("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){u("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){u("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},u=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{const s=t.readyState;if(!r&&("interactive"==s||"complete"==s)&&(o.forEach(i),r=1,u("qinit"),(e.requestIdleCallback??e.setTimeout).bind(e)(()=>u("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}';
var QWIK_LOADER_DEFAULT_DEBUG = 'const doc = document;\nconst win = window;\nconst events = /* @__PURE__ */ new Set();\nconst roots = /* @__PURE__ */ new Set([doc]);\nlet hasInitialized;\nconst nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));\nconst querySelectorAll = (query) => {\n  const elements = [];\n  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));\n  return elements;\n};\nconst findShadowRoots = (fragment) => {\n  processEventOrNode(fragment);\n  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {\n    const shadowRoot = parent.shadowRoot;\n    shadowRoot && findShadowRoots(shadowRoot);\n  });\n};\nconst isPromise = (promise) => promise && typeof promise.then === "function";\nconst broadcast = (infix, ev, type = ev.type) => {\n  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {\n    dispatch(el, infix, ev, type);\n  });\n};\nconst resolveContainer = (containerEl) => {\n  if (containerEl._qwikjson_ === void 0) {\n    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;\n    let script = parentJSON.lastElementChild;\n    while (script) {\n      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {\n        containerEl._qwikjson_ = JSON.parse(\n          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")\n        );\n        break;\n      }\n      script = script.previousElementSibling;\n    }\n  }\n};\nconst createEvent = (eventName, detail) => new CustomEvent(eventName, {\n  detail\n});\nconst dispatch = async (element, onPrefix, ev, eventName = ev.type) => {\n  const attrName = "on" + onPrefix + ":" + eventName;\n  if (element.hasAttribute("preventdefault:" + eventName)) {\n    ev.preventDefault();\n  }\n  if (element.hasAttribute("stoppropagation:" + eventName)) {\n    ev.stopPropagation();\n  }\n  const ctx = element._qc_;\n  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);\n  if (relevantListeners && relevantListeners.length > 0) {\n    for (const listener of relevantListeners) {\n      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);\n      const cancelBubble = ev.cancelBubble;\n      if (isPromise(results)) {\n        await results;\n      }\n      if (cancelBubble) {\n        ev.stopPropagation();\n      }\n    }\n    return;\n  }\n  const attrValue = element.getAttribute(attrName);\n  if (attrValue) {\n    const container = element.closest("[q\\\\:container]");\n    const qBase = container.getAttribute("q:base");\n    const qVersion = container.getAttribute("q:version") || "unknown";\n    const qManifest = container.getAttribute("q:manifest-hash") || "dev";\n    const base = new URL(qBase, doc.baseURI);\n    for (const qrl of attrValue.split("\\n")) {\n      const url = new URL(qrl, base);\n      const href = url.href;\n      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";\n      const reqTime = performance.now();\n      let handler;\n      let importError;\n      let error;\n      const isSync = qrl.startsWith("#");\n      const eventData = {\n        qBase,\n        qManifest,\n        qVersion,\n        href,\n        symbol,\n        element,\n        reqTime\n      };\n      if (isSync) {\n        const hash = container.getAttribute("q:instance");\n        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];\n        if (!handler) {\n          importError = "sync";\n          error = new Error("sym:" + symbol);\n        }\n      } else {\n        emitEvent("qsymbol", eventData);\n        const uri = url.href.split("#")[0];\n        try {\n          const module = import(\n                        uri\n          );\n          resolveContainer(container);\n          handler = (await module)[symbol];\n          if (!handler) {\n            importError = "no-symbol";\n            error = new Error(`${symbol} not in ${uri}`);\n          }\n        } catch (err) {\n          importError || (importError = "async");\n          error = err;\n        }\n      }\n      if (!handler) {\n        emitEvent("qerror", {\n          importError,\n          error,\n          ...eventData\n        });\n        console.error(error);\n        break;\n      }\n      const previousCtx = doc.__q_context__;\n      if (element.isConnected) {\n        try {\n          doc.__q_context__ = [element, ev, url];\n          const results = handler(ev, element);\n          if (isPromise(results)) {\n            await results;\n          }\n        } catch (error2) {\n          emitEvent("qerror", { error: error2, ...eventData });\n        } finally {\n          doc.__q_context__ = previousCtx;\n        }\n      }\n    }\n  }\n};\nconst emitEvent = (eventName, detail) => {\n  doc.dispatchEvent(createEvent(eventName, detail));\n};\nconst camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());\nconst processDocumentEvent = async (ev) => {\n  let type = camelToKebab(ev.type);\n  let element = ev.target;\n  broadcast("-document", ev, type);\n  while (element && element.getAttribute) {\n    const results = dispatch(element, "", ev, type);\n    let cancelBubble = ev.cancelBubble;\n    if (isPromise(results)) {\n      await results;\n    }\n    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));\n    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;\n  }\n};\nconst processWindowEvent = (ev) => {\n  broadcast("-window", ev, camelToKebab(ev.type));\n};\nconst processReadyStateChange = () => {\n  const readyState = doc.readyState;\n  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {\n    roots.forEach(findShadowRoots);\n    hasInitialized = 1;\n    emitEvent("qinit");\n    const riC = win.requestIdleCallback ?? win.setTimeout;\n    riC.bind(win)(() => emitEvent("qidle"));\n    if (events.has("qvisible")) {\n      const results = querySelectorAll("[on\\\\:qvisible]");\n      const observer = new IntersectionObserver((entries) => {\n        for (const entry of entries) {\n          if (entry.isIntersecting) {\n            observer.unobserve(entry.target);\n            dispatch(entry.target, "", createEvent("qvisible", entry));\n          }\n        }\n      });\n      results.forEach((el) => observer.observe(el));\n    }\n  }\n};\nconst addEventListener = (el, eventName, handler, capture = false) => {\n  el.addEventListener(eventName, handler, { capture, passive: false });\n};\nconst processEventOrNode = (...eventNames) => {\n  for (const eventNameOrNode of eventNames) {\n    if (typeof eventNameOrNode === "string") {\n      if (!events.has(eventNameOrNode)) {\n        roots.forEach(\n          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)\n        );\n        addEventListener(win, eventNameOrNode, processWindowEvent, true);\n        events.add(eventNameOrNode);\n      }\n    } else {\n      if (!roots.has(eventNameOrNode)) {\n        events.forEach(\n          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)\n        );\n        roots.add(eventNameOrNode);\n      }\n    }\n  }\n};\nif (!("__q_context__" in doc)) {\n  doc.__q_context__ = 0;\n  const qwikevents = win.qwikevents;\n  if (qwikevents) {\n    if (Array.isArray(qwikevents)) {\n      processEventOrNode(...qwikevents);\n    } else {\n      processEventOrNode("click", "input");\n    }\n  }\n  win.qwikevents = {\n    events,\n    roots,\n    push: processEventOrNode\n  };\n  addEventListener(doc, "readystatechange", processReadyStateChange);\n  processReadyStateChange();\n}';
function getQwikLoaderScript(opts = {}) {
  return opts.debug ? QWIK_LOADER_DEFAULT_DEBUG : QWIK_LOADER_DEFAULT_MINIFIED;
}
__name(getQwikLoaderScript, "getQwikLoaderScript");
function createTimer() {
  if (typeof performance === "undefined") {
    return () => 0;
  }
  const start = performance.now();
  return () => {
    const end = performance.now();
    const delta = end - start;
    return delta / 1e6;
  };
}
__name(createTimer, "createTimer");
function getBuildBase(opts) {
  let base2 = opts.base;
  if (typeof opts.base === "function") {
    base2 = opts.base(opts);
  }
  if (typeof base2 === "string") {
    if (!base2.endsWith("/")) {
      base2 += "/";
    }
    return base2;
  }
  return `${"/"}build/`;
}
__name(getBuildBase, "getBuildBase");
var DOCTYPE = "<!DOCTYPE html>";
async function renderToStream(rootNode, opts) {
  let stream = opts.stream;
  let bufferSize = 0;
  let totalSize = 0;
  let networkFlushes = 0;
  let firstFlushTime = 0;
  let buffer = "";
  let snapshotResult;
  const inOrderStreaming = opts.streaming?.inOrder ?? {
    strategy: "auto",
    maximunInitialChunk: 5e4,
    maximunChunk: 3e4
  };
  const containerTagName = opts.containerTagName ?? "html";
  const containerAttributes = opts.containerAttributes ?? {};
  const nativeStream = stream;
  const firstFlushTimer = createTimer();
  const buildBase = getBuildBase(opts);
  const resolvedManifest = resolveManifest(opts.manifest);
  const nonce = opts.serverData?.nonce;
  function flush() {
    if (buffer) {
      nativeStream.write(buffer);
      buffer = "";
      bufferSize = 0;
      networkFlushes++;
      if (networkFlushes === 1) {
        firstFlushTime = firstFlushTimer();
      }
    }
  }
  __name(flush, "flush");
  function enqueue(chunk) {
    const len = chunk.length;
    bufferSize += len;
    totalSize += len;
    buffer += chunk;
  }
  __name(enqueue, "enqueue");
  switch (inOrderStreaming.strategy) {
    case "disabled":
      stream = {
        write: enqueue
      };
      break;
    case "direct":
      stream = nativeStream;
      break;
    case "auto":
      let count = 0;
      let forceFlush = false;
      const minimunChunkSize = inOrderStreaming.maximunChunk ?? 0;
      const initialChunkSize = inOrderStreaming.maximunInitialChunk ?? 0;
      stream = {
        write(chunk) {
          if (chunk === "<!--qkssr-f-->") {
            forceFlush || (forceFlush = true);
          } else if (chunk === "<!--qkssr-pu-->") {
            count++;
          } else if (chunk === "<!--qkssr-po-->") {
            count--;
          } else {
            enqueue(chunk);
          }
          const chunkSize = networkFlushes === 0 ? initialChunkSize : minimunChunkSize;
          if (count === 0 && (forceFlush || bufferSize >= chunkSize)) {
            forceFlush = false;
            flush();
          }
        }
      };
      break;
  }
  if (containerTagName === "html") {
    stream.write(DOCTYPE);
  } else {
    stream.write("<!--cq-->");
  }
  if (!resolvedManifest && true) {
    console.warn(
      `Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build.`
    );
  }
  await setServerPlatform(opts, resolvedManifest);
  const injections = resolvedManifest?.manifest.injections;
  const beforeContent = injections ? injections.map((injection) => jsx(injection.tag, injection.attributes ?? {})) : [];
  let includeMode = opts.qwikLoader ? typeof opts.qwikLoader === "object" ? opts.qwikLoader.include === "never" ? 2 : 0 : opts.qwikLoader === "inline" ? 1 : opts.qwikLoader === "never" ? 2 : 0 : 0;
  const qwikLoaderChunk = resolvedManifest?.manifest.qwikLoader;
  if (includeMode === 0 && !qwikLoaderChunk) {
    includeMode = 1;
  }
  if (includeMode === 0) {
    beforeContent.unshift(
      jsx("link", {
        rel: "modulepreload",
        href: `${buildBase}${qwikLoaderChunk}`,
        nonce
      }),
      jsx("script", {
        type: "module",
        async: true,
        src: `${buildBase}${qwikLoaderChunk}`,
        nonce
      })
    );
  } else if (includeMode === 1) {
    const qwikLoaderScript = getQwikLoaderScript({
      debug: opts.debug
    });
    beforeContent.unshift(
      jsx("script", {
        id: "qwikloader",
        // Qwik only works when modules work
        type: "module",
        // Execute asap, don't wait for domcontentloaded
        async: true,
        nonce,
        dangerouslySetInnerHTML: qwikLoaderScript
      })
    );
  }
  preloaderPre(buildBase, resolvedManifest, opts.preloader, beforeContent, nonce);
  const renderTimer = createTimer();
  const renderSymbols = [];
  let renderTime = 0;
  let snapshotTime = 0;
  await _renderSSR(rootNode, {
    stream,
    containerTagName,
    containerAttributes,
    serverData: opts.serverData,
    base: buildBase,
    beforeContent,
    beforeClose: /* @__PURE__ */ __name(async (contexts, containerState, _dynamic, textNodes) => {
      renderTime = renderTimer();
      const snapshotTimer = createTimer();
      snapshotResult = await _pauseFromContexts(contexts, containerState, void 0, textNodes);
      const children = [];
      preloaderPost(buildBase, snapshotResult, opts, resolvedManifest, children);
      const jsonData = JSON.stringify(snapshotResult.state, void 0, void 0);
      children.push(
        jsx("script", {
          type: "qwik/json",
          dangerouslySetInnerHTML: escapeText(jsonData),
          nonce
        })
      );
      if (snapshotResult.funcs.length > 0) {
        const hash2 = containerAttributes[QInstance];
        children.push(
          jsx("script", {
            "q:func": "qwik/json",
            dangerouslySetInnerHTML: serializeFunctions(hash2, snapshotResult.funcs),
            nonce
          })
        );
      }
      const extraListeners = Array.from(containerState.$events$, (s) => JSON.stringify(s));
      if (extraListeners.length > 0) {
        const content = `(window.qwikevents||(window.qwikevents=[])).push(${extraListeners.join(",")})`;
        children.push(
          jsx("script", {
            dangerouslySetInnerHTML: content,
            nonce
          })
        );
      }
      collectRenderSymbols(renderSymbols, contexts);
      snapshotTime = snapshotTimer();
      return jsx(Fragment, { children });
    }, "beforeClose"),
    manifestHash: resolvedManifest?.manifest.manifestHash || "dev" + hash()
  });
  if (containerTagName !== "html") {
    stream.write("<!--/cq-->");
  }
  flush();
  const isDynamic = snapshotResult.resources.some((r) => r._cache !== Infinity);
  const result = {
    prefetchResources: void 0,
    snapshotResult,
    flushes: networkFlushes,
    manifest: resolvedManifest?.manifest,
    size: totalSize,
    isStatic: !isDynamic,
    timing: {
      render: renderTime,
      snapshot: snapshotTime,
      firstFlush: firstFlushTime
    }
  };
  return result;
}
__name(renderToStream, "renderToStream");
function hash() {
  return Math.random().toString(36).slice(2);
}
__name(hash, "hash");
function resolveManifest(manifest$1) {
  const mergedManifest = manifest$1 ? { ...manifest, ...manifest$1 } : manifest;
  if (!mergedManifest || "mapper" in mergedManifest) {
    return mergedManifest;
  }
  if (mergedManifest.mapping) {
    const mapper = {};
    Object.entries(mergedManifest.mapping).forEach(([symbol, bundleFilename]) => {
      mapper[getSymbolHash(symbol)] = [symbol, bundleFilename];
    });
    return {
      mapper,
      manifest: mergedManifest,
      injections: mergedManifest.injections || []
    };
  }
  return void 0;
}
__name(resolveManifest, "resolveManifest");
var escapeText = /* @__PURE__ */ __name((str) => {
  return str.replace(/<(\/?script)/gi, "\\x3C$1");
}, "escapeText");
function collectRenderSymbols(renderSymbols, elements) {
  for (const ctx of elements) {
    const symbol = ctx.$componentQrl$?.getSymbol();
    if (symbol && !renderSymbols.includes(symbol)) {
      renderSymbols.push(symbol);
    }
  }
}
__name(collectRenderSymbols, "collectRenderSymbols");
var Q_FUNCS_PREFIX = 'document["qFuncs_HASH"]=';
function serializeFunctions(hash2, funcs) {
  return Q_FUNCS_PREFIX.replace("HASH", hash2) + `[${funcs.join(",\n")}]`;
}
__name(serializeFunctions, "serializeFunctions");
const RouteStateContext = /* @__PURE__ */ createContextId("qc-s");
const ContentContext = /* @__PURE__ */ createContextId("qc-c");
const ContentInternalContext = /* @__PURE__ */ createContextId("qc-ic");
const DocumentHeadContext = /* @__PURE__ */ createContextId("qc-h");
const RouteLocationContext = /* @__PURE__ */ createContextId("qc-l");
const RouteNavigateContext = /* @__PURE__ */ createContextId("qc-n");
const RouteActionContext = /* @__PURE__ */ createContextId("qc-a");
const RoutePreventNavigateContext = /* @__PURE__ */ createContextId("qc-p");
const spaInit = eventQrl(/* @__PURE__ */ _noopQrl("s_9KRx0IOCHt8"));
const s_ScE8eseirUA = /* @__PURE__ */ __name(() => {
  const serverData = useServerData("containerAttributes");
  if (!serverData) throw new Error("PrefetchServiceWorker component must be rendered on the server.");
  _jsxBranch();
  const context = useContext(ContentInternalContext);
  if (context.value && context.value.length > 0) {
    const contentsLen = context.value.length;
    let cmp = null;
    for (let i = contentsLen - 1; i >= 0; i--) if (context.value[i].default) cmp = _jsxC(context.value[i].default, {
      children: cmp
    }, 1, "ni_0");
    return /* @__PURE__ */ _jsxC(Fragment, {
      children: [
        cmp,
        /* @__PURE__ */ _jsxQ("script", {
          "document:onQCInit$": spaInit,
          "document:onQInit$": _qrlSync(() => {
            ((w, h) => {
              if (!w._qcs && h.scrollRestoration === "manual") {
                w._qcs = true;
                const s = h.state?._qCityScroll;
                if (s) w.scrollTo(s.x, s.y);
                document.dispatchEvent(new Event("qcinit"));
              }
            })(window, history);
          }, '()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')
        }, null, null, 2, "ni_1")
      ]
    }, 1, "ni_2");
  }
  return SkipRender;
}, "s_ScE8eseirUA");
const RouterOutlet = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_ScE8eseirUA, "s_ScE8eseirUA"));
const toUrl = /* @__PURE__ */ __name((url, baseUrl) => new URL(url, baseUrl.href), "toUrl");
const isSameOrigin = /* @__PURE__ */ __name((a, b) => a.origin === b.origin, "isSameOrigin");
const withSlash = /* @__PURE__ */ __name((path) => path.endsWith("/") ? path : path + "/", "withSlash");
const isSamePathname = /* @__PURE__ */ __name(({ pathname: a }, { pathname: b }) => {
  const lDiff = Math.abs(a.length - b.length);
  return lDiff === 0 ? a === b : lDiff === 1 && withSlash(a) === withSlash(b);
}, "isSamePathname");
const isSameSearchQuery = /* @__PURE__ */ __name((a, b) => a.search === b.search, "isSameSearchQuery");
const isSamePath = /* @__PURE__ */ __name((a, b) => isSameSearchQuery(a, b) && isSamePathname(a, b), "isSamePath");
const isPromise = /* @__PURE__ */ __name((value) => {
  return value && typeof value.then === "function";
}, "isPromise");
const resolveHead = /* @__PURE__ */ __name((endpoint, routeLocation, contentModules, locale) => {
  const head = createDocumentHead();
  const getData = /* @__PURE__ */ __name((loaderOrAction) => {
    const id = loaderOrAction.__id;
    if (loaderOrAction.__brand === "server_loader") {
      if (!(id in endpoint.loaders)) throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    }
    const data = endpoint.loaders[id];
    if (isPromise(data)) throw new Error("Loaders returning a promise can not be resolved for the head function.");
    return data;
  }, "getData");
  const headProps = {
    head,
    withLocale: /* @__PURE__ */ __name((fn) => withLocale(locale, fn), "withLocale"),
    resolveValue: getData,
    ...routeLocation
  };
  for (let i = contentModules.length - 1; i >= 0; i--) {
    const contentModuleHead = contentModules[i] && contentModules[i].head;
    if (contentModuleHead) {
      if (typeof contentModuleHead === "function") resolveDocumentHead(head, withLocale(locale, () => contentModuleHead(headProps)));
      else if (typeof contentModuleHead === "object") resolveDocumentHead(head, contentModuleHead);
    }
  }
  return headProps.head;
}, "resolveHead");
const resolveDocumentHead = /* @__PURE__ */ __name((resolvedHead, updatedHead) => {
  if (typeof updatedHead.title === "string") resolvedHead.title = updatedHead.title;
  mergeArray(resolvedHead.meta, updatedHead.meta);
  mergeArray(resolvedHead.links, updatedHead.links);
  mergeArray(resolvedHead.styles, updatedHead.styles);
  mergeArray(resolvedHead.scripts, updatedHead.scripts);
  Object.assign(resolvedHead.frontmatter, updatedHead.frontmatter);
}, "resolveDocumentHead");
const mergeArray = /* @__PURE__ */ __name((existingArr, newArr) => {
  if (Array.isArray(newArr)) for (const newItem of newArr) {
    if (typeof newItem.key === "string") {
      const existingIndex = existingArr.findIndex((i) => i.key === newItem.key);
      if (existingIndex > -1) {
        existingArr[existingIndex] = newItem;
        continue;
      }
    }
    existingArr.push(newItem);
  }
}, "mergeArray");
const createDocumentHead = /* @__PURE__ */ __name(() => ({
  title: "",
  meta: [],
  links: [],
  styles: [],
  scripts: [],
  frontmatter: {}
}), "createDocumentHead");
const useDocumentHead = /* @__PURE__ */ __name(() => useContext(DocumentHeadContext), "useDocumentHead");
const useLocation = /* @__PURE__ */ __name(() => useContext(RouteLocationContext), "useLocation");
const useQwikCityEnv = /* @__PURE__ */ __name(() => noSerialize(useServerData("qwikcity")), "useQwikCityEnv");
const preventNav = {};
const internalState = {
  navCount: 0
};
const s_K4gvalEGCME = `:root{view-transition-name:none}`;
const s_qGVD1Sz413o = /* @__PURE__ */ __name((fn$) => {
  return;
}, "s_qGVD1Sz413o");
const s_aww2BzpANGM = /* @__PURE__ */ __name(async (path, opt) => {
  const [actionState, navResolver, routeInternal, routeLocation] = useLexicalScope();
  const { type = "link", forceReload = path === void 0, replaceState = false, scroll = true } = typeof opt === "object" ? opt : {
    forceReload: opt
  };
  internalState.navCount++;
  const lastDest = routeInternal.value.dest;
  const dest = path === void 0 ? lastDest : typeof path === "number" ? path : toUrl(path, routeLocation.url);
  if (preventNav.$cbs$ && (forceReload || typeof dest === "number" || !isSamePath(dest, lastDest) || !isSameOrigin(dest, lastDest))) {
    const ourNavId = internalState.navCount;
    const prevents = await Promise.all([
      ...preventNav.$cbs$.values()
    ].map((cb) => cb(dest)));
    if (ourNavId !== internalState.navCount || prevents.some(Boolean)) {
      if (ourNavId === internalState.navCount && type === "popstate") history.pushState(null, "", lastDest);
      return;
    }
  }
  if (typeof dest === "number") return;
  if (!isSameOrigin(dest, lastDest)) return;
  if (!forceReload && isSamePath(dest, lastDest)) return;
  routeInternal.value = {
    type,
    dest,
    forceReload,
    replaceState,
    scroll
  };
  actionState.value = void 0;
  routeLocation.isNavigating = true;
  return new Promise((resolve) => {
    navResolver.r = resolve;
  });
}, "s_aww2BzpANGM");
const s_Ysfvd0zsHZc = /* @__PURE__ */ __name(({ track }) => {
  const [actionState, content, contentInternal, documentHead, env, goto, loaderState, navResolver, props, routeInternal, routeLocation] = useLexicalScope();
  async function run() {
    const navigation = track(routeInternal);
    const action = track(actionState);
    const locale = getLocale("");
    const prevUrl = routeLocation.url;
    const navType = action ? "form" : navigation.type;
    navigation.replaceState;
    let trackUrl;
    let clientPageData;
    let loadedRoute = null;
    trackUrl = new URL(navigation.dest, routeLocation.url);
    loadedRoute = env.loadedRoute;
    clientPageData = env.response;
    if (loadedRoute) {
      const [routeName, params, mods, menu] = loadedRoute;
      const contentModules = mods;
      const pageModule = contentModules[contentModules.length - 1];
      if (navigation.dest.search && !!isSamePath(trackUrl, prevUrl)) trackUrl.search = navigation.dest.search;
      if (!isSamePath(trackUrl, prevUrl)) routeLocation.prevUrl = prevUrl;
      routeLocation.url = trackUrl;
      routeLocation.params = {
        ...params
      };
      routeInternal.untrackedValue = {
        type: navType,
        dest: trackUrl
      };
      const resolvedHead = resolveHead(clientPageData, routeLocation, contentModules, locale);
      content.headings = pageModule.headings;
      content.menu = menu;
      contentInternal.value = noSerialize(contentModules);
      documentHead.links = resolvedHead.links;
      documentHead.meta = resolvedHead.meta;
      documentHead.styles = resolvedHead.styles;
      documentHead.scripts = resolvedHead.scripts;
      documentHead.title = resolvedHead.title;
      documentHead.frontmatter = resolvedHead.frontmatter;
    }
  }
  __name(run, "run");
  const promise = run();
  return promise;
}, "s_Ysfvd0zsHZc");
const s_p1yCGpFL1xE = /* @__PURE__ */ __name((props) => {
  useStylesQrl(/* @__PURE__ */ inlinedQrl(s_K4gvalEGCME, "s_K4gvalEGCME"));
  const env = useQwikCityEnv();
  if (!env?.params) throw new Error(`Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237`);
  const urlEnv = useServerData("url");
  if (!urlEnv) throw new Error(`Missing Qwik URL Env Data`);
  if (env.ev.originalUrl.pathname !== env.ev.url.pathname && true) throw new Error(`enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding \`experimental: ["enableRequestRewrite"]\` to your qwikVite plugin options.`);
  const url = new URL(urlEnv);
  const routeLocation = useStore({
    url,
    params: env.params,
    isNavigating: false,
    prevUrl: void 0
  }, {
    deep: false
  });
  const navResolver = {};
  const loaderState = _weakSerialize(useStore(env.response.loaders, {
    deep: false
  }));
  const routeInternal = useSignal({
    type: "initial",
    dest: url,
    forceReload: false,
    replaceState: false,
    scroll: true
  });
  const documentHead = useStore(createDocumentHead);
  const content = useStore({
    headings: void 0,
    menu: void 0
  });
  const contentInternal = useSignal();
  const currentActionId = env.response.action;
  const currentAction = currentActionId ? env.response.loaders[currentActionId] : void 0;
  const actionState = useSignal(currentAction ? {
    id: currentActionId,
    data: env.response.formData,
    output: {
      result: currentAction,
      status: env.response.status
    }
  } : void 0);
  const registerPreventNav = /* @__PURE__ */ inlinedQrl(s_qGVD1Sz413o, "s_qGVD1Sz413o");
  const goto = /* @__PURE__ */ inlinedQrl(s_aww2BzpANGM, "s_aww2BzpANGM", [
    actionState,
    navResolver,
    routeInternal,
    routeLocation
  ]);
  useContextProvider(ContentContext, content);
  useContextProvider(ContentInternalContext, contentInternal);
  useContextProvider(DocumentHeadContext, documentHead);
  useContextProvider(RouteLocationContext, routeLocation);
  useContextProvider(RouteNavigateContext, goto);
  useContextProvider(RouteStateContext, loaderState);
  useContextProvider(RouteActionContext, actionState);
  useContextProvider(RoutePreventNavigateContext, registerPreventNav);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(s_Ysfvd0zsHZc, "s_Ysfvd0zsHZc", [
    actionState,
    content,
    contentInternal,
    documentHead,
    env,
    goto,
    loaderState,
    navResolver,
    props,
    routeInternal,
    routeLocation
  ]));
  return /* @__PURE__ */ _jsxC(Slot, null, 3, "ni_3");
}, "s_p1yCGpFL1xE");
const QwikCityProvider = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_p1yCGpFL1xE, "s_p1yCGpFL1xE"));
const s_0vphQYqOdZI = /* @__PURE__ */ __name(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const title = head.title || "Qwik App";
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: [
      /* @__PURE__ */ _jsxQ("title", null, null, title, 1, null),
      /* @__PURE__ */ _jsxQ("meta", null, {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }, null, 3, null),
      /* @__PURE__ */ _jsxQ("link", null, {
        rel: "canonical",
        href: _fnSignal((p0) => p0.url.href, [
          loc
        ], "p0.url.href")
      }, null, 3, null),
      /* @__PURE__ */ _jsxQ("link", null, {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg"
      }, null, 3, null),
      head.meta.map((m) => /* @__PURE__ */ _jsxS("meta", {
        ...m
      }, null, 0, m.key)),
      head.links.map((l) => /* @__PURE__ */ _jsxS("link", {
        ...l
      }, null, 0, l.key)),
      head.styles.map((s) => /* @__PURE__ */ _jsxS("style", {
        ...s.props,
        ...s.props?.dangerouslySetInnerHTML ? {} : {
          dangerouslySetInnerHTML: s.style
        }
      }, null, 0, s.key)),
      head.scripts.map((s) => /* @__PURE__ */ _jsxS("script", {
        ...s.props,
        ...s.props?.dangerouslySetInnerHTML ? {} : {
          dangerouslySetInnerHTML: s.script
        }
      }, null, 0, s.key)),
      /* @__PURE__ */ _jsxQ("meta", {
        content: title
      }, {
        property: "og:title"
      }, null, 3, null),
      /* @__PURE__ */ _jsxQ("meta", null, {
        property: "og:url",
        content: _fnSignal((p0) => p0.url.href, [
          loc
        ], "p0.url.href")
      }, null, 3, null),
      /* @__PURE__ */ _jsxQ("script", null, {
        dangerouslySetInnerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-W79S8P');`
      }, null, 3, null)
    ]
  }, 1, "0D_0");
}, "s_0vphQYqOdZI");
const RouterHead = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_0vphQYqOdZI, "s_0vphQYqOdZI"));
const s_tntnak2DhJ8 = /* @__PURE__ */ __name(() => {
  return /* @__PURE__ */ _jsxC(QwikCityProvider, {
    children: [
      /* @__PURE__ */ _jsxQ("head", null, null, [
        /* @__PURE__ */ _jsxQ("meta", null, {
          charset: "utf-8"
        }, null, 3, null),
        /* @__PURE__ */ _jsxQ("link", null, {
          rel: "manifest",
          href: `${"/"}site.webmanifest`
        }, null, 3, "vp_0"),
        /* @__PURE__ */ _jsxC(RouterHead, null, 3, "vp_1")
      ], 1, null),
      /* @__PURE__ */ _jsxQ("body", null, {
        lang: "en"
      }, [
        /* @__PURE__ */ _jsxQ("noscript", null, null, /* @__PURE__ */ _jsxQ("iframe", null, {
          src: "https://www.googletagmanager.com/ns.html?id=GTM-W79S8P",
          height: "0",
          width: "0",
          style: "display:none;visibility:hidden"
        }, null, 3, null), 3, null),
        /* @__PURE__ */ _jsxC(RouterOutlet, null, 3, "vp_2")
      ], 1, null)
    ]
  }, 1, "vp_3");
}, "s_tntnak2DhJ8");
const Root = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(s_tntnak2DhJ8, "s_tntnak2DhJ8"));
function entry_ssr(opts) {
  return renderToStream(/* @__PURE__ */ _jsxC(Root, null, 3, "Qb_0"), {
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
      ...opts.containerAttributes
    },
    serverData: {
      ...opts.serverData
    }
  });
}
__name(entry_ssr, "entry_ssr");
export {
  entry_ssr as default
};
