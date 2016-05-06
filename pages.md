---
layout: page
title: Pages 
header: Pages
group: navigation
description: Site pages
author: Nelson Correia
---
{% include JB/setup %}

<h2>All Pages</h2>
<ul>
{% assign pages_list = site.pages %}
{% include JB/pages_list %}
</ul>
