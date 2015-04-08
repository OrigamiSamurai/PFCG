var ToolTipView = Backbone.View.extend({
	className: "toolTipContainer",

	initialize: function(options) {
		_.bindAll(this,"removeToolTip");
		options.vent.bind("removeToolTip", this.removeToolTip);
		this.render();
	},

	render: function() {
		this.$el.append(Mustache.to_html(templates.ToolTipView));
		this.collection.each(
			function(stat){
				this.$el.find('table').append(Mustache.to_html(
					templates.ToolTipViewRow,
					{
						name:stat.attributes.name,
						value:stat.attributes.value,
						levelGained:stat.attributes.levelGained,
						description:stat.attributes.description,
						sourceName:stat.attributes.source.attributes.name
					}
				));
			},
			this
		);
    return this;
	},

	removeToolTip: function() {
		this.remove();
	}
});