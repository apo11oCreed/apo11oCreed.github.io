import { component$, useComputed$ } from '@builder.io/qwik';
import { useFullscreenImage } from '~/utilities';
import type { Project } from '~/data/projects';
import { Heading } from '~/components/heading/heading';
import { Figure } from '~/components/figure/figure';
import { Dialog } from '~/components/dialog/dialog';
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

// Create image map to match filenames to JSX components
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
    projects: readonly Project[];
}

export const ProjectList = component$<ProjectPropsList>(({ projects }) => {
    // Use the fullscreen hook
    const { fullscreenImage, openFullscreen, closeFullscreen, dialogRef } = useFullscreenImage();
    
    // Computed value for reactive image component resolution
    const fullscreenImageData = useComputed$(() => {
        const imageName = fullscreenImage.value;
        if (!imageName) return null;
        
        const ImageComponent = imageMap[imageName];
        const project = projects.find(p => p.img === imageName);

        console.log(typeof(ImageComponent), 'for image:', imageName); // Debug log
        
        return ImageComponent ? {
            Component: ImageComponent,
            alt: project?.name || imageName,
            project
        } : null;
    });
    
    return (
        <>
            <ul class={styles.projectList}>
                {projects.map((project, index) => {
                    const ImageComponent = project.img ? imageMap[project.img] : null;
                    const imgAlt = project.imgAlt || project.name;
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
                                        type="button"
                                        aria-label={`View ${project.name} in fullscreen`}
                                        onClick$={() => {
                                            openFullscreen(project.img || '')
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

            <Dialog dialogRef={dialogRef} content={fullscreenImageData} close={closeFullscreen} />
        </>
    );
});