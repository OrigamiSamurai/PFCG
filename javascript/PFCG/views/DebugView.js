var DebugView = Backbone.View.extend({

	className: "panel panel-default",

	id: "debugContainer",

	template: templates.DebugView,

	events: {
		"click #addStat":"openAddStat",
		"click #addSource":"openAddSource",
		"keypress input.createStatValue":"validateInput",
		"keypress input.createStatLevelGained":"validateInput",
	},

	initialize: function(options) {
		this.listenTo(this.model.attributes.stats,'add',this.render);
		this.listenTo(this.model.attributes.sources,'add',this.render);
		this.collapsed = false;
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));

		this.model.attributes.stats.each(
			function(stat){
				var debugStatView = new DebugStatView({model:stat});
				this.$el.find('div#debugStatsContainer table').append(debugStatView.el);
			},
			this
		);
		this.model.attributes.sources.each(
			function(source){
				var debugSourceView = new DebugSourceView({model:source});
				this.$el.find('div#debugSourcesContainer table').append(debugSourceView.el);
			},
			this
		);
    return this;
	},

	openAddSource: function() {
		console.log("Now we're going to add a source!");
		var createSourceView = new CreateSourceView({model:this.model});
		this.$el.find('#debugSourcesContainer').append(createSourceView.el);
	},

	openAddStat: function() {
		console.log("Now we're going to add a stat!");
		var createStatView = new CreateStatView({model:this.model});
		this.$el.find('#debugStatsContainer').append(createStatView.el);
	},

	validateInput: function(keyEvent) {
		validatePositiveIntegerInput(keyEvent);
	}

});