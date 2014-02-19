var ToolTipView = Backbone.View.extend({
	className: "toolTipContainer",

	initialize: function(options) {
		_.bindAll(this,"removeToolTip");
		options.vent.bind("removeToolTip", this.removeToolTip);
		this.render();
	},

	render: function() {
		this.collection.each(
			function(stat){
				this.$el.append(Mustache.to_html(templates.ToolTipRowView,stat.attributes));
			},
			this
		);
    return this;
	},

	removeToolTip: function() {
		this.remove();
	}
});