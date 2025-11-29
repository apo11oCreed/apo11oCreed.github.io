import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Figure } from "~/components/figure/figure";
import ImgProfile from '~/media/profile.jpeg?jsx';
import gsap from "gsap";
import { projects } from "~/data/projects";
import { ProjectList } from "~/components/project/project-list";

export default component$(() => {
  
  useVisibleTask$(()=>{
    gsap.to("section.intro",{
      "--bg-scale": 1,
      "--bg-opacity": 0.1,
      duration: 0.5
    });
  });
  
  return (
    <>
      <main>
        <section class="intro">
          <Figure 
            img={<ImgProfile alt="Nelson Correia" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />} 
            caption="Happy to be the pack mule on the last FL trip :)" />
          <div class="content-text">
            <h1>Hi, I'm Nelson Correia</h1>
            <p>
              Front-end developer crafting modern, performant web experiences with 
              Svelte, TypeScript, and cutting-edge frameworks. I transform ideas into 
              pixel-perfect, user-focused applications.
            </p>
            <p>
              Let's build something exceptional together.
            </p>
          </div>
        </section>
        <section class="about">
          <h2><span class="material-symbols-outlined">info</span>About Me</h2>
          <p>
            I'm a passionate front-end developer with over 10 years of experience in
            creating engaging and efficient web applications. My expertise lies in <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Stylesheets">CSS</abbr>, JavaScript, and modern web technologies, allowing me to deliver
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
          <h3>Visualizations</h3>
          <ProjectList projects={projects.map(project => ({ list: project }))} />
        </section>
        <section>
          <h2>Skills &amp; Technologies</h2>
          <ul>
            <li>JavaScript (<abbr title="Ecmascript 6">ES6</abbr>+), TypeScript</li>
            <li>Svelte, SvelteKit</li>
            <li>HTML5, CSS3, <abbr title="Sassy Cascading Stylesheets">SCSS</abbr></li>
            <li>Tailwind, Stylus</li>
            <li>Node</li>
            <li>Responsive Design &amp; Mobile-First Development</li>
            <li>Version Control (Git)</li>
            <li>Performance Optimization &amp; <abbr title="Search Engine Optimization">SEO</abbr> Best Practices</li>
            <li>Cross-Browser Compatibility</li>
            <li>Accessibility (<abbr title="Web Content Accessibility Guidelines">WCAG</abbr>)</li>
            <li>Agile &amp; Scrum Methodologies</li>
            <li><abbr title="Content Management Systems">CMS</abbr> (WordPressl)</li>
            <li>Build Tools (Vite, Webpack)</li>
            <li>Design Tools (<abbr title="Adobe Experience Manager">AEM</abbr>, Figma, Adobe Creative Cloud)</li>
            <li>AI agents and prompts (ChatGPT)</li>
          </ul>
        </section>
        <section class="contact">
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
            Feel free to reach out to me at <a href="mailto:nelson.ncdesigns@gmail.com">nelson.ncdesigns@gmail.com</a>.
          </p>
        </section>
      </main>
    </>
  );
});
