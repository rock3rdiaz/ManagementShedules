App.Views.NewProgrammingView = Backbone.View.extend({

	template: swig.compile( $("#tpl_newprogramming").html() ),

	events:{

	},

	initialize: function(config){

		console.info('New programming view started ...');

		this.el = config.el;
	},

	render: function(){

		window.list_instructors = new Array();

		window.xhr = $.getJSON('app/php/models/instructor.php');

		xhr.done(function(instructors){

			instructors.forEach(function(instructor){

				console.log(instructor); 
				list_instructors.push(instructor);				
			});
		});


		this.$el.html( this.template({
			instructors: list_instructors
		}));
	}
});