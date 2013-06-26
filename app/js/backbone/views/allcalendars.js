App.Views.AllCalendarsView = Backbone.View.extend({

	events: {
		'click .allcalendars_btn-del': 'removeCalendar',		
		'click .allcalendars_btn-update': 'updateCalendar',		
		'mouseover .allcalendars_btn-del': 'showTooltip',
		'mouseover .allcalendars_btn-update': 'showTooltip'		
	},

	template: swig.compile( $("#tpl_allcalendars").html() ),

	initialize: function(){

		console.info('New all calendars view ...');
	},

	updateCalendar: function(event){

		
	},

	showTooltip: function(event){

		if(event.currentTarget.name == 'del'){
			var _title = 'Eliminar';
		}
		else{
			var _title = 'Actualizar';
		}

		$(event.currentTarget).tooltip({
			title: _title,
		});
	},

	render: function(){

		if( _.size(window.collections.calendar_list) > 0 ){
			
			var list_models = new Array();

			window.collections.calendar_list.models.forEach(function(model){
				var _model = model.toJSON();
				_model.id = model.id;
				list_models.push(_model);
			});

			window.list_calendars = list_models;
	
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

	removeCalendar: function(event){	

		var _model = window.collections.calendar_list.get((event.currentTarget.id).split("_", 1));

		if(confirm('Esta seguro de eliminar este elemento?')){
			window.collections.calendar_list.remove(_model);
		}
	},
});