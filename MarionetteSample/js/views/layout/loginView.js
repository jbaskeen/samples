define(['jquery', 'underscore', 'backbone', 'marionette', 'text!templates/layout/loginTemplate.html'], 
function ($, _, Backbone, Marionette, loginTemplate) {

	var Layout = Backbone.Marionette.Layout.extend({
		
		template : _.template(loginTemplate),
		
		attributes : {
			"class": "loginView"
		},
		
		events : {
			"click .button#login": "login",
			"keypress" : "checkForEnterKeyPress"
		},
		
		checkForEnterKeyPress : function(e){
			var myself = this;
			if(e.which == 13){
				myself.login();
			}
		},
		
		login : function () {
			var userName = this.$('#username').val();
			var userPassword = this.$('#password').val();
			if(userName == "user" && userPassword == "password"){
				App.trigger("alert:show", {
					title: "Login Success",
					message: "Welcome to the sample!",
					buttons: [{
						title: 'Ok',
						onclick : function(){
							App.trigger("layout:home");
						},
						hideOnClick: true
					}]
				});
			}else{
				App.trigger("alert:show", {
					title: "Login Error",
					message: "Incorrect Username or Password"
				});
			}
		}  
		
	});
	
	return Layout;
});