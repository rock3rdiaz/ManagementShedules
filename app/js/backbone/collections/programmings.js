App.Collections.ProgrammingList = Backbone.Collection.extend({

	url: 'app/php/models/programming.php',	

	model: App.Models.ProgrammingModel,	

	initialize: function(){

		console.info('Programming list started ...');

		this.on('add', function(model){
			console.info('Model ' +model.cid+ ' added ...');			
		});

		this.on('remove', function(model){
			console.info('Model ' +model.cid+ ' removed ...');			
		});
	},
});