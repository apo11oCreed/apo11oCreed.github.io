if('serviceWorker' in navigator){
	navigator.serviceWorker.register('/assets/themes/bootstrap-3/bootstrap/js/serviceWorker.js',{
		scope: '/'
	});
}