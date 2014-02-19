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

templates.CharacterView = [
	"Name: <span id=\"characterName\">",
	"<input type=\"text\" value=\"{{name}}\"></input>",
	"</span>"
].join("");

templates.DebugBarView = [
	"<div id=\"debugBarTitle\" class=\"nocollapse title\">",	
		"<span class=\"collapse\">"+templates.CollapseOpen+"</span>",
		"Debug Bar",
	"</div>",
	"<div id=\"debugStatsContainer\">",
		"Stats",
		"<table>",
			"<th>Name</th>",
			"<th>Value</th>",
			"<th>Description</th>",
			"<th>Level Gained</th>",
			"<th>Source</th>",
			"<th>Log</th>",
			"<th>Delete</th>",
		"</table>",
	"</div>",
	"<div id=\"debugSourcesContainer\">",
		"Sources",
		"<table>",
			"<th>Name</th>",
			"<th>Description</th>",
			"<th>Level Gained</th>",
			"<th>Log</th>",
			"<th>Delete</th>",
		"</table>",
	"</div>"
].join("");

templates.DebugSourceView = [
	"<td>{{name}}</td>",
	"<td>{{description}}</td>",
	"<td>{{levelGained}}</td>",
	"<td><button class=\"logModel\">Log to console</button></td>",
	"<td><button class=\"deleteModel\">Delete</button></td>"
].join("");

templates.DebugStatView = [
	"<td>{{name}}</td>",
	"<td>{{value}}</td>",
	"<td>{{description}}</td>",
	"<td>{{levelGained}}</td>",
	"<td>{{sourceName}}</td>",
	"<td><button class=\"logModel\">Log to console</button></td>",
	"<td><button class=\"deleteModel\">Delete</button></td>"
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

templates.ToolTipView = [
	"<table>",
		"<tr>",
			"<th>Name</th>",
			"<th>Value</th>",
			"<th>Description</th>",
			"<th>Source</th>",
		"</tr>",
	"</table>"
].join("");

templates.ToolTipViewRow = [
	"<tr>",
		"<td>{{name}}</td>",
		"<td>{{value}}</td>",
		"<td>{{description}}</td>",
		"<td>{{sourceName}}</td>",
	"</tr>"
].join("");