import { component$ } from '@builder.io/qwik';
import type { Project } from '~/data/projects';

// Import all project images with JSX optimization
import InteractiveAppVisualization1 from '~/media/interactive-app-visualization-2.png?jsx';
// Add more imports as you add project images...

// Create image map to match filenames to JSX components
const imageMap: Record<string, any> = {
  'interactive-app-visualization-2.png': InteractiveAppVisualization1,
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
                    <div key={index}>
                        {ImageComponent && (
                            <ImageComponent 
                                alt={project.name} 
                                style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
                            />
                        )}
                        <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                        <p>{project.description}</p>
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