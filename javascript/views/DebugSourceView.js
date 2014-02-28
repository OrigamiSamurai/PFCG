var DebugSourceView = Backbone.View.extend({
	
	tagName: "tr",

	events: {
		"click button.logModel":"logModel",
		"click button.deleteModel":"killModel"
	},

	template: templates.DebugSourceView,

	initialize: function(options) {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,this.model.attributes));
    return this;
	},

	killModel: function(){
		this.model.destroy();
	},

	logModel: function() {
		if (window.console) {console.log(this.model)};
	}

});