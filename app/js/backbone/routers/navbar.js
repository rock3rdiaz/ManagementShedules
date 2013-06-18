App.Routers.NavBarRouter = Backbone.Router.extend({

	routes:{

		'': 'root',
		'new_calendar': 'newCalendar',
		'all_calendars': 'allCalendars',
		'new_activity': 'newActivity',
	},
	
	initialize: function(){

		console.info('Router started ...');
	},

	root: function(){

		$("#contenido_dinamico").html('');	
	},

	newCalendar: function(){

		window.views.newcalendar = window.views.newcalendar || new App.Views.NewCalendarioView({

			el: $("body").find("#contenido_dinamico"),
		});

		window.views.newcalendar.render();
	},

	allCalendars: function(){

		window.views.allcalendars = window.views.allcalendars || new App.Views.AllCalendarsView({

			el: $("body").find("#contenido_dinamico"),
		});

		window.views.allcalendars.render();
	},

	newActivity: function(){

		window.views.newactivity = window.views.newactivity || new App.Views.NewActivityView({

			el: $("body").find("#contenido_dinamico"), 
		});

		window.views.newactivity.render();
	}

});