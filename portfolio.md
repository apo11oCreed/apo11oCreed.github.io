---
layout: page
title: Portfolio
description: These are samples of my work which demonstrate all stages of a site build - design, production, testing, launch and maintenance.
author: Nelson Correia
---
{% include JB/setup %}

<main ng-app="portfolio" role="main" itemscope itemtype="http://schema.org/CreativeWork">
<div ng-controller="portfolioCtrl">
	<article ng-include="'/assets/templates/portfolio.html'">
	</article>
	</div>
</main>