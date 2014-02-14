var Character = Backbone.Model.extend({
  defaults: {
  	name: "",
  	sources: new SourceCollection(),
  	stats: new StatCollection()
  }
});