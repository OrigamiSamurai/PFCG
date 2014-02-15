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

//2DO: create stat totalValue breakdown tooltip view
//2DO: make tooltips created on demand instead of storing them permanently in the dom/rendering right away (if performance becomes bad)
//2DO: fill in race bonuses
//2DO: add generic function to destroy stats based on their source (in createBaseCharacter)
//2DO: add source for character creation - ability scores