var CharacterSelectView = Backbone.View.extend ({

  id: 'characterSelectContainer',

  template: templates.CharacterSelectView,

  events: {
    "click #createNewCharacter":"createNewCharacter",
    "click #selectExistingCharacter":"selectExistingCharacter",
    "click #cancelCreateCharacter":"cancelCreateCharacter",
    "click #changeCharacter":"changeCharacter"
  },

  initialize: function(options) { //include vent:vent in options to include custom event handler
    _.bindAll(this, "selectCharacterCancelled"); //binds this object's "cancelCreateCharacter" function to use this View as "this"
    _.bindAll(this, "selectCharacter");//binds context of buildCharacter() to this view
    options.vent.bind("selectCharacterCancelled", this.selectCharacterCancelled);
      //options.vent is just the vent object (copy of Backbone events). 
      //Here we create an event called cancelCreateCharacter in vent._events
      //it's stored in an array under vents._events.cancelCreateCharacter array
      //the first object in the array holds the callback, which is the newly bound cancelCreateCharacter of this view which uses the view as the context
    options.vent.bind("characterSelected", this.selectCharacter);

    this.listenTo(this.collection,'add',this.addOption); //if a character is added to the collection, create a view (option renders automatically)
    this.listenTo(this.collection,'remove',this.removeOption); //if a character is removed from the collection, re-render to get rid of option

    this.vent = options.vent;

    this.render()
  },

	render: function () {
    this.$el.html(Mustache.to_html(this.template));
    $('body').append(this.$el);
    return this;
	},

  changeCharacter: function() {
    this.vent.trigger("changeCharacter");
    this.toggleButtons([true,true,false]);
  },

  createNewCharacter: function() {
    //enable the create view
    var characterCreateView = new CharacterCreateView({collection:this.collection, vent:vent});
    this.toggleButtons([false,false,false]);
    $('body').append(characterCreateView.el);
    $('#characterNewName').focus();
  },

  selectCharacterCancelled: function(){
    this.toggleButtons([true,true,false]);
    this.$el.find("#createNewCharacter").focus();
  },

  selectCharacter: function(selectedChar) {
    this.toggleButtons([false,false,true]);
    var characterView = new CharacterView ({model:selectedChar, vent:vent})
  },

  selectExistingCharacter: function() {
    var characterSelectExistingView = new CharacterSelectExistingView({collection:this.collection, vent:vent});
    this.toggleButtons([false,false,false]);
    this.$el.append(characterSelectExistingView.el);
    $('select#character').focus();
  },
  
  toggleButtons: function(flags) {
    var buttons = [
      this.$el.find('button#createNewCharacter'),
      this.$el.find('button#selectExistingCharacter'),
      this.$el.find('button#changeCharacter')
    ]

    for (var i=0; i<buttons.length; i++) {
      if (flags[i] == true) {
        buttons[i].show();
      }
      else if (flags[i] == false) {
        buttons[i].hide();
      }
      else {
        throw "Invalid input to toggleButtons."
      };
    };
  }

});