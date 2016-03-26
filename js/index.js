/*
* @Author: yangyunxin
* @Date:   2016-03-24 10:11:02
* @Last Modified by:   Administrator
* @Last Modified time: 2016-03-26 15:08:06
*/
$(function () {
	/* 线条动画 */
	$('.content_Box a').hover(function() {
		/*获取高度，因布局需要加上border*/
		var $contentAh = $(this).height() + 2;
		$(this)
		.find('.span_l').stop().animate({'height': $contentAh + 'px'},500).end()
		.find('.span_r').stop().animate({'height': $contentAh + 'px'},500).end()
		.find('.span_t').stop().animate({'width': '100%'},500).end()
		.find('.span_b').stop().animate({'width': '100%'},200).end()
		.animate({'color': '#000'}, 500);

	}, function() {
		$(this)
		.find('.span_l').stop().animate({'height': '0'},500).end()
		.find('.span_t').stop().animate({'width': '0'},500).end()
		.find('.span_r').stop().animate({'height': '0'},500).end()
		.find('.span_b').stop().animate({'width': '0'},500).end()
		.animate({'color': '#907755'}, 200);
	});

	EventCenter.on('reelDone', function () {
		/* 盒子动画 */
		$('.content_Box').show().animate({
			'top': '400px',
			'left': '55%' },
			1000, function() {
			/* callback */
		});
		$('.nav ul').show().animate({
			'left': 0},
			1000, function() {
			/* callback */
		});
	});

	/*卷轴效果*/	
	$('.content_left').animate({'width': '100%'}, 3000, function () {
		EventCenter.fire('reelDone');
		$('.reel_left')
		.queue("toLeft", function (next) {
			$('.reel_left ').animate({"left": '-140px'}, 2000);
			next();
		})
		.dequeue("toLeft")
		.delay(2000, 'tohide')
		.queue("tohide", function (next) {
			$('.reel_left ').hide('fast', function () {
				
			});
			next();
		})
		.dequeue("tohide");
	});
	$('.content_right').animate({'width': '100%'}, 3000, function () {
		$(".reel_right")
		.queue("toRight", function (next) {
			$('.reel_right ').animate({"right": '-140px'}, 2000)
			next();
		})
		.dequeue("toRight")
		.delay(2000, 'tohide')
		.queue("tohide", function (next) {
			$('.reel_right ').hide();
			next();
		})
		.dequeue("tohide");
	});
});	
