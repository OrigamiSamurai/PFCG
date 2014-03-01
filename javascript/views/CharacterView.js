var CharacterView = Backbone.View.extend({
	
	events: {
		"keyup #characterName input":"updateCharacterName"
	},

	id: "characterView",

	className: "panel-group",

	template: templates.CharacterView,

	initialize: function(options) {
		_.bindAll(this,"changeCharacter");
		options.vent.bind("changeCharacter", this.changeCharacter);
		_.bindAll(this,"createToolTip");
		options.vent.bind("createToolTip", this.createToolTip);
		_.bindAll(this,"changeRacialAbilityScoreBonus");
		options.vent.bind("racialAbilityScoreBonusChanged", this.changeRacialAbilityScoreBonus);
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
		
		//display ability scores
		var abilityScoresView = new AbilityScoresView({collection:this.model.attributes.stats, vent:vent});
		this.$el.append(abilityScoresView.el);
		//display race options
		var raceSelectView = new RaceSelectView({model:this.model,vent:vent});
		this.$el.append(raceSelectView.el);

		//display debug area
		var debugView = new DebugView({model:this.model,vent:vent});
		this.$el.append(debugView.el)
		$('body .container').append(this.$el);
    
		//select all on click name input
    $("#characterName input").on("click", function() {
   		$(this).select();
		});
    
    //populate race UI
		var raceSources = this.model.attributes.sources.where({name:"Race"});
		if (raceSources.length > 0) {
			$('input[name="race"][value="'+raceSources[0].attributes.description+'"]').prop('checked',true);
			$('#'+raceSources[0].attributes.description+'AbilityScoreBonusSelection').prop('disabled',false);
			$('#racePreview a').text("Race: "+raceSources[0].attributes.description);
		};
    return this;
	},

	changeCharacter: function() {
		this.remove();
	},

	createToolTip: function(view) {
		var toolTipView = new ToolTipView({
			collection:this.model.attributes.stats.getAffectedByStats(view.model),
			vent:vent
		});
		view.$el.children().first().append(toolTipView.el);
		view.$el.find('.toolTipContainer').css({left:view.$el.position().left+30,top:view.$el.position().top+30});
	},

	changeRacialAbilityScoreBonus: function(race,newStatName) {
		//delete existing bonuses
		var racialAbilityScoreBonuses = this.model.attributes.stats.where({name:"Racial Ability Score Bonus"});
		while (racialAbilityScoreBonuses.length > 0) {
			racialAbilityScoreBonuses[0].destroy();
			racialAbilityScoreBonuses.shift();
		};
		//add new one
		var newStat = new Stat({
			name:"Racial Ability Score Bonus",
			value: 2,
			description:"Racial "+newStatName+" Ability Score Bonus",
			levelGained:0,
      source: this.model.attributes.sources.findWhere({name:"Race"}),
      affectsStats: new StatCollection(this.model.attributes.stats.findWhere({name:newStatName})),
      totalValue: 2
		});

		this.model.attributes.stats.add(newStat);
	},

	updateCharacterName: function(keyUp) {
		if (keyUp.keyCode == 13) {
			$('#characterName input').blur();	
		}
		this.model.set({name:$('#characterName input').val()});
	}

});

//2DO: Add ability scores preview to ability score title container... and use the same logci ffor the race