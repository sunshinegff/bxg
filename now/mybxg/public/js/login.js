define(['login','cookie'],function(){
	// 实现登录功能
	$('#loginBtn').click(function(){
        $.ajax({
            url: '/api/login',
            type: 'post',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function(data){
                // console.log(data);
                // 登陆成功，跳转链接
                if(data.code==200){
                	$.cookie('loginInfo',JSON.stringify(data.result),{
                		path: '/'
                	});
                    location.href='/main/index';
                }
            }
        });
        return false;
    });
});



