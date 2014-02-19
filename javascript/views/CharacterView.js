var CharacterView = Backbone.View.extend({
	
	id: "characterView",

	template: templates.CharacterView,

	initialize: function(options) {
		_.bindAll(this,"changeCharacter");
		options.vent.bind("changeCharacter", this.changeCharacter);
		//2DO: check this
		_.bindAll(this,"createToolTip");
		options.vent.bind("createToolTip", this.createToolTip);

		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
		var abilityScoresView = new AbilityScoresView({collection:this.model.attributes.stats, vent:vent});
		this.$el.append(abilityScoresView.el);
		var raceSelectView = new RaceSelectView({model:this.model,vent:vent});
		this.$el.append(raceSelectView.el);
		
		var debugBarView = new DebugBarView({model:this.model,vent:vent});
		this.$el.append(debugBarView.el)
		$('body').append(this.$el);
    return this;
	},

	changeCharacter: function() {
		this.remove();
	},

	//2DO: debug create tool tip function
	createToolTip: function(view) {
	//create a tooltip view under the statValueView's element
		var toolTipView = new ToolTipView({
			collection:this.model.attributes.stats.getAffectedByStats(view.model),
			vent:vent
		});
		view.$el.append(toolTipView.el);
	}

});