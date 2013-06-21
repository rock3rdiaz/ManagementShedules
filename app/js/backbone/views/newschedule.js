App.Views.NewScheduleView = Backbone.View.extend({

	tagName: '',
	className: '',
	id: '',

	template: swig.compile( $("#tpl_newschedule").html() ),

	events: {
		'focus .txt_hours': 'bindTimePicker',
		'click .btn_del_schedule': 'delSchedule',
	},

	delSchedule: function(event){

		var _parents = $(event.currentTarget).parents().get(4);
		$(_parents).remove();
	},

	bindTimePicker: function(event){

		$(event.currentTarget).timepicker({
			timeText: 'Horar seleccionada',
			hourText: 'Hora',
			minuteText: 'Minutos',
			currentText: 'Ahora',
			closeText: 'Ok',
		});
	},

	initialize: function(){

		console.info('New schedule view started');

		this.render();
	},

	render: function(){

		$(this.el).append( this.template() );	
	}

});