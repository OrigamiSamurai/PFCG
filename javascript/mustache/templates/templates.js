var templates = [];

templates.AbilityScoresView = [
	"<span class=\"abilityScoresTitle\">Ability Scores</span>",
	"<div id=\"abilityScoreRowsContainer\"></div>",
	"<button id=\"randomizeStats\">Randomize Stats</button>"
].join("");

templates.AbilityScoreView = [
	"{{name}}: {{value}}",
].join("");

templates.CharacterCreateView = [
	"New Character Name: ",
	"<input id=\"characterNewName\"></input>",
	"<button id=\"createCharacter\">Create Character</button>",
	"<button id=\"cancelCreateCharacter\">Cancel</button>"
].join("");

templates.CharacterSelectOptionView = [
	"{{name}}"
].join("");

templates.CharacterSelectExistingView = [
	"<div id=\"existingCharacterContainer\">Select Character: ",
		"<select id=\"character\"></select>",
		"<button id=\"selectCharacter\">Select Character</button>",
		"<button id=\"cancelSelectExistingCharacter\">Cancel</button>",
	"</div>"
].join("");

templates.CharacterSelectView = [
	"Choose a character:",
	"<button id=\"createNewCharacter\">Create New</button>",
	"<button id=\"selectExistingCharacter\">Select Existing</button>",
	"<button id=\"changeCharacter\">Change Character</button>"
].join("");

templates.CharacterView = [
	"Name: <span class=\"characterName\">{{name}}</span>"
].join("");