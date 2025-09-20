"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const Counter = qwik.component$(() => {
  const count = qwik.useSignal(0);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    children: [
      /* @__PURE__ */ jsxRuntime.jsxs("p", {
        children: [
          "Count: ",
          count.value
        ]
      }),
      /* @__PURE__ */ jsxRuntime.jsx("p", {
        children: /* @__PURE__ */ jsxRuntime.jsx("button", {
          onClick$: () => count.value++,
          children: "Increment"
        })
      })
    ]
  });
});
exports.Counter = Counter;
