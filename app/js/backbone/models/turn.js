App.Models.TurnModel = Backbone.Model.extend({

	defaults: {
 	
 		name: '',
 		total_hours: '',
	},

	validate: function(attrs){		
	},

	initialize: function(){		
		console.info('New turn model ...');
	},
});