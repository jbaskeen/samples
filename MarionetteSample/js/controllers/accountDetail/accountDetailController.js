define(['marionette', 'views/accountDetail/accountDetailView', 'collections/accountDetail/accountCustomerDetailCollection'], 
function (Marionette, AccountDetailView, AccountCustomerDetailCollection) {
	
	var Controller = Marionette.Controller.extend({
	
		showAccountDetail : function() {
			//in a real app we would get the customerDetailData data from a back-end call
			var customerDetailData = [];
			customerDetailData.push({customerId: '1',customerNumberOfOrders: '16', customerName: 'Jane Johnson', customerAddressStreet: '234 Tall Street', 
				customerAddressState: 'FL', customerAddressZipCode: '32606'});
			customerDetailData.push({customerId: '2',customerNumberOfOrders: '2', customerName: 'Dara Dunes', customerAddressStreet: '455 Short Ave', 
				customerAddressState: 'FL', customerAddressZipCode: '32605'});
			customerDetailData.push({customerId: '3',customerNumberOfOrders: '6', customerName: 'Justin Ham', customerAddressStreet: '1234 Full Street', 
				customerAddressState: 'FL', customerAddressZipCode: '32606'});
			customerDetailData.push({customerId: '4',customerNumberOfOrders: '10', customerName: 'Nate Nice', customerAddressStreet: '1654 Block Blvd', 
				customerAddressState: 'FL', customerAddressZipCode: '32606'});
			customerDetailData.push({customerId: '5',customerNumberOfOrders: '4', customerName: 'Jane Smith', customerAddressStreet: '65665 Blunt Blvd', 
				customerAddressState: 'FL', customerAddressZipCode: '32601'});
			var accountCustomerDetailCollection = new AccountCustomerDetailCollection(customerDetailData);
			var view = new AccountDetailView({collection: accountCustomerDetailCollection});
			App.content.show(view);
		}
	
	});
	
	return Controller;
});