App.Collections.CalendarList = Backbone.Collection.extend({

	url: 'app/php/models/calendar.php',	

	model: App.Models.CalendarModel,	

	initialize: function(){

		var self = this;

		console.info('Calendar list started ...');

		this.on('add', function(model){
			console.info('Model ' +model.cid+ ' added ...');
		});

		this.on('remove', function(model){
			console.info('Model ' +model.cid+ ' removed ...');

			var xhr = model.destroy();
			console.log(xhr);
			
			window.views.allcalendars.render();	
		});
	},
});