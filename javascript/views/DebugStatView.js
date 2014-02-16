var DebugStatView = Backbone.View.extend({
	
	className: "debugStatContainer",

	events: {
		"click button.logModel":"logModel"
	},

	template: templates.DebugStatView,

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