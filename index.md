---
layout: page
title: NC Designs Studio on Github
tagline: Specializing in web coding
description: NC Designs Studio provides web development services including web design, production, and maintenance.
author: Nelson Correia
---
{% include JB/setup %}

<main role="main" itemscope itemtype="http://schema.org/ProfilePage">
<h1 class="flex-item">
Work CAN be fun.
</h1>
<div class="flex-container">
<p class="flex-item">
Hi, I typed this greeting with the help of a cloud editor. As I work through this message, I look back on a time when I could work only from my mac. These days, I'm spending more and more time exploring tech tools that will support my aspirations to work remotely and maintain sites wherever and whenever.
</p>
<p class="flex-item">
Moreso than coding, I find THIS is what makes my work a pleasure - problem solving to build sites quicker and leaner.
</p>
<p class="flex-item">
And building this site is fun. These pages are a series of explorations into the latest web practices and utilities. To see more, please have a look at some of my finished projects on the <a href="/portfolio.html" title="portfolio page">portfolio</a> page. Incidently, these sites have been maintained, at times, right from my phone.
</p>
<p class="flex-item">
If you're looking for help on maintaining or upgrading your site, I can be reached through several channels:
</p>
</div>
<div class="flex-container" itemscope itemtype="http://schema.org/">
<ul class="flex-item">
<li>Email: <a href="mailto:info@ncdesigns-studio.com">info@ncdesigns-studio.com</a></li>
<li><a href="https://www.facebook.com/ncdesignsstudi0">Facebook</a></li>
<li><a href="https://www.behance.net/ncdesigns">Behance</a></li>
<li><a href="https://www.linkedin.com/pub/nelson-correia/10/493/b14">LinkedIn</a></li>
<li><a href="https://plus.google.com/+Ncdesigns-studio">Google+</a></li>
<li>Phone: <a href="tel:7814360309">7814360309</a></li>
</ul>
</div>
</main>
<footer role="contentinfo" itemtype="WPFooter" itemscope itemtype="http://schema.org/WebPageElement">
<h1>Recent Posts</h1>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
</footer>
