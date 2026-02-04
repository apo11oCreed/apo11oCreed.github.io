import { component$, Slot } from '@builder.io/qwik';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = component$<HeadingProps>(({ level = 1 }) => {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return <Tag><Slot /></Tag>;
});            