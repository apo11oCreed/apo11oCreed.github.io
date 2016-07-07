---
layout: page
title: Sandbox Testing
description: Sandbox testing page for new technologies
---
{% include JB/setup %}
<style type="text/css">
	img#loaderImageTest {
  width: 600px;
  height: 450px;
  background: url(http://blog.teamtreehouse.com/wp-content/uploads/2015/05/loading.gif) 50% no-repeat;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
<script>
//$(document).ready(function(){
//$("#ajaxcontent").load("http://ncdesigns-studio.com/pages.html","#wrap");
//});
</script>
<script>
//var stateObj = { foo: "bar" };
//history.pushState(stateObj, "page 2", "/test.html");
</script>
<main>
<div class="flex-container">
<h1 class="flex-item">
	Sandbox Testing
</h1>
<div class="flex-item" id="ajaxcontent">
</div>
<div id="sampleArea"></div>
</div>
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
<br><br>
<script type="text/javascript" src="https://feed.informer.com/widgets/CLN29YWOKM.js"></script>
<noscript><a href="https://feed.informer.com/widgets/CLN29YWOKM.html">"alilyloveaffair"</a>
Powered by <a href="http://feed.informer.com/">RSS Feed Informer</a></noscript>
<h2>Loader Image Test</h2>
<img class="img-responsive" id="loaderImageTest" border="0" style="display:block;" src="/images/spacer.gif" alt="Natalie" />

</main>
<script type="text/javascript">
		var loaderImageTestImg=document.getElementById('loaderImageTest');
		var downLoadImage=new Image();
		downLoadImage.onload=function(){
			loaderImageTestImg.src = this.src;
		};
		downLoadImage.src="/images/042914_natalie.JPG";
</script>