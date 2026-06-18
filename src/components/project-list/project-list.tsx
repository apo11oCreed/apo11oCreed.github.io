import { component$, useComputed$, $ } from '@builder.io/qwik';
import { useFullscreenImage } from '~/utilities';
import type { Project } from '~/data/projects';
import { Project as ProjectComponent } from '~/components/project/project';
import { Dialog } from '~/components/dialog/dialog';
import { imageMap } from '~/components/project/image-map';
import styles from './styles.module.css';

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
                    const hasImage = !!(project.img && imageMap[project.img]);

                    return (
                        <li key={`${project.name}-${index}`}>
                            <ProjectComponent
                                name={project.name}
                                description={project.description}
                                engagementContext={project.engagementContext}
                                url={project.url}
                                stack={project.stack}
                                caption={project.caption}
                                imgFilename={project.img}
                                imgAlt={project.imgAlt}
                                onOpenFullscreen$={hasImage ? $(() => openFullscreen(project.img || '')) : undefined}
                            />
                        </li>
                    );
                })}
            </ul>

            <Dialog dialogRef={dialogRef} content={fullscreenImageData} close={closeFullscreen} />
        </>
    );
});
