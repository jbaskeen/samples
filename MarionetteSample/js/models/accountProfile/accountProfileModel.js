define(['backbone'], 
function (Backbone) {
	var AccountProfile = Backbone.Model.extend({
	 
	  defaults : {
	    "adminName" : "",
	    "companyName" : "",
	    "companyAddressStreet": "",
	    "companyAddressState": "",
	    "companyAddressZipCode": ""
	  }
	 
	});
	return AccountProfile;
});