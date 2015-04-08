var CreateSourceView = Backbone.View.extend({
	
	id: "createSourceView",

	events: {
		"click button.createSource":"createSource",
		"click button.cancelCreateSource":"cancelCreateSource"
	},

	template: templates.CreateSourceView,

	initialize: function(options) {
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));
		return this;
	},

	cancelCreateSource: function() {
		this.remove();
	},

	createSource: function() {
		var textFieldValues = this.$el.find('input[type="text"]').map(function(){return $(this).val()});

		if ($.inArray("",textFieldValues) == -1) {
			var addingSource = new Source({
				name:this.$el.find('.createSourceName').val(),
				levelGained:parseInt(this.$el.find('.createSourceLevelGained').val()),
				description:this.$el.find('.createSourceDescription').val(),
			})
			this.model.attributes.sources.add(addingSource);
		}
		else {
			alert("Please ensure all fields are filled out.");
		};
	}

});