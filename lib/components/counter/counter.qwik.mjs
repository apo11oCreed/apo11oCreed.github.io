import { jsxs, jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useSignal } from "@builder.io/qwik";
const Counter = component$(() => {
  const count = useSignal(0);
  return /* @__PURE__ */ jsxs("div", {
    children: [
      /* @__PURE__ */ jsxs("p", {
        children: [
          "Count: ",
          count.value
        ]
      }),
      /* @__PURE__ */ jsx("p", {
        children: /* @__PURE__ */ jsx("button", {
          onClick$: () => count.value++,
          children: "Increment"
        })
      })
    ]
  });
});
export {
  Counter
};
