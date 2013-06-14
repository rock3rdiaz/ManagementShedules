App.Views.AllCalendarsView = Backbone.View.extend({

	events: {
		'click .allcalendars_btn-del': 'removeCalendar',
	},

	template: swig.compile( $("#tpl_allcalendars").html() ),

	initialize: function(){

		console.info('New all calendars view ...');
	},

	render: function(){

		if( window.collections.calendar_list != undefined && window.collections.calendar_list.length > 0 ){
			
			var list_models = new Array();

			window.collections.calendar_list.models.forEach(function(model){
				var _model = model.toJSON();
				_model.cid = model.cid;
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

	removeCalendar: function(element){		
		//console.log(element.currentTarget.id);
		var _model = window.collections.calendar_list.get((element.currentTarget.id).split("_", 1));
		window.collections.calendar_list.remove(_model);
		
	},
});