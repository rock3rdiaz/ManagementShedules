App.Views.MsgView = Backbone.View.extend({

	tagName: 'div',
	className: '',
	id: '',

	template_msg_empty: swig.compile( $("#tpl_msg-empty").html() ),

	events: {

	},

	initialize: function(config){

		console.info('New msg view');

		switch(config.type_msg){
			case 'error':
				this.el.className = 'alert alert-error';				
				break;
			case 'success':
				this.el.className = 'alert alert-success';
				break;
			case 'empty':
				this.$el = config.$el;
				break;
		}

		this.render(config.type_msg, config.msg, config.submsg);
	},

	render: function(type, msg, submsg){
		if(type == 'empty'){

			this.$el.html( this.template_msg_empty({
				msg: ':\'(',
				submsg: submsg,
			}));

		}
		else{
			$("body").find("#contenido_msg").html(this.$el.append(msg));
		}		
	},

	fadeOutMsg: function(){
		this.$el.fadeOut(4000, function(){
			$(this).html('');
		})
	}

});