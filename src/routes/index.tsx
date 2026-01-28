import { component$, useOnWindow, useSignal, $ } from "@builder.io/qwik";
import gsap from "gsap";
import { projects, type Project } from "~/data/projects";
import { ProjectList } from "~/components/project/project-list";
// import { Dialog } from "~/components/dialog/dialog";

export default component$(() => {
  const filteredProjects = useSignal<Project[]>([...projects]);
  const selectedFilter = useSignal<string>('all');
  // const isDialogOpen = useSignal(false);
  
  const handleFilterChange = $((event: any) => {
    const filterValue = event.target.value;
    selectedFilter.value = filterValue;

  // Push to GTM dataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      'event': 'projectFilterChange',
      'projectFilter': filterValue,
      'projectFilterLabel': event.target.options[event.target.selectedIndex].text
    });
  }
    
    if (filterValue === 'all') {
      filteredProjects.value = [...projects];
    } else {
      filteredProjects.value = projects.filter(project => {
        switch (filterValue) {
          case 'visualization':
            return project.type.toLowerCase().includes('visualization');
          case 'tool':
            return project.type.toLowerCase().includes('tool');
          case 'email':
            return project.type.toLowerCase().includes('email');
          case 'website':
            return project.type.toLowerCase().includes('website');
          default:
            return true;
        }
      });
    }
  });
  
  useOnWindow('load', $(() => {
    gsap.to("section.intro",{
      "--bg-scale": 1,
      "--bg-opacity": 0.1,
      duration: 0.5
    });
  }));
  
  return (
    <>
      <main>
        <section class="intro">
          <div class="content-text">
            <h1>Nelson Correia <small>Web Developer committed to performance & inclusion</small></h1>
            <p>
              I transform ideas into pixel-perfect, user-focused applications by crafting modern, performant web experiences with 
              Svelte, TypeScript, and cutting-edge frameworks. 
            </p>
            <p>
              Let's build something exceptional together.
            </p>
          </div>
        </section>
        <section class="about">
          <h2><span class="material-symbols-outlined">info</span>About Me</h2>
          <p>
            I'm a passionate web developer with over 10 years of experience in
            creating engaging and efficient web applications and digital touch points. My expertise lies in <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Stylesheets">CSS</abbr>, JavaScript, and modern web technologies, allowing me to deliver
            high-quality solutions that meet both user needs and business goals.
          </p>
          <p>
            I thrive in collaborative environments, working closely with designers,
            back-end developers, and stakeholders to bring projects to life. My 
            commitment to clean code, performance optimization, and accessibility
            ensures that every project I work on is not only visually appealing but 
            also functional and inclusive.
          </p>
          <p>
            When I&apos;m not coding, I enjoy exploring the latest trends in web development. 
          </p>
          <p>Outside of coding, I enjoy quality family time and nurturing my kids' love for learning - skateboarding, playing instruments, and traveling.</p>
          <p>Feel free to check out my portfolio and get in touch for any exciting opportunities!</p>
        </section>

        <section class="projects">
          <h2>What I've Built</h2>
          <form action="">
            <fieldset>
              <legend>Filter Projects</legend>
              <label for="projectFilter">Select Category</label>
              <select 
                name="projectFilter" 
                id="projectFilter" 
                onChange$={handleFilterChange}
                bind:value={selectedFilter}
              >
                <option value="all">{`All Projects (${projects.length})`}</option>
                <option value="visualization">Data Visualizations</option>
                <option value="tool">Interactive Tools</option>
                <option value="email">Email/Newsletters</option>
                <option value="website">Websites</option>
              </select>
            </fieldset>
          </form>
          <ProjectList projects={filteredProjects.value} key={selectedFilter.value} />
        </section>
        <section>
          <h2>Skills &amp; Technologies</h2>
          <ul>
            <li>JavaScript (<abbr title="Ecmascript 6">ES6</abbr>+), TypeScript</li>
            <li>Svelte, SvelteKit</li>
            <li>HTML, CSS, <abbr title="Sassy Cascading Stylesheets">SCSS</abbr>, <abbr title="Scalable Vector Graphics">SVG</abbr></li>
            <li>Tailwind, Stylus</li>
            <li>Node</li>
            <li>NPM, Yarn, Bun</li>
            <li>Responsive Design &amp; Mobile-First Development</li>
            <li>Version Control (Git)</li>
            <li>Performance Optimization &amp; <abbr title="Search Engine Optimization">SEO</abbr> Best Practices</li>
            <li>Cross-Browser Compatibility</li>
            <li>Accessibility (<abbr title="Web Content Accessibility Guidelines">WCAG</abbr>)</li>
            <li>Jira and Agile &amp; Scrum Methodologies</li>
            <li><abbr title="Content Management Systems">CMS</abbr> (WordPress, Wix, <abbr title="Adobe Experience Manager">AEM</abbr>)</li>
            <li>Build Tools (Vite, Webpack)</li>
            <li>Design Tools (Figma, Adobe Creative Cloud)</li>
            <li><abbr title="Artificial Intelligence">AI</abbr> agents and prompts</li>
            <li>Google Analytics/Tag Manager</li>
          </ul>
        </section>
        <section class="contact">
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
            Feel free to reach out to me at <a href="mailto:nelson.ncdesigns@gmail.com">nelson.ncdesigns@gmail.com</a>.
          </p>
          {/* <p>
            <button 
              onClick$={() => isDialogOpen.value = true}
              style={{ 
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              Open Dialog Demo
            </button>
          </p> */}
        </section>
      </main>
      
      {/* <Dialog 
        isOpen={isDialogOpen} 
        title="Dialog Component Demo"
        size="medium"
      >
        <p>This is a demonstration of the Dialog component!</p>
        <p>The dialog supports:</p>
        <ul>
          <li>Different sizes (small, medium, large)</li>
          <li>Keyboard navigation (press ESC to close)</li>
          <li>Backdrop click to close</li>
          <li>Focus trapping for accessibility</li>
          <li>Smooth animations</li>
          <li>Mobile-responsive design</li>
        </ul>
        <p>Try pressing the <kbd>ESC</kbd> key or clicking outside the dialog to close it.</p>
      </Dialog> */}
    </>
  );
});
