App.Collections.CalendarList = Backbone.Collection.extend({

	url: 'app/php/models/calendar.php',

	model: App.Models.CalendarModel,	

	initialize: function(){

		var self = this;

		console.info('Calendar list started ...');

		this.on('add', function(model){

			if( model.isNew() ){

				console.info('Model ' +model.cid+ ' added ...');
				//self.sync('create', model);
				
				model.save(model.attributes, {
					success: function(data){
						console.info('Saved '+data);

						self.fetch({reset: true});							
					},
					error: function(data){
						console.info('Error '+data.responseText);
					}
				});			
			}
		});

		this.on('remove', function(model){
			
			model.destroy({
				success: function(data){
					console.log('Model ' + data.id + ' deleted ...');
					window.views.allcalendars.render();
				},
				error: function(data){
					console.log('Error ' + data.responseText);
				}
			});
		});
	},
});