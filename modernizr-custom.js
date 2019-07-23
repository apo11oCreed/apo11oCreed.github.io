/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-animation-apng-backgroundblendmode-backgroundcliptext-canvas-classlist-cssanimations-cssfilters-cssgradients-cssgrid_cssgridlegacy-cssmask-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-customelements-emoji-fontface-generatedcontent-htmlimports-inlinesvg-jpeg2000-jpegxr-localstorage-microdata-multiplebgs-notification-opacity-queryselector-regions-rgba-scriptasync-scriptdefer-serviceworker-sessionstorage-shapes-sizes-smil-srcset-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-template-textshadow-time-touchevents-video-videoautoplay-videoloop-webp-webpalpha-webpanimation-webplossless_webp_lossless-setclasses !*/
!function(A,e,t){function n(A,e){return typeof A===e}function i(){var A,e,t,i,r,a,o;for(var s in E)if(E.hasOwnProperty(s)){if(A=[],e=E[s],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)A.push(e.options.aliases[t].toLowerCase());for(i=n(e.fn,"function")?e.fn():e.fn,r=0;r<A.length;r++)a=A[r],o=a.split("."),1===o.length?Modernizr[o[0]]=i:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=i),T.push((i?"":"no-")+o.join("-"))}}function r(A){var e=Q.className,t=Modernizr._config.classPrefix||"";if(b&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+A.join(" "+t),b?Q.className.baseVal=e:Q.className=e)}function a(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):b?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function o(e,t,n){var i;if("getComputedStyle"in A){i=getComputedStyle.call(A,e,t);var r=A.console;if(null!==i)n&&(i=i.getPropertyValue(n));else if(r){var a=r.error?"error":"log";r[a].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!t&&e.currentStyle&&e.currentStyle[n];return i}function s(A,e){return A-1===e||A===e||A+1===e}function d(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function l(A,e){if("object"==typeof A)for(var t in A)S(A,t)&&l(t,A[t]);else{A=A.toLowerCase();var n=A.split("."),i=Modernizr[n[0]];if(2==n.length&&(i=i[n[1]]),"undefined"!=typeof i)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),r([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function c(A,e){return!!~(""+A).indexOf(e)}function u(){var A=e.body;return A||(A=a(b?"svg":"body"),A.fake=!0),A}function p(A,t,n,i){var r,o,s,d,l="modernizr",c=a("div"),p=u();if(parseInt(n,10))for(;n--;)s=a("div"),s.id=i?i[n]:l+(n+1),c.appendChild(s);return r=a("style"),r.type="text/css",r.id="s"+l,(p.fake?p:c).appendChild(r),p.appendChild(c),r.styleSheet?r.styleSheet.cssText=A:r.appendChild(e.createTextNode(A)),c.id=l,p.fake&&(p.style.background="",p.style.overflow="hidden",d=Q.style.overflow,Q.style.overflow="hidden",Q.appendChild(p)),o=t(c,A),p.fake?(p.parentNode.removeChild(p),Q.style.overflow=d,Q.offsetHeight):c.parentNode.removeChild(c),!!o}function f(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(e,n){var i=e.length;if("CSS"in A&&"supports"in A.CSS){for(;i--;)if(A.CSS.supports(f(e[i]),n))return!0;return!1}if("CSSSupportsRule"in A){for(var r=[];i--;)r.push("("+f(e[i])+":"+n+")");return r=r.join(" or "),p("@supports ("+r+") { #modernizr { position: absolute; } }",function(A){return"absolute"==o(A,null,"position")})}return t}function h(A,e,i,r){function o(){l&&(delete k.style,delete k.modElem)}if(r=n(r,"undefined")?!1:r,!n(i,"undefined")){var s=g(A,i);if(!n(s,"undefined"))return s}for(var l,u,p,f,h,m=["modernizr","tspan","samp"];!k.style&&m.length;)l=!0,k.modElem=a(m.shift()),k.style=k.modElem.style;for(p=A.length,u=0;p>u;u++)if(f=A[u],h=k.style[f],c(f,"-")&&(f=d(f)),k.style[f]!==t){if(r||n(i,"undefined"))return o(),"pfx"==e?f:!0;try{k.style[f]=i}catch(w){}if(k.style[f]!=h)return o(),"pfx"==e?f:!0}return o(),!1}function m(A,e){return function(){return A.apply(e,arguments)}}function w(A,e,t){var i;for(var r in A)if(A[r]in e)return t===!1?A[r]:(i=e[A[r]],n(i,"function")?m(i,t||e):i);return!1}function v(A,e,t,i,r){var a=A.charAt(0).toUpperCase()+A.slice(1),o=(A+" "+Y.join(a+" ")+a).split(" ");return n(e,"string")||n(e,"undefined")?h(o,e,i,r):(o=(A+" "+N.join(a+" ")+a).split(" "),w(o,e,t))}function B(A,e,n){return v(A,t,t,e,n)}var T=[],E=[],R={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var t=this;setTimeout(function(){e(t[A])},0)},addTest:function(A,e,t){E.push({name:A,fn:e,options:t})},addAsyncTest:function(A){E.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=R,Modernizr=new Modernizr,Modernizr.addTest("customelements","customElements"in A),Modernizr.addTest("notification",function(){if(!A.Notification||!A.Notification.requestPermission)return!1;if("granted"===A.Notification.permission)return!0;try{new A.Notification("")}catch(e){if("TypeError"===e.name)return!1}return!0}),Modernizr.addTest("queryselector","querySelector"in e&&"querySelectorAll"in e),Modernizr.addTest("serviceworker","serviceWorker"in navigator),Modernizr.addTest("svg",!!e.createElementNS&&!!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("target",function(){var e=A.document;if(!("querySelectorAll"in e))return!1;try{return e.querySelectorAll(":target"),!0}catch(t){return!1}}),Modernizr.addTest("microdata","getItems"in e),Modernizr.addTest("localstorage",function(){var A="modernizr";try{return localStorage.setItem(A,A),localStorage.removeItem(A),!0}catch(e){return!1}}),Modernizr.addTest("sessionstorage",function(){var A="modernizr";try{return sessionStorage.setItem(A,A),sessionStorage.removeItem(A),!0}catch(e){return!1}}),Modernizr.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in A&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return e});var x="CSS"in A&&"supports"in A.CSS,y="supportsCSS"in A;Modernizr.addTest("supports",x||y);var Q=e.documentElement;Modernizr.addTest("classlist","classList"in Q);var b="svg"===Q.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var A=a("canvas");return!(!A.getContext||!A.getContext("2d"))}),Modernizr.addTest("video",function(){var A=a("video"),e=!1;try{e=!!A.canPlayType,e&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return e}),Modernizr.addTest("webanimations","animate"in a("div")),Modernizr.addTest("multiplebgs",function(){var A=a("a").style;return A.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(A.background)}),Modernizr.addTest("rgba",function(){var A=a("a").style;return A.cssText="background-color:rgba(150,255,150,.5)",(""+A.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("template","content"in a("template")),Modernizr.addTest("time","valueAsDate"in a("time")),Modernizr.addTest("srcset","srcset"in a("img")),Modernizr.addTest("scriptasync","async"in a("script")),Modernizr.addTest("scriptdefer","defer"in a("script")),Modernizr.addTest("inlinesvg",function(){var A=a("div");return A.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&A.firstChild&&A.firstChild.namespaceURI)}),Modernizr.addTest("videoloop","loop"in a("video")),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var e=A.devicePixelRatio||1,t=12*e,n=a("canvas"),i=n.getContext("2d");return i.fillStyle="#f00",i.textBaseline="top",i.font="32px Arial",i.fillText("🐨",0,0),0!==i.getImageData(t,t,1,1).data[0]});var G=R._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];R._prefixes=G,Modernizr.addTest("cssgradients",function(){for(var A,e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",i=0,r=G.length-1;r>i;i++)A=0===i?"to ":"",n+=e+G[i]+"linear-gradient("+A+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=e+"-webkit-"+t);var o=a("a"),s=o.style;return s.cssText=n,(""+s.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var A=a("a").style;return A.cssText=G.join("opacity:.55;"),/^0.55$/.test(A.opacity)});var C={}.toString;Modernizr.addTest("svgclippaths",function(){return!!e.createElementNS&&/SVGClipPath/.test(C.call(e.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!e.createElementNS&&/SVGForeignObject/.test(C.call(e.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("smil",function(){return!!e.createElementNS&&/SVGAnimate/.test(C.call(e.createElementNS("http://www.w3.org/2000/svg","animate")))});var S;!function(){var A={}.hasOwnProperty;S=n(A,"undefined")||n(A.call,"undefined")?function(A,e){return e in A&&n(A.constructor.prototype[e],"undefined")}:function(e,t){return A.call(e,t)}}(),R._l={},R.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},R._trigger=function(A,e){if(this._l[A]){var t=this._l[A];setTimeout(function(){var A,n;for(A=0;A<t.length;A++)(n=t[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){R.addTest=l}),l("htmlimports","import"in a("link")),Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var A=new Image,e=a("canvas"),t=e.getContext("2d");A.onload=function(){l("apng",function(){return"undefined"==typeof e.getContext?!1:(t.drawImage(A,0,0),0===t.getImageData(0,0,1,1).data[3])})},A.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onload=A.onerror=function(){l("jpeg2000",1==A.width)},A.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onload=A.onerror=function(){l("jpegxr",1==A.width,{aliases:["jpeg-xr"]})},A.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),Modernizr.addAsyncTest(function(){var A,e,t,n=a("img"),i="sizes"in n;!i&&"srcset"in n?(e="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",A="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){l("sizes",2==n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=A+" 1w,"+e+" 8w",n.src=A):l("sizes",i)}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){l("webpalpha",!1,{aliases:["webp-alpha"]})},A.onload=function(){l("webpalpha",1==A.width,{aliases:["webp-alpha"]})},A.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){l("webpanimation",!1,{aliases:["webp-animation"]})},A.onload=function(){l("webpanimation",1==A.width,{aliases:["webp-animation"]})},A.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){l("webplossless",!1,{aliases:["webp-lossless"]})},A.onload=function(){l("webplossless",1==A.width,{aliases:["webp-lossless"]})},A.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),Modernizr.addAsyncTest(function(){function A(A,e,t){function n(e){var n=e&&"load"===e.type?1==i.width:!1,r="webp"===A;l(A,r&&n?new Boolean(n):n),t&&t(e)}var i=new Image;i.onerror=n,i.onload=n,i.src=e}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=e.shift();A(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var n=0;n<e.length;n++)A(e[n].name,e[n].uri)})}),Modernizr.addTest("svgasimg",e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addAsyncTest(function(){function A(a){i++,clearTimeout(e);var o=a&&"playing"===a.type||0!==r.currentTime;return!o&&n>i?void(e=setTimeout(A,t)):(r.removeEventListener("playing",A,!1),l("videoautoplay",o),void(r.parentNode&&r.parentNode.removeChild(r)))}var e,t=200,n=5,i=0,r=a("video"),o=r.style;if(!(Modernizr.video&&"autoplay"in r))return void l("videoautoplay",!1);o.position="absolute",o.height=0,o.width=0;try{if(Modernizr.video.ogg)r.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void l("videoautoplay",!1);r.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(s){return void l("videoautoplay",!1)}r.setAttribute("autoplay",""),o.cssText="display:none",Q.appendChild(r),setTimeout(function(){r.addEventListener("playing",A,!1),e=setTimeout(A,t)},0)});var I=R.testStyles=p;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in A||A.DocumentTouch&&e instanceof DocumentTouch)t=!0;else{var n=["@media (",G.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");I(n,function(A){t=9===A.offsetTop})}return t});var U=function(){var A=navigator.userAgent,e=A.match(/w(eb)?osbrowser/gi),t=A.match(/windows phone/gi)&&A.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return e||t}();U?Modernizr.addTest("fontface",!1):I('@font-face {font-family:"font";src:url("https://")}',function(A,t){var n=e.getElementById("smodernizr"),i=n.sheet||n.styleSheet,r=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",a=/src/i.test(r)&&0===r.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",a)}),I('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(A){Modernizr.addTest("generatedcontent",A.offsetHeight>=6)}),Modernizr.addTest("cssvalid",function(){return I("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(A){var e=a("input");return A.appendChild(e),e.clientWidth>10})}),I("#modernizr { height: 50vh; }",function(e){var t=parseInt(A.innerHeight/2,10),n=parseInt(o(e,null,"height"),10);Modernizr.addTest("cssvhunit",s(n,t))}),I("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(A){var e=A.childNodes[2],t=A.childNodes[1],n=A.childNodes[0],i=parseInt((t.offsetWidth-t.clientWidth)/2,10),r=n.clientWidth/100,a=n.clientHeight/100,d=parseInt(50*Math.max(r,a),10),l=parseInt(o(e,null,"width"),10);Modernizr.addTest("cssvmaxunit",s(d,l)||s(d,l-i))},3),I("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(A){var e=A.childNodes[2],t=A.childNodes[1],n=A.childNodes[0],i=parseInt((t.offsetWidth-t.clientWidth)/2,10),r=n.clientWidth/100,a=n.clientHeight/100,d=parseInt(50*Math.min(r,a),10),l=parseInt(o(e,null,"width"),10);Modernizr.addTest("cssvminunit",s(d,l)||s(d,l-i))},3),I("#modernizr { width: 50vw; }",function(e){var t=parseInt(A.innerWidth/2,10),n=parseInt(o(e,null,"width"),10);Modernizr.addTest("cssvwunit",s(n,t))});var F={elem:a("modernizr")};Modernizr._q.push(function(){delete F.elem});var k={style:F.elem.style};Modernizr._q.unshift(function(){delete k.style});var V=R.testProp=function(A,e,n){return h([A],t,e,n)};Modernizr.addTest("textshadow",V("textShadow","1px 1px"));var D="Moz O ms Webkit",Y=R._config.usePrefixes?D.split(" "):[];R._cssomPrefixes=Y;var M=function(e){var n,i=G.length,r=A.CSSRule;if("undefined"==typeof r)return t;if(!e)return!1;if(e=e.replace(/^@/,""),n=e.replace(/-/g,"_").toUpperCase()+"_RULE",n in r)return"@"+e;for(var a=0;i>a;a++){var o=G[a],s=o.toUpperCase()+"_"+n;if(s in r)return"@-"+o.toLowerCase()+"-"+e}return!1};R.atRule=M;var N=R._config.usePrefixes?D.toLowerCase().split(" "):[];R._domPrefixes=N,R.testAllProps=v,R.testAllProps=B,Modernizr.addTest("cssanimations",B("animationName","a",!0)),Modernizr.addTest("backgroundcliptext",function(){return B("backgroundClip","text")}),Modernizr.addTest("cssgridlegacy",B("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",B("grid-template-rows","none",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return B("filter","blur(2px)");var A=a("a");return A.style.cssText=G.join("filter:blur(2px); "),!!A.style.length&&(e.documentMode===t||e.documentMode>9)}),Modernizr.addTest("cssmask",B("maskRepeat","repeat-x",!0)),Modernizr.addTest("shapes",B("shapeOutside","content-box",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&B("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!B("perspective","1px",!0)}),Modernizr.addTest("csstransformslevel2",function(){return B("translate","45px",!0)}),Modernizr.addTest("csstransitions",B("transition","all",!0));var P=R.prefixed=function(A,e,t){return 0===A.indexOf("@")?M(A):(-1!=A.indexOf("-")&&(A=d(A)),e?v(A,e,t):v(A,"pfx"))};Modernizr.addTest("backgroundblendmode",P("backgroundBlendMode","text")),Modernizr.addTest("regions",function(){if(b)return!1;var A=P("flowFrom"),e=P("flowInto"),n=!1;if(!A||!e)return n;var i=a("iframe"),r=a("div"),o=a("div"),s=a("div"),d="modernizr_flow_for_regions_check";o.innerText="M",r.style.cssText="top: 150px; left: 150px; padding: 0px;",s.style.cssText="width: 50px; height: 50px; padding: 42px;",s.style[A]=d,r.appendChild(o),r.appendChild(s),Q.appendChild(r);var l,c,u=o.getBoundingClientRect();return o.style[e]=d,l=o.getBoundingClientRect(),c=parseInt(l.left-u.left,10),Q.removeChild(r),42==c?n=!0:(Q.appendChild(i),u=i.getBoundingClientRect(),i.style[e]=d,l=i.getBoundingClientRect(),u.height>0&&u.height!==l.height&&0===l.height&&(n=!0)),o=s=r=i=t,n}),i(),r(T),delete R.addTest,delete R.addAsyncTest;for(var Z=0;Z<Modernizr._q.length;Z++)Modernizr._q[Z]();A.Modernizr=Modernizr}(window,document);