var abilityScoreNames = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
var races = ["Human","Dwarf","Elf","Gnome","Half-Elf","Half-Orc","Halfling"];

var vent = _.extend({}, Backbone.Events); //uses Underscore.js to create a copy of the backbone events object/functionality. We use this pass custom events/handlers


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
//2DO: add view for stat total - including an update to check on whether ANY of its affecting stats have changed?
	//2DO: in statTotalView, create logic that hovering over creates a tool tip that displays the sources/stats for each affecting stat
	//2DO: use absolute positioning, z-index (possibly a class to indicate a tooltip so :not css selected can be used)
//2DO: add logic to destroy stats based on their source
//2DO: add source for character creation - ability scores