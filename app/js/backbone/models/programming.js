App.Models.ProgrammingModel = Backbone.Model.extend({

	defaults: {
 	
 		schedule_id: '',
 		activity_id: '',
 		instructor_id: '',
 		calendar_id: '',
 		turn_id: '',
	},

	validate: function(attrs){
		
	},

	initialize: function(){		
		console.info('New activity model ...');
	},
});