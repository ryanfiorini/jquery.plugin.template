(function($){

	//this is my plugin template
	function RyanPlugin(el, options) {

		//Defaults:
		this.defaults = {
			defaultSetting1: 'yyy',
			defaultSetting2: 'zzz'
		};

		//Extending options:
		this.opts = $.extend({}, this.defaults, options);

		//Privates:
		this.$el = $(el);
		this.privateOne = 'aaa';
		this.privateTwo = 'bbb';
	}

	// Separate functionality from object creation
	RyanPlugin.prototype = {

		init: function() {
			var _this = this;
		},

		//ccc
		publicOne: function() {
			var _this = this;
		},

		//ddd
		publicTwo: function() {
			var _this = this;
		}
	};

	// The actual plugin
	$.fn.ryanPlugin = function(options) {
		if(this.length) {
			this.each(function() {
				var rev = new RyanPlugin(this, options);
				rev.init();
				$(this).data('ryanPlugin', rev);
			});
		}
	};
})(jQuery);