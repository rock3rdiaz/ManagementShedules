App.Views.NewActivityView = Backbone.View.extend({

	tagName: '',
	className: '',
	id: '',

	template: swig.compile( $("#tpl_newactivity").html() ),

	events: {
		'change #type': 'changePlace',
		'click #btn_add_schedule': 'newSchedule',
	},

	newSchedule: function(){

		window.views.newschedule = new App.Views.NewScheduleView({
			el: this.el,			
		});
	},

	changePlace: function(element){

		if(element.currentTarget.value == 'cg'){

			this.$el.find('#place').attr('disabled', true);
			this.$el.find('#place').val('CAPF');
		}
		else{

			this.$el.find('#place').attr('disabled', false);
			this.$el.find('#place').val('');
		}
	},

	initialize: function(config){

		console.info('New Activity view started');
		this.el = config.el;
	},

	render: function(){

		this.$el.html( this.template() );	
	}

});