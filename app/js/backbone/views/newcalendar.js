App.Views.NewCalendarioView = Backbone.View.extend({

	tagName: '',
	className: '',
	id: '',

	//template: _.template( $("#tpl_calendar").html() ),
	template: swig.compile( $("#tpl_newcalendar").html() ),
	//template: swig.compileFile($("#tpl_calendar")),

	events: {
		'click #btn_del': 'delDates',
		'click #btn_add': 'addCalendar',
		'focus .txt_dates': 'bindDatePicker',
	},

	initialize: function(config){

		console.info('New new calendar view ...');
		this.el = config.el;
	},	

	render: function(){		

		this.$el.html(this.template());		
	},

	addCalendar: function(){

		this.model = new App.Models.CalendarModel();

		this.model.set(
			{
				initial_date: this.$el.find("#initial_date").val(),
				end_date: this.$el.find("#end_date").val(),
				state: this.$el.find("#state").val(),			
			}, 
			{
				validate: true
			}
		);

		if( ! this.model.validationError ){			
			window.collections.calendar_list = window.collections.calendar_list || new App.Collections.CalendarList();
			window.collections.calendar_list.add(this.model);

			this.delDates();//Limpiamos los datos del los controles html	

			this.renderMsg('success', 'Calendario almacenado con exito :)', '');			
		}
		else{
			this.renderMsg('error', 'Ha ocurrido un error con las fechas a introducir. Por favor verifique :(', '');			
		}

		/*delete this.model;
		delete window.views.msgview;*/
		
	},

	renderMsg: function(type_msg, msg, submsg){

		if(type_msg == 'error'){
			window.views.msgview = new App.Views.MsgView({
				type_msg: type_msg,
				msg: msg,
				submsg: submsg,
			});
		}
		else{
			window.views.msgview = new App.Views.MsgView({
				type_msg: type_msg,
				msg: msg,
				submsg: submsg,
			});
		}

		window.views.msgview.fadeOutMsg();
	},

	bindDatePicker: function(){
		this.$el.find("input.txt_dates").datepicker({
			dateFormat: 'yy-mm-dd',
			showAnim: 'clip',
			monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			dayNamesMin: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
		});
	},

	delDates: function(){
		this.$el.find("input.txt_dates").val('');		
	}
});