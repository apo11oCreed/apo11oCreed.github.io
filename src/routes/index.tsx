import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    <main>
        <section>
          <h1>Hi, I'm Nelson Correia</h1>
          <p>
            Front-end developer crafting modern, performant web experiences with 
            Svelte, TypeScript, and cutting-edge frameworks. I transform ideas into 
            pixel-perfect, user-focused applications.
          </p>
          <p>
            Let's build something exceptional together.
          </p>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Nelson correia - Front-end Developer",
  meta: [
    {
      name: "description",
      content: "Portfolio website of Nelson Correia",
    },
  ],
};
