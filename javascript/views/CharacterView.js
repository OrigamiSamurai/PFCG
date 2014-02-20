var CharacterView = Backbone.View.extend({
	
	events: {
		"keyup #characterName input":"updateCharacterName"
	},

	id: "characterView",

	template: templates.CharacterView,

	initialize: function(options) {
		_.bindAll(this,"changeCharacter");
		options.vent.bind("changeCharacter", this.changeCharacter);
		_.bindAll(this,"createToolTip");
		options.vent.bind("createToolTip", this.createToolTip);

		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
		
		var abilityScoresView = new AbilityScoresView({collection:this.model.attributes.stats, vent:vent});
		this.$el.append(abilityScoresView.el);
		var raceSelectView = new RaceSelectView({model:this.model,vent:vent});
		this.$el.append(raceSelectView.el);
		
		var debugView = new DebugView({model:this.model,vent:vent});
		this.$el.append(debugView.el)
		$('body').append(this.$el);
    
		//select all on click name input
    $("#characterName input").on("click", function() {
   		$(this).select();
		});
    
    //populate race UI
		if (this.model.attributes.sources.where({name:"Race"}).length > 0) {
			$('input[name="race"][value="'+this.model.attributes.sources.where({name:"Race"})[0].attributes.description+'"]').prop('checked',true);
			$('#racePreview').text("Race: "+this.model.attributes.sources.where({name:"Race"})[0].attributes.description);
		};
    return this;
	},

	changeCharacter: function() {
		this.remove();
	},

	createToolTip: function(view) {
		var toolTipView = new ToolTipView({
			collection:this.model.attributes.stats.getAffectedByStats(view.model),
			vent:vent
		});
		view.$el.children().first().append(toolTipView.el);
		view.$el.find('.toolTipContainer').css({left:view.$el.position().left+30,top:view.$el.position().top+30});
	},

	updateCharacterName: function(keyUp) {
		if (keyUp.keyCode == 13) {
			$('#characterName input').blur();	
		}
		this.model.set({name:$('#characterName input').val()});
	}

});