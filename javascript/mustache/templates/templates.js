var templates = [];

templates.CollapseClosed = [
	"&nbsp;[+]&nbsp;"
].join("");

templates.CollapseOpen = [
	"&nbsp;[-]&nbsp;"
].join("");


templates.AbilityScoresView = [
	"<div id=\"abilityScoresTitle\" class=\"nocollapse title\">",	
		"<span class=\"collapse\">"+templates.CollapseOpen+"</span>",
		"Ability Scores",
	"</div>",
	"<div id=\"abilityScoreRowsContainer\"></div>",
	"<button id=\"randomizeStats3d6\">Randomize Stats (Straight 3d6)</button>"
].join("");

templates.AbilityScoreView = [
	"{{name}}: "
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

templates.DebugBarView = [
	"<div id=\"debugBarTitle\" class=\"nocollapse title\">",	
		"<span class=\"collapse\">"+templates.CollapseOpen+"</span>",
		"Debug Bar",
	"</div>",
	"<div id=\"debugStatsContainer\">Stats</div>",
	"<div id=\"debugSourcesContainer\">Sources</div>"
].join("");

templates.DebugSourceView = [
	"\"{{name}}\": Level Gained: {{levelGained}}, Description: {{description}} ",
	"<button class=\"logModel\">Log to console</button>"
].join("");

templates.DebugStatView = [
	"\"{{name}}\": Value: {{value}}, Level Gained: {{levelGained}}, Description: {{description}} ",
	"<button class=\"logModel\">Log to console</button>"
].join("");

templates.RaceOptionView = [
	"<label>",
		"<input type=\"radio\" name=\"race\" value=\"{{description}}\">",
			"{{description}}",
		"</input>",
	"</label>"
].join("");

templates.RaceSelectView = [
	"<div id=\"racesTitle\" class=\"nocollapse title\">",	
		"<span class=\"collapse\">"+templates.CollapseOpen+"</span>",
		"<span id=\"racePreview\">Race: </span>",
	"</div>",
	"<div id=\"racesContainer\"></div>"
].join("");

templates.StatValueView = [
	"{{totalValue}} <img src=\"images/magnifying_glass.jpg\" alt=\"magnifying glass\"/>"
].join("");

templates.ToolTipRowView = [
	"<div>{{name}}: {{value}}, Desc: {{description}}</div>"
].join("");