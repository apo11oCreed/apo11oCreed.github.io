import { component$ } from "@builder.io/qwik";
import { Figure } from "~/components/figure/figure";
import ImgProfile from '~/media/profile.jpeg?jsx';

export default component$(() => {
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
            creating engaging and efficient web applications. My expertise lies in 
            HTML, CSS, JavaScript, and modern web technologies, allowing me to deliver
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
          <h3>Website Developer</h3>
          <ul>
            <li>Senior developer on multiple high-traffic ecommerce websites
            </li>
            <li>
              Contributor on <strong>research-based</strong> and <strong>data-visualization</strong> interactive web applications
            </li>
            <li>WordPress theme development and customization, maintenance, and optimization
            </li>
          </ul>
          <h3>Email Developer</h3>
          <p>I've been a contributor in the entire lifecycle of email campaigns, from design to deployment. </p>
          <ul>
            <li>A/B testing and optimization</li>
            <li>Email template builds</li>
            <li>Email build applications</li>
          </ul>
          <h3>Integrations</h3>
          <ul>
            <li>Google Analytics</li>
            <li>Google Tag Manager</li>
            <li>Push Notifications</li>
          </ul>
          <h3>Other Notable Projects</h3>
          <ul>
            <li>HTML5 Banner Ads using GreenSock (GSAP)</li>
            <li>MBTA Game development</li>
          </ul>
        </section>
        <section>
          <h2>Skills & Technologies</h2>
          <ul>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>Svelte, SvelteKit</li>
            <li>HTML5, CSS3, SCSS</li>
            <li>Tailwind, Stylus</li>
            <li>Node</li>
            <li>Responsive Design & Mobile-First Development</li>
            <li>Version Control (Git)</li>
            <li>Performance Optimization & SEO Best Practices</li>
            <li>Cross-Browser Compatibility</li>
            <li>Accessibility (WCAG)</li>
            <li>Agile & Scrum Methodologies</li>
            <li>CMS (WordPressl)</li>
            <li>Build Tools (Vite, Webpack)</li>
            <li>Design Tools (AEM, Figma, Adobe Creative Cloud)</li>
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
