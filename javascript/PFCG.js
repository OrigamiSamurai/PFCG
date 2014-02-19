jQuery.expr[':'].focus = function( elem ) {
  return elem === document.activeElement && ( elem.type || elem.href );
};

var abilityScoreNames = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
var races = ["Human","Dwarf","Elf","Gnome","Half-Elf","Half-Orc","Halfling"];

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