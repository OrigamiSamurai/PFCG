var CreateStatView = Backbone.View.extend({
	
	id: "createStatView",

	events: {
		"click button.createStat":"createStat",
		"click button.cancelCreateStat":"cancelCreateStat"
	},

	template: templates.CreateStatView,

	initialize: function(options) {
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
		this.model.attributes.sources.each(
			function(source){
				this.$el.find('.chooseSourceContainer').append(Mustache.to_html(
					templates.ChooseSource,
					simpleClone(source.attributes,{cid:source.cid})
				))
			},
			this
		);
		this.model.attributes.stats.each(
			function(stat){
				this.$el.find('.chooseStatsContainer').append(Mustache.to_html(
					templates.ChooseStat,
					simpleClone(stat.attributes,{sourceName:stat.attributes.source.attributes.name,cid:stat.cid})
				))
			},
			this
		);
    return this;
	},

	cancelCreateStat: function() {
		this.remove();
	},

	createStat: function() {
		var textFieldValues = this.$el.find('input[type="text"]').map(function(){return $(this).val()});

		if ($.inArray("",textFieldValues) == -1 && $('input[name="chooseSource"]:checked').length == 1) {
			var affectsStatsCollection = new StatCollection();
			for (var i=0; i<$('input[name="chooseStats"]:checked').length;i++) {
				affectsStatsCollection.add(this.model.attributes.stats.get($('input[name="chooseStats"]:checked')[i].value))
			};

			var addingStat = new Stat({
					name:this.$el.find('.createStatName').val(),
					value:parseInt(this.$el.find('.createStatValue').val()),
					levelGained:parseInt(this.$el.find('.createStatLevelGained').val()),
					description:this.$el.find('.createStatDescription').val(),
					source:this.model.attributes.sources.get(this.$el.find('input[name="chooseSource"]:checked').val()),
					affectsStats: affectsStatsCollection,
					totalValue:0 //this will be updated as soon as the model is added to the character's stat collection
				})
			
			this.model.attributes.stats.add(addingStat);
		}
		else {
			alert("Please ensure a source is selected, and all text field values are non-empty.")
		}
	}

});