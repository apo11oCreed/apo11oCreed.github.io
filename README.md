# My portfolio website

Welcome to my portfolio website. The information presented here demonstrates my passions for working in the digital space.

Some of the topics covered not only highlight successes but also touch upon the challenges and their solutions.

The website itself can be seen as a sandbox of experimentation into several trending front end services and utilities.

## Services and Utilities
- Node
- Bun
- Vite
- Typescript
- Qwik
- Google Fonts
- Storybook
- Google Tag Manager
- Google Analytics
- Github Copilot
- GraphQL
- Contentful

## Website Tasks
 - [ ] Build presentations of portfolio samples
   - [x] WordPress sites
   - [x] Accessibility and Section 508
   - [x] Enterprise scale CMS
   - [ ] Learning time MBTA game
   - [ ] Artist portfolio site
   - [x] Emails and Newsletter
 - [x] Storybookjs integration
 - [x] GSAP integration
 - [x] Schema.org
 - [x] WebMCP

## Notes

### Caching
During the build task, Qwik delivers a message in reference to file caching:
"we recommend that you serve these files with the following header"
Cache-Control: public, max-age=31536000, immutable

REF:
https://qwik.dev/docs/deployments/#cache-headers

According to Claude Sonnet 4:
GitHub Pages doesn't allow custom cache headers, so you're limited by their default caching policy.
GitHub Pages sets its own cache headers and you can't override them. For many sites, this is acceptable, but it's not optimal for Qwik's asset strategy.

### WebMCP
Requirements (RAM) are insufficient to further develop at this time.

REF:
https://developer.chrome.com/docs/ai/get-started#requirements