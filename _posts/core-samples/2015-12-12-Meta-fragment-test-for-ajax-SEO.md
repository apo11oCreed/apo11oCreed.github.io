---
layout: post
category : testing
tagline: "Sandbox"
tags : [testing]
---
{% include JB/setup %}

<main class="flex-container">
<h1 class="flex-item">
	Let the games begin!
</h1>
<div class="flex-item" id="ajaxcontent">
</div>
</main>
<script>
$( document ).ready(function() {
$( "#ajaxcontent" ).load( "https://ncdesigns-studio.com/pages.html h2" );
});
</script>