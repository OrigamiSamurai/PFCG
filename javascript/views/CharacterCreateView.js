var CharacterCreateView = Backbone.View.extend ({

	id: "characterCreateContainer",

  template: templates.CharacterCreateView,

  events: {
  	"keyup #characterNewName":"checkKeyUp",
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

  checkKeyUp: function(keyupEvent) {
		if(keyupEvent.keyCode == 13) {
			$('#createCharacter').click();
		}
		if(keyupEvent.keyCode == 27) {
			$('#cancelCreateCharacter').click();
		}
	},

	createCharacter: function() {
		var newCharName = $('#characterNewName').val();

		if (newCharName && newCharName != "") {
			var newChar = new Character({name:newCharName});
			this.collection.add(newChar);
			this.vent.trigger("characterSelected",newChar);//triggers an event and passes in newCharName as an argument. Additional arguments can be passed in if necessary
			this.remove();		
		}
		else {
			alert("There was an error trying to create character with name: "+newCharName);
		}
	}
	
});