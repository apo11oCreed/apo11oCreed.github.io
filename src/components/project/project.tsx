// src/components/project/project.tsx
import { component$ } from '@builder.io/qwik';
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import { useStylesScoped$ } from '@builder.io/qwik';
import styles from './styles.module.css?inline';

interface ProjectProps {
  name: string;
  description: string;
  url: string;
  stack: string[];
  img?: JSX.Element; // Receives optimized JSX element from ProjectList
}

export const Project = component$<ProjectProps>(({ name, description, url, stack, img }) => {
  useStylesScoped$(styles);
  
  return (
    <div class="project">
      {img && <div class="image">{img}</div>}
      <div class="details">
        <h3><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h3>
        <p>{description}</p>
        <ul class="stack">
          {stack.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});