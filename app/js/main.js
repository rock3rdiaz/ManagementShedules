$(function(){

	console.info('App started ...');
	
	window.routers = new App.Routers.NavBarRouter();
	Backbone.history.start();

});