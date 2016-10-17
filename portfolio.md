---
layout: page
title: Portfolio
description: NC Designs Studio Portfolio
author: Nelson Correia
---
{% include JB/setup %}

<main ng-app="portfolio" role="main" itemscope itemtype="http://schema.org/CreativeWork">
<div ng-controller="TodoCtrl">
	<article ng-include="'/assets/templates/portfolio.html'">
	</article>
	</div>
</main>