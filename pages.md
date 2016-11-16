---
layout: page
title: Pages 
header: Pages
group: navigation
description: This is a list of all pages in the NC Designs Studio website.
author: Nelson Correia
---
{% include JB/setup %}

<h2>All Pages</h2>
<ul>
{% assign pages_list = site.pages %}
{% include JB/pages_list %}
</ul>
