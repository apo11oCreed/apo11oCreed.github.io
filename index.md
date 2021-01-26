---
layout: ampindex
title: NC Designs Studio
tagline: Specializing in web coding
description: NC Designs Studio provides web development services including web design, production, and maintenance.
author: Nelson Correia
---
{% include JB/setup %}
<section itemscope itemtype="http://schema.org/Organization" class="grid_homepage">
	<h2 id="special-header">Work can be fun
	</h2>
		<p itemprop="description">
			Welcome. You have arrived at my professional site which is a working demo of my concentrations in web performance and web accessibility.
		</p>
		<p itemprop="description">
			I strive to keep my projects lean and inclusive to all.
		</p>
		<p itemprop="description">
			To see project samples, please visit my <a class="intcmp_content btn btn-info" href="/portfolio.html" onClick="_gaq.push(['_trackEvent', 'Internal Link', 'Portfolio Link', 'Portfolio – Words']);">portfolio</a> page.
		</p>
		<hr>
		<p itemprop="specialty">
			If you&apos;re looking for help on maintaining or upgrading your site, I can be reached through several channels:
		</p>
	<div>
		<ul role="list" class="grid_contact-info">

			<li role="listitem"><a class="intcmp_content btn btn-info" href="mailto:nelson.ncdesigns@gmail.com">nelson.ncdesigns@gmail.com</a></li>

			<li role="listitem"><a target="_blank" rel="noopener" href="https://www.facebook.com/ncdesignsstudi0" class="intcmp_content  btn btn-info" onClick="_gaq.push(['_trackEvent', 'Social Link', 'Facebook Link', 'Facebook – Words']);">Facebook</a></li>

			<li role="listitem"><a target="_blank" rel="noopener" href="https://www.behance.net/ncdesigns" class="intcmp_content  btn btn-info" onClick="_gaq.push(['_trackEvent', 'Social Link', 'Behance Link', 'Behance – Words']);">Behance</a></li>

			<li role="listitem"><a target="_blank" rel="noopener" href="https://www.linkedin.com/pub/nelson-correia/10/493/b14" class="intcmp_content btn btn-info" onClick="_gaq.push(['_trackEvent', 'Social Link', 'LinkedIn Link', 'LinkedIn – Words']);">LinkedIn</a></li>
		</ul>
	</div>
	<h2 id="recent_posts">Recent Posts</h2>
	<ul class="posts">
		{% for post in site.posts %}
			<li><span>{{ post.date | date_to_string }}</span> &raquo; <a class="intcmp_content" href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
		{% endfor %}
	</ul>
</section>
<template id="shadowDOMTemplateTest">
<style>
div{
color:blue;
}
</style>
<div>
	<content></content>
</div>
</template>
<script>
    var shadow = document.querySelector('#special-header').attachShadow({mode: 'open'});
    var template = document.querySelector('#shadowDOMTemplateTest');
    var clone = document.importNode(template.content, true);
    shadow.appendChild(clone);
    document.querySelector('#special-header').textContent = 'Work can be fun.';
</script>