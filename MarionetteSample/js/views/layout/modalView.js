define(['jquery', 'underscore', 'backbone', 'marionette', 'text!templates/layout/modalTemplate.html', 'foundation.reveal'], 
function ($, _, Backbone, Marionette, modalTemplate) {
	
	var Layout = Backbone.Marionette.Layout.extend({

		template : _.template(modalTemplate),
		
		
		attributes : {
			"class": "reveal-modal"
		},
		
		events : {
		},
		
		options : {
			onClose : function() {}
		},
		
		onRender : function() {
			var thisLayout = this;
			
			// Initialize reveal plugin
			this.$el.foundation('reveal', {closeOnBackgroundClick:false});
			
			// Set up onClose event
			this.$el.on("closed.fndtn.reveal", function(event) {
				thisLayout.options.onClose();
			});
		},
		
		/**
		 * Show the alert. Pass in options to change alert settings
		 * options = {
		 * 		title: string
		 * 		message: string
		 * 		warning: boolean // default false. If true, display warning icon
		 * 		onClose: function // runs after the alert is closed
		 * 		buttons: [{
		 * 			title: string
		 * 			onclick: function
		 * 			hideOnClick: boolean // default true
		 * 		}]
		 * }
		 * 
		 * If options is just a string rather than an object, it will be used as the message.
		 */
		show : function (options) {
			var thisLayout = this;
			
			// If just a string is passed in, use it as the message
		    if (typeof options === 'string') {
		    	var message = options;
		    	options = {
		    		message: message
		    	};		    	
		    }
			
			// Clear all sections and reset onClose
		    this.$el.removeClass('warning');
			this.$(".title").empty();
			this.$(".message").empty();
			this.$("div.button-section").empty();
			this.resetOnClose();
			
			// Show warning icon
			if (options.warning === true) {
			    this.$el.addClass('warning');
			}
			
			// Set onClose
			if (typeof options.onClose === "function") {
				this.setOnClose = options.onClose;
			}
			
			// If there are no buttons, add an ok button to close the modal
			if (options.buttons === undefined) {
				options.buttons = [{title: "Ok"}];
			}
			
			// Add buttons
			if (options.buttons !== undefined) {
				$.each(options.buttons, function (i, button) {
					var buttonEl = $("<div class='button'>"+button.title+"</div>")
						.click(function() {
							if (button.onclick !== undefined) {
								button.onclick();
							}
							// By default all buttons will hide the modal
							// unless hideOnClick is false
							if (button.hideOnClick !== false) {
								thisLayout.hide();
							}
						});
						
					thisLayout.$("div.button-section").append(buttonEl);
				});
			}
			
			// Set title and message
			if (options.title !== undefined) {
				this.$(".title").text(options.title);
			}
			if (options.message !== undefined) {
				this.$(".message").text(options.message);
			}
			
			this.$el.foundation('reveal', 'open');
		},
		
		hide : function () {
			this.$el.foundation('reveal', 'close');
		},
		
		setOnClose : function (onClose) {
			this.options.onClose = onClose;
		},
		
		resetOnClose : function () {
			this.options.onClose = function(){};
		}
	
	});
	
	return Layout;
});