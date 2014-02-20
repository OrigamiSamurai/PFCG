var CreateStatView = Backbone.View.extend({
	
	id: "createStatView",

	events: {
		"click button.createStat":"createStat"
	},

	template: templates.CreateStatView,

	initialize: function(options) {
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
		//for each source, append a div with a source listed
		this.model.attributes.sources.each(
			function(source){
				this.$el.find('.chooseSourceContainer').append(Mustache.to_html(
					templates.ChooseSource,
					{
						name:source.attributes.name,
						description:source.attributes.description,
						levelGained:source.attributes.levelGained,
						cid:source.cid
					}
				))
			},
			this
		);
		this.model.attributes.stats.each(
			function(stat){
				this.$el.find('.chooseStatsContainer').append(Mustache.to_html(
					templates.ChooseStat,
					{
						name: stat.attributes.name,
						description: stat.attributes.description,
						levelGained: stat.attributes.levelGained,
						sourceName: stat.attributes.source.attributes.name,
						cid: stat.cid
					}
				))
				//find way to select a stat by more than just the value of the radio button
			},
			this
		);
    return this;
	},

	createStat: function() {
		var affectsStatsCollection = new StatCollection();
		for (var i=0; i<$('input[name="chooseStats"]:checked').length;i++) {
			affectsStatsCollection.add(this.model.attributes.stats.get($('input[name="chooseStats"]:checked')[i].value))
		};

		var addingStat = new Stat({
				name:this.$el.find('.createStatName').val(),
				value:parseInt(this.$el.find('.createStatValue').val()),
				levelGained:parseInt(this.$el.find('.createStatLevelGained').val()),
				description:this.$el.find('.createStatDescription').val(),
				source:this.model.attributes.sources.get(this.$el.find('input[name="chooseSource"]').val()),
				affectsStats: affectsStatsCollection,
				totalValue:0 //this will be updated as soon as the model is added to the character's stat collection
			})
		
		this.model.attributes.stats.add(addingStat);
	}

});

//2DO: add functionality to actually create a stat to this view/template