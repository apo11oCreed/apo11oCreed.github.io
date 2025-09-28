import{j as v,b as Ae,s as Ie,d as Re,F as H,g as Le,c as Y,i as E,u as oe,e as ae,f as Ne,_ as P,a as _,h as De,k as je,S as Be,l as Te,n as ye,m as O,o as Oe,p as Z,q as S,r as Qe,t as Me,v as $,w as Ue,x as be,y as Ge,z as ce,A as ue,B as Q}from"./q-DpDdDJqw.js";const fe={manifestHash:"fqft1o",core:"q-CAAnRdYd.js",preloader:"q-BKZ00VYc.js",qwikLoader:"q-pLIxelCT.js",bundleGraphAsset:"assets/CzPlNGIh-bundle-graph.json",injections:[],mapping:{s_Ysfvd0zsHZc:"q-CYckeuGu.js",s_26Zk9LevwR4:"q-K8w9tfLi.js",s_35YlVmV10xA:"q-BScXDeof.js",s_0vphQYqOdZI:"q-DbuuxXmk.js",s_1raneLGffO8:"q-BScXDeof.js",s_B0lqk5IDDy4:"q-BnNhSBBe.js",s_MiPVFWJLcMo:"q-B6IvbMuf.js",s_ScE8eseirUA:"q-BCWNiXrb.js",s_bmV0oH7tsks:"q-CAAnRdYd.js",s_p1yCGpFL1xE:"q-CYckeuGu.js",s_pWsmcogutG8:"q-lze4NkhU.js",s_tntnak2DhJ8:"q-DeZYyzs_.js",s_K4gvalEGCME:"q-CYckeuGu.js",s_9KRx0IOCHt8:"q-istiA8xF.js",s_A5SCimyrjAE:"q-BSzFa1uR.js",s_N26RLdG0oBg:"q-BXwRUEv6.js",s_WfTOxT4IrdA:"q-C_mhDZ2x.js",s_0HB1p804N00:"q-BScXDeof.js",s_74kvkuGdvug:"q-BScXDeof.js",s_PmWjL2RrvZM:"q-B6IvbMuf.js",s_US0pTyQnOdc:"q-CAAnRdYd.js",s_aww2BzpANGM:"q-CYckeuGu.js",s_qGVD1Sz413o:"q-CYckeuGu.js",s_xe8duyQ5aaU:"q-lze4NkhU.js",s_zPJUEsxZLIA:"q-BScXDeof.js",s_zpHcJzYZ88E:"q-lze4NkhU.js"}};/**
 * @license
 * @builder.io/qwik/server 1.16.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var ze=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Fe="<sync>";function He(e,t){const n=t?.mapper,r=e.symbolMapper?e.symbolMapper:(o,i,a)=>{if(n){const l=G(o),c=n[l];if(!c){if(l===Fe)return[l,""];if(globalThis.__qwik_reg_symbols?.has(l))return[o,"_"];if(a)return[o,`${a}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,a)}return c}};return{isServer:!0,async importSymbol(o,i,a){const l=G(a),c=globalThis.__qwik_reg_symbols?.get(l);if(c)return c;let f=String(i);f.endsWith(".js")||(f+=".js");const u=ze(f);if(!(a in u))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${f}'.`);return u[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(i=>{setTimeout(()=>{i(o())})}),chunkForSymbol(o,i,a){return r(o,n,a)}}}async function Ye(e,t){const n=He(e,t);Ie(n)}var G=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},Je="q:instance",X={$DEBUG$:!1,$invPreloadProbability$:.65},Ve=Date.now(),We=/\.[mc]?js$/,ge=0,Ze=1,Ke=2,Xe=3,ee,te,et=(e,t)=>({$name$:e,$state$:We.test(e)?ge:Xe,$deps$:we?t?.map(n=>({...n,$factor$:1})):t,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),tt=e=>{const t=new Map;let n=0;for(;n<e.length;){const r=e[n++],s=[];let o,i=1;for(;o=e[n],typeof o=="number";)o<0?i=-o/10:s.push({$name$:e[o],$importProbability$:i,$factor$:1}),n++;t.set(r,s)}return t},_e=e=>{let t=ne.get(e);if(!t){let n;if(te){if(n=te.get(e),!n)return;n.length||(n=void 0)}t=et(e,n),ne.set(e,t)}return t},nt=(e,t)=>{t&&("debug"in t&&(X.$DEBUG$=!!t.debug),typeof t.preloadProbability=="number"&&(X.$invPreloadProbability$=1-t.preloadProbability)),!(ee!=null||!e)&&(ee="",te=tt(e))},ne=new Map,we,z,qe=0,D=[],rt=(...e)=>{console.log(`Preloader ${Date.now()-Ve}ms ${qe}/${D.length} queued>`,...e)},st=()=>{ne.clear(),z=!1,we=!0,qe=0,D.length=0},ot=()=>{z&&(D.sort((e,t)=>e.$inverseProbability$-t.$inverseProbability$),z=!1)},at=()=>{ot();let e=.4;const t=[];for(const n of D){const r=Math.round((1-n.$inverseProbability$)*10);r!==e&&(e=r,t.push(e)),t.push(n.$name$)}return t},Se=(e,t,n)=>{if(n?.has(e))return;const r=e.$inverseProbability$;if(e.$inverseProbability$=t,!(r-e.$inverseProbability$<.01)&&(ee!=null&&e.$state$<Ke&&(e.$state$===ge&&(e.$state$=Ze,D.push(e),X.$DEBUG$&&rt(`queued ${Math.round((1-e.$inverseProbability$)*100)}%`,e.$name$)),z=!0),e.$deps$)){n||(n=new Set),n.add(e);const s=1-e.$inverseProbability$;for(const o of e.$deps$){const i=_e(o.$name$);if(i.$inverseProbability$===0)continue;let a;if(s===1||s>=.99&&re<100)re++,a=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*s,c=o.$factor$,f=l/c;a=Math.max(.02,i.$inverseProbability$*f),o.$factor$=f}Se(i,a,n)}}},de=(e,t)=>{const n=_e(e);n&&n.$inverseProbability$>t&&Se(n,t)},re,it=(e,t)=>{if(!e?.length)return;re=0;let n=t?1-t:.4;if(Array.isArray(e))for(let r=e.length-1;r>=0;r--){const s=e[r];typeof s=="number"?n=1-s/10:de(s,n)}else de(e,n)};function lt(e){const t=[],n=r=>{if(r)for(const s of r)t.includes(s.url)||(t.push(s.url),s.imports&&n(s.imports))};return n(e),t}var ct=e=>{const t=Le();return e?.qrls?.map(n=>{const r=n.$refSymbol$||n.$symbol$,s=n.$chunk$,o=t.chunkForSymbol(r,s,n.dev?.file);return o?o[1]:s}).filter(Boolean)};function ut(e,t,n){const r=t.prefetchStrategy;if(r===null)return[];if(!n?.manifest.bundleGraph)return ct(e);if(typeof r?.symbolsToPrefetch=="function")try{const o=r.symbolsToPrefetch({manifest:n.manifest});return lt(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const s=new Set;for(const o of e?.qrls||[]){const i=G(o.$refSymbol$||o.$symbol$);i&&i.length>=10&&s.add(i)}return[...s]}var ft=(e,t)=>{if(!t?.manifest.bundleGraph)return[...new Set(e)];st();let n=.99;for(const r of e.slice(0,15))it(r,n),n*=.85;return at()},se=(e,t)=>{if(t==null)return null;const n=`${e}${t}`.split("/"),r=[];for(const s of n)s===".."&&r.length>0?r.pop():r.push(s);return r.join("/")},dt=(e,t,n,r,s)=>{const o=se(e,t?.manifest?.preloader),i="/"+t?.manifest.bundleGraphAsset;if(o&&i&&n!==!1){const l=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;nt(t?.manifest.bundleGraph,l);const c=[];n?.debug&&c.push("d:1"),n?.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n?.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const f=c.length?`,{${c.join(",")}}`:"",u=`let b=fetch("${i}");import("${o}").then(({l})=>l(${JSON.stringify(e)},b${f}));`;r.push(v("link",{rel:"modulepreload",href:o,nonce:s}),v("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous",nonce:s}),v("script",{type:"module",async:!0,dangerouslySetInnerHTML:u,nonce:s}))}const a=se(e,t?.manifest.core);a&&r.push(v("link",{rel:"modulepreload",href:a,nonce:s}))},pt=(e,t,n,r,s)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:i}=ht(typeof n=="boolean"?void 0:n);let a=o;const l=[],c=[],f=t?.manifest.manifestHash;if(a){const d=t?.manifest.preloader,p=t?.manifest.core,g=ft(r,t);let q=4;const R=i*10;for(const m of g)if(typeof m=="string"){if(q<R)break;if(m===d||m===p)continue;if(c.push(m),--a===0)break}else q=m}const u=se(e,f&&t?.manifest.preloader);let b=c.length?`${JSON.stringify(c)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(e)}+l;document.head.appendChild(e)});`:"";return u&&(b+=`window.addEventListener('load',f=>{f=_=>import("${u}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),b&&l.push(v("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:b,nonce:s})),l.length>0?v(H,{children:l}):null},mt=(e,t,n,r,s)=>{if(n.preloader!==!1){const o=ut(t,n,r);if(o.length>0){const i=pt(e,r,n.preloader,o,n.serverData?.nonce);i&&s.push(i)}}};function ht(e){return{...vt,...e}}var vt={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},yt='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{u(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),u=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),u=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:u,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{b("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){b("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){b("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},b=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=u(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(i),r=1,b("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)(()=>b("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),u(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',bt=`const doc = document;
const win = window;
const events = /* @__PURE__ */ new Set();
const roots = /* @__PURE__ */ new Set([doc]);
let hasInitialized;
const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
const querySelectorAll = (query) => {
  const elements = [];
  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
  return elements;
};
const findShadowRoots = (fragment) => {
  processEventOrNode(fragment);
  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
    const shadowRoot = parent.shadowRoot;
    shadowRoot && findShadowRoots(shadowRoot);
  });
};
const isPromise = (promise) => promise && typeof promise.then === "function";
const broadcast = (infix, ev, type = ev.type) => {
  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {
    dispatch(el, infix, ev, type);
  });
};
const resolveContainer = (containerEl) => {
  if (containerEl._qwikjson_ === void 0) {
    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
    let script = parentJSON.lastElementChild;
    while (script) {
      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
        containerEl._qwikjson_ = JSON.parse(
          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
        );
        break;
      }
      script = script.previousElementSibling;
    }
  }
};
const createEvent = (eventName, detail) => new CustomEvent(eventName, {
  detail
});
const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
  const attrName = "on" + onPrefix + ":" + eventName;
  if (element.hasAttribute("preventdefault:" + eventName)) {
    ev.preventDefault();
  }
  if (element.hasAttribute("stoppropagation:" + eventName)) {
    ev.stopPropagation();
  }
  const ctx = element._qc_;
  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
  if (relevantListeners && relevantListeners.length > 0) {
    for (const listener of relevantListeners) {
      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
      const cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      if (cancelBubble) {
        ev.stopPropagation();
      }
    }
    return;
  }
  const attrValue = element.getAttribute(attrName);
  if (attrValue) {
    const container = element.closest("[q\\\\:container]");
    const qBase = container.getAttribute("q:base");
    const qVersion = container.getAttribute("q:version") || "unknown";
    const qManifest = container.getAttribute("q:manifest-hash") || "dev";
    const base = new URL(qBase, doc.baseURI);
    for (const qrl of attrValue.split("\\n")) {
      const url = new URL(qrl, base);
      const href = url.href;
      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
      const reqTime = performance.now();
      let handler;
      let importError;
      let error;
      const isSync = qrl.startsWith("#");
      const eventData = {
        qBase,
        qManifest,
        qVersion,
        href,
        symbol,
        element,
        reqTime
      };
      if (isSync) {
        const hash = container.getAttribute("q:instance");
        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
        if (!handler) {
          importError = "sync";
          error = new Error("sym:" + symbol);
        }
      } else {
        emitEvent("qsymbol", eventData);
        const uri = url.href.split("#")[0];
        try {
          const module = import(
                        uri
          );
          resolveContainer(container);
          handler = (await module)[symbol];
          if (!handler) {
            importError = "no-symbol";
            error = new Error(\`\${symbol} not in \${uri}\`);
          }
        } catch (err) {
          importError || (importError = "async");
          error = err;
        }
      }
      if (!handler) {
        emitEvent("qerror", {
          importError,
          error,
          ...eventData
        });
        console.error(error);
        break;
      }
      const previousCtx = doc.__q_context__;
      if (element.isConnected) {
        try {
          doc.__q_context__ = [element, ev, url];
          const results = handler(ev, element);
          if (isPromise(results)) {
            await results;
          }
        } catch (error2) {
          emitEvent("qerror", { error: error2, ...eventData });
        } finally {
          doc.__q_context__ = previousCtx;
        }
      }
    }
  }
};
const emitEvent = (eventName, detail) => {
  doc.dispatchEvent(createEvent(eventName, detail));
};
const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
const processDocumentEvent = async (ev) => {
  let type = camelToKebab(ev.type);
  let element = ev.target;
  broadcast("-document", ev, type);
  while (element && element.getAttribute) {
    const results = dispatch(element, "", ev, type);
    let cancelBubble = ev.cancelBubble;
    if (isPromise(results)) {
      await results;
    }
    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));
    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
  }
};
const processWindowEvent = (ev) => {
  broadcast("-window", ev, camelToKebab(ev.type));
};
const processReadyStateChange = () => {
  var _a;
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = (_a = win.requestIdleCallback) != null ? _a : win.setTimeout;
    riC.bind(win)(() => emitEvent("qidle"));
    if (events.has("qvisible")) {
      const results = querySelectorAll("[on\\\\:qvisible]");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            dispatch(entry.target, "", createEvent("qvisible", entry));
          }
        }
      });
      results.forEach((el) => observer.observe(el));
    }
  }
};
const addEventListener = (el, eventName, handler, capture = false) => {
  el.addEventListener(eventName, handler, { capture, passive: false });
};
const processEventOrNode = (...eventNames) => {
  for (const eventNameOrNode of eventNames) {
    if (typeof eventNameOrNode === "string") {
      if (!events.has(eventNameOrNode)) {
        roots.forEach(
          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
        );
        addEventListener(win, eventNameOrNode, processWindowEvent, true);
        events.add(eventNameOrNode);
      }
    } else {
      if (!roots.has(eventNameOrNode)) {
        events.forEach(
          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
        );
        roots.add(eventNameOrNode);
      }
    }
  }
};
if (!("__q_context__" in doc)) {
  doc.__q_context__ = 0;
  const qwikevents = win.qwikevents;
  if (qwikevents) {
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    } else {
      processEventOrNode("click", "input");
    }
  }
  win.qwikevents = {
    events,
    roots,
    push: processEventOrNode
  };
  addEventListener(doc, "readystatechange", processReadyStateChange);
  processReadyStateChange();
}`;function gt(e={}){return e.debug?bt:yt}function K(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function _t(e){let t=e.base;return typeof e.base=="function"&&(t=e.base(e)),typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var wt="<!DOCTYPE html>";async function qt(e,t){let n=t.stream,r=0,s=0,o=0,i=0,a="",l;const c=t.streaming?.inOrder??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},f=t.containerTagName??"html",u=t.containerAttributes??{},y=n,b=K(),d=_t(t),p=$t(t.manifest),g=t.serverData?.nonce;function q(){a&&(y.write(a),a="",r=0,o++,o===1&&(i=b()))}function R(h){const w=h.length;r+=w,s+=w,a+=h}switch(c.strategy){case"disabled":n={write:R};break;case"direct":n=y;break;case"auto":let h=0,w=!1;const ie=c.maximunChunk??0,W=c.maximunInitialChunk??0;n={write(N){N==="<!--qkssr-f-->"?w||(w=!0):N==="<!--qkssr-pu-->"?h++:N==="<!--qkssr-po-->"?h--:R(N),h===0&&(w||r>=(o===0?W:ie))&&(w=!1,q())}};break}f==="html"?n.write(wt):n.write("<!--cq-->"),p||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Ye(t,p);const m=p?.manifest.injections,L=m?m.map(h=>v(h.tag,h.attributes??{})):[],C=t.qwikLoader?.include??"auto",j=p?.manifest.qwikLoader;let B=!1;C!=="never"&&j&&(L.unshift(v("link",{rel:"modulepreload",href:`${d}${j}`,nonce:g}),v("script",{type:"module",async:!0,src:`${d}${j}`,nonce:g})),B=!0),dt(d,p,t.preloader,L,g);const J=K(),V=[];let x=0,T=0;await Ae(e,{stream:n,containerTagName:f,containerAttributes:u,serverData:t.serverData,base:d,beforeContent:L,beforeClose:async(h,w,ie,W)=>{x=J();const N=K();l=await Re(h,w,void 0,W);const A=[];mt(d,l,t,p,A);const Ce=JSON.stringify(l.state,void 0,void 0);if(A.push(v("script",{type:"qwik/json",dangerouslySetInnerHTML:kt(Ce),nonce:g})),l.funcs.length>0){const I=u[Je];A.push(v("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Ct(I,l.funcs),nonce:g}))}const xe=!l||l.mode!=="static";if(!B&&(C==="always"||C==="auto"&&xe)){const I=gt({debug:t.debug});A.push(v("script",{id:"qwikloader",async:!0,type:"module",dangerouslySetInnerHTML:I,nonce:g}))}const le=Array.from(w.$events$,I=>JSON.stringify(I));if(le.length>0){const I=`(window.qwikevents||(window.qwikevents=[])).push(${le.join(",")})`;A.push(v("script",{dangerouslySetInnerHTML:I,nonce:g}))}return Et(V,h),T=N(),v(H,{children:A})},manifestHash:p?.manifest.manifestHash||"dev"+St()}),f!=="html"&&n.write("<!--/cq-->"),q();const k=l.resources.some(h=>h._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:p?.manifest,size:s,isStatic:!k,timing:{render:x,snapshot:T,firstFlush:i}}}function St(){return Math.random().toString(36).slice(2)}function $t(e){const t=e?{...fe,...e}:fe;if(!t||"mapper"in t)return t;if(t.mapping){const n={};return Object.entries(t.mapping).forEach(([r,s])=>{n[G(r)]=[r,s]}),{mapper:n,manifest:t,injections:t.injections||[]}}}var kt=e=>e.replace(/<(\/?script)/gi,"\\x3C$1");function Et(e,t){for(const n of t){const r=n.$componentQrl$?.getSymbol();r&&!e.includes(r)&&e.push(r)}}var Pt='document["qFuncs_HASH"]=';function Ct(e,t){return Pt.replace("HASH",e)+`[${t.join(`,
`)}]`}const xt=$("qc-s"),At=$("qc-c"),$e=$("qc-ic"),ke=$("qc-h"),Ee=$("qc-l"),It=$("qc-n"),Rt=$("qc-a"),Lt=$("qc-ir"),Nt=$("qc-p"),Dt=je(Ue("s_9KRx0IOCHt8")),jt=()=>{if(!ae("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");Ne();const t=oe($e);if(t.value&&t.value.length>0){const n=t.value.length;let r=null;for(let s=n-1;s>=0;s--)t.value[s].default&&(r=P(t.value[s].default,{children:r},1,"ni_0"));return P(H,{children:[r,_("script",{"document:onQCInit$":Dt,"document:onQInit$":De(()=>{((s,o)=>{if(!s._qcs&&o.scrollRestoration==="manual"){s._qcs=!0;const i=o.state?._qCityScroll;i&&s.scrollTo(i.x,i.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"ni_1")]},1,"ni_2")}return Be},Bt=Y(E(jt,"s_ScE8eseirUA")),Tt=(e,t)=>new URL(e,t.href),pe=(e,t)=>e.origin===t.origin,me=e=>e.endsWith("/")?e:e+"/",Ot=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&me(e)===me(t)},Qt=(e,t)=>e.search===t.search,F=(e,t)=>Qt(e,t)&&Ot(e,t),Mt=e=>e&&typeof e.then=="function",Ut=(e,t,n,r)=>{const s=Pe(),i={head:s,withLocale:a=>ce(r,a),resolveValue:a=>{const l=a.__id;if(a.__brand==="server_loader"&&!(l in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const c=e.loaders[l];if(Mt(c))throw new Error("Loaders returning a promise can not be resolved for the head function.");return c},...t};for(let a=n.length-1;a>=0;a--){const l=n[a]&&n[a].head;l&&(typeof l=="function"?he(s,ce(r,()=>l(i))):typeof l=="object"&&he(s,l))}return i.head},he=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),M(e.meta,t.meta),M(e.links,t.links),M(e.styles,t.styles),M(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},M=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const r=e.findIndex(s=>s.key===n.key);if(r>-1){e[r]=n;continue}}e.push(n)}},Pe=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),Gt=()=>oe(ke),zt=()=>oe(Ee),Ft=()=>ye(ae("qwikcity")),ve={},U={navCount:0},Ht=":root{view-transition-name:none}",Yt=e=>{},Jt=async(e,t)=>{const[n,r,s,o]=be(),{type:i="link",forceReload:a=e===void 0,replaceState:l=!1,scroll:c=!0}=typeof t=="object"?t:{forceReload:t};U.navCount++;const f=s.value.dest,u=e===void 0?f:typeof e=="number"?e:Tt(e,o.url);if(ve.$cbs$&&(a||typeof u=="number"||!F(u,f)||!pe(u,f))){const y=U.navCount,b=await Promise.all([...ve.$cbs$.values()].map(d=>d(u)));if(y!==U.navCount||b.some(Boolean)){y===U.navCount&&i==="popstate"&&history.pushState(null,"",f);return}}if(typeof u!="number"&&pe(u,f)&&!(!a&&F(u,f)))return s.value={type:i,dest:u,forceReload:a,replaceState:l,scroll:c},n.value=void 0,o.isNavigating=!0,new Promise(y=>{r.r=y})},Vt=({track:e})=>{const[t,n,r,s,o,i,a,l,c,f,u]=be();async function y(){const[d,p]=e(()=>[f.value,t.value]),g=Ge(""),q=u.url,R=p?"form":d.type;d.replaceState;let m,L,C=null;if(m=new URL(d.dest,u.url),C=o.loadedRoute,L=o.response,C){const[j,B,J,V]=C,x=J,T=x[x.length-1];d.dest.search&&F(m,q)&&(m.search=d.dest.search),F(m,q)||(u.prevUrl=q),u.url=m,u.params={...B},f.untrackedValue={type:R,dest:m};const k=Ut(L,u,x,g);n.headings=T.headings,n.menu=V,r.value=ye(x),s.links=k.links,s.meta=k.meta,s.styles=k.styles,s.scripts=k.scripts,s.title=k.title,s.frontmatter=k.frontmatter}}return y()},Wt=e=>{Te(E(Ht,"s_K4gvalEGCME"));const t=Ft();if(!t?.params)throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=ae("url");if(!n)throw new Error("Missing Qwik URL Env Data");if(t.ev.originalUrl.pathname!==t.ev.url.pathname)throw new Error('enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding `experimental: ["enableRequestRewrite"]` to your qwikVite plugin options.');const r=new URL(n),s=O({url:r,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),o={},i=Oe(O(t.response.loaders,{deep:!1})),a=Z({type:"initial",dest:r,forceReload:!1,replaceState:!1,scroll:!0}),l=O(Pe),c=O({headings:void 0,menu:void 0}),f=Z(),u=t.response.action,y=u?t.response.loaders[u]:void 0,b=Z(y?{id:u,data:t.response.formData,output:{result:y,status:t.response.status}}:void 0),d=E(Yt,"s_qGVD1Sz413o"),p=E(Jt,"s_aww2BzpANGM",[b,o,a,s]);return S(At,c),S($e,f),S(ke,l),S(Ee,s),S(It,p),S(xt,i),S(Rt,b),S(Lt,a),S(Nt,d),Qe(E(Vt,"s_Ysfvd0zsHZc",[b,c,f,l,t,p,i,o,e,a,s])),P(Me,null,3,"ni_3")},Zt=Y(E(Wt,"s_p1yCGpFL1xE")),Kt=()=>{const e=Gt(),t=zt(),n=e.title||"Qwik App";return P(H,{children:[_("title",null,null,n,1,null),_("meta",null,{name:"viewport",content:"width=device-width,initial-scale=1"},null,3,null),_("link",null,{rel:"canonical",href:ue(r=>r.url.href,[t],"p0.url.href")},null,3,null),_("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(r=>Q("meta",{...r},null,0,r.key)),e.links.map(r=>Q("link",{...r},null,0,r.key)),e.styles.map(r=>Q("style",{...r.props,...r.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:r.style}},null,0,r.key)),e.scripts.map(r=>Q("script",{...r.props,...r.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:r.script}},null,0,r.key)),_("meta",{content:n},{property:"og:title"},null,3,null),_("meta",null,{property:"og:url",content:ue(r=>r.url.href,[t],"p0.url.href")},null,3,null)]},1,"0D_0")},Xt=Y(E(Kt,"s_0vphQYqOdZI")),en=()=>P(Zt,{children:[_("head",null,null,[_("meta",null,{charset:"utf-8"},null,3,null),_("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"vp_0"),P(Xt,null,3,"vp_1")],1,null),_("body",null,{lang:"en"},P(Bt,null,3,"vp_2"),1,null)]},1,"vp_3"),tn=Y(E(en,"s_tntnak2DhJ8"));function on(e){return qt(P(tn,null,3,"Qb_0"),{...e,containerAttributes:{lang:"en-us",...e.containerAttributes},serverData:{...e.serverData}})}export{on as default};
