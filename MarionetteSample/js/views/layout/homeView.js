define(['jquery', 'underscore', 'backbone', 'marionette', 'text!templates/layout/homeTemplate.html'], 
function ($, _, Backbone, Marionette, homeTemplate) {

	var Layout = Backbone.Marionette.Layout.extend({

		template : _.template(homeTemplate),
		
		attributes : {
			"class": "homeView"
		},
		
		events : {
			"click .modal-trigger": "openModal",
			"click .accountDetails" : "openAccountDetails",
			"click .accountProfile" : "openAccountProfile",
			"click .logout" : "logout"
		},
		
		openModal : function() {
			App.trigger("alert:show", {
				title: "Test Modal",
				message: "This is a test."
			});
			
		},
		
		openAccountDetails : function(){
			App.trigger("account:details");
		},
		
		openAccountProfile: function(){
			App.trigger("account:profile");
		},
		
		logout: function(){
			App.trigger("layout:login");
		}
		
	});
	
	return Layout;
});