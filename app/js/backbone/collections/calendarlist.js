App.Collections.CalendarList = Backbone.Collection.extend({

	model: App.Models.CalendarModel,	

	initialize: function(){

		console.info('Calendar list started ...');

		this.on('add', function(model){
			console.info('Model ' +model.cid+ ' added ...');
			
		});
	}
});