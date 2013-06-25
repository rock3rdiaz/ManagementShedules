App.Views.NewTurnView = Backbone.View.extend({

	template: swig.compile( $("#tpl_newturn").html() ),

	events: {
		'click #turn_btn_add_schedule': 'addSchedule',
	}, 

	initialize: function(config){

		 console.info('New turn vie started ...');

		 this.el =  config.el;
	},

	render: function(){

		this.$el.html( this.template() );
	},

	addSchedule: function(){

		window.views.newschedule = new App.Views.NewScheduleView({
			el: this.el,	
		});
	},
});