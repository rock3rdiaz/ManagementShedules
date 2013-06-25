$(function(){

	console.info('App started ...');

	window.collections.calendar_list = new App.Collections.CalendarList();
	//var xhr = window.collections.calendar_list.fetch();//Traemos todos los datos del server (solo los modelos de esta coleccion)
	
	window.collections.calendar_list.fetch({
		success: function(data){
			window.routers = new App.Routers.NavBarRouter();
			Backbone.history.start();
		}
	});
	
});

function startCalendars(){

	window.collections.calendar_list = new App.Collections.CalendarList();	

	var xhr = $.getJSON('app/php/models/calendar.php');

	xhr.done(function(calendars){

		console.log(calendars);

		calendars.forEach(function(calendar){

			window.collections.calendar_list.add(calendar);			
		});
	});
}