define(['backbone'], 
function (Backbone) {
	var AccountCustomerDetail = Backbone.Model.extend({
	 
	  defaults : {
	    "customerId" : "",
	    "customerNumberOfOrders" : "",
	    "customerName" : "",
	    "customerAddressStreet": "",
	    "customerAddressState": "",
	    "customerAddressZipCode": ""
	  }
	 
	});
	return AccountCustomerDetail;
});