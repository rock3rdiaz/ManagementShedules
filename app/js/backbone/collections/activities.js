App.Collections.ActivitiesList = Backbone.Collection.extend({

	model: App.Models.ActivityModel,	

	initialize: function(){

		console.info('Activivies list started ...');

		this.on('add', function(model){
			console.info('Model ' +model.cid+ ' added ...');
			
		});

		this.on('remove', function(model){
			console.info('Model ' +model.cid+ ' removed ...');
			window.views.allactivities.render();
		});
	},
});