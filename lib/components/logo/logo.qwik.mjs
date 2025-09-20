import { jsx } from "@builder.io/qwik/jsx-runtime";
import { component$ } from "@builder.io/qwik";
const Logo = component$(() => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("a", {
      href: "https://qwik.dev/",
      children: /* @__PURE__ */ jsx("img", {
        alt: "Qwik Logo",
        width: 400,
        height: 147,
        src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f"
      })
    })
  });
});
export {
  Logo
};
