import { component$ } from '@builder.io/qwik';

// Import all project images with JSX optimization
import InteractiveAppVisualization1 from '~/media/interactive-app-visualization-2.png?jsx';
// Add more imports as you add project images...

// Create image map to match filenames to JSX components
const imageMap: Record<string, any> = {
  'interactive-app-visualization-2.png': InteractiveAppVisualization1,
  // Add more mappings as needed...
};

interface ProjectPropsList {
    projects: Array<{list: {
        name: string;
        description: string;
        url: string;
        stack: string[];
        img?: string; // Just the filename
    }}>;
}

export const ProjectList = component$<ProjectPropsList>(({ projects }) => {
    return (
        <div>
            {projects.map((project, index) => {
                const ImageComponent = project.list.img ? imageMap[project.list.img] : null;
                
                return (
                    <div key={index}>
                        {ImageComponent && (
                            <ImageComponent 
                                alt={project.list.name} 
                                style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
                            />
                        )}
                        <h3><a href={project.list.url} target="_blank" rel="noopener noreferrer">{project.list.name}</a></h3>
                        <p>{project.list.description}</p>
                        <ul>
                            {project.list.stack.map(tech => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
});