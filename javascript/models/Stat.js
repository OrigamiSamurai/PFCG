var Stat = Backbone.Model.extend({
	defaults: {	
		name: "",
		value: 0,
		levelGained: 0,
		description: "",
		source: new Backbone.Model(),
		affectsStats: new Backbone.Collection(),
		totalValue:0
	}
});