App.Views.NewTurnView = Backbone.View.extend({

	template: swig.compile( $("#tpl_newturn").html() ),

	events: {
		'click #turn_btn_add_schedule': 'renderSchedule',
		'click #turn_btn_save': 'saveTurn',
	}, 

	initialize: function(config){

		 console.info('New turn view started ...');

		 this.el =  config.el;

		 window.arr_views = new Array();
	},

	render: function(){

		this.$el.html( this.template() );
	},

	renderSchedule: function(){

		window.views.newschedule = new App.Views.NewScheduleView({
			el: this.el,	
			model: new App.Models.ScheduleModel(),
		});

		window.arr_views.push(window.views.newschedule);
	},

	saveTurn: function(){

		var model_turn = new App.Models.TurnModel();

		model_turn.set({

			name: this.$el.find('#turn_name').val(),
		},{
			validate: true,
		});

		if( model_turn.isValid() ){

			
		}

		this.saveSchedules();
	},

	saveSchedules: function(){

		window.arr_views.forEach(function(view, index){

			var _day          = view.$el.find("[name='days[]']")[index].value;
			var _initial_hour = view.$el.find("[name='initial_hours[]']")[index].value;
			var _end_hour     = view.$el.find("[name='end_hours[]']")[index].value;

			view.model.set({
				initial_hour : _initial_hour,
				end_hour: _end_hour,
				day: _day,
			},{
				validate: true,
			});

			console.info(view.model.attributes);
			
		});
	}
});