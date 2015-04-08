var CharacterSelectExistingView = Backbone.View.extend ({
	
	className: "panel panel-default",

	id: "characterSelectExistingContainer",

	template: templates.CharacterSelectExistingView,

	events: {
		"click #selectCharacter":"selectCharacter",
		"click #cancelSelectExistingCharacter":"cancelSelectExistingCharacter",
		"keyup select#character":"checkKey",
		"keypress select#character":"checkKey",
	},

	initialize: function(options) { //on initialization, the vent object gets passed in
  	this.vent = options.vent; //use the global event overwatch so we can send it events
  	this.render();
  },

	render: function () {
		this.$el.html(Mustache.to_html(this.template));
		this.collection.each(
      function (character) {this.addOption(character)},
      this
    );
    return this;
	},

	addOption: function(option) {
    var optionView = new CharacterSelectOptionView ({
      model: option,
      vent: vent
    });
    this.$el.find("select#character").append(optionView.render());
  },

	cancelSelectExistingCharacter: function() {
  	this.vent.trigger("selectCharacterCancelled");//trigger our event called cancelCreateCharacter (vent._events.cancelCreateCharacter[0]) with this model as the context. 
  	this.remove();
  },

  //hacky solution is to check both keypress and keyup for chrome, since enter doesn't fire keyup, and escape doesn't fire keypress
	checkKey: function(keyEvent) {
		if(keyEvent.keyCode == 13) {
			$('button#selectCharacter').click();
		}
		if(keyEvent.keyCode == 27) {
			$('#cancelSelectExistingCharacter').click();
		}
	},

  selectCharacter: function() {
  	var existingCharName = $('select#character').val();
		var existingChar = this.collection.findWhere({name:existingCharName});
		this.vent.trigger("characterSelected",existingChar);
		this.remove();		
	}

})