---
layout: page
title: Categories
header: Posts By Category
group: navigation
description: This page contains lists of NC Designs Studio posts arranged by category. The list includes static introductory, standard blog and random testing posts.
---
{% include JB/setup %}

<ul class="tag_box inline">
  {% assign categories_list = site.categories %}
  {% include JB/categories_list %}
</ul>


{% for category in site.categories %} 
  <h2 id="{{ category[0] }}-ref">{{ category[0] | join: "/" }}</h2>
  <ul>
    {% assign pages_list = category[1] %}  
    {% include JB/pages_list %}
  </ul>
{% endfor %}

