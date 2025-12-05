import { component$ } from '@builder.io/qwik';
import type { Project } from '~/data/projects';

// Import all project images with JSX optimization
import InteractiveAppVisualization1 from '~/media/interactive-app-visualization-2.png?jsx';
import InteractiveAppTool3 from '~/media/interactive-app-tool-3.png?jsx';
import InteractiveAppVisualization3 from '~/media/interactive-app-visualization-1.png?jsx';
import CampaignsNewsletter1 from '~/media/campaigns-newsletter-1.png?jsx';
// Add more imports as you add project images...

// Create image map to match filenames to JSX components
const imageMap: Record<string, any> = {
  'interactive-app-visualization-2.png': InteractiveAppVisualization1,
  'interactive-app-tool-3.png': InteractiveAppTool3,
  'interactive-app-visualization-1.png': InteractiveAppVisualization3,
  'campaigns-newsletter-1.png': CampaignsNewsletter1,
  // Add more mappings as needed...
};

interface ProjectPropsList {
    projects: readonly Project[]; // Direct array of projects
}

export const ProjectList = component$<ProjectPropsList>(({ projects }) => {
    return (
        <div>
            {projects.map((project, index) => {
                const ImageComponent = project.img ? imageMap[project.img] : null;
                
                return (
                    <div key={`${project.name}-${index}`}>
                        <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                        {ImageComponent && (
                            <ImageComponent 
                                alt={project.name} 
                                style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
                            />
                        )}
                        <p>{project.description}</p>
                        <p><em>{project.credit}</em></p>
                        <ul>
                            {project.stack.map(tech => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
});