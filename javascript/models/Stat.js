var Stat = Backbone.Model.extend({
	defaults: {	
		name: "",
		value: 0,
		levelGained: 0,
		description: "",
		sourceName: "",
		affectsStats: new Array(), //2DO convert affectedStats into collection...
		total: function() {
			//go get sums of all effecting stats recursively
		}
	}
});