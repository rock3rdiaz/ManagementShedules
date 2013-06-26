$(function(){

	console.info('App started ...');

	window.collections.calendar_list    = new App.Collections.CalendarList();
	window.collections.instructors_list = new App.Collections.InstructorsList();	
	
	window.collections.instructors_list.fetch();

	window.collections.calendar_list.fetch({
		success: function(data){
			window.routers = new App.Routers.NavBarRouter();
			Backbone.history.start();
		}
	});
	
});

/*
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
*/