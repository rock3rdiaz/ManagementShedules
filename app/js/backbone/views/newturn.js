App.Views.NewTurnView = Backbone.View.extend({

	arr_views: new Array(),//Listados de todas las vistas "newschedule" asociadas a este turno

	template: swig.compile( $("#tpl_newturn").html() ),

	events: {
		'click #turn_btn_add_schedule': 'renderSchedule',
		'click #turn_btn_save': 'saveTurn',
	}, 

	initialize: function(config){

		 console.info('New turn view started ...');

		 this.el =  config.el;
	},

	render: function(){

		this.$el.html( this.template() );
	},

	renderSchedule: function(){

		window.views.newschedule = new App.Views.NewScheduleView({
			el: this.el,	
			model: new App.Models.ScheduleModel(),
		});

		this.arr_views.push(window.views.newschedule);
	},

	saveTurn: function(){

		var model_turn = new App.Models.TurnModel();

		model_turn.set({

			name: this.$el.find('#turn_name').val(),
		},{
			validate: true,
		});

		if( model_turn.isValid() && this.saveSchedules() ){

			window.collections.turn_list = window.collections.turn_list || new App.Collections.TurnList();
			window.collections.turn_list.add(model_turn);

			//window.collections.schedule_turn_list.saveAllElements(this);

			this.renderMsg('success', 'Turno y horarios almacenados con exito :)', '');						
		}
		else{
			this.renderMsg('error', 'Ha ocurrido un error con los datos del turno o sus horarios asociados :(', '');			
		}
		
	},

	saveSchedules: function(){

		var _validation = true;

		var _day;
		var _initial_hour;
		var _end_hour;

		if( _.size(this.arr_views) == 0 ){
			_validation = false;
		}

		else{
			window.collections.schedule_turn_list = window.collections.schedule_turn_list || new App.Collections.SchedulesList();

			this.arr_views.forEach(function(view, index){

				_day          = view.$el.find("[name='days[]']")[index].value;
				_initial_hour = view.$el.find("[name='initial_hours[]']")[index].value;
				_end_hour     = view.$el.find("[name='end_hours[]']")[index].value;

				view.model.set({
					initial_hour : _initial_hour,
					end_hour: _end_hour,
					day: _day,
				},{
					validate: true,
				});

				if( view.model.isValid() ){
					window.collections.schedule_turn_list.add(view.model);
				}
				else{
					_validation = false;				
				}
				
			});
		}

		return _validation;
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
});