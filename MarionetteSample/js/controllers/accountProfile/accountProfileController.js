define(['marionette', 'views/accountProfile/accountProfileView', 'models/accountProfile/accountProfileModel'], 
function (Marionette, AccountProfileView, AccountProfileModel) {
	
	var Controller = Marionette.Controller.extend({
	
		showAccountProfile : function() {
			//in a real app we would get the sampleAccount data from a back-end call
			var sampleAccountData = {
			    adminName : "Joe Shmoe",
			    companyName : "Joe's Plumbing",
			    companyAddressStreet: "123 Nowhere Street",
			    companyAddressState: "FL",
			    companyAddressZipCode: "32606"
			};
			var model = new AccountProfileModel(sampleAccountData);
			var view = new AccountProfileView({model: model});
			App.content.show(view);
		}
	
	});
	
	return Controller;
});