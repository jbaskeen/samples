define(['jquery', 'underscore', 'backbone', 'marionette', 'text!templates/accountProfile/accountProfileTemplate.html'], 
function ($, _, Backbone, Marionette, accountProfileTemplate) {

	var Layout = Backbone.Marionette.Layout.extend({

		template : _.template(accountProfileTemplate),
		
		initialize: function(){
			this.options = this.model;
		},
		
		options: {
		},
		
		templateHelpers: function(){
			return this.options;
		},
		
		attributes : {
			"class": "accountProfile"
		},
		
		events : {
			"click .home" : "goBackToHome"
		},
		
		goBackToHome : function(){
			App.trigger("layout:home");
		}
		
	});
	
	return Layout;
});
