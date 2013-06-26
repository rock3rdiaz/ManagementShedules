App.Views.NewProgrammingView = Backbone.View.extend({

	template: swig.compile( $("#tpl_newprogramming").html() ),

	events:{

	},

	initialize: function(config){

		console.info('New programming view started ...');

		this.el = config.el;
	},

	render: function(){

		/*var self = this;

		window.list_instructors = new Array();

		window.xhr = $.getJSON('app/php/models/instructor.php');

		window.xhr.done(function(instructors){

			instructors.forEach(function(instructor){

				list_instructors.push(instructor);				
			});

			self.$el.html( self.template({
				instructors: window.list_instructors,
			}));
		});*/


		if( _.size(window.collections.instructors_list) > 0 ){
			
			var list_models = new Array();

			window.collections.instructors_list.models.forEach(function(model){
				var _model = model.toJSON();
				list_models.push(_model);
			});

			window.list_instructors = list_models;
	
			this.$el.html( this.template({
				instructors: list_models
			}));		
		}
		else{
			this.$el.html( this.template() );
		}	
	}
});