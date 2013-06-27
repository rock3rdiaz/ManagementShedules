App.Models.ActivityModel = Backbone.Model.extend({

	defaults: { 	
 		type: '',
 		description: '',
 		place: ''
	},

	validate: function(attrs){
		if(_.isEmpty(attrs.type) || _.isEmpty(attrs.description) || _.isEmpty(attrs.place)){
			return "Existen errores en los datos de la actividad :(";
		}
	},

	initialize: function(){		
		console.info('New activity model ...');
	},
});