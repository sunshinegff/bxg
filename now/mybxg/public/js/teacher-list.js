define(['jquery','template'],function($,template){
	// 调用后台接口获取数据
	$.ajax({
		type: 'get',
		url: '/api/teacher',
		dataType: 'json',
		success: function(data){
			// 解析数据，渲染页面
			var teacherHtml=template('teacherTpl',{list:data.result});
			$('#teacherInfo').html(teacherHtml);
		}
	})
});