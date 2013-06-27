App.Collections.TurnList = Backbone.Collection.extend({

	url: 'app/php/models/turn.php',	

	model: App.Models.TurnModel,	

	initialize: function(){

		console.info('Turns list started ...');

		this.on('add', function(model){
			console.info('Turn ' +model.cid+ ' added ...');			
		});

		this.on('remove', function(model){
			console.info('Turn ' +model.cid+ ' removed ...');			
		});
	},
});