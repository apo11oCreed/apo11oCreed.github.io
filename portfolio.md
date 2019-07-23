---
layout: page
title: Portfolio
description: These are samples of my work which demonstrate all stages of a site build - design, production, testing, launch and maintenance.
author: Nelson Correia
---
{% include JB/setup %}

<section itemscope itemtype="http://schema.org/CollectionPage" ng-app="portfolio">
	<div itemscope itemtype="http://schema.org/ImageGallery"><div ng-controller="portfolioCtrl" class="clearfix">
			<article ng-include="'/assets/templates/portfolio.html'">
			</article>
		</div>
		<div ng-controller="portfolioCtrlWebP" class="clearfix">
			<article ng-include="'/assets/templates/portfolio-webp.html'">
			</article>
		</div></div>
</section>

<!-- <section ng-app="portfoliowebp" itemscope itemtype="http://schema.org/CreativeWork">
	<div ng-controller="portfolioCtrlWebP">
		<article ng-include="'/assets/templates/portfolio-webp.html'">
		</article>
	</div>
</section> -->