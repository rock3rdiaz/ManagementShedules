App.Collections.SchedulesList = Backbone.Collection.extend({

	model: App.Models.ScheduleModel, 	

	initialize: function(){

		var self = this;

		console.info('Schedules list started ...');

		this.on('add', function(model){
			console.info('Model ' +model.cid+ ' added ...');		

			if( model.isNew() )	{

				self.save( model.attributes, {
					success: function(data){
						console.info("Saved "+data);
					},
					error: function(data){
						console.info("Error "+data.responseText);
					}
				});
			}
		});

		this.on('remove', function(model){
			console.info('Model ' +model.cid+ ' removed ...');

			model.destroy({
				success: function(data){
					console.info("Deleted "+data);
				},
				error: function(data){
					console.info("Error "+data.responseText);
				}
			});
		});
	},
});