var StatValueView = Backbone.View.extend({

	template: templates.StatValueView,

	tagName: 'span',

	className: 'statValue',

	initialize: function(options) {
		this.listenTo(this.model,'change',this.render);
		this.vent = options.vent;
		this.render();
		this.$el.hover(
			function(){
				$(this).children('.toolTip').show();
			},
			function(){
				$(this).children('.toolTip').hide();
			}
		)
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
    return this;
	}
});