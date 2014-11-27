define(['jquery', 'underscore', 'backbone', 'marionette', 'modelbinder', 'text!templates/accountDetail/accountCustomerItemViewTemplate.html'], 
function ($, _, Backbone, Marionette, ModelBinder, AccountCustomerItemViewTemplate) {
	
	var ItemView = Backbone.Marionette.ItemView.extend({
		
		template : _.template(AccountCustomerItemViewTemplate),

		_modelBinder : undefined,
		
		initialize : function () {
			this._modelBinder = new ModelBinder();
		},
		
		attributes : {
			"class": "customerItem"
		},
		
		onRender : function() {
			this._modelBinder.bind(this.model,this.el);
		},
		
	});
	
	return ItemView;
	
});
