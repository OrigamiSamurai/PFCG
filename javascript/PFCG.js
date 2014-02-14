var abilityScoreNames = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];

var vent = _.extend({}, Backbone.Events); //uses Underscore.js to create a copy of the backbone events object/functionality. We use this pass custom events/handlers

//Create a test character
function createBaseCharacter(characterName) {
	var baseStats = new StatCollection();
		for (var i=0;i<abilityScoreNames.length;i++){
			baseStats.add(new Stat({name:abilityScoreNames[i],value:10,levelGained:0,source:"CharacterCreation"}));
		};
	var baseSources = new SourceCollection(new Source({name:"Character Creation",levelGained:0}));
	var testChar = new Character({
		name: characterName,
		stats: baseStats
	});
	return testChar;
};
var testChar = createBaseCharacter("Testy MacTestCharacter");

//Add test character to character collection
var characterCollection = new CharacterCollection(testChar);

//Create a new character select view from the character collection
var characterSelectView = new CharacterSelectView({collection: characterCollection,vent: vent});

//Render the character view
characterSelectView.render();

//2DO: add race view, add reference
//2DO: add race template
//2DO: add logic to create racial ability bonus stat(s) and source
//2DO: add logic to get sum of stat and affecting stats
//2DO: add logic to display total value of ability score
//2DO: add logic to destroy stats based on their source
//2DO: add source for character creation - ability scores