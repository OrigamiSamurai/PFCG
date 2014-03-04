jQuery.expr[':'].focus = function( elem ) {
  return elem === document.activeElement && ( elem.type || elem.href );
};

var abilityScoreNames = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
var races = ["Human","Dwarf","Elf","Gnome","Half-Elf","Half-Orc","Halfling"];
var raceDescriptions = [
  "Select an ability score (+2): ",
  "+2 Constitution, +2 Wisdom, -2 Charisma",
  "+2 Dexterity, +2 Intelligence, -2 Constitution",
  "+2 Constitution, +2 Charisma, -2 Strength",
  "Select an ability score (+2): ",
  "Select an ability score (+2): ",
  "+2 Dexterity, +2 Charisma, -2 Strength",
]

var vent = _.extend({}, Backbone.Events); //uses Underscore.js to create a copy of the backbone events object/functionality. We use this pass custom events/handlers


var testChar = new Character({name:"Testy MacTestCharacter"});
testChar.attributes.sources.add(new Source({name:"Race",levelGained:0,description:"Human"}));
testChar.attributes.stats.add(
	new Stat({
          name:"Racial Ability Score Bonus",
          value: 2,
          levelGained:0,
          description: "Racial "+"Strength"+" Ability Score Bonus",
          source: testChar.attributes.sources.findWhere({name:"Race"}),
          affectsStats: new StatCollection(testChar.attributes.stats.findWhere({name:"Strength"})),
          totalValue: 2
        })
);

//Add test character to character collection
var characterCollection = new CharacterCollection(testChar);

//Create a new character select view from the character collection
var characterSelectView = new CharacterSelectView({collection: characterCollection,vent: vent});

//Render the character view
characterSelectView.render();

//2DO: add page level navbar
//2DO: start development on paper token creator
//2DO: start token image library