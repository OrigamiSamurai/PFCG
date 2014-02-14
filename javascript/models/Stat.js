var Stat = Backbone.Model.extend({
	defaults: {	
		name: "",
		value: 0,
		levelGained: 0,
		description: "",
		sourceName: "",
		affectsStats: new Array()
	}
});