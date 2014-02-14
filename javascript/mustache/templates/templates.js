var templates = [];

templates.CollapseClosed = [
	"&nbsp;[+]&nbsp;"
].join("");

templates.CollapseOpen = [
	"&nbsp;[-]&nbsp;"
].join("");


templates.AbilityScoresView = [
	"<div id=\"abilityScoresTitle\">",	
		"<span class=\"collapse\">"+templates.CollapseOpen+"</span>",
		"Ability Scores",
	"</div>",
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


//2D0: change character name to text field, disabled by default
//2DO: add edit "link" next to next
//2DO: add button to change name
//2DO: wire change name button, including check against existing characters
//2DO: add keyup check for enter to change name

templates.CharacterView = [
	"Name: <span class=\"characterName\">{{name}}</span>"
].join("");