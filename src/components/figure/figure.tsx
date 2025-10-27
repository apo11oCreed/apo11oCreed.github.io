import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import styles from './styles.module.css?inline';

interface FigureProps {
  img: JSX.Element;
  caption: string;
}

export const Figure = component$<FigureProps>(({ img, caption }) => {
    useStylesScoped$(styles);
    return (
        <figure>
            {img}
            <figcaption>{caption}</figcaption>
        </figure>
    );
});