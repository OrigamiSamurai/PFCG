var AbilityScoresView = Backbone.View.extend({
	id: "abilityScoresContainer",

	template: templates.AbilityScoresView,

	initialize: function(options) {
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));

		//2DO:create ability score views
		
    return this;
	},

	addStat: function(statAdded) {
		//check name of added stat. If it's one of the ability scores, display here
		if ($.inArray(statAdded.attributes.name,abilityScoreNames) != -1) {
			console.log("THIS STAT WAS AN ABILITY SCORE");
		};
		console.log(statAdded);
	}
})