App.Views.NewActivityView = Backbone.View.extend({

	tagName: '',
	className: '',
	id: '',

	template: swig.compile( $("#tpl_newactivity").html() ),

	events: {
		'change #activity_type': 'changePlace',
		'click #btn_add_schedule': 'addSchedule',
		'click #btn_save_activity': 'saveActivity',
	},

	saveActivity: function(){

		this.model.set({

			type: this.$el.find('#activity_type').val(),
			description: this.$el.find('#activity_description').val(),
			place: this.$el.find('#activity_place').val(),
		},{
			validate: true,
		});

		if( this.model.isValid() && this.saveSchedules() ){			
			window.collections.activities_list = window.collections.activities_list || new App.Collections.ActivitiesList();
			window.collections.activities_list.add(this.model);

			//this.model.save();

			this.delDates();//Limpiamos los datos del los controles html	

			this.renderMsg('success', 'Actividad almacenada con exito :)', '');			
		}
		else{
			this.renderMsg('error', 'Existen errores en los datos de la actividad o los horarios asociados a esta. Verifique por favor :(', '');			
		}
	},

	/*Metodo que agrega los horarios de la actividad actual a modelos y colecciones backbone.*/
	saveSchedules: function(){
		
		var list_days          = this.$el.find("[name='days[]']");
		var list_initial_hours = this.$el.find("[name='initial_hours[]']");
		var list_end_hours     = this.$el.find("[name='end_hours[]']");
		var _exit = true;

		if( _.size(list_days) > 0 ){			

			$(list_days).each(function(index, element){

				var schedule = new App.Models.ScheduleModel();
				
				schedule.set({
					day: $(element).val(),
					initial_hour: $(list_initial_hours[index]).val(),
					end_hour: $(list_end_hours[index]).val(),
				},{
					validate: true,
				});

				if( schedule.isValid() ){

					window.collections.schedules_list = window.collections.schedules_list || new App.Collections.SchedulesList();
					window.collections.schedules_list.add(schedule);
				}	
				else{
					_exit = false; 
				}		
			});
		}
		else{			
			_exit = false;
		}

		return _exit;
	},
	
	renderMsg: function(type_msg, msg, submsg){
			
		window.views.msgview = new App.Views.MsgView({
			type_msg: type_msg,
			msg: msg,
			submsg: submsg,
		});
		
		window.views.msgview.fadeOutMsg();

		delete window.views.msgview;
	},

	delDates: function(){

		this.$el.find("#activity_type, input.txt_data").val('');
	},

	addSchedule: function(){

		window.views.newschedule = new App.Views.NewScheduleView({
			el: this.el,	
		});
	},

	changePlace: function(element){

		if(element.currentTarget.value == 'cg'){

			this.$el.find('#activity_place').attr('disabled', true);
			this.$el.find('#activity_place').val('CAPF');
		}
		else{

			this.$el.find('#activity_place').attr('disabled', false);
			this.$el.find('#activity_place').val('');
		}
	},

	initialize: function(config){

		console.info('New Activity view started ...');
		this.el = config.el;
		//this.model = config.model;
	},

	render: function(){

		this.$el.html( this.template() );	
	}

});