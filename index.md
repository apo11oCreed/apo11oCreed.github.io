---
layout: page
title: NC Designs Studio on Github
tagline: Specializing in web coding
---
{% include JB/setup %}

## Work CAN be fun.

Hi, I typed this greeting with the help of a cloud editor. As I work through this message, I look back on a time when I could work only from my mac. These days, I'm spending more and more time exploring tech tools that will support my aspirations to work remotely and maintain sites wherever and whenever.

Moreso than coding, I find THIS is what makes my work a pleasure - problem solving to build sites quicker and leaner.

And building this site is fun. These pages are a series of explorations into the latest web practices and utilities. To see more, please have a look at some of my finished projects on the [ portfolio ](/portfolio.html) page. Incidently, these sites have been maintained, at times, right from my phone.

If you're looking for help on maintaining or upgrading your site, I can be reached through several channels:

Email:
Facebook:
LinkedIn:
Google+:
Phone:

##Recent Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
