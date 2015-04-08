var templates = [];

templates.AbilityScoresView = [
	"<div id=\"abilityScoresTitle\" class=\"panel-heading\">",	
		"<span class=\"panel-title\">",
			"<a data-toggle='collapse' data-parent='#abilityScoresContainer' href='#abilityScoresBody'>",
        "Ability Scores",
      "</a>",
		"</span>",
	"</div>",
	"<div id=\"abilityScoresBody\" class=\"panel-collapse collapse in\">",
		"<div class=\"panel-body\">",
			"<div id=\"abilityScoreRowsContainer\">",
				"<div class=\"table-responsive\">",	
					"<table class=\"table table-striped\">",
						"<thead>"		,
							"<th>Score</th>",
							"<th>Value</th>",
							"<th>Bonus</th>",
							"<th>View</th>",
							"<th>Base Score</th>",
						"</thead>",
					"</table>",
				"</div>",
			"</div>",
			"<div id=\"rollAbilityScoresContainer\">",
				"Reroll: Take best <input type=\"number\" value=\"3\" max=\"{{rollXbestMax}}\" min=\"{{rollXbestMin}}\" id=\"rollXbest\"></input> ",
				"of <input type=\"number\" value=\"4\" max=\"{{rollofYMax}}\" min=\"{{rollofYMin}}\" id=\"rollofY\"></input>",
				"d<input type=\"number\" value=\"6\" max=\"{{rolldZMax}}\" min=\"{{rolldZMin}}\" id=\"rolldZ\"></input> ",
				"rerolling anything <input type=\"number\" value=\"1\" max=\"{{rollrerollingAMax}}\" min=\"{{rollrerollingAMin}}\" id=\"rollrerollingA\"></input> or below. ",
				"<button id=\"rollAbilityScores\">Roll!</button>",
			"</div>",
		"</div>",
	"</div>"
].join("");

templates.AbilityScoreView = [
	"<td>{{name}}</td>",
	"<td class=\"abilityScoreTotalValue\">{{totalValue}}</td>",
	"<td class=\"abilityScoreBonusValue\"></td>",
	"<td><img src=\"images/magnifying_glass.jpg\" alt=\"magnifying glass\"/></td>",
	"<td><input class=\"newStatValue form-control\" type=\"number\" min=\"{{minBaseStat}}\" max=\"{{maxBaseStat}}\" value=\"{{value}}\"></td>"
].join("");

templates.AbilityScoreBonusValueView = [
	"{{totalValue}}"
].join("");

templates.CharacterCreateView = [
	"<div id=\"existingCharacterContainer\" class=\"panel-body\">",
		"Name: ",
		"<input id=\"characterNewName\"></input>",
		"<div class=\"btn-group\">",
			"<button type=\"button\" id=\"createCharacter\" class=\"btn btn-sm btn-default\">Create Character</button>",
			"<button type=\"button\" id=\"cancelCreateCharacter\" class=\"btn btn-sm btn-default\">Cancel</button>",
		"</div>",
	"</div>"
].join("");

templates.CharacterSelectOptionView = [
	"{{name}}"
].join("");

templates.CharacterSelectExistingView = [
	"<div id=\"existingCharacterContainer\" class=\"panel-body\">",
		"<div class=\"form-inline\">",
			"<div class=\"form-group\">",	
				"<select id=\"character\" class=\"form-control\"></select>",
			"</div>",
			"<div class=\"form-group\">",	
				"<div class=\"btn-group\">",
					"<button type=\"button\" id=\"selectCharacter\" class=\"btn btn-sm btn-default\">Select Character</button>",
					"<button type=\"button\" id=\"cancelSelectExistingCharacter\" class=\"btn btn-sm btn-default\">Cancel</button>",
				"</div>",
			"</div>",
		"</div>",
	"</div>"
].join("");

templates.CharacterSelectView = [
	"<div class=\"panel-body\">",
		"Choose a character:",
		"<div class=\"btn-group\">",	
			"<button type=\"button\" id=\"createNewCharacter\" class=\"btn btn-sm btn-default\">Create New</button>",
			"<button type=\"button\" id=\"selectExistingCharacter\" class=\"btn btn-sm btn-default\">Select Existing</button>",
		"</div>",
		"<button type=\"button\" id=\"changeCharacter\" class=\"btn btn-sm btn-default\">Change Character</button>",
	"</div>"
].join("");

templates.CharacterView = [
	"<div id=\"nameContainer\" class=\"panel panel-default\">",
		"<div class=\"panel-body\">",
			"<div class=\"input-group\">",
				"<span class=\"input-group-addon\">",
					"Name: ",
				"</span>",
				"<input type=\"text\" value=\"{{name}}\" size=\"30\" id=\"characterName\" class=\"form-control\"></input>",
			"</div>",
		"</div>",
	"</div>"
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
	"<button class=\"createStat\">Add!</button>",
	"<button class=\"cancelCreateStat\">Cancel</button>",
].join("");

templates.CreateSourceView = [
	"<div>Name: <input type=\"text\" class=\"createSourceName\"></input></div>",
	"<div>Description: <input type=\"text\" class=\"createSourceDescription\"></input></div>",
	"<div>Level Gained: <input type=\"text\" class=\"createSourceLevelGained\"></input></div>",
	"<div>",
	"<button class=\"createSource\">Add!</button>",
	"<button class=\"cancelCreateSource\">Cancel</button>",
].join("");

templates.DebugView = [
	"<div id=\"debugTitle\" class=\"panel-heading\">",	
		"<span class=\"panel-title\">",
			"<a data-toggle='collapse' data-parent='#debugContainer' href='#debugBody'>",
      	"Debug: Use at your own risk",
      "</a>",
		"</span>",
	"</div>",
	"<div id=\"debugBody\" class=\"panel-collapse collapse\">",
		"<div class=\"panel-body\">",
			"<ul class=\"list-group\">",	
				"<li class=\"list-group-item\">",
					"<div id=\"debugStatsContainer\">",
						"Stats",
							"<div class=\"table-responsive\">",
								"<table class=\"table table-striped\">",
									"<thead>",
										"<th>Name</th>",
										"<th>Value</th>",
										"<th>Total Value</th>",
										"<th>Description</th>",
										"<th>Level Gained</th>",
										"<th>Source</th>",
										"<th>Log</th>",
										"<th>Delete</th>",
									"</thead>",
								"</table>",
							"</div>",
						"<button id=\"addStat\">Add Stat</button>",
					"</div>",
				"</li>",
				"<li class=\"list-group-item\">",
					"<div id=\"debugSourcesContainer\">",
						"Sources",
							"<div class=\"table-responsive\">",
								"<table class=\"table table-striped\">",
									"<thead>",
										"<th>Name</th>",
										"<th>Description</th>",
										"<th>Level Gained</th>",
										"<th>Log</th>",
										"<th>Delete</th>",
									"</thead>",
								"</table>",
							"</div>",
						"<button id=\"addSource\">Add Source</button>",
					"</div>",
				"</li>",
			"</ul>",
		"</div>",
	"</div>"
].join("");

//2DO: finish styling debug contents with bootstrap

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
	"<td>{{totalValue}}</td>",
	"<td>{{description}}</td>",
	"<td>{{levelGained}}</td>",
	"<td>{{sourceName}}</td>",
	"<td><button class=\"logModel\">Log to console</button></td>",
	"<td><button class=\"deleteModel\">Delete</button></td>"
].join("");

templates.RaceOptionView = [
	"<td>",
		"<label>",
			"<input type=\"radio\" name=\"race\" value=\"{{description}}\">",
				"{{description}}",
			"</input>",
		"</label>",
	"</td>",
	"<td class='racialAbilityBonusSelectionContainer'>",
		"<span class='raceDescription'>",
			"{{raceDescription}}",
			"<select class='racialAbilityBonusSelection form-control' id='{{description}}AbilityScoreBonusSelection'>",
				"<option value='Strength'>Strength</option>",
				"<option value='Dexterity'>Dexterity</option>",
				"<option value='Constitution'>Constitution</option>",
				"<option value='Intelligence'>Intelligence</option>",
				"<option value='Wisdom'>Wisdom</option>",
				"<option value='Charisma'>Charisma</option>",
			"<select>",
		"</span>",
	"</td>",
].join("");

templates.RaceSelectView = [
	"<div id=\"racesTitle\" class=\"panel-heading\">",
		"<span id=\"racePreview\" class=\"panel-title\">",
			"<a data-toggle='collapse' data-parent='#racesContainer' href='#racesBody'>",
				"Race: ",
			"</a>",
		"</span>",
	"</div>",
	"<div id=\"racesBody\" class=\"panel-collapse collapse in\">",
		"<div class=\"panel-body\">",
			"<div class=\"table-responsive\">",	
				"<table id=\"racesContainer\" class=\"table table-striped\">",
					"<thead>",
						"<th>Race</th>",
						"<th>Bonuses</th>",
					"</thead>",
				"</table>",
			"</div>",
		"</div>",	
	"</div>"
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