// Filename: router.js
define([ "marionette" ], function(Marionette) {
	var AppRouter = Backbone.Marionette.AppRouter.extend({

		routeTriggers: {
			'login': 'layout:login',
			'home': 'layout:home',
			'accountDetails' : 'account:details',
			'accountProfile' : 'account:profile',
			'*path': 'layout:login' // if login is enabled (i.e. actual login, not just a faux login), comment this out
			//'*path': 'layout:home' // if login is enabled, uncomment this line, else make sure it's commented
		},
		
		
		initialize: function() {
			"use strict";
			var router = this;
			var routeNames = _.keys(router.routeTriggers).reverse(); // Backbone requires reverted order of routes

			_.each(routeNames, function(route) {
				var trigger = router.routeTriggers[route];

				router.route(route, trigger, function() {
					//convert arguments to native js array
					var args = Array.prototype.slice.call(arguments, 0);
					//prepend the trigger name
					args.unshift(trigger);
					App.trigger.apply(App, args);
				});

			});
		}
	});

	return AppRouter;
});
