define(['jquery', 'underscore', 'backbone', 'marionette', 'text!templates/accountDetail/accountDetailTemplate.html', 'views/accountDetail/accountCustomerDetailView'], 
function ($, _, Backbone, Marionette, AccountDetailTemplate, AccountCustomerDetailView) {

	var Layout = Backbone.Marionette.Layout.extend({

		template : _.template(AccountDetailTemplate),
		
		attributes : {
			"class": "accountDetail"
		},
		
		regions : {
			"CustomerDetailRegion": ".accountCustomerList"
		},
		
		events : {
			"click .home" : "goBackToHome"
		},
		
		goBackToHome : function(){
			App.trigger("layout:home");
		},
		
		onRender : function(){
			var accountCustomerDetailView = new AccountCustomerDetailView({collection: this.collection});
			this.CustomerDetailRegion.show(accountCustomerDetailView);
		}
		
	});
	
	return Layout;
});
