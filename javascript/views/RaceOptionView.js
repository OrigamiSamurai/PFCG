var RaceOptionView = Backbone.View.extend({

	className: "raceContainer",

	template: templates.RaceOptionView,

	events: {
		"click .raceName":"clickRadio",
		"click input":"selectRace"
	},

	initialize: function(options) {
		this.vent = options.vent;
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
    return this;
	},

	selectRace: function() {
		this.vent.trigger("raceSelected",this.model);
	}

	//2DO: add radio buttons to select a stat to add bonus to for races that get a variable bonus

});