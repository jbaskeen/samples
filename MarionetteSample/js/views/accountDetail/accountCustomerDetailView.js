define(['jquery', 'underscore', 'backbone', 'marionette', 'text!templates/accountDetail/accountCustomerDetailTemplate.html', 'views/accountDetail/accountCustomerItemView'], 
function ($, _, Backbone, Marionette, AccountCustomerDetailTemplate, AccountCustomerItemView) {

	var Layout = Backbone.Marionette.CollectionView.extend({

		template : _.template(AccountCustomerDetailTemplate),
		
		itemView : AccountCustomerItemView,
		
		itemViewContainer : ".customers",
		
		attributes : {
			"class": "accountCustomerDetail"
		},
		
		events : {
		}
		
	});
	
	return Layout;
});