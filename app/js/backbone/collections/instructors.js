App.Collections.InstructorsList = Backbone.Collection.extend({

	url: 'app/php/models/instructor.php',	

	model: App.Models.InstructorModel,	

	initialize: function(){

		console.info('Instructors list started ...');

		this.on('add', function(model){
			console.info('Model ' +model.cid+ ' added ...');			
		});

		this.on('remove', function(model){
			console.info('Model ' +model.cid+ ' removed ...');			
		});
	},
});