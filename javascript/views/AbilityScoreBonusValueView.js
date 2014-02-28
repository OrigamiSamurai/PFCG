var AbilityScoreBonusValueView = Backbone.View.extend({

	template: templates.AbilityScoreBonusValueView,

	tagName: 'span',

	className: 'abilityScoreBonusValue',

	initialize: function(options) {
		this.listenTo(this.model,'change',this.render);
		this.render();
	},

	render: function() {
		var displayString = Mustache.to_html(this.template,this.model.attributes);
		if (this.model.attributes.totalValue >= 0) {
			displayString = "+"+displayString;	
		}
		this.$el.html(displayString);
    return this;
	},
});