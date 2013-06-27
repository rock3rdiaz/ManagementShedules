App.Views.AllCalendarsView = Backbone.View.extend({

	events: {
		'click .allcalendars_btn-del': 'removeCalendar',		
		'click .allcalendars_btn-update': 'showFormUpdateCalendar',	
		'focus .txt_dates': 'bindDatePicker',
		'click #update_btn_ok': 'updateCalendar',
	},

	template: swig.compile( $("#tpl_allcalendars").html() ),

	initialize: function(){

		console.info('New all calendars view ...');
	},

	updateCalendar: function(){

		var self = this;

		window._model.set(
			{
				initial_date: this.$el.find("#initial_date").val(),
				end_date: this.$el.find("#end_date").val(),
				state: this.$el.find("#state").val(),			
			}, 
			{
				validate: true
			}
		);

		if( window._model.isValid() ){

			window._model.save(window._model.attributes, {
				success: function(data){
					console.info('Updated ..' + data);

					self.$el.find("#update_btn_close").trigger('click');
					
					self.render();
				},
				error: function(data){
					console.info('Error ..' + data.responseText);	
				}
			});
		}		
	},

	showFormUpdateCalendar: function(event){

		window._model = window.collections.calendar_list.get((event.currentTarget.id).split("_", 1))
		
		this.$el.html( this.template({
			_calendar: window._model.toJSON(),
			calendars: window.list_models,
		}));
	},

	bindDatePicker: function(){
		this.$el.find("input.txt_dates").datepicker({
			dateFormat: 'yy-mm-dd',
			showAnim: 'clip',
			monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			dayNamesMin: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
		});
	},

	/*showTooltip: function(event){

		if(event.currentTarget.name == 'del'){
			var _title = 'Eliminar';
		}
		else{
			var _title = 'Actualizar';
		}

		$(event.currentTarget).tooltip({
			title: _title,
		});
	},*/

	render: function(){

		if( _.size(window.collections.calendar_list) > 0 ){
			
			window.list_models = new Array();

			window.collections.calendar_list.models.forEach(function(model){
				var _model = model.toJSON();
				_model.id = model.id;
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

	removeCalendar: function(event){	

		var _model = window.collections.calendar_list.get((event.currentTarget.id).split("_", 1));

		if(confirm('Esta seguro de eliminar este elemento?')){
			window.collections.calendar_list.remove(_model);
		}
	},
});