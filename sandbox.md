---
layout: page
title: Sandbox Testing
---
{% include JB/setup %}

<script>
//$(document).ready(function(){
//$("#ajaxcontent").load("http://ncdesigns-studio.com/pages.html","#wrap");
//});
</script>
<script>
//var stateObj = { foo: "bar" };
//history.pushState(stateObj, "page 2", "/test.html");
</script>
<main class="flex-container">
<h1 class="flex-item">
	Sandbox Testing
</h1>
<div class="flex-item" id="ajaxcontent">
</div>
<div id="sampleArea"></div>

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-target
</button>
<div class="collapse" id="collapseExample">
  <div class="well">
    ...
  </div>
</div>

</main>