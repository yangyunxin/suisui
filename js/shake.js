/*
* @Author: yangyunxin
* @Date:   2016-03-25 11:47:05
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-25 18:24:50
* description 抖动插件
*/

'use strict';

function Shake (elem, e, range, callback) {
	this.elem = elem;
	this.range = range;
	this.event = e;
	this.init();
} 
Shake.prototype = {
	constructor: Shake,
	init: function () {
		this.bindEvent();
	},
	bindEvent: function () {
		var that = this;
		this.elem.on(this.event, function () {
			that._handler();
		});
	},
	_handler: function () {
		var that = this;
		that.elem.animate({"marginTop": -that.range + 'px', 'marginBottom': that.range + 'px'}, 100)
		.animate({"marginTop": -that.range/2 + 'px', 'marginBottom': that.range/2 + 'px'}, 100)
		.animate({"marginTop": -that.range + 'px', 'marginBottom': that.range + 'px'}, 100)
		.animate({"marginTop": -that.range/2 + 'px', 'marginBottom': that.range/2 + 'px'}, 100)
		.animate({"marginTop": '0px', "marginBottom": '0px'}, 100);
	}
}
