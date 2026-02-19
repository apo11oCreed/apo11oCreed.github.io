import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';
import styles from './styles.module.css?inline';

interface FigureProps {
	caption?: string;
	// Enhanced Schema.org properties
	contentUrl?: string;
	author?: string;
}

export const Figure = component$<FigureProps>(({ 
	caption, 
	contentUrl,
	author
}) => {
	useStylesScoped$(styles);
	
	return (
		<figure 
			itemScope 
			itemType="https://schema.org/ImageObject"
		>
			<Slot />
			{caption && (
				<figcaption itemProp="caption">
					{caption}
					{author && (
						<span 
							itemProp="author" 
							itemScope 
							itemType="https://schema.org/Person"
						>
							<meta itemProp="name" content={author} />
						</span>
					)}
				</figcaption>
			)}
			
			{/* Enhanced Schema.org metadata using hidden spans */}
			{contentUrl && <span itemProp="contentUrl" style={{display: 'none'}}>{contentUrl}</span>}
		</figure>
	);
});
