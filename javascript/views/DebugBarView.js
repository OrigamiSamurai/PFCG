var DebugBarView = Backbone.View.extend({
	id: "debugBar",

	template: templates.DebugBarView,

	events: {
		"click #debugBarTitle":"toggleShowHide"
	},

	initialize: function(options) {
		this.listenTo(this.model.attributes.stats,'add',this.render);
		this.listenTo(this.model.attributes.sources,'add',this.render);
		this.collapsed = false;
		this.render();
	},

	render: function() {
		this.$el.html(Mustache.to_html(this.template));

		this.model.attributes.stats.each(
			function(stat){
				var debugStatView = new DebugStatView({model:stat});
				this.$el.find('div#debugStatsContainer table').append(debugStatView.el);
			},
			this
		);
		this.model.attributes.sources.each(
			function(source){
				var debugSourceView = new DebugSourceView({model:source});
				this.$el.find('div#debugSourcesContainer table').append(debugSourceView.el);
			},
			this
		);
    return this;
	},

	toggleShowHide: function() {
		toggleAllExcept("#debugBar",".nocollapse",this.collapsed);
		 if (this.collapsed == true) {
		 	this.collapsed = false;
		 	console.log(this.$el);
		 	this.$el.find('.collapse').html(Mustache.to_html(templates.CollapseOpen));
		 }
		 else if (this.collapsed == false) {
		 	this.collapsed = true;
		 	this.$el.find('.collapse').html(Mustache.to_html(templates.CollapseClosed));
		 };
	}
});

//2DO: create interface to create new stats/sources