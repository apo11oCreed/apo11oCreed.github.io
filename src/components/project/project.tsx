// src/components/project/project.tsx
import { component$ } from '@builder.io/qwik';
import type { QRL } from '@builder.io/qwik';
import styles from './styles.module.css';
import { Heading } from '~/components/heading/heading';
import { Badge } from '~/components/badge/badge';
import { Figure } from '~/components/figure/figure';
import { imageMap, getFullImageUrl } from './image-map';

interface ProjectProps {
  name: string;
  caption?: string;
  description: string;
  credit?: string;
  url: string | null;
  stack: string[];
  imgFilename?: string;
  imgAlt?: string;
  onOpenFullscreen$?: QRL<() => void>;
}

export const Project = component$<ProjectProps>(({ name, description, credit, url, stack, imgFilename, imgAlt, caption, onOpenFullscreen$ }) => {
  const projectUrl = url ?? '#';
  const ImageComponent = imgFilename ? imageMap[imgFilename] : null;
  const contentUrl = imgFilename ? getFullImageUrl(imgFilename) : undefined;
  const resolvedAlt = imgAlt || name;

  return (
    <>
      <Heading level={3}>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">{name}</a>
      </Heading>
      {ImageComponent && (
        <div class={styles.imgWrapper}>
          {onOpenFullscreen$ && (
            <button
              class="material-symbols-outlined"
              type="button"
              aria-label={`View ${name} in fullscreen`}
              onClick$={onOpenFullscreen$}>
              open_in_full
            </button>
          )}
          <Figure caption={caption} contentUrl={contentUrl} author="Nelson Correia">
            <ImageComponent
              alt={resolvedAlt}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: '0' }}
              itemProp="image"
            />
          </Figure>
        </div>
      )}
      <p>{description}</p>
      {credit && (
        <p>
          <small>
            <em>{credit}</em>
          </small>
        </p>
      )}
      <Heading level={4}>Technologies Used:</Heading>
      <ul class={styles.techStack}>
        {stack.map(tech => (
          <li key={tech}><Badge text={tech} /></li>
        ))}
      </ul>
    </>
  );
});