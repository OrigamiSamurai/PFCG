var Stat = Backbone.Model.extend({
	defaults: {	
		name: "",
		value: 0,
		levelGained: 0,
		description: "",
		source: new Backbone.Model(),
		affectsStats: new Backbone.Collection(),
		totalValue:0,
		calculateFunction: function (statCollection) {
			var sum=0;

		  for (var i=0; i<statCollection.length;i++) {
		  	sum += statCollection.models[i].attributes.value;
		  };

		  return sum;
		}
	}
});