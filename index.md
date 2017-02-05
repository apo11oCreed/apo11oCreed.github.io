---
layout: ampindex
title: NC Designs Studio on Github
tagline: Specializing in web coding
description: NC Designs Studio provides web development services including web design, production, and maintenance.
author: Nelson Correia
---
{% include JB/setup %}

<section role="main" itemscope itemtype="http://schema.org/ProfilePage">
<h2 role="heading" class="flex-item" id="special-header">
Work can be fun
</h2>
<div class="flex-container" itemprop="mainContentOfPage" itemtype="http://schema.org/WebPageElement">
<p class="flex-item">
How, I typed this greeting with the help of a cloud editor. As I work through this message, I look back on a time when I could work only from my mac. These days, I'm spending more and more time exploring tech tools that will support my aspirations to work remotely and maintain sites wherever and whenever.
</p>
<p class="flex-item">
Moreso than coding, I find THIS is what makes my work a pleasure - problem solving to build sites quicker and leaner.
</p>
<p class="flex-item">
And building this site is fun. These pages are a series of explorations into the latest web practices and utilities. To see more, please have a look at some of my finished projects on the <a href="/portfolio.html" title="portfolio page">portfolio</a> page. Incidently, these sites have been maintained, at times, right from my phone.
</p>
<p class="flex-item" itemprop="specialty">
If you're looking for help on maintaining or upgrading your site, I can be reached through several channels:
</p>
</div>
<div itemscope itemtype="http://schema.org/">
<ul role="list" class="grid_contact-info">
<li role="listitem"><span id="envelope" class="glyphicon glyphicon-envelope"></span><span id="email">Email: </span><span id="email-address"><a href="mailto:info@ncdesigns-studio.com">info@ncdesigns-studio.com</a></span></li>
<li role="listitem"><span id="f"></span><span id="facebook"><a target="_blank" rel="noopener" title="facebook.com/ncdesignsstudi0" href="https://www.facebook.com/ncdesignsstudi0" class="" role="button">Facebook</a></span><span id="facebook-url"></span></li>
<li role="listitem"><span id="be"></span><span id="behance"><a title="behance.net/ncdesigns" target="_blank" rel="noopener" href="https://www.behance.net/ncdesigns" class="" role="button">Behance</a></span><span id="behance-url"></span></li>
<li role="listitem"><span id="li"></span><span id="linkedin"><a title="linkedin.com/pub/nelson-correia" target="_blank" rel="noopener" href="https://www.linkedin.com/pub/nelson-correia/10/493/b14" class="" role="button">LinkedIn</a></span><span id="linkedin-url"></span></li>
<li role="listitem"><span id="g"></span><span id="google-plus"><a title="plus.google.com/+Ncdesigns-studio" target="_blank" rel="noopener" href="https://plus.google.com/+Ncdesigns-studio" class="" role="button">Google+</a></span><span id="google-plus-url"></span></li>
<li role="listitem"><span id="phone" class="glyphicon glyphicon-phone"></span><span id="phone-label">Phone: </span><span id="phone-no"><a href="tel:7814360309">7814360309</a></span></li>
</ul>
</div>
</section>
<section role="contentinfo" itemtype="WPFooter" itemscope itemtype="http://schema.org/WebPageElement">
<h2 role="heading">Recent Posts</h2>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
</section>
<template id="shadowDOMTemplateTest">
<style>
h1.flex-item{
color:blue;
}
</style>
<div>
<content></content>
</div>
</template>
<script>
var shadow = document.querySelector('#special-header').createShadowRoot();
var template = document.querySelector('#shadowDOMTemplateTest');
var clone = document.importNode(template.content, true);
shadow.appendChild(clone);
document.querySelector('#special-header').textContent = 'Work can be fun.';
</script>
