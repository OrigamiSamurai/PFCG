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
	"<div>",
		"Reroll: Take best <input type=\"text\" value=\"3\" maxlength=\"1\" size=\"1\" id=\"rollXbest\"></input>",
		"of <input type=\"text\" value=\"4\" maxlength=\"1\" size=\"1\" id=\"rollofY\"></input>",
		"d<input type=\"text\" value=\"6\" maxlength=\"1\" size=\"1\" id=\"rolldZ\"></input> ",
		"rerolling anything <input type=\"text\" value=\"\" maxlength=\"1\" size=\"1\" id=\"rollrerollingA\"></input> or below. ",
		"<button id=\"rollAbilityScores\">Roll!</button>",
	"</div>"
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

templates.ChooseSource = [
	"<div>",
		"<label>",
			"<input type=\"radio\" name=\"chooseSource\" value=\"{{cid}}\">",
				"{{name}} - {{description}} - Gained: {{levelGained}}",
			"</input>",
		"</label>",
	"</div>"
].join("");

templates.ChooseStat = [
	"<div>",
		"<label>",
			"<input type=\"checkbox\" name=\"chooseStats\" value=\"{{cid}}\">",
				"{{name}} - {{description}} - Level: {{levelGained}} - Source: {{sourceName}}",
			"</input>",
		"</label>",
	"</div>"
].join("");

templates.CreateStatView = [
	"<div>Name: <input type=\"text\" class=\"createStatName\"></input></div>",
	"<div>Value: <input type=\"text\" class=\"createStatValue\"></input></div>",
	"<div>Description: <input type=\"text\" class=\"createStatDescription\"></input></div>",
	"<div>Level Gained: <input type=\"text\" class=\"createStatLevelGained\"></input></div>",
	"<div>",
		"Source:",
		"<div class=\"chooseSourceContainer\">",
			"List sources here",
		"</div>",
	"</div>",
	"<div>",
		"Stat:",
		"<div class=\"chooseStatsContainer\">",
			"List stats here",
		"</div>",
	"</div>",
	"<button class=\"createStat\">Add!</button>"
].join("");

templates.DebugView = [
	"<div id=\"debugTitle\" class=\"nocollapse title\">",	
		"<span class=\"collapse\">"+templates.CollapseOpen+"</span>",
		"Debug Bar - Use at your own risk !",
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
		"<button id=\"addStat\">Add Stat</button>",
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
	"{{totalValue}} ",
	"<img src=\"images/magnifying_glass.jpg\" alt=\"magnifying glass\"/> ",
	"Base: <input class=\"newStatValue\" type=\"text\" value=\"{{value}}\" size=\"2\" maxlength=\"2\">"
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