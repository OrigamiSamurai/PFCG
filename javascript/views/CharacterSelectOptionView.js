var CharacterSelectOptionView = Backbone.View.extend({

  tagName: 'option',

  template: templates.CharacterSelectOptionView, //template for a character option

  initialize: function() {
    this.$el.attr("value",this.model.attributes.name);
    this.listenTo(this.model, 'destroy', this.remove); //if the model is destroyed, remove this view
    //this.render();//display as soon as it is created
  },

  render: function() {
    return this.$el.text(Mustache.to_html(this.template,this.model.attributes));//dump html from template into dropdown
  }
});