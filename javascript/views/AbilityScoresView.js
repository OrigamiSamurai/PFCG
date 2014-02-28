var AbilityScoresView = Backbone.View.extend({
	id: "abilityScoresContainer",

	template: templates.AbilityScoresView,

	events: {
		"click #rollAbilityScores":"rollAbilityScores",
		"click #abilityScoresTitle":"toggleShowHide",
		"keypress #rollAbilityScoresContainer":"validateInput"
	},

	initialize: function(options) {
		this.rollXbestMin=0;
		this.rollXbestMax=9;
		this.rollofYMin=1;
		this.rollofYMax=9;
		this.rolldZMin=1;
		this.rolldZMax=99;
		this.rollrerollingAMin=0;
		this.rollrerollingAMax=99;
		this.collapsed = false;
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(
			this.template,
			{
				rollXbestMin:this.rollXbestMin,
				rollXbestMax:this.rollXbestMax,
				rollofYMin:this.rollofYMin,
				rollofYMax:this.rollofYMax,
				rolldZMin:this.rolldZMin,
				rolldZMax:this.rolldZMax,
				rollrerollingAMin:this.rollrerollingAMin,
				rollrerollingAMax:this.rollrerollingAMax
			}
		));

		for (var i=0;i<abilityScoreNames.length;i++) {
			//create ability score view row
			var abilityScoreView = new AbilityScoreView({
				model:this.collection.findWhere({
					name:abilityScoreNames[i]
				}),
				vent: vent
			});
			//add ability score bonus view
			var abilityScoreBonusValueView = new AbilityScoreBonusValueView({
				model:this.collection.findWhere({
					name:abilityScoreNames[i]+" Bonus"
				})
			});
			abilityScoreView.$el.children('.abilityScoreBonusValue').append(abilityScoreBonusValueView.el);

			this.$el.find('div#abilityScoreRowsContainer table').append(abilityScoreView.el);
		}

    return this;
	},

	rollAbilityScores: function() {
		var rollXbest = parseInt(this.$el.find('input#rollXbest').val());
		var rollofY = parseInt(this.$el.find('input#rollofY').val());
		var rolldZ = parseInt(this.$el.find('input#rolldZ').val());
		var rollrerollingA = 0;
		
		if (rollXbest <= rollofY)	{
			if (this.$el.find('input#rollrerollingA').val() != "") {
				rollrerollingA = parseInt(this.$el.find('input#rollrerollingA').val());
			}

			for (var i=0;i<abilityScoreNames.length;i++) {
				this.collection.findWhere({name:abilityScoreNames[i]}).set({
					value: rollBestXofYdZIgnoreA(rollXbest,rollofY,rolldZ,rollrerollingA)
				});
			};
		}
		else {
			alert("Best X number ("+rollXbest+") cannot be larger than number of dice rolled ("+rollofY+").")			
		}
	},

	toggleShowHide: function() {
		toggleAllExcept("#abilityScoresContainer",".nocollapse",this.collapsed);
		 if (this.collapsed == true) {
		 	this.collapsed = false;
		 	console.log(this.$el);
		 	this.$el.find('.collapse').html(Mustache.to_html(templates.CollapseOpen));
		 }
		 else if (this.collapsed == false) {
		 	this.collapsed = true;
		 	this.$el.find('.collapse').html(Mustache.to_html(templates.CollapseClosed));
		 };
	},

	validateInput: function(keyEvent) {
		validatePositiveIntegerInput(keyEvent);
	}
	
});