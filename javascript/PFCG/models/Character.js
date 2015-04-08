var Character = Backbone.Model.extend({
  defaults: {
  	name: "",
  	sources: new SourceCollection(),
  	stats: new StatCollection()
  },

  initialize: function() {
		var baseSources = new SourceCollection();
		baseSources.add(
			new Source({name:"Character Creation",levelGained:0,description:"Character Creation"})
		);
	  
	  this.attributes.stats = new StatCollection();
	  
		for (var i=0;i<abilityScoreNames.length;i++){
			this.attributes.stats.add(new Stat({
				name:abilityScoreNames[i]+" Bonus",
				value:0,
				levelGained:0,
				description:"Calculated "+abilityScoreNames[i]+" Bonus",
				source:baseSources.at(0),
				affectsStats:new StatCollection(),
				totalValue:0,
				calculateFunction: function(statCollection) {
				  var sum=0;

				  for (var i=0; i<statCollection.length;i++) {
		  			sum += statCollection.models[i].attributes.value;
		  		}

		  		return Math.round((sum - 10.5)/2);
				}
			}));
			this.attributes.stats.add(new Stat({
				name:abilityScoreNames[i],
				value:10,
				levelGained:0,
				description:"Base "+abilityScoreNames[i],
				source:baseSources.at(0),
				affectsStats:new StatCollection(this.attributes.stats.findWhere({description:"Calculated "+abilityScoreNames[i]+" Bonus"})),
				totalValue:10
			}));

		};

		this.attributes.sources = baseSources;

		this.attributes.sources.killSource = function(sourceName){
			this.findWhere({name:sourceName}).destroy();
		}

	  this.attributes.stats.getTotalValue = function(statModel){
	  	var found = new StatCollection(statModel);
	  	var searched = new StatCollection();

	  	while (found.length != searched.length) {
		  	//get list of found but not checked stats
		  	var unsearched = found.clone();
		  	searched.each(function(searchedStat) {
		  		unsearched.remove(searchedStat);
		  	});

		  	searched.add(statModel);

		  	//for each unsearched stat...
			  for (var i=0; i<unsearched.length;i++){
			  	//go through whole collection...
			  	this.each(function(checkedModel){
		  			//check the model's affectsstats collection for the unsearched stat
		  			checkedModel.attributes.affectsStats.each(function(affectsStat){
		  				//check if model's affectsstats collection model matches our unsearched model
		  				if (affectsStat == unsearched.models[i]) {
		  					//add to found list if not already present
	  						found.add(checkedModel);
		  				};	
		  			});
			  	});
		  		searched.add(unsearched.models[i])
		  	};
		  };
	
		  statModel.set({totalValue:statModel.attributes.calculateFunction(found)});
	  };

	  this.attributes.stats.getAffectedByStats = function(statModel){
	  	var found = new StatCollection(statModel);
	  	var searched = new StatCollection();

	  	while (found.length != searched.length) {
		  	//get list of found but not checked stats
		  	var unsearched = found.clone();
		  	searched.each(function(searchedStat) {
		  		unsearched.remove(searchedStat);
		  	});

		  	searched.add(statModel);

		  	//for each unsearched stat...
			  for (var i=0; i<unsearched.length;i++){
			  	//go through whole collection...
			  	this.each(function(checkedModel){
		  			//check the model's affectsstats collection for the unsearched stat
		  			checkedModel.attributes.affectsStats.each(function(affectsStat){
		  				//check if model's affectsstats collection model matches our unsearched model
		  				if (affectsStat == unsearched.models[i]) {
		  					//add to found list if not already present
	  						found.add(checkedModel);
		  				};	
		  			});
			  	});
		  		searched.add(unsearched.models[i])
		  	};
		  };

		  return found;
	  };

	  this.attributes.stats.refreshTotalValues = function() {
	  	this.each(
				function(eachStat){
					this.getTotalValue(eachStat);
				},
				this
	  	);
	  };


	  this.attributes.stats.destroyFromSource = function(source) {
	  	//don't delete stats during loop, since each will use NEW index after items are deleted
	  	var statsToDelete = new StatCollection;
	  	this.each(
	  		function(eachStat){
	  			if (eachStat.attributes.source == source) {
	  				statsToDelete.add(eachStat);
	  				
	  			}
	  		},
	  		this
	  	);
			
			//delete stats found in search	  	
	  	while (statsToDelete.models.length > 0) {
	  		statsToDelete.first().destroy();
	  	};
	  };
	
	  this.attributes.stats.bind('add',this.attributes.stats.refreshTotalValues);
	  this.attributes.stats.bind('remove',this.attributes.stats.refreshTotalValues);
	  this.attributes.stats.bind('change:value',this.attributes.stats.refreshTotalValues);
	  this.attributes.sources.bind('destroy', _.bind(this.attributes.stats.destroyFromSource,this.attributes.stats));
	}
});