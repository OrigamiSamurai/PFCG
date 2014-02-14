var AbilityScoreView = Backbone.View.extend({
	className: "abilityScoreContainer",

	template: templates.AbilityScoreView,

	initialize: function(options) {
		this.listenTo(this.model,'change',this.render);
		this.$el.attr("id", this.model.attributes.name.toLowerCase()+"ScoreContainer");
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
    return this;
	}
});