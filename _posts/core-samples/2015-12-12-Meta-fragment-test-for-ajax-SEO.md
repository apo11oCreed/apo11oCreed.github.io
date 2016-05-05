---
layout: post
category : lessons
tagline: "Supporting tagline"
tags : [testing]
description: This is an AJAX test, this is only a test!
---
{% include JB/setup %}

<script>
$( "#ajaxcontent" ).load( "https://ncdesigns-studio.com/pages.html" );
</script>
<main class="flex-container">
<h1 class="flex-item">
	Let the games begin! This is an AJAX test, this is only a test!
</h1>
<div class="flex-item" id="ajaxcontent">
</div>
</main>