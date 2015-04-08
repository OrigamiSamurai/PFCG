var StatValueView = Backbone.View.extend({

	events: {
		"keypress input.newStatValue":"updateStat"
	},

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
		_.bindAll(this,'updateStat');
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
    return this;
	},

	createToolTip: function() {
		this.vent.trigger("createToolTip",this);
	},

	updateStat: function() {
		var timeoutId = 0;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(
			$.proxy(
				function (){
					this.model.set({value:parseInt(this.$el.find('.newStatValue').val())})
				},
				this
			),
			1000
		)
	},

	removeToolTip: function() {
		this.vent.trigger("removeToolTip",this);
	}
});