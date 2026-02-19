import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';
import { fullscreenImage } from '~/utilities';
import type { Project } from '~/data/projects';
import { Heading } from '~/components/heading/heading';
import { Figure } from '~/components/figure/figure';
import styles from './styles.module.css';

// Import all project images with JSX optimization
import InteractiveAppVisualization1 from '~/media/interactive-app-visualization-2.png?jsx';
import InteractiveAppTool3 from '~/media/interactive-app-tool-3.png?jsx';
import InteractiveAppVisualization3 from '~/media/interactive-app-visualization-1.png?jsx';
import CampaignsNewsletter1 from '~/media/campaigns-newsletter-1.png?jsx';
import WordPressCustomMultisite from '~/media/wordpress-custom-multisite.png?jsx';
import WordPressCustom from '~/media/wordpress-custom.png?jsx';
import CampaignsMarketingEmail1 from '~/media/campaign-marketing-email-1.png?jsx';
import EnterpriseEcom1 from '~/media/enterprise-ecom-1.png?jsx';
import InteractiveAppTool4 from '~/media/interactive-app-tool-4.png?jsx';

// Import the same images as URLs for Schema.org contentUrl
import InteractiveAppVisualization1Url from '~/media/interactive-app-visualization-2.png';
import InteractiveAppTool3Url from '~/media/interactive-app-tool-3.png';
import InteractiveAppVisualization3Url from '~/media/interactive-app-visualization-1.png';
import CampaignsNewsletter1Url from '~/media/campaigns-newsletter-1.png';
import WordPressCustomMultisiteUrl from '~/media/wordpress-custom-multisite.png';
import WordPressCustomUrl from '~/media/wordpress-custom.png';
import CampaignsMarketingEmail1Url from '~/media/campaign-marketing-email-1.png';
import EnterpriseEcom1Url from '~/media/enterprise-ecom-1.png';
import InteractiveAppTool4Url from '~/media/interactive-app-tool-4.png';

// Create image map to match filenames to JSX componentss
const imageMap: Record<string, any> = {
	'interactive-app-visualization-2.png': InteractiveAppVisualization1,
	'interactive-app-tool-3.png': InteractiveAppTool3,
	'interactive-app-visualization-1.png': InteractiveAppVisualization3,
	'campaigns-newsletter-1.png': CampaignsNewsletter1,
	'wordpress-custom-multisite.png': WordPressCustomMultisite,
	'wordpress-custom.png': WordPressCustom,
	'campaign-marketing-email-1': CampaignsMarketingEmail1,
	'enterprise-ecom-1': EnterpriseEcom1,
	'interactive-app-tool-4': InteractiveAppTool4,
	// Add more mappings as needed...
};

// Create URL map for Schema.org contentUrl (uses processed Vite URLs)
const imageUrlMap: Record<string, string> = {
	'interactive-app-visualization-2.png': InteractiveAppVisualization1Url,
	'interactive-app-tool-3.png': InteractiveAppTool3Url,
	'interactive-app-visualization-1.png': InteractiveAppVisualization3Url,
	'campaigns-newsletter-1.png': CampaignsNewsletter1Url,
	'wordpress-custom-multisite.png': WordPressCustomMultisiteUrl,
	'wordpress-custom.png': WordPressCustomUrl,
	'campaign-marketing-email-1': CampaignsMarketingEmail1Url,
	'enterprise-ecom-1': EnterpriseEcom1Url,
	'interactive-app-tool-4': InteractiveAppTool4Url,
	// Add more mappings as needed...
};

// Utility function to get full URL
const getFullImageUrl = (filename: string): string => {
	const processedUrl = imageUrlMap[filename];
	if (!processedUrl) return '';
	
	// In development, URLs are relative (e.g., "/src/media/image.png")
	// In production, URLs are processed (e.g., "/assets/image-hash.webp")
	if (processedUrl.startsWith('/')) {
		const processedPath = processedUrl.replace('.png', '5.webp');
		// Get the current origin dynamically
		const origin = typeof window !== 'undefined' ? window.location.origin : 'https://ncdesigns-studio.com';
		return `${origin}${processedPath}`;
	}
	
	// If it's already a full URL, return as-is
	return processedUrl;
};

interface ProjectPropsList {
	projects: readonly Project[]; // Direct array of projects
}

export const ProjectList = component$<ProjectPropsList>(({ projects }) => {
	const dialogRef = useSignal<HTMLDialogElement>();
	
	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(({ track }) => {
		const imageValue = track(() => fullscreenImage.value);
		if (dialogRef.value) {
			if (imageValue) {
				dialogRef.value.showModal();
			} else if (dialogRef.value.open) {
				dialogRef.value.close();
			}
		}
	});
	
	const closeFullscreen$ = $(() => {
		fullscreenImage.value = null;
	});
	return (
		<>
			<ul class={styles.projectList}>
				{projects.map((project, index) => {
					const ImageComponent = project.img ? imageMap[project.img] : null;
					const imgAlt = project.imgAlt || project.name; // Fallback to project name if imgAlt is not provided
					const projectUrl = project.url ? project.url : '#';

					return (
						<li key={`${project.name}-${index}`}>
							<Heading level={3}>
								<a
									href={projectUrl}
									target='_blank' 
									rel='noopener noreferrer'>
									{project.name}
								</a>
							</Heading>
							{ImageComponent && (
							<div class={styles.imgWrapper}>
								<button 
								class="material-symbols-outlined" 
								onClick$={() => {
								fullscreenImage.value = project.img || null;
								}}>
								open_in_full
								</button>
								<Figure 
									caption={project.caption}
									contentUrl={getFullImageUrl(project.img || '')}
									author="Nelson Correia"
								>
									<ImageComponent
										alt={imgAlt}
										style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: '0' }} 
										itemProp="image"
									/>
								</Figure>
							</div>
							)}
							<p>{project.description}</p>
							<p>
								<small>
									<em>{project.credit}</em>
								</small>
							</p>
							<Heading level={4}>Technologies Used:</Heading>
							<ul class={styles.techStack}>
								{project.stack.map((tech) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
						</li>
					);
				})}
			</ul>
			<dialog ref={dialogRef} class={styles.fullscreenOverlay} onClick$={closeFullscreen$}>
				<button class={`${styles.closeButton} material-symbols-outlined`} onClick$={closeFullscreen$}>
					close
				</button>
				{fullscreenImage.value && (() => {
					const FullscreenImageComponent = imageMap[fullscreenImage.value];
					const project = projects.find(p => p.img === fullscreenImage.value);
					return FullscreenImageComponent ? (
						<FullscreenImageComponent
							alt={project?.name || ''}
							style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
						/>
					) : null;
				})()}
			</dialog>
		</>
	);
});
