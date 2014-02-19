var RaceSelectView = Backbone.View.extend ({
	
	id: "raceSelectContainer",

	template: templates.RaceSelectView,

	events: {
    "click #racesTitle":"toggleShowHide"
	},

	initialize: function(options) { //on initialization, the vent object gets passed in
  	this.collapsed = false;
    _.bindAll(this, "selectRace");
  	options.vent.bind("raceSelected", this.selectRace);
  	this.vent = options.vent; //use the global event overwatch so we can send it events
  	this.render();
  },

	render: function () {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
		for (var i=0; i<races.length;i++) {
      this.addRace(races[i]);
    };
    return this;
	},

	addRace: function(raceName) {
    var raceSource = new Source({
  		name:"Race",
  		levelGained:0,
  		description:raceName
  	})
  	var raceOption = new RaceOptionView({model:raceSource,vent:vent})
    this.$el.find("#racesContainer").append(raceOption.el);
  },

  generateRacialStats: function(raceSource) {
  	var statArray = new Array();

    var addRacialAbilityStat = function(character,raceSource,statValue,abilityScoreName){
      var newStat = new Stat({
          name:"Racial Ability Score Bonus",
          value: statValue,
          levelGained:0,
          description: "Racial "+abilityScoreName+" Ability Score Bonus",
          source: raceSource,
          affectsStats: new StatCollection(character.attributes.stats.findWhere({name:abilityScoreName})),
          totalValue: statValue
        })
      statArray.push(newStat);
    }

    switch (raceSource.attributes.description) {
  		//2DO: fill out default racial ability score modifiers
      case "Human":
        addRacialAbilityStat(this.model,raceSource,2,abilityScoreNames[randomIntBetween(0,5)]);
  			break;
  		case "Dwarf":
        addRacialAbilityStat(this.model,raceSource,2,"Constitution");
        addRacialAbilityStat(this.model,raceSource,2,"Wisdom");
        addRacialAbilityStat(this.model,raceSource,-2,"Charisma");
  			break;
  		default:
  			break;
  	};
    return statArray;
  },

  selectRace: function(raceSource) {
  	//clear existing racial stats/sources (stats deleted automatically)
  	var racialSources = this.model.attributes.sources.where({name:"Race"});
    racialSources.forEach(function(source){
      source.destroy();
    })

    //add new source and stats, then update preview text
  	this.model.attributes.sources.add(raceSource);
  	this.model.attributes.stats.add(this.generateRacialStats(raceSource));
    $('#racePreview').text("Race: "+raceSource.attributes.description);
	},

  toggleShowHide: function() {
    toggleAllExcept("#raceSelectContainer",".nocollapse",this.collapsed);
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

})