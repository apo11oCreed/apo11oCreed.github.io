---
layout: page
title: Sandbox Testing
---
{% include JB/setup %}

<script>
$(document).ready(function(){
$("#ajaxcontent").load("http://ncdesigns-studio.com/pages.html","#wrap");
});
</script>
<script>
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
</script>
<main class="flex-container">
<h1 class="flex-item">
	Sandbox Testing
</h1>
<div class="flex-item" id="ajaxcontent">
</div>
</main>