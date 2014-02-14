var CharacterSelectExistingView = Backbone.View.extend ({
	
	id: "characterSelectExistingContainer",

	template: templates.CharacterSelectExistingView,

	events: {
		"click #selectCharacter":"selectCharacter",
		"click #cancelSelectExistingCharacter":"cancelSelectExistingCharacter"
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

	cancelSelectExistingCharacter: function() {
  	this.vent.trigger("selectCharacterCancelled");//trigger our event called cancelCreateCharacter (vent._events.cancelCreateCharacter[0]) with this model as the context. 
  	this.remove();
  },

	addOption: function(option) {
    var optionView = new CharacterSelectOptionView ({
      model: option,
      vent: vent
    });
    this.$el.find("select#character").append(optionView.render());
  },

  selectCharacter: function() {
  	var existingCharName = $('select#character').val();
		var existingChar = this.collection.findWhere({name:existingCharName});
		this.vent.trigger("characterSelected",existingChar);
		this.remove();		
	}

})