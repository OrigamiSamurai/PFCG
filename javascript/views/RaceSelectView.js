var RaceSelectView = Backbone.View.extend ({
	
	id: "raceSelectContainer",

	template: templates.RaceSelectView,

	events: {
	},

	initialize: function(options) { //on initialization, the vent object gets passed in
  	_.bindAll(this, "selectRace");
  	options.vent.bind("raceSelected", this.selectRace);
  	this.vent = options.vent; //use the global event overwatch so we can send it events
  	this.render();
  },

	render: function () {
		this.$el.html(Mustache.to_html(this.template));
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

  //2DO: fill in racial bonus function
  generateRacialStats: function(raceSource) {
  	var stat Array = new
  	switch (raceSource.attributes.name) {
  		case "Human":
  			break;
  		case "Dwarf":
  			//create strength bonus
  			break;
  		default:
  			break;
  	}
  	//2DO: RETURN AN ARRAY OF GENERATED STATS TO BE ADDED
  },

  //2DO: create utility function to remove all stats based on source from stats collection, then remove source from sources collection
  selectRace: function(raceSource) {
  	//clear existing racial stats/sources
  	var racialStats = this.model.attributes.stats.where({sourceName:"Race"})//get racial stats
  	this.model.attributes.stats.remove(racialStats);
  	var racialSources = this.model.attributes.sources.where({name:"Race"})//get racial stats
  	this.model.attributes.sources.remove(racialSources);

  	this.model.attributes.sources.add(raceSource);
  	this.model.attributes.stats.add(generateRacialStats(raceSource));
	},

	toggleUI: function(flags) {
    var uiElems = [
      this.$el.find('select#race'),
      this.$el.find('button#selectRace'),
      this.$el.find('button#cancelSelectRace')
    ]

    for (var i=0; i<buttons.length; i++) {
      if (flags[i] == true) {
        buttons[i].show();
      }
      else if (flags[i] == false) {
        buttons[i].hide();
      }
      else {
        throw "Invalid input to toggleUI."
      };
    };
  }

})