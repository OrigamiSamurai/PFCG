var StatValueView = Backbone.View.extend({

	template: templates.StatValueView,

	tagName: 'span',

	className: 'statValue',

	initialize: function(options) {
		this.vent = options.vent;
		this.listenTo(this.model,'change',this.render);
		_.bindAll(this,"createToolTip");
		_.bindAll(this,"removeToolTip");
		this.render();
		this.$el.hover(
			this.createToolTip,
			this.removeToolTip
		)
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
    return this;
	},

	createToolTip: function() {
		this.vent.trigger("createToolTip",this);
	},

	removeToolTip: function() {
		this.vent.trigger("removeToolTip",this);
	}	
});