var AbilityScoreView = Backbone.View.extend({
	className: "abilityScoreContainer",

	template: templates.AbilityScoreView,

	initialize: function(options) {
		this.$el.attr("id", this.model.attributes.name.toLowerCase()+"ScoreContainer");
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
		var statValueView = new StatValueView({model:this.model, vent:vent});
		this.$el.append(statValueView.el);
    return this;
	}
});