App.Models.InstructorModel = Backbone.Model.extend({

	defaults: {
 	
 		name: '',
 		type: '',
	},

	initialize: function(){		
		console.info('New instructor model ...');
	},
});