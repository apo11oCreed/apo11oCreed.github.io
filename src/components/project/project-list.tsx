import { component$ } from '@builder.io/qwik';
import type { Project } from '~/data/projects';
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
// ...
// Add more imports as you add project images...

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

interface ProjectPropsList {
	projects: readonly Project[]; // Direct array of projects
}

function requestFullscreen(this: Element) {
	if (this.requestFullscreen) {
		this.requestFullscreen();
	} else if ((this as any).webkitRequestFullscreen) { /* Safari */
		(this as any).webkitRequestFullscreen();
	} else if ((this as any).msRequestFullscreen) { /* IE11 */
		(this as any).msRequestFullscreen();
	}
}

export const ProjectList = component$<ProjectPropsList>(({ projects }) => {
	return (
		<>
			<ul class={styles.projectList}>
				{projects.map((project, index) => {
					const ImageComponent = project.img ? imageMap[project.img] : null;
					const projectUrl = project.url ? project.url : '#';

					return (
						<li key={`${project.name}-${index}`}>
							<h3>
								<a
									href={projectUrl}
									target='_blank' 
									rel='noopener noreferrer'>
									{project.name}
								</a>
							</h3>
							{ImageComponent && (
							<div class={styles.imgWrapper}>
								<span 
								class="material-symbols-outlined" 
								onClick$={(event) => {
									const target = event.target as HTMLElement;
									const wrapper = target.closest('.' + styles.imgWrapper) as HTMLElement | null;
									const mediaEl = wrapper?.querySelector('img, video, picture');
									if (mediaEl) {
										requestFullscreen.call(mediaEl);
									}
								}}>open_in_full</span>
								<ImageComponent
									alt={project.name}
									style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: '0' }}
								/>
							</div>
							)}
							<p>{project.description}</p>
							<p>
								<small>
									<em>{project.credit}</em>
								</small>
							</p>
							<h4>Technologies Used:</h4>
							<ul class={styles.techStack}>
								{project.stack.map((tech) => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
						</li>
					);
				})}
			</ul>
		</>
	);
});
