App.Models.ActivityModel = Backbone.Model.extend({

	defaults: { 	
 		type: '',
 		description: '',
 		place: ''
	},

	validate: function(attrs){
		if(_.isEmpty(attrs.type) || _.isEmpty(attrs.description) || _.isEmpty(attrs.place)){
			return "error";
		}
	},

	initialize: function(){		
		console.info('New activity model ...');
	},
});