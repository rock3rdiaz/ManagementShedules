App.Views.AllActivitiesView = Backbone.View.extend({

	events: {
		'click .allactivities_btn_del': 'removeActivity'
		
	},

	template: swig.compile( $("#tpl_allactivities").html() ),

	initialize: function(){

		console.info('New all activities view ...');
	},

	render: function(){

		if( !_.isUndefined(window.collections.activities_list) && _.size(window.collections.activities_list) > 0 ){
			
			var list_models = new Array();

			window.collections.activities_list.models.forEach(function(model){
				var _model = model.toJSON();
				_model.cid = model.cid;
				list_models.push(_model);
			});
	
			this.$el.html( this.template({
				activities: list_models
			}));		
		}
		else{
			window.views.msgview = new App.Views.MsgView({
				$el: $("body").find("#contenido_dinamico"),
				type_msg: 'empty',
				msg: ':\'(',
				submsg: 'Sin actividades',
			});
		}		
	},

	removeActivity: function(element){		
		
		var _model = window.collections.activities_list.get((element.currentTarget.id).split("_", 1));
		window.collections.activities_list.remove(_model);		
	},
});