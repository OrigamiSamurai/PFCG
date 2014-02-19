function randomIntBetween(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function rollxdy(x,y){
 var sum=0
 for (var i=0;i<x;i++)
 {
  sum += randomIntBetween(1,y);
 }
 return sum; 
}

//hide/show everything in given div EXCEPT given jquery selector
function toggleAllExcept(parentElemJquery,childElemJquery,bool) {
	if (bool == true) {
		$(parentElemJquery).children().not(childElemJquery).show();
	}
	else if (bool == false) {
		$(parentElemJquery).children().not(childElemJquery).hide();
	};
}

//Create a test character
function createBaseCharacter(characterName) {
	var baseStats = new StatCollection();
		for (var i=0;i<abilityScoreNames.length;i++){
			baseStats.add(new Stat({
				name:abilityScoreNames[i],
				value:10,
				levelGained:0,
				description:"Base "+abilityScoreNames[i],
				source:"Character Creation",
				affectsStats:new StatCollection(),
				totalValue:10
			}));
		};
	var baseSources = new SourceCollection(new Source({name:"Character Creation",levelGained:0}));
	var testChar = new Character({
		name: characterName,
		stats: baseStats,
		sources: baseSources
	});
	
	//HAD TO MIGRATE THIS OUT OF STATCOLLECTION SINCE EVERY STAT CREATES A STAT COLLECTION....
	//calculates total value for a single stat
  testChar.attributes.stats.getTotalValue = function(statModel){
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

	  var sum=0;

	  for (var i=0; i<found.length;i++) {
	  	sum += found.models[i].attributes.value;
	  };
	  console.log(statModel.attributes.name+"'s total value was updated to "+sum);
	  statModel.set({totalValue:sum});
  };

  testChar.attributes.stats.getAffectedByStats = function(statModel){
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
  }

  //2DO: create more selective update getTotalValue function that doesn't refresh entire collection's values
  testChar.attributes.stats.refreshTotalValues = function() {
  	testChar.attributes.stats.each(
			function(eachStat){
				this.getTotalValue(eachStat);
			},
			testChar.attributes.stats
  	);
  },

  testChar.attributes.stats.bind('add',testChar.attributes.stats.refreshTotalValues);
  testChar.attributes.stats.bind('remove',testChar.attributes.stats.refreshTotalValues);
  testChar.attributes.stats.bind('change:value',testChar.attributes.stats.refreshTotalValues);

	return testChar;
};