var RaceOptionView = Backbone.View.extend({

	className: "raceContainer",

	tagName: "tr",

	template: templates.RaceOptionView,

	events: {
		"click .raceName":"clickRadio",
		"click input":"selectRace",
		"change .racialAbilityBonusSelection":"racialAbilityScoreBonusChanged"
	},

	initialize: function(options) {
		this.vent = options.vent;
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(
			this.template,
			simpleClone(
				this.model.attributes, 
				{
					raceDescription:raceDescriptions[races.indexOf(this.model.attributes.description)],
				}
			)
		));
		switch (this.model.attributes.description) {
			case "Human":
				this.$el.find('.racialAbilityBonusSelection').show().prop('disabled',true);
				break;
			case "Half-Elf":
				this.$el.find('.racialAbilityBonusSelection').show().prop('disabled',true);
				break;
			case "Half-Orc":
				this.$el.find('.racialAbilityBonusSelection').show().prop('disabled',true);
				break;
		}
    return this;
	},

	racialAbilityScoreBonusChanged: function() {
		this.vent.trigger("racialAbilityScoreBonusChanged",this.model,this.$el.find('.racialAbilityBonusSelection').val());
	},

	selectRace: function() {
		this.vent.trigger("raceSelected",this.model);
	}

});