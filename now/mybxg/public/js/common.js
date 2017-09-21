define(['jquery'],function($){
	// 控制左侧菜单的折叠和展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
})


	