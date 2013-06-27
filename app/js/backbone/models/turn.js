App.Models.TurnModel = Backbone.Model.extend({

	defaults: {
 	
 		name: '',
 		total_hours: '',
	},

	validate: function(attrs){	

		if(_.isEmpty(attrs.name)){
			return "El nombre del turno no puede estar vacio";
		}
	},

	initialize: function(){		
		console.info('New turn model ...');
	},
});