define(['jquery','template','cookie'],function($,template){
	// 控制左侧菜单的折叠和展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 实现退出功能
	// ndex中的退出，就是要清除服务器的session 用户信息
	// 接口文档中退出功能没有参数，这时利用sessionID
	// 第一次请求 sessionID在响应头中，之后的操作，sessionID传到请求头中
	// 退出功能利用sessionID，被删除
	// 刷新之后，没有sessionID
  $('#logoutBtn').click(function(){
    $.ajax({
      type : 'post',
      url : '/api/logout',
      dataType : 'json',
      success : function(data){
        if(data.code == 200){
          location.href = '/main/login';
        }
      }
    });
  });

  // 验证用户是否登陆了
  var flag = $.cookie('PHPSESSID');
  if(!flag && location.pathname != '/main/login'){
    location.href = '/main/login';
  }
  
  // 设置用户头像信息
  var loginInfo = $.cookie('loginInfo');
  loginInfo = loginInfo && JSON.parse(loginInfo);
  // 设置用户的头像信息
  // $('.aside .profile img').attr('src',loginInfo.tc_avatar);
  // $('.aside .profile h4').html(loginInfo.tc_name);
  var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
  var html = template.render(tpl,loginInfo);
  $('.aside .profile').html(html);
});







	