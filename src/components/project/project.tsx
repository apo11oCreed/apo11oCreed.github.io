// src/components/project/project.tsx
import { component$ } from '@builder.io/qwik';
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import { useStylesScoped$ } from '@builder.io/qwik';
import styles from './styles.module.css?inline';

interface ProjectProps {
  name: string;
  caption?: string;
  description: string;
  url: string;
  stack: string[];
  img?: JSX.Element; // Receives optimized JSX element from ProjectList
  imgAlt?: string; // Optional alt text for the image, with fallback to project name
}

export const Project = component$<ProjectProps>(({ name, description, url, stack, img }) => {
  useStylesScoped$(styles);
  
  return (
    <div class="project">
      <div class="details">
        <h3><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h3>
        {img && <div class="image">{img}</div>}
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