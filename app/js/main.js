$(function(){

	console.info('App started ...');

	Backbone.Collection.prototype.saveAllElements = function(view){

		Backbone.sync( 'create', this, {

			beforeSend: function(){
				window.views._ajaxload = new App.Views._AjaxLoadView();			
			},

			success: function(data){
				console.info('Saved collection');
				window.views._ajaxload.remove();

				view.render();
				console.log(this);
			},

			error: function(data){
				console.info('Error ' + data.responseText);
			}
		} );
	};

	window.collections.calendar_list    = new App.Collections.CalendarList();
	//window.collections.instructors_list = new App.Collections.InstructorsList();	
	
	//window.collections.instructors_list.fetch();

	window.xhr = window.collections.calendar_list.fetch({
		beforeSend: function(){
			window.views._ajaxload = new App.Views._AjaxLoadView();
		},
		success: function(data){
			window.routers = new App.Routers.NavBarRouter();
			Backbone.history.start();
			
			window.views._ajaxload.remove();
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