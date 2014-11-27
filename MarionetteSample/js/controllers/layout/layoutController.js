define(['marionette', 'views/layout/loginView', 'views/layout/homeView'], 
function (Marionette, LoginView, HomeView) {

		var Controller = Marionette.Controller.extend({
		
		showLogin : function() {
			var view = new LoginView();
			App.content.show(view);
		},

		
		showHome : function() {
			var view = new HomeView();
			App.content.show(view);
		}

	});
		
		
	return Controller;

});