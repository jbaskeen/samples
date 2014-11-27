define([], function() {

	return {
		initialize : function() {
			
			//Go back
			App.on("navigate:back", function() {
				App._goBack();
			});
			
			//Layout
			App.on("layout:login", function() {
				require(['controllers/layout/layoutController'], function(LayoutController) {
					var controller = new LayoutController();
					App.navigate("");
					controller.showLogin();
				});
			});
			
			App.on("layout:home", function() {
				require(['controllers/layout/layoutController'], function(LayoutController) {
					var controller = new LayoutController();
					App.navigate("/home");
					App._addBackTrace("/home", true);
					controller.showHome();
				});
			});
			
			//Account
			App.on("account:details", function() {
				require(['controllers/accountDetail/accountDetailController'], function(AccountDetialController) {
					var controller = new AccountDetialController();
					App.navigate("/accountDetial");
					App._addBackTrace("/accountDetial", true);
					controller.showAccountDetail();
				});
			});

			App.on("account:profile", function() {
				require(['controllers/accountProfile/accountProfileController'], function(AccountProfileController) {
					var controller = new AccountProfileController();
					App.navigate("/accountProfile");
					App._addBackTrace("/accountProfile", true);
					controller.showAccountProfile();
				});
			});

		}
	};
});