/*
* @Author: yangyunxin
* @Date:   2016-03-25 16:48:28
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-26 15:55:30
*/

'use strict';
$(function () {
	/*logo抖动动画*/
	var shakeLogo = new Shake($('.logo img'), 'mouseenter', '10');
	
	/*导航字体过渡*/
	$('.nav li').hover(function () {
		$(this).find('.word_wrap').stop().animate({"top": '-50px'});
	}, function () {
		$(this).find('.word_wrap').stop().animate({"top": '0px'});
	});

	 /*头部二维码特效*/
    $(".box_weixin").hover(function(){
    	$(this).stop().animate({
    		"height":"230px",
    		"width":"150px"
    	},500);
    },function(){
    		$(this).stop().animate({
    		"height":"15px",
    		"width":"30px"
    	},500);
    });

    /*
* @Author: weihuiying
* @Date:   2016-03-26
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-25 18:27:45
*/
// 固定部分
// 添加类
	$('.fix-side li').eq(0).addClass('qq');
	$('.fix-side li').eq(1).addClass('phone');
	$('.fix-side li').eq(2).addClass('weixin');
	$('.fix-side li').eq(3).addClass('top');
	// 侧栏
	$(".fix-side li").hover(function() {
		// $(this).children('.fix-slideIn').css('right', '40px');
		$(this).children('.fix-slideIn').stop().animate({right:'40px'},400);
		console.log($(this).index());
	}, function() {
		$(this).children('.fix-slideIn').stop().animate({right:'-165px'},200);
	});
	$(".fix-side li.top").click(function(event) {
		$('html,body').animate({scrollTop: 0}, 400);
	});
	// 底部
	$('.fix-footer button').click(function(event) {
		$('.fix-footer').fadeOut('400');
	});

});

