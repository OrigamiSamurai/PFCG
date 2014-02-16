var DebugSourceView = Backbone.View.extend({
	
	className: "debugSouceContainer",

	events: {
		"click button.logModel":"logModel"
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

	logModel: function() {
		console.log(this.model);
	}

});