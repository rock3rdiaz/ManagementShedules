App.Models.CalendarModel = Backbone.Model.extend({

	defaults: {
 	
 		initial_date: '',
 		end_date: '',
 		state: '',
	},

	validate: function(attrs){
		if(attrs.initial_date == '' || attrs.end_date == '' || (attrs.initial_date > attrs.end_date)){
			return "Existen problemas en las fechas";
		}
	},

	initialize: function(){
		var self = this;
		console.info('New calendar model ...');
		
		/*this.on('invalid', function(model, msg){
			self.validationError = true;
		});*/
	},
});