App.Collections.CalendarList = Backbone.Collection.extend({

	url: 'app/php/models/calendar.php',

	model: App.Models.CalendarModel,	

	initialize: function(){

		var self = this;

		console.info('Calendar list started ...');

		this.on('add', function(model){
			console.info('Model ' +model.cid+ ' added ...');

			if(model.isNew()){
				self.sync('create', model);
			}
			else{
				self.sync('read', model);
			}			
		});

		this.on('remove', function(model){

			model.destroy({
				success: function(data){
					console.log(data);
					window.views.allcalendars.render();
				},
				error: function(data){
					console.log(data.responseText);
				}
			});
		});
	},
});