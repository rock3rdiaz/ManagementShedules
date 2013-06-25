App.Routers.NavBarRouter = Backbone.Router.extend({

	routes:{

		'': 'root',
		'new_calendar': 'newCalendar',
		'all_calendars': 'allCalendars',
		'new_activity': 'newActivity',
		'all_activities': 'allActivities',
		'new_turn': 'newTurn',
		'new_programming': 'newProgramming'
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
			model: new App.Models.CalendarModel(),
		});

		window.views.newcalendar.render();
	},

	newActivity: function(){

		window.views.newactivity = window.views.newactivity || new App.Views.NewActivityView({

			el: $("body").find("#contenido_dinamico"), 
			model: new App.Models.ActivityModel(),
		});

		window.views.newactivity.render();
	},

	allCalendars: function(){

		window.views.allcalendars = window.views.allcalendars || new App.Views.AllCalendarsView({

			el: $("body").find("#contenido_dinamico"),
		});

		window.views.allcalendars.render();
	},

	allActivities: function(){

		window.views.allactivities = window.views.allactivities || new App.Views.AllActivitiesView({

			el: $("body").find("#contenido_dinamico"), 
		});

		window.views.allactivities.render();
	},

	newTurn: function(){

		window.views.newturn = window.views.newturn || new App.Views.NewTurnView({

			el: $("body").find("#contenido_dinamico"), 
		});

		window.views.newturn.render();
	},

	newProgramming: function(){

		window.views.newprogramming = window.views.newprogramming || new App.Views.NewProgrammingView({

			el: $("body").find("#contenido_dinamico"), 
		});

		window.views.newprogramming.render();		
	}

});