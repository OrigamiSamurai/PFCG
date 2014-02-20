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
		this.minBaseStat = 0;
		this.maxBaseStat = 50;
		this.vent = options.vent;
		this.listenTo(this.model,'change',this.updateTotalValue);
		_.bindAll(this,"createToolTip");
		_.bindAll(this,"removeToolTip");

		this.$el.attr("id", this.model.attributes.name.toLowerCase()+"ScoreContainer");
		this.render();
		_.bindAll(this,'updateStat');
	},

	render: function() {
		this.$el.html(Mustache.to_html(
			this.template,
			simpleClone(this.model.attributes,{minBaseStat:this.minBaseStat,maxBaseStat:this.maxBaseStat})
		));
    return this;
	},

	createToolTip: function() {
		this.vent.trigger("createToolTip",this);
	},

	removeToolTip: function() {
		this.vent.trigger("removeToolTip",this);
	},

	updateStat: function(keyEvent) {
		//check for empty field
		//2DO: add validation to rollxdy fields similar to update ability score validation
		if (this.$el.find('.newStatValue').val() == "") {
			this.model.set({value:0})
		}
		else{
			if (validateInRange(this.$el.find('.newStatValue').val(),this.minBaseStat,this.maxBaseStat)) {
				this.model.set({value:parseInt(this.$el.find('.newStatValue').val())})
			}
			else {
				if (this.$el.find('.newStatValue').val() > this.maxBaseStat) {
					alert("The maximum value for this field is "+this.maxBaseStat+".");
					this.$el.find('.newStatValue').val(this.maxBaseStat);
					this.model.set({value:parseInt(this.$el.find('.newStatValue').val())})
				}
				else {
					alert("The minimum value for this field is "+this.minBaseStat+".");
					this.$el.find('.newStatValue').val(this.minBaseStat);
					this.model.set({value:parseInt(this.$el.find('.newStatValue').val())})
				};
			};
		};
	},

	updateTotalValue: function() {
		this.$el.find('.abilityScoreTotalValue').html(this.model.attributes.totalValue);
	},

	validateInput: function(keyEvent) {
		validatePositiveIntegerInput(keyEvent);
		validateLength(keyEvent,this.$el.find('.newStatValue')[0],this.$el.find('.newStatValue').val(),2);
	}

});