App.Collections.SchedulesList = Backbone.Collection.extend({

	url: 'app/php/models/schedule.php',

	model: App.Models.ScheduleModel, 	

	initialize: function(){

		var self = this;

		console.info('Schedules list started ...');

		this.on('add', function(model){

			console.info('Model ' +model.cid+ ' added ...');	
		});

		this.on('remove', function(model){

			console.info('Model ' +model.cid+ ' removed ...');
		});
	},

	/*saveAllElements: function(){

		Backbone.sync( 'create', this, {

			beforeSend: function(){
				window.views._ajaxload = new App.Views._AjaxLoadView();			
			},

			success: function(data){
				console.info('Saved schedules collection');
				window.views._ajaxload.remove();

				window.views.newturn.render();
			},

			error: function(data){
				console.info('Error ' + data.responseText);
				window.views._ajaxload.remove();
			}
		} );
	},*/
});