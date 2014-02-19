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

});