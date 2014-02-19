var DebugStatView = Backbone.View.extend({

	tagName: "tr",

	events: {
		"click button.logModel":"logModel",
		"click button.deleteModel":"killModel"
	},

	template: templates.DebugStatView,

	initialize: function(options) {
		this.listenTo(this.model, 'destroy', this.remove);
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template,
			{
				name:this.model.attributes.name,
				value:this.model.attributes.value,
				description:this.model.attributes.description,
				levelGained:this.model.attributes.levelGained,
				sourceName:this.model.attributes.source.attributes.name,
			}
		));
    return this;
	},

	killModel: function(){
		this.model.destroy();
	},

	logModel: function() {
		console.log(this.model);
	}

});