var CharacterView = Backbone.View.extend({
	
	id: "characterView",

	template: templates.CharacterView,

	initialize: function(options) {
		_.bindAll(this,"changeCharacter");
		options.vent.bind("changeCharacter", this.changeCharacter);
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
		var abilityScoresView = new AbilityScoresView({collection:this.model.attributes.stats, vent:vent});
		this.$el.append(abilityScoresView.el);
		var raceSelectView = new RaceSelectView({model:this.model,vent:vent});
		this.$el.append(raceSelectView.el);
		$('body').append(this.$el);
    return this;
	},

	changeCharacter: function() {
		this.remove();
	}

});