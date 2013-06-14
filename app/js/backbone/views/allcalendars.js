App.Views.AllCalendarsView = Backbone.View.extend({

	events: {

	},

	template: swig.compile( $("#tpl_allcalendars").html() ),
	template_error: swig.compile( $("#tpl_msg-empty").html() ),

	initialize: function(){

		console.info('New all calendars view ...');	
	},

	render: function(){

		if( window.collections.calendar_list != undefined && window.collections.calendar_list.length > 0 ){
			
			var list_models = new Array();

			window.collections.calendar_list.models.forEach(function(model){
				var _model = model.toJSON();
				list_models.push(_model);
			});
	
			this.$el.html( this.template({
				calendars: list_models
			}));		
		}
		else{
			window.views.msgview = new App.Views.MsgView({
				$el: $("body").find("#contenido_dinamico"),
				type_msg: 'empty',
				msg: ':\'(',
				submsg: 'Sin calendarios',
			});
		}
	},

});