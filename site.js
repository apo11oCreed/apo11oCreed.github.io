if('serviceWorker' in navigator){
	navigator.serviceWorker.register('https://ncdesigns-studio.com/serviceWorker.js',{
		scope: '/'
	});
}