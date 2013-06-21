App.Models.ScheduleModel = Backbone.Model.extend({

	defaults:{
		initial_hour: '',
		end_hour: '',
		day: '',
	},

	validate: function(attrs){
		if( _.isEmpty(attrs.initial_hour) || _.isEmpty(attrs.end_hour) || (attrs.initial_hour > attrs.end_hour) ){
			return "error";
		}
	},

	initialize: function(){
		
		console.info('New schedule model started ...');		
	},

});