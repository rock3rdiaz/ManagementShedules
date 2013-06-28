App.Views._AjaxLoadView = Backbone.View.extend({

	tagName: "figure><img src='public/img/ajax-loader-classic.gif' alt='' /></figure",
	
	initialize: function(){

		this.render();
	},

	render: function(){
		$("body").find("#ajax_gif").html( this.$el );
	}
});