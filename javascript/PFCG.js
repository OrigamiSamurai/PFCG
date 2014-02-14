var abilityScoreNames = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];

var vent = _.extend({}, Backbone.Events); //uses Underscore.js to create a copy of the backbone events object/functionality. We use this pass custom events/handlers

//2DO: remove test character eventually
//Create a test character
function createTestCharacter() {
	var baseStats = new StatCollection();
		for (var i=0;i<abilityScoreNames.length;i++){
			baseStats.add(new Stat({name:abilityScoreNames[i],value:10}));
		};
var testChar = new Character({
	name: "test character",
	stats: baseStats
});
return testChar;
};
var testChar = createTestCharacter();

//Add test character to character collection
var characterCollection = new CharacterCollection(testChar);

//Create a new character select view from the character collection
var characterSelectView = new CharacterSelectView({collection: characterCollection,vent: vent});

//Render the character view
characterSelectView.render();