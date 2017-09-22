define(['jquery','template'],function($,template){
	// 调用接口获取所有的个人信息
	$.ajax({
		url: '/api/teacher/profile',
		type: 'get',
		dataType: 'json',
		success: function(data){
			// console.log(data);
			var html=template('settingsTpl',data.result);
			$('#settingsInfo').html(html);
		}
	});
	
});