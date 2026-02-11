import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';
import styles from './styles.module.css?inline';

interface FigureProps {
	caption?: string;
}

export const Figure = component$<FigureProps>(({ caption }) => {
	useStylesScoped$(styles);
	
	return (
		<figure>
			<Slot />
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
});
