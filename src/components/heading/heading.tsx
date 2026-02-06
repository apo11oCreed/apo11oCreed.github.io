import { component$, Slot } from '@builder.io/qwik';
import styles from './styles.module.css';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  mode?: 'light' | 'dark';
  text?: string;
}

export const Heading = component$<HeadingProps>(({ level = 1, mode }) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  // Only apply mode classes when explicitly set (for Storybook simulation)
  const className = mode === 'dark' ? styles.dark : mode === 'light' ? styles.light : undefined;
  return <Tag class={className}><Slot /></Tag>;
});            