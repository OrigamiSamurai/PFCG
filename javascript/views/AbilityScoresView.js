var AbilityScoresView = Backbone.View.extend({
	id: "abilityScoresContainer",

	template: templates.AbilityScoresView,

	events: {
		"click #randomizeStats3d6":"randomizeStats3d6",
		"click #abilityScoresTitle":"toggleShowHide"
	},

	initialize: function(options) {
		this.collapsed = false;
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

	randomizeStats3d6: function() {
		for (var i=0;i<abilityScoreNames.length;i++) {
			this.collection.findWhere({name:abilityScoreNames[i]}).set({value:rollxdy(3,6)});
		};
	},

	//2DO: modify HTML to use .nocollapse class
	toggleShowHide: function() {
		toggleAllExcept("#abilityScoresContainer",".nocollapse",this.collapsed);
		 if (this.collapsed == true) {
		 	this.collapsed = false;
		 	console.log(this.$el);
		 	this.$el.find('.collapse').html(Mustache.to_html(templates.CollapseOpen));
		 }
		 else if (this.collapsed == false) {
		 	this.collapsed = true;
		 	this.$el.find('.collapse').html(Mustache.to_html(templates.CollapseClosed));
		 };
	}
});