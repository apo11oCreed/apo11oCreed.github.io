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
			I typed this greeting with the help of a cloud editor. As I work through this message, I look back on a time when I could work only from my mac. These days, I&apos;m spending more and more time exploring tech tools that will support my aspirations to work remotely and maintain sites wherever and whenever.
		</p>
		<p itemprop="description">
			Moreso than coding, I find <span style="text-transform:uppercase;">this</span> is what makes my work a pleasure &mdash; problem solving to build sites quicker and leaner.
		</p>
		<p itemprop="description">
			And building this site is fun. These pages are a series of explorations into the latest web practices and utilities. To see more, please have a look at some of my finished projects on the <a class="intcmp_content" href="/portfolio.html" title="portfolio" onClick="_gaq.push(['_trackEvent', 'Internal Link', 'Portfolio Link', 'Portfolio – Words']);">portfolio</a> page. Incidently, these sites have been maintained, at times, right from my phone.
		</p>
		<hr>
		<p itemprop="specialty">
			If you're looking for help on maintaining or upgrading your site, I can be reached through several channels:
		</p>
	<div>
		<ul role="list" class="grid_contact-info">
			<link itemprop="url" href="https://ncdesigns-studio.com">

			<li role="listitem">Email: <a class="intcmp_content" title="nelson.ncdesigns@gmail.com" href="mailto:nelson.ncdesigns@gmail.com">nelson.ncdesigns@gmail.com</a></li>

			<li role="listitem"><a itemprop="sameAs" target="_blank" rel="noopener" title="facebook" href="https://www.facebook.com/ncdesignsstudi0" class="intcmp_content" onClick="_gaq.push(['_trackEvent', 'Social Link', 'Facebook Link', 'Facebook – Words']);">Facebook</a></li>

			<li role="listitem"><a itemprop="sameAs" title="behance" target="_blank" rel="noopener" href="https://www.behance.net/ncdesigns" class="intcmp_content" onClick="_gaq.push(['_trackEvent', 'Social Link', 'Behance Link', 'Behance – Words']);">Behance</a></li>

			<li role="listitem"><a itemprop="sameAs" title="linkedIn" target="_blank" rel="noopener" href="https://www.linkedin.com/pub/nelson-correia/10/493/b14" class="intcmp_content" onClick="_gaq.push(['_trackEvent', 'Social Link', 'LinkedIn Link', 'LinkedIn – Words']);">LinkedIn</a></li>

			<li role="listitem">Phone: <a class="intcmp_content" href="tel:7814360309" title="784360309" class="visible-xs counter_bootstrap_a">7814360309</a><span class="hidden-xs counter_bootstrap_a">7814360309</span></li>
		</ul>
	</div>
	<h2>Recent Posts</h2>
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