define(['backbone', 'models/accountDetail/accountCustomerDetailModel'], 
function (Backbone, AccountCustomerDetailModel) {
	
	var AccountCustomerDetailCollection = Backbone.Collection.extend({
		
		model: AccountCustomerDetailModel
		
	});
	
	return AccountCustomerDetailCollection;
});