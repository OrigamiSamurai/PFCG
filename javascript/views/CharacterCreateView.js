var CharacterCreateView = Backbone.View.extend ({

	id: "characterCreateContainer",

  template: templates.CharacterCreateView,

  events: {
  	"keyup #characterNewName":"submitName",
  	"click #createCharacter":"createCharacter",
  	"click #cancelCreateCharacter":"cancelCreateCharacter"
  },

  initialize: function(options) { //on initialization, the vent object gets passed in
  	this.vent = options.vent; //use the global event overwatch so we can send it events
  	this.render();
  },

  render: function () {
    this.$el.html(Mustache.to_html(this.template)); //populate html
    
    return this;
	},

  cancelCreateCharacter: function() {
  	this.vent.trigger("selectCharacterCancelled");//trigger our event called cancelCreateCharacter (vent._events.cancelCreateCharacter[0]) with this model as the context. 
  	this.remove();
  },

	createCharacter: function() {
		var newCharName = $('#characterNewName').val();
		
		var baseStats = new StatCollection();
		for (var i=0;i<abilityScoreNames.length;i++){
			baseStats.add(new Stat({name:abilityScoreNames[i],value:10}));
		};

		if (newCharName && newCharName != "") {
			var newChar = new Character({
				name: newCharName,
				stats: baseStats
			})
			this.collection.add(newChar);
			this.vent.trigger("characterSelected",newChar);//triggers an event and passes in newCharName as an argument. Additional arguments can be passed in if necessary
			this.remove();		
		}
		else {
			alert("There was an error trying to create character with name: "+newCharName);
		}
	},

	submitName: function(keyupEvent) {
		if(keyupEvent.which == 13) {
			$('#createCharacter').click();
		}
	}
	
});