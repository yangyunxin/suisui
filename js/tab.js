/*
* @Author: yangyunxin
* @Date:   2016-03-26 12:13:50
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-26 13:39:53
*/

/**
 * 
 */
'use strict';
var Tab = (function ($) {
	function Tab (elem, eve, show_wrap) {
		this.elem = elem;
		this.eve = eve;
		this.show_wrap = show_wrap;
		this.init();
	}
	Tab.prototype = {
		constructor: Tab,
		init: function () {
			this.bindEvent();
		},
		bindEvent: function () {
			var that = this;
			this.elem.on(this.eve, function (e) {
				e.preventDefault();
				var $this = $(this);
				that._hander($this);
			});
		},
		_hander: function ($elem) {
			var $index = $elem.index(),
				$itemList = this.show_wrap,
				$itemIndex = this.show_wrap.eq($index);
			$itemList.hide();
			$itemIndex.show();
		}
	}
	return Tab;
})(jQuery, window);