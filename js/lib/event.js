/*
* @Author: yangyunxin
* @Date:   2016-03-25 09:58:51
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-25 18:23:00
* @description 事件中心，对事件进行解耦
*/

'use strict';

var EventCenter = (function () {
	var events = {};
	function on(evt, handler) {
		events[evt] = events[evt] || [];
		events[evt].push(handler);
	}
	function fire(evt){
		if (!events[evt]) {
			return;
		}
		for (var i = 0; i < events[evt].length; i++) {
			events[evt][i]([].slice.call(arguments, 1));
		}
	}
	return {
		on: on,
		fire: fire
	}
})();


