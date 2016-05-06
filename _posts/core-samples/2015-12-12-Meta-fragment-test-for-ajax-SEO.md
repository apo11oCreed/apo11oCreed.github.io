---
layout: post
category : lessons
tagline: "Supporting tagline"
tags : [testing]
---
{% include JB/setup %}

<script>
$( "#ajaxcontent" ).load( "http://ncdesigns-studio.com/pages.html #ajaxcontent" );
</script>
<main class="flex-container">
<h1 class="flex-item">
	Let the games begin!
</h1>
<div class="flex-item" id="ajaxcontent">
</div>
</main>