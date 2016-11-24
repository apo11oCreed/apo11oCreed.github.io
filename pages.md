---
layout: page
title: Pages 
header: Pages
group: navigation
description: This is a list of all pages in the NC Designs Studio website. Some of the pages are out-of-box from the Jekyll Bootstrap repo, but eventually it will all be customized.
author: Nelson Correia
---
{% include JB/setup %}

<h2>All Pages</h2>
<ul>
{% assign pages_list = site.pages %}
{% include JB/pages_list %}
</ul>
