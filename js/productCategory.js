/*
* @Author: yangyunxin
* @Date:   2016-03-26 10:24:17
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-26 14:08:53
*/

'use strict';
/*导航菜单效果*/
$('.category_center li').hover(function() {
	$(this)
	.find('.cate_des i').stop().animate({"background-position-y": "0px"}, 500).end()
	.find('.cate_des p').css("color","#ffffff").end()
	.stop().animate({"top": "0px", "background-color": "#200e02"}, 500);
}, function() {
	$(this)
	.find('.cate_des i').stop().animate({"background-position-y": "-46px"}, 500).end()
	.find('.cate_des p').css("color","#272636").end()
	.stop().animate({"top": "-22px", "background-color": "#ffd012"}, 500);
});

/*地址右侧效果*/
$(".shop_address li").hover(function() {
	$(this)
	.find('.map_bg').stop().animate({"right": "0px"}, 500);
}, function() {
	$(this).find('.map_bg').stop().animate({"right": "-475px"}, 500);
});

/*tab切换效果 模拟ajax*/
var tab = new Tab($('.category_center li'), 'click', $('.foods_list'));

/*下拉框*/
$('.common_select').on('click', function () {
	var $this = $(this);
	$this.find('ul').slideToggle();
	$('.common_select').find('ul li').click(function(event) {
		$(this).parents('.common_select').find('p').text($(this).text());
	});
});