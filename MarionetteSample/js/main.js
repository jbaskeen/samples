// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    paths: {
        // Major libraries
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/lodash/lodash', // alternative to underscore,
        backbone: 'libs/backbone/backbone',
        marionette : 'libs/backbone/backbone.marionette',
        fastclick: 'libs/fastclick/fastclick.min',
        modelbinder: 'libs/backbone/Backbone.ModelBinder.min',
        validation: 'libs/backbone/backbone-validation-amd-min',
        foundation: 'libs/foundation/foundation',
        "foundation.reveal": 'libs/foundation/foundation.reveal',
        
        // Require.js plugins
        text: 'libs/require/text',

        // Just a short cut so we can put our html outside the js dir
        // When you have HTML/CSS designers this aids in keeping them out of the js directory
        templates : '../templates',
        uuid: 'libs/uuid/uuid'
	},
	shim : {
        foundation: {
            deps: ["jquery"]
        },
        "foundation.reveal": {
            deps: ["foundation"]
        },
		fastclick: {
			exports : 'Fastclick'
		},
		underscore : {
	      exports : '_'
	    },
	    backbone : {
	      deps : ['jquery', 'underscore'],
	      exports : 'Backbone'
	    },
	    marionette : {
	        deps : ['jquery', 'underscore', 'backbone'],
	        exports : 'Marionette'
	    },
	    uuid: {
	    	exports: 'uuid'
	    },
	}

});


var appPromise = appInitDeferred.promise();

//main gets called below (bottom of module) in appPromise.done after wlCommonInit resolves the appDeferred
var main = function() {
	require(['jquery', 'backbone', 'marionette', 'router', 'routeController', 'fastclick', 'views/layout/modalView', 'uuid'], 
	function ($, Backbone, Marionette, AppRouter, Controller, Fastclick, Modal) {
		
		$(function() {
		    FastClick.attach(document.body);
		});
		// END Initialize plugins
		
		//////////////// SETTING UP MARIONETTE APPLICATION //////////////////////// 
		window.App = new Marionette.Application();

		App.addInitializer(function(options){
			Controller.initialize();
			var router = new AppRouter({controller: Controller});
			
			App.addRegions({
				"content": ".layout-container",
				"alertRegion": ".alert-container"
			});
			
			Backbone.history.start();
		});
			
		/**************************DEBUG******************************/	
		/**************************DEBUG******************************/	
		/**************************DEBUG******************************/	
		App._debug = false;
		/**************************DEBUG******************************/	
		/**************************DEBUG******************************/	
		/**************************DEBUG******************************/	
			
		App.navigate = function(route, options) {
			options || (options = {}); 
			Backbone.history.navigate(route, options);
		};

		/*
		 * This function is called once all initlization/setup code has executed.
		 */
		App._buildInterface = function() {
			var options = {};
			App.start(options);
		
			/* Device detection */
			App._device = {};
			App._device.isTablet = function () {
				if (document.documentElement.clientWidth >= 768) {
			       return true;
			    }
			    else {
					return false;
			    }
			};
			
			// Apply device-specific styles
			if (App._device.isTablet()) {
				$('html').addClass("tablet");
			}
		
			// Setting up custom back button
			App._backTrace = ["/home"];
			App._addBackTrace = function (link, reset) {
				if (reset) {
					App._backTrace = ["/home"];
				}
				if ( !(link === "/home" && reset) ) {
					App._backTrace.push(link);
				}
				$("html").attr("page", link);
			};
			
			App._goBack = function () {
				// Handle custom back history
				App._backTrace.pop();
				if (App._backTrace.length > 0) {
					var link = App._backTrace[App._backTrace.length - 1];
					App.navigate(link, {trigger: true});
					$("html").attr("page", link);
				} else {
					// navigator.app plugin may not be available in cordova. (ie: in Windows Phone 8)
					// If App plugin is not available, simply do nothing when final back button
					// location is reached. Otherwise, exit the app.
					if (navigator.app) {
						navigator.app.exitApp();
					}
				}
			};
			
			// Custom alerts
			App._alert = new Modal();
			App.alertRegion.show(App._alert);
			
			App.on("alert:show", function(options) {
				App._alert.show(options);
			});
			App.on("alert:hide", function() {
				App._alert.hide();
			});
			
		 };	
		 
		function setUpWLClient () {
			App._buildInterface();
		}

		// Call this at the end to ensure that allowUserInput() exists
		setUpWLClient();
	});	
};

window.$.when(appPromise).done(function() {
	main();
});
