var AbilityScoreView = Backbone.View.extend({
	
	events: {
		"keypress input.newStatValue":"validateInput",
		"keyup input.newStatValue":"updateStat",
		"change input.newStatValue":"updateStat",
		"mouseenter img":"createToolTip",
		"mouseleave img":"removeToolTip"
	},

	tagName: "tr",

	className: "abilityScoreContainer",

	template: templates.AbilityScoreView,

	initialize: function(options) {
		//set min/max values for inputs
		this.minBaseStat = 0;
		this.maxBaseStat = 50;
		//add event framework
		this.vent = options.vent;
		//refresh values in view when model data changes
		this.listenTo(this.model,'change',this.refreshValues);
		//sets context to this view when calling these functions
		_.bindAll(this,"createToolTip");
		_.bindAll(this,"removeToolTip");
		//add ID to parent tag based on model name
		this.$el.attr("id", this.model.attributes.name.toLowerCase()+"ScoreContainer");
		//render html
		this.render();
		//sets context to this view when calling updatestat function
		_.bindAll(this,'updateStat');
	},

	render: function() {
		//render html
		this.$el.html(Mustache.to_html(
			this.template,
			//sends copy of model attributes and appends min/max stat values for use in template
			simpleClone(this.model.attributes,{minBaseStat:this.minBaseStat,maxBaseStat:this.maxBaseStat})
		));
    return this;
	},

	createToolTip: function() {
		//fire off create tooltip event since this model doesn't have info necessary to populate the tooltip
		this.vent.trigger("createToolTip",this);
	},

	refreshValues: function() {
		//update total value display
		this.$el.find('.abilityScoreTotalValue').html(this.model.attributes.totalValue);
		//update input value
		this.$el.find('.newStatValue').val(this.model.attributes.value);
	},

	removeToolTip: function() {
		//pass along event to higher power
		this.vent.trigger("removeToolTip",this);
	},

	updateStat: function(keyEvent) {
		//check for empty field, and if so, set value to 0
		//2DO: add validation to rollxdy fields similar to update ability score validation (length and values)
		if (this.$el.find('.newStatValue').val() == "") {
			this.model.set({value:0})
		}
		//otherwise...
		else{
			//check if the value in input is between min and max set in this view
			if (validateInRange(this.$el.find('.newStatValue').val(),this.minBaseStat,this.maxBaseStat)) {
				//set value of model
				this.model.set({value:parseInt(this.$el.find('.newStatValue').val())})
			}
			//if value in input is too small or too large, alert user to error and set to nearest valid value
			else {
				//if value too big, adjust stat and alert user
				if (this.$el.find('.newStatValue').val() > this.maxBaseStat) {
					alert("The maximum value for this field is "+this.maxBaseStat+".");
					this.$el.find('.newStatValue').val(this.maxBaseStat);
					this.model.set({value:parseInt(this.$el.find('.newStatValue').val())})
				}
				//if value too small, adjust stat and alert user
				else {
					alert("The minimum value for this field is "+this.minBaseStat+".");
					this.$el.find('.newStatValue').val(this.minBaseStat);
					this.model.set({value:parseInt(this.$el.find('.newStatValue').val())})
				};
			};
		};
	},

	validateInput: function(keyEvent) {
		//stop user from entering anything other than 0-9
		validatePositiveIntegerInput(keyEvent);
		//stop user from entering character if length is already 2 and nothing selected
		validateLength(keyEvent,this.$el.find('.newStatValue')[0],this.$el.find('.newStatValue').val(),2);
	}

});