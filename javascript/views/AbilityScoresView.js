var AbilityScoresView = Backbone.View.extend({
	id: "abilityScoresContainer",

	template: templates.AbilityScoresView,

	events: {
		"click #randomizeStats":"randomizeStats"
	},

	initialize: function(options) {
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));

		for (var i=0;i<abilityScoreNames.length;i++) {
			var abilityScoreView = new AbilityScoreView({
				model:this.collection.findWhere({
					name:abilityScoreNames[i]
				}),
				vent: vent
			});
			this.$el.find('div#abilityScoreRowsContainer').append(abilityScoreView.el);
		}

    return this;
	},

	randomizeStats: function() {
		for (var i=0;i<abilityScoreNames.length;i++) {
			this.collection.findWhere({name:abilityScoreNames[i]}).set({value:rollxdy(3,6)});
		};
	}
});